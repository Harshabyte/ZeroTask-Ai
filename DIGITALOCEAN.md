# 🚀 DigitalOcean Deployment Guide

## Option 1: Automatic Deployment (Recommended)

### Windows:

```cmd
deploy-do.bat
```

### Linux/Mac:

```bash
chmod +x deploy-do.sh
./deploy-do.sh
```

## Option 2: Manual Deployment via Web Interface

### Step 1: Prepare Your Repository

1. Make sure your code is pushed to GitHub
2. Repository: `ZeroTask-Ai` (main branch)

### Step 2: Create App on DigitalOcean

1. Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Choose "GitHub" as source
4. Select repository: `ZeroTask-Ai`
5. Branch: `main`
6. Source directory: `/` (root)

### Step 3: Configure App Settings

- **App Name**: `n8n-workflow-browser`
- **Environment**: Python
- **Build Command**: `pip install -r requirements.txt`
- **Run Command**: `python api_server.py`
- **HTTP Port**: `8000`

### Step 4: Environment Variables (Optional)

```
PORT=8000
HOST=0.0.0.0
WORKFLOW_DB_PATH=workflows.db
```

### Step 5: Deploy

1. Click "Create Resources"
2. Wait for deployment (2-5 minutes)
3. Your app will be available at: `https://your-app-xxxxx.ondigitalocean.app`

## Option 3: Using DigitalOcean CLI

### Prerequisites:

```bash
# Install doctl (DigitalOcean CLI)
# Windows: choco install doctl
# macOS: brew install doctl
# Linux: snap install doctl

# Authenticate
doctl auth init
```

### Deploy:

```bash
doctl apps create .do/app.yaml
```

## What Gets Deployed

✅ **Backend**: FastAPI server with SQLite database  
✅ **Frontend**: Professional UI with all features  
✅ **Data**: 2055+ real N8N workflows  
✅ **Features**: Search, filters, modal views, downloads  
✅ **Performance**: Sub-100ms response times

## Post-Deployment

Your app will include:

- Landing page at `/`
- Workflow browser at `/workflows.html`
- API endpoints for search and downloads
- All 2055 workflows indexed and searchable

## Scaling Options

- **Basic**: $5/month (1 GB RAM, 1 vCPU)
- **Professional**: $12/month (2 GB RAM, 1 vCPU)
- **Professional-XL**: $24/month (4 GB RAM, 2 vCPU)

## Monitoring

DigitalOcean provides built-in monitoring:

- App metrics and logs
- Automatic health checks
- SSL certificates (automatic)
- Custom domains (optional)

## Support

If you encounter issues:

1. Check DigitalOcean App logs
2. Verify GitHub repository access
3. Ensure all files are committed and pushed
