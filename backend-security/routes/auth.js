const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { sendOTPEmail } = require('../utils/emailService');
const { generateSessionToken } = require('../utils/jwtUtils');
const { enforceSingleSession } = require('../middleware/sessionManager');
const { otpRateLimit, loginRateLimit } = require('../middleware/rateLimit');

// =====================================================
// 1. REQUEST OTP (Email-based passwordless login)
// =====================================================
router.post('/request-otp', otpRateLimit, async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Valid email is required'
      });
    }

    // Check if user exists
    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'User not found. Please register first.'
      });
    }

    const user = users[0];

    if (!user.is_active) {
      return res.status(403).json({
        success: false,
        error: 'Account is deactivated. Contact support.'
      });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    // Delete any existing unused OTPs for this email
    await db.query('DELETE FROM otps WHERE email = ? AND is_used = FALSE', [email]);

    // Store OTP in database
    await db.query(
      'INSERT INTO otps (email, otp_code, expires_at, max_attempts) VALUES (?, ?, ?, 3)',
      [email, otp, expiresAt]
    );

    // Send OTP via email
    const emailResult = await sendOTPEmail(email, otp);

    if (!emailResult.success) {
      return res.status(500).json({
        success: false,
        error: 'Failed to send OTP. Please try again.'
      });
    }

    res.json({
      success: true,
      message: 'OTP sent successfully to your email',
      expiresIn: 300 // 5 minutes in seconds
    });

  } catch (error) {
    console.error('Request OTP error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send OTP'
    });
  }
});

// =====================================================
// 2. VERIFY OTP & LOGIN (Single session enforcement)
// =====================================================
router.post('/verify-otp', loginRateLimit, async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        error: 'Email and OTP are required'
      });
    }

    // Get OTP record
    const [otpRecords] = await db.query(
      'SELECT * FROM otps WHERE email = ? AND otp_code = ? AND is_used = FALSE ORDER BY created_at DESC LIMIT 1',
      [email, otp]
    );

    if (otpRecords.length === 0) {
      // Log failed login attempt
      await db.query(
        `INSERT INTO security_events (event_type, description, ip_address, metadata) 
         VALUES ('failed_login', 'Invalid OTP attempt', ?, ?)`,
        [req.ip, JSON.stringify({ email })]
      );

      return res.status(401).json({
        success: false,
        error: 'Invalid OTP'
      });
    }

    const otpRecord = otpRecords[0];

    // Check if OTP expired
    if (new Date() > new Date(otpRecord.expires_at)) {
      return res.status(401).json({
        success: false,
        error: 'OTP expired. Please request a new one.'
      });
    }

    // Check max attempts
    if (otpRecord.attempts >= otpRecord.max_attempts) {
      await db.query('UPDATE otps SET is_used = TRUE WHERE id = ?', [otpRecord.id]);
      
      return res.status(401).json({
        success: false,
        error: 'Maximum OTP attempts exceeded. Please request a new OTP.'
      });
    }

    // Increment attempts
    await db.query('UPDATE otps SET attempts = attempts + 1 WHERE id = ?', [otpRecord.id]);

    // Get user
    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const user = users[0];

    // Mark OTP as used
    await db.query('UPDATE otps SET is_used = TRUE WHERE id = ?', [otpRecord.id]);

    // Generate JWT session token
    const sessionToken = generateSessionToken(user.id, user.email);

    // Get device info
    const deviceInfo = req.headers['user-agent'] || 'Unknown';
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];

    // Enforce single session (invalidate all previous sessions)
    await enforceSingleSession(user.id, sessionToken, deviceInfo, ipAddress, userAgent);

    // Set HTTP-only cookie
    res.cookie('token', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    res.json({
      success: true,
      message: 'Login successful',
      token: sessionToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({
      success: false,
      error: 'Login failed'
    });
  }
});

// =====================================================
// 3. LOGOUT (Invalidate current session)
// =====================================================
router.post('/logout', async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.replace('Bearer ', '');

    if (token) {
      // Invalidate session
      await db.query(
        'UPDATE sessions SET is_active = FALSE WHERE session_token = ?',
        [token]
      );
    }

    // Clear cookie
    res.clearCookie('token');

    res.json({
      success: true,
      message: 'Logged out successfully'
    });

  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({
      success: false,
      error: 'Logout failed'
    });
  }
});

// =====================================================
// 4. CHECK SESSION STATUS
// =====================================================
router.get('/session-status', async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.json({
        success: true,
        isValid: false,
        message: 'No active session'
      });
    }

    const [sessions] = await db.query(
      `SELECT s.*, u.email, u.name, u.role 
       FROM sessions s 
       JOIN users u ON s.user_id = u.id 
       WHERE s.session_token = ? AND s.is_active = TRUE AND s.expires_at > NOW()`,
      [token]
    );

    if (sessions.length === 0) {
      return res.json({
        success: true,
        isValid: false,
        message: 'Session expired or invalid'
      });
    }

    const session = sessions[0];

    res.json({
      success: true,
      isValid: true,
      user: {
        id: session.user_id,
        email: session.email,
        name: session.name,
        role: session.role
      },
      sessionInfo: {
        createdAt: session.created_at,
        lastActivity: session.last_activity,
        expiresAt: session.expires_at
      }
    });

  } catch (error) {
    console.error('Session status error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to check session status'
    });
  }
});

module.exports = router;
