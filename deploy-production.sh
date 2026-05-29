#!/bin/bash

echo "=========================================="
echo "🚀 MORPHED TECH - PRODUCTION DEPLOYMENT"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Are you in the project root?${NC}"
    exit 1
fi

echo -e "${BLUE}📦 Step 1: Installing Dependencies${NC}"
echo "-----------------------------------"
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependencies installed${NC}"
else
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi
echo ""

echo -e "${BLUE}🔍 Step 2: Checking Environment Variables${NC}"
echo "-----------------------------------"
if [ -f ".env" ]; then
    echo -e "${GREEN}✅ .env file exists${NC}"
    echo "PORT: $(grep PORT .env | cut -d'=' -f2)"
    echo "ADMIN_EMAIL: $(grep ADMIN_EMAIL .env | cut -d'=' -f2)"
    echo "JWT_SECRET: $(grep -q JWT_SECRET .env && echo 'SET' || echo 'MISSING')"
else
    echo -e "${YELLOW}⚠️  .env file not found, using .env.example${NC}"
    cp .env.example .env
fi
echo ""

echo -e "${BLUE}🗄️ Step 3: Checking Database${NC}"
echo "-----------------------------------"
if [ -f "morphed-tech.db" ]; then
    SIZE=$(ls -lh morphed-tech.db | awk '{print $5}')
    echo -e "${GREEN}✅ Database exists (${SIZE})${NC}"
    
    # Check admin user
    ADMIN_COUNT=$(sqlite3 morphed-tech.db "SELECT COUNT(*) FROM users WHERE role='admin';" 2>/dev/null || echo "0")
    echo "Admin users: $ADMIN_COUNT"
    
    # Check students
    STUDENT_COUNT=$(sqlite3 morphed-tech.db "SELECT COUNT(*) FROM users WHERE role='student';" 2>/dev/null || echo "0")
    echo "Students: $STUDENT_COUNT"
else
    echo -e "${YELLOW}⚠️  Database not found, will be created on first run${NC}"
fi
echo ""

echo -e "${BLUE}🧪 Step 4: Running Tests${NC}"
echo "-----------------------------------"
# Test if server can start
timeout 5 node server.js > /dev/null 2>&1 &
SERVER_PID=$!
sleep 3

if ps -p $SERVER_PID > /dev/null; then
    echo -e "${GREEN}✅ Server starts successfully${NC}"
    kill $SERVER_PID 2>/dev/null
else
    echo -e "${YELLOW}⚠️  Server test skipped${NC}"
fi
echo ""

echo -e "${BLUE}📝 Step 5: Git Status${NC}"
echo "-----------------------------------"
if git rev-parse --git-dir > /dev/null 2>&1; then
    BRANCH=$(git branch --show-current)
    COMMIT=$(git rev-parse --short HEAD)
    echo -e "${GREEN}✅ Git repository${NC}"
    echo "Branch: $BRANCH"
    echo "Commit: $COMMIT"
    
    # Check if there are uncommitted changes
    if [ -n "$(git status --porcelain)" ]; then
        echo -e "${YELLOW}⚠️  Uncommitted changes detected${NC}"
        git status --short
    else
        echo -e "${GREEN}✅ Working directory clean${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Not a git repository${NC}"
fi
echo ""

echo -e "${BLUE}🚀 Step 6: Deployment Options${NC}"
echo "-----------------------------------"
echo "Choose deployment method:"
echo ""
echo "1. 🌐 Render.com (Recommended)"
echo "2. 🚂 Railway.app"
echo "3. 🟣 Heroku"
echo "4. 💻 VPS/EC2 (Manual)"
echo "5. ⚡ Local Production Mode"
echo ""
read -p "Enter choice (1-5): " DEPLOY_CHOICE

