#!/bin/bash
echo "🚀 Deploying N8N Workflow Browser to DigitalOcean..."

# Check if doctl is installed
if ! command -v doctl &> /dev/null; then
    echo "❌ DigitalOcean CLI (doctl) is not installed."
    echo "📋 Install it from: https://docs.digitalocean.com/reference/doctl/how-to/install/"
    echo ""
    echo "Quick install:"
    echo "  Windows: choco install doctl"
    echo "  macOS: brew install doctl" 
    echo "  Linux: snap install doctl"
    exit 1
fi

# Check if authenticated
if ! doctl auth list &> /dev/null; then
    echo "❌ Not authenticated with DigitalOcean."
    echo "📋 Run: doctl auth init"
    echo "   Then get your API token from: https://cloud.digitalocean.com/account/api/tokens"
    exit 1
fi

echo "✅ Prerequisites met!"
echo ""

# Create the app
echo "🔧 Creating DigitalOcean App..."
doctl apps create .do/app.yaml

echo ""
echo "✅ App created successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Go to: https://cloud.digitalocean.com/apps"
echo "2. Connect your GitHub repository"
echo "3. Your app will auto-deploy from the main branch"
echo ""
echo "🌐 Your app will be available at a URL like:"
echo "   https://your-app-name-xxxxx.ondigitalocean.app"
echo ""
echo "🎯 Features included:"
echo "   ✅ 2055+ real N8N workflows"
echo "   ✅ Full-text search & filters"
echo "   ✅ Modal views with JSON download"
echo "   ✅ Professional UI"
echo "   ✅ High-performance backend"
