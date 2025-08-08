// Enhanced Landing Page JavaScript - OneStop AI × N8N Automations
// Author: AI Assistant | Date: 2025

// Global state and configuration
const CONFIG = {
    typingSpeed: 50,
    carouselInterval: 5000,
    scrollThreshold: 100,
    parallaxIntensity: 0.5,
    animationDelay: 150,
    apiEndpoint: '/api/workflows' // Placeholder for search functionality
};

let state = {
    currentSlide: 0,
    carouselPaused: false,
    carouselTimer: null,
    isTyping: false,
    mobileMenuOpen: false
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollProgress();
    initParticles();
    initScrollAnimations();
    initNavbarEffects();
    initParallaxEffects();
    initTestimonialsCarousel();
    initMobileMenu();
    initSmoothScrolling();
    initAnalytics();
    initParallaxScrolling();
    
    console.log('🚀 OneStop AI × N8N Landing Page Initialized');
});

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress') || createScrollProgress();
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
        progressBar.style.width = scrollPercent + '%';
    });
}

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    return progressBar;
}

// Enhanced Particles System
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = window.innerWidth > 768 ? 50 : 25;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer, i);
    }
}

function createParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const animationDelay = Math.random() * 6;
    const animationDuration = 4 + Math.random() * 4;
    
    particle.style.cssText = `
        left: ${left}%;
        top: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        animation-delay: ${animationDelay}s;
        animation-duration: ${animationDuration}s;
    `;
    
    container.appendChild(particle);
}

