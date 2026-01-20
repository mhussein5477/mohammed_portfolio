// ============ PROJECT DATA ============
const projectsData = {
    'smart-access': {
        title: 'Smart Access',
        subtitle: 'Healthcare Management App',
        icon: '<i class="fas fa-heart"></i>',
        description: 'Smart Access is Kenya\'s leading medical cover management application with over 50,000+ active downloads. The app revolutionizes how Kenyans access and manage their health insurance benefits, providing a seamless digital experience for tracking medical cover, managing wellness programs, and accessing healthcare services across the country.',
        techStack: [
            { icon: '<i class="fas fa-code" style="color: #02569B;"></i>', name: 'Flutter' },
            { icon: '<i class="fab fa-android" style="color: #3DDC84;"></i>', name: 'Android' },
            { icon: '<i class="fab fa-apple" style="color: #000;"></i>', name: 'iOS' },
            { icon: '<i class="fas fa-fire" style="color: #FFA000;"></i>', name: 'Firebase' },
            { icon: '<i class="fab fa-node-js" style="color: #339933;"></i>', name: 'Node.js' }
        ],
        features: [
            'Real-time medical cover tracking and benefit management',
            'Digital health card with QR code for quick hospital check-ins',
            'Wellness program integration with fitness tracking',
            'Provider network locator with 500+ partner hospitals',
            'Claims submission and tracking system',
            'Push notifications for policy updates and reminders',
            'Secure document storage for medical records',
            'Multi-language support (English and Swahili)'
        ],
        integrations: [
            { icon: '<i class="fas fa-plug"></i>', name: 'REST API', desc: 'Backend integration' },
            { icon: '<i class="fas fa-bell"></i>', name: 'Push Notifications', desc: 'Firebase Cloud Messaging' },
            { icon: '<i class="fas fa-lock"></i>', name: 'Authentication', desc: 'OAuth 2.0 & Biometric' },
            { icon: '<i class="fas fa-credit-card"></i>', name: 'Payment Gateway', desc: 'M-Pesa & Card payments' }
        ],
        liveLink: 'https://play.google.com/store/apps/details?id=com.smart.smartaccess'
    },
    'kenya-airways': {
        title: 'Kenya Airways Pension',
        subtitle: 'Enterprise Pension Management',
        icon: '<i class="fas fa-plane"></i>',
        description: 'A comprehensive pension management solution developed exclusively for Kenya Airways staff. The application streamlines pension administration by providing employees with instant access to their pension details, contribution history, and beneficiary management. This enterprise-grade solution ensures data security while offering a user-friendly interface for managing critical retirement information.',
        techStack: [
            { icon: '<i class="fas fa-code" style="color: #02569B;"></i>', name: 'Flutter' },
            { icon: '<i class="fab fa-android" style="color: #3DDC84;"></i>', name: 'Android' },
            { icon: '<i class="fab fa-apple" style="color: #000;"></i>', name: 'iOS' },
            { icon: '<i class="fas fa-database" style="color: #003B57;"></i>', name: 'SQL Server' }
        ],
        features: [
            'Detailed pension balance and contribution tracking',
            'Beneficiary management with document uploads',
            'Spouse and next-of-kin information updates',
            'Pension statement downloads (monthly and annual)',
            'Secure inquiry submission system',
            'Retirement calculator and projection tools',
            'Multi-factor authentication for security',
            'Offline mode for viewing saved data'
        ],
        integrations: [
            { icon: '<i class="fas fa-server"></i>', name: 'Enterprise API', desc: 'Secure backend' },
            { icon: '<i class="fas fa-shield-alt"></i>', name: 'SSO Integration', desc: 'Single Sign-On' },
            { icon: '<i class="fas fa-file-pdf"></i>', name: 'Document Gen', desc: 'PDF generation' },
            { icon: '<i class="fas fa-fingerprint"></i>', name: 'Biometric Auth', desc: 'Secure access' }
        ],
        liveLink: '#'
    },
    'digidrive': {
        title: 'Digidrive',
        subtitle: 'Auto Parts Marketplace',
        icon: '<i class="fas fa-car"></i>',
        description: 'As Co-founder and Lead Developer, I built Digidrive - a revolutionary marketplace connecting spare parts sellers with customers across Kenya. The platform addresses the challenge of finding quality auto parts by providing a verified network of sellers, real-time inventory, competitive pricing, and reliable delivery. Digidrive has transformed how Kenyans source automotive parts.',
        techStack: [
            { icon: '<i class="fas fa-code" style="color: #02569B;"></i>', name: 'Flutter' },
            { icon: '<i class="fab fa-android" style="color: #3DDC84;"></i>', name: 'Android' },
            { icon: '<i class="fab fa-apple" style="color: #000;"></i>', name: 'iOS' },
            { icon: '<i class="fas fa-fire" style="color: #FFA000;"></i>', name: 'Firebase' },
            { icon: '<i class="fab fa-node-js" style="color: #339933;"></i>', name: 'Node.js' }
        ],
        features: [
            'Advanced search with filters (make, model, year, part type)',
            'Seller verification and rating system',
            'Real-time inventory management for sellers',
            'In-app messaging between buyers and sellers',
            'Integrated payment gateway with escrow',
            'Order tracking with delivery updates',
            'Price comparison across multiple sellers',
            'Wishlist and saved searches'
        ],
        integrations: [
            { icon: '<i class="fas fa-credit-card"></i>', name: 'M-Pesa API', desc: 'Mobile payments' },
            { icon: '<i class="fas fa-truck"></i>', name: 'Delivery Partners', desc: 'Logistics integration' },
            { icon: '<i class="fas fa-map-marker-alt"></i>', name: 'Google Maps', desc: 'Location services' },
            { icon: '<i class="fas fa-bell"></i>', name: 'Notifications', desc: 'Real-time updates' }
        ],
        liveLink: 'https://play.google.com/store/apps/details?id=com.digisavannah.Digidrive'
    },
    'wabebe': {
        title: 'Wabebe',
        subtitle: 'Fleet Management Platform',
        icon: '<i class="fas fa-truck"></i>',
        description: 'Wabebe is a comprehensive fleet management solution designed for vehicle owners and SACCOs (Savings and Credit Cooperative Organizations) in Kenya. The platform provides real-time tracking, trip management, fuel monitoring, and incident reporting. Wabebe helps fleet owners optimize operations, reduce costs, and improve vehicle utilization through data-driven insights.',
        techStack: [
            { icon: '<i class="fas fa-code" style="color: #02569B;"></i>', name: 'Flutter' },
            { icon: '<i class="fab fa-android" style="color: #3DDC84;"></i>', name: 'Android' },
            { icon: '<i class="fas fa-fire" style="color: #FFA000;"></i>', name: 'Firebase' },
            { icon: '<i class="fab fa-node-js" style="color: #339933;"></i>', name: 'Node.js' },
            { icon: '<i class="fas fa-database" style="color: #336791;"></i>', name: 'PostgreSQL' }
        ],
        features: [
            'Real-time GPS tracking for entire fleet',
            'Trip planning and route optimization',
            'Fuel consumption tracking and analysis',
            'Driver behavior monitoring and scoring',
            'Incident reporting with photo uploads',
            'Maintenance scheduling and reminders',
            'Expense tracking and reporting',
            'Multi-vehicle dashboard with analytics'
        ],
        integrations: [
            { icon: '<i class="fas fa-satellite"></i>', name: 'GPS Tracking', desc: 'Real-time location' },
            { icon: '<i class="fas fa-chart-line"></i>', name: 'Analytics API', desc: 'Data insights' },
            { icon: '<i class="fas fa-gas-pump"></i>', name: 'Fuel Vendors', desc: 'Fuel management' },
            { icon: '<i class="fas fa-mobile-alt"></i>', name: 'SMS Gateway', desc: 'Alerts & notifications' }
        ],
        liveLink: '#'
    },
    'school-attendance': {
        title: 'School Attendance System',
        subtitle: 'Biometric Student Tracking',
        icon: '<i class="fas fa-fingerprint"></i>',
        description: 'An innovative web-based attendance management system that leverages biometric technology to accurately track student attendance in real-time. The system automatically sends SMS notifications to parents when their children check in or out of school, providing peace of mind and improving school safety. Built with Angular for a responsive admin interface.',
        techStack: [
            { icon: '<i class="fab fa-angular" style="color: #DD0031;"></i>', name: 'Angular' },
            { icon: '<i class="fab fa-js-square" style="color: #F7DF1E;"></i>', name: 'TypeScript' },
            { icon: '<i class="fab fa-node-js" style="color: #339933;"></i>', name: 'Node.js' },
            { icon: '<i class="fas fa-database" style="color: #003B57;"></i>', name: 'SQL Server' }
        ],
        features: [
            'Fingerprint-based student check-in/out',
            'Automatic SMS notifications to parents',
            'Real-time attendance dashboard',
            'Attendance reports (daily, weekly, monthly)',
            'Multi-school support with role-based access',
            'Parent portal for attendance history',
            'Late arrival and early departure alerts',
            'Integration with school management systems'
        ],
        integrations: [
            { icon: '<i class="fas fa-fingerprint"></i>', name: 'Biometric SDK', desc: 'Fingerprint reader' },
            { icon: '<i class="fas fa-sms"></i>', name: 'SMS Gateway', desc: 'Bulk messaging' },
            { icon: '<i class="fas fa-server"></i>', name: 'REST API', desc: 'Backend services' },
            { icon: '<i class="fas fa-file-excel"></i>', name: 'Export Tools', desc: 'Report generation' }
        ],
        liveLink: '#'
    },
    'luna-packaging': {
        title: 'Luna Packaging',
        subtitle: 'E-Commerce Platform',
        icon: '<i class="fas fa-box"></i>',
        description: 'Luna Packaging is a modern e-commerce platform built for a leading packaging distributor in Kenya. The website showcases an extensive catalog of packaging products, manages inventory, processes orders, and provides customers with a seamless online shopping experience. Built with Angular for optimal performance and user experience.',
        techStack: [
            { icon: '<i class="fab fa-angular" style="color: #DD0031;"></i>', name: 'Angular' },
            { icon: '<i class="fab fa-js-square" style="color: #F7DF1E;"></i>', name: 'TypeScript' },
            { icon: '<i class="fas fa-fire" style="color: #FFA000;"></i>', name: 'Firebase' },
            { icon: '<i class="fab fa-node-js" style="color: #339933;"></i>', name: 'Node.js' }
        ],
        features: [
            'Product catalog with advanced search and filters',
            'Shopping cart with real-time price calculation',
            'Customer account management',
            'Order tracking system',
            'Admin dashboard for inventory management',
            'Bulk order quotation system',
            'Responsive design for mobile shopping',
            'SEO optimization for better visibility'
        ],
        integrations: [
            { icon: '<i class="fas fa-credit-card"></i>', name: 'Payment Gateway', desc: 'Secure payments' },
            { icon: '<i class="fas fa-envelope"></i>', name: 'Email Service', desc: 'Order confirmations' },
            { icon: '<i class="fas fa-chart-bar"></i>', name: 'Analytics', desc: 'Google Analytics' },
            { icon: '<i class="fas fa-truck"></i>', name: 'Shipping API', desc: 'Delivery tracking' }
        ],
        liveLink: 'https://lunapackagingltd.co.ke/'
    }
};

