const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { sendPaymentNotification, sendFirstLotCompletedNotification, sendTestNotifications } = require('./notification-helper');
require('dotenv').config();

const config = require('./config');
const DB = require('./db-layer');

const app = express();
const PORT = process.env.PORT || 5000;

function isMockInterviewComingSoon() {
  return config.features.MOCK_INTERVIEW_COMING_SOON;
}

function isStudyBotComingSoon() {
  return config.features.STUDY_BOT_COMING_SOON;
}

function mockInterviewComingSoonPayload() {
  if (!isMockInterviewComingSoon()) return { comingSoon: false };
  return {
    comingSoon: true,
    message: 'AI Mock Interview is coming soon. All course modules and projects are available now.'
  };
}

function studyBotComingSoonPayload() {
  if (!isStudyBotComingSoon()) return { comingSoon: false };
  return {
    comingSoon: true,
    message: config.features.AI_COMING_SOON_MESSAGE
  };
}

function blockMockInterviewIfComingSoon(req, res, next) {
  if (isMockInterviewComingSoon()) {
    return res.status(503).json({
      error: 'AI Mock Interview is coming soon.',
      ...mockInterviewComingSoonPayload()
    });
  }
  next();
}

function blockStudyBotIfComingSoon(req, res, next) {
  if (isStudyBotComingSoon()) {
    return res.status(503).json({
      error: config.features.AI_COMING_SOON_MESSAGE,
      ...studyBotComingSoonPayload()
    });
  }
  next();
}

const FIRST_LOT_FLAG = path.join(__dirname, 'data', 'first-lot-notified.json');

function ensureDataDir() {
  const dir = path.join(__dirname, 'data');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function isFirstLotNotified() {
  try {
    if (fs.existsSync(FIRST_LOT_FLAG)) {
      const data = JSON.parse(fs.readFileSync(FIRST_LOT_FLAG, 'utf8'));
      return !!data.notified;
    }
  } catch (e) { /* ignore */ }
  return false;
}

function markFirstLotNotified(count, limit) {
  ensureDataDir();
  fs.writeFileSync(FIRST_LOT_FLAG, JSON.stringify({
    notified: true,
    count,
    limit,
    at: new Date().toISOString()
  }, null, 2));
}

async function maybeNotifyFirstLotComplete() {
  if (isFirstLotNotified()) return;
  const limit = parseInt(process.env.LIMITED_SEATS || String(config.payment.LIMITED_SEATS || 54), 10);
  const count = await DB.enrollments.countCompleted();
  if (count >= limit) {
    const revenue = await DB.enrollments.getCompletedRevenue();
    await sendFirstLotCompletedNotification({ count, limit, revenue });
    markFirstLotNotified(count, limit);
  }
}

// Middleware
const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many login attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5000',
  credentials: true
}));
app.use(express.json());

const audioUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 }
});

// ==================== ADMIN ACCESS SECURITY ====================
app.get('/admin-login.html', (req, res) => {
  res.redirect('/student-login.html');
});

app.get('/secure-admin', (req, res) => {
  res.sendFile(__dirname + '/admin-login.html');
});

app.get('/learning-data.json', (req, res) => {
  res.sendFile(__dirname + '/learning-data.json');
});

// ==================== AUTH MIDDLEWARE ====================
function verifyJwt(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}

async function registerUserSession(userId, token, meta = {}) {
  await DB.sessions.upsert(userId, {
    session_token: token,
    device_fp: meta.device_fp || '',
    device_type: meta.device_type || 'Desktop',
    user_agent: (meta.user_agent || '').substring(0, 200)
  });
}

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access token required' });

    const user = await verifyJwt(token);
    req.user = user;
    req.token = token;

    const block = await DB.blockedUsers.check(user.id);
    if (block?.blocked) {
      return res.status(403).json({ error: 'Account suspended. Contact support@morphedtechai.com' });
    }

    if (user.role !== 'admin') {
      const active = await DB.sessions.isTokenActive(user.id, token);
      if (!active) {
        return res.status(401).json({
          error: 'Logged in on another device. Only one active session is allowed.',
          code: 'SESSION_REPLACED'
        });
      }
    }
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

const authenticateAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });
  next();
};

