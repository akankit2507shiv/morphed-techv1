const { verifyToken } = require('../utils/jwtUtils');
const db = require('../config/database');

const authenticate = async (req, res, next) => {
  try {
    // Get token from cookie or Authorization header
    const token = req.cookies.token || req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Authentication required. Please login.'
      });
    }

    // Verify JWT token
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        error: 'Invalid or expired token. Please login again.'
      });
    }

    // Check if session exists and is active
    const [sessions] = await db.query(
      `SELECT s.*, u.email, u.name, u.role, u.is_active 
       FROM sessions s 
       JOIN users u ON s.user_id = u.id 
       WHERE s.session_token = ? AND s.is_active = TRUE AND s.expires_at > NOW()`,
      [token]
    );

    if (sessions.length === 0) {
      return res.status(401).json({
        success: false,
        error: 'Session expired or invalid. Please login again.'
      });
    }

    const session = sessions[0];

    // Check if user is active
    if (!session.is_active) {
      return res.status(403).json({
        success: false,
        error: 'Account is deactivated. Contact support.'
      });
    }

    // Update last activity
    await db.query(
      'UPDATE sessions SET last_activity = NOW() WHERE id = ?',
      [session.id]
    );

    // Attach user info to request
    req.user = {
      id: session.user_id,
      email: session.email,
      name: session.name,
      role: session.role,
      sessionId: session.id
    };

    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(500).json({
      success: false,
      error: 'Authentication failed'
    });
  }
};

const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      error: 'Admin access required'
    });
  }
  next();
};

module.exports = { authenticate, requireAdmin };
