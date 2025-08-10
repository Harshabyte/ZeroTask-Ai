#!/usr/bin/env python3
"""
Netlify function handler for N8N Workflow API
"""

import json
import os
import sys
from pathlib import Path

# Add the project root to Python path
project_root = Path(__file__).parent.parent.parent
sys.path.insert(0, str(project_root))

from api_server import app

def main(event, context):
    """Netlify function entry point"""
    # For Netlify, we'll serve the app directly
    # This is a simplified approach for static deployment
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({
            "message": "N8N Workflow API is running on Netlify",
            "status": "healthy",
            "redirect_to": "https://your-site.netlify.app"
        })
    }