// ==================== AUTH ROUTES ====================
app.post('/api/auth/register', authLimiter, async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'Name, email, and password are required' });

    // Server-side validation
    if (name.trim().length < 3) return res.status(400).json({ error: 'Name must be at least 3 characters' });
    if (!/^[A-Za-z\s]+$/.test(name.trim())) return res.status(400).json({ error: 'Name should contain only letters' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return res.status(400).json({ error: 'Please enter a valid email address' });
    if (phone) {
      const phoneClean = phone.replace(/[\s\-\+]/g, '');
      if (phoneClean.length < 10 || !/^\d{10,13}$/.test(phoneClean)) return res.status(400).json({ error: 'Please enter a valid phone number' });
    }
    if (password.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters' });
    if (!/[A-Z]/.test(password)) return res.status(400).json({ error: 'Password must contain at least 1 uppercase letter' });
    if (!/[0-9]/.test(password)) return res.status(400).json({ error: 'Password must contain at least 1 number' });

    const existing = await DB.users.findByEmail(email);
    if (existing) return res.status(400).json({ error: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await DB.users.create({ name: name.trim(), email: email.trim().toLowerCase(), password: hashedPassword, phone: phone || '' });

    // No syllabus access on registration — only hardcoded free topics (Joins, Aggregations, Lists, Dicts)
    const token = jwt.sign({ id: user.id, email: email.trim().toLowerCase(), role: 'student' }, process.env.JWT_SECRET, { expiresIn: '7d' });
    await registerUserSession(user.id, token, {
      device_fp: req.body.device_fp,
      device_type: req.body.device_type,
      user_agent: req.headers['user-agent']
    });
    res.json({ message: 'Registration successful', token, user: { id: user.id, name: name.trim(), email, role: 'student' } });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/login', authLimiter, async (req, res) => {
  try {
    const { email, password, device_fp, device_type } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });

    const user = await DB.users.findByEmail(String(email).trim().toLowerCase());
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    if (user.role !== 'admin') {
      await registerUserSession(user.id, token, {
        device_fp,
        device_type,
        user_agent: req.headers['user-agent']
      });
    }
    res.json({ message: 'Login successful', token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/auth/me', authenticateToken, async (req, res) => {
  try {
    const user = await DB.users.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.post('/api/auth/onboarding', authenticateToken, async (req, res) => {
  try {
    const { target_role, experience_level, learning_pace } = req.body;
    await DB.users.updateOnboarding(req.user.id, { target_role, experience_level, learning_pace });
    res.json({ message: 'Onboarding completed successfully' });
  } catch (error) { res.status(500).json({ error: 'Failed to save onboarding data' }); }
});

// ==================== ENROLLMENT ROUTES ====================
app.get('/api/enrollment/status', authenticateToken, async (req, res) => {
  try {
    if (req.user.role === 'admin') return res.json({ enrolled: true, paid: true, enrollment: { user_id: req.user.id, payment_status: 'completed', content_access_granted: 1 } });
    const enrollment = await DB.enrollments.findByUserId(req.user.id);
    if (enrollment && enrollment.content_access_granted === null) enrollment.content_access_granted = 1;
    res.json({ enrolled: !!enrollment, paid: enrollment?.payment_status === 'completed', enrollment: enrollment || null });
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.post('/api/enrollment/create', authenticateToken, async (req, res) => {
  try {
    const { paymentMethod } = req.body;
    const amount = process.env.COURSE_PRICE;
    const result = await DB.enrollments.create(req.user.id, amount, paymentMethod);
    res.json({ message: 'Enrollment created', enrollmentId: result.id, amount, upiId: process.env.UPI_ID, upiName: process.env.UPI_NAME });
  } catch (error) { res.status(500).json({ error: 'Enrollment creation failed' }); }
});

app.post('/api/enrollment/confirm-payment', authenticateToken, async (req, res) => {
  try {
    const { enrollmentId, transactionId } = req.body;
    if (!transactionId) return res.status(400).json({ error: 'Transaction ID is required' });

    const result = await DB.enrollments.confirmPayment(enrollmentId, req.user.id, transactionId);
    if (result.changes === 0) return res.status(404).json({ error: 'Enrollment not found' });

    await DB.syllabusAccess.grantAllPaidModules(req.user.id);

    const user = await DB.enrollments.getUserForNotification(enrollmentId);
    if (user) {
      sendPaymentNotification({ studentName: user.name, studentEmail: user.email, phone: user.phone, amount: user.payment_amount, transactionId, status: 'completed' }).catch(() => {});
    }
    maybeNotifyFirstLotComplete().catch(() => {});
    res.json({ message: 'Payment confirmed successfully! You now have access to all courses.', success: true });
  } catch (error) { res.status(500).json({ error: 'Payment confirmation failed' }); }
});

app.get('/api/enrollment/receipt/:enrollmentId', authenticateToken, async (req, res) => {
  try {
    const receipt = await DB.enrollments.getReceipt(req.params.enrollmentId, req.user.id);
    if (!receipt) return res.status(404).json({ error: 'Receipt not found' });
    res.json(receipt);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/enrollment/certificate', authenticateToken, async (req, res) => {
  try {
    const enrollment = await DB.enrollments.getCertificate(req.user.id);
    if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
    if (!enrollment.course_completed) return res.status(403).json({ error: 'Course not completed yet', completed: false });
    res.json({ name: enrollment.name, course: enrollment.course_name, completedDate: enrollment.payment_date, certificateIssued: enrollment.certificate_issued });
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

// ==================== ADMIN ROUTES ====================
app.get('/api/admin/students', authenticateToken, authenticateAdmin, async (req, res) => {
  try { res.json(await DB.users.getAllStudents()); }
  catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.put('/api/admin/students/:id', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const r = await DB.users.update(req.params.id, { name, email, phone });
    if (r.changes === 0) return res.status(404).json({ error: 'Student not found' });
    res.json({ message: 'Student updated successfully' });
  } catch (error) { res.status(500).json({ error: 'Update failed' }); }
});

app.delete('/api/admin/students/:id', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const r = await DB.users.delete(req.params.id);
    if (r.changes === 0) return res.status(404).json({ error: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (error) { res.status(500).json({ error: 'Delete failed' }); }
});

app.put('/api/admin/students/:id/password', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const { password } = req.body;
    if (!password || password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const r = await DB.users.updatePassword(req.params.id, hashedPassword);
    if (r.changes === 0) return res.status(404).json({ error: 'Student not found' });
    res.json({ message: 'Password updated successfully' });
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.put('/api/admin/enrollments/:id', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const r = await DB.enrollments.adminUpdate(req.params.id, req.body);
    if (r.changes === 0) return res.status(404).json({ error: 'Enrollment not found' });
    if (req.body.payment_status === 'completed') {
      const receipt = await DB.enrollments.getReceiptAdmin(req.params.id);
      if (receipt?.user_id) await DB.syllabusAccess.grantAllPaidModules(receipt.user_id);
      maybeNotifyFirstLotComplete().catch(() => {});
    }
    res.json({ message: 'Enrollment updated successfully' });
  } catch (error) { res.status(500).json({ error: 'Update failed' }); }
});

app.post('/api/admin/enrollments/create', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const result = await DB.enrollments.adminCreate(req.body);
    if ((req.body.payment_status || 'completed') === 'completed') {
      if (req.body.user_id) await DB.syllabusAccess.grantAllPaidModules(req.body.user_id);
      maybeNotifyFirstLotComplete().catch(() => {});
    }
    res.json({ message: 'Enrollment created successfully', enrollmentId: result.id });
  } catch (error) { res.status(500).json({ error: 'Failed to create enrollment' }); }
});

app.put('/api/admin/access/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const { module, value } = req.body;
    const allowed = ['sql_access','python_access','pyspark_access','databricks_access','aws_access','git_access','projects_access','mock_interview_access'];
    if (!allowed.includes(module)) return res.status(400).json({ error: 'Invalid module' });
    await DB.syllabusAccess.updateSingle(req.params.userId, module, !!value);
    res.json({ message: 'Access updated', module, value: value ? 1 : 0 });
  } catch (error) {
    console.error('Admin access update error:', error);
    res.status(500).json({ error: 'Update failed' });
  }
});

app.get('/api/admin/stats', authenticateToken, authenticateAdmin, async (req, res) => {
  try { res.json(await DB.stats.getDashboard()); }
  catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/admin/receipt/:enrollmentId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const receipt = await DB.enrollments.getReceiptAdmin(req.params.enrollmentId);
    if (!receipt) return res.status(404).json({ error: 'Receipt not found' });
    res.json(receipt);
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

// ==================== SYLLABUS ACCESS ROUTES ====================
app.get('/api/syllabus/access', authenticateToken, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    if (req.user.role === 'admin') return res.json({ sql_access: 1, python_access: 1, pyspark_access: 1, databricks_access: 1, aws_access: 1, projects_access: 1, git_access: 1, mock_interview_access: 1 });
    res.json(await DB.syllabusAccess.get(req.user.id));
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/admin/syllabus/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    res.json(await DB.syllabusAccess.get(req.params.userId));
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.put('/api/admin/syllabus/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    // Get current access for audit comparison
    const oldAccess = await DB.syllabusAccess.get(req.params.userId);
    await DB.syllabusAccess.update(req.params.userId, req.body);

    // Audit log — track each module change
    const modules = ['sql_access', 'python_access', 'pyspark_access', 'databricks_access', 'aws_access', 'git_access', 'projects_access', 'mock_interview_access'];
    const student = await DB.users.findById(req.params.userId);
    for (const mod of modules) {
      const oldVal = oldAccess[mod] || 0;
      const newVal = req.body[mod] ? 1 : 0;
      if (oldVal !== newVal) {
        DB.moduleAccessAudit.log({
          student_id: req.params.userId,
          student_email: student?.email || '',
          module_name: mod.replace('_access', ''),
          old_value: oldVal,
          new_value: newVal,
          action: newVal ? 'GRANT' : 'REVOKE',
          admin_id: req.user.id,
          admin_email: req.user.email
        }).catch(e => console.error('Audit log error:', e));
      }
    }

    res.json({ message: 'Syllabus access updated' });
  } catch (error) {
    console.error('Admin syllabus update error:', error);
    res.status(500).json({ error: 'Update failed' });
  }
});

// ==================== SUB-TOPIC ACCESS ROUTES ====================
app.get('/api/subtopic/access', authenticateToken, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    if (req.user.role === 'admin') return res.json({ all_access: true });
    res.json(await DB.subtopicAccess.getByUser(req.user.id));
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/feature/access', authenticateToken, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    if (req.user.role === 'admin') return res.json({ all_access: true });
    res.json(await DB.featureAccess.getByUser(req.user.id));
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/admin/access/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const subtopics = await DB.subtopicAccess.getByUser(req.params.userId);
    const features = await DB.featureAccess.getByUser(req.params.userId);
    res.json({ subtopics, features });
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.put('/api/admin/subtopic/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const { module, group_name, access_granted } = req.body;
    await DB.subtopicAccess.update(req.params.userId, module, group_name, access_granted);
    res.json({ message: 'Access updated' });
  } catch (error) { res.status(500).json({ error: 'Update failed' }); }
});

app.get('/api/admin/feature/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    res.json(await DB.featureAccess.getByUserFormatted(req.params.userId));
  } catch (error) { res.status(500).json({ error: 'Failed to fetch' }); }
});

app.put('/api/admin/feature/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const { feature_type, tab_number, access_granted } = req.body;
    const allowedTypes = ['resume', 'interview'];
    if (!allowedTypes.includes(feature_type)) return res.status(400).json({ error: 'Invalid feature type' });
    const tabNum = Number(tab_number);
    if (!Number.isInteger(tabNum) || tabNum < 1) return res.status(400).json({ error: 'Invalid tab number' });
    await DB.featureAccess.update(req.params.userId, feature_type, tabNum, !!access_granted);
    res.json({ message: 'Access updated', feature_type, tab_number: tabNum, access_granted: access_granted ? 1 : 0 });
  } catch (error) {
    console.error('Admin feature update error:', error);
    res.status(500).json({ error: 'Update failed' });
  }
});

// DEPRECATED topic routes
app.get('/api/admin/topics', authenticateToken, authenticateAdmin, (req, res) => { res.json([]); });
app.put('/api/admin/topics/:topicId', authenticateToken, authenticateAdmin, (req, res) => { res.json({ message: 'Use subtopic access instead' }); });
app.get('/api/topics', authenticateToken, (req, res) => { res.json([]); });
app.get('/api/free-topics', (req, res) => { res.json([]); });

// ==================== LANDING PAGE CMS ROUTES ====================
app.get('/api/landing/sections', authenticateToken, authenticateAdmin, async (req, res) => {
  try { res.json(await DB.landing.getSections(false)); }
  catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.post('/api/landing/sections', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    await DB.landing.saveSections(req.body);
    res.json({ message: 'Sections saved successfully' });
  } catch (error) { res.status(500).json({ error: 'Failed to save sections' }); }
});

app.get('/api/landing/public-sections', async (req, res) => {
  try { res.json(await DB.landing.getSections(true)); }
  catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/landing/pricing', async (req, res) => {
  try { res.json(await DB.landing.getPricing()); }
  catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.post('/api/landing/pricing', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    await DB.landing.savePricing(req.body);
    res.json({ message: 'Pricing saved successfully' });
  } catch (error) { res.status(500).json({ error: 'Failed to save pricing' }); }
});

// ==================== UPI QR CODE ROUTE ====================
app.get('/api/payment/qr-code', async (req, res) => {
  try {
    const upiId = process.env.UPI_ID;
    const upiName = process.env.UPI_NAME || 'Morphed Tech';
    const pricing = await DB.landing.getPricing();
    const amount = String(
      parseInt(req.query.amount || process.env.COURSE_PRICE || pricing?.offer_price || '7777', 10)
    );
    const payload = { upiId, upiName, amount };

    if (!upiId || upiId === 'YOUR_UPI_ID') {
      const staticQrPath = path.join(__dirname, 'assets', 'upi-qr.png');
      if (fs.existsSync(staticQrPath)) {
        return res.status(503).json({
          error: 'UPI ID not configured — static QR may not include amount. Set UPI_ID on server.',
          ...payload,
          staticQrUrl: '/assets/upi-qr.png',
          qrCode: null
        });
      }
      return res.status(503).json({ error: 'UPI ID not configured yet. Admin will update shortly.', ...payload });
    }

    // Dynamic QR — amount ₹7777 (or current offer) auto-fills in GPay / PhonePe when scanned
    const upiString = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(upiName)}&am=${amount}&cu=INR&tn=${encodeURIComponent('Morphed Tech Course')}`;
    const qrCodeDataURL = await QRCode.toDataURL(upiString, { width: 300, margin: 2, color: { dark: '#000000', light: '#FFFFFF' } });
    res.json({ ...payload, qrCode: qrCodeDataURL, staticQrUrl: null, amountPrefilled: true });
  } catch (error) { res.status(500).json({ error: 'Failed to generate QR code' }); }
});

app.get('/api/test-telegram', async (req, res) => {
  const result = await sendTestNotifications();
  res.json(result);
});

app.get('/api/test-notifications', async (req, res) => {
  const result = await sendTestNotifications();
  res.json(result);
});

// ==================== SECURITY ROUTES ====================
app.post('/api/security/admin-access-attempt', async (req, res) => {
  try {
    const { route, user_email } = req.body;
    await DB.securityLogs.create({ user_email: user_email || 'anonymous', event_type: 'UNAUTHORIZED_ADMIN_ACCESS', detail: `Attempted access to admin route: ${route || '/secure-admin'}`, severity: 'HIGH', page: route || '/secure-admin', user_agent: req.headers['user-agent'], device_type: /Mobi|Android/i.test(req.headers['user-agent'] || '') ? 'Mobile' : 'Desktop' });
    res.json({ ok: true });
  } catch (error) { res.status(500).json({ error: 'Log failed' }); }
});

app.post('/api/security/log', async (req, res) => {
  try {
    const { event_type, detail, severity, user_id, user_email, page, user_agent, device_type } = req.body;
    if (!event_type) return res.status(400).json({ error: 'event_type required' });
    await DB.securityLogs.create({ user_id, user_email, event_type, detail, severity, page, user_agent, device_type });
    res.json({ ok: true });
  } catch (error) { res.status(500).json({ error: 'Log failed' }); }
});

app.get('/api/admin/security/logs', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;
    const severity = req.query.severity || null;
    res.json(await DB.securityLogs.getAll(limit, severity));
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/admin/security/stats', authenticateToken, authenticateAdmin, async (req, res) => {
  try { res.json(await DB.securityLogs.getStats()); }
  catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.post('/api/admin/security/block/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    await DB.blockedUsers.block(req.params.userId, req.body.reason);
    res.json({ message: 'User blocked and session invalidated' });
  } catch (error) { res.status(500).json({ error: 'Block failed' }); }
});

app.post('/api/admin/security/unblock/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    await DB.blockedUsers.unblock(req.params.userId);
    res.json({ message: 'User unblocked' });
  } catch (error) { res.status(500).json({ error: 'Unblock failed' }); }
});

app.get('/api/security/check/:userId', authenticateToken, async (req, res) => {
  try { res.json(await DB.blockedUsers.check(req.params.userId)); }
  catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.post('/api/security/session', authenticateToken, async (req, res) => {
  try {
    const { device_fp, device_type, user_agent } = req.body;
    await DB.sessions.upsert(req.user.id, { session_token: req.token || req.headers.authorization?.split(' ')[1] || '', device_fp, device_type, user_agent });
    res.json({ ok: true });
  } catch (error) { res.status(500).json({ error: 'Session update failed' }); }
});

app.get('/api/security/session/verify', authenticateToken, async (req, res) => {
  res.json({ valid: true, singleDevice: true });
});

app.get('/api/admin/security/sessions', authenticateToken, authenticateAdmin, async (req, res) => {
  try { res.json(await DB.sessions.getAll()); }
  catch (error) { res.status(500).json({ error: 'Server error' }); }
});

// ==================== MODULE ACCESS AUDIT ROUTES ====================
app.get('/api/admin/module-audit', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;
    res.json(await DB.moduleAccessAudit.getRecent(limit));
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/admin/module-audit/:studentId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    res.json(await DB.moduleAccessAudit.getByStudent(req.params.studentId));
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

// ==================== AI MOCK INTERVIEW (Gemini) ====================
const mockInterviewAI = require('./mock-interview-service');
const FREE_MOCK_TRIAL = parseInt(process.env.MOCK_INTERVIEW_FREE_TRIAL || '1', 10);

const mockInterviewLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: { error: 'Too many mock interview requests. Please wait a minute.' },
  standardHeaders: true,
  legacyHeaders: false
});

async function getMockInterviewAccessStatus(userId, role) {
  if (role === 'admin') {
    return {
      hasAccess: true,
      fullAccess: true,
      freeTrialLimit: FREE_MOCK_TRIAL,
      lifetimeUsed: 0,
      freeRemaining: FREE_MOCK_TRIAL,
      canStart: true,
      accessType: 'admin'
    };
  }

  const [access, lifetimeUsed] = await Promise.all([
    DB.syllabusAccess.get(userId),
    DB.mockInterviews.countByUser(userId)
  ]);
  const fullAccess = !!access.mock_interview_access;
  const freeRemaining = Math.max(0, FREE_MOCK_TRIAL - lifetimeUsed);
  const hasAccess = fullAccess || lifetimeUsed <= FREE_MOCK_TRIAL;
  const canStart = fullAccess || lifetimeUsed < FREE_MOCK_TRIAL;

  return {
    hasAccess,
    fullAccess,
    freeTrialLimit: FREE_MOCK_TRIAL,
    lifetimeUsed,
    freeRemaining,
    canStart,
    accessType: fullAccess ? 'full' : (freeRemaining > 0 ? 'trial' : 'expired')
  };
}

async function requireMockInterviewAccess(req, res, next) {
  if (req.user.role === 'admin') {
    req.mockInterviewStatus = await getMockInterviewAccessStatus(req.user.id, req.user.role);
    return next();
  }
  try {
    const status = await getMockInterviewAccessStatus(req.user.id, req.user.role);
    if (!status.hasAccess) {
      return res.status(403).json({
        error: `You've used your ${FREE_MOCK_TRIAL} free mock interviews. Ask admin to unlock unlimited access.`
      });
    }
    req.mockInterviewStatus = status;
    next();
  } catch (error) {
    console.error('Mock interview access check error:', error);
    return res.status(500).json({ error: 'Access check failed' });
  }
}

app.get('/api/mock-interview/status', authenticateToken, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const status = await getMockInterviewAccessStatus(req.user.id, req.user.role);
    const dailyLimit = parseInt(process.env.MOCK_INTERVIEW_DAILY_LIMIT || '3', 10);
    let dailyUsed = 0;
    if (req.user.role !== 'admin') {
      dailyUsed = await DB.mockInterviews.countTodayByUser(req.user.id);
    }
    res.json({
      ...status,
      dailyLimit,
      dailyUsed,
      geminiConfigured: !!process.env.GEMINI_API_KEY,
      ...mockInterviewComingSoonPayload()
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load mock interview status' });
  }
});

app.get('/api/mock-interview/config', authenticateToken, requireMockInterviewAccess, async (req, res) => {
  res.set('Cache-Control', 'no-store');
  if (isMockInterviewComingSoon()) {
    return res.json({ ...mockInterviewComingSoonPayload(), geminiConfigured: !!process.env.GEMINI_API_KEY });
  }
  const indianTts = require('./indian-tts-service');
  const status = req.mockInterviewStatus || await getMockInterviewAccessStatus(req.user.id, req.user.role);
  res.json({
    interviewers: mockInterviewAI.INTERVIEWERS,
    interviewTypes: mockInterviewAI.INTERVIEW_TYPES,
    maxQuestions: mockInterviewAI.MAX_QUESTIONS,
    dailyLimit: parseInt(process.env.MOCK_INTERVIEW_DAILY_LIMIT || '3', 10),
    geminiConfigured: !!process.env.GEMINI_API_KEY,
    ttsEngine: 'edge-neural-en-IN',
    voiceLabels: {
      rahul: indianTts.getVoiceLabel('rahul'),
      priya: indianTts.getVoiceLabel('priya')
    },
    freeTrialLimit: status.freeTrialLimit,
    lifetimeUsed: status.lifetimeUsed,
    freeRemaining: status.freeRemaining,
    fullAccess: status.fullAccess,
    canStart: status.canStart,
    accessType: status.accessType
  });
});

app.post('/api/mock-interview/speak', authenticateToken, requireMockInterviewAccess, blockMockInterviewIfComingSoon, mockInterviewLimiter, async (req, res) => {
  try {
    const { text, interviewer, mode } = req.body;
    if (!text?.trim()) return res.status(400).json({ error: 'Text required' });
    const indianTts = require('./indian-tts-service');
    const audio = await indianTts.synthesize(text, interviewer || 'rahul', mode || 'interview');
    res.set('Content-Type', 'audio/mpeg');
    res.set('Cache-Control', 'no-store');
    res.send(audio);
  } catch (error) {
    console.error('Indian TTS error:', error.message);
    res.status(500).json({ error: 'Speech generation failed — check server internet connection' });
  }
});

app.post('/api/mock-interview/transcribe', authenticateToken, requireMockInterviewAccess, blockMockInterviewIfComingSoon, mockInterviewLimiter, audioUpload.single('audio'), async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: 'Gemini API not configured' });
    }
    if (!req.file?.buffer?.length) {
      return res.status(400).json({ error: 'No audio received — record at least 2 seconds' });
    }
    const text = await mockInterviewAI.transcribeAudio(req.file.buffer, req.file.mimetype);
    res.json({ text: text || '' });
  } catch (error) {
    console.error('Transcribe error:', error.message);
    res.status(500).json({ error: 'Could not transcribe audio — try again or type your answer' });
  }
});

