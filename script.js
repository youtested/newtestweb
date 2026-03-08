// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // PAGE LOAD ANIMATION
    // ============================================
    document.body.classList.add('page-loaded');

    // ============================================
    // THEME TOGGLE
    // ============================================
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
        document.documentElement.removeAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // ============================================
    // HAMBURGER MENU TOGGLE
    // ============================================
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    var mobileMenu = document.querySelector('.mobile-menu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close menu when clicking a link
    var mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (mobileMenu) mobileMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    var navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        var scrollTopBtn = document.getElementById('scrollTop');
        if (scrollTopBtn) {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ============================================
    // SCROLL TO TOP
    // ============================================
    var scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================================
    // COUNTER ANIMATION (WITH INTERSECTION OBSERVER)
    // ============================================
    var counters = document.querySelectorAll('.stat-number');
    var counterSpeed = 200;
    var countersAnimated = false;

    function animateCounters() {
        counters.forEach(function(counter) {
            var target = parseInt(counter.getAttribute('data-count'));
            var count = 0;
            var increment = target / counterSpeed;

            function updateCounter() {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            }
            updateCounter();
        });
    }

    // Trigger counter animation when visible
    var counterSection = document.querySelector('.hero-stats, .stats-section');
    if (counterSection && counters.length > 0) {
        var counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.5 });
        counterObserver.observe(counterSection);
    }

    // ============================================
    // CONTACT FORM WITH VALIDATION
    // ============================================
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var name = contactForm.querySelector('input[name="name"]');
            var email = contactForm.querySelector('input[name="email"]');
            var message = contactForm.querySelector('textarea[name="message"]');
            var valid = true;

            // Reset errors
            contactForm.querySelectorAll('.error').forEach(function(el) {
                el.classList.remove('error');
            });

            // Validate name
            if (!name || name.value.trim() === '') {
                if (name) name.classList.add('error');
                valid = false;
            }

            // Validate email
            if (email) {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                    email.classList.add('error');
                    valid = false;
                }
            }

            // Validate message
            if (!message || message.value.trim() === '') {
                if (message) message.classList.add('error');
                valid = false;
            }

            if (valid) {
                var toast = document.getElementById('toast');
                if (toast) {
                    toast.classList.add('show');
                    setTimeout(function() {
                        toast.classList.remove('show');
                    }, 3000);
                }
                contactForm.reset();
            }
        });

        // Real-time validation
        contactForm.querySelectorAll('input, textarea').forEach(function(input) {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.classList.add('error');
                } else {
                    this.classList.remove('error');
                }
            });
        });
    }

    // ============================================
    // NEWSLETTER FORM
    // ============================================
    var newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var input = form.querySelector('input[type="email"], input[name="email"]');
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

    // ============================================
    // FAQ ACCORDION
    // ============================================
    var faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            var icon = this.querySelector('i');
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                this.classList.remove('active');
            } else {
                document.querySelectorAll('.faq-answer').forEach(function(a) { a.style.maxHeight = null; });
                document.querySelectorAll('.faq-question').forEach(function(q) { q.classList.remove('active'); });
                
                answer.style.maxHeight = answer.scrollHeight + 'px';
                this.classList.add('active');
            }
        });
    });

    // ============================================
    // TESTIMONIALS SLIDER
    // ============================================
    var testimonialSlider = document.querySelector('.testimonials-slider');
    if (testimonialSlider) {
        var slides = testimonialSlider.querySelectorAll('.testimonial-slide');
        var dots = testimonialSlider.querySelectorAll('.slider-dot');
        var currentSlide = 0;
        var slideInterval;

        function showSlide(index) {
            slides.forEach(function(slide) { slide.classList.remove('active'); });
            dots.forEach(function(dot) { dot.classList.remove('active'); });
            
            slides[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            var next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        // Auto-advance
        slideInterval = setInterval(nextSlide, 5000);

        // Dot navigation
        dots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                clearInterval(slideInterval);
                showSlide(index);
                slideInterval = setInterval(nextSlide, 5000);
            });
        });
    }

    // ============================================
    // COOKIE CONSENT
    // ============================================
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

    // ============================================
    // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
    // ============================================
    var animateElements = document.querySelectorAll('.about-card, .service-card, .project-card, .testimonial-card, .pricing-card, .faq-item, .team-card, .blog-card, .client-logo');
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    animateElements.forEach(function(el) {
        observer.observe(el);
    });

    // ============================================
    // LAZY LOAD IMAGES
    // ============================================
    var lazyImages = document.querySelectorAll('img[data-src]');
    
    var imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(function(img) {
        imageObserver.observe(img);
    });

    // ============================================
    // MOBILE MENU TOGGLE FOR DESKTOP
    // ============================================
    var desktopToggle = document.querySelector('.nav-toggle');
    if (desktopToggle && window.innerWidth > 768) {
        desktopToggle.style.display = 'none';
    }

    window.addEventListener('resize', function() {
        var toggle = document.querySelector('.nav-toggle');
        if (window.innerWidth > 768) {
            if (toggle) toggle.style.display = 'none';
        } else {
            if (toggle) toggle.style.display = 'flex';
        }
    });

});
