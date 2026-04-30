# 🚀 MORPHED TECH - QUICK DEPLOYMENT

## OPTION 1: MANUAL DEPLOYMENT (Recommended)

### Step 1: Deploy Backend to Render

1. Go to https://render.com and sign up
2. Click "New +" → "Web Service"
3. Connect GitHub or use manual deploy
4. Configure:
   - **Name**: morphed-tech-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables (in Render dashboard):
   ```
   PORT=10000
   NODE_ENV=production
   JWT_SECRET=morphed_tech_production_jwt_secret_key_2024_secure
   ADMIN_EMAIL=!Mahadev007!@gmail.com
   ADMIN_PASSWORD=!Mahakal007!@
   UPI_ID=morphedtech@paytm
   UPI_NAME=Morphed Tech
   COURSE_PRICE=1111
   ```
6. Click "Create Web Service"
7. **Copy your backend URL** (e.g., https://morphed-tech-backend.onrender.com)

### Step 2: Update Frontend API URLs

Run this command with your backend URL:
```bash
./deploy.sh https://YOUR-BACKEND-URL.onrender.com
```

Or manually update `const API = 'http://localhost:5000/api'` in these files:
- student-dashboard.html
- admin-dashboard.html
- student-login.html
- admin-login.html
- payment.html
- All module HTML files

### Step 3: Deploy Frontend to Vercel

1. Go to https://vercel.com and sign up
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Other
   - **Build Command**: (leave empty)
   - **Output Directory**: `.`
5. Click "Deploy"
6. **Copy your frontend URL** (e.g., https://morphed-tech.vercel.app)

### Step 4: Update CORS (Important!)

1. Open `server.js`
2. Find the CORS section and update:
   ```javascript
   const corsOptions = {
     origin: [
       'https://YOUR-FRONTEND-URL.vercel.app',
       'https://YOUR-FRONTEND-URL-*.vercel.app'
     ],
     credentials: true,
     optionsSuccessStatus: 200
   };
   ```
3. Commit and push changes
4. Render will auto-redeploy

---

## OPTION 2: AUTOMATED DEPLOYMENT

### Prerequisites
- GitHub account
- Render account
- Vercel account

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy Backend (Render)**
   - Use render.yaml file (already configured)
   - Connect GitHub repo to Render
   - Auto-deploys on push

3. **Update API URLs**
   ```bash
   ./deploy.sh https://YOUR-BACKEND-URL.onrender.com
   git add .
   git commit -m "Update API URLs"
   git push
   ```

4. **Deploy Frontend (Vercel)**
   - Connect GitHub repo to Vercel
   - Auto-deploys on push

---

## 🎯 FINAL RESULT

After deployment, you'll have:

**Frontend URL** (Share this with users):
```
https://morphed-tech.vercel.app
```

**Backend API**:
```
https://morphed-tech-backend.onrender.com
```

**Admin Portal**:
```
https://morphed-tech.vercel.app/admin-login.html
```

**Student Portal**:
```
https://morphed-tech.vercel.app/student-login.html
```

---

## ✅ TESTING CHECKLIST

After deployment, test:

- [ ] Frontend loads without errors
- [ ] Student registration works
- [ ] Student login works
- [ ] Admin login works (Email: !Mahadev007!@gmail.com, Password: !Mahakal007!@)
- [ ] Payment page loads
- [ ] Course modules display
- [ ] Admin dashboard accessible
- [ ] No CORS errors in console

---

## 🐛 COMMON ISSUES

### "CORS Error"
- Update CORS in server.js with your Vercel URL
- Redeploy backend

### "Backend not responding"
- Render free tier sleeps after 15 min inactivity
- First request takes 30-60 seconds to wake up
- Check Render logs for errors

### "Database not found"
- Database auto-creates on first run
- Check Render logs
- Restart service if needed

### "Admin can't login"
- Admin user auto-creates on startup
- Check environment variables in Render
- Check Render logs for admin creation message

---

## 📞 NEED HELP?

Check these resources:
1. DEPLOYMENT_GUIDE.md - Detailed step-by-step guide
2. Render logs - For backend issues
3. Vercel logs - For frontend issues
4. Browser console - For client-side errors

---

## 🎉 SUCCESS!

Once deployed, share the link with your friends:
```
https://morphed-tech.vercel.app
```

They can:
- Register as students
- Login and explore
- Provide feedback
- Test payment flow
- Access courses (when you grant access as admin)

---

**Deployment Time**: ~15-20 minutes
**Cost**: FREE (using free tiers)
**Maintenance**: Auto-deploys on git push
