const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const QRCode = require('qrcode');
const { sendPaymentNotification } = require('./telegram-helper');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const rateLimit = require('express-rate-limit');

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: 'Too many login attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5000',
  credentials: true
}));
app.use(express.json());
app.use(express.static('.'));

// Serve learning data
app.get('/learning-data.json', (req, res) => {
  res.sendFile(__dirname + '/learning-data.json');
});

// Database setup
const db = new sqlite3.Database('./morphed-tech.db', (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('✅ Connected to SQLite database');
    initDatabase();
  }
});

// Initialize database tables
function initDatabase() {
  // Users table
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      phone TEXT,
      role TEXT DEFAULT 'student',
      target_role TEXT,
      experience_level TEXT,
      learning_pace TEXT,
      onboarding_completed BOOLEAN DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  // Add new columns if they don't exist
  db.run(`ALTER TABLE users ADD COLUMN target_role TEXT`, () => {});
  db.run(`ALTER TABLE users ADD COLUMN experience_level TEXT`, () => {});
  db.run(`ALTER TABLE users ADD COLUMN learning_pace TEXT`, () => {});
  db.run(`ALTER TABLE users ADD COLUMN onboarding_completed BOOLEAN DEFAULT 0`, () => {});

  db.run(`ALTER TABLE syllabus_access ADD COLUMN projects_access INTEGER DEFAULT 0`, () => {});
  db.run(`ALTER TABLE syllabus_access ADD COLUMN aws_access INTEGER DEFAULT 0`, () => {});

  db.run(`ALTER TABLE syllabus_access ADD COLUMN git_access INTEGER DEFAULT 0`, () => {});

  // Enrollments table
  db.run(`
    CREATE TABLE IF NOT EXISTS enrollments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      course_name TEXT DEFAULT 'Data Engineering Mastery',
      payment_status TEXT DEFAULT 'pending',
      payment_amount REAL,
      payment_method TEXT,
      transaction_id TEXT,
      payment_date DATETIME,
      enrolled_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      course_completed BOOLEAN DEFAULT 0,
      certificate_issued BOOLEAN DEFAULT 0,
      content_access_granted BOOLEAN DEFAULT 1,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);
  
  // Add new columns if they don't exist
  db.run(`ALTER TABLE enrollments ADD COLUMN course_completed BOOLEAN DEFAULT 0`, () => {});
  db.run(`ALTER TABLE enrollments ADD COLUMN certificate_issued BOOLEAN DEFAULT 0`, () => {});
  db.run(`ALTER TABLE enrollments ADD COLUMN content_access_granted BOOLEAN DEFAULT 1`, () => {});

  // Syllabus access table
  db.run(`
    CREATE TABLE IF NOT EXISTS syllabus_access (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL UNIQUE,
      sql_access INTEGER DEFAULT 0,
      python_access INTEGER DEFAULT 0,
      pyspark_access INTEGER DEFAULT 0,
      databricks_access INTEGER DEFAULT 0,
      aws_access INTEGER DEFAULT 0,
      git_access INTEGER DEFAULT 0,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  // Sub-topic access table (numerology-based grouping)
  db.run(`
    CREATE TABLE IF NOT EXISTS subtopic_access (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      module TEXT NOT NULL,
      group_name TEXT NOT NULL,
      access_granted INTEGER DEFAULT 0,
      UNIQUE(user_id, module, group_name),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  // Resume & Interview tab access
  db.run(`
    CREATE TABLE IF NOT EXISTS feature_access (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      feature_type TEXT NOT NULL,
      tab_number INTEGER NOT NULL,
      access_granted INTEGER DEFAULT 0,
      UNIQUE(user_id, feature_type, tab_number),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  // Security logs table
  db.run(`
    CREATE TABLE IF NOT EXISTS security_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      user_email TEXT,
      event_type TEXT NOT NULL,
      detail TEXT,
      severity TEXT DEFAULT 'LOW',
      page TEXT,
      user_agent TEXT,
      device_type TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Active sessions table
  db.run(`
    CREATE TABLE IF NOT EXISTS active_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      session_token TEXT NOT NULL,
      device_fp TEXT,
      device_type TEXT,
      user_agent TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      last_active DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id)
    )
  `);

  // Blocked users table
  db.run(`
    CREATE TABLE IF NOT EXISTS blocked_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL UNIQUE,
      reason TEXT,
      blocked_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Landing sections table
  db.run(`
    CREATE TABLE IF NOT EXISTS landing_sections (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      display_order INTEGER DEFAULT 1,
      title TEXT,
      subtitle TEXT,
      content TEXT,
      visible INTEGER DEFAULT 1,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Landing page pricing table
  db.run(`
    CREATE TABLE IF NOT EXISTS landing_pricing (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      regular_price INTEGER NOT NULL,
      offer_price INTEGER NOT NULL,
      offer_days INTEGER DEFAULT 3,
      limited_seats INTEGER DEFAULT 100,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, () => {
    // Insert default pricing
    db.run(
      `INSERT OR IGNORE INTO landing_pricing (id, regular_price, offer_price, offer_days, limited_seats) 
       VALUES (1, 6999, 1111, 3, 100)`
    );
  });

  // Create admin user if not exists
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  db.get('SELECT * FROM users WHERE email = ?', [adminEmail], async (err, row) => {
    if (!row) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      db.run(
        'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
        ['Admin', adminEmail, hashedPassword, 'admin'],
        (err) => {
          if (err) {
            console.error('Error creating admin:', err);
          } else {
            console.log('✅ Admin user created');
            console.log(`📧 Email: ${adminEmail}`);
            console.log(`🔑 Password: ${adminPassword}`);
          }
        }
      );
    }
  });
}

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Middleware to verify admin role
const authenticateAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

// ==================== AUTH ROUTES ====================

// Register new student
app.post('/api/auth/register', authLimiter, async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    // Check if user already exists
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
      if (row) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user
      db.run(
        'INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)',
        [name, email, hashedPassword, phone],
        function(err) {
          if (err) {
            return res.status(500).json({ error: 'Registration failed' });
          }

          const userId = this.lastID;
          const token = jwt.sign(
            { id: userId, email, role: 'student' },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
          );

          res.json({
            message: 'Registration successful',
            token,
            user: { id: userId, name, email, role: 'student' }
          });
        }
      );
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login
app.post('/api/auth/login', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      res.json({
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get current user profile
app.get('/api/auth/me', authenticateToken, (req, res) => {
  db.get('SELECT id, name, email, phone, role, target_role, experience_level, learning_pace, onboarding_completed, created_at FROM users WHERE id = ?', [req.user.id], (err, user) => {
    if (err || !user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  });
});

// Save onboarding data
app.post('/api/auth/onboarding', authenticateToken, (req, res) => {
  const { target_role, experience_level, learning_pace } = req.body;
  
  db.run(
    'UPDATE users SET target_role = ?, experience_level = ?, learning_pace = ?, onboarding_completed = 1 WHERE id = ?',
    [target_role, experience_level, learning_pace, req.user.id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to save onboarding data' });
      }
      
      res.json({ message: 'Onboarding completed successfully' });
    }
  );
});

// ==================== ENROLLMENT ROUTES ====================

// Check enrollment status
app.get('/api/enrollment/status', authenticateToken, (req, res) => {
  // Admin always has full access
  if (req.user.role === 'admin') {
    return res.json({
      enrolled: true,
      paid: true,
      enrollment: {
        user_id: req.user.id,
        payment_status: 'completed',
        content_access_granted: 1
      }
    });
  }
  
  db.get(
    'SELECT * FROM enrollments WHERE user_id = ? ORDER BY enrolled_at DESC LIMIT 1',
    [req.user.id],
    (err, enrollment) => {
      if (err) {
        return res.status(500).json({ error: 'Server error' });
      }
      
      // Set default value for content_access_granted if null
      if (enrollment && enrollment.content_access_granted === null) {
        enrollment.content_access_granted = 1;
      }
      
      res.json({
        enrolled: !!enrollment,
        paid: enrollment?.payment_status === 'completed',
        enrollment: enrollment || null
      });
    }
  );
});

// Create enrollment (initiate payment)
app.post('/api/enrollment/create', authenticateToken, (req, res) => {
  const { paymentMethod } = req.body;
  const amount = process.env.COURSE_PRICE;

  db.run(
    'INSERT INTO enrollments (user_id, payment_amount, payment_method, payment_status) VALUES (?, ?, ?, ?)',
    [req.user.id, amount, paymentMethod, 'pending'],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Enrollment creation failed' });
      }

      res.json({
        message: 'Enrollment created',
        enrollmentId: this.lastID,
        amount: amount,
        upiId: process.env.UPI_ID,
        upiName: process.env.UPI_NAME
      });
    }
  );
});

// Confirm payment
app.post('/api/enrollment/confirm-payment', authenticateToken, async (req, res) => {
  const { enrollmentId, transactionId } = req.body;

  if (!transactionId) {
    return res.status(400).json({ error: 'Transaction ID is required' });
  }

  db.run(
    `UPDATE enrollments 
     SET payment_status = 'completed', 
         transaction_id = ?, 
         payment_date = CURRENT_TIMESTAMP 
     WHERE id = ? AND user_id = ?`,
    [transactionId, enrollmentId, req.user.id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Payment confirmation failed' });
      }

      if (this.changes === 0) {
        return res.status(404).json({ error: 'Enrollment not found' });
      }

      // Get user details for Telegram notification
      db.get('SELECT u.name, u.email, u.phone, e.payment_amount FROM users u JOIN enrollments e ON u.id = e.user_id WHERE e.id = ?', 
        [enrollmentId], 
        async (err, user) => {
          if (!err && user) {
            // Send Telegram notification
            await sendPaymentNotification({
              studentName: user.name,
              studentEmail: user.email,
              phone: user.phone,
              amount: user.payment_amount,
              transactionId: transactionId,
              status: 'completed'
            });
          }
        }
      );

      res.json({
        message: 'Payment confirmed successfully! You now have access to all courses.',
        success: true
      });
    }
  );
});

// ==================== ADMIN ROUTES ====================

// Get all students
app.get('/api/admin/students', authenticateToken, authenticateAdmin, (req, res) => {
  db.all(
    `SELECT u.*, e.id as enrollment_id, e.payment_status, e.payment_amount, e.transaction_id, 
     e.enrolled_at, e.payment_date, e.payment_method, e.course_completed, e.certificate_issued, e.content_access_granted
     FROM users u
     LEFT JOIN enrollments e ON u.id = e.user_id
     WHERE u.role = 'student'
     ORDER BY u.created_at DESC`,
    (err, students) => {
      if (err) {
        console.error('Error fetching students:', err);
        return res.status(500).json({ error: 'Server error' });
      }
      res.json(students);
    }
  );
});

// Update student details
app.put('/api/admin/students/:id', authenticateToken, authenticateAdmin, (req, res) => {
  const { name, email, phone } = req.body;
  const studentId = req.params.id;

  db.run(
    'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ? AND role = "student"',
    [name, email, phone, studentId],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Update failed' });
      }

      if (this.changes === 0) {
        return res.status(404).json({ error: 'Student not found' });
      }

      res.json({ message: 'Student updated successfully' });
    }
  );
});

// Delete student
app.delete('/api/admin/students/:id', authenticateToken, authenticateAdmin, (req, res) => {
  const studentId = req.params.id;

  db.run('DELETE FROM enrollments WHERE user_id = ?', [studentId], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Delete failed' });
    }

    db.run('DELETE FROM users WHERE id = ? AND role = "student"', [studentId], function(err) {
      if (err) {
        return res.status(500).json({ error: 'Delete failed' });
      }

      if (this.changes === 0) {
        return res.status(404).json({ error: 'Student not found' });
      }

      res.json({ message: 'Student deleted successfully' });
    });
  });
});

