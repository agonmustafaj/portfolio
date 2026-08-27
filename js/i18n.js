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
      'profile.headline': 'Computer Science Student | Web Development | Junior SEO | AI & Technology',
      'profile.identity': 'COMPUTER SCIENCE × WEB × SEO × AI',
      'profile.location': 'Pristina, Kosovo',
      'profile.university': 'University of Prishtina',
      'wallet.role': 'Computer Science Student at the University of Prishtina',
      'wallet.share': 'Share Profile',
      'wallet.aria': 'Digital identity card for Agon Mustafaj',
      'share.title': 'Share Profile',
      'share.copy': 'Copy Website URL',
      'share.linkedin': 'Share on LinkedIn',
      'share.facebook': 'Share on Facebook',
      'share.email': 'Share via Email',
      'share.mailSubject': 'Agon Mustafaj Portfolio',
      'share.close': 'Close',
      'share.copied': 'Link copied!',
      'share.aria': 'Share profile',
      'terminal.focus': 'Computer Science\nWeb Development\nSEO\nAI',
      'terminal.status': 'Building...\nLearning...\nExperimenting...',
      'cert.open': 'Open',
      'cert.view': 'View Certificate',
      'cert.count': '10 Learning Credentials',
      'cv.comingSoon': 'CV coming soon',
      'cv.loading': 'Loading CV...',
      'cv.openTab': 'Open PDF',
      'home.statement': 'Computer Science student focused on web development, working as a Junior SEO, and exploring where AI fits into both.',
      'projects.banese-per-ty': 'A rental platform concept where tenants search listings and landlords manage them, with digital contracts, signatures, and payment verification.',
      'projects.hoxha-handwerk': 'A multilingual website for a craft and trade business, built to present the work and make it easy for customers to get in touch.',
      'skill.HTML': 'Semantic markup for accessible, SEO-friendly web pages.',
      'skill.CSS': 'Modern styling, layouts, and responsive design systems.',
      'skill.JavaScript': 'Interactive experiences and client-side functionality.',
      'skill.Web Development': 'Building complete websites from structure to deployment.',
      'skill.Responsive Design': 'Interfaces that work across devices and screen sizes.',
      'skill.Technical SEO': 'Crawlability, indexing, and site structure, applied in my Junior SEO role.',
      'skill.On-page SEO': 'Titles, meta descriptions, headings, and content optimization.',
      'skill.Keyword Research': 'Identifying search intent and relevant keyword opportunities.',
      'skill.Website Structure': 'Information architecture and internal linking.',
      'skill.SEO Auditing': 'Reviewing websites for technical and on-page improvements.',
      'skill.Content Marketing': 'Creating and structuring content that serves users and search, covered in the Ahrefs Marketing Platform Certification.',
      'skill.Competitive Analysis': 'Researching competitors’ search visibility, content and backlink profiles with SEO tools.',
      'skill.Digital Marketing': 'Search, content and analytics work across a marketing platform, covered in the Ahrefs certification.',
      'skill.Marketing Analytics': 'Measuring search visibility and marketing performance with platform data and reports.',
      'skill.Python': 'Programming and data analysis fundamentals, studied through coursework.',
      'skill.Pandas': 'Working with datasets in Python, learned through coursework.',
      'skill.NumPy': 'Numerical computing in Python, learned through coursework.',
      'skill.Power BI': 'Power Query, data modeling, and visualization, studied through coursework.',
      'skill.Excel': 'Preparing and organizing data in spreadsheets, studied through coursework.',
      'skill.DAX': 'Expressions for Power BI models, studied through coursework.',
      'skill.Data Modeling': 'Structuring data for reporting, studied through coursework.',
      'skill.Artificial Intelligence': 'Exploring AI tools and AI-assisted development.',
      'skill.Programming': 'Problem-solving through code across multiple languages.',
      'skill.Modern Web Technologies': 'Staying current with evolving web standards and tools.',
      'skill.UI/UX': 'User-centered design thinking and interface craft.',
      'skill.Web Design': 'Visual design for web experiences.',
      'skill.Interaction Design': 'Meaningful micro-interactions and user flows.',
      'skillcat.Development': 'Development',
      'skillcat.SEO': 'SEO',
      'skillcat.Marketing': 'Marketing',
      'skillcat.Data Analytics': 'Data Analytics (Coursework)',
      'skillcat.AI & Technology': 'AI & Technology',
      'skillcat.Design': 'Design',
      'meta.home.title': 'Agon Mustafaj | Computer Science, Web Development & SEO',
      'meta.home.desc': 'Agon Mustafaj is a Computer Science student at the University of Prishtina and a Junior SEO focused on web development, SEO and AI. Explore his projects, skills, certifications and experience.',
      'meta.about.title': 'About Agon Mustafaj | Computer Science & Web Development',
      'meta.about.desc': 'Computer Science student at the University of Prishtina and Junior SEO at thenovalab. How I work across web development, SEO and AI, and what I am currently learning.',
      'meta.projects.title': 'Projects | Agon Mustafaj — Web Development & Technology',
      'meta.projects.desc': 'Web development projects I designed and built, including Banesë për Ty and Hoxha Handwerk, each with a case study covering my role, the technologies used and what I learned.',
      'meta.services.title': 'Web Development & Websites for Businesses | Agon Mustafaj',
      'meta.services.desc': 'I design and build websites for businesses: clear presentation, mobile-ready layouts and simple contact paths, written in clean HTML, CSS and JavaScript.',
      'meta.skills.title': 'Skills & Technologies | Agon Mustafaj',
      'meta.skills.desc': 'The technologies I work with in web development and SEO, plus areas I have studied through coursework such as Python, Power BI, Excel and DAX.',
      'meta.education.title': 'Education | Agon Mustafaj — Computer Science, University of Prishtina',
      'meta.education.desc': 'My academic background: Computer Science studies at the University of Prishtina in Pristina, Kosovo, and the foundation behind my web development and SEO work.',
      'meta.experience.title': 'Experience | Agon Mustafaj — Junior SEO at thenovalab',
      'meta.experience.desc': 'My professional experience as a Junior SEO at thenovalab in Pristina, working on technical SEO, on-page optimization, internal linking and website structure.',
      'meta.certifications.title': 'Certifications | Agon Mustafaj — Ahrefs, Python, Power BI, SEO & Networking',
      'meta.certifications.desc': 'Course certificates and learning credentials from Ahrefs, Coursera, Credly and KREN, covering SEO, Python, Power BI, Excel, networking, DevOps and cybersecurity fundamentals.',
      'meta.blog.title': 'Blog | Agon Mustafaj — AI, Web Development & Technology',
      'meta.blog.desc': 'Articles on artificial intelligence, web development and technology, written from the perspective of a Computer Science student who learns by building.',
      'meta.contact.title': 'Contact Agon Mustafaj | Let\'s Connect',
      'meta.contact.desc': 'Get in touch with Agon Mustafaj by email, phone, LinkedIn or Facebook. Based in Pristina, Kosovo.',
      'meta.cv.title': 'CV | Agon Mustafaj — Computer Science, Web Development & SEO',
      'meta.cv.desc': 'The CV of Agon Mustafaj: Computer Science student at the University of Prishtina, Junior SEO at thenovalab, with web development projects and course certificates.',
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
      'profile.headline': 'Student i Shkencave Kompjuterike | Zhvillim web | Junior SEO | AI dhe teknologji',
      'profile.identity': 'SHKENCA KOMPJUTERIKE × WEB × SEO × AI',
      'profile.location': 'Prishtinë, Kosovë',
      'profile.university': 'Universiteti i Prishtinës',
      'wallet.role': 'Student i Shkencave Kompjuterike në Universitetin e Prishtinës',
      'wallet.share': 'Ndaj profilin',
      'wallet.aria': 'Karta e identitetit dixhital për Agon Mustafaj',
      'share.title': 'Ndaj profilin',
      'share.copy': 'Kopjo linkun e webfaqes',
      'share.linkedin': 'Ndaj në LinkedIn',
      'share.facebook': 'Ndaj në Facebook',
      'share.email': 'Ndaj me email',
      'share.mailSubject': 'Portofoli i Agon Mustafaj',
      'share.close': 'Mbyll',
      'share.copied': 'Linku u kopjua!',
      'share.aria': 'Ndaj profilin',
      'terminal.focus': 'Shkenca kompjuterike\nZhvillim web\nSEO\nAI',
      'terminal.status': 'Ndërtoj...\nMësoj...\nEksperimentoj...',
      'cert.open': 'Hap',
      'cert.view': 'Shiko certifikatën',
      'cert.count': '10 kredenciale mësimi',
      'cv.comingSoon': 'CV së shpejti',
      'cv.loading': 'Duke ngarkuar CV-në...',
      'cv.openTab': 'Hap PDF-në',
      'home.statement': 'Student i Shkencave Kompjuterike i fokusuar te zhvillimi web, punoj si Junior SEO dhe eksploroj se ku hyn AI në të dyja.',
      'projects.banese-per-ty': 'Platformë qiraje ku qiramarrësit kërkojnë banesa dhe qiradhënësit i menaxhojnë njoftimet, me kontrata, nënshkrime dhe verifikim pagese në formë dixhitale.',
      'projects.hoxha-handwerk': 'Webfaqe shumëgjuhëshe për një biznes zejtarie, e ndërtuar për ta paraqitur punën dhe për ta bërë të lehtë kontaktin.',
      'skill.HTML': 'Markup semantik për faqe të qarta, të arritshme dhe të mira për SEO.',
      'skill.CSS': 'Stil, layout dhe dizajn responsive.',
      'skill.JavaScript': 'Përvoja interaktive dhe funksione në anën e klientit.',
      'skill.Web Development': 'Webfaqe të plota, nga struktura deri te publikimi.',
      'skill.Responsive Design': 'Ndërfaqe që punojnë në telefona, tableta dhe desktop.',
      'skill.Technical SEO': 'Crawlability, indeksim dhe strukturë e sajtit, të zbatuara në rolin tim si Junior SEO.',
      'skill.On-page SEO': 'Tituj, meta përshkrime, headings dhe optimizim i përmbajtjes.',
      'skill.Keyword Research': 'Kërkimi i fjalëve kyçe sipas qëllimit të kërkimit.',
      'skill.Website Structure': 'Arkitekturë informacioni dhe lidhje të brendshme.',
      'skill.SEO Auditing': 'Vlerësim i sajtit për përmirësime teknike dhe on-page.',
      'skill.Content Marketing': 'Krijim dhe strukturim i përmbajtjes për përdoruesit dhe kërkimin, të mbuluara në certifikatën Ahrefs Marketing Platform.',
      'skill.Competitive Analysis': 'Analizë e dukshmërisë, përmbajtjes dhe backlink-eve të konkurentëve me mjete SEO.',
      'skill.Digital Marketing': 'Punë me kërkim, përmbajtje dhe analitikë në një platformë marketingu, të mbuluara në certifikatën Ahrefs.',
      'skill.Marketing Analytics': 'Matje e dukshmërisë në kërkim dhe e performancës së marketingut me të dhëna nga platforma.',
      'skill.Python': 'Baza të programimit dhe analizës së të dhënave, të mësuara përmes kurseve.',
      'skill.Pandas': 'Punë me të dhëna në Python, e mësuar përmes kurseve.',
      'skill.NumPy': 'Llogaritje numerike në Python, e mësuar përmes kurseve.',
      'skill.Power BI': 'Power Query, modelim dhe vizualizim të dhënash, të mësuara përmes kurseve.',
      'skill.Excel': 'Përgatitje dhe organizim i të dhënave në spreadsheet, të mësuara përmes kurseve.',
      'skill.DAX': 'Shprehje për modelet në Power BI, të mësuara përmes kurseve.',
      'skill.Data Modeling': 'Strukturim i të dhënave për raportim, i mësuar përmes kurseve.',
      'skill.Artificial Intelligence': 'Eksplorim i mjeteve AI dhe zhvillimit me ndihmën e AI-së.',
      'skill.Programming': 'Zgjidhje problemesh me kod, në disa gjuhë.',
      'skill.Modern Web Technologies': 'Standarde dhe mjete të reja të webit.',
      'skill.UI/UX': 'Mendim i përqendruar te përdoruesi dhe ndërfaqe e kujdesshme.',
      'skill.Web Design': 'Dizajn vizual për përvoja webi.',
      'skill.Interaction Design': 'Mikro-interaksione dhe rrjedha përdorimi.',
      'skillcat.Development': 'Zhvillim',
      'skillcat.SEO': 'SEO',
      'skillcat.Marketing': 'Marketing',
      'skillcat.Data Analytics': 'Analizë të dhënash (kurse)',
      'skillcat.AI & Technology': 'AI dhe teknologji',
      'skillcat.Design': 'Dizajn',
      'meta.home.title': 'Agon Mustafaj | Shkenca kompjuterike, zhvillim web dhe SEO',
      'meta.home.desc': 'Agon Mustafaj është student i Shkencave Kompjuterike në Universitetin e Prishtinës dhe Junior SEO, i fokusuar te zhvillimi web, SEO dhe AI. Shiko projektet, aftësitë, certifikatat dhe përvojën.',
      'meta.about.title': 'Për Agon Mustafaj | Shkenca kompjuterike dhe zhvillim web',
      'meta.about.desc': 'Student i Shkencave Kompjuterike në Universitetin e Prishtinës dhe Junior SEO te thenovalab. Si punoj me zhvillimin web, SEO-në dhe AI-në, dhe çfarë po mësoj tani.',
      'meta.projects.title': 'Projekte | Agon Mustafaj — zhvillim web dhe teknologji',
      'meta.projects.desc': 'Projekte webi që i kam dizajnuar dhe ndërtuar, mes tyre Banesë për Ty dhe Hoxha Handwerk, secili me studim rasti për rolin tim, teknologjitë dhe çfarë mësova.',
      'meta.services.title': 'Zhvillim web dhe webfaqe për biznese | Agon Mustafaj',
      'meta.services.desc': 'Dizajnoj dhe ndërtoj webfaqe për biznese: prezantim i qartë, layout i përshtatur për telefon dhe rrugë të thjeshta kontakti, në HTML, CSS dhe JavaScript të pastër.',
      'meta.skills.title': 'Aftësi dhe teknologji | Agon Mustafaj',
      'meta.skills.desc': 'Teknologjitë me të cilat punoj në zhvillim web dhe SEO, si dhe fusha që i kam studiuar përmes kurseve, si Python, Power BI, Excel dhe DAX.',
      'meta.education.title': 'Arsimi | Agon Mustafaj — Shkenca kompjuterike, Universiteti i Prishtinës',
      'meta.education.desc': 'Formimi im akademik: studime në Shkenca Kompjuterike në Universitetin e Prishtinës, Prishtinë, Kosovë, dhe baza e punës sime në zhvillim web dhe SEO.',
      'meta.experience.title': 'Përvoja | Agon Mustafaj — Junior SEO te thenovalab',
      'meta.experience.desc': 'Përvoja ime profesionale si Junior SEO te thenovalab në Prishtinë: SEO teknik, optimizim on-page, lidhje të brendshme dhe strukturë e sajtit.',
      'meta.certifications.title': 'Certifikata | Agon Mustafaj — Ahrefs, Python, Power BI, SEO dhe rrjeta',
      'meta.certifications.desc': 'Certifikata kursesh dhe kredenciale mësimi nga Ahrefs, Coursera, Credly dhe KREN, për SEO, Python, Power BI, Excel, rrjeta, DevOps dhe baza të kibernetikës.',
      'meta.blog.title': 'Blog | Agon Mustafaj — AI, zhvillim web dhe teknologji',
      'meta.blog.desc': 'Shkrime për inteligjencën artificiale, zhvillimin web dhe teknologjinë, nga këndvështrimi i një studenti të Shkencave Kompjuterike që mëson duke ndërtuar.',
      'meta.contact.title': 'Kontakto Agon Mustafaj | Të lidhemi',
      'meta.contact.desc': 'Kontakto Agon Mustafajn me email, telefon, LinkedIn ose Facebook. I vendosur në Prishtinë, Kosovë.',
      'meta.cv.title': 'CV | Agon Mustafaj — Shkenca kompjuterike, zhvillim web dhe SEO',
      'meta.cv.desc': 'CV-ja e Agon Mustafajt: student i Shkencave Kompjuterike në Universitetin e Prishtinës, Junior SEO te thenovalab, me projekte webi dhe certifikata kursesh.',
      'meta.404.title': 'Faqja nuk u gjet | Agon Mustafaj',
      'meta.404.desc': 'Faqja që kërkon nuk ekziston ose është zhvendosur.',

      'home.labelWhat': 'Çfarë bëj',
      'home.whatTitle': 'Punoj në disa fusha',
      'home.whatLead': 'Baza të shkencave kompjuterike, të zbatuara në ndërtimin e webfaqeve, në përmirësimin e dukshmërisë në kërkim dhe në eksplorimin e AI-së.',
      'home.build': 'Ndërtoj',
      'home.buildP': 'Webfaqe dhe aplikacione responsive, nga struktura deri te publikimi.',
      'home.optimize': 'Optimizoj',
      'home.optimizeP': 'SEO teknik, optimizim on-page dhe strukturë e sajtit.',
      'home.analyze': 'Mësoj',
      'home.analyzeP': 'Analizë të dhënash përmes kurseve: Python, Power BI, Excel dhe DAX.',
      'home.explore': 'Eksploroj',
      'home.exploreP': 'Mjete AI, zhvillim me ndihmën e AI-së dhe teknologji të reja.',
      'home.design': 'Dizajnoj',
      'home.designP': 'Ndërfaqe moderne dhe responsive, të ndërtuara rreth përdorshmërisë.',
      'home.labelServices': 'Shërbime',
      'home.servicesTitle': 'Webfaqe dhe përvoja dixhitale',
      'home.servicesLead': 'Ndërtoj webfaqe për biznese që duan një prezencë të qartë dhe të besueshme online, dhe një rrugë të lehtë kontakti për klientët.',
      'home.svcSite': 'Webfaqe biznesi',
      'home.svcSiteP': 'Kompania, shërbimet dhe kontakti, të paraqitura qartë.',
      'home.svcMobile': 'Në telefon dhe e shpejtë',
      'home.svcMobileP': 'Punon mirë në telefon, me layout të pastër.',
      'home.svcInquiries': 'Më shumë kërkesa',
      'home.svcInquiriesP': 'Forma, WhatsApp dhe thirrje të qarta për veprim.',
      'home.seeServices': 'Shiko shërbimet e webfaqes',
      'home.labelProjects': 'Projekte të zgjedhura',
      'home.projectsTitle': 'Çfarë kam ndërtuar',
      'home.projectsLead': 'Webfaqe që i kam dizajnuar dhe ndërtuar nga fillimi deri në fund, secila me studim rasti.',
      'home.labelLearn': 'Të mësuarit',
      'home.learnTitle': 'Mësim i vazhdueshëm',
      'home.learnLead': 'Certifikata kursesh për Ahrefs, Python, Power BI, SEO, rrjeta dhe baza të kibernetikës, si pjesë e mësimit tim përkrah studimeve.',
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
      'about.lead': 'Student i Shkencave Kompjuterike, i fokusuar te zhvillimi web, aktualisht Junior SEO.',
      'about.p1': 'Jam <strong>Agon Mustafaj</strong>, student i <strong>Shkencave Kompjuterike</strong> në <strong>Universitetin e Prishtinës</strong>. Përkrah studimeve punoj si <strong>Junior SEO te <a class="company-link" href="https://thenovalab.com/" target="_blank" rel="noopener noreferrer">thenovalab</a></strong> në Prishtinë, Kosovë.',
      'about.p2': 'Pjesën më të madhe të kohës e kaloj te <a class="company-link" href="/projects/">zhvillimi web</a>: ndërtoj webfaqe responsive në HTML, CSS dhe JavaScript, nga struktura e parë deri te faqja live. <a class="company-link" href="/experience/">Puna ime si Junior SEO</a> e plotëson pjesën tjetër të pamjes, me SEO teknik, optimizim on-page, lidhje të brendshme dhe strukturë sajti, që ajo çka ndërtoj të mund edhe të gjendet.',
      'about.p3': 'Më intereson gjithashtu inteligjenca artificiale dhe si hyn ajo në punën e përditshme të zhvillimit, nga kodi me ndihmën e AI-së deri te kuptimi se si sistemet e kërkimit dhe AI-së e lexojnë një faqe. Përveç kësaj, kam zhvilluar njohuri në analizë të dhënash, Python, Power BI, Excel, DAX dhe modelim të dhënash përmes <a class="company-link" href="/certifications/">kurseve dhe mësimit personal</a>.',
      'about.p4': 'Mësoj duke ndërtuar. Ky portofol i mbledh <a class="company-link" href="/projects/">projektet</a>, <a class="company-link" href="/skills/">aftësitë</a> dhe mësimin tim të vazhdueshëm, që të shihet jo vetëm çfarë di, por edhe si i qasem një problemi.',
      'about.focusLabel': 'Çfarë bëj',
      'about.focusTitle': 'Fushat e punës',
      'about.journeyLabel': 'Rruga',
      'about.journeyTitle': 'Rruga ime',
      'about.uni': 'Universiteti i Prishtinës',
      'about.cs': 'Shkenca kompjuterike',
      'about.current': 'Në vazhdim',
      'about.webProjects': 'Projekte webi',
      'about.webProjectsSub': 'Ndërtoj webfaqe reale',
      'about.learnAlways': 'Mësim i vazhdueshëm',
      'about.learnAlwaysSub': 'Gjithmonë në rritje',
      'about.viewProjects': 'Shiko projektet',

      'services.label': 'Shërbime',
      'services.title': 'Webfaqe dhe përvoja dixhitale',
      'services.lead': 'Dizajnoj dhe ndërtoj webfaqe për biznese që duan të duken serioze dhe t\'ia bëjnë të lehtë klientit kontaktin. Çdo faqe ndërtohet me HTML, CSS dhe JavaScript të pastër.',
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
      'contact.lead': 'Më shkruaj drejtpërdrejt me email, më telefono ose më gjej në LinkedIn. Jam i vendosur në Prishtinë, Kosovë.',
      'contact.invalidEmail': 'Shkruaj një email të vlefshëm.',

      'projects.label': 'Portofol',
      'projects.title': 'Çfarë kam ndërtuar',
      'projects.lead': 'Projekte webi që i kam dizajnuar dhe ndërtuar, secili me studim rasti për rolin tim, teknologjitë dhe çfarë mësova.',

      'skills.label': 'Aftësi',
      'skills.title': 'Aftësi dhe teknologji',
      'skills.lead': 'Teknologjitë me të cilat punoj në zhvillim web dhe SEO, si dhe fushat që i kam studiuar përmes kurseve dhe mësimit personal.',

      'education.label': 'Akademike',
      'education.title': 'Arsimi',
      'education.lead': 'Formimi akademik dhe studimet në vazhdim në Shkenca Kompjuterike në Universitetin e Prishtinës.',
      'education.cs': 'Shkenca kompjuterike',
      'education.meta': 'Universiteti i Prishtinës · Prishtinë, Kosovë',
      'education.dates': 'Në vazhdim',
      'education.info': 'Studime bachelor në Shkenca Kompjuterike, baza e punës sime në zhvillim web dhe SEO.',

      'experience.label': 'Karriera',
      'experience.title': 'Përvoja',
      'experience.lead': 'Rruga ime profesionale dhe roli aktual si Junior SEO.',
      'experience.meta': 'thenovalab · Prishtinë, Kosovë',
      'experience.dates': '1 korrik – Në vazhdim',
      'experience.r1': 'SEO teknik: crawlability, indeksim dhe strukturë e sajtit',
      'experience.r2': 'SEO on-page: tituj, meta përshkrime, headings dhe optimizim i përmbajtjes',
      'experience.r3': 'Lidhje të brendshme dhe arkitekturë informacioni',
      'experience.r4': 'Kontrolle të sitemap-it dhe indeksimit',
      'experience.r5': 'Auditime SEO dhe optimizim i webfaqeve',
      'experience.r6': 'Kërkim fjalësh kyçe dhe dukshmëri në kërkim',

      'certs.label': 'Të mësuarit',
      'certs.title': 'Certifikata dhe mësim i vazhdueshëm',
      'certs.lead': 'Certifikata kursesh nga Ahrefs, Coursera, Credly dhe KREN, për SEO, Python, Power BI, Excel, rrjeta, DevOps dhe baza të kibernetikës. Këto tregojnë çfarë kam studiuar, jo përvojë profesionale pune.',
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
      'blog.d4': 'Si e lidh të mësuarit e AI-së me zhvillimin web, SEO-në dhe lëndët e mia në Shkenca Kompjuterike.',
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
      'cv.p1': 'Student i Shkencave Kompjuterike në Universitetin e Prishtinës dhe Junior SEO te <a class="company-link" href="https://thenovalab.com/" target="_blank" rel="noopener noreferrer">thenovalab</a>. I fokusuar te zhvillimi web dhe SEO teknik, me interes në inteligjencën artificiale. Njohuri në Python, Power BI, Excel dhe DAX të fituara përmes kurseve.',
      'cv.seoRole': 'SEO teknik dhe on-page: crawlability dhe indeksim, tituj e meta përshkrime, headings, lidhje të brendshme, kontrolle të sitemap-it, auditime faqesh dhe kërkim fjalësh kyçe.',
      'cv.eduLine': 'Shkenca kompjuterike, Universiteti i Prishtinës',
      'cv.banese': 'Platformë qiraje me kërkim pronash, rrjedha për qiramarrës dhe qiradhënës, kontrata e nënshkrime dixhitale.',
      'cv.hoxha': 'Webfaqe shumëgjuhëshe biznesi për një zejtari, me galeri para/pas dhe rrugë të qarta kontakti.',
      'cv.dev': 'Zhvillim:',
      'cv.seo': 'SEO:',
      'cv.marketing': 'Marketing:',
      'cv.data': 'Të dhëna (nga kurset):',
      'cv.design': 'Dizajn:',
      'cv.certs': 'Certifikata',
      'cv.ahrefs': 'Verifiko certifikatën Ahrefs Marketing Platform',
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
      'hoxha.lead': 'Webfaqe shumëgjuhëshe për një biznes zejtarie, e ndërtuar për ta paraqitur punën dhe për ta bërë të lehtë kontaktin.',
      'hoxha.idea': 'Një biznes zejtarie shitet më së miri duke e treguar punën e kryer, por ajo punë ishte e shpërndarë nëpër telefona e mesazhe, pa një vend ku t\'i drejtohej klienti. Qëllimi ishte një webfaqe që e vë zanatin në plan të parë, u përgjigjet pyetjeve që klientët bëjnë gjithmonë dhe e bën kontaktin një prekje të vetme.',
      'hoxha.built': 'E ndërtova faqen e plotë: një hero që e thotë qartë çfarë bën biznesi, një galeri para/pas e punëve të kryera, shpjegim i thjeshtë i procesit, pyetje të shpeshta, dëshmi klientësh dhe rrugë kontakti me formë e me WhatsApp. Një ndërrues gjuhe u mundëson vizitorëve ta lexojnë në gjuhën e tyre.',
      'hoxha.ux': 'Faqja e çon vizitorin nga përshtypja e parë, te prova e punës, te kontakti. Hierarki e qartë, para/pas dhe dëshmi nga klientët krijojnë besim.',
      'hoxha.design': 'Dizajni vë theksin te profesionalizmi dhe zanati. Imazhe të forta në hero, layout që ndërton besim dhe sistem vizual i pastër, pa e ngadalësuar faqen në telefon.',
      'hoxha.tech': 'Sajt statik në HTML, CSS dhe JavaScript të pastër, i publikuar në Netlify, pa CMS për t\'u mirëmbajtur dhe pa gjë që e ngadalëson ngarkimin e parë. HTML-ja semantike e mban strukturën, CSS-ja responsive layout-in, ndërsa JavaScript-i drejton ndërruesin e gjuhës dhe galerinë.',
      'hoxha.seo': 'Strukturë me tituj të rregullt, metadata të qarta dhe përmbajtje të organizuar. Seksionet e punëve dhe kontaktit janë të lexueshme për njerëzit dhe për motorët e kërkimit.',
      'hoxha.learned': 'Ndërtimi i përmbajtjes shumëgjuhëshe më mësoi ta mbaj tekstin jashtë markup-it dhe në një vend të vetëm, përndryshe çdo ndryshim kërkon redaktimin e së njëjtës fjali dy herë. Mësova gjithashtu se për këtë lloj biznesi rruga e kontaktit ka më shumë rëndësi se forma: shumica preferojnë ta prekin WhatsApp-in sesa të shkruajnë në një formë, prandaj ajo duhej të dukej nga çdo pikë e faqes.',
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
      'banese.lead': 'Platformë qiraje ku qiramarrësit kërkojnë banesa dhe qiradhënësit i menaxhojnë njoftimet, me kontrata, nënshkrime dhe verifikim pagese në formë dixhitale.',
      'banese.idea': 'Gjetja e një banese me qira në Kosovë zakonisht do të thotë shfletim postimesh në rrjete sociale, pa filtra, pa strukturë dhe me letra që rregullohen jashtë internetit. Banesë për Ty ishte përgjigjja ime: një vend ku qiramarrësi kërkon si duhet dhe qiradhënësi i menaxhon njoftimet, me hapat e qirasë të zhvendosur në shfletues.',
      'banese.built': 'E dizajnova dhe e ndërtova të gjithën vetë: ndërfaqen, kodin në anën e klientit dhe rrjedhat që i lidhin. Përfshin lista pronash, kërkim dhe filtra, procesin e plotë të qirasë dhe trajtim dixhital të kontratave, nënshkrimeve e verifikimit të pagesës.',
      'banese.ux': 'E ndërtuar rreth dy përdoruesve: qiramarrësi që kërkon banesë dhe qiradhënësi që menaxhon njoftimet. Kërkimi është i thjeshtë dhe proceset e qirasë ndiqen hap pas hapi.',
      'banese.design': 'Ndërfaqja vë theksin te paraqitja e qartë e pronës, kërkimi i arritshëm dhe një rrugë e pastër nga shfletimi te marrëveshja dixhitale.',
      'banese.tech': 'E ndërtuar me HTML, CSS dhe JavaScript të pastër, pa framework, dhe e publikuar në Netlify. Layout-i përdor CSS Grid dhe Flexbox që listat të rirenditen pastër nga telefoni te desktopi, ndërsa kërkimi, filtrat dhe rrjedhat me shumë hapa punojnë në anën e klientit.',
      'banese.seo': 'HTML semantik, hierarki e qartë e faqeve dhe përmbajtje përshkruese. Listat dhe kategoritë janë të organizuara për njerëzit dhe për kërkimin.',
      'banese.learned': 'Pjesa më e vështirë nuk ishte kodi, por gjendja: një rrjedhë qiraje ka shumë hapa dhe secili duhet ta mbajë mend çfarë ndodhi më parë. Ndërtimi për dy lloje përdoruesish njëkohësisht më mësoi se një funksion që e ndihmon qiradhënësin lehtë mund t\'i bëhet pengesë qiramarrësit, prandaj hoqa derisa çdo ekran mori një detyrë të vetme të qartë. Është projekti që ma çoi më larg JavaScript-in.',
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
      'post.a1p2': 'Sot, avantazhi më i fortë nuk është të njohësh çdo mjet të ri. Është t\'i kuptosh qartë problemet, t\'i verifikosh burimet me kujdes dhe ta përdorësh AI-në për ta shpejtuar punën reale, pa e zëvendësuar gjykimin.',
      'post.a1h2': 'Çfarë bie në sy në 2026',
      'post.a1p3': 'Asistentët AI ndihmojnë në kërkim, kod dhe skica përmbajtjeje. Machine learning vazhdon të mbështesë analizën dhe parashikimin. Automatizimi po bëhet më praktik në punën e përditshme dixhitale. Në të njëjtën kohë, besimi, saktësia dhe gjykimi njerëzor mbeten thelbësorë.',
      'post.a1p4': 'Për studentë dhe profesionistë të rinj kjo do të thotë të mësosh të dyja anët: themelet teknike dhe aftësinë për ta vlerësuar output-in e AI-së. Nëse bën pyetje më të mira, i verifikon përgjigjet dhe i lidh mjetet me projekte reale, lëviz më shpejt se dikush që vetëm kopjon prompt-e.',
      'post.a1h3': 'Ku e përqendroj vëmendjen',
      'post.a1p5': 'Si student i Shkencave Kompjuterike, i interesuar për zhvillim web dhe SEO, e trajtoj AI-në si bashkëpunëtor. Më ndihmon të eksploroj ide, të gjej gabime më shpejt dhe të kuptoj tema të vështira. Cilësia përfundimtare mbetet vendim i imi.',
      'post.a1p6': 'AI sot i shpërblen ata që ndërtojnë. Teoria ndihmon. Praktika e tregon kuptimin.',
      'post.crumbWeb': 'AI dhe zhvillimi web',
      'post.meta2': 'Nga Agon Mustafaj · 22 prill 2026',
      'post.a2p1': 'Zhvillimi i webit gjithmonë ka ecur shpejt. AI e bëri këtë shpejtësi të ndihet ndryshe. Mund të skicosh struktura HTML, të provosh pattern-e CSS, të gjenerosh ndihma JavaScript dhe të shohësh ide qasshmërie për minuta. Kjo e ndryshon ritmin e ndërtimit të webfaqeve.',
      'post.a2p2': 'Por AI nuk i heq themelet. HTML semantik, arkitekturë e pastër CSS, performanca dhe SEO ende vendosin nëse një webfaqe ndihet profesionale.',
      'post.a2h2': 'Ku ndihmon më shumë AI',
      'post.a2p3': 'AI është e dobishme për skeletin e faqeve, për pattern-e interaksioni, për shpjegimin e gabimeve dhe për krahasimin e opsioneve të dizajnit. Mund të ndihmojë edhe te struktura e përmbajtjes dhe metadata, aty ku web-i takohet me SEO.',
      'post.a2h3': 'Ku njeriu mbetet në krye',
      'post.a2p4': 'Përdoruesi nuk përjeton “kod të gjeneruar”. Përjeton qartësi, shpejtësi, besim dhe dobi. Arkitektura e informacionit, interaksionet me kuptim dhe detajet e fundit kërkojnë gjykim njerëzor.',
      'post.a2p5': 'Rrjedha më e mirë e sotme i lidh të dyja: AI për shpejtësi, zhvilluesi për drejtim. Kështu u qasem webfaqeve në <a href="/projects/">projektet e mia</a>: ndërtoj me kujdes, i përdor mjetet me mençuri dhe e mbaj përvojën përfundimtare të qëllimshme.',
      'post.crumbTech': 'AI dhe teknologjia',
      'post.meta3': 'Nga Agon Mustafaj · 18 shkurt 2026',
      'post.a3p1': 'Teknologjia bëhet më e fuqishme kur në proces shtohet inteligjenca. Jo vetëm ajo e makinës, por edhe të menduarit e qartë njerëzor. AI mund të gjejë modele, të ofrojë opsione dhe të automatizojë hapa. Njerëzit ende përcaktojnë qëllimet, kufijtë dhe cilësinë.',
      'post.a3p2': 'Kjo kombinim është drejtimi i punës dixhitale sot. Produktet pritet të jenë të shpejta, personale, të gjetshme dhe të dobishme. Për këtë duhen programim, dizajn, të dhëna dhe ndërgjegjësim për kërkimin.',
      'post.a3h2': 'Inteligjenca është sistem, jo veçori',
      'post.a3p3': 'Një widget AI nuk e bën automatikisht produktin të zgjuar. Sistemet e zgjuara nisin me të dhëna të pastra, strukturë të mirë dhe rrjedha të menduara. Pastaj AI mund të ndihmojë me rekomandime, njohuri ose përmbajtje, me rezultate më të mira.',
      'post.a3h3': 'Qasja ime',
      'post.a3p4': 'Si student i Shkencave Kompjuterike që ndërton <a href="/projects/">webfaqe</a> dhe punon me SEO, kjo është mënyra si i qasem projekteve: fillimisht struktura dhe përmbajtja, pastaj mjetet. AI hyn natyrshëm kur përmirëson kuptimin, shpejtësinë ose vendimmarrjen, pa krijuar zhurmë.',
      'post.a3p5': 'E ardhmja u takon atyre që e përdorin AI-në me përgjegjësi dhe që nuk i lënë mënjanë themelet e teknologjisë.',
      'post.crumbLearn': 'Të mësuarit e AI-së',
      'post.meta4': 'Nga Agon Mustafaj · 12 dhjetor 2025',
      'post.a4p1': 'Të mësosh AI ndërsa studion Shkenca Kompjuterike mund të të duket shumë. Ka modele, mjete, framework-e dhe njoftime të reja çdo javë. Qasja ime është e thjeshtë: e lidh AI-në me atë që po ndërtoj tashmë.',
      'post.a4p2': 'Kur ndërtoj webfaqe, shoh si mund të ndihmojë AI te vendimet e dizajnit, struktura e përmbajtjes dhe shpejtësia e zhvillimit. Kur ndjek <a href="/certifications/">kurse për të dhëna</a>, shoh si lidhen konceptet e machine learning me analizën. Kur punoj me SEO, mendoj se si kërkimi dhe sistemet AI e kuptojnë informacionin.',
      'post.a4h2': 'Mëso duke i lidhur fushat',
      'post.a4p3': 'Zhvillimi web të mëson strukturën. Kurset për të dhëna të mësojnë evidencën. SEO të mëson zbulueshmërinë. AI bëhet më e dobishme kur qëndron mbi këto aftësi, jo kur i zëvendëson.',
      'post.a4h3': 'Vazhdo të ndërtosh',
      'post.a4p4': 'Mësoj më mirë duke eksperimentuar. Të lexosh për AI ndihmon. Ta përdorësh brenda projekteve reale është më mirë. Prandaj ky portofol është pjesë e të mësuarit: një vend për të praktikuar teknologjinë, për <a href="/projects/">ta treguar punën e ndërtuar</a> dhe për të vazhduar.',
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
