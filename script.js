// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // PAGE LOAD ANIMATION
    // ============================================
    document.body.classList.add('page-loaded');

    // ============================================
    // MULTI-LANGUAGE SUPPORT
    // ============================================
    var translations = {
        en: {
            home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact",
            welcome: "Welcome to", subtitle: "Building Digital Experiences That Matter",
            description: "We create stunning, functional websites that help businesses grow.",
            getStarted: "Get Started", learnMore: "Learn More",
            innovative: "Innovative", innovativeDesc: "We stay ahead of the curve, using the latest technologies and design trends.",
            clientFocused: "Client-Focused", clientFocusedDesc: "Your goals become our mission. We listen, adapt, and deliver excellence.",
            reliable: "Reliable", reliableDesc: "Count on us for robust solutions and dedicated ongoing support.",
            ourServices: "Our Services", whatWeOffer: "What We Offer", comprehensive: "Comprehensive digital solutions tailored to your business needs.",
            getQuote: "Get Quote", viewAll: "View All",
            pricing: "Pricing", choosePlan: "Choose Your Plan", popular: "Most Popular",
            faq: "FAQ", faqTitle: "Frequently Asked Questions", faqDesc: "Got questions? We've got answers!",
            contactUs: "Contact Us", sendMessage: "Send Message", subscribe: "Subscribe",
            readyToStart: "Ready to Start Your Project?", letsCreate: "Let's create something amazing together."
        },
        es: {
            home: "Inicio", about: "Nosotros", services: "Servicios", projects: "Proyectos", contact: "Contacto",
            welcome: "Bienvenido a", subtitle: "Creando Experiencias Digitales Que Importan",
            description: "Creamos sitios web stunningly funcionales que ayudan a las empresas a crecer.",
            getStarted: "Comenzar", learnMore: "Saber Más",
            innovative: "Innovador", innovativeDesc: "Nos mantenemos por delante, usando las últimas tecnologías.",
            clientFocused: "Enfocado al Cliente", clientFocusedDesc: "Tus objetivos se convierten en nuestra misión.",
            reliable: "Confiable", reliableDesc: "Cuenta con nosotros para soluciones sólidas.",
            ourServices: "Nuestros Servicios", whatWeOffer: "Lo Que Ofrecemos", comprehensive: "Soluciones digitales completas adaptadas a tus necesidades.",
            getQuote: "Obtener Cotización", viewAll: "Ver Todo",
            pricing: "Precios", choosePlan: "Elige Tu Plan", popular: "Más Popular",
            faq: "Preguntas", faqTitle: "Preguntas Frecuentes", faqDesc: "¿Tienes preguntas? ¡Tenemos respuestas!",
            contactUs: "Contáctanos", sendMessage: "Enviar Mensaje", subscribe: "Suscribirse",
            readyToStart: "¿Listo para comenzar tu proyecto?", letsCreate: "Creemos algo increíble juntos."
        },
        fr: {
            home: "Accueil", about: "À propos", services: "Services", projects: "Projets", contact: "Contact",
            welcome: "Bienvenue chez", subtitle: "Créer des Expériences Digitales qui Comptent",
            description: "Nous créons des sites web stunningly fonctionnels qui aident les entreprises à se développer.",
            getStarted: "Commencer", learnMore: "En Savoir Plus",
            innovative: "Innovant", innovativeDesc: "Nous restons en avance, en utilisant les dernières technologies.",
            clientFocused: "Client-Focused", clientFocusedDesc: "Vos objectifs deviennent notre mission.",
            reliable: "Fiable", reliableDesc: "Comptez sur nous pour des solutions robustes.",
            ourServices: "Nos Services", whatWeOffer: "Ce Que Nous Offrons", comprehensive: "Solutions numériques complètes adaptées à vos besoins.",
            getQuote: "Devis", viewAll: "Voir Tout",
            pricing: "Tarifs", choosePlan: "Choisissez Votre Plan", popular: "Plus Populaire",
            faq: "FAQ", faqTitle: "Questions Fréquentes", faqDesc: "Des questions? Nous avons des réponses!",
            contactUs: "Contactez-nous", sendMessage: "Envoyer", subscribe: "S'abonner",
            readyToStart: "Prêt à démarrer votre projet?", letsCreate: "Créons quelque chose d'incroyable ensemble."
        },
        de: {
            home: "Startseite", about: "Über uns", services: "Leistungen", projects: "Projekte", contact: "Kontakt",
            welcome: "Willkommen bei", subtitle: "Digitale Erlebnisse Schaffen, Die Wichtig Sind",
            description: "Wir erstellen stunningly funktionale Websites, die Unternehmen zum Wachsen verhelfen.",
            getStarted: "Loslegen", learnMore: "Mehr Erfahren",
            innovative: "Innovativ", innovativeDesc: "Wir bleiben vorne, mit den neuesten Technologien.",
            clientFocused: "Kundenorientiert", clientFocusedDesc: "Ihre Ziele werden unsere Mission.",
            reliable: "Zuverlässig", reliableDesc: "Verlassen Sie sich auf uns für robuste Lösungen.",
            ourServices: "Unsere Leistungen", whatWeOffer: "Was Wir Anbieten", comprehensive: "Umfassende digitale Lösungen für Ihre Bedürfnisse.",
            getQuote: "Angebot", viewAll: "Alle Ansehen",
            pricing: "Preise", choosePlan: "Wählen Sie Ihren Plan", popular: "Beliebteste",
            faq: "FAQ", faqTitle: "Häufig Gestellte Fragen", faqDesc: "Fragen? Wir haben Antworten!",
            contactUs: "Kontaktieren Sie Uns", sendMessage: "Senden", subscribe: "Abonnieren",
            readyToStart: "Bereit, Ihr Projekt zu starten?", letsCreate: "Lassen Sie uns etwas Erstaunliches schaffen."
        },
        zh: {
            home: "首页", about: "关于", services: "服务", projects: "项目", contact: "联系",
            welcome: "欢迎来到", subtitle: "打造重要的数字体验",
            description: "我们创建功能强大的精美网站，帮助企业发展。",
            getStarted: "开始", learnMore: "了解更多",
            innovative: "创新", innovativeDesc: "我们走在前沿，使用最新技术。",
            clientFocused: "以客户为中心", clientFocusedDesc: "您的目标成为我们的使命。",
            reliable: "可靠", reliableDesc: "依靠我们提供强大的解决方案。",
            ourServices: "我们的服务", whatWeOffer: "我们提供", comprehensive: "针对您业务需求的综合数字解决方案。",
            getQuote: "获取报价", viewAll: "查看全部",
            pricing: "价格", choosePlan: "选择您的计划", popular: "最受欢迎",
            faq: "常见问题", faqTitle: "常见问题", faqDesc: "有问题？我们有答案！",
            contactUs: "联系我们", sendMessage: "发送消息", subscribe: "订阅",
            readyToStart: "准备好开始您的项目了吗？", letsCreate: "让我们一起创造一些了不起的东西。"
        },
        ja: {
            home: "ホーム", about: "概要", services: "サービス", projects: "プロジェクト", contact: "お問い合わせ",
            welcome: "ようこそ", subtitle: "重要なデジタル体験を創造",
            description: "私たちはBusinessesが成長するのに役立つ効果的なWebsitesを作成します。",
            getStarted: "始める", learnMore: "詳細",
            innovative: "革新的", innovativeDesc: "最新技術を使用して、先を行きます。",
            clientFocused: "クライアント重視", clientFocusedDesc: "あなたの目標は私たちの使命になります。",
            reliable: "信頼性", reliableDesc: "堅牢なソリューション为您提供。",
            ourServices: "サービス", whatWeOffer: "提供服务", comprehensive: "ビジネスニーズに合わせた包括的なデジタルソリューション。",
            getQuote: "見積もりを取得", viewAll: "すべて表示",
            pricing: "料金", choosePlan: "計画を選択", popular: "最も人気がある",
            faq: "よくある質問", faqTitle: "よくある質問", faqDesc: "質問がありますか？答えがあります！",
            contactUs: "お問い合わせ", sendMessage: "メッセージを送信", subscribe: "購読",
            readyToStart: "プロジェクトの開始の準備はできましたか？", letsCreate: "一緒に素晴らしい何かを作成しましょう。"
        }
    };

    // Language Selector
    var langBtn = document.getElementById('langBtn');
    var langDropdown = document.getElementById('langDropdown');
    var savedLang = localStorage.getItem('language') || 'en';

    function updateLanguage(lang) {
        var t = translations[lang] || translations.en;
        
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });
        
        // Update hero section
        var heroBadge = document.querySelector('.hero-badge');
        if (heroBadge && t.welcome) heroBadge.textContent = t.welcome;
        
        var heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle && t.subtitle) heroSubtitle.textContent = t.subtitle;
        
        var heroDesc = document.querySelector('.hero-description');
        if (heroDesc && t.description) heroDesc.textContent = t.description;
        
        // Update buttons
        document.querySelectorAll('.btn-primary').forEach(function(btn) {
            if (btn.textContent.includes('Get Started') || btn.textContent.includes('Started')) {
                if (t.getStarted) btn.innerHTML = '<i class="fas fa-rocket"></i> ' + t.getStarted;
            }
        });
        
        // Update section headers
        var servicesTitle = document.querySelector('.services .section-tag');
        if (servicesTitle && t.ourServices) servicesTitle.textContent = t.ourServices;
        
        // Update FAQ section
        var faqTag = document.querySelector('.faq-section .section-tag');
        if (faqTag && t.faq) faqTag.textContent = t.faq;
        
        var faqTitle = document.querySelector('.faq-section h2');
        if (faqTitle && t.faqTitle) faqTitle.textContent = t.faqTitle;
        
        // Update CTA section
        var ctaTitle = document.querySelector('.cta-section h2');
        if (ctaTitle && t.readyToStart) ctaTitle.textContent = t.readyToStart;
        
        var ctaDesc = document.querySelector('.cta-section p');
        if (ctaDesc && t.letsCreate) ctaDesc.textContent = t.letsCreate;
        
        // Update language button text
        if (langBtn) {
            var span = langBtn.querySelector('span');
            if (span) span.textContent = lang.toUpperCase();
        }
        
        // Update active state in dropdown
        if (langDropdown) {
            langDropdown.querySelectorAll('a').forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('data-lang') === lang) {
                    link.classList.add('active');
                }
            });
        }
        
        // Save language preference
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
    }

    // Initialize language
    updateLanguage(savedLang);

    // Language button click
    if (langBtn) {
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (langDropdown) langDropdown.classList.toggle('show');
        });
    }

    // Language selection
    if (langDropdown) {
        langDropdown.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var lang = this.getAttribute('data-lang');
                updateLanguage(lang);
                langDropdown.classList.remove('show');
            });
        });
    }

    // Mobile language selector
    var mobileLangSelector = document.querySelector('.mobile-lang-selector');
    if (mobileLangSelector) {
        mobileLangSelector.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var lang = this.getAttribute('data-lang');
                updateLanguage(lang);
                // Update active state
                mobileLangSelector.querySelectorAll('a').forEach(function(l) {
                    l.classList.remove('active');
                });
                this.classList.add('active');
                // Close mobile menu
                var mobileMenu = document.querySelector('.mobile-menu');
                var navToggle = document.querySelector('.nav-toggle');
                if (mobileMenu) mobileMenu.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        if (langDropdown) langDropdown.classList.remove('show');
    });

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
