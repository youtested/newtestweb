// DOM Elements
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const themeToggle = document.getElementById('themeToggle');

// Use globalThis for Deno compatibility
const global = typeof globalThis !== 'undefined' ? globalThis : window;

// Dark Mode Toggle - Works on all pages
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

function updateThemeIcon(theme) {
    const iconClass = theme === 'dark' ? 'fa-sun' : 'fa-moon';
    if (themeToggle) {
        themeToggle.innerHTML = `<i class="fas ${iconClass}"></i>`;
    }
}
updateThemeIcon(savedTheme);

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    console.log('Theme toggled to:', newTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    console.log('Theme toggle button found and click handler attached');
}

// Hamburger menu toggle - Works on all screen sizes
if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
        console.log('Hamburger clicked');
        navLinks.classList.toggle('active');
        // Toggle between bars and times icon
        const icon = navToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    console.log('Hamburger menu found and click handler attached');
} else {
    console.log('Error: navToggle or navLinks not found');
}

// Navbar scroll effect
global.addEventListener('scroll', () => {
    if (global.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll top button visibility
    if (global.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navToggle.querySelector('i').classList.toggle('fa-bars');
    navToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navToggle.querySelector('i').classList.add('fa-bars');
        navToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            global.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
scrollTopBtn.addEventListener('click', () => {
    global.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Counter animation
const counters = document.querySelectorAll('.stat-number');
const counterSpeed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / counterSpeed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 20);
        } else {
            counter.innerText = target;
        }
    });
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Trigger counter animation for stats
            if (entry.target.classList.contains('hero-stats')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.about-card, .service-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation class styles
const style = document.createElement('style');
style.textContent = `
    .about-card.animate, .service-card.animate, .project-card.animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show toast notification
    showToast();
    
    // Reset form
    contactForm.reset();
    
    // Log form data (in production, you'd send this to a server)
    console.log('Form submitted:', data);
});

function showToast() {
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const email = input.value;
    
    if (email) {
        showToast();
        input.value = '';
    }
});

// Lazy loading for images (if any added later)
if ('IntersectionObserver' in global) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            }
        });
    });
}

// Add parallax effect to hero section
global.addEventListener('mousemove', (e) => {
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        const x = (global.innerWidth - e.pageX * 2) / 100;
        const y = (global.innerHeight - e.pageY * 2) / 100;
        heroVisual.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});

// Service card hover effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-5px)';
    });
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const image = card.querySelector('.project-image i');
        if (image) {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const image = card.querySelector('.project-image i');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

global.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Preloader (optional - creates a smooth loading experience)
global.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

console.log('NewTestWeb - Website initialized successfully!');