// ============ TYPING EFFECT ============
const typingTexts = [
    "Senior Mobile & Frontend Developer",
    "Flutter Expert",
    "Angular Specialist",
    "UI/UX Designer",
    "Problem Solver"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const taglineElement = document.querySelector('.tagline');
    const currentText = typingTexts[textIndex];
    
    if (!isDeleting) {
        taglineElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else {
            typingSpeed = 100;
        }
    } else {
        taglineElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typingSpeed = 500;
        }
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// ============ CUSTOM CURSOR ============
const cursor = document.createElement('div');
const cursorDot = document.createElement('div');
cursor.className = 'cursor';
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursor);
document.body.appendChild(cursorDot);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let dotX = 0;
let dotY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    dotX += (mouseX - dotX) * 0.25;
    dotY += (mouseY - dotY) * 0.25;
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

const interactiveElements = document.querySelectorAll('a, button, .tech-badge, .project-card, .social-link, .info-item');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorDot.classList.add('hover');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorDot.classList.remove('hover');
    });
});

// ============ SLIDESHOW FUNCTIONALITY ============
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

let slideInterval = setInterval(nextSlide, 4000);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
    });
});

const phoneScreen = document.querySelector('.phone-screen');
if (phoneScreen) {
    phoneScreen.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    phoneScreen.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 4000);
    });
}

