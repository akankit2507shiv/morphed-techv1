#!/bin/bash

# 🚀 MORPHED TECH - Quick Testing Script
# Run this before sharing with client

echo "🙏 HAR HAR MAHADEV - Starting Pre-Launch Tests..."
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counter
PASSED=0
FAILED=0

# Base URL
BASE_URL="http://localhost:5000"

echo "📊 Testing MORPHED TECH Platform..."
echo "=================================="
echo ""

# Test 1: Server is running
echo "1️⃣ Testing if server is running..."
if curl -s "$BASE_URL" > /dev/null; then
    echo -e "${GREEN}✅ Server is running${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Server is not running. Start with: node server.js${NC}"
    ((FAILED++))
    exit 1
fi
echo ""

# Test 2: Database exists
echo "2️⃣ Testing database..."
if [ -f "morphed-tech.db" ]; then
    echo -e "${GREEN}✅ Database file exists${NC}"
    ((PASSED++))
    
    # Check tables
    TABLES=$(sqlite3 morphed-tech.db ".tables" 2>/dev/null)
    if [[ $TABLES == *"users"* ]] && [[ $TABLES == *"enrollments"* ]]; then
        echo -e "${GREEN}✅ Database tables exist${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ Database tables missing${NC}"
        ((FAILED++))
    fi
else
    echo -e "${RED}❌ Database file not found${NC}"
    ((FAILED++))
fi
echo ""

# Test 3: Environment variables
echo "3️⃣ Testing environment variables..."
if [ -f ".env" ]; then
    echo -e "${GREEN}✅ .env file exists${NC}"
    ((PASSED++))
    
    # Check critical variables
    if grep -q "JWT_SECRET" .env && grep -q "ADMIN_EMAIL" .env && grep -q "UPI_ID" .env; then
        echo -e "${GREEN}✅ Critical environment variables present${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ Missing critical environment variables${NC}"
        ((FAILED++))
    fi
else
    echo -e "${RED}❌ .env file not found${NC}"
    ((FAILED++))
fi
echo ""

# Test 4: Landing page
echo "4️⃣ Testing landing page..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/index.html")
if [ "$STATUS" -eq 200 ]; then
    echo -e "${GREEN}✅ Landing page accessible (HTTP $STATUS)${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Landing page error (HTTP $STATUS)${NC}"
    ((FAILED++))
fi
echo ""

# Test 5: Student login page
echo "5️⃣ Testing student login page..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/student-login.html")
if [ "$STATUS" -eq 200 ]; then
    echo -e "${GREEN}✅ Student login page accessible (HTTP $STATUS)${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Student login page error (HTTP $STATUS)${NC}"
    ((FAILED++))
fi
echo ""

# Test 6: Admin login page
echo "6️⃣ Testing admin login page..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/admin-login.html")
if [ "$STATUS" -eq 200 ]; then
    echo -e "${GREEN}✅ Admin login page accessible (HTTP $STATUS)${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Admin login page error (HTTP $STATUS)${NC}"
    ((FAILED++))
fi
echo ""

# Test 7: API Health Check
echo "7️⃣ Testing API endpoints..."

# Test registration endpoint
REGISTER_RESPONSE=$(curl -s -X POST "$BASE_URL/api/auth/register" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"test123"}' 2>/dev/null)

if [[ $REGISTER_RESPONSE == *"error"* ]] || [[ $REGISTER_RESPONSE == *"token"* ]]; then
    echo -e "${GREEN}✅ Registration API responding${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Registration API not responding${NC}"
    ((FAILED++))
fi
echo ""

# Test 8: Payment QR Code API
echo "8️⃣ Testing payment QR code generation..."
QR_RESPONSE=$(curl -s "$BASE_URL/api/payment/qr-code")
if [[ $QR_RESPONSE == *"qrCode"* ]] && [[ $QR_RESPONSE == *"upiId"* ]]; then
    echo -e "${GREEN}✅ QR code API working${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ QR code API not working${NC}"
    ((FAILED++))
fi
echo ""

# Test 9: Database integrity
echo "9️⃣ Testing database integrity..."
INTEGRITY=$(sqlite3 morphed-tech.db "PRAGMA integrity_check;" 2>/dev/null)
if [[ $INTEGRITY == "ok" ]]; then
    echo -e "${GREEN}✅ Database integrity OK${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Database integrity check failed${NC}"
    ((FAILED++))
