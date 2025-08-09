@echo off
echo 🚀 Deploying N8N Workflow Browser to DigitalOcean...

REM Check if doctl is installed
where doctl >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ DigitalOcean CLI (doctl) is not installed.
    echo 📋 Install it from: https://docs.digitalocean.com/reference/doctl/how-to/install/
    echo.
    echo Quick install:
    echo   Windows: choco install doctl
    echo   Or download from: https://github.com/digitalocean/doctl/releases
    pause
    exit /b 1
)

REM Check if authenticated
doctl auth list >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Not authenticated with DigitalOcean.
    echo 📋 Run: doctl auth init
    echo    Then get your API token from: https://cloud.digitalocean.com/account/api/tokens
    pause
    exit /b 1
)

echo ✅ Prerequisites met!
echo.

REM Create the app
echo 🔧 Creating DigitalOcean App...
doctl apps create .do/app.yaml

echo.
echo ✅ App created successfully!
echo.
echo 📋 Next steps:
echo 1. Go to: https://cloud.digitalocean.com/apps
echo 2. Connect your GitHub repository
echo 3. Your app will auto-deploy from the main branch
echo.
echo 🌐 Your app will be available at a URL like:
echo    https://your-app-name-xxxxx.ondigitalocean.app
echo.
echo 🎯 Features included:
echo    ✅ 2055+ real N8N workflows
echo    ✅ Full-text search ^& filters
echo    ✅ Modal views with JSON download
echo    ✅ Professional UI
echo    ✅ High-performance backend
pause