app.post('/api/mock-interview/start', authenticateToken, requireMockInterviewAccess, blockMockInterviewIfComingSoon, mockInterviewLimiter, async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: 'AI mock interview is not configured yet. Admin must add GEMINI_API_KEY.' });
    }
    const status = req.mockInterviewStatus || await getMockInterviewAccessStatus(req.user.id, req.user.role);
    if (!status.canStart) {
      return res.status(403).json({
        error: `You've used your ${FREE_MOCK_TRIAL} free mock interviews. Ask admin to unlock unlimited access.`
      });
    }
    const { interviewer, experience_level, interview_type } = req.body;
    if (!['rahul', 'priya'].includes(interviewer)) {
      return res.status(400).json({ error: 'Select interviewer: rahul or priya' });
    }
    const dailyLimit = parseInt(process.env.MOCK_INTERVIEW_DAILY_LIMIT || '3', 10);
    const isLocalDev = (process.env.FRONTEND_URL || '').includes('localhost') || (process.env.FRONTEND_URL || '').includes('127.0.0.1');
    const skipDailyLimit = isLocalDev || dailyLimit <= 0 || req.user.role === 'admin' || !status.fullAccess;
    if (!skipDailyLimit) {
      const used = await DB.mockInterviews.countTodayByUser(req.user.id);
      if (used >= dailyLimit) {
        return res.status(429).json({ error: `Daily limit reached (${dailyLimit} mock interviews per day). Try again tomorrow.` });
      }
    }
    const exp = experience_level || 'Fresher';
    const type = interview_type || 'full';
    const user = await DB.users.findById(req.user.id);
    const firstQuestion = await mockInterviewAI.generateFirstQuestion(interviewer, exp, type, user?.name);
    const session = await DB.mockInterviews.create({
      userId: req.user.id,
      interviewer,
      interviewType: type,
      experienceLevel: exp,
      firstQuestion
    });
    res.json(session);
  } catch (error) {
    console.error('Mock interview start error:', error);
    res.status(500).json({ error: error.message || 'Failed to start mock interview' });
  }
});

