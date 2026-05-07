const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/database');
const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/video');
const { authenticate } = require('./middleware/auth');
const { checkSessionValidity } = require('./middleware/sessionManager');
const { apiRateLimit } = require('./middleware/rateLimit');

const app = express();
const PORT = process.env.PORT || 5000;

// =====================================================
// SECURITY MIDDLEWARE
// =====================================================

// Helmet - Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'", "https:"],
      frameSrc: ["'none'"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Cookie parser
app.use(cookieParser());

// Global rate limiting
app.use('/api/', apiRateLimit);

// Session validity check for authenticated routes
app.use('/api/', authenticate, checkSessionValidity);

// =====================================================
// ROUTES
// =====================================================

// Health check
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Auth routes (OTP login, logout, session)
app.use('/api/auth', authRoutes);

// Video routes (signed URLs, access logging)
app.use('/api/video', videoRoutes);

// Protected test route
app.get('/api/protected', authenticate, (req, res) => {
  res.json({
    success: true,
    message: 'Access granted to protected route',
    user: req.user
  });
});

// =====================================================
// ERROR HANDLING
// =====================================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  
  res.status(err.status || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message
  });
});

// =====================================================
// CLEANUP JOBS (Run periodically)
// =====================================================

const runCleanupJobs = async () => {
  try {
    // Clean expired OTPs
    await db.query('CALL cleanup_expired_otps()');
    
    // Clean expired sessions
    await db.query('CALL cleanup_expired_sessions()');
    
    // Clean old rate limit records
    await db.query('CALL cleanup_rate_limits()');
    
    console.log('✅ Cleanup jobs completed');
  } catch (error) {
    console.error('❌ Cleanup jobs failed:', error);
  }
};

// Run cleanup every hour
setInterval(runCleanupJobs, 60 * 60 * 1000);

// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   🔱 MORPHED TECH - SECURE BACKEND                   ║
║                                                       ║
║   🚀 Server running on port ${PORT}                     ║
║   🔐 OTP Authentication: ENABLED                     ║
║   🛡️  Single Session: ENFORCED                       ║
║   ⚡ Rate Limiting: ACTIVE                           ║
║   🎥 Video Protection: ENABLED                       ║
║                                                       ║
║   Environment: ${process.env.NODE_ENV || 'development'}                        ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
  `);
  
  // Run initial cleanup
  runCleanupJobs();
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received. Closing server gracefully...');
  await db.end();
  process.exit(0);
});

module.exports = app;