// Update student password
app.put('/api/admin/students/:id/password', authenticateToken, authenticateAdmin, async (req, res) => {
  const { password } = req.body;
  const studentId = req.params.id;

  if (!password || password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    db.run(
      'UPDATE users SET password = ? WHERE id = ? AND role = "student"',
      [hashedPassword, studentId],
      function(err) {
        if (err) {
          return res.status(500).json({ error: 'Password update failed' });
        }

        if (this.changes === 0) {
          return res.status(404).json({ error: 'Student not found' });
        }

        res.json({ message: 'Password updated successfully' });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update enrollment/payment status
app.put('/api/admin/enrollments/:id', authenticateToken, authenticateAdmin, (req, res) => {
  const { payment_status, transaction_id, payment_amount, course_completed, certificate_issued, content_access_granted } = req.body;
  const enrollmentId = req.params.id;

  db.run(
    `UPDATE enrollments SET payment_status = ?, transaction_id = ?, payment_amount = ?, 
     course_completed = ?, certificate_issued = ?, content_access_granted = ? WHERE id = ?`,
    [payment_status, transaction_id, payment_amount, course_completed ? 1 : 0, certificate_issued ? 1 : 0, content_access_granted ? 1 : 0, enrollmentId],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Update failed' });
      }

      if (this.changes === 0) {
        return res.status(404).json({ error: 'Enrollment not found' });
      }

      res.json({ message: 'Enrollment updated successfully' });
    }
  );
});

// Admin: Create enrollment for a student
app.post('/api/admin/enrollments/create', authenticateToken, authenticateAdmin, (req, res) => {
  const { user_id, payment_amount, payment_method, payment_status, transaction_id } = req.body;

  db.run(
    `INSERT INTO enrollments (user_id, payment_amount, payment_method, payment_status, transaction_id, payment_date) 
     VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
    [user_id, payment_amount, payment_method || 'UPI', payment_status || 'completed', transaction_id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to create enrollment' });
      }

      res.json({ 
        message: 'Enrollment created successfully',
        enrollmentId: this.lastID
      });
    }
  );
});

// Admin: grant/revoke single module access quickly
app.put('/api/admin/access/:userId', authenticateToken, authenticateAdmin, (req, res) => {
  const { module, value } = req.body;
  const allowed = ['sql_access','python_access','pyspark_access','databricks_access','aws_access','git_access'];
  if (!allowed.includes(module)) return res.status(400).json({ error: 'Invalid module' });
  db.run(
    `INSERT INTO syllabus_access (user_id, ${module}) VALUES (?, ?)
     ON CONFLICT(user_id) DO UPDATE SET ${module} = excluded.${module}`,
    [req.params.userId, value ? 1 : 0],
    function(err) {
      if (err) return res.status(500).json({ error: 'Update failed' });
      res.json({ message: 'Access updated' });
    }
  );
});

// Get dashboard stats
app.get('/api/admin/stats', authenticateToken, authenticateAdmin, (req, res) => {
  const stats = {};

  db.get('SELECT COUNT(*) as total FROM users WHERE role = "student"', (err, row) => {
    stats.totalStudents = row.total;

    db.get('SELECT COUNT(*) as total FROM enrollments WHERE payment_status = "completed"', (err, row) => {
      stats.paidStudents = row.total;

      db.get('SELECT SUM(payment_amount) as total FROM enrollments WHERE payment_status = "completed"', (err, row) => {
        stats.totalRevenue = row.total || 0;

        db.get('SELECT COUNT(*) as total FROM enrollments WHERE payment_status = "pending"', (err, row) => {
          stats.pendingPayments = row.total;

          res.json(stats);
        });
      });
    });
  });
});

// Get payment receipt
app.get('/api/enrollment/receipt/:enrollmentId', authenticateToken, (req, res) => {
  const enrollmentId = req.params.enrollmentId;
  
  db.get(
    `SELECT e.*, u.name, u.email, u.phone 
     FROM enrollments e 
     JOIN users u ON e.user_id = u.id 
     WHERE e.id = ? AND e.user_id = ?`,
    [enrollmentId, req.user.id],
    (err, receipt) => {
      if (err || !receipt) {
        return res.status(404).json({ error: 'Receipt not found' });
      }
      res.json(receipt);
    }
  );
});

// Admin get any receipt
app.get('/api/admin/receipt/:enrollmentId', authenticateToken, authenticateAdmin, (req, res) => {
  const enrollmentId = req.params.enrollmentId;
  
  db.get(
    `SELECT e.*, u.name, u.email, u.phone 
     FROM enrollments e 
     JOIN users u ON e.user_id = u.id 
     WHERE e.id = ?`,
    [enrollmentId],
    (err, receipt) => {
      if (err || !receipt) {
        return res.status(404).json({ error: 'Receipt not found' });
      }
      res.json(receipt);
    }
  );
});

// Get certificate (only if course completed)
app.get('/api/enrollment/certificate', authenticateToken, (req, res) => {
  db.get(
    `SELECT e.*, u.name FROM enrollments e 
     JOIN users u ON e.user_id = u.id 
     WHERE e.user_id = ? AND e.payment_status = 'completed' 
     ORDER BY e.enrolled_at DESC LIMIT 1`,
    [req.user.id],
    (err, enrollment) => {
      if (err || !enrollment) {
        return res.status(404).json({ error: 'Enrollment not found' });
      }
      
      if (!enrollment.course_completed) {
        return res.status(403).json({ error: 'Course not completed yet', completed: false });
      }
      
      res.json({ 
        name: enrollment.name, 
        course: enrollment.course_name,
        completedDate: enrollment.payment_date,
        certificateIssued: enrollment.certificate_issued
      });
    }
  );
});

// ==================== SYLLABUS ACCESS ROUTES ====================

// Get syllabus access for logged-in student
app.get('/api/syllabus/access', authenticateToken, (req, res) => {
  // Admin gets full access to all syllabuses
  if (req.user.role === 'admin') {
    return res.json({ 
      sql_access: 1, 
      python_access: 1, 
      pyspark_access: 1, 
      databricks_access: 1,
      aws_access: 1,
      projects_access: 1,
      git_access: 1
    });
  }
  
  db.get('SELECT * FROM syllabus_access WHERE user_id = ?', [req.user.id], (err, row) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    res.json(row || { sql_access: 0, python_access: 0, pyspark_access: 0, databricks_access: 0, aws_access: 0, git_access: 0, projects_access: 0 });
  });
});

// Admin: get syllabus access for a student
app.get('/api/admin/syllabus/:userId', authenticateToken, authenticateAdmin, (req, res) => {
  db.get('SELECT * FROM syllabus_access WHERE user_id = ?', [req.params.userId], (err, row) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    res.json(row || { user_id: req.params.userId, sql_access: 0, python_access: 0, pyspark_access: 0, databricks_access: 0, aws_access: 0, git_access: 0, projects_access: 0 });
  });
});

// Admin: update syllabus access for a student
app.put('/api/admin/syllabus/:userId', authenticateToken, authenticateAdmin, (req, res) => {
  const { sql_access, python_access, pyspark_access, databricks_access, aws_access, git_access, projects_access } = req.body;
  const userId = req.params.userId;
  db.run(
    `INSERT INTO syllabus_access (user_id, sql_access, python_access, pyspark_access, databricks_access, aws_access, git_access, projects_access)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(user_id) DO UPDATE SET
       sql_access = excluded.sql_access,
       python_access = excluded.python_access,
       pyspark_access = excluded.pyspark_access,
       databricks_access = excluded.databricks_access,
       aws_access = excluded.aws_access,
       git_access = excluded.git_access,
       projects_access = excluded.projects_access`,
    [userId, sql_access ? 1 : 0, python_access ? 1 : 0, pyspark_access ? 1 : 0, databricks_access ? 1 : 0, aws_access ? 1 : 0, git_access ? 1 : 0, projects_access ? 1 : 0],
    function(err) {
      if (err) return res.status(500).json({ error: 'Update failed' });
      res.json({ message: 'Syllabus access updated' });
    }
  );
});

// ==================== SUB-TOPIC ACCESS ROUTES ====================

// Get sub-topic access for student
app.get('/api/subtopic/access', authenticateToken, (req, res) => {
  if (req.user.role === 'admin') {
    return res.json({ all_access: true });
  }
  db.all('SELECT * FROM subtopic_access WHERE user_id = ?', [req.user.id], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    res.json(rows || []);
  });
});

// Get feature access (Resume/Interview tabs)
app.get('/api/feature/access', authenticateToken, (req, res) => {
  if (req.user.role === 'admin') {
    return res.json({ all_access: true });
  }
  db.all('SELECT * FROM feature_access WHERE user_id = ?', [req.user.id], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    res.json(rows || []);
  });
});

// Admin: Get all access for a student
app.get('/api/admin/access/:userId', authenticateToken, authenticateAdmin, (req, res) => {
  const userId = req.params.userId;
  db.all('SELECT * FROM subtopic_access WHERE user_id = ?', [userId], (err, subtopics) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    db.all('SELECT * FROM feature_access WHERE user_id = ?', [userId], (err, features) => {
      if (err) return res.status(500).json({ error: 'Server error' });
      res.json({ subtopics: subtopics || [], features: features || [] });
    });
  });
});

// Admin: Update sub-topic access
app.put('/api/admin/subtopic/:userId', authenticateToken, authenticateAdmin, (req, res) => {
  const { module, group_name, access_granted } = req.body;
  db.run(
    `INSERT INTO subtopic_access (user_id, module, group_name, access_granted)
     VALUES (?, ?, ?, ?)
     ON CONFLICT(user_id, module, group_name) DO UPDATE SET access_granted = excluded.access_granted`,
    [req.params.userId, module, group_name, access_granted ? 1 : 0],
    (err) => {
      if (err) return res.status(500).json({ error: 'Update failed' });
      res.json({ message: 'Access updated' });
    }
  );
});

// Admin: Get feature access for a user
app.get('/api/admin/feature/:userId', authenticateToken, authenticateAdmin, (req, res) => {
  db.all(
    'SELECT feature_type, tab_number, access_granted FROM feature_access WHERE user_id = ?',
    [req.params.userId],
    (err, rows) => {
      if (err) return res.status(500).json({ error: 'Failed to fetch' });
      res.json(rows || []);
    }
  );
});

// Admin: Update feature access (Resume/Interview tabs)
app.put('/api/admin/feature/:userId', authenticateToken, authenticateAdmin, (req, res) => {
  const { feature_type, tab_number, access_granted } = req.body;
  db.run(
    `INSERT INTO feature_access (user_id, feature_type, tab_number, access_granted)
     VALUES (?, ?, ?, ?)
     ON CONFLICT(user_id, feature_type, tab_number) DO UPDATE SET access_granted = excluded.access_granted`,
    [req.params.userId, feature_type, tab_number, access_granted ? 1 : 0],
    (err) => {
      if (err) return res.status(500).json({ error: 'Update failed' });
      res.json({ message: 'Access updated' });
    }
  );
});

// ==================== TOPIC ACCESS ROUTES ====================

// Get all topic access settings (admin) - DEPRECATED, use subtopic_access
app.get('/api/admin/topics', authenticateToken, authenticateAdmin, (req, res) => {
  res.json([]);
});

// Update topic access (admin) - DEPRECATED
app.put('/api/admin/topics/:topicId', authenticateToken, authenticateAdmin, (req, res) => {
  res.json({ message: 'Use subtopic access instead' });
});

// Get topic access for students - DEPRECATED
app.get('/api/topics', authenticateToken, (req, res) => {
  res.json([]);
});

// Public: get free topics (no auth required) - DEPRECATED
app.get('/api/free-topics', (req, res) => {
  res.json([]);
});

// ==================== LANDING PAGE CMS ROUTES ====================

// Get landing page sections
app.get('/api/landing/sections', authenticateToken, authenticateAdmin, (req, res) => {
  db.all('SELECT * FROM landing_sections ORDER BY display_order', (err, rows) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    // Parse JSON content field
    const sections = rows.map(row => ({
      ...row,
      content: JSON.parse(row.content || '{}')
    }));
    res.json(sections);
  });
});

// Save landing page sections
app.post('/api/landing/sections', authenticateToken, authenticateAdmin, (req, res) => {
  const sections = req.body;
  
  // Clear existing sections
  db.run('DELETE FROM landing_sections', (err) => {
    if (err) return res.status(500).json({ error: 'Failed to clear sections' });
    
    // Insert new sections
    const stmt = db.prepare(
      `INSERT INTO landing_sections (id, name, type, display_order, title, subtitle, content, visible, updated_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    );
    
    sections.forEach(section => {
      stmt.run(
        section.id,
        section.name,
        section.type,
        section.order,
        section.title,
        section.subtitle,
        JSON.stringify(section.content),
        section.visible ? 1 : 0,
        section.updatedAt || new Date().toISOString()
      );
    });
    
    stmt.finalize();
    res.json({ message: 'Sections saved successfully' });
  });
});

// Get public landing page sections (for rendering)
app.get('/api/landing/public-sections', (req, res) => {
  db.all('SELECT * FROM landing_sections WHERE visible = 1 ORDER BY display_order', (err, rows) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    const sections = rows.map(row => ({
      ...row,
      content: JSON.parse(row.content || '{}')
    }));
    res.json(sections);
  });
});

// Get landing page pricing
app.get('/api/landing/pricing', (req, res) => {
  db.get('SELECT * FROM landing_pricing ORDER BY id DESC LIMIT 1', (err, row) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    res.json(row || { regular_price: 6999, offer_price: 1111, offer_days: 3, limited_seats: 100 });
  });
});

