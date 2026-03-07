// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Toggle
    var themeToggle = document.getElementById('themeToggle');
    var savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    function updateThemeIcon(theme) {
        var iconClass = theme === 'dark' ? 'fa-sun' : 'fa-moon';
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas ' + iconClass + '"></i>';
        }
    }

    function toggleTheme() {
        var currentTheme = document.documentElement.getAttribute('data-theme');
        var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Force remove old theme and add new one
        document.documentElement.removeAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', newTheme);
        
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Force body background refresh
        document.body.style.backgroundColor = newTheme === 'dark' ? '#0a0a0a' : '#f8fafc';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Hamburger Menu Toggle
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            var icon = navToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking a link
    var navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navLinks) navLinks.classList.remove('active');
            if (navToggle) {
                var icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Navbar scroll effect
    var navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll top button
        var scrollTopBtn = document.getElementById('scrollTop');
        if (scrollTopBtn) {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    // Scroll to top
    var scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Counter animation
    var counters = document.querySelectorAll('.stat-number');
    var counterSpeed = 200;

    function animateCounters() {
        counters.forEach(function(counter) {
            var target = parseInt(counter.getAttribute('data-count'));
            var count = parseInt(counter.innerText);
            var increment = target / counterSpeed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 20);
            } else {
                counter.innerText = target;
            }
        });
    }

    // Contact form
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var toast = document.getElementById('toast');
            if (toast) {
                toast.classList.add('show');
                setTimeout(function() {
                    toast.classList.remove('show');
                }, 3000);
            }
            contactForm.reset();
        });
    }

    // Newsletter
    var newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var input = form.querySelector('input');
            if (input && input.value) {
                var toast = document.getElementById('toast');
                if (toast) {
                    toast.classList.add('show');
                    setTimeout(function() {
                        toast.classList.remove('show');
                    }, 3000);
                }
                input.value = '';
            }
        });
    });

});

    // FAQ Accordion
    var faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            var icon = this.querySelector('i');
            
            // Toggle current
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                this.classList.remove('active');
            } else {
                // Close others
                document.querySelectorAll('.faq-answer').forEach(function(a) { a.style.maxHeight = null; });
                document.querySelectorAll('.faq-question').forEach(function(q) { q.classList.remove('active'); });
                
                answer.style.maxHeight = answer.scrollHeight + 'px';
                this.classList.add('active');
            }
        });
    });

    // Cookie Consent
    var cookieConsent = document.querySelector('.cookie-consent');
    var cookieAccepted = localStorage.getItem('cookieAccepted');
    
    if (!cookieAccepted && cookieConsent) {
        setTimeout(function() {
            cookieConsent.classList.add('show');
        }, 2000);
    }
    
    var cookieAcceptBtn = document.querySelector('.cookie-btn.accept');
    var cookieDeclineBtn = document.querySelector('.cookie-btn.decline');
    
    if (cookieAcceptBtn) {
        cookieAcceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieAccepted', 'true');
            cookieConsent.classList.remove('show');
        });
    }
    
    if (cookieDeclineBtn) {
        cookieDeclineBtn.addEventListener('click', function() {
            cookieConsent.classList.remove('show');
        });
    }

    // Scroll Animation
    var animateElements = document.querySelectorAll('.about-card, .service-card, .project-card, .testimonial-card, .pricing-card, .faq-item');
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(function(el) {
        observer.observe(el);
    });

});