app.post('/api/mock-interview/message', authenticateToken, requireMockInterviewAccess, blockMockInterviewIfComingSoon, mockInterviewLimiter, async (req, res) => {
  try {
    const { sessionId, message } = req.body;
    if (!sessionId || !message?.trim()) {
      return res.status(400).json({ error: 'Session ID and message required' });
    }
    const session = await DB.mockInterviews.findByIdForUser(sessionId, req.user.id);
    if (!session) return res.status(404).json({ error: 'Session not found' });
    if (session.status === 'completed') {
      return res.status(400).json({ error: 'Interview already completed' });
    }

    await DB.mockInterviews.addMessage(sessionId, 'student', message.trim());
    const updated = await DB.mockInterviews.findById(sessionId);
    const next = await mockInterviewAI.generateNextQuestion(updated);

    if (next.teacher_feedback) {
      await DB.mockInterviews.addMessage(sessionId, 'coach', next.teacher_feedback);
    }
    if (next.content) {
      await DB.mockInterviews.addMessage(sessionId, 'interviewer', next.content);
    }
    const finalSession = await DB.mockInterviews.findById(sessionId);
    res.json({
      feedback: next.teacher_feedback || '',
      message: next.content,
      done: next.done,
      session: finalSession
    });
  } catch (error) {
    console.error('Mock interview message error:', error);
    res.status(500).json({ error: error.message || 'Failed to process answer' });
  }
});

