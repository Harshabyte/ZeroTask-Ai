#!/usr/bin/env python3
"""
Vercel serverless function handler for N8N Workflow API
"""

from api_server import app_serverless
from mangum import Mangum

# Create the Mangum adapter for Vercel with lifespan disabled for serverless
handler = Mangum(app_serverless, lifespan="off")
