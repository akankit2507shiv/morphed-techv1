# 🔱 MORPHED TECH - SECURE BACKEND SYSTEM

Complete authentication and content protection system for EdTech platform.

## 🎯 FEATURES

### 1. OTP LOGIN SYSTEM
- ✅ Email-based passwordless authentication
- ✅ 6-digit OTP with 5-minute expiry
- ✅ Maximum 3 attempts per OTP
- ✅ Rate limit: 5 OTP requests per hour per email

### 2. SINGLE SESSION ENFORCEMENT
- ✅ Only one active session per user
- ✅ New login automatically invalidates previous sessions
- ✅ Session tracking with device info and IP address

### 3. SECURITY FEATURES
- ✅ JWT authentication with HTTP-only cookies
- ✅ Helmet.js for security headers
- ✅ CORS protection
- ✅ Rate limiting on all endpoints
- ✅ Security event logging

### 4. CONTENT PROTECTION (Frontend)
- ✅ Blur screen on tab switch
- ✅ Disable right-click and inspect element
- ✅ Disable screenshots (Print Screen)
- ✅ Dynamic watermark with user email
- ✅ Prevent copy/paste
- ✅ DevTools detection

### 5. VIDEO SECURITY
- ✅ AWS S3 signed URLs
- ✅ 10-minute expiry on video links
- ✅ Access logging and tracking

### 6. RATE LIMITING
- ✅ OTP requests: 5 per hour
- ✅ Login attempts: 10 per 15 minutes
- ✅ API calls: 60 per minute
- ✅ Database-backed rate limiting

---

## 📦 INSTALLATION

### 1. Install Dependencies
```bash
cd backend-security
npm install
```

### 2. Setup Database
```bash
# Login to MySQL
mysql -u root -p

# Run schema
source database/schema.sql
```

### 3. Configure Environment
```bash
# Copy example env file
cp .env.example .env

# Edit .env with your credentials
nano .env
```

### 4. Start Server
```bash
# Development
npm run dev

# Production
npm start
```

---

## 🔧 CONFIGURATION

### Environment Variables (.env)

```env
# Server
PORT=5000
NODE_ENV=production

# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=morphed_tech_secure

# JWT
JWT_SECRET=your_super_secret_jwt_key_min_32_chars
JWT_EXPIRES_IN=24h

# Email (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# AWS S3
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=ap-south-1
AWS_S3_BUCKET=morphed-tech-videos

# Security
OTP_EXPIRY_MINUTES=5
OTP_MAX_ATTEMPTS=3
OTP_RATE_LIMIT_PER_HOUR=5
VIDEO_URL_EXPIRY_MINUTES=10

# Frontend
FRONTEND_URL=http://localhost:3000
```

---

## 📡 API ENDPOINTS

### Authentication

#### 1. Request OTP
```http
POST /api/auth/request-otp
Content-Type: application/json

{
  "email": "student@example.com"
}

Response:
{
  "success": true,
  "message": "OTP sent successfully to your email",
  "expiresIn": 300
}
```

#### 2. Verify OTP & Login
```http
POST /api/auth/verify-otp
Content-Type: application/json

{
  "email": "student@example.com",
  "otp": "123456"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "student@example.com",
    "name": "Test Student",
    "role": "student"
  }
}
```

#### 3. Logout
```http
POST /api/auth/logout
Authorization: Bearer <token>

Response:
{
  "success": true,
  "message": "Logged out successfully"
}
```

#### 4. Check Session Status
```http
GET /api/auth/session-status
Authorization: Bearer <token>

Response:
{
  "success": true,
  "isValid": true,
  "user": {
    "id": 1,
    "email": "student@example.com",
    "name": "Test Student",
    "role": "student"
  },
  "sessionInfo": {
    "createdAt": "2024-01-01T10:00:00.000Z",
    "lastActivity": "2024-01-01T10:30:00.000Z",
    "expiresAt": "2024-01-02T10:00:00.000Z"
  }
}
```

### Video Protection

#### 1. Get Signed Video URL
```http
POST /api/video/get-video-url
Authorization: Bearer <token>
Content-Type: application/json

{
  "videoId": "sample-video-001"
}

Response:
{
  "success": true,
  "videoUrl": "https://s3.amazonaws.com/bucket/video.mp4?signature=...",
  "expiresIn": 600,
  "expiresAt": "2024-01-01T10:10:00.000Z",
  "message": "Video URL generated successfully"
}
```