app.post('/api/mock-interview/end', authenticateToken, requireMockInterviewAccess, blockMockInterviewIfComingSoon, mockInterviewLimiter, async (req, res) => {
  try {
    const { sessionId } = req.body;
    if (!sessionId) return res.status(400).json({ error: 'Session ID required' });
    const session = await DB.mockInterviews.findByIdForUser(sessionId, req.user.id);
    if (!session) return res.status(404).json({ error: 'Session not found' });
    if (session.status === 'completed' && session.feedback) {
      return res.json(session);
    }
    const studentAnswers = session.messages.filter(m => m.role === 'student').length;
    if (studentAnswers < 1) {
      return res.status(400).json({ error: 'Answer at least one question before ending the interview' });
    }
    const user = await DB.users.findById(req.user.id);
    const feedback = await mockInterviewAI.generateFeedback(session, user?.name);
    const completed = await DB.mockInterviews.complete(sessionId, feedback);
    res.json(completed);
  } catch (error) {
    console.error('Mock interview end error:', error);
    res.status(500).json({ error: error.message || 'Failed to generate feedback' });
  }
});

app.get('/api/mock-interview/history', authenticateToken, requireMockInterviewAccess, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    res.json(await DB.mockInterviews.getHistoryByUser(req.user.id));
  } catch (error) {
    res.status(500).json({ error: 'Failed to load history' });
  }
});

