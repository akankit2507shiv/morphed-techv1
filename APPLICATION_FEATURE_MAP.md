# 🗺️ MORPHED TECH - APPLICATION FEATURE MAP

## 📊 APPLICATION OVERVIEW

**Total Pages:** 31 HTML files
**Total API Endpoints:** 35 endpoints
**Database Tables:** 7 tables
**User Roles:** 2 (Admin, Student)

---

## 🎯 CORE USER FLOWS

### 1. STUDENT JOURNEY
```
Landing Page (index-landing.html)
    ↓
Student Registration (student-login.html?tab=signup)
    ↓
Student Login (student-login.html)
    ↓
Student Dashboard (student-dashboard.html)
    ↓
Course Selection (sql-syllabus.html, python-syllabus.html, etc.)
    ↓
Topic Learning (sql-topic.html, python-topic.html, etc.)
    ↓
Payment Flow (payment.html)
    ↓
Full Access Granted
```

### 2. ADMIN JOURNEY
```
Admin Login (admin-login.html)
    ↓
Admin Dashboard (admin-dashboard.html)
    ↓
Student Management
    ↓
Access Control (admin-access-control.html)
    ↓
Landing Page CMS (admin-landing-cms.html)
```

---

## 📄 FRONTEND PAGES (31 Pages)

### Landing & Authentication (5 pages)
- ✅ index-landing.html - Main landing page
- ✅ index.html - Alternative landing
- ✅ student-login.html - Student auth
- ✅ admin-login.html - Admin auth
- ✅ payment.html - Payment page

### Student Dashboard & Learning (15 pages)
- ✅ student-dashboard.html - Main dashboard
- ✅ sql-module.html - SQL learning module
- ✅ sql-topic.html - SQL topic viewer
- ✅ sql-free-topics.html - Free SQL content
- ✅ python-syllabus.html - Python course outline
- ✅ python-topic.html - Python topic viewer
- ✅ python-free-topics.html - Free Python content
- ✅ pyspark-syllabus.html - PySpark course
- ✅ pyspark-topic.html - PySpark topics
- ✅ aws-syllabus.html - AWS course
- ✅ aws-topic.html - AWS topics
- ✅ databricks-syllabus.html - Databricks course
- ✅ databricks-topic.html - Databricks topics
- ✅ git-syllabus.html - Git course
- ✅ git-topic.html - Git topics
- ✅ projects-syllabus.html - Projects overview
- ✅ project-detail.html - Project details

### Admin Pages (3 pages)
- ✅ admin-dashboard.html - Admin control panel
- ✅ admin-access-control.html - Access management
- ✅ admin-landing-cms.html - Landing page editor

### Supporting Pages (8 pages)
- ✅ resume-model-15-25lpa.html - Resume template
- ✅ interview-complete-example.html - Interview guide
- ⚠️ student-login-premium.html - Duplicate?
- ⚠️ admin-login-new.html - Duplicate?
- ⚠️ login-new.html - Duplicate?
- ⚠️ landing-enhancements.html - Test page?
- ⚠️ force-reload.html - Utility page?

---

## 🔌 BACKEND API ENDPOINTS (35 Endpoints)

### Authentication APIs (4 endpoints)
- POST /api/auth/register - Student registration
- POST /api/auth/login - User login
- GET /api/auth/me - Get current user
- POST /api/auth/onboarding - Save onboarding data

### Enrollment APIs (4 endpoints)
- GET /api/enrollment/status - Check enrollment
- POST /api/enrollment/create - Initiate payment
- POST /api/enrollment/confirm-payment - Confirm payment
- GET /api/enrollment/certificate - Get certificate
- GET /api/enrollment/receipt/:id - Get receipt

### Admin Student Management (6 endpoints)
- GET /api/admin/students - List all students
- PUT /api/admin/students/:id - Update student
- DELETE /api/admin/students/:id - Delete student
- PUT /api/admin/students/:id/password - Reset password
- PUT /api/admin/enrollments/:id - Update enrollment
- GET /api/admin/stats - Dashboard statistics
- GET /api/admin/receipt/:id - Get any receipt

### Access Control APIs (10 endpoints)
- GET /api/syllabus/access - Get student access
- GET /api/admin/syllabus/:userId - Get user syllabus access
- PUT /api/admin/syllabus/:userId - Update syllabus access
- PUT /api/admin/access/:userId - Quick module access
- GET /api/subtopic/access - Get subtopic access
- GET /api/admin/access/:userId - Get all access
- PUT /api/admin/subtopic/:userId - Update subtopic access
- GET /api/feature/access - Get feature access
- GET /api/admin/feature/:userId - Get user feature access
- PUT /api/admin/feature/:userId - Update feature access

### Landing Page CMS (4 endpoints)
- GET /api/landing/sections - Get sections (admin)
- POST /api/landing/sections - Save sections (admin)
- GET /api/landing/public-sections - Get public sections
- GET /api/landing/pricing - Get pricing
- POST /api/landing/pricing - Save pricing (admin)

### Deprecated APIs (3 endpoints)
- GET /api/admin/topics - Deprecated
- PUT /api/admin/topics/:id - Deprecated
- GET /api/topics - Deprecated
- GET /api/free-topics - Deprecated

