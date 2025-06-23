# 🚀 Local Setup & Deployment Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **Docker** (optional) - [Download here](https://docker.com/)

## 🛠️ Quick Setup

### 1. Clone & Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd newline-computers

# Run automatic setup
chmod +x scripts/setup.sh
./scripts/setup.sh
```

### 2. Manual Setup (Alternative)
```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit environment variables
nano .env  # or use your preferred editor
```

### 3. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

## 🔧 Environment Configuration

Edit `.env` file with your actual details:

```env
# Your actual phone number
VITE_PHONE_NUMBER=+91-YOUR-PHONE-NUMBER

# Your business email
VITE_EMAIL=your-email@domain.com

# WhatsApp number (without + sign)
VITE_WHATSAPP_NUMBER=91XXXXXXXXXX

# Change admin credentials
VITE_ADMIN_USERNAME=your-admin-username
VITE_ADMIN_PASSWORD=your-secure-password
```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
./scripts/deploy-netlify.sh
```

### Option 2: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
./scripts/deploy-vercel.sh
```

### Option 3: Docker
```bash
# Build containers
./scripts/docker-build.sh

# Run development
docker-compose up frontend

# Run production
docker-compose up frontend-prod
```

## 🔄 CI/CD Setup

### GitHub Actions (Automatic)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Add Secrets to GitHub:**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Add these secrets:

**For Netlify:**
```
NETLIFY_AUTH_TOKEN=your-netlify-token
NETLIFY_SITE_ID=your-site-id
```

**For Vercel:**
```
VERCEL_TOKEN=your-vercel-token
ORG_ID=your-org-id
PROJECT_ID=your-project-id
```

3. **Automatic Deployment:**
   - Every push to `main` branch triggers deployment
   - Pull requests are automatically tested
   - Build status is shown in GitHub

### Manual Deployment Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Netlify
netlify deploy --prod --dir=dist

# Deploy to Vercel
vercel --prod
```

## 📱 Admin Access

- **URL:** http://localhost:5173/admin
- **Default Login:** admin / admin123
- **Change credentials in `.env` file**

## 🔍 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 🐳 Docker Commands

```bash
# Development with hot reload
docker-compose up frontend

# Production build
docker-compose up frontend-prod

# Build custom images
docker build -f Dockerfile.dev -t newline-computers:dev .
docker build -f Dockerfile.prod -t newline-computers:prod .
```

## 🌍 Domain Setup

### Custom Domain on Netlify
1. Go to Netlify dashboard
2. Site settings → Domain management
3. Add custom domain
4. Update DNS records as instructed

### Custom Domain on Vercel
1. Go to Vercel dashboard
2. Project settings → Domains
3. Add custom domain
4. Update DNS records as instructed

## 📊 Monitoring & Analytics

### Add Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `.env`:
```env
VITE_GA_TRACKING_ID=GA-XXXXXXXXX
```

### Performance Monitoring
- Netlify provides built-in analytics
- Vercel provides performance insights
- Use Lighthouse for performance audits

## 🔒 Security Checklist

- [ ] Change default admin credentials
- [ ] Use HTTPS in production
- [ ] Keep dependencies updated
- [ ] Regular security audits
- [ ] Backup data regularly

## 🆘 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173
```

**Node modules issues:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Build failures:**
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Check for linting errors
npm run lint
```

### Getting Help

1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure Node.js version is 18+
4. Check network connectivity for external APIs

## 📞 Support

For technical support:
- Create an issue in the GitHub repository
- Check the documentation
- Contact the development team

---

**🎉 Your New Line Computers website is ready to go live!**