#### 2. Log Video Access
```http
POST /api/video/log-video-access
Authorization: Bearer <token>
Content-Type: application/json

{
  "videoId": "sample-video-001"
}

Response:
{
  "success": true,
  "message": "Video access logged"
}
```

---

## 🎨 FRONTEND INTEGRATION

### 1. Include Content Protection Script
```html
<script src="contentProtection.js"></script>
```

### 2. Initialize After Login
```javascript
const user = JSON.parse(localStorage.getItem('user'));
if (user.email) {
  window.contentProtection = new ContentProtection(user.email);
}
```

### 3. Load Protected Video
```javascript
async function loadVideo(videoId) {
  const token = localStorage.getItem('token');
  
  const response = await fetch('/api/video/get-video-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ videoId })
  });

  const data = await response.json();
  
  if (data.success) {
    document.getElementById('video').src = data.videoUrl;
  }
}
```

---

## 🗄️ DATABASE SCHEMA

### Tables

1. **users** - User accounts
2. **otps** - OTP codes with expiry
3. **sessions** - Active user sessions
4. **rate_limits** - API rate limiting
5. **video_access_logs** - Video access tracking
6. **security_events** - Security event logging
7. **enrollments** - Course enrollment status

### Cleanup Procedures

Run automatically every hour:
- `cleanup_expired_otps()` - Remove expired OTPs
- `cleanup_expired_sessions()` - Remove expired sessions
- `cleanup_rate_limits()` - Remove old rate limit records

---

## 🔒 SECURITY BEST PRACTICES

### Backend
1. ✅ Use HTTPS in production
2. ✅ Set secure cookies (httpOnly, secure, sameSite)
3. ✅ Implement CORS properly
4. ✅ Use environment variables for secrets
5. ✅ Enable Helmet.js security headers
6. ✅ Rate limit all endpoints
7. ✅ Log security events

### Frontend
1. ✅ Store JWT in httpOnly cookies (not localStorage)
2. ✅ Validate all user inputs
3. ✅ Use Content Security Policy
4. ✅ Implement content protection
5. ✅ Add watermarks to sensitive content
6. ✅ Blur screen on tab switch

### AWS S3
1. ✅ Use signed URLs with short expiry
2. ✅ Enable bucket encryption
3. ✅ Restrict bucket access
4. ✅ Use CloudFront for CDN
5. ✅ Enable access logging

---

## 🧪 TESTING

### Test OTP Login
```bash
# 1. Request OTP
curl -X POST http://localhost:5000/api/auth/request-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"student@example.com"}'

# 2. Check email for OTP

# 3. Verify OTP
curl -X POST http://localhost:5000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"student@example.com","otp":"123456"}'
```

### Test Rate Limiting
```bash
# Send 6 OTP requests (should block after 5)
for i in {1..6}; do
  curl -X POST http://localhost:5000/api/auth/request-otp \
    -H "Content-Type: application/json" \
    -d '{"email":"test@example.com"}'
  echo ""
done
```

---

## 📊 MONITORING

### Check Active Sessions
```sql
SELECT * FROM active_sessions_view;
```

### Check Security Events
```sql
SELECT * FROM security_events_summary;
```

### Check Rate Limits
```sql
SELECT identifier, endpoint, request_count, window_start 
FROM rate_limits 
WHERE window_start > DATE_SUB(NOW(), INTERVAL 1 HOUR);
```

---

## 🚀 DEPLOYMENT

### Production Checklist
- [ ] Set NODE_ENV=production
- [ ] Use strong JWT_SECRET (min 32 chars)
- [ ] Enable HTTPS
- [ ] Configure firewall
- [ ] Set up SSL certificates
- [ ] Enable database backups
- [ ] Configure AWS S3 properly
- [ ] Set up monitoring/alerts
- [ ] Enable logging
- [ ] Test all endpoints

### PM2 Deployment
```bash
npm install -g pm2
pm2 start server.js --name morphed-tech-backend
pm2 save
pm2 startup
```

---

## 📝 LICENSE

Proprietary - Morphed Tech © 2024

---

## 🆘 SUPPORT

For issues or questions:
- Email: admin@morphedtech.com
- Documentation: Check this README

---

## 🔄 UPDATES

### Version 1.0.0 (Current)
- ✅ OTP authentication
- ✅ Single session enforcement
- ✅ Content protection
- ✅ Video security
- ✅ Rate limiting
- ✅ Security logging

---

**Built with ❤️ by Morphed Tech Team**
