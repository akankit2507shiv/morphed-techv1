/**
 * Telegram Bot Helper for Payment Notifications
 * Uses axios directly (no vulnerable dependencies)
 */

const axios = require('axios');

const TELEGRAM_API = process.env.TELEGRAM_BOT_TOKEN 
  ? `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`
  : null;

/**
 * Send payment notification to Telegram group
 */
async function sendPaymentNotification(paymentData) {
  if (!TELEGRAM_API || !process.env.TELEGRAM_CHAT_ID) {
    console.log('⚠️ Telegram not configured - skipping notification');
    return;
  }

  try {
    const { studentName, studentEmail, amount, transactionId, phone } = paymentData;

    const message = `
🔥 *NEW PAYMENT RECEIVED*

💰 *Amount:* ₹${amount?.toLocaleString('en-IN') || amount}
✅ *Status:* SUCCESS ✅

👤 *Student:* ${studentName}
📧 *Email:* ${studentEmail}
📱 *Phone:* ${phone || 'N/A'}
🆔 *Transaction ID:* ${transactionId}

⏰ *Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

🎓 *MORPHED TECH - Data Engineering*
    `.trim();

    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
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
  if (!TELEGRAM_API || !process.env.TELEGRAM_CHAT_ID) {
    return { success: false, error: 'Telegram not configured' };
  }

  try {
    const message = `
🧪 *TEST NOTIFICATION*

✅ Telegram bot is working!

⏰ ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

🎓 *MORPHED TECH*
    `.trim();

    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown'
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * Notify admin when first launch lot (LIMITED_SEATS) is fully sold
 */
async function sendFirstLotCompletedNotification({ count, limit, revenue }) {
  if (!TELEGRAM_API || !process.env.TELEGRAM_CHAT_ID) {
    console.log('⚠️ Telegram not configured - skipping first-lot notification');
    return;
  }

  try {
    const revenueStr = Number(revenue || 0).toLocaleString('en-IN');
    const message = `
🎉 *FIRST LOT COMPLETED!*

✅ *${count} / ${limit} seats filled*
💰 *Total revenue:* ₹${revenueStr}

🔥 Launch offer batch (First ${limit} Students) is now **SOLD OUT**.

⏰ *Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

🎓 *MORPHED TECH - Data Engineering*
Consider updating landing page pricing / seat counter.
    `.trim();

    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown'
    });

    console.log('✅ First-lot completed Telegram notification sent');
  } catch (error) {
    console.error('❌ First-lot Telegram notification failed:', error.message);
  }
}

module.exports = {
  sendPaymentNotification,
  sendTestNotification,
  sendFirstLotCompletedNotification
};