app.get('/api/admin/mock-interviews', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    res.json(await DB.mockInterviews.getAllAdmin(parseInt(req.query.limit) || 50));
  } catch (error) {
    res.status(500).json({ error: 'Failed to load mock interviews' });
  }
});

// ==================== RAG STUDY BOT ====================
const ragService = require('./rag-service');
const ragIndex = require('./rag-index');

const studyBotLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: parseInt(process.env.STUDY_BOT_RATE_LIMIT || '15', 10),
  message: { error: 'Too many questions. Please wait a minute.' },
  standardHeaders: true,
  legacyHeaders: false
});

const STUDY_BOT_FREE_TRIAL = parseInt(process.env.STUDY_BOT_FREE_TRIAL || '7', 10);

async function getStudyBotAccessStatus(userId, role) {
  if (role === 'admin') {
    return {
      hasAccess: true,
      paid: true,
      fullAccess: true,
      freeTrialLimit: STUDY_BOT_FREE_TRIAL,
      questionsUsed: 0,
      freeRemaining: STUDY_BOT_FREE_TRIAL,
      canAsk: true,
      accessType: 'admin'
    };
  }

  const [enrollment, questionsUsed] = await Promise.all([
    DB.enrollments.findByUserId(userId),
    DB.studyBotUsage.getCount(userId)
  ]);
  const paid = enrollment?.payment_status === 'completed';
  const freeRemaining = Math.max(0, STUDY_BOT_FREE_TRIAL - questionsUsed);
  const fullAccess = paid;
  const canAsk = fullAccess || questionsUsed < STUDY_BOT_FREE_TRIAL;
  const hasAccess = canAsk || questionsUsed > 0;

  return {
    hasAccess,
    paid,
    fullAccess,
    freeTrialLimit: STUDY_BOT_FREE_TRIAL,
    questionsUsed,
    freeRemaining,
    canAsk,
    accessType: fullAccess ? 'paid' : (freeRemaining > 0 ? 'trial' : 'expired')
  };
}