showSlide(0);

// ============ PROJECT MODAL FUNCTIONALITY ============
const modal = document.getElementById('projectModal');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalClose = modal.querySelector('.modal-close');

function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    // Populate modal content
    modal.querySelector('.modal-icon').innerHTML = project.icon;
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-subtitle').textContent = project.subtitle;
    modal.querySelector('.modal-description').textContent = project.description;
    
    // Tech Stack
    const techStackGrid = modal.querySelector('.tech-stack-grid');
    techStackGrid.innerHTML = project.techStack.map(tech => `
        <div class="tech-item">
            ${tech.icon}
            <span>${tech.name}</span>
        </div>
    `).join('');
    
    // Features
    const featuresList = modal.querySelector('.features-list');
    featuresList.innerHTML = project.features.map(feature => `
        <li>${feature}</li>
    `).join('');
    
    // Integrations
    const integrationsGrid = modal.querySelector('.integrations-grid');
    integrationsGrid.innerHTML = project.integrations.map(integration => `
        <div class="integration-item">
            ${integration.icon}
            <strong>${integration.name}</strong>
            <p>${integration.desc}</p>
        </div>
    `).join('');
    
    // Live Link
  // Live Link
const primaryBtn = document.getElementById('modalPrimaryBtn');
if (project.liveLink === '#') {
    primaryBtn.style.display = 'none';
    primaryBtn.href = '#';
} else {
    primaryBtn.style.display = 'inline-flex';
    primaryBtn.href = project.liveLink;
    primaryBtn.setAttribute('href', project.liveLink);
}
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for modal
modalClose.addEventListener('click', closeProjectModal);
modalOverlay.addEventListener('click', closeProjectModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// Add click event to all project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card[data-project]');
    
    projectCards.forEach(card => {
        const btn = card.querySelector('.project-link-btn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const projectId = card.getAttribute('data-project');
                openProjectModal(projectId);
            });
        }
    });
    
    setTimeout(typeEffect, 1000);
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ NAVBAR SCROLL EFFECT ============
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============ INTERSECTION OBSERVER ============
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// ============ BUTTON INTERACTIONS ============
const primaryButtons = document.querySelectorAll('.primary-button');
const secondaryButtons = document.querySelectorAll('.secondary-button');

primaryButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

secondaryButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============ ACTIVE LINK HIGHLIGHTING ============
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'var(--text-dark)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

console.log('%cMohammed Hussein Portfolio', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cSenior Mobile & Frontend Developer', 'color: #00d9b4; font-size: 14px;');
console.log('%cEmail: mhussein5477@gmail.com | Phone: +254 795 659 576', 'color: #2d3748; font-size: 12px;');

// ============ PARALLAX EFFECT FOR PROFILE CARD ============
function initParallaxEffect() {
    const aboutSection = document.querySelector('.about');
    const profileCard = document.querySelector('.about-visual-section');
    
    if (!aboutSection || !profileCard) return;
    
    window.addEventListener('scroll', () => {
        const aboutTop = aboutSection.offsetTop;
        const aboutHeight = aboutSection.offsetHeight;
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Check if we're in the about section
        if (scrollPosition + windowHeight > aboutTop && scrollPosition < aboutTop + aboutHeight) {
            // Calculate how far we've scrolled into the about section
            const scrollIntoSection = scrollPosition - aboutTop + windowHeight;
            const sectionProgress = scrollIntoSection / (aboutHeight + windowHeight);
            
            // Apply subtle parallax transform (move slower than scroll)
            const parallaxY = (sectionProgress - 0.5) * 30; // Reduced multiplier for subtle effect
            profileCard.style.transform = `translateY(${parallaxY}px)`;
            
            // Add slight rotation for dynamic effect
            const rotation = (sectionProgress - 0.5) * 2; // Very subtle rotation
            profileCard.style.transform = `translateY(${parallaxY}px) rotateY(${rotation}deg)`;
            
            // Add slight scale effect
            const scale = 1 + ((sectionProgress - 0.5) * 0.02); // Very subtle scale
            profileCard.style.transform = `translateY(${parallaxY}px) rotateY(${rotation}deg) scale(${scale})`;
        }
    });
}

// Initialize parallax on page load
document.addEventListener('DOMContentLoaded', () => {
    initParallaxEffect();
});

// Also add smooth parallax to expertise cards
function initExpertiseParallax() {
    const expertiseItems = document.querySelectorAll('.expertise-item');
    
    expertiseItems.forEach((item, index) => {
        window.addEventListener('scroll', () => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight && itemTop > -item.offsetHeight) {
                const scrollProgress = 1 - (itemTop / windowHeight);
                const translateY = scrollProgress * 20 * (index % 2 === 0 ? 1 : -1); // Alternate direction
                item.style.transform = `translateY(${translateY}px)`;
            }
        });
    });
}

