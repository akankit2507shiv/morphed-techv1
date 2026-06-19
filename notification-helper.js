/**
 * Unified admin alerts — Telegram + WhatsApp in parallel
 */

const telegram = require('./telegram-helper');
const whatsapp = require('./whatsapp-helper');

async function sendPaymentNotification(paymentData) {
  const results = await Promise.allSettled([
    telegram.sendPaymentNotification(paymentData),
    whatsapp.sendPaymentNotification(paymentData)
  ]);
  return summarize(results, 'payment');
}

async function sendFirstLotCompletedNotification(data) {
  const results = await Promise.allSettled([
    telegram.sendFirstLotCompletedNotification(data),
    whatsapp.sendFirstLotCompletedNotification(data)
  ]);
  return summarize(results, 'firstLot');
}

async function sendTestNotifications() {
  const [telegramResult, whatsappResult] = await Promise.allSettled([
    telegram.sendTestNotification(),
    whatsapp.sendTestNotification()
  ]);

  const telegram = telegramResult.status === 'fulfilled'
    ? telegramResult.value
    : { success: false, error: telegramResult.reason?.message || 'Telegram failed' };

  const whatsapp = whatsappResult.status === 'fulfilled'
    ? whatsappResult.value
    : { success: false, error: whatsappResult.reason?.message || 'WhatsApp failed' };

  const anySuccess = telegram.success || whatsapp.success;

  return {
    success: anySuccess,
    telegram,
    whatsapp,
    message: anySuccess
      ? 'Check Telegram and/or WhatsApp for test messages'
      : 'Neither channel is configured or both failed — see telegram/whatsapp details'
  };
}

function summarize(results, kind) {
  const channels = ['telegram', 'whatsapp'];
  const out = { kind, telegram: 'skipped', whatsapp: 'skipped' };

  results.forEach((result, i) => {
    const name = channels[i];
    if (result.status === 'rejected') {
      out[name] = 'failed';
      return;
    }
    const value = result.value || {};
    if (value.skipped) {
      out[name] = 'skipped';
    } else if (value.ok === false) {
      out[name] = 'failed';
    } else {
      out[name] = 'sent';
    }
  });

  return out;
}

module.exports = {
  sendPaymentNotification,
  sendFirstLotCompletedNotification,
  sendTestNotifications
};
