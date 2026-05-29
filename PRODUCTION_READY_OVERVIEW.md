# 🚀 MORPHED TECH - COMPLETE PRODUCTION READY GUIDE

## 📋 PROJECT OVERVIEW

**Project Name**: Morphed Tech - Crack Data Engineering Jobs  
**Platform**: Full-Stack Learning Management System  
**Target Audience**: Data Engineering Professionals (₹5 LPA → ₹25+ LPA)  
**Status**: ✅ **PRODUCTION READY**  

---

## 🏗️ ARCHITECTURE

### Frontend
- **Technology**: HTML5 + CSS3 + Vanilla JavaScript
- **Entry Point**: `index-landing.html` (index.html redirects here)
- **Static Server**: Served by Express.js from root directory
- **Key Features**:
  - Premium UI Design System (`premium-design-system.css`)
  - Multilingual Support (7+ languages)
  - Responsive Dashboard
  - Audio Player for premium content
  - Animation & Dopamine UI (`dopamine-ui.css`)

### Backend
- **Technology**: Node.js + Express.js
- **Database**: SQLite (local) / PostgreSQL (production)
- **Port**: 5000 (development) / 10000 (production)
- **Main File**: `server.js`
- **Key Endpoints**:
  - `/auth/*` - Authentication (login, register, JWT)
  - `/api/syllabus/*` - Course content
  - `/api/payment/*` - UPI Payment integration
  - `/api/admin/*` - Admin dashboard
  - `/learning-data.json` - Course data

### Database
- **Type**: SQLite
- **File**: `morphed-tech.db`
- **Tables**:
  - `users` - Student/Admin accounts
  - `enrollments` - Course enrollments & payments
  - `syllabus_access` - Module access control
  - `progress` - Learning progress tracking
  - `certificates` - Certificate issuance
  - `qr_codes` - QR code records

---

## 📦 CORE DEPENDENCIES

```json
{
  "express": "^4.18.2" - Web framework
  "sqlite3": "^5.1.6" - Database
  "jsonwebtoken": "^9.0.2" - JWT auth
  "bcryptjs": "^2.4.3" - Password hashing
  "cors": "^2.8.5" - Cross-origin requests
  "dotenv": "^16.3.1" - Environment variables
  "multer": "^2.1.1" - File uploads
  "qrcode": "^1.5.4" - QR code generation
  "node-telegram-bot-api": "^0.67.0" - Telegram notifications
  "axios": "^1.16.0" - HTTP requests
  "express-rate-limit": "^8.5.1" - API rate limiting
  "pg": "^8.20.0" - PostgreSQL driver (production)
}
```

---

## 🎓 CONTENT MODULES

### Available Courses
1. **SQL** - Foundations to Advanced (40-day roadmap)
2. **Python** - Data Science & Engineering
3. **Git** - Version control mastery
4. **AWS** - Cloud computing essentials
5. **Databricks** - Big data analytics
6. **PySpark** - Distributed computing
7. **Projects** - Real-world capstone

### Learning Structure
- **Free Tier**: Introduction topics
- **Premium Tier**: Advanced content (via UPI payment)
- **Interview System**: Resume building + interview prep
- **Projects**: Capstone projects for portfolio

---

## 🔐 SECURITY FEATURES

✅ JWT-based authentication  
✅ Password hashing (bcryptjs - 10 rounds)  
✅ CORS protection  
✅ Rate limiting on auth endpoints (100 req/15 min)  
✅ Admin role-based access control  
✅ Secure payment flow (UPI gateway)  
✅ Environment variable management  
✅ Database connection pooling  
✅ Input validation & sanitization  

---

## 💳 PAYMENT INTEGRATION

- **Gateway**: UPI (Unified Payments Interface)
- **Price**: ₹7,777 (default) / ₹11,111 (regular)
- **Payment Methods**: UPI apps (Google Pay, PhonePe, Paytm)
- **Verification**: QR code generation + Telegram notifications
- **Database**: Transaction storage + status tracking

---

## 📱 ADMIN DASHBOARD

**URL**: `admin-dashboard.html`  
**Features**:
- Student analytics
- Enrollment management
- Payment monitoring
- Certificate issuance
- Course content management
- User access control
- Telegram bot status

**Credentials**:
- Email: `morphextechnologies@gmail.com`
- Password: `MorphedTech@2024!Secure`

---

## 🌍 MULTILINGUAL SUPPORT

- English (Default)
- Hindi
- Tamil
- Telugu
- Kannada
- Marathi
- Gujarati

---

## 📊 USER ROLES

1. **Student** (Default)
   - Access free content
   - Purchase premium courses
   - Track progress
   - View certificates

2. **Admin** (Restricted)
   - Manage users
   - Monitor payments
   - Issue certificates
   - Configure content

3. **Moderator** (Optional)
   - Approve interviews
   - Grade projects

---

## 🚀 DEPLOYMENT CONFIGURATION

### Development
```bash
npm start          # Start server on http://localhost:5000
# or
npm run dev        # Run with nodemon (auto-restart)
```

### Production (Render.com + Vercel)

**Backend** (Render.com):
- Platform: render.yaml configured
- Database: SQLite auto-creates on first run
- Environment: .env.production
- Port: 10000
- Auto-deploy: On GitHub push

