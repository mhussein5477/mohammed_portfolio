// ============ CUSTOM CURSOR ============
// Create cursor elements
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

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor follow animation
function animateCursor() {
    // Cursor ring follows with delay
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    // Dot follows faster
    dotX += (mouseX - dotX) * 0.25;
    dotY += (mouseY - dotY) * 0.25;
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Add hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .tech-badge, .project-card, .hobby-card, .social-link, .info-item, .skill-card');

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

// Function to show a specific slide
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

// Function to go to next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance slides every 4 seconds
let slideInterval = setInterval(nextSlide, 4000);

// Click indicators to jump to specific slide
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        
        // Reset auto-advance timer
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
    });
});

// Pause slideshow on hover
const phoneScreen = document.querySelector('.phone-screen');
if (phoneScreen) {
    phoneScreen.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    phoneScreen.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 4000);
    });
}

// Initialize first slide
showSlide(0);

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

// ============ NAVBAR SCROLL EFFECT (iOS Glassmorphism) ============
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove scrolled class for glassmorphism effect
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============ INTERSECTION OBSERVER FOR ANIMATIONS ============
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

// Observe feature cards
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

// ============ SCROLL-TO-TOP FUNCTIONALITY ============
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add scroll listener for navbar animations
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Add/remove active class based on scroll position
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href');
        if (sectionId.startsWith('#')) {
            const section = document.querySelector(sectionId);
            if (section) {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.style.color = 'var(--text-dark)');
                    link.style.color = 'var(--primary-color)';
                }
            }
        }
    });
});

// ============ CONTACT FORM HANDLER ============
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! I will contact you soon.');
        contactForm.reset();
    });
}

// ============ LAZY LOADING IMAGES ============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============ PARALLAX EFFECT ============
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax');
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ============ FORM VALIDATION ============
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============ PAGE LOAD ANIMATIONS ============
document.addEventListener('DOMContentLoaded', () => {
    // Add animation delay to elements
    const animatedElements = document.querySelectorAll('.feature-card, .skill-card, .hobby-card, .info-item');
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });

    console.log('Portfolio website loaded successfully!');
});

// ============ KEYBOARD NAVIGATION ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        window.scrollBy(0, 100);
    }
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

// ============ MOBILE MENU TOGGLE (if needed) ============
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ============ DARK MODE TOGGLE (Optional) ============
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ============ UTILITY FUNCTION - Debounce ============
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ============ PERFORMANCE OPTIMIZATION ============
// Throttle scroll events
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Perform scroll-dependent operations here
            ticking = false;
        });
        ticking = true;
    }
});

// ============ PRINT STYLES ============
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
});

// ============ ACCESSIBILITY - FOCUS MANAGEMENT ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ============ CONSOLE MESSAGE ============
console.log('%cMohammed Hussein Portfolio', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cSenior Mobile & Frontend Developer', 'color: #00d9b4; font-size: 14px;');
console.log('%cEmail: mhussein5477@gmail.com | Phone: +254 795 659 576', 'color: #2d3748; font-size: 12px;');