# 📱 TELEGRAM BOT SETUP GUIDE

## Step 1: Create Telegram Bot

1. **Open Telegram** and search for `@BotFather`

2. **Start chat** with BotFather

3. **Create new bot:**
   ```
   /newbot
   ```

4. **Enter bot name:**
   ```
   Morphed Tech Payment Bot
   ```

5. **Enter bot username** (must end with 'bot'):
   ```
   morphedtech_payment_bot
   ```

6. **Copy the token** (looks like):
   ```
   1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
   ```

7. **Save token** to `.env` file:
   ```env
   TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
   ```

---

## Step 2: Create Telegram Group

1. **Open Telegram** → Click "New Group"

2. **Group name:**
   ```
   Morphed Tech
   ```

3. **Add members:**
   - Add your phone number: `9881880701`
   - Add the bot you just created: `@morphedtech_payment_bot`

4. **Make bot admin:**
   - Go to Group Info → Edit
   - Click on bot name
   - Make it "Administrator"
   - Enable "Post Messages" permission

---

## Step 3: Get Chat ID

### Method 1: Using Bot (Easiest)

1. **Send a message** in the group:
   ```
   Hello Bot!
   ```

2. **Open this URL** in browser (replace YOUR_BOT_TOKEN):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```

3. **Find chat ID** in the response:
   ```json
   {
     "chat": {
       "id": -1001234567890,  ← This is your CHAT_ID
       "title": "Morphed Tech"
     }
   }
   ```

4. **Copy the chat ID** (including the minus sign!)

5. **Save to `.env`:**
   ```env
   TELEGRAM_CHAT_ID=-1001234567890
   ```

### Method 2: Using @userinfobot

1. **Add `@userinfobot`** to your group

2. **Bot will send** the group chat ID

3. **Copy and save** to `.env`

---

## Step 4: Test Telegram Notifications

1. **Restart your server:**
   ```bash
   pkill -f "node.*server.js"
   node server.js
   ```

2. **Test payment flow:**
   - Go to payment page
   - Submit transaction ID
   - Check Telegram group for notification

3. **You should see:**
   ```
   🔥 NEW PAYMENT RECEIVED

   💰 Amount: ₹7,777
   ✅ Status: SUCCESS ✅

   👤 Student: Test Student
   📧 Email: test@example.com
   📱 Phone: 9876543210
   🆔 Transaction ID: TEST123456

   ⏰ Time: 09/05/2026, 12:30:45 PM

   🎓 MORPHED TECH - Data Engineering
   ```

---

## 📋 FINAL .ENV FILE

```env
PORT=5000
JWT_SECRET=c8473499e54ebf6b4d199660c2f1660aac37f72efbdf85487d9fcca0107bc5396980574d72b93e11311694361f037f0b9b4b406568c03b224b8a1348398f3d83
ADMIN_EMAIL=admin@morphedtech.com
ADMIN_PASSWORD=MorphedTech@2024!Secure
FRONTEND_URL=https://kaal-morphed-tech.onrender.com
UPI_ID=7038376253@ybl
UPI_NAME=Morphed Tech
COURSE_PRICE=7777

# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=-1001234567890
```

---

## 🔧 TROUBLESHOOTING

### Bot not sending messages?

1. **Check bot is admin** in the group
2. **Verify token** is correct
3. **Verify chat ID** includes minus sign
4. **Check server logs** for errors

### Can't find chat ID?

1. **Send message** in group first
2. **Wait 1 minute**
3. **Try getUpdates URL** again
4. **Look for negative number** starting with -100

### Messages not appearing?

1. **Check bot permissions** in group
2. **Make sure bot is admin**
3. **Enable "Post Messages"** permission
4. **Restart server** after updating .env

---

## 🎯 FEATURES

✅ Instant payment notifications
✅ Student details included
✅ Transaction ID tracking
✅ Timestamp in IST
✅ Professional formatting
✅ Works on mobile & desktop

---

## 🚀 DEPLOYMENT TO RENDER

After setting up locally, add environment variables in Render:

1. Go to Render dashboard
2. Click your service
3. Go to "Environment" tab
4. Add:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
5. Save changes
6. Service will auto-redeploy

---

**Setup complete! You'll now receive instant Telegram notifications for every payment! 🎉**