**Frontend** (Vercel):
- Platform: vercel.json configured
- CDN: Global distribution
- SSL: Auto-configured
- Auto-deploy: On GitHub push

---

## 📝 ENVIRONMENT VARIABLES

### Development (.env)
```
PORT=5000
JWT_SECRET=c8473499e54ebf6b4d199660c2f1660aac37f72...
ADMIN_EMAIL=morphextechnologies@gmail.com
ADMIN_PASSWORD=MorphedTech@2024!Secure
FRONTEND_URL=http://localhost:5000
UPI_ID=7038376253@ybl
UPI_NAME=Morphed Tech
COURSE_PRICE=7777
TELEGRAM_BOT_TOKEN=8650838955:AAHZWNJAohXW5...
TELEGRAM_CHAT_ID=-1003991412096
```

### Production (.env.production)
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

---

## 🎯 KEY FEATURES

✅ **Responsive Design** - Works on mobile, tablet, desktop  
✅ **Real-time Notifications** - Telegram bot integration  
✅ **Progress Tracking** - Track learning progress per module  
✅ **Certificate Generation** - Auto-issue on course completion  
✅ **QR Code Payments** - Dynamic QR generation for UPI  
✅ **Interview Prep** - Resume builder + interview questions  
✅ **Social Features** - Leaderboards, community  
✅ **Analytics** - Admin dashboard with analytics  
✅ **Content Management** - Easy content updates  
✅ **Mobile App Ready** - PWA compatible  

---

## 📂 PROJECT STRUCTURE

```
/
├── server.js                    # Main backend server
├── config.js                    # Centralized configuration
├── telegram-helper.js           # Telegram notifications
├── security.js                  # Security utilities
├── package.json                 # Node.js dependencies
├── morphed-tech.db              # SQLite database
├── .env                         # Development environment
├── .env.production              # Production environment
├── render.yaml                  # Render.com config
├── vercel.json                  # Vercel config
│
├── index.html                   # Landing redirect
├── index-landing.html           # Main landing page
├── admin-dashboard.html         # Admin panel
├── student-dashboard.html       # Student dashboard
├── student-login.html           # Login page
├── admin-login.html             # Admin login
│
├── content/                     # Learning materials
├── uploads/                     # User uploaded files
├── backend-security/            # Security configs
│
├── *-content.js                 # Course content (SQL, Python, AWS, etc.)
├── *-syllabus.html              # Course syllabi
├── *-topic.html                 # Individual topics
│
├── css/
│   ├── dashboard-animations.css
│   ├── dopamine-ui.css
│   ├── premium-design-system.css
│
└── DOCUMENTATION/               # Setup guides & docs
    ├── DEPLOYMENT_GUIDE.md
    ├── DEPLOYMENT_READY.md
    ├── PRODUCTION_LAUNCH_GUIDE.md
    └── ... (30+ documentation files)
```

---

## 🔄 DEVELOPMENT WORKFLOW

### 1. **Setup**
```bash
cd /Users/ankit25/Desktop/Final_morphed_26-05-25
npm install
```

### 2. **Development**
```bash
npm start        # Starts server
# Frontend: Open http://localhost:5000
```

### 3. **Testing**
- Student login: Test enrollment flow
- Payment: Test UPI QR generation
- Admin: Test dashboard access
- Content: Verify all courses load

### 4. **Deployment**
```bash
# Push to GitHub
git push origin main

# Automatically deploys to:
# - Render.com (backend)
# - Vercel (frontend)
```

---

## ✅ PRODUCTION CHECKLIST

- [x] Database configured (SQLite)
- [x] Authentication system (JWT)
- [x] Payment integration (UPI)
- [x] Admin dashboard
- [x] Content management
- [x] Email notifications (Telegram)
- [x] Rate limiting
- [x] CORS configuration
- [x] Environment variables
- [x] Error handling
- [x] Logging
- [x] Security measures

---

## 🎯 NEXT STEPS TO PRODUCTION

### Immediate (Before Launch)
1. ✅ Verify all endpoints work
2. ✅ Test payment flow end-to-end
3. ✅ Verify admin dashboard
4. ✅ Test all course content loads
5. ✅ Check mobile responsiveness

### Deployment
1. Push to GitHub repository
2. Link Render.com to GitHub (backend auto-deploy)
3. Link Vercel to GitHub (frontend auto-deploy)
4. Configure production environment variables
5. Test live endpoints

### Post-Launch
1. Monitor error logs
2. Track user metrics
3. Optimize performance
4. Gather user feedback
5. Plan feature updates

---

## 📞 SUPPORT CONTACTS

- **Admin Email**: morphextechnologies@gmail.com
- **Telegram Bot**: Connected and active
- **Support**: Through admin dashboard

---

## 📄 DOCUMENTATION

All guides available in workspace:
- `DEPLOYMENT_GUIDE.md` - Detailed deployment steps
- `PRODUCTION_LAUNCH_GUIDE.md` - Launch checklist
- `RENDER_DEPLOYMENT_GUIDE.md` - Render setup
- `QUICK_START.md` - Quick start guide
- And 30+ other helpful documents

---

**Last Updated**: May 29, 2026  
**Status**: ✅ PRODUCTION READY  
**Next Step**: Start the server and open frontend!