// Save landing page pricing (admin)
app.post('/api/landing/pricing', authenticateToken, authenticateAdmin, (req, res) => {
  const { regularPrice, offerPrice, offerDays, limitedSeats } = req.body;
  
  db.run(
    `INSERT INTO landing_pricing (regular_price, offer_price, offer_days, limited_seats, updated_at) 
     VALUES (?, ?, ?, ?, ?)`,
    [regularPrice, offerPrice, offerDays, limitedSeats, new Date().toISOString()],
    function(err) {
      if (err) return res.status(500).json({ error: 'Failed to save pricing' });
      res.json({ message: 'Pricing saved successfully' });
    }
  );
});

// ==================== UPI QR CODE ROUTE ====================

// Generate UPI QR Code
app.get('/api/payment/qr-code', async (req, res) => {
  try {
    const upiId = process.env.UPI_ID;
    const upiName = process.env.UPI_NAME;
    const amount = process.env.COURSE_PRICE;
    
    // UPI payment string format
    const upiString = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(upiName)}&am=${amount}&cu=INR&tn=${encodeURIComponent('MORPHED TECH Course Payment')}`;
    
    // Generate QR code as data URL
    const qrCodeDataURL = await QRCode.toDataURL(upiString, {
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });
    
    res.json({
      qrCode: qrCodeDataURL,
      upiId: upiId,
      upiName: upiName,
      amount: amount
    });
  } catch (error) {
    console.error('QR Code generation error:', error);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

// Test Telegram notification
app.get('/api/test-telegram', async (req, res) => {
  const { sendTestNotification } = require('./telegram-helper');
  const result = await sendTestNotification();
  res.json(result);
});

// ==================== SECURITY ROUTES ====================

// Log security event (open — called from frontend)
app.post('/api/security/log', (req, res) => {
  const { event_type, detail, severity, user_id, user_email, page, user_agent, device_type } = req.body;
  if (!event_type) return res.status(400).json({ error: 'event_type required' });

  db.run(
    `INSERT INTO security_logs (user_id, user_email, event_type, detail, severity, page, user_agent, device_type)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [user_id || null, user_email || 'anonymous', event_type, detail || '', severity || 'LOW', page || '', (user_agent || '').substring(0, 200), device_type || 'Desktop'],
    (err) => {
      if (err) return res.status(500).json({ error: 'Log failed' });
      res.json({ ok: true });
    }
  );
});