// Advanced Scroll Animations with IntersectionObserver
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Observe cards with staggered animation
    const cards = document.querySelectorAll('.feature-card, .why-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.8s ease ${index * CONFIG.animationDelay}ms, transform 0.8s ease ${index * CONFIG.animationDelay}ms`;
        observer.observe(card);
    });
    
    // Observe feature items in about section
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 200}ms`;
        observer.observe(item);
    });
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add animate class for feature items
            if (entry.target.classList.contains('feature-item')) {
                entry.target.classList.add('animate');
            }
        }
    });
}

// Enhanced Navbar with Scrollspy
function initNavbarEffects() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > CONFIG.scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scrollspy
        updateActiveNavLink(navLinks);
    });
}

function updateActiveNavLink(navLinks) {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Parallax Effects
function initParallaxEffects() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = CONFIG.parallaxIntensity;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        ticking = false;
    }
}

// Advanced Testimonials Carousel
function initTestimonialsCarousel() {
    const carousel = document.getElementById('testimonials-carousel');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (!carousel || slides.length === 0) return;
    
    // Auto-play carousel
    startCarousel();
    
    // Navigation buttons
    prevBtn?.addEventListener('click', () => {
        navigateCarousel('prev');
    });
    
    nextBtn?.addEventListener('click', () => {
        navigateCarousel('next');
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Pause on hover
    carousel.addEventListener('mouseenter', pauseCarousel);
    carousel.addEventListener('mouseleave', resumeCarousel);
}

function startCarousel() {
    state.carouselTimer = setInterval(() => {
        if (!state.carouselPaused) {
            navigateCarousel('next');
        }
    }, CONFIG.carouselInterval);
}

function pauseCarousel() {
    state.carouselPaused = true;
}

function resumeCarousel() {
    state.carouselPaused = false;
}

function navigateCarousel(direction) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    
    if (direction === 'next') {
        state.currentSlide = (state.currentSlide + 1) % totalSlides;
    } else {
        state.currentSlide = (state.currentSlide - 1 + totalSlides) % totalSlides;
    }
    
    updateCarousel();
}

function goToSlide(index) {
    state.currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === state.currentSlide) {
            slide.classList.add('active');
        } else if (index < state.currentSlide) {
            slide.classList.add('prev');
        }
    });
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === state.currentSlide);
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (!mobileToggle || !navLinks) return;
    
    mobileToggle.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking on a link
    navLinks.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            closeMobileMenu();
        }
    });
    
    // Close menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    state.mobileMenuOpen = !state.mobileMenuOpen;
    
    mobileToggle.classList.toggle('active', state.mobileMenuOpen);
    navLinks.classList.toggle('active', state.mobileMenuOpen);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = state.mobileMenuOpen ? 'hidden' : '';
}

function closeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    state.mobileMenuOpen = false;
    mobileToggle.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
}

// Enhanced Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (!element) return;
    
    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
    const targetPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (state.mobileMenuOpen) {
        closeMobileMenu();
    }
}

// Enhanced Workflow Library - Open in New Tab
function openWorkflowLibrary(searchQuery = '') {
    // Set the URL for the workflow library page
    const baseUrl = window.location.origin;
    const searchParam = searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : '';
    const workflowUrl = `${baseUrl}/workflows${searchParam}`;
    
    // Open in new tab/window
    window.open(workflowUrl, '_blank', 'noopener,noreferrer');
    
    console.log('🚀 Opening N8N Workflow Library in new tab', searchQuery ? `with search: ${searchQuery}` : '');
    console.log('📍 URL:', workflowUrl);
}

// Legacy function - no longer needed since we open in new tab
function closeWorkflowLibrary() {
    console.log('📚 Modal functionality deprecated - workflows now open in new tab');
}

// Enhanced Button Interactions
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        // Add ripple effect
        button.addEventListener('click', createRippleEffect);
    });
});

function createRippleEffect(e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    // Add ripple animation CSS if not exists
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Analytics Integration (Placeholder)
function initAnalytics() {
    // Placeholder for analytics initialization
    // Replace with your preferred analytics service
    
    console.log('📊 Analytics initialized (placeholder)');
    
    // Example: Track page view
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
}

function trackEvent(eventName, parameters = {}) {
    // Placeholder for event tracking
    console.log('📊 Event tracked:', eventName, parameters);
    
    // Example integrations:
    // Google Analytics: gtag('event', eventName, parameters);
    // Plausible: plausible(eventName, { props: parameters });
    // PostHog: posthog.capture(eventName, parameters);
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Enhanced workflow diagram interactions
document.addEventListener('DOMContentLoaded', function() {
    const nodes = document.querySelectorAll('.node');
    const connections = document.querySelectorAll('.connection');
    
    if (nodes.length === 0) return;
    
    nodes.forEach((node, index) => {
        node.addEventListener('mouseenter', function() {
            // Highlight connected elements
            connections.forEach(connection => {
                connection.style.opacity = '0.3';
            });
            
            // Highlight specific connections based on node
            const nodeConnections = getNodeConnections(index);
            nodeConnections.forEach(connectionIndex => {
                if (connections[connectionIndex]) {
                    connections[connectionIndex].style.opacity = '1';
                    connections[connectionIndex].style.boxShadow = '0 0 10px rgba(99, 102, 241, 0.5)';
                }
            });
            
            // Add glow effect to current node
            this.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.8)';
        });
        
        node.addEventListener('mouseleave', function() {
            connections.forEach(connection => {
                connection.style.opacity = '1';
                connection.style.boxShadow = 'none';
            });
            
            this.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.3)';
        });
    });
});

function getNodeConnections(nodeIndex) {
    const connectionMap = {
        0: [0, 1], // API node
        1: [0, 2], // AI node  
        2: [1, 2]  // Data node
    };
    return connectionMap[nodeIndex] || [];
}

// Global functions for HTML onclick handlers
window.scrollToSection = scrollToSection;
window.openWorkflowLibrary = openWorkflowLibrary;
window.closeWorkflowLibrary = closeWorkflowLibrary;
window.toggleMobileMenu = toggleMobileMenu;

// Advanced Parallax Scrolling Effects
function initParallaxScrolling() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    const visualElements = document.querySelectorAll('.automation-visual, .integration-visual, .workflow-visual');
    
    let ticking = false;
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        parallaxSections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + scrollTop;
            const sectionHeight = section.offsetHeight;
            
            // Calculate if section is in viewport
            const isInViewport = rect.top < windowHeight && rect.bottom > 0;
            
            if (isInViewport) {
                // Calculate parallax offset
                const parallaxSpeed = 0.5;
                const yPos = -(scrollTop - sectionTop) * parallaxSpeed;
                
                // Apply parallax transform to background elements
                const backgroundElements = section.querySelectorAll('.section-background');
                backgroundElements.forEach(element => {
                    element.style.transform = `translateY(${yPos}px)`;
                });
                
                // Animate visual elements based on scroll progress
                const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight)));
                
                // Animate section content
                const content = section.querySelector('.section-content');
                if (content) {
                    const translateY = (1 - scrollProgress) * 50;
                    const opacity = Math.max(0, Math.min(1, scrollProgress * 2 - 0.5));
                    content.style.transform = `translateY(${translateY}px)`;
                    content.style.opacity = opacity;
                }
                
                // Animate section images
                const image = section.querySelector('.section-image');
                if (image) {
                    const translateX = (1 - scrollProgress) * (index % 2 === 0 ? 50 : -50);
                    const opacity = Math.max(0, Math.min(1, scrollProgress * 2 - 0.3));
                    image.style.transform = `translateX(${translateX}px)`;
                    image.style.opacity = opacity;
                }
                
                // Animate visual elements
                animateVisualElements(section, scrollProgress);
            }
        });
        
        ticking = false;
    }
    
    function animateVisualElements(section, progress) {
        // Animate workflow nodes
        const nodes = section.querySelectorAll('.node');
        nodes.forEach((node, index) => {
            const delay = index * 0.2;
            const nodeProgress = Math.max(0, Math.min(1, (progress - delay) / 0.6));
            const scale = 0.5 + (nodeProgress * 0.5);
            const rotate = nodeProgress * 360;
            node.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
            node.style.opacity = nodeProgress;
        });
        
        // Animate API connections
        const apiNodes = section.querySelectorAll('.api-node');
        apiNodes.forEach((node, index) => {
            const delay = index * 0.15;
            const nodeProgress = Math.max(0, Math.min(1, (progress - delay) / 0.7));
            const translateY = (1 - nodeProgress) * 30;
            const scale = 0.8 + (nodeProgress * 0.2);
            node.style.transform = `translateY(${translateY}px) scale(${scale})`;
            node.style.opacity = nodeProgress;
        });
        
        // Animate flow steps
        const flowSteps = section.querySelectorAll('.flow-step');
        flowSteps.forEach((step, index) => {
            const delay = index * 0.25;
            const stepProgress = Math.max(0, Math.min(1, (progress - delay) / 0.5));
            const translateX = (1 - stepProgress) * 40;
            const scale = 0.7 + (stepProgress * 0.3);
            step.style.transform = `translateX(${translateX}px) scale(${scale})`;
            step.style.opacity = stepProgress;
        });
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', requestTick);
    
    // Initial call
    updateParallax();
    
    // Intersection Observer for performance optimization
    const observerOptions = {
        root: null,
        rootMargin: '100px',
        threshold: 0
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, observerOptions);
    
    parallaxSections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Learn More Modal Functionality
function showLearnMoreModal() {
    const modal = createLearnMoreModal();
    document.body.appendChild(modal);
    
    // Animate modal in
    setTimeout(() => {
        modal.classList.add('modal-active');
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function createLearnMoreModal() {
    const modal = document.createElement('div');
    modal.className = 'learn-more-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeLearnMoreModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>Discover the Power of N8N Automation</h2>
                <button class="modal-close" onclick="closeLearnMoreModal()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <div class="modal-section">
                    <h3>🚀 What You'll Get</h3>
                    <ul>
                        <li>2,055+ ready-to-use workflow automations</li>
                        <li>365+ pre-built integrations with popular services</li>
                        <li>Complete documentation and setup guides</li>
                        <li>Community-tested and enterprise-grade workflows</li>
                    </ul>
                </div>
                <div class="modal-section">
                    <h3>💡 Perfect For</h3>
                    <ul>
                        <li>Business process automation</li>
                        <li>API integrations and data synchronization</li>
                        <li>AI-powered workflow enhancement</li>
                        <li>Custom automation development</li>
                    </ul>
                </div>
                <div class="modal-section">
                    <h3>🎯 Why Choose Us</h3>
                    <ul>
                        <li>100% free access to all workflows</li>
                        <li>Professional-grade automation templates</li>
                        <li>Active community support</li>
                        <li>Regular updates and new integrations</li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
                <button class="modal-btn primary" onclick="window.open('/files/workflows.html', '_blank'); closeLearnMoreModal();">
                    Start Exploring Workflows
                </button>
                <button class="modal-btn secondary" onclick="document.getElementById('features').scrollIntoView({behavior: 'smooth'}); closeLearnMoreModal();">
                    View Features
                </button>
            </div>
        </div>
    `;
    
    return modal;
}

function closeLearnMoreModal() {
    const modal = document.querySelector('.learn-more-modal');
    if (modal) {
        modal.classList.remove('modal-active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLearnMoreModal();
    }
});

// Button click tracking
document.addEventListener('click', (e) => {
    if (e.target.id === 'explore-workflows-btn') {
        console.log('🔗 Explore Workflows button clicked - Opening workflows page');
        // Add analytics tracking here if needed
    }
    
    if (e.target.id === 'learn-more-btn') {
        console.log('📚 Learn More button clicked');
        // Add analytics tracking here if needed
    }
});
