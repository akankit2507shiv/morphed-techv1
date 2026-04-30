#!/bin/bash

# Quick Comic Formatter Script
# Usage: ./format-comics.sh

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         🎨 AWS COMIC FORMATTER - QUICK START                  ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Check if we're in the correct directory
if [ ! -f "format-comic-enhanced.js" ]; then
    echo "❌ Error: format-comic-enhanced.js not found!"
    echo "   Please run this script from the morphed-tech directory"
    exit 1
fi

# Run the enhanced formatter
echo "🚀 Running enhanced comic formatter..."
echo ""
node format-comic-enhanced.js

# Check if successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Comics have been formatted."
    echo ""
    echo "📋 Next steps:"
    echo "   1. Restart your server: node server.js"
    echo "   2. Open: http://localhost:5000/aws-syllabus.html"
    echo "   3. Click on any AWS topic to see formatted comics"
    echo ""
else
    echo ""
    echo "❌ ERROR: Formatting failed. Check the error messages above."
    echo ""
fi