app.get('/api/study-bot/status', authenticateToken, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const status = await getStudyBotAccessStatus(req.user.id, req.user.role);
    ragIndex.ensureIndex();
    const stats = ragService.getStats();
    res.json({
      ...status,
      geminiConfigured: !!process.env.GEMINI_API_KEY,
      indexReady: ragIndex.indexReady,
      totalChunks: stats.totalChunks,
      ...studyBotComingSoonPayload()
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load study bot status' });
  }
});

app.get('/api/study-bot/config', authenticateToken, async (req, res) => {
  try {
    ragIndex.ensureIndex();
    const stats = ragService.getStats();
    const status = await getStudyBotAccessStatus(req.user.id, req.user.role);
    res.json({
      geminiConfigured: !!process.env.GEMINI_API_KEY,
      indexReady: ragIndex.indexReady,
      totalChunks: stats.totalChunks,
      modules: stats.moduleLabels,
      freeTrialLimit: status.freeTrialLimit,
      questionsUsed: status.questionsUsed,
      freeRemaining: status.freeRemaining,
      paid: status.paid,
      fullAccess: status.fullAccess,
      canAsk: isStudyBotComingSoon() ? false : status.canAsk,
      accessType: status.accessType,
      ...studyBotComingSoonPayload()
    });
  } catch (error) {
    res.status(500).json({ error: 'Study bot config failed' });
  }
});