// Get security logs (admin only)
app.get('/api/admin/security/logs', authenticateToken, authenticateAdmin, (req, res) => {
  const limit = parseInt(req.query.limit) || 100;
  const severity = req.query.severity;
  const whereClause = severity ? `WHERE severity = '${severity}'` : '';

  db.all(
    `SELECT sl.*, u.name as user_name FROM security_logs sl
     LEFT JOIN users u ON sl.user_id = u.id
     ${whereClause}
     ORDER BY sl.timestamp DESC LIMIT ?`,
    [limit],
    (err, rows) => {
      if (err) return res.status(500).json({ error: 'Server error' });
      res.json(rows || []);
    }
  );
});

// Get security summary stats (admin only)
app.get('/api/admin/security/stats', authenticateToken, authenticateAdmin, (req, res) => {
  db.get(`SELECT
    COUNT(*) as total,
    SUM(CASE WHEN severity='HIGH' THEN 1 ELSE 0 END) as high,
    SUM(CASE WHEN severity='MEDIUM' THEN 1 ELSE 0 END) as medium,
    SUM(CASE WHEN severity='LOW' THEN 1 ELSE 0 END) as low,
    COUNT(DISTINCT user_email) as affected_users
    FROM security_logs WHERE timestamp > datetime('now', '-24 hours')`, [],
    (err, stats) => {
      if (err) return res.status(500).json({ error: 'Server error' });
      db.get('SELECT COUNT(*) as blocked FROM blocked_users', [], (err2, blocked) => {
        res.json({ ...stats, blocked_users: blocked?.blocked || 0 });
      });
    }
  );
});

