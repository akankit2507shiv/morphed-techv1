const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { authenticate } = require('../middleware/auth');
const { generateSignedVideoUrl } = require('../utils/s3Utils');
const { apiRateLimit } = require('../middleware/rateLimit');

// =====================================================
// 1. GET SIGNED VIDEO URL (10-minute expiry)
// =====================================================
router.post('/get-video-url', authenticate, apiRateLimit, async (req, res) => {
  try {
    const { videoId } = req.body;
    const userId = req.user.id;

    if (!videoId) {
      return res.status(400).json({
        success: false,
        error: 'Video ID is required'
      });
    }

    // Check if user has access to this video (enrollment check)
    const [enrollments] = await db.query(
      `SELECT * FROM enrollments 
       WHERE user_id = ? AND payment_status = 'completed' AND content_access_granted = TRUE`,
      [userId]
    );

    if (enrollments.length === 0) {
      return res.status(403).json({
        success: false,
        error: 'Access denied. Please complete enrollment first.'
      });
    }

    // Generate signed URL (10 minutes expiry)
    const expiryMinutes = parseInt(process.env.VIDEO_URL_EXPIRY_MINUTES) || 10;
    const videoKey = `videos/${videoId}.mp4`; // Adjust based on your S3 structure
    
    const urlResult = generateSignedVideoUrl(videoKey, expiryMinutes);

    if (!urlResult.success) {
      return res.status(500).json({
        success: false,
        error: 'Failed to generate video URL'
      });
    }

    // Log video access
    await db.query(
      `INSERT INTO video_access_logs 
       (user_id, video_id, url_expires_at, ip_address, user_agent) 
       VALUES (?, ?, ?, ?, ?)`,
      [
        userId,
        videoId,
        urlResult.expiresAt,
        req.ip,
        req.headers['user-agent']
      ]
    );

    res.json({
      success: true,
      videoUrl: urlResult.url,
      expiresIn: urlResult.expiresIn,
      expiresAt: urlResult.expiresAt,
      message: 'Video URL generated successfully'
    });

  } catch (error) {
    console.error('Get video URL error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get video URL'
    });
  }
});

// =====================================================
// 2. LOG VIDEO ACCESS (Track when user actually watches)
// =====================================================
router.post('/log-video-access', authenticate, async (req, res) => {
  try {
    const { videoId } = req.body;
    const userId = req.user.id;

    if (!videoId) {
      return res.status(400).json({
        success: false,
        error: 'Video ID is required'
      });
    }

    // Update video access log
    await db.query(
      `UPDATE video_access_logs 
       SET accessed = TRUE, accessed_at = NOW() 
       WHERE user_id = ? AND video_id = ? 
       ORDER BY signed_url_generated_at DESC 
       LIMIT 1`,
      [userId, videoId]
    );

    res.json({
      success: true,
      message: 'Video access logged'
    });

  } catch (error) {
    console.error('Log video access error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to log video access'
    });
  }
});

// =====================================================
// 3. GET VIDEO ACCESS HISTORY (Admin only)
// =====================================================
router.get('/video-access-history/:userId', authenticate, async (req, res) => {
  try {
    const { userId } = req.params;

    // Only admin or the user themselves can view history
    if (req.user.role !== 'admin' && req.user.id !== parseInt(userId)) {
      return res.status(403).json({
        success: false,
        error: 'Access denied'
      });
    }

    const [logs] = await db.query(
      `SELECT 
        video_id,
        signed_url_generated_at,
        url_expires_at,
        accessed,
        accessed_at,
        ip_address
       FROM video_access_logs 
       WHERE user_id = ? 
       ORDER BY signed_url_generated_at DESC 
       LIMIT 100`,
      [userId]
    );

    res.json({
      success: true,
      logs
    });

  } catch (error) {
    console.error('Get video history error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get video history'
    });
  }
});

module.exports = router;
