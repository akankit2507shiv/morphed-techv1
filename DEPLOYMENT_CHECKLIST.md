# 🚀 MORPHED TECH - PRODUCTION DEPLOYMENT CHECKLIST

## ✅ PRE-DEPLOYMENT CHECKLIST

### 1. Environment Variables Setup
- [ ] Copy `.env.example` to `.env`
- [ ] Generate strong JWT_SECRET: `openssl rand -base64 64`
- [ ] Generate SESSION_SECRET: `openssl rand -base64 32`
- [ ] Set ADMIN_EMAIL and ADMIN_PASSWORD
- [ ] Set NODE_ENV=production
- [ ] Configure CORS_ORIGIN to your domain
- [ ] Set FRONTEND_URL to your domain
- [ ] Configure UPI_ID and UPI_NAME for payments
- [ ] Set up SMTP credentials for email (optional)
- [ ] Add SENTRY_DSN for error tracking (optional)
- [ ] Add ANALYTICS_ID for Google Analytics (optional)

### 2. Security Hardening
- [ ] Verify JWT_SECRET is not default value
- [ ] Verify ADMIN_PASSWORD is strong and unique
- [ ] Verify CORS_ORIGIN is restricted (not *)
- [ ] Remove debug-api.html file
- [ ] Remove all test-*.html files
- [ ] Remove all *.bak* and *-backup* files
- [ ] Verify .env is in .gitignore
- [ ] Verify morphed-tech.db is in .gitignore
- [ ] Remove plain_password column from database

### 3. Database Setup
- [ ] Create fresh database or migrate existing
- [ ] Add indexes for performance:
  ```sql
  CREATE INDEX idx_users_email ON users(email);
  CREATE INDEX idx_enrollments_user_id ON enrollments(user_id);
  CREATE INDEX idx_syllabus_access_user_id ON syllabus_access(user_id);
  ```
- [ ] Set up automated backups
- [ ] Test database connection

### 4. Code Cleanup
- [ ] Remove all console.log statements (or use proper logging)
- [ ] Remove commented-out code
- [ ] Delete unused files
- [ ] Verify no hardcoded credentials

### 5. Testing
- [ ] Test registration flow
- [ ] Test login flow (student and admin)
- [ ] Test payment flow end-to-end
- [ ] Test course access control
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Load test with 50+ concurrent users

### 6. Monitoring & Analytics
- [ ] Set up error tracking (Sentry)
- [ ] Set up analytics (Google Analytics)
- [ ] Set up uptime monitoring
- [ ] Configure log aggregation

### 7. Performance
- [ ] Enable gzip compression
- [ ] Add cache headers for static assets
- [ ] Optimize images (if any)
- [ ] Test page load times (<3s)

### 8. SSL & Domain
- [ ] Purchase/configure domain
- [ ] Set up SSL certificate (Let's Encrypt)
- [ ] Configure DNS records
- [ ] Test HTTPS redirect

### 9. Backup & Recovery
- [ ] Set up automated database backups
- [ ] Test backup restoration
- [ ] Document recovery procedures
- [ ] Set up monitoring alerts

### 10. Documentation
- [ ] Update README with deployment instructions
- [ ] Document environment variables
- [ ] Document API endpoints
- [ ] Create runbook for common issues

---

## 🔧 DEPLOYMENT COMMANDS

### Local Testing
```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your values

# Start server
npm start
```

### Production Deployment (Render/Railway)
```bash
# Push to GitHub
git add .
git commit -m "Production ready"
git push origin main

# Set environment variables in hosting dashboard
# Deploy will trigger automatically
```

---

## 🚨 CRITICAL SECURITY ITEMS

**MUST FIX BEFORE LAUNCH:**
1. ❌ Change JWT_SECRET from default
2. ❌ Change ADMIN_PASSWORD from default
3. ❌ Restrict CORS_ORIGIN (not *)
4. ❌ Delete debug-api.html (contains hardcoded password)
5. ❌ Remove plain_password column from database

---

## 📊 POST-LAUNCH MONITORING

**Monitor These Metrics:**
- Server uptime (target: 99.9%)
- API response time (target: <200ms)
- Error rate (target: <1%)
- Payment success rate (target: >95%)
- User registration rate
- Course completion rate

---

## 🆘 ROLLBACK PLAN

If issues occur after deployment:
1. Revert to previous Git commit
2. Restore database from backup
3. Check error logs in Sentry
4. Verify environment variables
5. Test in staging environment first

---

## 📞 SUPPORT CONTACTS

- Hosting Support: [Your hosting provider]
- Domain Registrar: [Your domain provider]
- Payment Gateway: [UPI provider contact]
- Email Service: [SMTP provider]

---

**Last Updated:** 2024
**Version:** 1.0.0