// Force logout / block user (admin only)
app.post('/api/admin/security/block/:userId', authenticateToken, authenticateAdmin, (req, res) => {
  const { reason } = req.body;
  db.run(
    `INSERT OR REPLACE INTO blocked_users (user_id, reason) VALUES (?, ?)`,
    [req.params.userId, reason || 'Blocked by admin'],
    (err) => {
      if (err) return res.status(500).json({ error: 'Block failed' });
      // Invalidate session
      db.run('DELETE FROM active_sessions WHERE user_id = ?', [req.params.userId]);
      res.json({ message: 'User blocked and session invalidated' });
    }
  );
});

// Unblock user (admin only)
app.post('/api/admin/security/unblock/:userId', authenticateToken, authenticateAdmin, (req, res) => {
  db.run('DELETE FROM blocked_users WHERE user_id = ?', [req.params.userId], (err) => {
    if (err) return res.status(500).json({ error: 'Unblock failed' });
    res.json({ message: 'User unblocked' });
  });
});

// Check if user is blocked (called on login)
app.get('/api/security/check/:userId', authenticateToken, (req, res) => {
  db.get('SELECT * FROM blocked_users WHERE user_id = ?', [req.params.userId], (err, row) => {
    res.json({ blocked: !!row, reason: row?.reason || null });
  });
});

