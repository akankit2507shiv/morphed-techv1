const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

const generateSignedVideoUrl = (videoKey, expiryMinutes = 10) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: videoKey,
    Expires: expiryMinutes * 60 // Convert to seconds
  };

  try {
    const signedUrl = s3.getSignedUrl('getObject', params);
    return {
      success: true,
      url: signedUrl,
      expiresIn: expiryMinutes * 60,
      expiresAt: new Date(Date.now() + expiryMinutes * 60 * 1000)
    };
  } catch (error) {
    console.error('S3 signed URL error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

module.exports = { generateSignedVideoUrl };
