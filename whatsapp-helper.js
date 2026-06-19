/**
 * WhatsApp Cloud API helper (Meta) for payment notifications
 * Docs: https://developers.facebook.com/docs/whatsapp/cloud-api
 */

const axios = require('axios');

function isConfigured() {
  return !!(
    process.env.WHATSAPP_TOKEN &&
    process.env.WHATSAPP_PHONE_NUMBER_ID &&
    process.env.WHATSAPP_ADMIN_PHONE
  );
}

function normalizePhone(phone) {
  const digits = String(phone || '').replace(/\D/g, '');
  if (!digits) return null;
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

async function sendWhatsAppText(body) {
  if (!isConfigured()) {
    console.log('⚠️ WhatsApp not configured - skipping notification');
    return { ok: false, skipped: true };
  }

  const to = normalizePhone(process.env.WHATSAPP_ADMIN_PHONE);
  if (!to) {
    console.log('⚠️ WHATSAPP_ADMIN_PHONE invalid - skipping notification');
    return { ok: false, error: 'Invalid admin phone' };
  }

  const version = process.env.WHATSAPP_API_VERSION || 'v21.0';
  const url = `https://graph.facebook.com/${version}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

  try {
    await axios.post(
      url,
      {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to,
        type: 'text',
        text: { preview_url: false, body }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('✅ WhatsApp notification sent');
    return { ok: true };
  } catch (error) {
    const detail = error.response?.data?.error?.message || error.message;
    console.error('❌ WhatsApp notification failed:', detail);
    return { ok: false, error: detail };
  }
}

function formatPaymentMessage(paymentData) {
  const { studentName, studentEmail, amount, transactionId, phone } = paymentData;
  const amountStr = amount?.toLocaleString?.('en-IN') || amount;
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return `🔥 NEW PAYMENT RECEIVED

💰 Amount: ₹${amountStr}
✅ Status: SUCCESS

👤 Student: ${studentName}
📧 Email: ${studentEmail}
📱 Phone: ${phone || 'N/A'}
🆔 Transaction ID: ${transactionId}

⏰ Time: ${time}

🎓 MORPHED TECH - Data Engineering`.trim();
}

function formatFirstLotMessage({ count, limit, revenue }) {
  const revenueStr = Number(revenue || 0).toLocaleString('en-IN');
  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return `🎉 FIRST LOT COMPLETED!

✅ ${count} / ${limit} seats filled
💰 Total revenue: ₹${revenueStr}

🔥 Launch offer (First ${limit} Students) is now SOLD OUT.

⏰ Time: ${time}

🎓 MORPHED TECH - Data Engineering
Consider updating landing page pricing / seat counter.`.trim();
}

async function sendPaymentNotification(paymentData) {
  return sendWhatsAppText(formatPaymentMessage(paymentData));
}

async function sendFirstLotCompletedNotification(data) {
  return sendWhatsAppText(formatFirstLotMessage(data));
}

async function sendTestNotification() {
  if (!isConfigured()) {
    return { success: false, error: 'WhatsApp not configured' };
  }

  const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const result = await sendWhatsAppText(`🧪 TEST NOTIFICATION

✅ WhatsApp alerts are working!

⏰ ${time}

🎓 MORPHED TECH`);

  return result.ok ? { success: true } : { success: false, error: result.error };
}

module.exports = {
  sendPaymentNotification,
  sendFirstLotCompletedNotification,
  sendTestNotification,
  isConfigured
};
