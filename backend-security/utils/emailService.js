const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sendOTPEmail = async (email, otp) => {
  const mailOptions = {
    from: `"Morphed Tech" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: '🔐 Your Login OTP - Morphed Tech',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #7C3AED, #06B6D4); padding: 30px; text-align: center; }
          .header h1 { color: white; margin: 0; font-size: 28px; }
          .content { padding: 40px 30px; }
          .otp-box { background: linear-gradient(135deg, #7C3AED, #06B6D4); color: white; font-size: 36px; font-weight: bold; text-align: center; padding: 20px; border-radius: 10px; letter-spacing: 8px; margin: 30px 0; }
          .info { background: #f8f9fa; padding: 15px; border-left: 4px solid #7C3AED; margin: 20px 0; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px; }
          .warning { color: #dc3545; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔱 MORPHED TECH</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">Data Engineering Platform</p>
          </div>
          <div class="content">
            <h2 style="color: #333;">Your Login OTP</h2>
            <p style="color: #666; font-size: 16px;">Use this OTP to complete your login:</p>
            
            <div class="otp-box">${otp}</div>
            
            <div class="info">
              <p style="margin: 5px 0;"><strong>⏰ Valid for:</strong> 5 minutes</p>
              <p style="margin: 5px 0;"><strong>🔒 Max attempts:</strong> 3</p>
            </div>
            
            <p class="warning">⚠️ Never share this OTP with anyone!</p>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              If you didn't request this OTP, please ignore this email or contact support immediately.
            </p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Morphed Tech. All rights reserved.</p>
            <p>Secure EdTech Platform</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendOTPEmail };
