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
            description: "We create stunning, functional websites that help businesses grow. From design to deployment, we've got you covered.",
            viewWork: "View Our Work", getQuote: "Get Quote",
            innovative: "Innovative", innovativeDesc: "We stay ahead of the curve, using the latest technologies and design trends.",
            clientFocused: "Client-Focused", clientFocusedDesc: "Your goals become our mission. We listen, adapt, and deliver excellence.",
            reliable: "Reliable", reliableDesc: "Count on us for robust solutions and dedicated ongoing support.",
            webDev: "Web Development", webDevDesc: "Custom websites built with modern frameworks and best practices.",
            uiux: "UI/UX Design", uiuxDesc: "Beautiful, intuitive designs that engage users and drive conversions.",
            ecommerce: "E-Commerce", ecommerceDesc: "Full-featured online stores with secure payments and inventory management.",
            cloud: "Cloud Solutions", cloudDesc: "Scalable cloud infrastructure and deployment pipelines.",
            ourServices: "Our Services", whatWeOffer: "What We Offer", comprehensive: "Comprehensive digital solutions tailored to your business needs.",
            getStarted: "Get Started", learnMore: "Learn More", viewAll: "View All",
            pricing: "Pricing", choosePlan: "Choose Your Plan", popular: "Most Popular",
            basicPlan: "Basic Plan", basicPrice: "$499", basicFeatures: "5 Page Website, Mobile Responsive, Contact Form, Basic SEO, 1 Month Support",
            proPlan: "Professional Plan", proPrice: "$999", proFeatures: "10 Page Website, Mobile Responsive, Advanced Forms, Full SEO Package, E-commerce Ready, 3 Months Support",
            enterprisePlan: "Enterprise Plan", enterprisePrice: "Custom", enterpriseFeatures: "Unlimited Pages, Custom Development, E-commerce Store, Advanced Analytics, API Integration, 12 Months Support",
            testimonials: "Testimonials", whatTheySay: "What Our Clients Say",
            faq: "FAQ", faqTitle: "Frequently Asked Questions", faqDesc: "Got questions? We've got answers!",
            howLong: "How long does it take to build a website?", howLongAns: "Most projects take 2-6 weeks depending on complexity. A simple landing page can be done in a few days, while complex e-commerce sites may take 8-12 weeks.",
            provideHosting: "Do you provide domain and hosting?", provideHostingAns: "Yes! We can help you purchase and manage your domain and hosting. We offer affordable hosting packages starting at $10/month.",
            updateSelf: "Can I update the website myself?", updateSelfAns: "Absolutely! We provide a user-friendly content management system (CMS) that allows you to easily update text, images, and content without coding.",
            seoServices: "Do you offer SEO services?", seoServicesAns: "Yes! All our websites come with basic SEO optimization. We also offer advanced SEO packages to help improve your Google rankings.",
            ongoingSupport: "What about ongoing support?", ongoingSupportAns: "We offer monthly support packages starting at $99/month for updates, fixes, and improvements. We're always here to help!",
            paymentMethods: "What payment methods do you accept?", paymentMethodsAns: "We accept bank transfer, credit cards, PayPal, and crypto. We also offer payment plans for larger projects.",
            projectsCompleted: "Projects Completed", happyClients: "Happy Clients", yearsExperience: "Years Experience", awardsWon: "Awards Won",
            ourClients: "Our Clients", trustedBy: "Trusted by Industry Leaders",
            readyToStart: "Ready to Start Your Project?", letsCreate: "Let's create something amazing together.",
            contactUs: "Contact Us", sendMessage: "Send Message", subscribe: "Subscribe",
            yourName: "Your Name", yourEmail: "Your Email", yourMessage: "Your Message",
            quickLinks: "Quick Links", newsletter: "Newsletter", newsletterDesc: "Subscribe for updates and insights.",
            yourEmail: "Your email", allRights: "All rights reserved.",
            teamSection: "Our Team", meetExperts: "Meet the Experts", teamDesc: "Talented people who make it all happen.",
            ceo: "CEO & Founder", leadDesigner: "Lead Designer", leadDeveloper: "Lead Developer", marketingDir: "Marketing Director",
            portfolio: "Portfolio", ourProjects: "Our Projects", projectsShowcase: "A showcase of our recent work and achievements.",
            ourPartnersClients: "Our Partners & Clients", partnersDesc: "We've worked with amazing companies around the world.",
            getInTouch: "Get In Touch", haveProject: "Have a project in mind? Let's discuss how we can help.",
            email: "Email", phone: "Phone", location: "Location",
            aboutUs: "About Us", whoWeAre: "Who We Are", aboutDesc: "We're a team of passionate developers and designers dedicated to creating exceptional digital experiences.",
            testiDesc: "Don't just take our word for it - hear from our satisfied clients.",
            project1: "E-Commerce Platform", project2: "Analytics Dashboard", project3: "Mobile Banking App", project4: "Social Platform", project5: "E-Learning Platform", project6: "Restaurant App",
            reactVue: "React & Vue.js", nodeBackend: "Node.js Backend", restApi: "REST & GraphQL APIs",
            figmaXd: "Figma & Adobe XD", prototyping: "Prototyping", designSystems: "Design Systems",
            shopifyWoo: "Shopify & WooCommerce", paymentGateway: "Payment Gateway", adminDashboard: "Admin Dashboard",
            awsAzure: "AWS & Azure", dockerKube: "Docker & Kubernetes", cicdPipelines: "CI/CD Pipelines"
        },
        es: {
            home: "Inicio", about: "Nosotros", services: "Servicios", projects: "Proyectos", contact: "Contacto",
            welcome: "Bienvenido a", subtitle: "Creando Experiencias Digitales Que Importan",
            description: "Creamos sitios web funcionales y hermosos que ayudan a las empresas a crecer. Desde el diseño hasta el despliegue, estamos contigo.",
            viewWork: "Ver Nuestro Trabajo", getQuote: "Obtener Cotización",
            innovative: "Innovador", innovativeDesc: "Nos mantenemos a la vanguardia usando las últimas tecnologías y tendencias de diseño.",
            clientFocused: "Enfocado al Cliente", clientFocusedDesc: "Tus objetivos se convierten en nuestra misión.",
            reliable: "Confiable", reliableDesc: "Cuenta con nosotros para soluciones sólidas y apoyo continuo.",
            webDev: "Desarrollo Web", webDevDesc: "Sitios web personalizados con marcos modernos y mejores prácticas.",
            uiux: "Diseño UI/UX", uiuxDesc: "Diseños hermosos e intuitivos que involucran a los usuarios.",
            ecommerce: "Comercio Electrónico", ecommerceDesc: "Tiendas en línea con pagos seguros y gestión de inventario.",
            cloud: "Soluciones Cloud", cloudDesc: "Infraestructura escalable y pipelines de despliegue.",
            ourServices: "Nuestros Servicios", whatWeOffer: "Lo Que Ofrecemos", comprehensive: "Soluciones digitales completas adaptadas a tus necesidades.",
            getStarted: "Comenzar", learnMore: "Saber Más", viewAll: "Ver Todo",
            pricing: "Precios", choosePlan: "Elige Tu Plan", popular: "Más Popular",
            basicPlan: "Plan Básico", basicPrice: "$499", basicFeatures: "Sitio de 5 páginas, Responsivo, Formulario de contacto, SEO básico, 1 mes de soporte",
            proPlan: "Plan Profesional", proPrice: "$999", basicFeatures: "Sitio de 10 páginas, Responsivo, Forms avanzados, SEO completo, E-commerce listo, 3 meses de soporte",
            enterprisePlan: "Plan Empresarial", enterprisePrice: "Personalizado", enterpriseFeatures: "Páginas ilimitadas, Desarrollo personalizado, Tienda e-commerce, Analytics avanzado, Integración API, 12 meses de soporte",
            testimonials: "Testimonios", whatTheySay: "Lo Que Dicen Nuestros Clientes",
            faq: "Preguntas", faqTitle: "Preguntas Frecuentes", faqDesc: "¿Tienes preguntas? ¡Tenemos respuestas!",
            howLong: "¿Cuánto tiempo toma construir un sitio web?", howLongAns: "La mayoría de los proyectos take 2-6 semanas dependiendo de la complejidad.",
            provideHosting: "¿Proveen dominio y hosting?", provideHostingAns: "¡Sí! Podemos ayudarte a comprar y administrar tu dominio y hosting.",
            updateSelf: "¿Puedo actualizar el sitio yo mismo?", updateSelfAns: "¡Por supuesto! Brindamos un CMS fácil de usar.",
            seoServices: "¿Ofrecen servicios SEO?", seoServicesAns: "¡Sí! Todos nuestros sitios vienen con optimización SEO básica.",
            ongoingSupport: "¿Qué hay del soporte continuo?", ongoingSupportAns: "Ofrecemos paquetes de soporte desde $99/mes.",
            paymentMethods: "¿Qué métodos de pago aceptan?", paymentMethodsAns: "Aceptamos transferencia, tarjetas, PayPal y crypto.",
            projectsCompleted: "Proyectos Completados", happyClients: "Clientes Felices", yearsExperience: "Años de Experiencia", awardsWon: "Premios Ganados",
            ourClients: "Nuestros Clientes", trustedBy: "Empresas que Confían en Nosotros",
            readyToStart: "¿Listo para comenzar tu proyecto?", letsCreate: "Creemos algo increíble juntos.",
            contactUs: "Contáctanos", sendMessage: "Enviar Mensaje", subscribe: "Suscribirse",
            yourName: "Tu Nombre", yourEmail: "Tu Email", yourMessage: "Tu Mensaje",
            quickLinks: "Enlaces Rápidos", newsletter: "Boletín", newsletterDesc: "Suscríbete para actualizaciones.",
            yourEmail: "Tu email", allRights: "Todos los derechos reservados.",
            teamSection: "Nuestro Equipo", meetExperts: "Conoce a los Expertos", teamDesc: "Personas talentosas que lo hacen posible.",
            ceo: "CEO y Fundador", leadDesigner: "Diseñador Principal", leadDeveloper: "Desarrollador Principal", marketingDir: "Director de Marketing",
            portfolio: "Portafolio", ourProjects: "Nuestros Proyectos", projectsShowcase: "Una muestra de nuestro trabajo reciente y logros.",
            ourPartnersClients: "Nuestros Socios y Clientes", partnersDesc: "Hemos trabajado con empresas increíbles alrededor del mundo.",
            getInTouch: "Contáctanos", haveProject: "¿Tienes un proyecto en mente? Hablemos de cómo podemos ayudar.",
            email: "Correo", phone: "Teléfono", location: "Ubicación",
            aboutUs: "Sobre Nosotros", whoWeAre: "Quiénes Somos", aboutDesc: "Somos un equipo de desarrolladores y diseñadores apasionados dedicados a crear experiencias digitales excepcionales.",
            testiDesc: "No solo tomes nuestra palabra - escucha a nuestros clientes satisfechos.",
            project1: "Plataforma de E-Commerce", project2: "Panel de Análisis", project3: "App Banca Móvil", project4: "Plataforma Social", project5: "Plataforma E-Learning", project6: "App Restaurante",
            reactVue: "React & Vue.js", nodeBackend: "Backend Node.js", restApi: "APIs REST & GraphQL",
            figmaXd: "Figma & Adobe XD", prototyping: "Prototipado", designSystems: "Sistemas de Diseño",
            shopifyWoo: "Shopify & WooCommerce", paymentGateway: "Pasarela de Pago", adminDashboard: "Panel de Admin",
            awsAzure: "AWS & Azure", dockerKube: "Docker & Kubernetes", cicdPipelines: "Pipelines CI/CD"
        },
        fr: {
            home: "Accueil", about: "À propos", services: "Services", projects: "Projets", contact: "Contact",
            welcome: "Bienvenue chez", subtitle: "Créer des Expériences Digitales qui Comptent",
            description: "Nous créons des sites web magnifiques et fonctionnels qui aident les entreprises à se développer.",
            viewWork: "Voir Notre Travail", getQuote: "Devis",
            innovative: "Innovant", innovativeDesc: "Nous restons en avance avec les dernières technologies.",
            clientFocused: "Orienté Client", clientFocusedDesc: "Vos objectifs deviennent notre mission.",
            reliable: "Fiable", reliableDesc: "Comptez sur nous pour des solutions robustes.",
            webDev: "Développement Web", webDevDesc: "Sites web personnalisés avec des frameworks modernes.",
            uiux: "Design UI/UX", uiuxDesc: "Design beaux et intuitifs qui engagent les utilisateurs.",
            ecommerce: "E-Commerce", ecommerceDesc: "Boutiques en ligne avec paiements sécurisés.",
            cloud: "Solutions Cloud", cloudDesc: "Infrastructure cloud évolutive.",
            ourServices: "Nos Services", whatWeOffer: "Ce Que Nous Offrons", comprehensive: "Solutions numériques complètes adaptées à vos besoins.",
            getStarted: "Commencer", learnMore: "En Savoir Plus", viewAll: "Voir Tout",
            pricing: "Tarifs", choosePlan: "Choisissez Votre Plan", popular: "Plus Populaire",
            basicPlan: "Plan Basique", basicPrice: "499€", basicFeatures: "Site 5 pages, Responsive, Formulaire contact, SEO basique, 1 mois support",
            proPlan: "Plan Professionnel", proPrice: "999€", proFeatures: "Site 10 pages, Responsive, Formulaires avancés, SEO complet, E-commerce prêt, 3 mois support",
            enterprisePlan: "Plan Entreprise", enterprisePrice: "Sur Mesure", enterpriseFeatures: "Pages illimitées, Développement sur mesure, Boutique e-commerce, Analytics avancé, 12 mois support",
            testimonials: "Témoignages", whatTheySay: "Ce Que Disent Nos Clients",
            faq: "FAQ", faqTitle: "Questions Fréquentes", faqDesc: "Des questions? Nous avons des réponses!",
            howLong: "Combien de temps pour construire un site?", howLongAns: "La plupart des projets prennent 2-6 semaines.",
            provideHosting: "Proposez-vous hébergement et domaine?", provideHostingAns: "Oui! Nous pouvons vous aider à acheter et gérer votre domaine.",
            updateSelf: "Puis-je mettre à jour le site moi-même?", updateSelfAns: "Absolument! Nous fournissons un CMS facile à utiliser.",
            seoServices: "Proposez-vous des services SEO?", seoServicesAns: "Oui! Tous nos sites viennent avec optimisation SEO basique.",
            ongoingSupport: "Et le support continu?", ongoingSupportAns: "Nous proposons des forfaits de support à partir de 99€/mois.",
            paymentMethods: "Quels moyens de paiement?", paymentMethodsAns: "Nous acceptons virement, cartes, PayPal et crypto.",
            projectsCompleted: "Projets Terminés", happyClients: "Clients Satisfaits", yearsExperience: "Années d'Expérience", awardsWon: "Prix Gagnés",
            ourClients: "Nos Clients", trustedBy: "Entreprises qui Nous Font Confiance",
            readyToStart: "Prêt à démarrer votre projet?", letsCreate: "Créons quelque chose d'incroyable ensemble.",
            contactUs: "Contactez-nous", sendMessage: "Envoyer", subscribe: "S'abonner",
            yourName: "Votre Nom", yourEmail: "Votre Email", yourMessage: "Votre Message",
            quickLinks: "Liens Rapides", newsletter: "Newsletter", newsletterDesc: "Abonnez-vous pour les mises à jour.",
            yourEmail: "Votre email", allRights: "Tous droits réservés.",
            teamSection: "Notre Équipe", meetExperts: "Rencontrez les Experts", teamDesc: "Des personnes talentueuses qui font tout happen.",
            ceo: "PDG et Fondateur", leadDesigner: "Designer Principal", leadDeveloper: "Développeur Principal", marketingDir: "Directeur Marketing",
            portfolio: "Portfolio", ourProjects: "Nos Projets", projectsShowcase: "Une vitrine de notre travail récent et de nos réalisations.",
            ourPartnersClients: "Nos Partenaires et Clients", partnersDesc: "Nous avons travaillé avec des entreprises incroyables du monde entier.",
            getInTouch: "Contactez-nous", haveProject: "Vous avez un projet en tête? Discutons de comment nous pouvons aider.",
            email: "Email", phone: "Téléphone", location: "Adresse",
            aboutUs: "À Propos", whoWeAre: "Qui Nous Sommes", aboutDesc: "Nous sommes une équipe de développeurs et designers passionnés dédiés à la création d'expériences numériques exceptionnelles.",
            testiDesc: "Ne prenez pas seulement notre parole - écoutez nos clients satisfaits.",
            project1: "Plateforme E-Commerce", project2: "Tableau de Bord Analytique", project3: "App Banque Mobile", project4: "Plateforme Sociale", project5: "Plateforme E-Learning", project6: "App Restaurant",
            reactVue: "React & Vue.js", nodeBackend: "Backend Node.js", restApi: "APIs REST & GraphQL",
            figmaXd: "Figma & Adobe XD", prototyping: "Prototypage", designSystems: "Systèmes de Design",
            shopifyWoo: "Shopify & WooCommerce", paymentGateway: "Passerelle de Paiement", adminDashboard: "Dashboard Admin",
            awsAzure: "AWS & Azure", dockerKube: "Docker & Kubernetes", cicdPipelines: "Pipelines CI/CD"
        },
        de: {
            home: "Startseite", about: "Über uns", services: "Leistungen", projects: "Projekte", contact: "Kontakt",
            welcome: "Willkommen bei", subtitle: "Digitale Erlebnisse Schaffen, Die Wichtig Sind",
            description: "Wir erstellen schöne, funktionale Websites, die Unternehmen beim Wachstum helfen.",
            viewWork: "Unsere Arbeit Sehen", getQuote: "Angebot",
            innovative: "Innovativ", innovativeDesc: "Wir bleiben vorne mit neuesten Technologien.",
            clientFocused: "Kundenorientiert", clientFocusedDesc: "Ihre Ziele werden unsere Mission.",
            reliable: "Zuverlässig", reliableDesc: "Verlassen Sie sich auf uns für robuste Lösungen.",
            webDev: "Webentwicklung", webDevDesc: "Maßgeschneiderte Websites mit modernen Frameworks.",
            uiux: "UI/UX Design", uiuxDesc: "Schöne, intuitive Designs die Nutzer begeistern.",
            ecommerce: "E-Commerce", ecommerceDesc: "Vollständige Online-Shops mit sicheren Zahlungen.",
            cloud: "Cloud Lösungen", cloudDesc: "Skalierbare Cloud-Infrastruktur.",
            ourServices: "Unsere Leistungen", whatWeOffer: "Was Wir Anbieten", comprehensive: "Umfassende digitale Lösungen für Ihre Bedürfnisse.",
            getStarted: "Loslegen", learnMore: "Mehr Erfahren", viewAll: "Alle Ansehen",
            pricing: "Preise", choosePlan: "Wählen Sie Ihren Plan", popular: "Beliebteste",
            basicPlan: "Basis Plan", basicPrice: "499€", basicFeatures: "5 Seiten Website, Responsive, Kontaktformular, Basis SEO, 1 Monat Support",
            proPlan: "Professional Plan", proPrice: "999€", proFeatures: "10 Seiten, Responsive, Erweiterte Formulare, Full SEO, E-commerce Ready, 3 Monate Support",
            enterprisePlan: "Enterprise Plan", enterprisePrice: "Individuell", enterpriseFeatures: "Unlimited Seiten, Maßgeschneidert, E-commerce Store, Analytics, 12 Monate Support",
            testimonials: "Testimonials", whatTheySay: "Was Unsere Kunden Sagen",
            faq: "FAQ", faqTitle: "Häufig Gestellte Fragen", faqDesc: "Fragen? Wir haben Antworten!",
            howLong: "Wie lange dauert es, eine Website zu erstellen?", howLongAns: "Die meisten Projekte dauern 2-6 Wochen.",
            provideHosting: "Bieten Sie Domain und Hosting an?", provideHostingAns: "Ja! Wir können Ihnen helfen, Domain und Hosting zu verwalten.",
            updateSelf: "Kann ich die Website selbst aktualisieren?", updateSelfAns: "Auf jeden Fall! Wir bieten ein benutzerfreundliches CMS.",
            seoServices: "Bieten Sie SEO-Dienstleistungen an?", seoServicesAns: "Ja! Alle unsere Websites kommen mit grundlegender SEO-Optimierung.",
            ongoingSupport: "Was ist mit kontinuierlichem Support?", ongoingSupportAns: "Wir bieten Support-Pakete ab 99€/Monat.",
            paymentMethods: "Welche Zahlungsmethoden akzeptieren Sie?", paymentMethodsAns: "Wir akzeptieren Überweisung, Karten, PayPal und Krypto.",
            projectsCompleted: "Abgeschlossene Projekte", happyClients: "Zufriedene Kunden", yearsExperience: "Jahre Erfahrung", awardsWon: "Auszeichnungen",
            ourClients: "Unsere Kunden", trustedBy: "Vertraut von Branchenführern",
            readyToStart: "Bereit, Ihr Projekt zu starten?", letsCreate: "Lassen Sie uns etwas Erstaunliches schaffen.",
            contactUs: "Kontaktieren Sie Uns", sendMessage: "Senden", subscribe: "Abonnieren",
            yourName: "Ihr Name", yourEmail: "Ihre E-Mail", yourMessage: "Ihre Nachricht",
            quickLinks: "Schnelllinks", newsletter: "Newsletter", newsletterDesc: "Abonnieren Sie für Updates.",
            yourEmail: "Ihre E-Mail", allRights: "Alle Rechte vorbehalten.",
            teamSection: "Unser Team", meetExperts: "Treffen Sie die Experten", teamDesc: "Talentierte Menschen, die alles möglich machen.",
            ceo: "CEO & Gründer", leadDesigner: "Lead Designer", leadDeveloper: "Lead Entwickler", marketingDir: "Marketing Direktor",
            portfolio: "Portfolio", ourProjects: "Unsere Projekte", projectsShowcase: "Eine Präsentation unserer jüngsten Arbeit und Erfolge.",
            ourPartnersClients: "Unsere Partner & Kunden", partnersDesc: "Wir haben mit erstaunlichen Unternehmen auf der ganzen Welt zusammengearbeitet.",
            getInTouch: "Kontaktieren Sie Uns", haveProject: "Haben Sie ein Projekt im Sinn? Lassen Sie uns besprechen, wie wir helfen können.",
            email: "E-Mail", phone: "Telefon", location: "Standort",
            aboutUs: "Über Uns", whoWeAre: "Wer Wir Sind", aboutDesc: "Wir sind ein Team leidenschaftlicher Entwickler und Designer, die außergewöhnliche digitale Erlebnisse schaffen.",
            testiDesc: "Verlassen Sie sich nicht nur auf unser Wort - hören Sie von unseren zufriedenen Kunden.",
            project1: "E-Commerce Plattform", project2: "Analyse-Dashboard", project3: "Mobile Banking App", project4: "Soziale Plattform", project5: "E-Learning Plattform", project6: "Restaurant App",
            reactVue: "React & Vue.js", nodeBackend: "Node.js Backend", restApi: "REST & GraphQL APIs",
: "Figma            figmaXd & Adobe XD", prototyping: "Prototyping", designSystems: "Design Systeme",
            shopifyWoo: "Shopify & WooCommerce", paymentGateway: "Zahlungs-Gateway", adminDashboard: "Admin Dashboard",
            awsAzure: "AWS & Azure", dockerKube: "Docker & Kubernetes", cicdPipelines: "CI/CD Pipelines"
        },
        zh: {
            home: "首页", about: "关于", services: "服务", projects: "项目", contact: "联系",
            welcome: "欢迎来到", subtitle: "打造重要的数字体验",
            description: "我们创建精美实用的网站，帮助企业发展。从设计到部署，我们为您提供全方位的服务。",
            viewWork: "查看我们的作品", getQuote: "获取报价",
            innovative: "创新", innovativeDesc: "我们走在前沿，使用最新的技术和设计趋势。",
            clientFocused: "以客户为中心", clientFocusedDesc: "您的目标成为我们的使命。",
            reliable: "可靠", reliableDesc: "依靠我们为您提供强大的解决方案。",
            webDev: "网页开发", webDevDesc: "使用现代框架和最佳实践定制网站。",
            uiux: "UI/UX设计", uiuxDesc: "精美直观的设计，吸引用户并推动转化。",
            ecommerce: "电子商务", ecommerceDesc: "功能齐全的在线商店，安全支付和库存管理。",
            cloud: "云解决方案", cloudDesc: "可扩展的云基础设施和部署管道。",
            ourServices: "我们的服务", whatWeOffer: "我们提供", comprehensive: "针对您业务需求的综合数字解决方案。",
            getStarted: "开始", learnMore: "了解更多", viewAll: "查看全部",
            pricing: "价格", choosePlan: "选择您的计划", popular: "最受欢迎",
            basicPlan: "基础计划", basicPrice: "¥3500", basicFeatures: "5页网站, 响应式, 联系表单, 基础SEO, 1个月支持",
            proPlan: "专业计划", proPrice: "¥7000", proFeatures: "10页网站, 响应式, 高级表单, 完整SEO, 电商就绪, 3个月支持",
            enterprisePlan: "企业计划", enterprisePrice: "定制", enterpriseFeatures: "无限页面, 定制开发, 电商商城, 高级分析, API集成, 12个月支持",
            testimonials: "客户评价", whatTheySay: "客户怎么说",
            faq: "常见问题", faqTitle: "常见问题", faqDesc: "有问题？我们有答案！",
            howLong: "建一个网站需要多长时间？", howLongAns: "大多数项目需要2-6周，复杂电商网站可能需要8-12周。",
            provideHosting: "提供域名和托管吗？", provideHostingAns: "是的！我们可以帮助您购买和管理域名和托管。",
            updateSelf: "我可以自己更新网站吗？", updateSelfAns: "当然可以！我们提供用户友好的内容管理系统。",
            seoServices: "提供SEO服务吗？", seoServicesAns: "是的！所有网站都包含基础SEO优化。",
            ongoingSupport: "有持续支持吗？", ongoingSupportAns: "我们提供每月99元起的支持套餐。",
            paymentMethods: "接受什么付款方式？", paymentMethodsAns: "我们接受银行转账、信用卡、PayPal和加密货币。",
            projectsCompleted: "完成项目", happyClients: "满意客户", yearsExperience: "年经验", awardsWon: "获得奖项",
            ourClients: "我们的客户", trustedBy: "行业领先企业信赖",
            readyToStart: "准备好开始您的项目了吗？", letsCreate: "让我们一起创造一些了不起的东西！",
            contactUs: "联系我们", sendMessage: "发送消息", subscribe: "订阅",
            yourName: "您的姓名", yourEmail: "您的邮箱", yourMessage: "您的留言",
            quickLinks: "快速链接", newsletter: "简报", newsletterDesc: "订阅获取最新动态。",
            yourEmail: "您的邮箱", allRights: "版权所有。",
            teamSection: "我们的团队", meetExperts: "认识专家", teamDesc: "才华横溢的人让一切成为可能。",
            ceo: "首席执行官兼创始人", leadDesigner: "首席设计师", leadDeveloper: "首席开发者", marketingDir: "市场总监",
            portfolio: "作品集", ourProjects: "我们的项目", projectsShowcase: "展示我们最近的工作和成就。",
            ourPartnersClients: "我们的合作伙伴和客户", partnersDesc: "我们与全球优秀公司合作过。",
            getInTouch: "联系我们", haveProject: "有项目想法？让我们讨论如何帮助您。",
            email: "邮箱", phone: "电话", location: "地址",
            aboutUs: "关于我们", whoWeAre: "我们是谁", aboutDesc: "我们是一个充满热情的开发者和平面设计师团队，致力于打造卓越的数字体验。",
            testiDesc: "不要只听我们说 - 听听我们满意的客户怎么说。",
            project1: "电商平台", project2: "分析仪表板", project3: "移动银行应用", project4: "社交平台", project5: "在线学习平台", project6: "餐厅应用",
            reactVue: "React和Vue.js", nodeBackend: "Node.js后端", restApi: "REST和GraphQL API",
            figmaXd: "Figma和Adobe XD", prototyping: "原型设计", designSystems: "设计系统",
            shopifyWoo: "Shopify和WooCommerce", paymentGateway: "支付网关", adminDashboard: "管理后台",
            awsAzure: "AWS和Azure", dockerKube: "Docker和Kubernetes", cicdPipelines: "持续集成/持续部署"
        },
        ja: {
            home: "ホーム", about: "概要", services: "サービス", projects: "プロジェクト", contact: "お問い合わせ",
            welcome: "ようこそ", subtitle: "重要なデジタル体験を創造",
            description: "私たちは、美しく実用的なWeb사이트を作成して、ビジネスの成長をお手伝いします。",
            viewWork: "作品を見る", getQuote: "見積もりを依頼",
            innovative: "革新的", innovativeDesc: "最新技術を使用して、先を行きます。",
            clientFocused: "クライアント重視", clientFocusedDesc: "あなたの目標は私たちの使命になります。",
            reliable: "信頼性", reliableDesc: "堅牢なソリューション为您为您提供。",
            webDev: "Web開発", webDevDesc: "最新のフレームワークとベストプラクティスを使用したカスタムウェブサイト。",
            uiux: "UI/UXデザイン", uiuxDesc: "ユーザーを惹きつけ、コンバージョンを促進する美しく直感的なデザイン。",
            ecommerce: "Eコマース", ecommerceDesc: "安全な決済と在庫管理を備えた完全なオンラインストア。",
            cloud: "クラウドソリューション", cloudDesc: "スケーラブルなクラウドインフラストラクチャ。",
            ourServices: "サービス", whatWeOffer: "提供服务", comprehensive: "ビジネスニーズに合わせた包括的なデジタルソリューション。",
            getStarted: "始める", learnMore: "詳細", viewAll: "すべて表示",
            pricing: "料金", choosePlan: "計画を選択", popular: "最も人気がある",
            basicPlan: "ベーシックプラン", basicPrice: "¥70,000", basicFeatures: "5ページ、Webサイト、レスポンシブ、CONTACTフォーム、basic SEO、1ヶ月サポート",
            proPlan: "プロフェッショナルプラン", basicPrice: "¥140,000", basicFeatures: "10ページ、レスポンシブ、高度フォーム、完全SEO、Eコマース対応、3ヶ月サポート",
            enterprisePlan: "エンタープライズプラン", enterprisePrice: "カスタム", enterpriseFeatures: "無制限ページ、カスタム開発、Eコマースストア、高度分析、API統合、12ヶ月サポート",
            testimonials: "お客様の声", whatTheySay: "クライアント怎么说",
            faq: "よくある質問", faqTitle: "よくある質問", faqDesc: "質問がありますか？答えがあります！",
            howLong: "Webサイトにどのくらいかかりますか？", howLongAns: "ほとんどのプロジェクトは2〜6週間必要です。",
            provideHosting: "ドメインとホスティングを提供していますか？", provideHostingAns: "はい！ドメインとホスティングの管理をお手伝いできます。",
            updateSelf: "自分でWebサイトを更新できますか？", updateSelfAns: "もちろん！使いやすいCMSを提供しています。",
            seoServices: "SEOサービスは提供していますか？", seoServicesAns: "はい！すべてのWebサイトに基本的なSEO最適化が含まれています。",
            ongoingSupport: "継続的なサポートはどうですか？", ongoingSupportAns: "月額99ドルからのサポートパッケージを提供しています。",
            paymentMethods: "どのような支払い方法を受け入れますか？", paymentMethodsAns: "銀行振込、カード、PayPal、暗号通貨を受け入れています。",
            projectsCompleted: "完了したプロジェクト", happyClients: "幸せなクライアント", yearsExperience: "年の経験", awardsWon: "受賞",
            ourClients: "クライアント", trustedBy: "業界リーダーから信頼",
            readyToStart: "プロジェクトの開始の準備はできましたか？", letsCreate: "一緒に素晴らしい何かを作成しましょう！",
            contactUs: "お問い合わせ", sendMessage: "メッセージを送信", subscribe: "購読",
            yourName: "お名前", yourEmail: "メールアドレス", yourMessage: "メッセージ",
            quickLinks: "クイックリンク", newsletter: "ニュースレター", newsletterDesc: "更新を購読してください。",
            yourEmail: "メールアドレス", allRights: "全著作権所有",
            teamSection: "チーム", meetExperts: "専門家を紹介します", teamDesc: "、すべてを可能にする才能のある人々。",
            ceo: "CEO & 創業者", leadDesigner: "リードデザイナー", leadDeveloper: "リード開発者", marketingDir: "マーケティングディレクター",
            portfolio: "ポートフォリオ", ourProjects: "私たちのプロジェクト", projectsShowcase: "最近の成果物や実績のご紹介。",
            ourPartnersClients: "パートナーとクライアント", partnersDesc: "世界中の素晴らしい企業々と合作しました。",
            getInTouch: "お問い合わせ", haveProject: "プロジェクト的想法がありますか？どのようにお手伝いできるか一緒に議論しましょう。",
            email: "メール", phone: "電話", location: "所在地",
            aboutUs: "私達について", whoWeAre: "私たちは誰ですか", aboutDesc: "私たちは、卓越したデジタル体験を生み出すことに情熱的な開発者とデザイナーのチームです。",
            testiDesc: "私たちの言葉を信じるだけでなく、満足したクライアントの声を聴いてください。",
            project1: "Eコマースプラットフォーム", project2: "分析ダッシュボード", project3: "モバイルバンキングアプリ", project4: "ソーシャルプラットフォーム", project5: "Eラー二ングプラットフォーム", project6: "レストラアプリ",
            reactVue: "React & Vue.js", nodeBackend: "Node.js バックエンド", restApi: "REST & GraphQL API",
            figmaXd: "Figma & Adobe XD", prototyping: "プロトタイピング", designSystems: "デザインシステム",
            shopifyWoo: "Shopify & WooCommerce", paymentGateway: "決済ゲートウェイ", adminDashboard: "管理画面",
            awsAzure: "AWS & Azure", dockerKube: "Docker & Kubernetes", cicdPipelines: "CI/CD パイプライン"
        }
    };

    // Language Selector
    var langBtn = document.getElementById('langBtn');
    var langDropdown = document.getElementById('langDropdown');
    var savedLang = localStorage.getItem('language') || 'en';

    function updateLanguage(lang) {
        var t = translations[lang] || translations.en;
        
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
        
        // ===== NAVBAR =====
        // Nav links - update href and text
        var navLinks = document.querySelectorAll('.nav-links a');
        if (navLinks[0]) navLinks[0].textContent = t.home;
        if (navLinks[1]) navLinks[1].textContent = t.about;
        if (navLinks[2]) navLinks[2].textContent = t.services;
        if (navLinks[3]) navLinks[3].textContent = t.projects;
        if (navLinks[4]) navLinks[4].textContent = t.contact;
        
        // Mobile menu links
        var mobileLinks = document.querySelectorAll('.mobile-menu > a');
        if (mobileLinks[0]) mobileLinks[0].textContent = t.home;
        if (mobileLinks[1]) mobileLinks[1].textContent = t.about;
        if (mobileLinks[2]) mobileLinks[2].textContent = t.services;
        if (mobileLinks[3]) mobileLinks[3].textContent = t.projects;
        if (mobileLinks[4]) mobileLinks[4].textContent = t.contact;
        
        // ===== HERO SECTION =====
        var heroBadge = document.querySelector('.hero-badge');
        if (heroBadge) heroBadge.textContent = t.welcome;
        
        var heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = t.subtitle;
        
        var heroDesc = document.querySelector('.hero-description');
        if (heroDesc) heroDesc.textContent = t.description;
        
        // Hero buttons
        var heroBtns = document.querySelectorAll('.hero-buttons .btn');
        if (heroBtns[0] && t.getStarted) heroBtns[0].innerHTML = '<i class="fas fa-rocket"></i> ' + t.getStarted;
        if (heroBtns[1] && t.viewWork) heroBtns[1].innerHTML = '<i class="fas fa-eye"></i> ' + t.viewWork;
        
        // ===== ABOUT SECTION =====
        var aboutCards = document.querySelectorAll('.about-card h3');
        if (aboutCards[0]) aboutCards[0].textContent = t.innovative;
        if (aboutCards[1]) aboutCards[1].textContent = t.clientFocused;
        if (aboutCards[2]) aboutCards[2].textContent = t.reliable;
        
        var aboutDescs = document.querySelectorAll('.about-card p');
        if (aboutDescs[0]) aboutDescs[0].textContent = t.innovativeDesc;
        if (aboutDescs[1]) aboutDescs[1].textContent = t.clientFocusedDesc;
        if (aboutDescs[2]) aboutDescs[2].textContent = t.reliableDesc;
        
        // ===== SERVICES SECTION =====
        var servicesTag = document.querySelector('.services .section-tag');
        if (servicesTag) servicesTag.textContent = t.ourServices;
        
        var servicesTitle = document.querySelector('.services .section-header h2');
        if (servicesTitle) servicesTitle.textContent = t.whatWeOffer;
        
        var servicesDesc = document.querySelector('.services .section-header p');
        if (servicesDesc) servicesDesc.textContent = t.comprehensive;
        
        // Service cards
        var serviceCards = document.querySelectorAll('.service-card h3');
        if (serviceCards[0]) serviceCards[0].textContent = t.webDev;
        if (serviceCards[1]) serviceCards[1].textContent = t.uiux;
        if (serviceCards[2]) serviceCards[2].textContent = t.ecommerce;
        if (serviceCards[3]) serviceCards[3].textContent = t.cloud;
        
        // ===== PRICING SECTION =====
        var pricingTag = document.querySelector('.pricing .section-tag');
        if (pricingTag) pricingTag.textContent = t.pricing;
        
        var pricingTitle = document.querySelector('.pricing .section-header h2');
        if (pricingTitle) pricingTitle.textContent = t.choosePlan;
        
        var pricingCards = document.querySelectorAll('.pricing-card h3');
        if (pricingCards[0]) pricingCards[0].textContent = t.basicPlan;
        if (pricingCards[1]) pricingCards[1].textContent = t.proPlan;
        if (pricingCards[2]) pricingCards[2].textContent = t.enterprisePlan;
        
        // ===== TESTIMONIALS =====
        var testiTag = document.querySelector('.testimonials .section-tag');
        if (testiTag) testiTag.textContent = t.testimonials;
        
        var testiTitle = document.querySelector('.testimonials .section-header h2');
        if (testiTitle) testiTitle.textContent = t.whatTheySay;
        
        // ===== FAQ SECTION =====
        var faqTag = document.querySelector('.faq-section .section-tag');
        if (faqTag) faqTag.textContent = t.faq;
        
        var faqTitle = document.querySelector('.faq-section h2');
        if (faqTitle) faqTitle.textContent = t.faqTitle;
        
        var faqDesc = document.querySelector('.faq-section p');
        if (faqDesc) faqDesc.textContent = t.faqDesc;
        
        // FAQ questions
        var faqQs = document.querySelectorAll('.faq-question span');
        if (faqQs[0]) faqQs[0].textContent = t.howLong;
        if (faqQs[1]) faqQs[1].textContent = t.provideHosting;
        if (faqQs[2]) faqQs[2].textContent = t.updateSelf;
        if (faqQs[3]) faqQs[3].textContent = t.seoServices;
        if (faqQs[4]) faqQs[4].textContent = t.ongoingSupport;
        if (faqQs[5]) faqQs[5].textContent = t.paymentMethods;
        
        // FAQ answers
        var faqAs = document.querySelectorAll('.faq-answer p');
        if (faqAs[0]) faqAs[0].textContent = t.howLongAns;
        if (faqAs[1]) faqAs[1].textContent = t.provideHostingAns;
        if (faqAs[2]) faqAs[2].textContent = t.updateSelfAns;
        if (faqAs[3]) faqAs[3].textContent = t.seoServicesAns;
        if (faqAs[4]) faqAs[4].textContent = t.ongoingSupportAns;
        if (faqAs[5]) faqAs[5].textContent = t.paymentMethodsAns;
        
        // ===== STATS SECTION =====
        var stats = document.querySelectorAll('.stat-item .stat-label');
        if (stats[0]) stats[0].textContent = t.projectsCompleted;
        if (stats[1]) stats[1].textContent = t.happyClients;
        if (stats[2]) stats[2].textContent = t.yearsExperience;
        if (stats[3]) stats[3].textContent = t.awardsWon;
        
        // ===== CLIENTS SECTION =====
        var clientsTag = document.querySelector('.clients-section .section-tag');
        if (clientsTag) clientsTag.textContent = t.ourClients;
        
        var clientsTitle = document.querySelector('.clients-section h2');
        if (clientsTitle) clientsTitle.textContent = t.trustedBy;
        
        // Partners section (the main partners section in hero area)
        var partnersSection = document.querySelector('#partners, .partners');
        if (partnersSection) {
            var partnersTag = partnersSection.querySelector('.section-tag');
            if (partnersTag && t.trustedBy) partnersTag.textContent = t.trustedBy;
            
            var partnersTitle = partnersSection.querySelector('h2');
            if (partnersTitle && t.ourPartnersClients) partnersTitle.textContent = t.ourPartnersClients;
            
            var partnersDesc = partnersSection.querySelector('p');
            if (partnersDesc && t.partnersDesc) partnersDesc.textContent = t.partnersDesc;
        }
        
        // Projects section
        var projectsSection = document.querySelector('#projects, .projects');
        if (projectsSection) {
            var projectsTag = projectsSection.querySelector('.section-tag');
            if (projectsTag && t.portfolio) projectsTag.textContent = t.portfolio;
            
            var projectsTitle = projectsSection.querySelector('h2');
            if (projectsTitle && t.ourProjects) projectsTitle.textContent = t.ourProjects;
            
            var projectsDesc = projectsSection.querySelector('p');
            if (projectsDesc && t.projectsShowcase) projectsDesc.textContent = t.projectsShowcase;
        }
        
        // ===== CTA SECTION =====
        var ctaTitle = document.querySelector('.cta-section h2');
        if (ctaTitle) ctaTitle.textContent = t.readyToStart;
        
        var ctaDesc = document.querySelector('.cta-section p');
        if (ctaDesc) ctaDesc.textContent = t.letsCreate;
        
        var ctaBtn = document.querySelector('.cta-section .btn');
        if (ctaBtn && t.getStarted) ctaBtn.textContent = t.getStarted;
        
        // ===== FOOTER =====
        var footerBrand = document.querySelector('.footer-brand p');
        if (footerBrand) footerBrand.textContent = "Building digital experiences that matter.";
        
        var quickLinks = document.querySelector('.footer-links h4');
        if (quickLinks) quickLinks.textContent = t.quickLinks || "Quick Links";
        
        var footerLinks = document.querySelectorAll('.footer-links a');
        if (footerLinks[0]) footerLinks[0].textContent = t.home;
        if (footerLinks[1]) footerLinks[1].textContent = t.about;
        if (footerLinks[2]) footerLinks[2].textContent = t.services;
        if (footerLinks[3]) footerLinks[3].textContent = t.projects;
        if (footerLinks[4]) footerLinks[4].textContent = t.contact;
        
        var newsletterTitle = document.querySelector('.footer-newsletter h4');
        if (newsletterTitle) newsletterTitle.textContent = t.newsletter || "Newsletter";
        
        var newsletterDesc = document.querySelector('.footer-newsletter p');
        if (newsletterDesc) newsletterDesc.textContent = t.newsletterDesc || "Subscribe for updates.";
        
        var newsletterInput = document.querySelector('.newsletter-form input');
        if (newsletterInput) newsletterInput.placeholder = t.yourEmail || "Your email";
        
        var newsletterBtn = document.querySelector('.newsletter-form button');
        if (newsletterBtn) newsletterBtn.setAttribute('aria-label', t.subscribe || "Subscribe");
        
        // ===== LANGUAGE BUTTON =====
        if (langBtn) {
            var span = langBtn.querySelector('span');
            if (span) span.textContent = lang.toUpperCase();
        }
        
        // Update active state in dropdowns
        var allLangDropdowns = document.querySelectorAll('.lang-dropdown, .mobile-lang-selector');
        allLangDropdowns.forEach(function(dropdown) {
            dropdown.querySelectorAll('a').forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('data-lang') === lang) {
                    link.classList.add('active');
                }
            });
        });
        
        // ===== ADDITIONAL TRANSLATIONS =====
        
        // Service descriptions
        var serviceDescs = document.querySelectorAll('.service-card > p');
        if (serviceDescs[0] && t.webDevDesc) serviceDescs[0].textContent = t.webDevDesc;
        if (serviceDescs[1] && t.uiuxDesc) serviceDescs[1].textContent = t.uiuxDesc;
        if (serviceDescs[2] && t.ecommerceDesc) serviceDescs[2].textContent = t.ecommerceDesc;
        if (serviceDescs[3] && t.cloudDesc) serviceDescs[3].textContent = t.cloudDesc;
        
        // Pricing prices
        var pricingPrices = document.querySelectorAll('.pricing-price');
        if (pricingPrices[0] && t.basicPrice) pricingPrices[0].textContent = t.basicPrice;
        if (pricingPrices[1] && t.proPrice) pricingPrices[1].textContent = t.proPrice;
        if (pricingPrices[2] && t.enterprisePrice) pricingPrices[2].textContent = t.enterprisePrice;
        
        // Pricing features
        var pricingLists = document.querySelectorAll('.pricing-features');
        if (pricingLists[0] && t.basicFeatures) {
            pricingLists[0].innerHTML = t.basicFeatures.split(',').map(function(f) { return '<li><i class="fas fa-check"></i> ' + f.trim() + '</li>'; }).join('');
        }
        
        // Logo
        var logo = document.querySelector('.logo');
        if (logo && t.buildDigi) {
            logo.innerHTML = '<i class="fas fa-globe"></i> ' + t.buildDigi;
        }
        
        // Testimonials
        var testiTexts = document.querySelectorAll('.testimonial-content p');
        if (testiTexts[0] && t.testimonial1) testiTexts[0].textContent = '"' + t.testimonial1 + '"';
        if (testiTexts[1] && t.testimonial2) testiTexts[1].textContent = '"' + t.testimonial2 + '"';
        if (testiTexts[2] && t.testimonial3) testiTexts[2].textContent = '"' + t.testimonial3 + '"';
        
        var testiAuthors = document.querySelectorAll('.testimonial-author h4');
        var testiCompanies = document.querySelectorAll('.testimonial-author p');
        if (testiAuthors[0] && t.author1) testiAuthors[0].textContent = t.author1;
        if (testiCompanies[0] && t.company1) testiCompanies[0].textContent = t.company1;
        if (testiAuthors[1] && t.author2) testiAuthors[1].textContent = t.author2;
        if (testiCompanies[1] && t.company2) testiCompanies[1].textContent = t.company2;
        if (testiAuthors[2] && t.author3) testiAuthors[2].textContent = t.author3;
        if (testiCompanies[2] && t.company3) testiCompanies[2].textContent = t.company3;
        
        // Footer brand text
        var footerBrandDesc = document.querySelector('.footer-brand p');
        if (footerBrandDesc) footerBrandDesc.textContent = "Building digital experiences that matter.";
        
        // Copyright
        var copyright = document.querySelector('.footer-bottom p');
        if (copyright && t.allRights) {
            copyright.textContent = '© 2026 NewTestWeb. ' + t.allRights;
        }
        
        // Team section
        var teamTag = document.querySelector('.team-section .section-tag');
        if (teamTag && t.teamSection) teamTag.textContent = t.teamSection;
        
        var teamTitle = document.querySelector('.team-section h2');
        if (teamTitle && t.meetExperts) teamTitle.textContent = t.meetExperts;
        
        var teamDesc = document.querySelector('.team-section .section-header p');
        if (teamDesc && t.teamDesc) teamDesc.textContent = t.teamDesc;
        
        var teamRoles = document.querySelectorAll('.team-role');
        if (teamRoles[0] && t.ceo) teamRoles[0].textContent = t.ceo;
        if (teamRoles[1] && t.leadDesigner) teamRoles[1].textContent = t.leadDesigner;
        if (teamRoles[2] && t.leadDeveloper) teamRoles[2].textContent = t.leadDeveloper;
        if (teamRoles[3] && t.marketingDir) teamRoles[3].textContent = t.marketingDir;
        
        // About page
        var aboutTag = document.querySelector('.page-header .section-tag');
        if (aboutTag && t.about) aboutTag.textContent = t.about;
        
        var aboutTitle = document.querySelector('.page-header h1');
        if (aboutTitle && t.about) aboutTitle.textContent = t.about;
        
        // Services page
        var servicesTag = document.querySelector('.page-header .section-tag');
        if (servicesTag && t.services) servicesTag.textContent = t.services;
        
        var servicesTitle = document.querySelector('.page-header h1');
        if (servicesTitle && t.services) servicesTitle.textContent = t.services;
        
        // Projects page
        var projectsTag = document.querySelector('.page-header .section-tag');
        if (projectsTag && t.projects) projectsTag.textContent = t.projects;
        
        var projectsTitle = document.querySelector('.page-header h1');
        if (projectsTitle && t.projects) projectsTitle.textContent = t.projects;
        
        // Contact page
        var contactTag = document.querySelector('.page-header .section-tag');
        if (contactTag && t.contact) contactTag.textContent = t.contact;
        
        var contactTitle = document.querySelector('.page-header h1');
        if (contactTitle && t.contact) contactTitle.textContent = t.contact;
        
        // Contact form
        var formName = document.querySelector('input[name="name"]');
        if (formName && t.yourName) formName.placeholder = t.yourName;
        
        var formEmail = document.querySelector('input[name="email"]');
        if (formEmail && t.yourEmail) formEmail.placeholder = t.yourEmail;
        
        var formMessage = document.querySelector('textarea[name="message"]');
        if (formMessage && t.yourMessage) formMessage.placeholder = t.yourMessage;
        
        var submitBtn = document.querySelector('.contact-form button[type="submit"]');
        if (submitBtn && t.sendMessage) submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + t.sendMessage;
        
        // Save language preference
        localStorage.setItem('language', lang);
    }

    // Initialize language on page load - run immediately
    (function() {
        updateLanguage(savedLang);
        // Run again after a short delay to catch any late-loading content
        setTimeout(function() {
            updateLanguage(savedLang);
        }, 500);
        setTimeout(function() {
            updateLanguage(savedLang);
        }, 1000);
    })();

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
// ADDITIONAL TRANSLATION KEYS ADDED