// Initialize expertise parallax
document.addEventListener('DOMContentLoaded', () => {
    initExpertiseParallax();
});

console.log('%cParallax effects initialized!', 'color: #63ada1; font-size: 12px;');
// ============ SMOOTH PARALLAX EFFECT FOR ABOUT SECTION ============
let ticking = false;
let lastScrollY = 0;

function initSmoothParallax() {
    const aboutSection = document.querySelector('.about');
    const profileSection = document.querySelector('.about-visual-section');
    const profileCard = document.querySelector('.profile-card');
    
    if (!aboutSection || !profileSection || !profileCard) return;
    
    function updateParallax() {
        const scrollY = window.pageYOffset;
        const aboutRect = aboutSection.getBoundingClientRect();
        const sectionTop = aboutRect.top + scrollY;
        const sectionHeight = aboutRect.height;
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when about section is visible
        if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
            // Calculate scroll progress through the section (0 to 1)
            const scrollProgress = (scrollY - sectionTop + windowHeight) / (sectionHeight + windowHeight);
            
            // Clamp between 0 and 1
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
            
            // Apply subtle parallax movement (slower than scroll)
            const parallaxY = (clampedProgress - 0.5) * 50;
            
            // Apply 3D transforms for depth
            const rotateX = (clampedProgress - 0.5) * 3; // Subtle 3D tilt
            const rotateY = (clampedProgress - 0.5) * 2;
            const scale = 1 + Math.abs(clampedProgress - 0.5) * 0.05;
            
            // Apply transform with smooth transition
            profileCard.style.transform = `
                translateY(${parallaxY}px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(${scale})
            `;
            
            // Add subtle shadow adjustment
            const shadowIntensity = 0.1 + (Math.abs(clampedProgress - 0.5) * 0.1);
            profileCard.style.boxShadow = `
                0 ${20 + parallaxY * 0.5}px ${60 + parallaxY}px rgba(0, 0, 0, ${shadowIntensity}),
                inset 0 1px 0 rgba(255, 255, 255, 0.8)
            `;
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Use throttled scroll event
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Initial call
    updateParallax();
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothParallax);
} else {
    initSmoothParallax();
}

console.log('%c✨ Smooth Parallax Activated', 'color: #63ada1; font-size: 14px; font-weight: bold;');
