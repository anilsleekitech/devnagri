#!/bin/bash

# Quick Start: React.js to Next.js Conversion Using Free AI Tools
# This script demonstrates the complete conversion process

echo "🚀 React.js to Next.js Conversion - Quick Start"
echo "================================================"
echo ""

# Step 1: Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from your React.js project root."
    exit 1
fi

if [ ! -d "src" ]; then
    echo "❌ Error: src directory not found. Please run this script from your React.js project root."
    exit 1
fi

echo "✅ Found React.js project structure"
echo ""

# Step 2: Run the automated conversion
echo "🔄 Step 1: Running automated conversion..."
echo "----------------------------------------"
node convert-to-nextjs.js

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Automated conversion completed successfully!"
    echo ""
else
    echo ""
    echo "❌ Automated conversion failed. Please check the errors above."
    exit 1
fi

# Step 3: Navigate to the new Next.js project
echo "🔄 Step 2: Setting up Next.js project..."
echo "----------------------------------------"
cd devnagri-nextjs

# Step 4: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 5: Install additional dependencies
echo "📦 Installing additional dependencies..."
npm install @fortawesome/fontawesome-free @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @popperjs/core animate.css axios bootstrap bootstrap-icons countup.js jquery owl.carousel react-google-recaptcha react-slick slick-carousel swiper wow.js

# Step 6: Copy Bootstrap JS to public directory
echo "📁 Setting up Bootstrap..."
cp node_modules/bootstrap/dist/js/bootstrap.bundle.min.js public/

# Step 7: Start the development server
echo ""
echo "🚀 Step 3: Starting development server..."
echo "----------------------------------------"
echo "Your Next.js app is starting at http://localhost:3000"
echo ""
echo "📋 Next Steps:"
echo "1. Open http://localhost:3000 in your browser"
echo "2. Test all your routes and components"
echo "3. Use AI tools for any manual updates needed"
echo "4. Check the conversion-results/ directory for detailed guides"
echo ""
echo "🤖 AI Tools to Use:"
echo "- GitHub Copilot: For real-time code suggestions"
echo "- Claude Sonnet: For detailed code analysis"
echo "- ChatGPT: For general guidance"
echo "- Cursor AI: For real-time conversion"
echo ""
echo "📚 Generated Resources:"
echo "- conversion-results/complete-migration-guide.md"
echo "- conversion-results/ai-tools-guide.md"
echo "- FREE_AI_CONVERSION_GUIDE.md"
echo ""
echo "🎉 Conversion completed! Your React.js app is now running on Next.js!"
echo ""

# Start the development server
npm run dev