@echo off
echo 🚀 Creating GitHub Repository: ZeroTask-Ai
echo ==========================================

REM Check if we're already in a git repository
if exist ".git" (
    echo ✅ Git repository already exists
) else (
    echo 📦 Initializing Git repository...
    git init
)

REM Add all files
echo 📁 Adding files to Git...
git add .

REM Commit
echo 💾 Creating initial commit...
git commit -m "🚀 Initial commit: N8N Workflow Browser with 2055+ workflows

✨ Features:
- Professional N8N workflow documentation platform
- 2055+ real workflows from community
- Full-text search & advanced filters
- Modal views with JSON download
- High-performance FastAPI backend
- Production-ready deployment configs

🎯 Ready to deploy to DigitalOcean, Vercel, Railway!"

REM Set up remote
echo 🔗 Setting up GitHub remote...
git branch -M main
git remote add origin https://github.com/Harshabyte/ZeroTask-Ai.git

echo.
echo ✅ Git repository ready!
echo.
echo 📋 Next steps:
echo 1. Create repository on GitHub: https://github.com/new
echo    Repository name: ZeroTask-Ai
echo    Make it Public
echo.
echo 2. Push to GitHub:
echo    git push -u origin main
echo.
echo 3. Deploy to DigitalOcean:
echo    - Go to: https://cloud.digitalocean.com/apps
echo    - Create App → GitHub → Select ZeroTask-Ai repo
echo    - Configure: python api_server.py (port 8000)
echo.
echo 🎯 Your N8N Workflow Browser will be live in 5 minutes!
pause
