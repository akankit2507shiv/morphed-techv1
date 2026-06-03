// ==================== DATABASE ABSTRACTION LAYER ====================
// Provides unified interface for SQLite (local) and MongoDB (production)
// Usage: const DB = require('./db-layer');
//        await DB.init();
//        const user = await DB.users.findByEmail('test@test.com');

const bcrypt = require('bcryptjs');
require('dotenv').config();

const USE_MONGODB = !!process.env.MONGODB_URI;

let mongo, sqlite3, sqliteDb;
let mongoose; // for ObjectId conversion

if (USE_MONGODB) {
  mongo = require('./database-mongo');
  mongoose = require('mongoose');
} else {
  sqlite3 = require('sqlite3').verbose();
}

// Helper: normalize syllabus access document to API shape
function formatSyllabusAccess(row) {
  const defaults = { sql_access: 0, python_access: 0, pyspark_access: 0, databricks_access: 0, aws_access: 0, git_access: 0, projects_access: 0 };
  if (!row) return defaults;
  return {
    sql_access: row.sql_access ? 1 : 0,
    python_access: row.python_access ? 1 : 0,
    pyspark_access: row.pyspark_access ? 1 : 0,
    databricks_access: row.databricks_access ? 1 : 0,
    aws_access: row.aws_access ? 1 : 0,
    git_access: row.git_access ? 1 : 0,
    projects_access: row.projects_access ? 1 : 0
  };
}

// Helper: format student for admin API (never expose password hash)
function formatStudentRecord(s, enrollment) {
  return {
    id: s._id ? s._id.toString() : String(s.id),
    name: s.name,
    email: s.email,
    phone: s.phone || '',
    role: s.role,
    target_role: s.target_role || '',
    experience_level: s.experience_level || '',
    learning_pace: s.learning_pace || '',
    onboarding_completed: !!s.onboarding_completed,
    created_at: s.created_at,
    enrollment_id: enrollment?._id?.toString() || enrollment?.id?.toString() || null,
    payment_status: enrollment?.payment_status || null,
    payment_amount: enrollment?.payment_amount ?? null,
    transaction_id: enrollment?.transaction_id || null,
    enrolled_at: enrollment?.enrolled_at || null,
    payment_date: enrollment?.payment_date || null,
    payment_method: enrollment?.payment_method || null,
    course_completed: !!enrollment?.course_completed,
    certificate_issued: !!enrollment?.certificate_issued,
    content_access_granted: enrollment?.content_access_granted ?? true
  };
}

// Helper: convert string ID to MongoDB ObjectId (safe)
function toObjectId(id) {
  if (!USE_MONGODB) return id;
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      return new mongoose.Types.ObjectId(id);
    }
  } catch(e) {}
  return id;
}

// Helper: promisify sqlite3 callbacks
function sqlGet(sql, params = []) {
  return new Promise((resolve, reject) => {
    sqliteDb.get(sql, params, (err, row) => {
      if (err) reject(err); else resolve(row || null);
    });
  });
}

function sqlAll(sql, params = []) {
  return new Promise((resolve, reject) => {
    sqliteDb.all(sql, params, (err, rows) => {
      if (err) reject(err); else resolve(rows || []);
    });
  });
}

