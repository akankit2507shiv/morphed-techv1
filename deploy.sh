#!/bin/bash

echo "🚀 MORPHED TECH - AUTOMATED DEPLOYMENT SCRIPT"
echo "=============================================="
echo ""

# Check if backend URL is provided
if [ -z "$1" ]; then
    echo "❌ Error: Backend URL not provided"
    echo ""
    echo "Usage: ./deploy.sh <backend-url>"
    echo "Example: ./deploy.sh https://morphed-tech-backend.onrender.com"
    exit 1
fi

BACKEND_URL=$1
API_URL="${BACKEND_URL}/api"

echo "📝 Backend URL: $BACKEND_URL"
echo "📝 API URL: $API_URL"
echo ""

# List of files to update
FILES=(
    "student-dashboard.html"
    "admin-dashboard.html"
    "student-login.html"
    "admin-login.html"
    "payment.html"
    "sql-module.html"
    "python-syllabus.html"
    "pyspark-syllabus.html"
    "aws-syllabus.html"
    "databricks-syllabus.html"
    "git-syllabus.html"
    "projects-syllabus.html"
    "sql-topic.html"
    "python-topic.html"
    "pyspark-topic.html"
    "aws-topic.html"
    "databricks-topic.html"
    "git-topic.html"
    "project-detail.html"
)

echo "🔄 Updating API URLs in HTML files..."
echo ""

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        # Create backup
        cp "$file" "${file}.backup"
        
        # Replace localhost API with production API
        sed -i.tmp "s|http://localhost:5000/api|${API_URL}|g" "$file"
        rm "${file}.tmp"
        
        echo "✅ Updated: $file"
    else
        echo "⚠️  Skipped: $file (not found)"
    fi
done

echo ""
echo "✅ All files updated successfully!"
echo ""
echo "📋 Next Steps:"
echo "1. Commit changes: git add . && git commit -m 'Update API URLs for production'"
echo "2. Push to GitHub: git push origin main"
echo "3. Deploy frontend to Vercel"
echo ""
echo "🎉 Deployment preparation complete!"
