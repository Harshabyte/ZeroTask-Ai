#!/usr/bin/env python3
"""
Build script for Netlify static deployment
Generates static HTML files for the N8N Workflow Browser
"""

import json
import os
from pathlib import Path
from workflow_db import WorkflowDatabase

def generate_static_site():
    """Generate static HTML site for Netlify deployment"""
    
    # Create static directory
    static_dir = Path("static")
    static_dir.mkdir(exist_ok=True)
    
    # Initialize database
    print("📊 Initializing workflow database...")
    db = WorkflowDatabase()
    
    # Get stats
    stats = db.get_stats()
    print(f"✅ Found {stats['total']} workflows")
    
    # Generate main index.html
    index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🚀 N8N Workflow Browser - Professional Collection</title>
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{ 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
        }}
        .container {{ 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 40px 20px;
        }}
        .header {{
            text-align: center;
            color: white;
            margin-bottom: 50px;
        }}
        .header h1 {{
            font-size: 3.5rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }}
        .header p {{
            font-size: 1.2rem;
            opacity: 0.9;
        }}
        .stats-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
        }}
        .stat-card {{
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s ease;
        }}
        .stat-card:hover {{
            transform: translateY(-5px);
        }}
        .stat-number {{
            font-size: 2.5rem;
            font-weight: bold;
            color: #667eea;
            display: block;
        }}
        .stat-label {{
            color: #666;
            margin-top: 10px;
            font-size: 1.1rem;
        }}
        .features {{
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }}
        .features h2 {{
            text-align: center;
            margin-bottom: 30px;
            color: #333;
            font-size: 2rem;
        }}
        .feature-list {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }}
        .feature-item {{
            display: flex;
            align-items: center;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 10px;
            border-left: 4px solid #667eea;
        }}
        .feature-icon {{
            font-size: 1.5rem;
            margin-right: 15px;
        }}
        .cta {{
            text-align: center;
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }}
        .btn {{
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            margin: 10px;
            transition: background 0.3s ease;
        }}
        .btn:hover {{
            background: #5a6fd8;
        }}
        .github-link {{
            background: #333;
        }}
        .github-link:hover {{
            background: #444;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 N8N Workflow Browser</h1>
            <p>Professional Collection of {stats['total']}+ Automation Workflows</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-number">{stats['total']}</span>
                <div class="stat-label">Total Workflows</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">{stats['active']}</span>
                <div class="stat-label">Active Workflows</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">{stats['unique_integrations']}</span>
                <div class="stat-label">Integrations</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">{stats['total_nodes']:,}</span>
                <div class="stat-label">Total Nodes</div>
            </div>
        </div>

        <div class="features">
            <h2>🎯 Meeting-Ready Features</h2>
            <div class="feature-list">
                <div class="feature-item">
                    <span class="feature-icon">🔍</span>
                    <div>Advanced search and filtering capabilities</div>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">📱</span>
                    <div>Responsive design for all devices</div>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">📊</span>
                    <div>Detailed workflow analytics and insights</div>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">📥</span>
                    <div>One-click JSON download functionality</div>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">🎨</span>
                    <div>Professional modal views for workflow details</div>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">⚡</span>
                    <div>Lightning-fast performance and loading</div>
                </div>
            </div>
        </div>

        <div class="cta">
            <h2>🎉 Ready for Your Meeting!</h2>
            <p style="margin-bottom: 30px; font-size: 1.1rem; color: #666;">
                This professional N8N workflow browser is fully deployed and ready to impress your audience.
            </p>
            <a href="https://github.com/Harshabyte/ZeroTask-Ai" class="btn github-link">
                📂 View Source Code
            </a>
            <a href="/api/stats" class="btn">
                📊 API Documentation
            </a>
        </div>
    </div>
</body>
</html>"""

    # Write index.html
    with open(static_dir / "index.html", "w", encoding="utf-8") as f:
        f.write(index_html)
    
    # Generate API stats JSON
    with open(static_dir / "api_stats.json", "w", encoding="utf-8") as f:
        json.dump(stats, f, indent=2, default=str)
    
    # Copy CSS and JS files if they exist
    for file_name in ["styles.css", "scripts.js", "bg.jpeg"]:
        src_file = Path(file_name)
        if src_file.exists():
            import shutil
            shutil.copy2(src_file, static_dir / file_name)
    
    print(f"✅ Static site generated in {static_dir}")
    print(f"📊 Total workflows: {stats['total']}")
    print(f"🚀 Ready for Netlify deployment!")

if __name__ == "__main__":
    generate_static_site()
