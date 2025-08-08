# ZeroTask AI - OneStop AI × N8N Platform

> **The world's largest library of ready-to-use N8N workflow automations**

[![Website](https://img.shields.io/badge/Website-Live-success)](https://zerotask-ai.com)
[![GitHub](https://img.shields.io/badge/GitHub-HarshaParisha-blue)](https://github.com/HarshaParisha)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Workflows](https://img.shields.io/badge/Workflows-2055+-orange)](static/workflows.html)

## 🚀 Overview

ZeroTask AI is a comprehensive platform providing free access to over 2,055 ready-to-use N8N workflow automations and 365+ integrations. Built for modern innovators who refuse to accept "impossible" as an answer.

![Platform Preview](static/preview.jpg)

## ✨ Features

### 🎯 **Core Platform**

- **2,055+ Ready Workflows**: Largest curated library on the internet
- **365+ Integrations**: Connect any service to any service
- **100% Free Access**: No hidden fees, no limitations
- **Apple-Inspired Design**: Clean, professional interface
- **Mobile Responsive**: Perfect experience on any device

### 🔧 **Advanced Functionality**

- **Interactive Documentation**: Zoom and pan through comprehensive guides
- **Workflow Browser**: Advanced search and filtering system
- **Real-time Search**: Instant workflow discovery
- **Category Filtering**: Organize by complexity and trigger type
- **Background Parallax**: Immersive visual experience

### 🎨 **Professional Design**

- **Seamless Sections**: Flowing background integration
- **Glass Morphism**: Modern UI effects
- **Smooth Animations**: Subtle interactive elements
- **Typography**: SF Pro Display font system
- **Color Palette**: Carefully crafted design system

## 🛠️ Technical Stack

### **Frontend**

- **HTML5**: Semantic structure with accessibility
- **CSS3**: Advanced styling with custom properties
- **JavaScript**: Vanilla JS for optimal performance
- **Responsive Design**: Mobile-first approach

### **Backend**

- **FastAPI**: High-performance Python framework
- **SQLite**: Lightweight database for workflow metadata
- **Static Serving**: Optimized file delivery
- **CORS Support**: Cross-origin resource sharing

### **Deployment**

- **Docker**: Containerized deployment
- **Python 3.9+**: Modern Python features
- **Environment Config**: Secure configuration management

## 🚀 Quick Start

### Prerequisites

- Python 3.9 or higher
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/HarshaParisha/ZeroTask-Ai.git
cd ZeroTask-Ai

# Install dependencies
pip install -r requirements.txt

# Set up environment
cp .env.example .env
# Edit .env with your configuration

# Start the server
python run.py
```

Visit `http://localhost:8000` to see your platform in action!

### Docker Deployment

```bash
# Build and run with Docker
docker-compose up -d

# Or use the provided script
./run-as-docker-container.sh
```

## 📁 Project Structure

```
ZeroTask-Ai/
├── 🏠 index.html              # Landing page
├── 🎨 styles.css             # Complete styling system
├── ⚡ scripts.js             # Interactive functionality
├── 🔧 api_server.py          # FastAPI backend
├── 🚀 run.py                 # Server launcher
├── 📊 static/
│   ├── workflows.html        # Workflow browser
│   ├── documentation.html    # Interactive docs
│   ├── api-reference.html    # Coming soon page
│   └── assets/              # Images and media
├── 🔄 workflows/             # N8N JSON files
├── 💾 database/              # SQLite database
├── 🐳 docker-compose.yml     # Container config
└── 📚 Documentation/         # Project docs
```

## 🎯 Key Features

### **Landing Page Sections**

1. **Hero Section**

   - Dynamic particle background
   - Compelling value proposition
   - Smooth scroll indicators

2. **Features Section** - _"Endless Possibilities at Your Fingertips"_

   - Business process automation
   - API integrations
   - AI-driven workflows

3. **Why Choose Us** - _"Designed for Modern Innovators"_

   - Largest curated library
   - Free access to everything
   - Built by professionals

4. **Call to Action** - _"Ready to Transform Your Workflow?"_

   - Direct access to workflows
   - Real-time statistics
   - Action buttons

5. **Testimonials**

   - Community feedback
   - Social proof badges
   - Interactive carousel

6. **Professional Footer**
   - Platform links
   - Resource access
   - Community connections

### **Workflow Browser**

- **Advanced Search**: Filter by name, description, integration
- **Category System**: Organize by complexity and trigger type
- **Statistics Display**: Live workflow and integration counts
- **Download System**: One-click JSON access

### **Documentation System**

- **Interactive Viewer**: Zoom, pan, and navigate documentation
- **Mobile Optimized**: Touch-friendly controls
- **High-Quality Images**: Crisp documentation display

## 🌐 Live Links

### **Platform**

- **Website**: [Your Production URL]
- **Workflow Browser**: `/files/workflows.html`
- **Documentation**: `/files/documentation.html`
- **API Reference**: `/files/api-reference.html`

### **Social**

- **Instagram**: [@harsha.\_.l4](https://www.instagram.com/harsha._.l4)
- **LinkedIn**: [Parisha Harshavardhan](https://www.linkedin.com/in/parisha-harshavardhan/)
- **GitHub**: [HarshaParisha](https://github.com/HarshaParisha)
- **Email**: harshaparisha@gmail.com

## 🔧 Configuration

### Environment Variables

```bash
# Application
APP_NAME="ZeroTask AI"
HOST="localhost"
PORT=8000
DEBUG=True

# Features
ENABLE_DOCUMENTATION=True
ENABLE_API_REFERENCE=True
ENABLE_WORKFLOW_UPLOAD=False

# Security
SECRET_KEY="your_secret_key"
ALLOWED_HOSTS="localhost,127.0.0.1,your-domain.com"
```

See `.env.example` for complete configuration options.

## 🔒 Security

This project implements comprehensive security measures:

- ✅ Environment variable protection
- ✅ Sensitive file exclusion
- ✅ Secure API endpoints
- ✅ Input validation
- ✅ CORS configuration

See [SECURITY.md](SECURITY.md) for detailed security information.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Install development dependencies
pip install -r requirements-dev.txt

# Run tests
python -m pytest

# Code formatting
black .
isort .

# Linting
flake8 .
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **N8N Community**: For the amazing automation platform
- **FastAPI**: For the high-performance web framework
- **Contributors**: Everyone who makes this project better
- **Users**: The automation community worldwide

## 📊 Stats

- **2,055+** Ready-to-use workflows
- **365+** Platform integrations
- **100%** Free and open access
- **29,518+** Total nodes across all workflows
- **215+** Active workflow categories

---

<div align="center">

**Built with ❤️ for the automation community**

[Website](https://zerotask-ai.com) • [Documentation](docs/) • [Workflows](static/workflows.html) • [API](static/api-reference.html)

Made by [Harsha Parisha](https://github.com/HarshaParisha) | Follow on [LinkedIn](https://www.linkedin.com/in/parisha-harshavardhan/)

</div>
