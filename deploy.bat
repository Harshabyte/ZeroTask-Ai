@echo off
echo 🚀 N8N Workflow Browser - Quick Deploy
echo.

echo Select hosting platform:
echo 1. Railway (Recommended)
echo 2. Render  
echo 3. Heroku
echo 4. Vercel
echo 5. Local Test
echo.

set /p choice="Enter choice (1-5): "

if "%choice%"=="1" (
    echo 🚄 Deploying to Railway...
    npm install -g @railway/cli
    railway login
    railway init
    railway up
) else if "%choice%"=="2" (
    echo 🎨 Opening Render deployment...
    start https://render.com/
    echo Connect your GitHub repo and use these settings:
    echo Build Command: pip install -r requirements.txt
    echo Start Command: python api_server.py
) else if "%choice%"=="3" (
    echo 🟣 Deploying to Heroku...
    heroku create n8n-workflows-%RANDOM%
    git add .
    git commit -m "Deploy to Heroku"
    git push heroku main
) else if "%choice%"=="4" (
    echo ▲ Deploying to Vercel...
    npm install -g vercel
    vercel --prod
) else if "%choice%"=="5" (
    echo 🖥️ Starting local server...
    python api_server.py
) else (
    echo Invalid choice. Starting local server...
    python api_server.py
)

pause
