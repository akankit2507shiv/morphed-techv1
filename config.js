// ==================== MORPHED TECH - CENTRALIZED CONFIGURATION ====================
// This file centralizes all configuration values for easy production deployment
// All sensitive values should be set via environment variables

const config = {
  // ==================== ENVIRONMENT ====================
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',

  // ==================== SERVER CONFIGURATION ====================
  server: {
    PORT: process.env.PORT || 5000,
    HOST: process.env.HOST || '0.0.0.0',
  },

  // ==================== DATABASE CONFIGURATION ====================
  database: {
    PATH: process.env.DATABASE_PATH || './morphed-tech.db',
    // For production, consider PostgreSQL:
    // URL: process.env.DATABASE_URL || 'postgresql://user:pass@host:5432/dbname'
  },

  // ==================== SECURITY CONFIGURATION ====================
  security: {
    JWT_SECRET: process.env.JWT_SECRET || 'your_super_secret_jwt_key_change_this_in_production',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
    BCRYPT_ROUNDS: parseInt(process.env.BCRYPT_ROUNDS || '10'),
    SESSION_SECRET: process.env.SESSION_SECRET || 'change_this_session_secret_in_production',
  },

  // ==================== ADMIN CONFIGURATION ====================
  admin: {
    EMAIL: process.env.ADMIN_EMAIL || 'admin@morphedtech.com',
    PASSWORD: process.env.ADMIN_PASSWORD || 'ChangeThisPassword123!',
  },

  // ==================== CORS CONFIGURATION ====================
  cors: {
    ORIGIN: process.env.CORS_ORIGIN || (process.env.NODE_ENV === 'production' ? 'https://yourdomain.com' : '*'),
    CREDENTIALS: true,
  },

  // ==================== PAYMENT CONFIGURATION ====================
  payment: {
    UPI_ID: process.env.UPI_ID || '7038376253@ybl',
    UPI_NAME: process.env.UPI_NAME || 'Morphed Tech',
    COURSE_PRICE: parseInt(process.env.COURSE_PRICE || '7777'),
    REGULAR_PRICE: parseInt(process.env.REGULAR_PRICE || '11111'),
    OFFER_PRICE: parseInt(process.env.OFFER_PRICE || '7777'),
    LIMITED_SEATS: parseInt(process.env.LIMITED_SEATS || '54'),
    OFFER_DAYS: parseInt(process.env.OFFER_DAYS || '3'),
  },

  // ==================== FRONTEND CONFIGURATION ====================
  frontend: {
    URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  },

  // ==================== EMAIL CONFIGURATION ====================
  email: {
    SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
    SMTP_PORT: parseInt(process.env.SMTP_PORT || '587'),
    SMTP_SECURE: process.env.SMTP_SECURE === 'true',
    SMTP_USER: process.env.SMTP_USER || '',
    SMTP_PASSWORD: process.env.SMTP_PASSWORD || '',
    FROM_EMAIL: process.env.FROM_EMAIL || 'noreply@morphedtech.com',
    FROM_NAME: process.env.FROM_NAME || 'Morphed Tech',
  },

  // ==================== MONITORING & ANALYTICS ====================
  monitoring: {
    SENTRY_DSN: process.env.SENTRY_DSN || '',
    ANALYTICS_ID: process.env.ANALYTICS_ID || '',
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  },

  // ==================== RATE LIMITING ====================
  rateLimit: {
    WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
    MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
    AUTH_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_AUTH_MAX || '5'), // Stricter for auth
  },

  // ==================== AWS CONFIGURATION (if needed) ====================
  aws: {
    ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
    SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
    REGION: process.env.AWS_REGION || 'us-east-1',
    S3_BUCKET: process.env.AWS_S3_BUCKET || '',
  },

  // ==================== FEATURE FLAGS ====================
  features: {
    ENABLE_EMAIL_VERIFICATION: process.env.ENABLE_EMAIL_VERIFICATION === 'true',
    ENABLE_2FA: process.env.ENABLE_2FA === 'true',
    ENABLE_ANALYTICS: process.env.ENABLE_ANALYTICS === 'true',
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE === 'true',
  },
};

// ==================== VALIDATION ====================
function validateConfig() {
  const errors = [];

  // Critical validations for production
  if (config.IS_PRODUCTION) {
    if (config.security.JWT_SECRET === 'your_super_secret_jwt_key_change_this_in_production') {
      errors.push('❌ CRITICAL: JWT_SECRET must be changed in production!');
    }
    if (config.admin.PASSWORD === 'ChangeThisPassword123!') {
      errors.push('❌ CRITICAL: ADMIN_PASSWORD must be changed in production!');
    }
    if (config.cors.ORIGIN === '*') {
      errors.push('⚠️  WARNING: CORS_ORIGIN should be restricted in production!');
    }
    if (!config.email.SMTP_USER || !config.email.SMTP_PASSWORD) {
      errors.push('⚠️  WARNING: Email configuration is incomplete!');
    }
  }

  if (errors.length > 0) {
    console.error('\n🚨 CONFIGURATION ERRORS:\n');
    errors.forEach(err => console.error(err));
    if (config.IS_PRODUCTION) {
      console.error('\n❌ Cannot start in production with configuration errors!\n');
      process.exit(1);
    } else {
      console.warn('\n⚠️  Running in development mode with warnings.\n');
    }
  } else {
    console.log('✅ Configuration validated successfully');
  }
}

// Run validation on import
validateConfig();

module.exports = config;
