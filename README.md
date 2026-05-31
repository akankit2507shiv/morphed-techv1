# Morphed Tech — Data Engineering Learning Platform

A full-stack LMS for aspiring data engineers. Covers SQL, Python, Git, AWS, Databricks, PySpark, and real-world projects with an integrated payment system and admin dashboard.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js + Express.js |
| Database | SQLite (dev) / PostgreSQL (prod) |
| Auth | JWT + bcryptjs |
| Frontend | HTML5 + CSS3 + Vanilla JS |
| Payments | UPI + QR Code |
| Notifications | Telegram Bot API |
| Deployment | Render (backend) + Vercel (frontend) |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# Edit .env with your values

# 3. Start server
npm start
# → http://localhost:5000
```

### Key URLs

| Page | URL |
|------|-----|
| Landing | `http://localhost:5000` |
| Student Login | `http://localhost:5000/student-login.html` |
| Admin Login | `http://localhost:5000/secure-admin` (hidden route) |
| Student Dashboard | `http://localhost:5000/student-dashboard.html` |
| Admin Dashboard | `http://localhost:5000/admin-dashboard.html` |

---

## Project Structure

```
morphed-tech/
├── server.js                    # Express backend — all API routes
├── config.js                    # Centralized configuration
├── security.js                  # Frontend security layer (JWT guard, watermark)
├── telegram-helper.js           # Telegram payment notifications
├── frontend-config.js           # Frontend API config
├── package.json
│
├── Frontend Pages
│   ├── index.html               # Entry point (redirects to landing)
│   ├── index-landing.html       # Public landing page
│   ├── student-login.html       # Student auth
│   ├── student-dashboard.html   # Student portal
│   ├── admin-login.html         # Admin auth
│   ├── admin-dashboard.html     # Admin panel
│   ├── admin-landing-cms.html   # Landing page CMS
│   ├── admin-access-control.html
│   ├── admin-diagnostic.html
│   ├── admin-guide.html
│   ├── payment.html             # Payment flow
│   ├── resume-model-15-25lpa.html
│   └── interview-complete-example.html
│
├── Course Pages (per module)
│   ├── sql-module.html / sql-topic.html / sql-free-topics.html
│   ├── python-syllabus.html / python-topic.html / python-free-topics.html
│   ├── git-syllabus.html / git-topic.html
│   ├── aws-syllabus.html / aws-topic.html
│   ├── databricks-syllabus.html / databricks-topic.html
│   ├── pyspark-syllabus.html / pyspark-topic.html
│   └── projects-syllabus.html / project-detail.html
│
├── Content JS (loaded by course pages)
│   ├── sql-content.js
│   ├── python-content.js
│   ├── git-content.js
│   ├── aws-content.js
│   ├── databricks-content.js
│   ├── pyspark-content.js
│   └── projects-content.js
│
├── Styling
│   ├── premium-design-system.css
│   ├── dopamine-ui.css
│   ├── premium-ui-enhancements.css
│   └── dashboard-animations.css
│
├── Content (JSON)
│   └── content/
│       ├── sql/                 # SQL topic JSON files
│       ├── git/                 # Git topic JSON files
│       └── aws/                 # AWS topic JSON files
│
├── Backend Security Module
│   └── backend-security/
│       ├── server.js
│       ├── routes/auth.js
│       ├── routes/video.js
│       ├── middleware/auth.js
│       ├── middleware/rateLimit.js
│       ├── middleware/sessionManager.js
│       ├── config/database.js
│       ├── utils/jwtUtils.js
│       ├── utils/emailService.js
│       └── utils/s3Utils.js
│
├── Deployment
│   ├── render.yaml              # Render.com config
│   ├── vercel.json              # Vercel config
│   ├── deploy.sh                # Deploy helper
│   └── deploy-production.sh
│
└── Docs
    ├── ARCHITECTURE.md
    ├── DEPLOYMENT_GUIDE.md
    ├── PAYMENT_GATEWAY_ANALYSIS.md
    ├── PRICING_CONFIGURATION.md
    ├── TELEGRAM_SETUP_GUIDE.md
    ├── TELEGRAM_FEATURES.md
    ├── RENDER_DEPLOYMENT_GUIDE.md
    └── RENDER_TELEGRAM_SETUP.md
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
PORT=5000
JWT_SECRET=<64-byte hex secret>
ADMIN_EMAIL=admin@morphedtech.com
ADMIN_PASSWORD=<secure password>
FRONTEND_URL=http://localhost:5000
UPI_ID=yourname@upi
UPI_NAME=Your Name
COURSE_PRICE=7777
TELEGRAM_BOT_TOKEN=<optional>
TELEGRAM_CHAT_ID=<optional>
```

> **Never commit `.env` to Git.** It is in `.gitignore`.

---

## API Routes

### Auth
```
POST  /api/auth/register
POST  /api/auth/login
GET   /api/auth/me
POST  /api/auth/onboarding
```

### Enrollment & Payment
```
GET   /api/enrollment/status
POST  /api/enrollment/create
POST  /api/enrollment/confirm-payment
GET   /api/enrollment/receipt/:id
GET   /api/enrollment/certificate
```

### Syllabus & Access
```
GET   /api/syllabus/access
GET   /api/subtopic/access
GET   /api/feature/access
```

### Admin
```
GET   /api/admin/students
PUT   /api/admin/students/:id
DELETE /api/admin/students/:id
PUT   /api/admin/students/:id/password
GET   /api/admin/stats
PUT   /api/admin/enrollments/:id
POST  /api/admin/enrollments/create
GET   /api/admin/syllabus/:userId
PUT   /api/admin/syllabus/:userId
PUT   /api/admin/access/:userId
GET   /api/admin/subtopic/:userId (via /access/:userId)
PUT   /api/admin/subtopic/:userId
GET   /api/admin/feature/:userId
PUT   /api/admin/feature/:userId
GET   /api/admin/receipt/:id
GET   /api/landing/sections
POST  /api/landing/sections
GET   /api/landing/pricing
PUT   /api/landing/pricing
POST  /api/telegram/test
GET   /api/security/logs
POST  /api/security/log
```

---

## Deployment

### Render.com (Backend)
1. Connect GitHub repo
2. Create Web Service → `npm start`
3. Add env vars from `.env.example`
4. Deploy

### Vercel (Frontend)
1. Import GitHub repo on vercel.com
2. Deploy — static files served automatically

---

## Security

- JWT authentication with 7-day expiry
- bcryptjs password hashing (10 rounds)
- Rate limiting on auth endpoints (100 req / 15 min)
- CORS restricted to configured origin
- Parameterized SQL queries (no injection)
- Frontend: DevTools detection, watermarking, session fingerprinting
- Role-based access control (admin / student)

---

## License

Proprietary — All rights reserved © Morphed Tech