app.post('/api/study-bot/ask', authenticateToken, studyBotLimiter, blockStudyBotIfComingSoon, async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: 'Study bot not configured. Admin must add GEMINI_API_KEY.' });
    }
    const status = await getStudyBotAccessStatus(req.user.id, req.user.role);
    if (!status.canAsk) {
      return res.status(403).json({
        error: `Free limit reached (${STUDY_BOT_FREE_TRIAL} questions). Complete payment to unlock unlimited Study Bot access.`,
        paid: false,
        freeTrialLimit: STUDY_BOT_FREE_TRIAL,
        questionsUsed: status.questionsUsed,
        paymentUrl: '/payment.html'
      });
    }

    const { message, history } = req.body;
    if (!message?.trim()) {
      return res.status(400).json({ error: 'Message required' });
    }

    const syllabusAccess = req.user.role === 'admin'
      ? null
      : await DB.syllabusAccess.get(req.user.id);

    const result = await ragService.ask(message.trim(), {
      syllabusAccess,
      role: req.user.role,
      history: Array.isArray(history) ? history : []
    });

    let newCount = status.questionsUsed;
    if (req.user.role !== 'admin') {
      newCount = await DB.studyBotUsage.increment(req.user.id);
    }
    const updatedStatus = await getStudyBotAccessStatus(req.user.id, req.user.role);

    res.json({
      ...result,
      questionsUsed: newCount,
      freeRemaining: updatedStatus.freeRemaining,
      canAsk: updatedStatus.canAsk,
      fullAccess: updatedStatus.fullAccess
    });
  } catch (error) {
    console.error('Study bot error:', error);
    const friendly = ragService.formatGeminiError(error);
    const status = ragService.isQuotaError(error) ? 429 : 500;
    res.status(status).json({ error: friendly, quotaExceeded: ragService.isQuotaError(error) });
  }
});

app.get('/api/admin/study-bot/stats', authenticateToken, authenticateAdmin, (req, res) => {
  try {
    ragIndex.ensureIndex();
    res.json(ragService.getStats());
  } catch (error) {
    res.status(500).json({ error: 'Failed to load RAG stats' });
  }
});

// Static files AFTER all API routes (prevents HTML 404 on /api/*)
app.use(express.static('.'));

app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API route not found — restart server with: npm start' });
});

// ==================== START SERVER ====================
async function startServer() {
  try {
    const dbType = await DB.init();
    console.log(`📦 Database: ${dbType.toUpperCase()}`);
    try {
      ragIndex.buildIndex();
    } catch (e) {
      console.warn('⚠️ RAG index build failed:', e.message);
    }
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`🔒 Admin Portal: http://localhost:${PORT}/secure-admin (HIDDEN)`);
      console.log(`👨‍🎓 Student Portal: http://localhost:${PORT}/student-login.html`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
}

startServer();
