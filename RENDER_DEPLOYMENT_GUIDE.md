# 🚀 RENDER.COM DEPLOYMENT GUIDE - MORPHED TECH

**Render.com is now open in your browser!**

---

## STEP 1: Sign Up (2 minutes)

Click "Get Started" or "Sign Up"

Sign up with:
- ✅ GitHub (recommended)
- OR Google
- OR Email

---

## STEP 2: Create New Web Service (1 minute)

After login:
1. Click "New +" button (top right)
2. Select "Web Service"

---

## STEP 3: Connect Repository (2 minutes)

**Option A: Connect GitHub (Recommended)**
1. Click "Connect GitHub"
2. Authorize Render
3. Select your `morphed-tech` repository
4. Click "Connect"

**Option B: Deploy from Git URL**
1. Click "Public Git repository"
2. Paste: https://github.com/YOUR_USERNAME/morphed-tech.git
3. Click "Continue"

**Option C: Upload Files (If no GitHub)**
1. Create a zip of your project folder
2. Upload to GitHub first, then use Option A

---

## STEP 4: Configure Service (3 minutes)

Fill in these settings:

### Basic Settings
```
Name: morphed-tech
Region: Oregon (US West) or Singapore (closest to India)
Branch: main
Root Directory: (leave blank)
```

### Build & Deploy Settings
```
Runtime: Node
Build Command: npm install
Start Command: node server.js
```

### Instance Type
```
Plan: Free (select "Free" plan)
```

---

## STEP 5: Add Environment Variables (2 minutes)

Click "Advanced" → "Add Environment Variable"

Add these **EXACTLY** (copy-paste):

```
PORT
5000

JWT_SECRET
c8473499e54ebf6b4d199660c2f1660aac37f72efbdf85487d9fcca0107bc5396980574d72b93e11311694361f037f0b9b4b406568c03b224b8a1348398f3d83

ADMIN_EMAIL
admin@morphedtech.com

ADMIN_PASSWORD
MorphedTech@2024!Secure

FRONTEND_URL
https://morphed-tech.onrender.com

UPI_ID
7038376253@ybl

UPI_NAME
Morphed Tech

COURSE_PRICE
7777
```

**IMPORTANT:** After deployment, update `FRONTEND_URL` with your actual Render URL!

---

## STEP 6: Deploy! (1 minute)

1. Click "Create Web Service"
2. Wait 5-10 minutes for deployment
3. Watch the logs (you'll see build progress)

---

## STEP 7: Get Your Link (1 minute)

After deployment completes:

Your app will be live at:
```
https://morphed-tech.onrender.com
```

OR

```
https://morphed-tech-XXXX.onrender.com
```

(Render will show you the exact URL)

---

## STEP 8: Update FRONTEND_URL (1 minute)

After you get your URL:

1. Go to your service dashboard
2. Click "Environment"
3. Find `FRONTEND_URL`
4. Update to your actual URL: `https://morphed-tech.onrender.com`
5. Click "Save Changes"
6. Service will auto-redeploy (2-3 minutes)

---

## STEP 9: Test Your App (5 minutes)

Open your Render URL and test:

- [ ] Homepage loads
- [ ] Student registration works
- [ ] Student login works
- [ ] Payment page shows ₹7,777 and UPI ID: 7038376253@ybl
- [ ] Admin login works (admin@morphedtech.com / MorphedTech@2024!Secure)
- [ ] Admin dashboard loads

---

## STEP 10: Change Admin Password (1 minute)

**CRITICAL:** Login to admin dashboard and change password immediately!

---

## 🎉 YOU'RE LIVE!

Share your link:
```
🚀 MORPHED TECH is officially LIVE!

Complete Data Engineering Mastery Platform

✅ SQL, Python, PySpark, AWS, Databricks
✅ 6+ Real Industry Projects
✅ 100+ Interview Questions
✅ Resume + Interview Guide
✅ Lifetime Access

🔥 Launch Offer: ₹7,777 (Regular ₹11,111)
Save ₹3,334 (30% OFF)

Limited to first 54 students

Enroll now: https://morphed-tech.onrender.com

#DataEngineering #BigData #AWS #PySpark
```

---

## 📊 RENDER.COM FREE TIER LIMITS

✅ 750 hours/month (enough for 24/7 uptime)
✅ Auto SSL certificate (HTTPS)
✅ Auto deploys from GitHub
⚠️ Sleeps after 15 minutes of inactivity (wakes up in ~30 seconds)
⚠️ 512 MB RAM (sufficient for your app)

---

## 🔧 TROUBLESHOOTING

### Build Failed?
- Check logs for errors
- Make sure `package.json` has all dependencies
- Verify Node version compatibility

### App Not Loading?
- Check environment variables are set correctly
- Verify `PORT` is set to `5000`
- Check logs for runtime errors

### Database Issues?
- SQLite database will be created automatically
- Data persists on Render's free tier
- For production, consider upgrading to paid plan

---

## 🚀 NEXT STEPS AFTER DEPLOYMENT

1. ✅ Test all features
2. ✅ Change admin password
3. ✅ Setup custom domain (optional - $12/year)
4. ✅ Enable monitoring in Render dashboard
5. ✅ Share your link and start enrolling students!

---

## 💰 UPGRADE OPTIONS (Optional)

**Starter Plan ($7/month):**
- No sleep
- 512 MB RAM
- Better performance

**Standard Plan ($25/month):**
- 2 GB RAM
- Priority support
- Better for 100+ concurrent users

---

**RENDER.COM IS NOW OPEN IN YOUR BROWSER!**

**Follow the steps above and you'll be live in 10 minutes! 🚀**

---

*Need help? Check Render logs or contact me!*
