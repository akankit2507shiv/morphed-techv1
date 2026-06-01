// ==================== MONGODB DATABASE LAYER ====================
// This file handles MongoDB connection and models
// Used in production when MONGODB_URI is set
// Local development continues to use SQLite (no change)

const mongoose = require('mongoose');

// ==================== CONNECTION ====================
async function connectMongoDB(uri) {
  try {
    await mongoose.connect(uri, {
      dbName: 'morphedtech'
    });
    console.log('✅ Connected to MongoDB Atlas');
    return true;
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    return false;
  }
}

// ==================== SCHEMAS ====================

// Users
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, default: '' },
  role: { type: String, default: 'student', enum: ['student', 'admin'] },
  target_role: { type: String, default: '' },
  experience_level: { type: String, default: '' },
  learning_pace: { type: String, default: '' },
  onboarding_completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

// Enrollments
const enrollmentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course_name: { type: String, default: 'Data Engineering Mastery' },
  payment_status: { type: String, default: 'pending' },
  payment_amount: { type: Number, default: 0 },
  payment_method: { type: String, default: '' },
  transaction_id: { type: String, default: '' },
  payment_date: { type: Date },
  enrolled_at: { type: Date, default: Date.now },
  course_completed: { type: Boolean, default: false },
  certificate_issued: { type: Boolean, default: false },
  content_access_granted: { type: Boolean, default: true }
});

// Syllabus Access
const syllabusAccessSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  sql_access: { type: Number, default: 0 },
  python_access: { type: Number, default: 0 },
  pyspark_access: { type: Number, default: 0 },
  databricks_access: { type: Number, default: 0 },
  aws_access: { type: Number, default: 0 },
  git_access: { type: Number, default: 0 },
  projects_access: { type: Number, default: 0 }
});

// Sub-topic Access
const subtopicAccessSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  module: { type: String, required: true },
  group_name: { type: String, required: true },
  access_granted: { type: Number, default: 0 }
});
subtopicAccessSchema.index({ user_id: 1, module: 1, group_name: 1 }, { unique: true });

// Feature Access (Resume/Interview tabs)
const featureAccessSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  feature_type: { type: String, required: true },
  tab_number: { type: Number, required: true },
  access_granted: { type: Number, default: 0 }
});
featureAccessSchema.index({ user_id: 1, feature_type: 1, tab_number: 1 }, { unique: true });

// Security Logs
const securityLogSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  user_email: { type: String, default: 'anonymous' },
  event_type: { type: String, required: true },
  detail: { type: String, default: '' },
  severity: { type: String, default: 'LOW', enum: ['LOW', 'MEDIUM', 'HIGH'] },
  page: { type: String, default: '' },
  user_agent: { type: String, default: '' },
  device_type: { type: String, default: 'Desktop' },
  timestamp: { type: Date, default: Date.now }
});

// Active Sessions
const activeSessionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  session_token: { type: String, default: '' },
  device_fp: { type: String, default: '' },
  device_type: { type: String, default: 'Desktop' },
  user_agent: { type: String, default: '' },
  created_at: { type: Date, default: Date.now },
  last_active: { type: Date, default: Date.now }
});

// Blocked Users
const blockedUserSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  reason: { type: String, default: '' },
  blocked_at: { type: Date, default: Date.now }
});

// Landing Sections
const landingSectionSchema = new mongoose.Schema({
  section_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  display_order: { type: Number, default: 1 },
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  content: { type: mongoose.Schema.Types.Mixed, default: {} },
  visible: { type: Boolean, default: true },
  updated_at: { type: Date, default: Date.now }
});

// Landing Pricing
const landingPricingSchema = new mongoose.Schema({
  regular_price: { type: Number, required: true },
  offer_price: { type: Number, required: true },
  offer_days: { type: Number, default: 3 },
  limited_seats: { type: Number, default: 100 },
  updated_at: { type: Date, default: Date.now }
});

// ==================== MODELS ====================
const User = mongoose.model('User', userSchema);
const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
const SyllabusAccess = mongoose.model('SyllabusAccess', syllabusAccessSchema);
const SubtopicAccess = mongoose.model('SubtopicAccess', subtopicAccessSchema);
const FeatureAccess = mongoose.model('FeatureAccess', featureAccessSchema);
const SecurityLog = mongoose.model('SecurityLog', securityLogSchema);
const ActiveSession = mongoose.model('ActiveSession', activeSessionSchema);
const BlockedUser = mongoose.model('BlockedUser', blockedUserSchema);
const LandingSection = mongoose.model('LandingSection', landingSectionSchema);
const LandingPricing = mongoose.model('LandingPricing', landingPricingSchema);

module.exports = {
  connectMongoDB,
  User,
  Enrollment,
  SyllabusAccess,
  SubtopicAccess,
  FeatureAccess,
  SecurityLog,
  ActiveSession,
  BlockedUser,
  LandingSection,
  LandingPricing
};