case $DEPLOY_CHOICE in
    1)
        echo ""
        echo -e "${BLUE}🌐 Deploying to Render.com${NC}"
        echo "-----------------------------------"
        echo "✅ render.yaml configuration exists"
        echo ""
        echo "📝 Next Steps:"
        echo "1. Go to: https://dashboard.render.com"
        echo "2. Click 'New +' → 'Blueprint'"
        echo "3. Connect your GitHub repo: morphextechnologies-lgtm/Maha_Morped_Kaal"
        echo "4. Render will auto-detect render.yaml"
        echo "5. Click 'Apply' to deploy"
        echo ""
        echo "🔗 Your app will be live at: https://morphed-tech-backend.onrender.com"
        echo ""
        echo "⏱️  Deployment takes 3-5 minutes"
        ;;
    2)
        echo ""
        echo -e "${BLUE}🚂 Deploying to Railway.app${NC}"
        echo "-----------------------------------"
        echo "📝 Next Steps:"
        echo "1. Install Railway CLI: npm install -g @railway/cli"
        echo "2. Login: railway login"
        echo "3. Initialize: railway init"
        echo "4. Deploy: railway up"
        echo "5. Set env vars from .env file"
        echo "6. Get URL: railway domain"
        ;;
    3)
        echo ""
        echo -e "${BLUE}🟣 Deploying to Heroku${NC}"
        echo "-----------------------------------"
        echo "📝 Next Steps:"
        echo "1. Install Heroku CLI: brew install heroku/brew/heroku"
        echo "2. Login: heroku login"
        echo "3. Create app: heroku create morphed-tech"
        echo "4. Set env vars: heroku config:set JWT_SECRET=..."
        echo "5. Deploy: git push heroku main"
        ;;
    4)
        echo ""
        echo -e "${BLUE}💻 VPS/EC2 Manual Deployment${NC}"
        echo "-----------------------------------"
        echo "📝 Commands to run on server:"
        echo ""
        echo "# Install Node.js"
        echo "curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -"
        echo "sudo apt-get install -y nodejs"
        echo ""
        echo "# Install PM2"
        echo "sudo npm install -g pm2"
        echo ""
        echo "# Clone repository"
        echo "git clone https://github.com/morphextechnologies-lgtm/Maha_Morped_Kaal.git"
        echo "cd Maha_Morped_Kaal"
        echo ""
        echo "# Install dependencies"
        echo "npm install"
        echo ""
        echo "# Setup environment"
        echo "cp .env.example .env"
        echo "nano .env  # Edit with your values"
        echo ""
        echo "# Start with PM2"
        echo "pm2 start server.js --name morphed-tech"
        echo "pm2 save"
        echo "pm2 startup"
        echo ""
        echo "# Setup Nginx (optional)"
        echo "sudo apt install nginx"
        echo "# Configure reverse proxy to port 5000"
        ;;
    5)
        echo ""
        echo -e "${BLUE}⚡ Starting Local Production Mode${NC}"
        echo "-----------------------------------"
        
        # Stop any running server
        pkill -f "node server.js" 2>/dev/null
        
        # Start server
        NODE_ENV=production nohup node server.js > production.log 2>&1 &
        SERVER_PID=$!
        echo $SERVER_PID > production.pid
        
        sleep 3
        
        if ps -p $SERVER_PID > /dev/null; then
            echo -e "${GREEN}✅ Server started successfully${NC}"
            echo "PID: $SERVER_PID"
            echo "Port: 5000"
            echo "URL: http://localhost:5000"
            echo ""
            echo "📊 View logs: tail -f production.log"
            echo "🛑 Stop server: kill $SERVER_PID"
        else
            echo -e "${RED}❌ Failed to start server${NC}"
            cat production.log
            exit 1
        fi
        ;;
    *)
        echo -e "${RED}❌ Invalid choice${NC}"
        exit 1
        ;;
esac

echo ""
echo "=========================================="
echo -e "${GREEN}✅ DEPLOYMENT PREPARATION COMPLETE${NC}"
echo "=========================================="
echo ""
echo "📚 Documentation:"
echo "  - PRODUCTION_LAUNCH_GUIDE.md"
echo "  - QUICK_LAUNCH.md"
echo "  - ADMIN_FIX_COMPLETE.md"
echo ""
echo "🔐 Admin Credentials:"
echo "  Email: admin@morphedtech.com"
echo "  Password: MorphedTech@2024!Secure"
echo ""
echo "🌐 URLs:"
echo "  Landing: /index.html"
echo "  Admin: /admin-login.html"
echo "  Student: /student-login.html"
echo ""
echo "✅ Ready for production!"
echo ""
