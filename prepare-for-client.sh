#!/bin/bash

# 🕉️ HAR HAR MAHADEV - CLIENT HANDOVER PREPARATION SCRIPT
# This script prepares the database and system for client handover

echo "🕉️ HAR HAR MAHADEV - Starting Client Handover Preparation..."
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Database file
DB="morphed-tech.db"

echo "📊 Current Database Status:"
echo "=================================="

# Show current users
echo ""
echo "👥 Current Users:"
sqlite3 $DB "SELECT id, name, email, role FROM users;"
echo ""

# Show enrollments
echo "💳 Current Enrollments:"
sqlite3 $DB "SELECT id, user_id, payment_status, payment_amount, transaction_id FROM enrollments;"
echo ""

# Ask what to do
echo "=================================="
echo "🎯 What would you like to do?"
echo ""
echo "1. Keep ALL existing data (Recommended for handover)"
echo "2. Clean test data but keep real students"
echo "3. Fresh start - Remove all students (keep only admin)"
echo "4. Just verify and exit"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
  1)
    echo ""
    echo -e "${GREEN}✅ Keeping all existing data${NC}"
    echo ""
    echo "Current data will be preserved:"
    echo "- All students: $(sqlite3 $DB 'SELECT COUNT(*) FROM users WHERE role=\"student\";') students"
    echo "- All enrollments: $(sqlite3 $DB 'SELECT COUNT(*) FROM enrollments;') records"
    echo "- All access settings preserved"
    echo ""
    echo -e "${YELLOW}⚠️  IMPORTANT: Make sure to backup database before handover!${NC}"
    echo ""
    read -p "Create backup now? (y/n): " backup
    if [ "$backup" = "y" ]; then
      mkdir -p backups
      BACKUP_FILE="backups/morphed-tech_$(date +%Y%m%d_%H%M%S).db"
      cp $DB "$BACKUP_FILE"
      echo -e "${GREEN}✅ Backup created: $BACKUP_FILE${NC}"
    fi
    ;;
    
  2)
    echo ""
    echo -e "${YELLOW}🧹 Cleaning test data...${NC}"
    echo ""
    
    # Backup first
    mkdir -p backups
    BACKUP_FILE="backups/morphed-tech_before_cleanup_$(date +%Y%m%d_%H%M%S).db"
    cp $DB "$BACKUP_FILE"
    echo -e "${GREEN}✅ Backup created: $BACKUP_FILE${NC}"
    echo ""
    
    # Remove test users (you can customize this list)
    echo "Removing test users..."
    sqlite3 $DB "DELETE FROM users WHERE email IN ('test@test.com', 'test@example.com', 'test@student.com');"
    
    # Clean orphaned enrollments
    echo "Cleaning orphaned enrollments..."
    sqlite3 $DB "DELETE FROM enrollments WHERE user_id NOT IN (SELECT id FROM users);"
    
    # Clean orphaned access records
    echo "Cleaning orphaned access records..."
    sqlite3 $DB "DELETE FROM syllabus_access WHERE user_id NOT IN (SELECT id FROM users);"
    sqlite3 $DB "DELETE FROM subtopic_access WHERE user_id NOT IN (SELECT id FROM users);"
    sqlite3 $DB "DELETE FROM feature_access WHERE user_id NOT IN (SELECT id FROM users);"
    
    echo ""
    echo -e "${GREEN}✅ Cleanup complete!${NC}"
    echo ""
    echo "Remaining data:"
    echo "- Students: $(sqlite3 $DB 'SELECT COUNT(*) FROM users WHERE role=\"student\";')"
    echo "- Enrollments: $(sqlite3 $DB 'SELECT COUNT(*) FROM enrollments;')"
    ;;
    
  3)
    echo ""
    echo -e "${RED}⚠️  WARNING: This will remove ALL student data!${NC}"
    echo ""
    read -p "Are you absolutely sure? Type 'YES' to confirm: " confirm
    
    if [ "$confirm" = "YES" ]; then
      # Backup first
      mkdir -p backups
      BACKUP_FILE="backups/morphed-tech_before_reset_$(date +%Y%m%d_%H%M%S).db"
      cp $DB "$BACKUP_FILE"
      echo -e "${GREEN}✅ Backup created: $BACKUP_FILE${NC}"
      echo ""
      
      echo "Removing all student data..."
      sqlite3 $DB "DELETE FROM users WHERE role='student';"
      sqlite3 $DB "DELETE FROM enrollments;"
      sqlite3 $DB "DELETE FROM syllabus_access;"
      sqlite3 $DB "DELETE FROM subtopic_access;"
      sqlite3 $DB "DELETE FROM feature_access;"
      
      echo ""
      echo -e "${GREEN}✅ Database reset complete!${NC}"
      echo "Only admin accounts remain."
    else
      echo -e "${YELLOW}❌ Cancelled. No changes made.${NC}"
    fi
    ;;
    
  4)
    echo ""
    echo -e "${GREEN}✅ Verification mode${NC}"
    ;;
    
  *)
    echo -e "${RED}❌ Invalid choice${NC}"
    exit 1
    ;;
esac

echo ""
echo "=================================="
echo "📊 Final Database Status:"
echo "=================================="
echo ""

# Show final counts
echo "👥 Total Users: $(sqlite3 $DB 'SELECT COUNT(*) FROM users;')"
echo "   - Admins: $(sqlite3 $DB 'SELECT COUNT(*) FROM users WHERE role=\"admin\";')"
echo "   - Students: $(sqlite3 $DB 'SELECT COUNT(*) FROM users WHERE role=\"student\";')"
echo ""
echo "💳 Total Enrollments: $(sqlite3 $DB 'SELECT COUNT(*) FROM enrollments;')"
echo "   - Completed: $(sqlite3 $DB 'SELECT COUNT(*) FROM enrollments WHERE payment_status=\"completed\";')"
echo "   - Pending: $(sqlite3 $DB 'SELECT COUNT(*) FROM enrollments WHERE payment_status=\"pending\";')"
echo ""
echo "💰 Total Revenue: ₹$(sqlite3 $DB 'SELECT COALESCE(SUM(payment_amount), 0) FROM enrollments WHERE payment_status=\"completed\";')"
echo ""

# Show admin accounts
echo "🔐 Admin Accounts:"
sqlite3 $DB "SELECT email FROM users WHERE role='admin';"
echo ""

echo "=================================="
echo "✅ PREPARATION COMPLETE!"
echo "=================================="
echo ""
echo "📋 Next Steps for Client Handover:"
echo ""
echo "1. ✅ Database is ready"
echo "2. ✅ All API URLs fixed (dynamic)"
echo "3. ✅ Pricing configured (₹7,777)"
echo "4. ✅ Security implemented"
echo ""
echo "🎯 Before Sharing:"
echo "   - Test admin login"
echo "   - Test student registration"
echo "   - Test payment flow"
echo "   - Verify all tabs working"
echo ""
echo "📦 Files to Share with Client:"
echo "   - Complete project folder"
echo "   - CLIENT_HANDOVER.md"
echo "   - FINAL_STATUS_REPORT.md"
echo "   - PRODUCTION_LAUNCH_GUIDE.md"
echo "   - .env file (with credentials)"
echo ""
echo "🔐 Admin Credentials:"
echo "   Email: admin@morphedtech.com"
echo "   Password: MorphedTech@2024!Secure"
echo "   (Client should change after first login)"
echo ""
echo "🙏 HAR HAR MAHADEV - Ready for handover!"
echo ""
