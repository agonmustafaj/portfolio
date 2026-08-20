/* ============================================
   Language: English / Shqip
   Standard Albanian, written for a Kosovo reader.
   Names, job titles, and tool names stay as they are.
   ============================================ */

(function (global) {
  'use strict';

  var STORAGE_KEY = 'lang';

  var STRINGS = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.services': 'Services',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.certifications': 'Certifications',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      'nav.education': 'Education',
      'nav.aria': 'Main navigation',
      'nav.mobileAria': 'Mobile navigation',
      'nav.homeAria': 'Agon Mustafaj Home',
      'nav.openMenu': 'Open menu',
      'nav.toggleTheme': 'Toggle theme',
      'nav.langAria': 'Language',
      'ui.downloadCv': 'Download CV',
      'ui.contact': 'Contact',
      'ui.contactMe': 'Contact Me',
      'ui.aboutMe': 'About Me',
      'ui.liveDemo': 'Live Demo',
      'ui.liveWebsite': 'Live Website',
      'ui.caseStudy': 'Case Study',
      'ui.viewProjects': 'View projects',
      'ui.viewAllProjects': 'View All Projects →',
      'ui.allProjects': 'All Projects',
      'ui.allProjectsArrow': 'All Projects →',
      'ui.nextProject': 'Next Project →',
      'ui.prevProject': '← Previous Project',
      'ui.viewSkills': 'View Skills',
      'ui.viewCertifications': 'View Certifications',
      'ui.viewCertificate': 'View Certificate',
      'ui.viewVerification': 'View Verification',
      'ui.openPdf': 'Open PDF',
      'ui.relatedProject': 'Related project:',
      'ui.hoverSkill': 'Hover over a skill to see details.',
      'ui.localProject': 'Local Project',
      'ui.dataAnalysis': 'Data Analysis',
      'ui.project': 'PROJECT',
      'ui.home': 'Home',
      'ui.projects': 'Projects',
      'ui.blog': 'Blog',
      'ui.backHome': 'Back to Home',
      'ui.backBlog': '← Back to Blog',
      'ui.visitLive': 'Visit Live Website',
      'footer.navigation': 'Navigation',
      'footer.more': 'More',
      'footer.tagline': 'Building, learning and experimenting with technology.',
      'footer.resume': 'Resume',
      'profile.headline': 'Computer Science Student | Junior SEO | Web Development | Data Analytics | AI & Technology',
      'profile.identity': 'COMPUTER SCIENCE × SEO × WEB × DATA',
      'profile.location': 'Pristina, Kosovo',
      'profile.university': 'University of Prishtina',
      'wallet.role': 'Computer Science Student',
      'wallet.website': 'Website',
      'wallet.share': 'Share Profile',
      'wallet.aria': 'Digital identity card for Agon Mustafaj',
      'wallet.qrSite': 'QR code for website',
      'wallet.qrLinkedin': 'QR code for LinkedIn',
      'share.title': 'Share Profile',
      'share.copy': 'Copy Website URL',
      'share.linkedin': 'Share on LinkedIn',
      'share.facebook': 'Share on Facebook',
      'share.email': 'Share via Email',
      'share.mailSubject': 'Agon Mustafaj Portfolio',
      'share.close': 'Close',
      'share.copied': 'Link copied!',
      'share.aria': 'Share profile',
      'terminal.focus': 'Computer Science\nWeb Development\nSEO\nData\nAI',
      'terminal.status': 'Building...\nLearning...\nExperimenting...',
      'cert.open': 'Open',
      'cert.view': 'View Certificate',
      'cert.count': '9 Learning Credentials',
      'cv.comingSoon': 'CV coming soon',
      'cv.loading': 'Loading CV...',
      'home.statement': 'I build digital experiences that look good, work intelligently, and get discovered.',
      'projects.banese-per-ty': 'A rental platform for property discovery, search, and tenant-landlord workflows.',
      'projects.hoxha-handwerk': 'A professional business website with conversion-oriented layout and responsive UX.',
      'skill.HTML': 'Semantic markup for accessible, SEO-friendly web pages.',
      'skill.CSS': 'Modern styling, layouts, and responsive design systems.',
      'skill.JavaScript': 'Interactive experiences and client-side functionality.',
      'skill.Web Development': 'Building complete websites from structure to deployment.',
      'skill.Responsive Design': 'Interfaces that work across devices and screen sizes.',
      'skill.Technical SEO': 'Crawlability, site structure, and technical optimization.',
      'skill.On-page SEO': 'Content optimization, metadata, and on-page best practices.',
      'skill.Keyword Research': 'Identifying search intent and relevant keyword opportunities.',
      'skill.Website Structure': 'Information architecture and internal linking strategy.',
      'skill.SEO Auditing': 'Evaluating websites for search performance improvements.',
      'skill.Python': 'Data processing, analysis, and machine learning workflows.',
      'skill.Pandas': 'Data manipulation and analysis with Python.',
      'skill.NumPy': 'Numerical computing for data science projects.',
      'skill.Power BI': 'Business intelligence dashboards and data visualization.',
      'skill.Excel': 'Spreadsheet analysis and data organization.',
      'skill.DAX': 'Data analysis expressions for Power BI models.',
      'skill.Data Modeling': 'Structuring data for analysis and reporting.',
      'skill.Artificial Intelligence': 'Exploring AI concepts and practical applications.',
      'skill.Programming': 'Problem-solving through code across multiple languages.',
      'skill.Modern Web Technologies': 'Staying current with evolving web standards and tools.',
      'skill.UI/UX': 'User-centered design thinking and interface craft.',
      'skill.Web Design': 'Visual design for web experiences.',
      'skill.Interaction Design': 'Meaningful micro-interactions and user flows.',
      'skillcat.Development': 'Development',
      'skillcat.SEO': 'SEO',
      'skillcat.Data Analytics': 'Data Analytics',
      'skillcat.AI & Technology': 'AI & Technology',
      'skillcat.Design': 'Design',
      'meta.home.title': 'Agon Mustafaj | Computer Science, Web & SEO',
      'meta.home.desc': 'I\'m Agon Mustafaj, Computer Science student at the University of Prishtina and Junior SEO, building with web, data, AI and technology.',
      'meta.about.title': 'About Me | Agon Mustafaj',
      'meta.about.desc': 'I\'m Agon Mustafaj, Computer Science student at the University of Prishtina, Junior SEO at thenovalab, building with web, data and technology.',
      'meta.projects.title': 'Projects | Agon Mustafaj',
      'meta.projects.desc': 'Projects I\'ve built - web development, data analysis, and digital experiences.',
      'meta.services.title': 'Website Creation for Businesses | Agon Mustafaj',
      'meta.services.desc': 'I design and build professional websites for businesses - clear presentation, mobile-ready, and easy for customers to contact you.',
      'meta.skills.title': 'Skills & Technology Stack | Agon Mustafaj',
      'meta.skills.desc': 'The technology stack I work with - web development, SEO, data analytics, AI, and design.',
      'meta.education.title': 'Education | Agon Mustafaj',
      'meta.education.desc': 'My education - Computer Science at the University of Prishtina.',
      'meta.experience.title': 'Experience | Agon Mustafaj',
      'meta.experience.desc': 'My professional experience - Junior SEO at thenovalab.',
      'meta.certifications.title': 'Certifications | Agon Mustafaj',
      'meta.certifications.desc': 'Certifications and credentials from my continuous learning journey.',
      'meta.blog.title': 'Blog | Agon Mustafaj',
      'meta.blog.desc': 'I write about artificial intelligence, technology, and modern web development.',
      'meta.contact.title': 'Contact | Agon Mustafaj',
      'meta.contact.desc': 'Get in touch - let\'s build something together.',
      'meta.cv.title': 'Resume | Agon Mustafaj',
      'meta.cv.desc': 'View and download my CV.',
      'meta.404.title': 'Page Not Found | Agon Mustafaj',
      'meta.404.desc': 'The page you are looking for could not be found.'
    },
    sq: {
      'nav.home': 'Kreu',
      'nav.about': 'Për mua',
      'nav.projects': 'Projekte',
      'nav.services': 'Shërbime',
      'nav.skills': 'Aftësi',
      'nav.experience': 'Përvojë',
      'nav.certifications': 'Certifikata',
      'nav.blog': 'Blog',
      'nav.contact': 'Kontakt',
      'nav.education': 'Arsimi',
      'nav.aria': 'Navigimi kryesor',
      'nav.mobileAria': 'Navigimi në telefon',
      'nav.homeAria': 'Agon Mustafaj, faqja kryesore',
      'nav.openMenu': 'Hap menunë',
      'nav.toggleTheme': 'Ndrysho pamjen',
      'nav.langAria': 'Gjuha',
      'ui.downloadCv': 'Shkarko CV',
      'ui.contact': 'Kontakt',
      'ui.contactMe': 'Më kontakto',
      'ui.aboutMe': 'Për mua',
      'ui.liveDemo': 'Shiko live',
      'ui.liveWebsite': 'Webfaqja live',
      'ui.caseStudy': 'Studimi i rastit',
      'ui.viewProjects': 'Shiko projektet',
      'ui.viewAllProjects': 'Të gjitha projektet →',
      'ui.allProjects': 'Të gjitha projektet',
      'ui.allProjectsArrow': 'Të gjitha projektet →',
      'ui.nextProject': 'Projekti tjetër →',
      'ui.prevProject': '← Projekti i mëparshëm',
      'ui.viewSkills': 'Shiko aftësitë',
      'ui.viewCertifications': 'Shiko certifikatat',
      'ui.viewCertificate': 'Shiko certifikatën',
      'ui.viewVerification': 'Shiko verifikimin',
      'ui.openPdf': 'Hap PDF',
      'ui.relatedProject': 'Projekt i lidhur:',
      'ui.hoverSkill': 'Kalo mbi një aftësi për detaje.',
      'ui.localProject': 'Projekt lokal',
      'ui.dataAnalysis': 'Analizë të dhënash',
      'ui.project': 'PROJEKTI',
      'ui.home': 'Kreu',
      'ui.projects': 'Projekte',
      'ui.blog': 'Blog',
      'ui.backHome': 'Kthehu te kreu',
      'ui.backBlog': '← Kthehu te blogu',
      'ui.visitLive': 'Hap webfaqen live',
      'footer.navigation': 'Navigimi',
      'footer.more': 'Më shumë',
      'footer.tagline': 'Ndërtoj, mësoj dhe eksperimentoj me teknologji.',
      'footer.resume': 'CV',
      'profile.headline': 'Student i Shkencave Kompjuterike | Junior SEO | Zhvillim web | Analizë të dhënash | AI dhe teknologji',
      'profile.identity': 'SHKENCA KOMPJUTERIKE × SEO × WEB × TË DHËNA',
      'profile.location': 'Prishtinë, Kosovë',
      'profile.university': 'Universiteti i Prishtinës',
      'wallet.role': 'Student i Shkencave Kompjuterike',
      'wallet.website': 'Webfaqja',
      'wallet.share': 'Ndaj profilin',
      'wallet.aria': 'Karta e identitetit dixhital për Agon Mustafaj',
      'wallet.qrSite': 'Kodi QR i webfaqes',
      'wallet.qrLinkedin': 'Kodi QR i LinkedIn',
      'share.title': 'Ndaj profilin',
      'share.copy': 'Kopjo linkun e webfaqes',
      'share.linkedin': 'Ndaj në LinkedIn',
      'share.facebook': 'Ndaj në Facebook',
      'share.email': 'Ndaj me email',
      'share.mailSubject': 'Portofoli i Agon Mustafaj',
      'share.close': 'Mbyll',
      'share.copied': 'Linku u kopjua!',
      'share.aria': 'Ndaj profilin',
      'terminal.focus': 'Shkenca kompjuterike\nZhvillim web\nSEO\nTë dhëna\nAI',
      'terminal.status': 'Ndërtoj...\nMësoj...\nEksperimentoj...',
      'cert.open': 'Hap',
      'cert.view': 'Shiko certifikatën',
      'cert.count': '9 kredenciale mësimi',
      'cv.comingSoon': 'CV së shpejti',
      'cv.loading': 'Duke ngarkuar CV-në...',
      'home.statement': 'Ndërtoj përvoja dixhitale që duken mirë, funksionojnë si duhet dhe janë të qarta për t\'u gjetur.',
      'projects.banese-per-ty': 'Platformë qiraje për kërkimin e banesave dhe rrjedhën e punës mes qiramarrësit dhe qiradhënësit.',
      'projects.hoxha-handwerk': 'Webfaqe profesionale për biznes, e ndërtuar për t\'i kthyer vizitorët në klientë, edhe në telefon.',
      'skill.HTML': 'Markup semantik për faqe të qarta, të arritshme dhe të mira për SEO.',
      'skill.CSS': 'Stil, layout dhe dizajn responsive.',
      'skill.JavaScript': 'Përvoja interaktive dhe funksione në anën e klientit.',
      'skill.Web Development': 'Webfaqe të plota, nga struktura deri te publikimi.',
      'skill.Responsive Design': 'Ndërfaqe që punojnë në telefona, tableta dhe desktop.',
      'skill.Technical SEO': 'Crawlability, strukturë e sajtit dhe optimizim teknik.',
      'skill.On-page SEO': 'Optimizim i përmbajtjes, metadhenave dhe praktikave on-page.',
      'skill.Keyword Research': 'Kërkimi i fjalëve kyçe sipas qëllimit të kërkimit.',
      'skill.Website Structure': 'Arkitekturë informacioni dhe lidhje të brendshme.',
      'skill.SEO Auditing': 'Vlerësim i sajtit për përmirësime në kërkim.',
      'skill.Python': 'Përpunim të dhënash, analizë dhe rrjedha machine learning.',
      'skill.Pandas': 'Manipulim dhe analizë të dhënash me Python.',
      'skill.NumPy': 'Llogaritje numerike për projekte data science.',
      'skill.Power BI': 'Dashboard-e dhe vizualizim të dhënash.',
      'skill.Excel': 'Analizë në spreadsheet dhe organizim të dhënash.',
      'skill.DAX': 'Shprehje analize për modelet në Power BI.',
      'skill.Data Modeling': 'Strukturim i të dhënave për analizë dhe raporte.',
      'skill.Artificial Intelligence': 'Koncepte AI dhe zbatim praktik.',
      'skill.Programming': 'Zgjidhje problemesh me kod, në disa gjuhë.',
      'skill.Modern Web Technologies': 'Standarde dhe mjete të reja të webit.',
      'skill.UI/UX': 'Mendim i përqendruar te përdoruesi dhe ndërfaqe e kujdesshme.',
      'skill.Web Design': 'Dizajn vizual për përvoja webi.',
      'skill.Interaction Design': 'Mikro-interaksione dhe rrjedha përdorimi.',
      'skillcat.Development': 'Zhvillim',
      'skillcat.SEO': 'SEO',
      'skillcat.Data Analytics': 'Analizë të dhënash',
      'skillcat.AI & Technology': 'AI dhe teknologji',
      'skillcat.Design': 'Dizajn',
      'meta.home.title': 'Agon Mustafaj | Shkenca kompjuterike, web dhe SEO',
      'meta.home.desc': 'Jam Agon Mustafaj, student i Shkencave Kompjuterike në Universitetin e Prishtinës dhe Junior SEO. Punoj me web, të dhëna, AI dhe teknologji.',
      'meta.about.title': 'Për mua | Agon Mustafaj',
      'meta.about.desc': 'Jam Agon Mustafaj, student i Shkencave Kompjuterike në Universitetin e Prishtinës, Junior SEO te thenovalab.',
      'meta.projects.title': 'Projekte | Agon Mustafaj',
      'meta.projects.desc': 'Projekte që kam ndërtuar: zhvillim web, analizë të dhënash dhe përvoja dixhitale.',
      'meta.services.title': 'Krijim webfaqesh për biznese | Agon Mustafaj',
      'meta.services.desc': 'Dizajnoj dhe ndërtoj webfaqe profesionale për biznese: prezantim i qartë, e përshtatur për telefon, e lehtë për t\'u kontaktuar.',
      'meta.skills.title': 'Aftësi dhe teknologji | Agon Mustafaj',
      'meta.skills.desc': 'Teknologjitë me të cilat punoj: zhvillim web, SEO, analizë të dhënash, AI dhe dizajn.',
      'meta.education.title': 'Arsimi | Agon Mustafaj',
      'meta.education.desc': 'Arsimi im: Shkenca kompjuterike në Universitetin e Prishtinës.',
      'meta.experience.title': 'Përvoja | Agon Mustafaj',
      'meta.experience.desc': 'Përvoja profesionale: Junior SEO te thenovalab.',
      'meta.certifications.title': 'Certifikata | Agon Mustafaj',
      'meta.certifications.desc': 'Certifikata dhe kredenciale nga mësimi i vazhdueshëm.',
      'meta.blog.title': 'Blog | Agon Mustafaj',
      'meta.blog.desc': 'Shkruaj për inteligjencën artificiale, teknologjinë dhe zhvillimin modern të webit.',
      'meta.contact.title': 'Kontakt | Agon Mustafaj',
      'meta.contact.desc': 'Më shkruaj. Mund të ndërtojmë diçka së bashku.',
      'meta.cv.title': 'CV | Agon Mustafaj',
      'meta.cv.desc': 'Shiko dhe shkarko CV-në time.',
      'meta.404.title': 'Faqja nuk u gjet | Agon Mustafaj',
      'meta.404.desc': 'Faqja që kërkon nuk ekziston ose është zhvendosur.',

      'home.labelWhat': 'Çfarë bëj',
      'home.whatTitle': 'Punoj në disa fusha',
      'home.whatLead': 'Nga kodi te përmbajtja te të dhënat: aty ku takohen teknologjia dhe kërkimi.',
      'home.build': 'Ndërtoj',
      'home.buildP': 'Webfaqe dhe përvoja dixhitale.',
      'home.optimize': 'Optimizoj',
      'home.optimizeP': 'SEO teknik dhe strukturë të sajtit.',
      'home.analyze': 'Analizoj',
      'home.analyzeP': 'Të dhëna me Python, Power BI dhe Excel.',
      'home.explore': 'Eksploroj',
      'home.exploreP': 'AI dhe teknologji të reja.',
      'home.design': 'Dizajnoj',
      'home.designP': 'Përvoja moderne, të përshtatura për çdo ekran.',
      'home.labelServices': 'Shërbime',
      'home.servicesTitle': 'Webfaqe për biznese',
      'home.servicesLead': 'Ndërtoj webfaqe profesionale për kompani që duan të duken serioze dhe t\'ia bëjnë të lehtë klientit të kontaktojë.',
      'home.svcSite': 'Webfaqe biznesi',
      'home.svcSiteP': 'Kompania, shërbimet dhe kontakti, të paraqitura qartë.',
      'home.svcMobile': 'Në telefon dhe e shpejtë',
      'home.svcMobileP': 'Punon mirë në telefon, me layout të pastër.',
      'home.svcInquiries': 'Më shumë kërkesa',
      'home.svcInquiriesP': 'Forma, WhatsApp dhe thirrje të qarta për veprim.',
      'home.seeServices': 'Shiko shërbimet e webfaqes',
      'home.labelProjects': 'Projekte të zgjedhura',
      'home.projectsTitle': 'Çfarë kam ndërtuar',
      'home.projectsLead': 'Projekte reale, jo vetëm ide.',
      'home.labelLearn': 'Të mësuarit',
      'home.learnTitle': 'Mësim i vazhdueshëm',
      'home.learnLead': 'Mësimi i vazhdueshëm është pjesë e rëndësishme e zhvillimit tim si student i Shkencave Kompjuterike.',
      'home.viewCerts': 'Të gjitha certifikatat →',
      'home.labelConnect': 'Lidhu',
      'home.connectTitle': 'Më gjej online',
      'home.labelBlog': 'Blog',
      'home.blogTitle': 'AI dhe teknologji',
      'home.blogLead': 'Shënime për inteligjencën artificiale sot dhe se si teknologjia po ndryshon mënyrën si ndërtojmë.',
      'home.viewPosts': 'Të gjitha postimet →',
      'home.exploreProjects': 'Shiko projektet',
      'home.introAria': 'Hyrje',

      'about.label': 'Për mua',
      'about.title': 'Për mua',
      'about.lead': 'Jam student i Shkencave Kompjuterike, Junior SEO, dhe ndërtoj me teknologji.',
      'about.p1': 'Jam <strong>Agon Mustafaj</strong>, student i <strong>Shkencave Kompjuterike</strong> në <strong>Universitetin e Prishtinës</strong>. Aktualisht punoj si <strong>Junior SEO te <a class="company-link" href="https://thenovalab.com/" target="_blank" rel="noopener noreferrer">thenovalab</a></strong> në Prishtinë, Kosovë.',
      'about.p2': 'Puna ime është në kryqëzimin e shkencave kompjuterike, zhvillimit web, SEO teknik, analizës së të dhënave dhe teknologjive të reja. Nuk më përcakton një fushë e vetme. I ndërthur aftësitë nga disa drejtime për të ndërtuar përvoja dixhitale të dizajnuara mirë, të qëndrueshme teknikisht dhe të qarta për përdoruesin.',
      'about.p3': 'Më interesojnë zhvillimi web, dizajni UI/UX, SEO teknik, analiza e të dhënave, Python, Power BI, Excel, DAX, inteligjenca artificiale, programimi dhe teknologjitë moderne të webit. Mësoj duke ndërtuar: idetë i kthej në projekte reale që tregojnë çfarë di të bëj.',
      'about.p4': 'Në këtë portofol ndaj punën, aftësitë dhe rrugën e të mësuarit. Qoftë rekrutues, zhvillues, agjenci apo bashkëpunëtor, faqja tregon jo vetëm çfarë di, por si mendoj dhe si ndërtoj.',
      'about.focusLabel': 'Çfarë bëj',
      'about.focusTitle': 'Fushat e punës',
      'about.journeyLabel': 'Rruga',
      'about.journeyTitle': 'Rruga ime',
      'about.uni': 'Universiteti i Prishtinës',
      'about.cs': 'Shkenca kompjuterike',
      'about.current': 'Në vazhdim',
      'about.webProjects': 'Projekte webi',
      'about.webProjectsSub': 'Ndërtoj webfaqe reale',
      'about.data': 'Analizë të dhënash',
      'about.dataSub': 'Python, Power BI, Excel',
      'about.learnAlways': 'Mësim i vazhdueshëm',
      'about.learnAlwaysSub': 'Gjithmonë në rritje',
      'about.viewProjects': 'Shiko projektet',

      'services.label': 'Shërbime',
      'services.title': 'Webfaqe për biznese',
      'services.lead': 'Dizajnoj dhe ndërtoj webfaqe profesionale për kompani që duan të duken serioze dhe t\'ia bëjnë të lehtë klientit të kontaktojë.',
      'services.offerLabel': 'Çfarë merr',
      'services.offerTitle': 'Një webfaqe që i shërben biznesit',
      'services.offerLead': 'Jo shabllon. Një prezencë e qartë online, e ndërtuar rreth shërbimeve tuaja, klientëve tuaj dhe mënyrës si ju kontaktojnë.',
      'services.card1': 'Webfaqe biznesi',
      'services.card1p': 'Faqe profesionale që paraqet kompaninë, shërbimet dhe si t\'ju gjejnë klientët.',
      'services.card2': 'Në telefon dhe e shpejtë',
      'services.card2p': 'Layout që punon në telefon, me strukturë të pastër dhe performancë të mirë.',
      'services.card3': 'Kërkesa që kthehen në klientë',
      'services.card3p': 'Forma kontakti, WhatsApp dhe thirrje të qarta për veprim.',
      'services.card4': 'Shumëgjuhëshe',
      'services.card4p': 'Faqe në gjuhën e klientëve tuaj, për biznes lokal ose ndërkombëtar.',
      'services.card5': 'Publikim dhe mbështetje',
      'services.card5p': 'Nga biseda e parë deri te webfaqja live, me një proces të qartë.',
      'services.whoLabel': 'Për kë',
      'services.whoTitle': 'Për biznese të vërteta lokale',
      'services.whoLead': 'Punëtori, zeje, studio, dyqane dhe kompani shërbimi që duan një webfaqe serioze, jo vetëm një faqe në rrjete sociale.',
      'services.who1': 'Biznese zeje dhe pune dore',
      'services.who2': 'Kompani lokale shërbimi',
      'services.who3': 'Studio dhe praktika profesionale',
      'services.who4': 'Dyqane që duan webfaqe të rregullt',
      'services.who5': 'Ekipe që duan kërkesa, jo vetëm një broshurë',
      'services.who6': 'Biznese që punojnë në më shumë se një gjuhë',
      'services.processLabel': 'Procesi',
      'services.processTitle': 'Nga biseda te faqja live',
      'services.step1': 'Biseda',
      'services.step1p': 'Qartësojmë çfarë bën biznesi, kë shërben dhe çfarë duhet të arrijë webfaqja.',
      'services.step2': 'Struktura',
      'services.step2p': 'Faqet, përmbajtja dhe rruga e përdoruesit përcaktohen para dizajnit.',
      'services.step3': 'Dizajn dhe ndërtim',
      'services.step3p': 'Layout i personalizuar, jo shabllon, në HTML, CSS dhe JavaScript të pastër.',
      'services.step4': 'Publikimi',
      'services.step4p': 'Rrugët e kontaktit gati dhe një webfaqe live që klientët mund ta përdorin.',
      'services.ctaLabel': 'Fillo një projekt',
      'services.ctaTitle': 'Më trego për biznesin',
      'services.ctaLead': 'Nëse të duhet një webfaqe që e paraqet kompaninë qartë dhe sjell kërkesa, dërgo një mesazh të shkurtër. Kthehem me hapat e ardhshëm.',
      'services.emailMe': 'Më shkruaj',
      'services.allContact': 'Të gjitha mënyrat e kontaktit',
      'services.mailSubject': 'Webfaqe për biznesin tim',

      'contact.label': 'Kontakt',
      'contact.title': 'Të lidhemi',
      'contact.lead': 'Më shkruaj drejtpërdrejt me email ose më telefono.',
      'contact.invalidEmail': 'Shkruaj një email të vlefshëm.',

      'projects.label': 'Portofol',
      'projects.title': 'Çfarë kam ndërtuar',
      'projects.lead': 'Projekte reale, jo vetëm ide.',

      'skills.label': 'Ekspertiza',
      'skills.title': 'Aftësi dhe teknologji',
      'skills.lead': 'Një vështrim i teknologjive dhe aftësive me të cilat punoj.',

      'education.label': 'Akademike',
      'education.title': 'Arsimi',
      'education.lead': 'Formimi akademik dhe studimet në vazhdim.',
      'education.cs': 'Shkenca kompjuterike',
      'education.meta': 'Universiteti i Prishtinës · Prishtinë, Kosovë',
      'education.dates': '[SHTO DATËN E FILLIMIT] – Në vazhdim',
      'education.info': '[SHTO INFORMACION]',

      'experience.label': 'Karriera',
      'experience.title': 'Përvoja',
      'experience.lead': 'Rruga profesionale dhe roli aktual.',
      'experience.meta': 'thenovalab · Prishtinë, Kosovë',
      'experience.dates': '1 korrik – Në vazhdim',

      'certs.label': 'Të mësuarit',
      'certs.title': 'Certifikata dhe mësim i vazhdueshëm',
      'certs.lead': 'Skedarët e certifikatave dhe kredencialet e të mësuarit.',
      'certs.all': 'Të gjitha',
      'certs.verifyTitle': 'Linket e verifikimit në Coursera',
      'certs.verifyLead': 'Linke shtesë verifikimi në Coursera. Hap secilin për ta konfirmuar kredencialin.',
      'certs.verification': 'Verifikim Coursera',

      'blog.label': 'Blog',
      'blog.title': 'AI, teknologji dhe ndërtim',
      'blog.lead': 'Shënime për inteligjencën artificiale sot, teknologjinë moderne dhe si mësoj duke ndërtuar.',
      'blog.by': 'Nga Agon Mustafaj',
      'blog.date1': '15 qershor 2026',
      'blog.date2': '22 prill 2026',
      'blog.date3': '18 shkurt 2026',
      'blog.date4': '12 dhjetor 2025',
      'blog.t1': 'AI sot: çfarë ka rëndësi tani',
      'blog.d1': 'Një vështrim praktik se ku qëndron inteligjenca artificiale sot dhe cilat aftësi kanë rëndësi për studentë dhe ndërtues.',
      'blog.t2': 'Si po e ndryshon AI zhvillimin e webit',
      'blog.d2': 'Nga kodi më i shpejtë te kërkimi UX, AI po ndryshon mënyrën si planifikohen dhe ndërtohen webfaqet.',
      'blog.t3': 'AI dhe teknologjia: ndërtim me inteligjencë',
      'blog.d3': 'Pse themelet e shkencave kompjuterike, të lidhura me mjetet AI, japin produkte më të forta.',
      'blog.t4': 'Si e mësoj AI-në si student i Shkencave Kompjuterike',
      'blog.d4': 'Si e lidh të mësuarit e AI-së me zhvillimin web, analizën e të dhënave dhe SEO.',
      'blog.short1': 'Një vështrim praktik se ku qëndron inteligjenca artificiale sot.',
      'blog.short2': 'Si po e ndryshon AI planifikimin, kodin dhe rrjedhën e punës në web.',
      'blog.short3': 'Pse themelet plus mjetet AI japin produkte dixhitale më të forta.',
      'blog.catAi': 'AI',
      'blog.catWeb': 'AI dhe web',
      'blog.catTech': 'Teknologji',
      'blog.catLearn': 'Të mësuarit',

      'cv.label': 'CV',
      'cv.title': 'CV-ja ime',
      'cv.lead': 'Një përmbledhje e qartë e profilit. Shkarko PDF-në për CV-në e plotë.',
      'cv.view': 'Shiko CV-në',
      'cv.download': 'Shkarko CV',
      'cv.profile': 'Profili',
      'cv.experience': 'Përvoja',
      'cv.education': 'Arsimi',
      'cv.selected': 'Projekte të zgjedhura',
      'cv.skills': 'Aftësi',
      'cv.p1': 'Jam student i Shkencave Kompjuterike në Universitetin e Prishtinës dhe Junior SEO te <a class="company-link" href="https://thenovalab.com/" target="_blank" rel="noopener noreferrer">thenovalab</a>. Më interesojnë zhvillimi web, UI/UX, SEO teknik, analiza e të dhënave, Python, Power BI dhe teknologjitë moderne të webit.',
      'cv.eduLine': 'Shkenca kompjuterike, Universiteti i Prishtinës',
      'cv.banese': 'Platformë qiraje për kërkimin e banesave dhe rrjedhën e punës mes qiramarrësit dhe qiradhënësit.',
      'cv.hoxha': 'Webfaqe profesionale biznesi, e ndërtuar për t\'i kthyer vizitorët në klientë.',
      'cv.dev': 'Zhvillim:',
      'cv.seo': 'SEO:',
      'cv.data': 'Të dhëna:',
      'cv.design': 'Dizajn:',
      'cv.metaLoc': 'Prishtinë, Kosovë · 1 korrik – Në vazhdim',
      'cv.eduMeta': 'Prishtinë, Kosovë · Në vazhdim',
      'cv.sheetMeta': 'Prishtinë, Kosovë · ',

      'err.title': 'Faqja nuk u gjet',
      'err.lead': 'Faqja që kërkon nuk ekziston ose është zhvendosur.',

      'case.n1': '01. Ideja',
      'case.n2': '02. Çfarë ndërtova',
      'case.n3': '03. Përvoja e përdoruesit',
      'case.n4': '04. Vendimet e dizajnit',
      'case.n5': '05. Qasja teknike',
      'case.n6': '06. Këndvështrimi SEO',
      'case.n7': '07. Çfarë mësova',
      'case.idea': 'Ideja',
      'case.built': 'Çfarë ndërtova',
      'case.ux': 'Përvoja e përdoruesit',
      'case.design': 'Vendimet e dizajnit',
      'case.tech': 'Qasja teknike',
      'case.seo': 'Këndvështrimi SEO',
      'case.learned': 'Çfarë mësova',
      'hoxha.lead': 'Webfaqe profesionale për biznes, e ndërtuar për t\'i kthyer vizitorët në klientë, edhe në telefon.',
      'hoxha.idea': 'Hoxha Handwerk kishte nevojë për një prezencë profesionale online: të tregojë zanatin, të ndërtojë besim dhe të sjellë kërkesa përmes një webfaqeje të qartë.',
      'hoxha.built': 'Një webfaqe e plotë biznesi: hero i qartë, prova para/pas e punëve, shpjegim i procesit, disa gjuhë dhe rrugë kontakti përfshi WhatsApp, që ta paraqesë biznesin seriozisht dhe t\'i kthejë vizitorët në klientë.',
      'hoxha.ux': 'Faqja e çon vizitorin nga përshtypja e parë, te prova e punës, te kontakti. Hierarki e qartë, para/pas dhe dëshmi nga klientët krijojnë besim.',
      'hoxha.design': 'Dizajni vë theksin te profesionalizmi dhe zanati. Imazhe të forta në hero, layout që ndërton besim dhe sistem vizual i pastër, pa e ngadalësuar faqen në telefon.',
      'hoxha.tech': 'E ndërtuar si sajt statik në Netlify, e kujdesshme ndaj shpejtësisë dhe qasshmërisë. HTML semantik dhe CSS responsive për të njëjtën përvojë në çdo pajisje.',
      'hoxha.seo': 'Strukturë me tituj të rregullt, metadata të qarta dhe përmbajtje të organizuar. Seksionet e punëve dhe kontaktit janë të lexueshme për njerëzit dhe për motorët e kërkimit.',
      'hoxha.learned': 'Ky projekt e bëri të qartë rëndësinë e qëllimeve të biznesit, dizajnit për kthim të vizitorëve në klientë, dhe webfaqeve që punojnë si kartëvizitë dixhitale, jo vetëm si faqe të bukura.',
      'hoxha.f1': 'Seksioni hero',
      'hoxha.f2': 'Ndërfaqe shumëgjuhëshe',
      'hoxha.f3': 'Seksion besimi dhe vlerash',
      'hoxha.f4': 'Galeri para/pas e punëve',
      'hoxha.f5': 'Përmbledhje e procesit',
      'hoxha.f6': 'Dëshmi klientësh',
      'hoxha.f7': 'Pyetjet e shpeshta',
      'hoxha.f8': 'Formë kontakti',
      'hoxha.f9': 'Kontakt me WhatsApp',
      'hoxha.f10': 'Përvojë responsive',
      'hoxha.f11': 'Layout i orientuar nga kthimi i vizitorëve',
      'banese.lead': 'Platformë qiraje për kërkimin e banesave dhe rrjedhën e punës mes qiramarrësit dhe qiradhënësit.',
      'banese.idea': 'Banesë për Ty u krijua për ta bërë më të thjeshtë gjetjen e banesës me qira: t\'i lidhë qiramarrësit dhe qiradhënësit në një platformë dixhitale.',
      'banese.built': 'Një platformë e plotë qiraje: lista pronash, kërkim dhe filtra, rrjedha qiraje dhe procese dixhitale për kontrata, nënshkrime dhe verifikim pagese.',
      'banese.ux': 'E ndërtuar rreth dy përdoruesve: qiramarrësi që kërkon banesë dhe qiradhënësi që menaxhon njoftimet. Kërkimi është i thjeshtë dhe proceset e qirasë ndiqen hap pas hapi.',
      'banese.design': 'Ndërfaqja vë theksin te paraqitja e qartë e pronës, kërkimi i arritshëm dhe një rrugë e pastër nga shfletimi te marrëveshja dixhitale.',
      'banese.tech': 'Aplikacion web në Netlify, me dizajn responsive dhe funksione interaktive në anën e klientit.',
      'banese.seo': 'HTML semantik, hierarki e qartë e faqeve dhe përmbajtje përshkruese. Listat dhe kategoritë janë të organizuara për njerëzit dhe për kërkimin.',
      'banese.learned': 'Ky projekt e tregoi rëndësinë e rrjedhave reale të përdoruesit, ekuilibrit mes funksioneve dhe thjeshtësisë, dhe përvojave që u shërbejnë të dy palëve të tregut.',
      'banese.f1': 'Zbulimi i pronave',
      'banese.f2': 'Kërkim dhe filtra',
      'banese.f3': 'Rrjedha e qirasë',
      'banese.f4': 'Kontrata dixhitale',
      'banese.f5': 'Nënshkrime dixhitale',
      'banese.f6': 'Verifikim pagese',
      'banese.f7': 'Njoftime',
      'banese.f8': 'Rrjedha për qiramarrës dhe qiradhënës',

      'post.crumbAi': 'AI sot',
      'post.meta1': 'Nga Agon Mustafaj · 15 qershor 2026',
      'post.a1p1': 'Inteligjenca artificiale nuk është më një ide e largët. Është pjesë e mënyrës si kërkojmë, shkruajmë, dizajnojmë, analizojmë të dhëna dhe ndërtojmë software. Pyetja e vërtetë nuk është nëse AI ekziston. Është çfarë ka rëndësi kur do ta përdorësh me qëllim.',
      'post.a1p2': 'Sot, avantazhi më i fortë nuk është të njohësh çdo mjet të ri. Është t\'i kuptosh qartë problemet, t\'i trajtosh të dhënat me kujdes dhe ta përdorësh AI-në për ta shpejtuar punën reale, pa e zëvendësuar gjykimin.',
      'post.a1h2': 'Çfarë bie në sy në 2026',
      'post.a1p3': 'Asistentët AI ndihmojnë në kërkim, kod dhe skica përmbajtjeje. Machine learning vazhdon të mbështesë analizën dhe parashikimin. Automatizimi po bëhet më praktik në punën e përditshme dixhitale. Në të njëjtën kohë, besimi, saktësia dhe gjykimi njerëzor mbeten thelbësorë.',
      'post.a1p4': 'Për studentë dhe profesionistë të rinj kjo do të thotë të mësosh të dyja anët: themelet teknike dhe aftësinë për ta vlerësuar output-in e AI-së. Nëse bën pyetje më të mira, i verifikon përgjigjet dhe i lidh mjetet me projekte reale, lëviz më shpejt se dikush që vetëm kopjon prompt-e.',
      'post.a1h3': 'Ku e përqendroj vëmendjen',
      'post.a1p5': 'Si student i Shkencave Kompjuterike, i interesuar për zhvillim web, SEO dhe të dhëna, e trajtoj AI-në si bashkëpunëtor. Më ndihmon të eksploroj ide, të gjej gabime më shpejt dhe të kuptoj tema të vështira. Cilësia përfundimtare mbetet vendim i imi.',
      'post.a1p6': 'AI sot i shpërblen ata që ndërtojnë. Teoria ndihmon. Praktika e tregon kuptimin.',
      'post.crumbWeb': 'AI dhe zhvillimi web',
      'post.meta2': 'Nga Agon Mustafaj · 22 prill 2026',
      'post.a2p1': 'Zhvillimi i webit gjithmonë ka ecur shpejt. AI e bëri këtë shpejtësi të ndihet ndryshe. Mund të skicosh struktura HTML, të provosh pattern-e CSS, të gjenerosh ndihma JavaScript dhe të shohësh ide qasshmërie për minuta. Kjo e ndryshon ritmin e ndërtimit të webfaqeve.',
      'post.a2p2': 'Por AI nuk i heq themelet. HTML semantik, arkitekturë e pastër CSS, performanca dhe SEO ende vendosin nëse një webfaqe ndihet profesionale.',
      'post.a2h2': 'Ku ndihmon më shumë AI',
      'post.a2p3': 'AI është e dobishme për skeletin e faqeve, për pattern-e interaksioni, për shpjegimin e gabimeve dhe për krahasimin e opsioneve të dizajnit. Mund të ndihmojë edhe te struktura e përmbajtjes dhe metadata, aty ku web-i takohet me SEO.',
      'post.a2h3': 'Ku njeriu mbetet në krye',
      'post.a2p4': 'Përdoruesi nuk përjeton “kod të gjeneruar”. Përjeton qartësi, shpejtësi, besim dhe dobi. Arkitektura e informacionit, interaksionet me kuptim dhe detajet e fundit kërkojnë gjykim njerëzor.',
      'post.a2p5': 'Rrjedha më e mirë e sotme i lidh të dyja: AI për shpejtësi, zhvilluesi për drejtim. Kështu i qasem projekteve: ndërtoj me kujdes, i përdor mjetet me mençuri dhe e mbaj përvojën përfundimtare të qëllimshme.',
      'post.crumbTech': 'AI dhe teknologjia',
      'post.meta3': 'Nga Agon Mustafaj · 18 shkurt 2026',
      'post.a3p1': 'Teknologjia bëhet më e fuqishme kur në proces shtohet inteligjenca. Jo vetëm ajo e makinës, por edhe të menduarit e qartë njerëzor. AI mund të gjejë modele, të ofrojë opsione dhe të automatizojë hapa. Njerëzit ende përcaktojnë qëllimet, kufijtë dhe cilësinë.',
      'post.a3p2': 'Kjo kombinim është drejtimi i punës dixhitale sot. Produktet pritet të jenë të shpejta, personale, të gjetshme dhe të dobishme. Për këtë duhen programim, dizajn, të dhëna dhe ndërgjegjësim për kërkimin.',
      'post.a3h2': 'Inteligjenca është sistem, jo veçori',
      'post.a3p3': 'Një widget AI nuk e bën automatikisht produktin të zgjuar. Sistemet e zgjuara nisin me të dhëna të pastra, strukturë të mirë dhe rrjedha të menduara. Pastaj AI mund të ndihmojë me rekomandime, njohuri ose përmbajtje, me rezultate më të mira.',
      'post.a3h3': 'Qasja ime',
      'post.a3p4': 'Më intereson të ndërtoj përvoja dixhitale që duken mirë, punojnë me mençuri dhe janë të qarta për t\'u gjetur. AI hyn natyrshëm kur përmirëson kuptimin, shpejtësinë ose vendimmarrjen, pa krijuar zhurmë.',
      'post.a3p5': 'E ardhmja u takon atyre që e përdorin AI-në me përgjegjësi dhe që nuk i lënë mënjanë themelet e teknologjisë.',
      'post.crumbLearn': 'Të mësuarit e AI-së',
      'post.meta4': 'Nga Agon Mustafaj · 12 dhjetor 2025',
      'post.a4p1': 'Të mësosh AI ndërsa studion Shkenca Kompjuterike mund të të duket shumë. Ka modele, mjete, framework-e dhe njoftime të reja çdo javë. Qasja ime është e thjeshtë: e lidh AI-në me atë që po ndërtoj tashmë.',
      'post.a4p2': 'Kur punoj me webfaqe, shoh si mund të ndihmojë AI te vendimet e dizajnit, struktura e përmbajtjes dhe shpejtësia e zhvillimit. Kur punoj me të dhëna, shoh si lidhen konceptet e machine learning me analizën. Kur punoj me SEO, mendoj se si kërkimi dhe sistemet AI e kuptojnë informacionin.',
      'post.a4h2': 'Mëso duke i lidhur fushat',
      'post.a4p3': 'Zhvillimi web të mëson strukturën. Analiza e të dhënave të mëson evidencën. SEO të mëson zbulueshmërinë. AI bëhet më e dobishme kur qëndron mbi këto aftësi, jo kur i zëvendëson.',
      'post.a4h3': 'Vazhdo të ndërtosh',
      'post.a4p4': 'Mësoj më mirë duke eksperimentuar. Të lexosh për AI ndihmon. Ta përdorësh brenda projekteve reale është më mirë. Prandaj ky portofol është pjesë e të mësuarit: një vend për të praktikuar teknologjinë, për të treguar punën dhe për të vazhduar.',
      'post.a4p5': 'AI është pjesë e peizazhit të sotëm teknologjik. Studentët që ecin përpara janë ata që mbeten kureshtarë, praktikë dhe që vazhdojnë të publikojnë punë.'
    }
  };

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'sq') return saved;
    } catch (e) {}
    var nav = String((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
    return nav.indexOf('sq') === 0 ? 'sq' : 'en';
  }

  var currentLang = detectLang();

  function t(key) {
    var pack = STRINGS[currentLang] || STRINGS.en;
    if (pack[key] != null && pack[key] !== '') return pack[key];
    if (STRINGS.en[key] != null) return STRINGS.en[key];
    return '';
  }

  function setDocumentLang() {
    document.documentElement.lang = currentLang === 'sq' ? 'sq' : 'en';
    document.documentElement.setAttribute('data-lang', currentLang);
  }

  function applyI18n(root) {
    var scope = root || document;
    scope.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n'));
      if (val) el.textContent = val;
    });
    scope.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-html'));
      if (val) el.innerHTML = val;
    });
    scope.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-aria'));
      if (val) el.setAttribute('aria-label', val);
    });
    scope.querySelectorAll('[data-i18n-subject]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-subject'));
      if (!val) return;
      var href = el.getAttribute('href') || '';
      if (href.indexOf('mailto:') === 0) {
        el.setAttribute('href', href.split('?')[0] + '?subject=' + encodeURIComponent(val));
      }
    });
    applyPageMeta();
  }

  function applyPageMeta() {
    var page = document.body && document.body.getAttribute('data-page');
    if (!page || page === 'projects' && location.pathname.indexOf('/projects/') === 1 && location.pathname.split('/').filter(Boolean).length > 1) {
      /* keep case-study titles; still translate if keys exist */
    }
    var titleKey = 'meta.' + page + '.title';
    var descKey = 'meta.' + page + '.desc';
    var title = t(titleKey);
    var desc = t(descKey);
    if (title && STRINGS.sq[titleKey]) {
      /* only replace generic page titles, not long case-study titles */
      var path = location.pathname.replace(/\/+$/, '') || '/';
      var isGeneric = path === '/' || path === '' ||
        path === '/about' || path === '/projects' || path === '/services' ||
        path === '/skills' || path === '/education' || path === '/experience' ||
        path === '/certifications' || path === '/blog' || path === '/contact' ||
        path === '/cv' || path === '/404.html' || path.indexOf('/blog/') === -1 && path.indexOf('/projects/') === -1;
      if (page === 'home' || page === 'about' || page === 'services' || page === 'skills' ||
          page === 'education' || page === 'experience' || page === 'certifications' ||
          page === 'contact' || page === 'cv' || page === '404' ||
          (page === 'projects' && (path === '/projects' || path === '/projects/')) ||
          (page === 'blog' && (path === '/blog' || path === '/blog/'))) {
        if (title) document.title = title;
        var meta = document.querySelector('meta[name="description"]');
        if (meta && desc) meta.setAttribute('content', desc);
      }
    }
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'sq') return;
    if (lang === currentLang) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    currentLang = lang;
    location.reload();
  }

  function langSwitcherMarkup() {
    return '<div class="lang-switch" role="group" aria-label="' + t('nav.langAria') + '">' +
      '<button type="button" data-set-lang="en"' + (currentLang === 'en' ? ' class="active" aria-current="true"' : '') + '>EN</button>' +
      '<button type="button" data-set-lang="sq"' + (currentLang === 'sq' ? ' class="active" aria-current="true"' : '') + '>SQ</button>' +
      '</div>';
  }

  function bindLangSwitcher(scope) {
    (scope || document).querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-set-lang'));
      });
    });
  }

  setDocumentLang();
  if (document.body) applyI18n();

  global.I18N = {
    t: t,
    get lang() { return currentLang; },
    setLang: setLang,
    applyI18n: applyI18n,
    langSwitcherMarkup: langSwitcherMarkup,
    bindLangSwitcher: bindLangSwitcher
  };
  global.t = t;
})(window);