function sqlRun(sql, params = []) {
  return new Promise((resolve, reject) => {
    sqliteDb.run(sql, params, function(err) {
      if (err) reject(err); else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

// ==================== INIT ====================
async function init() {
  if (USE_MONGODB) {
    const connected = await mongo.connectMongoDB(process.env.MONGODB_URI);
    if (!connected) throw new Error('MongoDB connection failed');
    // Create admin if not exists
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (adminEmail && adminPassword) {
      const existing = await mongo.User.findOne({ email: adminEmail });
      if (!existing) {
        const hashed = await bcrypt.hash(adminPassword, 10);
        await mongo.User.create({ name: 'Admin', email: adminEmail, password: hashed, role: 'admin' });
        console.log('✅ Admin user created');
      }
    }
    // Default pricing
    const pricing = await mongo.LandingPricing.findOne();
    if (!pricing) {
      await mongo.LandingPricing.create({ regular_price: 6999, offer_price: 1111, offer_days: 3, limited_seats: 100 });
    }
    return 'mongodb';
  } else {
    return new Promise((resolve, reject) => {
      sqliteDb = new sqlite3.Database('./morphed-tech.db', (err) => {
        if (err) return reject(err);
        console.log('✅ Connected to SQLite database');
        initSQLiteTables().then(() => resolve('sqlite')).catch(reject);
      });
    });
  }
}

// ==================== SQLITE TABLE INIT ====================
async function initSQLiteTables() {
  const tables = [
    `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, password TEXT NOT NULL, phone TEXT, role TEXT DEFAULT 'student', target_role TEXT, experience_level TEXT, learning_pace TEXT, onboarding_completed BOOLEAN DEFAULT 0, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS enrollments (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, course_name TEXT DEFAULT 'Data Engineering Mastery', payment_status TEXT DEFAULT 'pending', payment_amount REAL, payment_method TEXT, transaction_id TEXT, payment_date DATETIME, enrolled_at DATETIME DEFAULT CURRENT_TIMESTAMP, course_completed BOOLEAN DEFAULT 0, certificate_issued BOOLEAN DEFAULT 0, content_access_granted BOOLEAN DEFAULT 1, FOREIGN KEY (user_id) REFERENCES users(id))`,
    `CREATE TABLE IF NOT EXISTS syllabus_access (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL UNIQUE, sql_access INTEGER DEFAULT 0, python_access INTEGER DEFAULT 0, pyspark_access INTEGER DEFAULT 0, databricks_access INTEGER DEFAULT 0, aws_access INTEGER DEFAULT 0, git_access INTEGER DEFAULT 0, projects_access INTEGER DEFAULT 0, FOREIGN KEY (user_id) REFERENCES users(id))`,
    `CREATE TABLE IF NOT EXISTS subtopic_access (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, module TEXT NOT NULL, group_name TEXT NOT NULL, access_granted INTEGER DEFAULT 0, UNIQUE(user_id, module, group_name), FOREIGN KEY (user_id) REFERENCES users(id))`,
    `CREATE TABLE IF NOT EXISTS feature_access (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, feature_type TEXT NOT NULL, tab_number INTEGER NOT NULL, access_granted INTEGER DEFAULT 0, UNIQUE(user_id, feature_type, tab_number), FOREIGN KEY (user_id) REFERENCES users(id))`,
    `CREATE TABLE IF NOT EXISTS security_logs (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, user_email TEXT, event_type TEXT NOT NULL, detail TEXT, severity TEXT DEFAULT 'LOW', page TEXT, user_agent TEXT, device_type TEXT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS active_sessions (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, session_token TEXT NOT NULL, device_fp TEXT, device_type TEXT, user_agent TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, last_active DATETIME DEFAULT CURRENT_TIMESTAMP, UNIQUE(user_id))`,
    `CREATE TABLE IF NOT EXISTS blocked_users (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL UNIQUE, reason TEXT, blocked_at DATETIME DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS landing_sections (id INTEGER PRIMARY KEY, name TEXT NOT NULL, type TEXT NOT NULL, display_order INTEGER DEFAULT 1, title TEXT, subtitle TEXT, content TEXT, visible INTEGER DEFAULT 1, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS landing_pricing (id INTEGER PRIMARY KEY AUTOINCREMENT, regular_price INTEGER NOT NULL, offer_price INTEGER NOT NULL, offer_days INTEGER DEFAULT 3, limited_seats INTEGER DEFAULT 100, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP)`,
    `CREATE TABLE IF NOT EXISTS module_access_audit (id INTEGER PRIMARY KEY AUTOINCREMENT, student_id INTEGER, student_email TEXT, module_name TEXT NOT NULL, old_value INTEGER DEFAULT 0, new_value INTEGER NOT NULL, action TEXT NOT NULL, admin_id INTEGER, admin_email TEXT, action_time DATETIME DEFAULT CURRENT_TIMESTAMP)`
  ];
  for (const sql of tables) {
    await sqlRun(sql);
  }
  // Alter columns silently
  const alters = [
    `ALTER TABLE users ADD COLUMN target_role TEXT`,
    `ALTER TABLE users ADD COLUMN experience_level TEXT`,
    `ALTER TABLE users ADD COLUMN learning_pace TEXT`,
    `ALTER TABLE users ADD COLUMN onboarding_completed BOOLEAN DEFAULT 0`,
    `ALTER TABLE syllabus_access ADD COLUMN projects_access INTEGER DEFAULT 0`,
    `ALTER TABLE syllabus_access ADD COLUMN aws_access INTEGER DEFAULT 0`,
    `ALTER TABLE syllabus_access ADD COLUMN git_access INTEGER DEFAULT 0`,
    `ALTER TABLE enrollments ADD COLUMN course_completed BOOLEAN DEFAULT 0`,
    `ALTER TABLE enrollments ADD COLUMN certificate_issued BOOLEAN DEFAULT 0`,
    `ALTER TABLE enrollments ADD COLUMN content_access_granted BOOLEAN DEFAULT 1`
  ];
  for (const sql of alters) {
    try { await sqlRun(sql); } catch(e) {} // ignore if column exists
  }
  // Default pricing
  await sqlRun(`INSERT OR IGNORE INTO landing_pricing (id, regular_price, offer_price, offer_days, limited_seats) VALUES (1, 6999, 1111, 3, 100)`);
  // Create admin
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (adminEmail && adminPassword) {
    const existing = await sqlGet('SELECT * FROM users WHERE email = ?', [adminEmail]);
    if (!existing) {
      const hashed = await bcrypt.hash(adminPassword, 10);
      await sqlRun('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', ['Admin', adminEmail, hashed, 'admin']);
      console.log('✅ Admin user created');
    }
  }
}

// ==================== USERS ====================
const users = {
  async findByEmail(email) {
    if (USE_MONGODB) {
      const u = await mongo.User.findOne({ email }).lean();
      if (u) { u.id = u._id.toString(); }
      return u;
    }
    return sqlGet('SELECT * FROM users WHERE email = ?', [email]);
  },
  async findById(id) {
    if (USE_MONGODB) {
      const u = await mongo.User.findById(id).lean();
      if (u) { u.id = u._id.toString(); }
      return u;
    }
    return sqlGet('SELECT id, name, email, phone, role, target_role, experience_level, learning_pace, onboarding_completed, created_at FROM users WHERE id = ?', [id]);
  },
  async create({ name, email, password, phone }) {
    if (USE_MONGODB) {
      const u = await mongo.User.create({ name, email, password, phone });
      return { id: u._id.toString(), name, email, role: 'student' };
    }
    const r = await sqlRun('INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)', [name, email, password, phone]);
    return { id: r.lastID, name, email, role: 'student' };
  },
  async updateOnboarding(id, { target_role, experience_level, learning_pace }) {
    if (USE_MONGODB) {
      await mongo.User.findByIdAndUpdate(id, { target_role, experience_level, learning_pace, onboarding_completed: true });
      return { changes: 1 };
    }
    return sqlRun('UPDATE users SET target_role = ?, experience_level = ?, learning_pace = ?, onboarding_completed = 1 WHERE id = ?', [target_role, experience_level, learning_pace, id]);
  },
  async getAllStudents() {
    if (USE_MONGODB) {
      const students = await mongo.User.find({ role: 'student' }).sort({ created_at: -1 }).lean();
      const result = [];
      for (const s of students) {
        const e = await mongo.Enrollment.findOne({ user_id: s._id }).sort({ enrolled_at: -1 }).lean();
        result.push(formatStudentRecord(s, e));
      }
      return result;
    }
    return sqlAll(`SELECT u.*, e.id as enrollment_id, e.payment_status, e.payment_amount, e.transaction_id, e.enrolled_at, e.payment_date, e.payment_method, e.course_completed, e.certificate_issued, e.content_access_granted FROM users u LEFT JOIN enrollments e ON u.id = e.user_id WHERE u.role = 'student' ORDER BY u.created_at DESC`);
  },
  async update(id, { name, email, phone }) {
    if (USE_MONGODB) {
      const r = await mongo.User.findOneAndUpdate({ _id: toObjectId(id), role: 'student' }, { name, email, phone });
      return { changes: r ? 1 : 0 };
    }
    return sqlRun('UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ? AND role = "student"', [name, email, phone, id]);
  },
  async delete(id) {
    if (USE_MONGODB) {
      const oid = toObjectId(id);
      await mongo.Enrollment.deleteMany({ user_id: oid });
      await mongo.SyllabusAccess.deleteMany({ user_id: oid });
      await mongo.SubtopicAccess.deleteMany({ user_id: oid });
      await mongo.FeatureAccess.deleteMany({ user_id: oid });
      await mongo.ActiveSession.deleteMany({ user_id: oid });
      const r = await mongo.User.findOneAndDelete({ _id: oid, role: 'student' });
      return { changes: r ? 1 : 0 };
    }
    await sqlRun('DELETE FROM enrollments WHERE user_id = ?', [id]);
    return sqlRun('DELETE FROM users WHERE id = ? AND role = "student"', [id]);
  },
  async updatePassword(id, hashedPassword) {
    if (USE_MONGODB) {
      const r = await mongo.User.findOneAndUpdate({ _id: toObjectId(id), role: 'student' }, { password: hashedPassword });
      return { changes: r ? 1 : 0 };
    }
    return sqlRun('UPDATE users SET password = ? WHERE id = ? AND role = "student"', [hashedPassword, id]);
  }
};

// ==================== ENROLLMENTS ====================
const enrollments = {
  async findByUserId(userId) {
    if (USE_MONGODB) {
      const e = await mongo.Enrollment.findOne({ user_id: toObjectId(userId) }).sort({ enrolled_at: -1 }).lean();
      if (e) { e.id = e._id.toString(); e.user_id = e.user_id.toString(); }
      return e;
    }
    return sqlGet('SELECT * FROM enrollments WHERE user_id = ? ORDER BY enrolled_at DESC LIMIT 1', [userId]);
  },
  async create(userId, amount, method) {
    if (USE_MONGODB) {
      const e = await mongo.Enrollment.create({ user_id: toObjectId(userId), payment_amount: amount, payment_method: method, payment_status: 'pending' });
      return { id: e._id.toString() };
    }
    const r = await sqlRun('INSERT INTO enrollments (user_id, payment_amount, payment_method, payment_status) VALUES (?, ?, ?, ?)', [userId, amount, method, 'pending']);
    return { id: r.lastID };
  },
  async confirmPayment(enrollmentId, userId, transactionId) {
    if (USE_MONGODB) {
      const r = await mongo.Enrollment.findOneAndUpdate({ _id: toObjectId(enrollmentId), user_id: toObjectId(userId) }, { payment_status: 'completed', transaction_id: transactionId, payment_date: new Date() });
      return { changes: r ? 1 : 0 };
    }
    return sqlRun(`UPDATE enrollments SET payment_status = 'completed', transaction_id = ?, payment_date = CURRENT_TIMESTAMP WHERE id = ? AND user_id = ?`, [transactionId, enrollmentId, userId]);
  },
  async adminUpdate(enrollmentId, data) {
    if (USE_MONGODB) {
      const r = await mongo.Enrollment.findByIdAndUpdate(enrollmentId, { payment_status: data.payment_status, transaction_id: data.transaction_id, payment_amount: data.payment_amount, course_completed: !!data.course_completed, certificate_issued: !!data.certificate_issued, content_access_granted: !!data.content_access_granted });
      return { changes: r ? 1 : 0 };
    }
    return sqlRun(`UPDATE enrollments SET payment_status = ?, transaction_id = ?, payment_amount = ?, course_completed = ?, certificate_issued = ?, content_access_granted = ? WHERE id = ?`, [data.payment_status, data.transaction_id, data.payment_amount, data.course_completed ? 1 : 0, data.certificate_issued ? 1 : 0, data.content_access_granted ? 1 : 0, enrollmentId]);
  },
  async adminCreate(data) {
    if (USE_MONGODB) {
      const e = await mongo.Enrollment.create({ user_id: toObjectId(data.user_id), payment_amount: data.payment_amount, payment_method: data.payment_method || 'UPI', payment_status: data.payment_status || 'completed', transaction_id: data.transaction_id, payment_date: new Date() });
      return { id: e._id.toString() };
    }
    const r = await sqlRun(`INSERT INTO enrollments (user_id, payment_amount, payment_method, payment_status, transaction_id, payment_date) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`, [data.user_id, data.payment_amount, data.payment_method || 'UPI', data.payment_status || 'completed', data.transaction_id]);
    return { id: r.lastID };
  },
  async getReceipt(enrollmentId, userId) {
    if (USE_MONGODB) {
      const e = await mongo.Enrollment.findOne({ _id: toObjectId(enrollmentId), user_id: toObjectId(userId) }).lean();
      if (!e) return null;
      const u = await mongo.User.findById(userId).lean();
      return { ...e, id: e._id.toString(), name: u?.name, email: u?.email, phone: u?.phone };
    }
    return sqlGet(`SELECT e.*, u.name, u.email, u.phone FROM enrollments e JOIN users u ON e.user_id = u.id WHERE e.id = ? AND e.user_id = ?`, [enrollmentId, userId]);
  },
  async getReceiptAdmin(enrollmentId) {
    if (USE_MONGODB) {
      const e = await mongo.Enrollment.findById(enrollmentId).lean();
      if (!e) return null;
      const u = await mongo.User.findById(e.user_id).lean();
      return { ...e, id: e._id.toString(), name: u?.name, email: u?.email, phone: u?.phone };
    }
    return sqlGet(`SELECT e.*, u.name, u.email, u.phone FROM enrollments e JOIN users u ON e.user_id = u.id WHERE e.id = ?`, [enrollmentId]);
  },
  async getCertificate(userId) {
    if (USE_MONGODB) {
      const e = await mongo.Enrollment.findOne({ user_id: toObjectId(userId), payment_status: 'completed' }).sort({ enrolled_at: -1 }).lean();
      if (!e) return null;
      const u = await mongo.User.findById(userId).lean();
      return { ...e, id: e._id.toString(), name: u?.name };
    }
    return sqlGet(`SELECT e.*, u.name FROM enrollments e JOIN users u ON e.user_id = u.id WHERE e.user_id = ? AND e.payment_status = 'completed' ORDER BY e.enrolled_at DESC LIMIT 1`, [userId]);
  },
  async getUserForNotification(enrollmentId) {
    if (USE_MONGODB) {
      const e = await mongo.Enrollment.findById(enrollmentId).lean();
      if (!e) return null;
      const u = await mongo.User.findById(e.user_id).lean();
      return { name: u?.name, email: u?.email, phone: u?.phone, payment_amount: e.payment_amount };
    }
    return sqlGet('SELECT u.name, u.email, u.phone, e.payment_amount FROM users u JOIN enrollments e ON u.id = e.user_id WHERE e.id = ?', [enrollmentId]);
  }
};

// ==================== SYLLABUS ACCESS ====================
const syllabusAccess = {
  async get(userId) {
    if (USE_MONGODB) {
      const s = await mongo.SyllabusAccess.findOne({ user_id: toObjectId(userId) }).lean();
      return formatSyllabusAccess(s);
    }
    const row = await sqlGet('SELECT * FROM syllabus_access WHERE user_id = ?', [userId]);
    return formatSyllabusAccess(row);
  },
  async update(userId, data) {
    if (USE_MONGODB) {
      await mongo.SyllabusAccess.findOneAndUpdate({ user_id: toObjectId(userId) }, { sql_access: data.sql_access ? 1 : 0, python_access: data.python_access ? 1 : 0, pyspark_access: data.pyspark_access ? 1 : 0, databricks_access: data.databricks_access ? 1 : 0, aws_access: data.aws_access ? 1 : 0, git_access: data.git_access ? 1 : 0, projects_access: data.projects_access ? 1 : 0, user_id: toObjectId(userId) }, { upsert: true, new: true });
      return { changes: 1 };
    }
    return sqlRun(`INSERT INTO syllabus_access (user_id, sql_access, python_access, pyspark_access, databricks_access, aws_access, git_access, projects_access) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET sql_access = excluded.sql_access, python_access = excluded.python_access, pyspark_access = excluded.pyspark_access, databricks_access = excluded.databricks_access, aws_access = excluded.aws_access, git_access = excluded.git_access, projects_access = excluded.projects_access`, [userId, data.sql_access ? 1 : 0, data.python_access ? 1 : 0, data.pyspark_access ? 1 : 0, data.databricks_access ? 1 : 0, data.aws_access ? 1 : 0, data.git_access ? 1 : 0, data.projects_access ? 1 : 0]);
  },
  async updateSingle(userId, module, value) {
    if (USE_MONGODB) {
      await mongo.SyllabusAccess.findOneAndUpdate({ user_id: toObjectId(userId) }, { [module]: value ? 1 : 0, user_id: toObjectId(userId) }, { upsert: true, new: true });
      return { changes: 1 };
    }
    return sqlRun(`INSERT INTO syllabus_access (user_id, ${module}) VALUES (?, ?) ON CONFLICT(user_id) DO UPDATE SET ${module} = excluded.${module}`, [userId, value ? 1 : 0]);
  }
};

// ==================== SUBTOPIC ACCESS ====================
const subtopicAccess = {
  async getByUser(userId) {
    if (USE_MONGODB) {
      return mongo.SubtopicAccess.find({ user_id: toObjectId(userId) }).lean();
    }
    return sqlAll('SELECT * FROM subtopic_access WHERE user_id = ?', [userId]);
  },
  async update(userId, module, group_name, access_granted) {
    if (USE_MONGODB) {
      await mongo.SubtopicAccess.findOneAndUpdate({ user_id: toObjectId(userId), module, group_name }, { access_granted: access_granted ? 1 : 0, user_id: toObjectId(userId), module, group_name }, { upsert: true, new: true });
      return { changes: 1 };
    }
    return sqlRun(`INSERT INTO subtopic_access (user_id, module, group_name, access_granted) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, module, group_name) DO UPDATE SET access_granted = excluded.access_granted`, [userId, module, group_name, access_granted ? 1 : 0]);
  }
};

// ==================== FEATURE ACCESS ====================
const featureAccess = {
  async getByUser(userId) {
    if (USE_MONGODB) {
      return mongo.FeatureAccess.find({ user_id: toObjectId(userId) }).lean();
    }
    return sqlAll('SELECT * FROM feature_access WHERE user_id = ?', [userId]);
  },
  async getByUserFormatted(userId) {
    if (USE_MONGODB) {
      return mongo.FeatureAccess.find({ user_id: toObjectId(userId) }).select('feature_type tab_number access_granted').lean();
    }
    return sqlAll('SELECT feature_type, tab_number, access_granted FROM feature_access WHERE user_id = ?', [userId]);
  },
  async update(userId, feature_type, tab_number, access_granted) {
    if (USE_MONGODB) {
      await mongo.FeatureAccess.findOneAndUpdate({ user_id: toObjectId(userId), feature_type, tab_number }, { access_granted: access_granted ? 1 : 0, user_id: toObjectId(userId), feature_type, tab_number }, { upsert: true, new: true });
      return { changes: 1 };
    }
    return sqlRun(`INSERT INTO feature_access (user_id, feature_type, tab_number, access_granted) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, feature_type, tab_number) DO UPDATE SET access_granted = excluded.access_granted`, [userId, feature_type, tab_number, access_granted ? 1 : 0]);
  }
};

// ==================== SECURITY LOGS ====================
const securityLogs = {
  async create(data) {
    if (USE_MONGODB) {
      await mongo.SecurityLog.create(data);
      return { ok: true };
    }
    return sqlRun(`INSERT INTO security_logs (user_id, user_email, event_type, detail, severity, page, user_agent, device_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [data.user_id || null, data.user_email || 'anonymous', data.event_type, data.detail || '', data.severity || 'LOW', data.page || '', (data.user_agent || '').substring(0, 200), data.device_type || 'Desktop']);
  },
  async getAll(limit = 100, severity = null) {
    if (USE_MONGODB) {
      const filter = severity ? { severity } : {};
      const logs = await mongo.SecurityLog.find(filter).sort({ timestamp: -1 }).limit(limit).lean();
      // Join user names
      for (const log of logs) {
        if (log.user_id) {
          const u = await mongo.User.findById(log.user_id).select('name').lean();
          log.user_name = u?.name || null;
        }
        log.id = log._id.toString();
      }
      return logs;
    }
    const whereClause = severity ? `WHERE sl.severity = '${severity}'` : '';
    return sqlAll(`SELECT sl.*, u.name as user_name FROM security_logs sl LEFT JOIN users u ON sl.user_id = u.id ${whereClause} ORDER BY sl.timestamp DESC LIMIT ?`, [limit]);
  },
  async getStats() {
    if (USE_MONGODB) {
      const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const logs = await mongo.SecurityLog.find({ timestamp: { $gte: since } }).lean();
      const blocked = await mongo.BlockedUser.countDocuments();
      return {
        total: logs.length,
        high: logs.filter(l => l.severity === 'HIGH').length,
        medium: logs.filter(l => l.severity === 'MEDIUM').length,
        low: logs.filter(l => l.severity === 'LOW').length,
        affected_users: new Set(logs.map(l => l.user_email)).size,
        blocked_users: blocked
      };
    }
    const stats = await sqlGet(`SELECT COUNT(*) as total, SUM(CASE WHEN severity='HIGH' THEN 1 ELSE 0 END) as high, SUM(CASE WHEN severity='MEDIUM' THEN 1 ELSE 0 END) as medium, SUM(CASE WHEN severity='LOW' THEN 1 ELSE 0 END) as low, COUNT(DISTINCT user_email) as affected_users FROM security_logs WHERE timestamp > datetime('now', '-24 hours')`);
    const blocked = await sqlGet('SELECT COUNT(*) as blocked FROM blocked_users');
    return { ...stats, blocked_users: blocked?.blocked || 0 };
  }
};

// ==================== SESSIONS ====================
const sessions = {
  async upsert(userId, data) {
    if (USE_MONGODB) {
      await mongo.ActiveSession.findOneAndUpdate({ user_id: toObjectId(userId) }, { ...data, user_id: toObjectId(userId), last_active: new Date() }, { upsert: true });
      return { ok: true };
    }
    return sqlRun(`INSERT INTO active_sessions (user_id, session_token, device_fp, device_type, user_agent, last_active) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP) ON CONFLICT(user_id) DO UPDATE SET session_token = excluded.session_token, device_fp = excluded.device_fp, device_type = excluded.device_type, user_agent = excluded.user_agent, last_active = CURRENT_TIMESTAMP`, [userId, data.session_token || '', data.device_fp || '', data.device_type || 'Desktop', (data.user_agent || '').substring(0, 200)]);
  },
  async getAll() {
    if (USE_MONGODB) {
      const sessions = await mongo.ActiveSession.find().sort({ last_active: -1 }).lean();
      for (const s of sessions) {
        const u = await mongo.User.findById(s.user_id).select('name email').lean();
        s.name = u?.name; s.email = u?.email; s.id = s._id.toString();
      }
      return sessions;
    }
    return sqlAll(`SELECT s.*, u.name, u.email FROM active_sessions s JOIN users u ON s.user_id = u.id ORDER BY s.last_active DESC`);
  },
  async deleteByUser(userId) {
    if (USE_MONGODB) {
      await mongo.ActiveSession.deleteOne({ user_id: toObjectId(userId) });
    } else {
      await sqlRun('DELETE FROM active_sessions WHERE user_id = ?', [userId]);
    }
  }
};

// ==================== BLOCKED USERS ====================
const blockedUsers = {
  async block(userId, reason) {
    if (USE_MONGODB) {
      await mongo.BlockedUser.findOneAndUpdate({ user_id: toObjectId(userId) }, { user_id: toObjectId(userId), reason: reason || 'Blocked by admin' }, { upsert: true });
      await sessions.deleteByUser(userId);
      return { ok: true };
    }
    await sqlRun(`INSERT OR REPLACE INTO blocked_users (user_id, reason) VALUES (?, ?)`, [userId, reason || 'Blocked by admin']);
    await sqlRun('DELETE FROM active_sessions WHERE user_id = ?', [userId]);
    return { ok: true };
  },
  async unblock(userId) {
    if (USE_MONGODB) {
      await mongo.BlockedUser.deleteOne({ user_id: toObjectId(userId) });
    } else {
      await sqlRun('DELETE FROM blocked_users WHERE user_id = ?', [userId]);
    }
  },
  async check(userId) {
    if (USE_MONGODB) {
      const b = await mongo.BlockedUser.findOne({ user_id: toObjectId(userId) }).lean();
      return { blocked: !!b, reason: b?.reason || null };
    }
    const row = await sqlGet('SELECT * FROM blocked_users WHERE user_id = ?', [userId]);
    return { blocked: !!row, reason: row?.reason || null };
  }
};

// ==================== LANDING CMS ====================
const landing = {
  async getSections(visibleOnly = false) {
    if (USE_MONGODB) {
      const filter = visibleOnly ? { visible: true } : {};
      const rows = await mongo.LandingSection.find(filter).sort({ display_order: 1 }).lean();
      return rows.map(r => ({ ...r, id: r.section_id }));
    }
    const where = visibleOnly ? 'WHERE visible = 1' : '';
    const rows = await sqlAll(`SELECT * FROM landing_sections ${where} ORDER BY display_order`);
    return rows.map(r => ({ ...r, content: JSON.parse(r.content || '{}') }));
  },
  async saveSections(sections) {
    if (USE_MONGODB) {
      await mongo.LandingSection.deleteMany({});
      for (const s of sections) {
        await mongo.LandingSection.create({ section_id: s.id, name: s.name, type: s.type, display_order: s.order, title: s.title, subtitle: s.subtitle, content: s.content, visible: !!s.visible, updated_at: s.updatedAt || new Date() });
      }
      return { ok: true };
    }
    await sqlRun('DELETE FROM landing_sections');
    for (const s of sections) {
      await sqlRun(`INSERT INTO landing_sections (id, name, type, display_order, title, subtitle, content, visible, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [s.id, s.name, s.type, s.order, s.title, s.subtitle, JSON.stringify(s.content), s.visible ? 1 : 0, s.updatedAt || new Date().toISOString()]);
    }
    return { ok: true };
  },
  async getPricing() {
    if (USE_MONGODB) {
      const p = await mongo.LandingPricing.findOne().sort({ updated_at: -1 }).lean();
      return p || { regular_price: 6999, offer_price: 1111, offer_days: 3, limited_seats: 100 };
    }
    const row = await sqlGet('SELECT * FROM landing_pricing ORDER BY id DESC LIMIT 1');
    return row || { regular_price: 6999, offer_price: 1111, offer_days: 3, limited_seats: 100 };
  },
  async savePricing(data) {
    if (USE_MONGODB) {
      await mongo.LandingPricing.create({ regular_price: data.regularPrice, offer_price: data.offerPrice, offer_days: data.offerDays, limited_seats: data.limitedSeats, updated_at: new Date() });
      return { ok: true };
    }
    return sqlRun(`INSERT INTO landing_pricing (regular_price, offer_price, offer_days, limited_seats, updated_at) VALUES (?, ?, ?, ?, ?)`, [data.regularPrice, data.offerPrice, data.offerDays, data.limitedSeats, new Date().toISOString()]);
  }
};

// ==================== STATS ====================
const stats = {
  async getDashboard() {
    if (USE_MONGODB) {
      const totalStudents = await mongo.User.countDocuments({ role: 'student' });
      const paidStudents = await mongo.Enrollment.countDocuments({ payment_status: 'completed' });
      const revenueResult = await mongo.Enrollment.aggregate([{ $match: { payment_status: 'completed' } }, { $group: { _id: null, total: { $sum: '$payment_amount' } } }]);
      const pendingPayments = await mongo.Enrollment.countDocuments({ payment_status: 'pending' });
      return { totalStudents, paidStudents, totalRevenue: revenueResult[0]?.total || 0, pendingPayments };
    }
    const s1 = await sqlGet('SELECT COUNT(*) as total FROM users WHERE role = "student"');
    const s2 = await sqlGet('SELECT COUNT(*) as total FROM enrollments WHERE payment_status = "completed"');
    const s3 = await sqlGet('SELECT SUM(payment_amount) as total FROM enrollments WHERE payment_status = "completed"');
    const s4 = await sqlGet('SELECT COUNT(*) as total FROM enrollments WHERE payment_status = "pending"');
    return { totalStudents: s1.total, paidStudents: s2.total, totalRevenue: s3.total || 0, pendingPayments: s4.total };
  }
};

// ==================== MODULE ACCESS AUDIT ====================
const moduleAccessAudit = {
  async log({ student_id, student_email, module_name, old_value, new_value, action, admin_id, admin_email }) {
    if (USE_MONGODB) {
      await mongo.ModuleAccessAudit.create({
        student_id: toObjectId(student_id),
        student_email,
        module_name,
        old_value: old_value || 0,
        new_value,
        action,
        admin_id: admin_id ? toObjectId(admin_id) : null,
        admin_email
      });
    } else {
      await sqlRun(`INSERT INTO module_access_audit (student_id, student_email, module_name, old_value, new_value, action, admin_id, admin_email, action_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`, [student_id, student_email || '', module_name, old_value || 0, new_value, action, admin_id || null, admin_email || '']);
    }
  },
  async getByStudent(studentId, limit = 50) {
    if (USE_MONGODB) {
      return mongo.ModuleAccessAudit.find({ student_id: toObjectId(studentId) }).sort({ action_time: -1 }).limit(limit).lean();
    }
    return sqlAll('SELECT * FROM module_access_audit WHERE student_id = ? ORDER BY action_time DESC LIMIT ?', [studentId, limit]);
  },
  async getRecent(limit = 100) {
    if (USE_MONGODB) {
      return mongo.ModuleAccessAudit.find().sort({ action_time: -1 }).limit(limit).lean();
    }
    return sqlAll('SELECT * FROM module_access_audit ORDER BY action_time DESC LIMIT ?', [limit]);
  }
};

// ==================== EXPORT ====================
module.exports = {
  init,
  users,
  enrollments,
  syllabusAccess,
  subtopicAccess,
  featureAccess,
  securityLogs,
  sessions,
  blockedUsers,
  landing,
  stats,
  moduleAccessAudit,
  USE_MONGODB
};
