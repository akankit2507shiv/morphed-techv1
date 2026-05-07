const db = require('../config/database');

const rateLimit = (options = {}) => {
  const {
    windowMs = 60 * 60 * 1000, // 1 hour default
    maxRequests = 5,
    message = 'Too many requests. Please try again later.',
    keyGenerator = (req) => req.ip || req.connection.remoteAddress
  } = options;

  return async (req, res, next) => {
    try {
      const identifier = keyGenerator(req);
      const endpoint = req.path;
      const windowStart = new Date(Date.now() - windowMs);

      // Check existing rate limit records
      const [records] = await db.query(
        `SELECT * FROM rate_limits 
         WHERE identifier = ? AND endpoint = ? AND window_start > ?`,
        [identifier, endpoint, windowStart]
      );

      if (records.length > 0) {
        const record = records[0];
        
        if (record.request_count >= maxRequests) {
          // Log security event
          await db.query(
            `INSERT INTO security_events (user_id, event_type, description, ip_address, metadata) 
             VALUES (?, 'rate_limit_exceeded', ?, ?, ?)`,
            [
              req.user?.id || null,
              `Rate limit exceeded for ${endpoint}`,
              identifier,
              JSON.stringify({ endpoint, attempts: record.request_count })
            ]
          );

          return res.status(429).json({
            success: false,
            error: message,
            retryAfter: Math.ceil((new Date(record.window_start).getTime() + windowMs - Date.now()) / 1000)
          });
        }

        // Increment request count
        await db.query(
          'UPDATE rate_limits SET request_count = request_count + 1 WHERE id = ?',
          [record.id]
        );
      } else {
        // Create new rate limit record
        await db.query(
          'INSERT INTO rate_limits (identifier, endpoint, request_count, window_start) VALUES (?, ?, 1, NOW())',
          [identifier, endpoint]
        );
      }

      next();
    } catch (error) {
      console.error('Rate limit error:', error);
      next(); // Don't block request on rate limit error
    }
  };
};

// Specific rate limiters
const otpRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 5,
  message: 'Too many OTP requests. Please try again after 1 hour.',
  keyGenerator: (req) => req.body.email || req.ip
});

const loginRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 10,
  message: 'Too many login attempts. Please try again after 15 minutes.'
});

const apiRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 60,
  message: 'Too many API requests. Please slow down.'
});

module.exports = {
  rateLimit,
  otpRateLimit,
  loginRateLimit,
  apiRateLimit
};
