const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');
const { sendPaymentNotification } = require('./telegram-helper');
require('dotenv').config();

const DB = require('./db-layer');

const app = express();
const PORT = process.env.PORT || 5000;

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

// ==================== ADMIN ACCESS SECURITY ====================
app.get('/admin-login.html', (req, res) => {
  res.redirect('/student-login.html');
});

app.get('/secure-admin', (req, res) => {
  res.sendFile(__dirname + '/admin-login.html');
});

app.use(express.static('.'));

app.get('/learning-data.json', (req, res) => {
  res.sendFile(__dirname + '/learning-data.json');
});

// ==================== AUTH MIDDLEWARE ====================
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access token required' });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.user = user;
    next();
  });
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

    const token = jwt.sign({ id: user.id, email, role: 'student' }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ message: 'Registration successful', token, user: { id: user.id, name: name.trim(), email, role: 'student' } });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/login', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });

    const user = await DB.users.findByEmail(email);
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
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

    // Telegram notification
    const user = await DB.enrollments.getUserForNotification(enrollmentId);
    if (user) {
      sendPaymentNotification({ studentName: user.name, studentEmail: user.email, phone: user.phone, amount: user.payment_amount, transactionId, status: 'completed' }).catch(() => {});
    }
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
    res.json({ message: 'Enrollment updated successfully' });
  } catch (error) { res.status(500).json({ error: 'Update failed' }); }
});

app.post('/api/admin/enrollments/create', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const result = await DB.enrollments.adminCreate(req.body);
    res.json({ message: 'Enrollment created successfully', enrollmentId: result.id });
  } catch (error) { res.status(500).json({ error: 'Failed to create enrollment' }); }
});

app.put('/api/admin/access/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const { module, value } = req.body;
    const allowed = ['sql_access','python_access','pyspark_access','databricks_access','aws_access','git_access','projects_access'];
    if (!allowed.includes(module)) return res.status(400).json({ error: 'Invalid module' });
    await DB.syllabusAccess.updateSingle(req.params.userId, module, value);
    res.json({ message: 'Access updated' });
  } catch (error) { res.status(500).json({ error: 'Update failed' }); }
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
    if (req.user.role === 'admin') return res.json({ sql_access: 1, python_access: 1, pyspark_access: 1, databricks_access: 1, aws_access: 1, projects_access: 1, git_access: 1 });
    res.json(await DB.syllabusAccess.get(req.user.id));
  } catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/admin/syllabus/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try { res.json(await DB.syllabusAccess.get(req.params.userId)); }
  catch (error) { res.status(500).json({ error: 'Server error' }); }
});

app.put('/api/admin/syllabus/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    await DB.syllabusAccess.update(req.params.userId, req.body);
    res.json({ message: 'Syllabus access updated' });
  } catch (error) { res.status(500).json({ error: 'Update failed' }); }
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
  try { res.json(await DB.featureAccess.getByUserFormatted(req.params.userId)); }
  catch (error) { res.status(500).json({ error: 'Failed to fetch' }); }
});

app.put('/api/admin/feature/:userId', authenticateToken, authenticateAdmin, async (req, res) => {
  try {
    const { feature_type, tab_number, access_granted } = req.body;
    await DB.featureAccess.update(req.params.userId, feature_type, tab_number, access_granted);
    res.json({ message: 'Access updated' });
  } catch (error) { res.status(500).json({ error: 'Update failed' }); }
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
    const upiName = process.env.UPI_NAME;
    const amount = process.env.COURSE_PRICE;
    const upiString = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(upiName)}&am=${amount}&cu=INR&tn=${encodeURIComponent('MORPHED TECH Course Payment')}`;
    const qrCodeDataURL = await QRCode.toDataURL(upiString, { width: 300, margin: 2, color: { dark: '#000000', light: '#FFFFFF' } });
    res.json({ qrCode: qrCodeDataURL, upiId, upiName, amount });
  } catch (error) { res.status(500).json({ error: 'Failed to generate QR code' }); }
});

app.get('/api/test-telegram', async (req, res) => {
  const { sendTestNotification } = require('./telegram-helper');
  const result = await sendTestNotification();
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
    await DB.sessions.upsert(req.user.id, { session_token: req.headers.authorization?.split(' ')[1] || '', device_fp, device_type, user_agent });
    res.json({ ok: true });
  } catch (error) { res.status(500).json({ error: 'Session update failed' }); }
});

app.get('/api/admin/security/sessions', authenticateToken, authenticateAdmin, async (req, res) => {
  try { res.json(await DB.sessions.getAll()); }
  catch (error) { res.status(500).json({ error: 'Server error' }); }
});

// ==================== START SERVER ====================
async function startServer() {
  try {
    const dbType = await DB.init();
    console.log(`📦 Database: ${dbType.toUpperCase()}`);
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