fi
echo ""

# Test 10: Check admin user exists
echo "🔟 Testing admin user..."
ADMIN_EXISTS=$(sqlite3 morphed-tech.db "SELECT COUNT(*) FROM users WHERE role='admin';" 2>/dev/null)
if [ "$ADMIN_EXISTS" -gt 0 ]; then
    echo -e "${GREEN}✅ Admin user exists${NC}"
    ((PASSED++))
    
    ADMIN_EMAIL=$(sqlite3 morphed-tech.db "SELECT email FROM users WHERE role='admin' LIMIT 1;" 2>/dev/null)
    echo -e "${YELLOW}   Admin Email: $ADMIN_EMAIL${NC}"
else
    echo -e "${RED}❌ Admin user not found${NC}"
    ((FAILED++))
fi
echo ""

# Test 11: Check payment configuration
echo "1️⃣1️⃣ Testing payment configuration..."
UPI_ID=$(grep "UPI_ID" .env | cut -d '=' -f2)
COURSE_PRICE=$(grep "COURSE_PRICE" .env | cut -d '=' -f2)

if [ ! -z "$UPI_ID" ] && [ ! -z "$COURSE_PRICE" ]; then
    echo -e "${GREEN}✅ Payment configuration present${NC}"
    echo -e "${YELLOW}   UPI ID: $UPI_ID${NC}"
    echo -e "${YELLOW}   Course Price: ₹$COURSE_PRICE${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Payment configuration missing${NC}"
    ((FAILED++))
fi
echo ""

# Test 12: Check Telegram configuration
echo "1️⃣2️⃣ Testing Telegram configuration..."
TELEGRAM_TOKEN=$(grep "TELEGRAM_BOT_TOKEN" .env | cut -d '=' -f2)
TELEGRAM_CHAT=$(grep "TELEGRAM_CHAT_ID" .env | cut -d '=' -f2)

if [ ! -z "$TELEGRAM_TOKEN" ] && [ ! -z "$TELEGRAM_CHAT" ]; then
    echo -e "${GREEN}✅ Telegram configuration present${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  Telegram not configured (optional)${NC}"
fi
echo ""

# Test 13: Check security settings
echo "1️⃣3️⃣ Testing security settings..."
JWT_SECRET=$(grep "JWT_SECRET" .env | cut -d '=' -f2)
JWT_LENGTH=${#JWT_SECRET}

if [ $JWT_LENGTH -ge 64 ]; then
    echo -e "${GREEN}✅ JWT secret is strong (${JWT_LENGTH} characters)${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ JWT secret is weak (${JWT_LENGTH} characters, need 64+)${NC}"
    ((FAILED++))
fi
echo ""

# Test 14: Check for backup files
echo "1️⃣4️⃣ Checking for unnecessary files..."
BACKUP_FILES=$(find . -name "*.backup" -o -name "*.bak" -o -name "*.old" 2>/dev/null | wc -l)
if [ $BACKUP_FILES -eq 0 ]; then
    echo -e "${GREEN}✅ No backup files found (clean codebase)${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠️  Found $BACKUP_FILES backup files (consider cleaning)${NC}"
fi
echo ""

# Test 15: Check node_modules
echo "1️⃣5️⃣ Testing dependencies..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✅ Dependencies installed${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Dependencies not installed. Run: npm install${NC}"
    ((FAILED++))
fi
echo ""

# Summary
echo ""
echo "=================================="
echo "📊 TEST SUMMARY"
echo "=================================="
echo -e "${GREEN}✅ Passed: $PASSED${NC}"
echo -e "${RED}❌ Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 ALL TESTS PASSED! READY TO SHARE WITH CLIENT! 🚀${NC}"
    echo ""
    echo "Next Steps:"
    echo "1. Deploy to production (Railway/Render/Heroku)"
    echo "2. Update FRONTEND_URL in .env"
    echo "3. Test on production URL"
    echo "4. Change admin password"
    echo "5. Share link with client"
    echo ""
    echo "🙏 HAR HAR MAHADEV - May Lord Shiva bless this launch! 🕉️"
else
    echo -e "${RED}⚠️  SOME TESTS FAILED. FIX ISSUES BEFORE SHARING.${NC}"
    echo ""
    echo "Check the errors above and fix them."
    echo "Then run this script again."
fi

echo ""
echo "=================================="
