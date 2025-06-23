#!/bin/bash

echo "🚀 Setting up New Line Computers Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Make scripts executable
chmod +x scripts/*.sh

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update .env file with your actual details"
echo "2. Run 'npm run dev' to start development server"
echo "3. Visit http://localhost:5173 to see your website"
echo "4. Access admin at http://localhost:5173/admin (admin/admin123)"
echo ""
echo "🚀 For deployment:"
echo "- Run './scripts/deploy-netlify.sh' for Netlify"
echo ""