/**
 * Telegram Bot Helper for Payment Notifications
 * Sends instant notifications to Morphed Tech Telegram group
 */

const TelegramBot = require('node-telegram-bot-api');

// Initialize bot (only if token is provided)
let bot = null;
if (process.env.TELEGRAM_BOT_TOKEN) {
  bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });
}

/**
 * Send payment notification to Telegram group
 */
async function sendPaymentNotification(paymentData) {
  if (!bot || !process.env.TELEGRAM_CHAT_ID) {
    console.log('⚠️ Telegram not configured - skipping notification');
    return;
  }

  try {
    const {
      studentName,
      studentEmail,
      amount,
      transactionId,
      phone
    } = paymentData;

    const message = `
🔥 *NEW PAYMENT RECEIVED*

💰 *Amount:* ₹${amount.toLocaleString('en-IN')}
✅ *Status:* SUCCESS ✅

👤 *Student:* ${studentName}
📧 *Email:* ${studentEmail}
📱 *Phone:* ${phone || 'N/A'}
🆔 *Transaction ID:* ${transactionId}

⏰ *Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

🎓 *MORPHED TECH - Data Engineering*
    `.trim();

    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
      parse_mode: 'Markdown'
    });

    console.log('✅ Telegram notification sent');
  } catch (error) {
    console.error('❌ Telegram notification failed:', error.message);
  }
}

/**
 * Send test notification
 */
async function sendTestNotification() {
  if (!bot || !process.env.TELEGRAM_CHAT_ID) {
    return { success: false, error: 'Telegram not configured' };
  }

  try {
    const message = `
🧪 *TEST NOTIFICATION*

✅ Telegram bot is working!

⏰ ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

🎓 *MORPHED TECH*
    `.trim();

    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
      parse_mode: 'Markdown'
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = {
  sendPaymentNotification,
  sendTestNotification
};
