const db = require('../config/database');

const enforceSingleSession = async (userId, newSessionToken, deviceInfo, ipAddress, userAgent) => {
  try {
    // Invalidate all existing active sessions for this user
    const [existingSessions] = await db.query(
      'SELECT id FROM sessions WHERE user_id = ? AND is_active = TRUE',
      [userId]
    );

    if (existingSessions.length > 0) {
      // Log security event for multiple sessions
      await db.query(
        `INSERT INTO security_events (user_id, event_type, description, ip_address, metadata) 
         VALUES (?, 'multiple_sessions', ?, ?, ?)`,
        [
          userId,
          'Previous session invalidated due to new login',
          ipAddress,
          JSON.stringify({ 
            previousSessions: existingSessions.length,
            newDevice: deviceInfo 
          })
        ]
      );

      // Deactivate all previous sessions
      await db.query(
        'UPDATE sessions SET is_active = FALSE WHERE user_id = ? AND is_active = TRUE',
        [userId]
      );
    }

    // Create new session
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    await db.query(
      `INSERT INTO sessions (user_id, session_token, device_info, ip_address, user_agent, expires_at) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [userId, newSessionToken, deviceInfo, ipAddress, userAgent, expiresAt]
    );

    return { success: true };
  } catch (error) {
    console.error('Session enforcement error:', error);
    return { success: false, error: error.message };
  }
};

const checkSessionValidity = async (req, res, next) => {
  try {
    if (!req.user) {
      return next();
    }

    // Check if there are multiple active sessions (shouldn't happen, but safety check)
    const [sessions] = await db.query(
      'SELECT COUNT(*) as count FROM sessions WHERE user_id = ? AND is_active = TRUE',
      [req.user.id]
    );

    if (sessions[0].count > 1) {
      // Log suspicious activity
      await db.query(
        `INSERT INTO security_events (user_id, event_type, description, ip_address) 
         VALUES (?, 'suspicious_activity', 'Multiple active sessions detected', ?)`,
        [req.user.id, req.ip]
      );

      // Keep only the current session, invalidate others
      await db.query(
        'UPDATE sessions SET is_active = FALSE WHERE user_id = ? AND id != ?',
        [req.user.id, req.user.sessionId]
      );
    }

    next();
  } catch (error) {
    console.error('Session validity check error:', error);
    next();
  }
};

module.exports = {
  enforceSingleSession,
  checkSessionValidity
};
