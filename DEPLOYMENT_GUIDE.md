# MORPHED TECH - DEPLOYMENT GUIDE

## 🚀 DEPLOYMENT STEPS

### STEP 1: BACKEND DEPLOYMENT (Render.com)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Or use "Deploy from Git URL"

3. **Configuration**
   ```
   Name: morphed-tech-backend
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Environment Variables** (Add these in Render dashboard)
   ```
   PORT=10000
   NODE_ENV=production
   JWT_SECRET=<generate with: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))">
   ADMIN_EMAIL=<your-admin-email>
   ADMIN_PASSWORD=<your-secure-password>
   UPI_ID=<your-upi-id>
   UPI_NAME=Morphed Tech
   COURSE_PRICE=7777
   TELEGRAM_BOT_TOKEN=<your-telegram-bot-token>
   TELEGRAM_CHAT_ID=<your-telegram-chat-id>
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Copy the backend URL (e.g., https://morphed-tech-backend.onrender.com)

---

### STEP 2: UPDATE FRONTEND API URLs

After backend is deployed, update API URLs in all HTML files:

**Files to update:**
- student-dashboard.html
- admin-dashboard.html
- student-login.html
- admin-login.html
- payment.html
- sql-module.html
- python-syllabus.html
- All other module files

**Find and replace:**
```javascript
// OLD
const API = 'http://localhost:5000/api';

// NEW
const API = 'https://YOUR-BACKEND-URL.onrender.com/api';
```

---

### STEP 3: FRONTEND DEPLOYMENT (Vercel)

1. **Install Vercel CLI** (Optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard**
   - Go to https://vercel.com
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Configure:
     ```
     Framework Preset: Other
     Build Command: (leave empty)
     Output Directory: .
     Install Command: (leave empty)
     ```

3. **Deploy**
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)
   - Copy the frontend URL (e.g., https://morphed-tech.vercel.app)

---

### STEP 4: UPDATE CORS IN BACKEND

Update server.js CORS configuration with your Vercel URL:

```javascript
const corsOptions = {
  origin: [
    'https://morphed-tech.vercel.app',
    'https://morphed-tech-*.vercel.app'
  ],
  credentials: true,
  optionsSuccessStatus: 200
};
```

Redeploy backend after this change.

---

### STEP 5: TESTING

1. **Backend Health Check**
   ```
   https://YOUR-BACKEND-URL.onrender.com/health
   ```
   Should return: `{"status":"ok","timestamp":"..."}`

2. **Frontend Access**
   ```
   https://morphed-tech.vercel.app
   ```

3. **Test User Flows**
   - Student Registration
   - Student Login
   - Admin Login
   - Payment Flow
   - Course Access

---

## 📋 DEPLOYMENT CHECKLIST

- [ ] Backend deployed on Render
- [ ] Environment variables configured
- [ ] Backend health check working
- [ ] Frontend API URLs updated
- [ ] Frontend deployed on Vercel
- [ ] CORS configured properly
- [ ] Student registration working
- [ ] Student login working
- [ ] Admin login working
- [ ] Payment flow working
- [ ] Course modules accessible

---

## 🔗 FINAL URLS

**Frontend (Share this with users):**
```
https://morphed-tech.vercel.app
```

**Backend API:**
```
https://morphed-tech-backend.onrender.com
```

**Admin Portal:**
```
https://morphed-tech.vercel.app/admin-login.html
```

**Student Portal:**
```
https://morphed-tech.vercel.app/student-login.html
```

---

## ⚠️ IMPORTANT NOTES

1. **Database**: SQLite database will be created automatically on Render
2. **Free Tier**: Render free tier may sleep after 15 minutes of inactivity
3. **First Load**: First request after sleep may take 30-60 seconds
4. **Persistence**: Database persists on Render's disk storage

---

## 🐛 TROUBLESHOOTING

### Backend not responding
- Check Render logs
- Verify environment variables
- Check if service is sleeping (free tier)

### CORS errors
- Verify CORS configuration in server.js
- Ensure frontend URL is whitelisted
- Redeploy backend after CORS changes

### Database errors
- Check Render logs
- Database auto-creates on first run
- Admin user auto-creates on startup

### Frontend not loading
- Check browser console for errors
- Verify API URLs are updated
- Check network tab for failed requests

---

## 📞 SUPPORT

If deployment fails, check:
1. Render deployment logs
2. Vercel deployment logs
3. Browser console errors
4. Network requests in DevTools

---

## 🎉 SUCCESS!

Once deployed, share this link with users:
```
https://morphed-tech.vercel.app
```

Users can:
- Register as students
- Login and access dashboard
- Make payments
- Access courses (when admin grants access)

Admin can:
- Login at /admin-login.html
- Manage students
- Control course access
- Track payments