---

## 🗄️ DATABASE SCHEMA (7 Tables)

### 1. users
```sql
- id (PK)
- name
- email (UNIQUE)
- password (hashed)
- phone
- role (student/admin)
- target_role
- experience_level
- learning_pace
- onboarding_completed
- created_at
⚠️ plain_password (SECURITY RISK - should be removed)
```

### 2. enrollments
```sql
- id (PK)
- user_id (FK)
- course_name
- payment_status
- payment_amount
- payment_method
- transaction_id
- payment_date
- enrolled_at
- course_completed
- certificate_issued
- content_access_granted
```

### 3. syllabus_access
```sql
- id (PK)
- user_id (FK, UNIQUE)
- sql_access
- python_access
- pyspark_access
- databricks_access
- aws_access
- git_access
- projects_access
```

### 4. subtopic_access
```sql
- id (PK)
- user_id (FK)
- module
- group_name
- access_granted
- UNIQUE(user_id, module, group_name)
```

### 5. feature_access
```sql
- id (PK)
- user_id (FK)
- feature_type (resume/interview)
- tab_number
- access_granted
- UNIQUE(user_id, feature_type, tab_number)
```

### 6. landing_sections
```sql
- id (PK)
- name
- type
- display_order
- title
- subtitle
- content (JSON)
- visible
- updated_at
```

### 7. landing_pricing
```sql
- id (PK)
- regular_price
- offer_price
- offer_days
- limited_seats
- updated_at
```

---

## 🔐 AUTHENTICATION & AUTHORIZATION

### Authentication Methods
- JWT tokens (7-day expiry)
- bcrypt password hashing (10 rounds)
- Token stored in localStorage

### Authorization Levels
1. **Public** - Landing pages, free content
2. **Student** - Enrolled students with paid access
3. **Admin** - Full system access

### Protected Routes
- All /api/* endpoints require authentication
- Admin endpoints require admin role
- Course content requires enrollment + access grants

---

## 💳 PAYMENT SYSTEM

### Payment Flow
1. Student clicks "Enroll Now"
2. Redirected to payment.html
3. Shows UPI ID and amount
4. Student pays via UPI app
5. Student enters transaction ID
6. POST /api/enrollment/create
7. POST /api/enrollment/confirm-payment
8. Access granted by admin

### Payment Configuration
- UPI ID: morphedtech@paytm
- Course Price: ₹3,333 (configurable)
- Regular Price: ₹11,111
- Payment Method: UPI only

---

## 🎨 CONTENT STRUCTURE

### Course Modules (7 modules)
1. SQL (15 topics)
2. Python (14 topics)
3. PySpark (15 topics)
4. AWS (7 flows)
5. Databricks (8 topics)
6. Git (7 topics)
7. Projects (7 projects)

### Content Format (9 tabs per topic)
1. Comic - Visual learning
2. Deep Dive - Detailed explanation
3. Types - Concept types
4. Q&A - Questions & answers
5. Coding - Practice exercises
6. Quiz - Multiple choice
7. Interview - Interview questions
8. Memory - Quick revision
9. Revision - Summary

### Special Features
- Resume Builder (6 tabs)
- Interview Prep (5 tabs)
- Free Content (SQL: 3 topics, Python: 6 topics)

---

## 🔧 TECHNOLOGY STACK

### Backend
- Node.js + Express
- SQLite database
- JWT authentication
- bcrypt password hashing
- dotenv configuration

### Frontend
- Vanilla JavaScript
- Tailwind CSS
- No framework (pure HTML/JS)

### Deployment
- Static file serving
- Environment variables via .env
- Ready for Render/Railway/Vercel

---

## 🚨 CRITICAL FINDINGS

### Security Issues
1. ❌ plain_password column in database
2. ❌ CORS set to * (allows all origins)
3. ❌ No rate limiting on auth endpoints
4. ❌ Weak default JWT_SECRET
5. ❌ Admin credentials in .env file

### Performance Issues
1. ⚠️ No database indexes
2. ⚠️ Large content files loaded synchronously
3. ⚠️ No caching headers
4. ⚠️ 328 console.log statements

### Code Quality Issues
1. ⚠️ 25+ backup/test files
2. ⚠️ Duplicate login pages
3. ⚠️ Deprecated API endpoints still present
4. ⚠️ No error tracking

---

## ✅ WHAT'S WORKING WELL

1. ✅ Complete course content (60+ topics)
2. ✅ Working authentication system
3. ✅ Functional payment flow
4. ✅ Admin access control
5. ✅ Modern UI/UX design
6. ✅ Mobile responsive
7. ✅ Progress tracking
8. ✅ Role-based permissions

---

## 🎯 TESTING PRIORITY

### HIGH PRIORITY (Must Test)
1. Student registration → login → dashboard
2. Payment flow end-to-end
3. Admin login → student management
4. Course access control
5. Content rendering (all 9 tabs)

### MEDIUM PRIORITY
6. Resume builder tabs
7. Interview prep tabs
8. Free content access
9. Landing page CMS
10. Pricing updates

### LOW PRIORITY
11. Certificate generation
12. Receipt download
13. Onboarding flow
14. Analytics tracking

---

**Next Step:** Execute end-to-end testing of all critical flows