// Update session (upsert on login)
app.post('/api/security/session', authenticateToken, (req, res) => {
  const { device_fp, device_type, user_agent } = req.body;
  db.run(
    `INSERT INTO active_sessions (user_id, session_token, device_fp, device_type, user_agent, last_active)
     VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
     ON CONFLICT(user_id) DO UPDATE SET
       session_token = excluded.session_token,
       device_fp = excluded.device_fp,
       device_type = excluded.device_type,
       user_agent = excluded.user_agent,
       last_active = CURRENT_TIMESTAMP`,
    [req.user.id, req.headers.authorization?.split(' ')[1] || '', device_fp || '', device_type || 'Desktop', (user_agent || '').substring(0, 200)],
    (err) => {
      if (err) return res.status(500).json({ error: 'Session update failed' });
      res.json({ ok: true });
    }
  );
});

// Get active sessions (admin only)
app.get('/api/admin/security/sessions', authenticateToken, authenticateAdmin, (req, res) => {
  db.all(
    `SELECT s.*, u.name, u.email FROM active_sessions s
     JOIN users u ON s.user_id = u.id
     ORDER BY s.last_active DESC`,
    (err, rows) => {
      if (err) return res.status(500).json({ error: 'Server error' });
      res.json(rows || []);
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Admin Portal: http://localhost:${PORT}/admin-login.html`);
  console.log(`👨‍🎓 Student Portal: http://localhost:${PORT}/student-login.html`);
});
