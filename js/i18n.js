/* ============================================
   Language: English only.
   Albanian (sq) UI support removed.
   ============================================ */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'lang';

  var STRINGS = {
    en: {
      'nav.home': 'Home',
      'nav.agodev': 'AgoDev',
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
      'ui.downloadCv': 'Resume',
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
      'ui.tldr': 'TLDR',
      'ui.faq': 'FAQ',
      'ui.visitLive': 'Visit Live Website',
      'footer.navigation': 'Navigation',
      'footer.more': 'More',
      'footer.tagline': 'SEO and web development for businesses, through AgoDev.',
      'footer.resume': 'Resume',
      'footer.freelancer': 'Freelancer in Kosovo',
      'footer.improveSeo': 'SEO audit & fixes',
      'footer.seoKosovo': 'SEO freelancer Kosovo',
      'footer.license': 'Image license',
      'skills.listTitle': 'What each skill covers',
      'blog.lead2': 'Each post is short and comes from real work: building client websites, SEO projects, and what I learn in Computer Science. The newest posts are at the top.',
      'blog.more': 'More from the blog',
      'profile.headline': 'SEO Expert and Web Developer',
      'profile.identity': 'SEO EXPERT × WEB DEV',
      'profile.location': 'Prishtina, Kosovo',
      'profile.university': 'University of Prishtina',
      'wallet.role': 'SEO Expert and Web Developer',
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
      'terminal.focus': 'SEO expert\nWeb development\nTechnical SEO\nAgoDev',
      'terminal.status': 'Taking projects...\nBuilding sites...\nShipping...',
      'cert.open': 'Open',
      'cert.view': 'View Certificate',
      'cert.count': '21 Learning Credentials',
      'cv.contactFull': 'Contact me for the full CV',
      'cv.mailSubject': 'Request for full CV',
      'home.statement': 'I work as an SEO expert and web developer. AgoDev is where that work lives: search visibility, websites, and the projects I have shipped.',
      'home.heroRole': 'SEO Expert x Web Developer',
      'home.available': 'Available for SEO and web projects',
      'home.openAgodev': 'Open AgoDev',
      'home.startProject': 'Start a project',
      'home.labelWhat': 'For clients',
      'home.whatTitle': 'SEO and websites that bring in work',
      'home.whatLead': 'SEO and web development for businesses that need to be found in search, and a site customers can actually use.',
      'home.build': 'Build',
      'home.buildP': 'Websites for businesses, from the first brief through to a live site.',
      'home.optimize': 'SEO',
      'home.optimizeP': 'Technical SEO, on-page work, audits and site structure so a business can be found.',
      'home.explore': 'Use AI',
      'home.exploreP': 'AI tools where they speed the build. The site stays yours.',
      'home.design': 'Design',
      'home.designP': 'Layouts that stay clear on a phone and on a desktop.',
      'home.analyze': 'Support',
      'home.analyzeP': 'A process you can follow, and help after the site is live.',
      'home.labelServices': 'AgoDev',
      'home.servicesTitle': 'SEO and web development',
      'home.servicesLead': 'AgoDev is the page for the SEO and website work I take on: the services, the process, and the sites already live.',
      'home.seeServices': 'See services and projects',
      'home.seeOnAgodev': 'See this work on AgoDev',
      'agodev.kicker': 'Practice home',
      'agodev.lead': 'AgoDev is Agon Mustafaj\'s practice home in Prishtina for technical SEO, custom business websites, the build process, and client projects already live. This subdomain is the canonical page for that work.',
      'agodev.jumpServices': 'Services',
      'agodev.jumpWork': 'Projects',
      'agodev.jumpProcess': 'Process',
      'agodev.jumpStart': 'Start a project',
      'agodev.workLabel': 'Client work',
      'agodev.workTitle': 'Projects',
      'agodev.workLead': 'Websites I designed and built, with search structure included. Each one has a case study.',
      'agodev.pointer': 'Services and projects live together on AgoDev.',
      'agodev.open': 'Open AgoDev',
      'agodev.formTitle': 'Send a project brief',
      'agodev.formName': 'Name',
      'agodev.formEmail': 'Email',
      'agodev.formPhone': 'Phone',
      'agodev.formProjectType': 'Project type',
      'agodev.formProjectTypePlaceholder': 'Select project type',
      'agodev.formProjectSeo': 'SEO',
      'agodev.formProjectWebsite': 'Website',
      'agodev.formProjectBoth': 'SEO and website',
      'agodev.formBudget': 'Budget (optional)',
      'agodev.formBudgetPlaceholder': 'Select a budget',
      'agodev.formBudgetUnder500': 'Under €500',
      'agodev.formBudget5001500': '€500 to €1,500',
      'agodev.formBudget15003000': '€1,500 to €3,000',
      'agodev.formBudget3000Plus': '€3,000+',
      'agodev.formBudgetUnsure': 'Not sure yet',
      'agodev.formTimeline': 'Timeline (optional)',
      'agodev.formTimelinePlaceholder': 'Select a timeline',
      'agodev.formTimelineAsap': 'As soon as possible',
      'agodev.formTimeline2to4': '2 to 4 weeks',
      'agodev.formTimeline1to2': '1 to 2 months',
      'agodev.formTimelineFlexible': 'Flexible',
      'agodev.formMessage': 'About the project',
      'agodev.formRequired': 'This field is required.',
      'agodev.formSend': 'Send message',
      'agodev.formSending': 'Sending...',
      'agodev.formSent': 'Message sent. I will reply by email.',
      'agodev.formFailed': 'The message did not send. Try again, or email me directly.',
      'agodev.mailSubject': 'AgoDev project inquiry',
      'contact.label': 'Contact',
      'contact.title': "Let's Connect",
      'contact.lead': 'For SEO or a website, send a short project brief below, or reach me by email, phone or LinkedIn.',
      'contact.invalidEmail': 'Please enter a valid email address.',
      'contact.helpTitle': 'What I can help with',
      'contact.helpLead': 'Most messages are about one of these three. If yours is something else, write anyway.',
      'contact.briefTitle': 'What to include in your message',
      'contact.briefLead': 'A short message is fine. These details help me reply with something useful the first time:',
      'contact.brief1': 'What the business does and who its customers are.',
      'contact.brief2': 'Whether you need a new website, SEO for a site you already have, or both.',
      'contact.brief3': 'The address of your current website, if there is one.',
      'contact.brief4': 'Any deadline, launch date or budget you are working with.',
      'contact.more': 'Want to see how the work is done before you write?',
      'certs.groupsTitle': 'How the certificates are grouped',
      'certs.groupSeo': 'SEO and AI search: the Science of Apps Technical SEO certification (100%, with distinction), the KWT Digital On-Page SEO certification, Semrush Academy courses including Keyword Research Essentials, AI Visibility Essentials, technical SEO, on-page SEO and AI search, HubSpot AEO Fundamentals, the Ahrefs platform certification, BrightLocal, and the IBM course on SEO and content marketing.',
      'certs.groupWeb': 'Websites: the KodeKloud DevOps prerequisite course.',
      'certs.groupData': 'Data and AI: Python for Data Science, AI and Development from IBM, Power BI and Excel from Microsoft, and Data Analytics and Artificial Intelligence from KREN.',
      'certs.groupNet': 'Networking and security: two CCNA courses from Logical Operations and the Palo Alto Networks Cybersecurity Foundation.',
      'certs.groupsMore': 'The SEO courses back the work described on the services and experience pages.',
      'meta.agodev.title': 'AgoDev | SEO and Websites for Local Businesses',
      'meta.agodev.desc': 'AgoDev is Agon Mustafaj\'s practice in Prishtina: technical SEO, custom business websites, a clear build process, and client projects already live.',
      'projects.roofman': 'A scroll-driven roof restoration experience where damage heals as you move down the page, built as a cinematic product demo.',
      'projects.mathematics-textbook': 'A calm, step-by-step digital mathematics textbook focused on integration, with worked examples and clear chapter navigation.',
      'projects.banese-per-ty': 'A rental platform concept where tenants search listings and landlords manage them, with digital contracts, signatures, and payment verification.',
      'projects.hoxha-handwerk': 'A multilingual website for a craft and trade business, built to present the work and make it easy for customers to get in touch.',
      'projects.visit-albania': 'A multilingual tourism website for Albania, built together with Drin Kozhani, covering destinations, activities, food and culture, and events in five languages.',
      'projects.malaj-design': 'The portfolio website of graphic designer Andi Malaj. Web design by Andi, development, performance and SEO by me, built with Next.js and Tailwind CSS.',
      'projects.pulse': 'The cosmos in motion: NASA Astronomy Picture of the Day browsing, planets in orbit, and a cinematic window into deep space.',
      'projects.orbit': 'An immersive digital experience where ideas, experiments, and craft share one orbit, with interactive 3D playgrounds and cinematic motion.',
      'skill.HTML': 'Semantic markup for accessible, SEO-friendly web pages.',
      'skill.CSS': 'Modern styling, layouts, and responsive design systems.',
      'skill.JavaScript': 'Interactive experiences and client-side functionality.',
      'skill.Front-End Development': 'Building user-facing interfaces with HTML, CSS, JavaScript and modern UI patterns.',
      'skill.Back-End Web Development': 'Server-side application logic, APIs and data handling for web products.',
      'skill.Full-Stack Development': 'Connecting front-end interfaces with back-end services and databases.',
      'skill.Web Development': 'Building complete websites from structure to deployment.',
      'skill.Responsive Design': 'Interfaces that work across devices and screen sizes.',
      'skill.Java': 'Object-oriented programming for application and software development.',
      'skill.C#': 'Building applications and APIs with the .NET ecosystem.',
      'skill.ASP.NET Core': 'Web apps and services with ASP.NET Core.',
      'skill.ASP.NET Web API': 'Designing and exposing RESTful APIs with ASP.NET.',
      'skill.PHP': 'Server-side scripting for dynamic websites and applications.',
      'skill.Laravel': 'PHP framework for structured web application development.',
      'skill.Angular': 'Component-based front-end applications with Angular.',
      'skill.Bootstrap': 'Responsive layouts and UI components with Bootstrap.',
      'skill.Git': 'Version control and collaboration with Git.',
      'skill.OOP': 'Object-oriented design principles applied across languages.',
      'skill.APIs': 'Designing and integrating application programming interfaces.',
      'skill.MySQL': 'Relational database design and querying with MySQL.',
      'skill.Relational Databases': 'Modeling and working with structured relational data.',
      'skill.Search Engine Optimization (SEO)': 'Improving organic visibility through technical, on-page and content SEO.',
      'skill.Technical SEO': 'Crawlability, indexing, and site structure, applied in my SEO Expert role.',
      'skill.On-page SEO': 'Titles, meta descriptions, headings, and content optimization.',
      'skill.Keyword Research': 'Identifying search intent and relevant keyword opportunities.',
      'skill.Website Structure': 'Information architecture and internal linking.',
      'skill.SEO Auditing': 'Reviewing websites for technical and on-page improvements.',
      'skill.Content Marketing': 'Creating and structuring content that serves users and search.',
      'skill.Competitive Analysis': 'Researching competitors’ search visibility, content and backlink profiles with SEO tools.',
      'skill.Digital Marketing': 'Search, content and channel work across digital marketing platforms.',
      'skill.Marketing Analytics': 'Measuring search visibility and marketing performance with platform data and reports.',
      'skill.Content Strategy': 'Planning content that supports audience needs and search goals.',
      'skill.Marketing Strategy': 'Aligning channels, messaging and goals into a coherent marketing plan.',
      'skill.Social Media Marketing': 'Using social channels to reach audiences and support brand visibility.',
      'skill.WordPress': 'Building and managing content-driven sites with WordPress.',
      'skill.Google Analytics': 'Tracking traffic, behavior and conversion signals in Google Analytics.',
      'skill.Python': 'Programming and data analysis fundamentals, learned at university and reinforced with courses.',
      'skill.Pandas': 'Working with datasets in Python, learned at university and reinforced with courses.',
      'skill.NumPy': 'Numerical computing in Python, learned at university and reinforced with courses.',
      'skill.SQL': 'Querying and structuring data with SQL.',
      'skill.Power BI': 'Power Query, data modeling, and visualization, learned at university and reinforced with courses.',
      'skill.Excel': 'Preparing and organizing data in spreadsheets, learned at university and reinforced with courses.',
      'skill.DAX': 'Expressions for Power BI models, learned at university and reinforced with courses.',
      'skill.Data Modeling': 'Structuring data for reporting, learned at university and reinforced with courses.',
      'skill.Artificial Intelligence': 'Exploring AI tools and AI-assisted development.',
      'skill.Programming': 'Problem-solving through code across multiple languages.',
      'skill.Modern Web Technologies': 'Staying current with evolving web standards and tools.',
      'skill.Software Development': 'Building software with clear structure, iteration and delivery habits.',
      'skill.UI/UX': 'User-centered design thinking and interface craft.',
      'skill.User Interface Design': 'Designing clear layouts, hierarchy and visual interface systems.',
      'skill.Web Design': 'Visual design for web experiences.',
      'skill.Graphic Design': 'Visual communication for digital and brand materials.',
      'skill.Interaction Design': 'Meaningful micro-interactions and user flows.',
      'skill.Project Management': 'Planning work, priorities and delivery across projects.',
      'skill.Problem Solving': 'Breaking down problems and shipping practical solutions.',
      'skill.Leadership': 'Guiding collaboration and ownership within a team.',
      'skill.Communication': 'Clear written and spoken communication with teammates and stakeholders.',
      'skill.Teamwork': 'Working effectively with others to deliver shared outcomes.',
      'skillcat.Development': 'Development',
      'skillcat.SEO': 'SEO',
      'skillcat.Marketing': 'Marketing',
      'skillcat.Data Analytics': 'Data Analytics',
      'skillcat.AI & Technology': 'AI & Technology',
      'skillcat.Design': 'Design',
      'skillcat.Professional': 'Professional',
      'meta.home.title': 'Agon Mustafaj | SEO Expert and Web Developer',
      'meta.home.desc': 'SEO expert and web developer in Prishtina, Kosovo. Through AgoDev I handle technical SEO and build websites that bring in clients.',
      'meta.about.title': 'About Agon Mustafaj | SEO and Web Developer',
      'meta.about.desc': 'SEO expert and web developer in Prishtina, Kosovo. AgoDev is the practice for search visibility and client websites, with studies and SEO work.',
      'meta.projects.title': 'Projects | Agon Mustafaj SEO and Web Work',
      'meta.projects.desc': 'Selected web projects with live demos: Malaj Design, Roofman, Mathematics Textbook, Hoxha Handwerk and VisitAlbania, each with a case study.',
      'meta.services.title': 'SEO and Websites for Businesses | Agon Mustafaj',
      'meta.services.desc': 'Portfolio overview of SEO and website work for businesses. Full services, projects, process, and the project brief live on AgoDev.',
      'services.label': 'Services',
      'services.title': 'SEO and web development',
      'services.lead': 'This page is a short portfolio overview. AgoDev is the practice home for the full offer, shipped projects, the build process, and the project brief.',
      'services.overviewLabel': 'On AgoDev',
      'services.overviewTitle': 'What the practice covers',
      'services.overviewLead': 'Use AgoDev for the detailed services, client work, process steps, and contact form. This portfolio page only points there.',
      'services.overview1': 'Technical SEO, on-page work, and search structure',
      'services.overview2': 'Custom business websites in HTML, CSS, and JavaScript',
      'services.overview3': 'Launch checks for contact paths, sitemaps, and indexing',
      'services.overview4': 'Case studies of sites already live for local businesses',
      'services.improveLink': 'Paid SEO audit & fixes',
      'services.seoKosovoLink': 'SEO freelancer Kosovo',
      'services.emailMe': 'Email me',
      'services.allContact': 'All contact options',
      'services.mailSubject': 'SEO and a website for my business',
      'services.offerLabel': 'What you get',
      'services.offerTitle': 'SEO and websites, built together',
      'services.offerLead': 'Search visibility and the website, done together. Technical SEO, on-page work, and a site your customers can use.',
      'services.card1': 'Technical SEO',
      'services.card1p': 'Crawlability, indexing, site structure and audits so the business can be found.',
      'services.card2': 'Web development',
      'services.card2p': 'A business website in clean HTML, CSS and JavaScript, from the brief to a live site.',
      'services.card3': 'On-page SEO',
      'services.card3p': 'Titles, meta descriptions, headings and content structured for search.',
      'services.card4': 'Search structure',
      'services.card4p': 'Internal links and page architecture so people and search engines can move through the site.',
      'services.card5': 'Launch and indexing',
      'services.card5p': 'The site goes live with contact paths, a sitemap check and indexing in place.',
      'services.whoLabel': "Who it's for",
      'services.whoTitle': 'Built for real local businesses',
      'services.whoLead': 'Workshops, trades, studios, shops, and service companies that need to be found in search and need a real website.',
      'services.who1': 'Craft and trade businesses',
      'services.who2': 'Local service companies',
      'services.who3': 'Studios and professional practices',
      'services.who4': 'Shops that want a proper website',
      'services.who5': 'Teams that want inquiries, not just a brochure',
      'services.who6': 'Businesses that need more than one language',
      'services.processLabel': 'Process',
      'services.processTitle': 'From brief to live site',
      'services.step1': 'Brief',
      'services.step1p': 'We clarify what the business does, who it serves, and what search and the website need to achieve.',
      'services.step2': 'Search structure',
      'services.step2p': 'Keywords, pages, headings and internal links are mapped before the build.',
      'services.step3': 'Design & build',
      'services.step3p': 'A custom website, not a generic template, built in clean HTML, CSS and JavaScript, with on-page SEO.',
      'services.step4': 'Launch',
      'services.step4p': 'The site goes live with contact paths, a sitemap and indexing checks.',
      'services.ctaLabel': 'Start a project',
      'services.ctaTitle': 'Tell me about the business',
      'services.ctaLead': "If you need SEO or a website that presents the company clearly and can be found in search, send a short note. I'll reply with next steps.",
      'meta.freelancer.title': 'SEO Freelancer in Kosovo | Agon Mustafaj',
      'meta.freelancer.desc': 'SEO freelancer in Kosovo for technical SEO, on-page work and local search. Based in Prishtina, serving businesses nationwide.',
      'meta.improve.title': 'SEO Audit & Fixes Service | Agon Mustafaj',
      'meta.improve.desc': 'Paid SEO audit and fixes for your site: indexing, speed, titles, structure, and Search Console tracking by a Kosovo specialist.',
      'meta.seoKosovo.title': 'SEO Freelancer Kosovo | Hire in Prishtina',
      'meta.seoKosovo.desc': 'Hire an SEO freelancer in Kosovo for audits, ranking fixes and local search. Direct work with Agon Mustafaj in Prishtina.',
      'meta.skills.title': 'SEO and Web Developer Skills | Agon Mustafaj',
      'meta.skills.desc': 'SEO skills and the technologies used to build client websites through AgoDev, plus coursework in Python, Power BI, Excel and data work.',
      'meta.education.title': 'Education | Agon Mustafaj, Computer Science',
      'meta.education.desc': 'Computer Science studies at the University of Prishtina, the academic base behind the SEO and web development work done through AgoDev.',
      'meta.experience.title': 'Experience | Agon Mustafaj as SEO Expert',
      'meta.experience.desc': 'SEO and web development through AgoDev, plus the SEO Expert role at Novalab SEO Agency: technical SEO, on-page work, links and site structure.',
      'meta.certifications.title': 'Certifications | Agon Mustafaj SEO Courses',
      'meta.certifications.desc': 'Course certificates from Semrush, HubSpot, Ahrefs, BrightLocal, KWT Digital, Coursera and KREN, covering SEO, AI search, Python, Power BI and Excel.',
      'meta.blog.title': 'Blog Posts | Agon Mustafaj on AI and Web',
      'meta.blog.desc': 'Articles on artificial intelligence, web development and technology, written while building client websites and learning what holds up in practice.',
      'meta.contact.title': 'Contact | Agon Mustafaj, SEO and Web Dev',
      'meta.contact.desc': 'Start an SEO or website project in Prishtina, Kosovo. Reach AgoDev by the form, email, phone, LinkedIn or Facebook and get a reply.',
      'meta.cv.title': 'CV | Agon Mustafaj, SEO Expert and Web Dev',
      'meta.cv.desc': 'A CV for an SEO expert and web developer: AgoDev websites, technical SEO at Novalab SEO Agency, Computer Science studies and course certificates.',
      'meta.404.title': 'Page Not Found | Agon Mustafaj Portfolio',
      'meta.404.desc': 'This page could not be found. Go back to the homepage, or open AgoDev for SEO, web development, client projects, the build process and contact.',
      'about.completed': 'Completed',
      'dyn.three-things-i-check-before-i-publish-a-site.title': 'Three things I check before I publish a site',
      'dyn.three-things-i-check-before-i-publish-a-site.pageTitle': 'Three Checks Before I Publish | Agon Mustafaj',
      'dyn.three-things-i-check-before-i-publish-a-site.cat': 'Web',
      'dyn.three-things-i-check-before-i-publish-a-site.desc': 'Before a site goes live, three checks matter: the title, how it reads on a phone, and how easily a visitor can get in touch. Short, and easy to miss.',
      'dyn.three-things-i-check-before-i-publish-a-site.short': 'Before a site goes live, I check the title, how it reads on a phone, and how easily a visitor can get in touch',
      'dyn.three-things-i-check-before-i-publish-a-site.meta': 'By Agon Mustafaj · October 11, 2026 · 1 min read',
      'dyn.three-things-i-check-before-i-publish-a-site.crumb': 'Three things I check before I publish a site',
      'dyn.three-things-i-check-before-i-publish-a-site.tldr': 'Before publishing, check that the title says what the site is, the layout works on a phone without zooming, and contact is one step away.',
      'dyn.three-things-i-check-before-i-publish-a-site.faq1q': 'What should the browser title say before you publish?',
      'dyn.three-things-i-check-before-i-publish-a-site.faq1a': 'The browser title is the first line someone sees in Google. It should read clearly: who you are and what you offer, not only a business name.',
      'dyn.three-things-i-check-before-i-publish-a-site.faq2q': 'Why check the site on a phone before publishing?',
      'dyn.three-things-i-check-before-i-publish-a-site.faq2a': 'Most visitors arrive on a phone. If text is cut off, a button slips under the menu, or a photo covers the call to action, fix that before the site goes live.',
      'dyn.three-things-i-check-before-i-publish-a-site.faq3q': 'How easy should contact be on a new site?',
      'dyn.three-things-i-check-before-i-publish-a-site.faq3a': 'If someone wants to call or write today, they should find the form, WhatsApp, or phone number immediately. A good-looking site that never leads to contact leaves the visitor halfway there.',
      'dyn.three-things-i-check-before-i-publish-a-site.body': '<p>A site can look finished on my computer and still not be ready for a visitor. Before I publish it, I run through three short checks. They do not take long, and they have saved me from mistakes that show up immediately.</p><h2>The title should say what the site is</h2><p>The browser title is the first line someone sees in Google. If it is only a business name, the visitor cannot tell whether they will find the service they need. I write it so it reads clearly: who you are and what you offer.</p><h2>It has to be readable on a phone without zooming</h2><p>I open the site on a narrow screen. If the text is cut off, a button slips under the menu, or a photo covers the call to action, I fix that before publishing. Most visitors arrive on a phone.</p><h2>Contact should be one step, not a search</h2><p>At the end I ask myself: if I wanted to call or write today, would I find the way immediately? The form, WhatsApp, or phone number needs to be visible. A good-looking site that never leads to contact leaves the visitor halfway there. These three points are my short list. The design can change. These checks stay.</p>',
      
      'dyn.how-to-improve-website-seo.title': 'How to Improve Your Website’s SEO: Checklist and When to Hire',
      'dyn.how-to-improve-website-seo.pageTitle': 'How to Improve Website SEO: Full Checklist',
      'dyn.how-to-improve-website-seo.cat': 'WEB & SEO',
      'dyn.how-to-improve-website-seo.desc': 'Practical checklist to improve website SEO: on-page, technical SEO, Search Console, and when to hire help instead of DIY.',
      'dyn.how-to-improve-website-seo.seoDesc': 'Practical SEO checklist from a Kosovo specialist: on-page work, technical SEO, Search Console, and when DIY stops working.',
      'dyn.how-to-improve-website-seo.short': 'Checklist for on-page, technical SEO, Search Console, and when to hire.',
      'dyn.how-to-improve-website-seo.tldr': 'Treat SEO as a checklist: match search intent, fix on-page and technical issues, strengthen internal links, and measure in Search Console. Hire help when DIY stalls.',
      'dyn.how-to-improve-website-seo.meta': 'By Agon Mustafaj · Updated November 16, 2026 · 6 min read',
      'dyn.how-to-improve-website-seo.crumb': 'How to Improve Your Website’s SEO',
      'dyn.how-to-improve-website-seo.body': '<p>If you want to know how to improve website SEO without guessing, treat it as a checklist: match search intent, fix on-page clarity, clear technical blockers, strengthen internal links, and measure results in Google Search Console. This guide is the DIY playbook I use as an SEO specialist in Kosovo. If you would rather have the audit and fixes done for you, that is a separate paid service on <a href="/improve-seo/">Improve your SEO</a>.</p><p>This page is for people searching “how to improve SEO”, “improve website SEO”, or “how to improve on-page SEO”. It is educational. The commercial URL for paid help is <a href="/improve-seo/">/improve-seo/</a>.</p><div class="services-cta" style="margin:1.75rem 0;text-align:left;padding:1.25rem 1.5rem"><span class="label">Want this done for you?</span><p style="margin:0.5rem 0 1rem">I audit the site, fix indexing, titles, speed and structure, then show you the change in Search Console.</p><div class="btn-group" style="justify-content:flex-start"><a href="/improve-seo/" class="btn btn-primary">SEO audit &amp; fixes</a><a href="/seo-freelancer-kosovo/" class="btn btn-secondary">Hire SEO in Kosovo</a></div></div><h2>SEO improvement checklist</h2><p>Use this order. Skipping technical problems to rewrite titles rarely works.</p><ol><li><a href="#search-intent">Confirm search intent</a> for your main queries</li><li><a href="#keyword-research">Do keyword research</a> tied to business value</li><li><a href="#on-page-seo">Improve on-page SEO</a> (titles, meta, headings, content)</li><li><a href="#technical-seo">Fix technical SEO</a> (crawl, index, sitemap, mobile, speed)</li><li><a href="#content-quality">Strengthen content depth</a> where pages are thin</li><li><a href="#internal-links">Build internal links</a> to important pages</li><li><a href="#backlinks">Earn relevant backlinks</a> without spam</li><li><a href="#ux-performance">Improve UX and performance</a></li><li><a href="#search-console">Measure in Search Console</a></li><li><a href="#when-to-hire">Decide when to hire</a> vs keep DIY</li></ol><h2 id="search-intent">1. Understand search intent</h2><p>Before optimizing a website, understand what users are searching for and why. Search intent is the purpose behind a query: learn something, compare options, find a brand, or hire a service.</p><p>Someone searching “what is technical SEO” wants an explanation. Someone searching “SEO freelancer Kosovo” wants a person to hire. Matching that intent is the first step to improve SEO performance.</p><p><strong>Practical tip:</strong> Open Google for your target keyword and shape your page to match what already ranks, then make it clearer and more useful.</p><h2 id="keyword-research">2. Conduct keyword research</h2><p>Keyword research finds the terms your audience uses. Prefer relevance and business value over raw volume.</p><ul><li><strong>Relevance:</strong> Does the keyword match your offer?</li><li><strong>Search intent:</strong> What does the user expect?</li><li><strong>Competition:</strong> Can you realistically rank?</li><li><strong>Search volume:</strong> Is there enough demand?</li><li><strong>Business value:</strong> Will the traffic matter?</li></ul><p>Tools such as Google Keyword Planner, Google Search Console, Ahrefs, and Semrush help. Specific queries often convert better than broad head terms.</p><h2 id="on-page-seo">3. Improve on-page SEO</h2><p>On-page SEO is how each page’s content and HTML explain the topic to people and search engines. If you are asking how to improve on-page SEO, start here.</p><h3>Title tags</h3><p>Write a unique, descriptive title for each important page. Include the primary keyword naturally. Titles that promise a checklist, outcome, or clear angle usually earn more clicks than generic “practical guide” phrasing.</p><h3>Meta descriptions</h3><p>Meta descriptions are not a direct ranking factor, but they influence CTR. Summarize the outcome in one or two sentences.</p><h3>Headings and content</h3><p>Use one H1, then H2/H3 sections that answer real questions. Put the main answer early. Avoid keyword stuffing.</p><p><strong>Practical tip:</strong> Review pages with impressions but low CTR in Search Console and rewrite their titles and openings first.</p><h2 id="technical-seo">4. Improve technical SEO</h2><p>Technical SEO is different from on-page SEO. On-page is what the page says. Technical SEO is whether Google can crawl, understand, and index it reliably.</p><ul><li><strong>Crawlability:</strong> Important pages reachable through links and navigation</li><li><strong>Indexing:</strong> No accidental <code>noindex</code> on money pages</li><li><strong>XML sitemap:</strong> Canonical URLs you want discovered</li><li><strong>Robots.txt:</strong> Not blocking key resources</li><li><strong>Canonical tags:</strong> Handling near-duplicates</li><li><strong>Mobile usability:</strong> Readable without zooming</li><li><strong>Page performance:</strong> Faster loads, lean scripts and images</li></ul><p>Google Search Console is the fastest way to see indexing problems. Fix those before writing another blog post.</p><h2 id="content-quality">5. Create high-quality content</h2><p>Effective SEO content answers the main question, shows experience, and stays updated. Prefer one strong page per intent over many thin posts that compete with each other.</p><p>Connect related guides with internal links so readers and search engines see the relationship between topics.</p><h2 id="internal-links">6. Build a strong internal linking structure</h2><p>Internal links help visitors and search engines find important pages. Use descriptive anchors, link to related guides and services, and remove orphan pages.</p><p>Example: this guide links to the paid <a href="/improve-seo/">SEO audit and fixes service</a>, <a href="/services/">services</a>, and <a href="/seo-freelancer-kosovo/">SEO freelancer in Kosovo</a> hire page: different intents, different URLs.</p><h2 id="backlinks">7. Earn quality backlinks</h2><p>Relevant editorial links help discovery and authority. Publish useful resources, share expertise, and avoid buying manipulative links or joining link schemes.</p><h2 id="ux-performance">8. Improve user experience and website performance</h2><p>Slow pages, confusing navigation, and hard-to-read layouts hurt both users and SEO. Use responsive design, compress images, keep navigation simple, and watch Core Web Vitals as a UX signal, not a magic ranking switch.</p><h2 id="search-console">9. Measure SEO performance with Google Search Console</h2><p>To improve your SEO performance, measure it. Search Console shows clicks, impressions, CTR, average position, indexing issues, and queries.</p><p>Prioritize:</p><ul><li>Pages with many impressions and low CTR (title/meta opportunity)</li><li>Queries around positions 11-20 (content and internal-link opportunity)</li><li>Indexing errors on important URLs</li></ul><p>Evaluate weeks and months, not single-day swings. Combine Search Console with Analytics to see what visitors do after they arrive.</p><h2>10. Avoid common SEO mistakes</h2><ul><li>Keyword stuffing</li><li>Near-duplicate pages without a purpose</li><li>Broken internal links</li><li>Ignoring mobile users</li><li>Never checking indexing</li><li>Spammy backlinks</li><li>Publishing for bots instead of people</li><li>Changing strategy without data</li></ul><h2 id="when-to-hire">When should you consider hiring help?</h2><p>DIY is enough when you can rewrite titles, fix obvious broken links, submit a sitemap, and publish useful pages. Consider hiring when:</p><ul><li>Important pages stay out of the index</li><li>The site is slow or broken on mobile and you cannot fix it</li><li>You have impressions but almost no clicks for months</li><li>You need a prioritized audit instead of a tool PDF</li><li>You want someone accountable for the fixes, not only advice</li></ul><p>If that is you, use the paid service page: <a href="/improve-seo/">Improve your SEO: audit and fixes</a>. Businesses in Kosovo looking for an SEO freelancer can start at <a href="/seo-freelancer-kosovo/">SEO freelancer Kosovo</a> or the broader <a href="/freelancer-kosove/">freelancer in Kosovo</a> page.</p><h2>Key elements of an SEO review</h2><p>When reviewing a site, check search intent, keywords, titles, meta descriptions, content structure, indexing, sitemap, internal links, performance, mobile usability, content quality, backlinks, and Search Console data. Rank the issues by impact, then fix in that order.</p><h2 id="faq">FAQ: how to improve SEO</h2><h3>How to improve SEO on a website?</h3><p>Match intent, fix on-page clarity, clear technical blockers, strengthen internal links, and measure in Search Console. Start with pages that already appear in search.</p><h3>How to improve website SEO?</h3><p>Follow the checklist above. Depth on a few important URLs beats dozens of thin pages.</p><h3>How to improve on-page SEO?</h3><p>Unique titles and metas, one clear H1, useful headings, and content that answers the query early without stuffing keywords.</p><h3>How to improve your SEO performance?</h3><p>Use Search Console to find low-CTR or position 11-20 queries, improve those pages first, and track progress over weeks.</p><h3>When should you hire someone to improve SEO?</h3><p>When technical issues repeat, time is limited, or DIY changes stop moving the needle. See <a href="/improve-seo/">paid SEO audit and fixes</a>.</p><h2>Conclusion</h2><p>Improving website SEO is ongoing work: intent, content, technical access, internal links, and measurement. There is no single trick for the top of Google. Build pages that help people, keep them crawlable, and improve what the data shows.</p><p><strong>Useful next steps:</strong> follow this checklist on your top pages, or <a href="/improve-seo/">hire me to run the audit and fixes</a>. For local hire intent in Kosovo, see <a href="/seo-freelancer-kosovo/">SEO freelancer Kosovo</a> and <a href="/contact/">contact</a>.</p>',
      'dyn.how-to-improve-website-seo.ctaLabel': 'Done reading?',
      'dyn.how-to-improve-website-seo.ctaTitle': 'Want the SEO work done for you?',
      'dyn.how-to-improve-website-seo.ctaLead': 'Send your website address. I reply with what is holding it back and a clear price for the audit and fixes.',
      'dyn.how-to-improve-website-seo.ctaImprove': 'Improve your SEO (paid)',
      'dyn.how-to-improve-website-seo.ctaKosovo': 'SEO freelancer Kosovo',
      'dyn.how-to-improve-website-seo.ctaContact': 'Contact',
      /* managed-post-i18n:en */
    }
  };

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'sq') localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    return 'en';
  }

  var currentLang = 'en';

  function t(key) {
    var pack = STRINGS.en || {};
    if (pack[key] != null && pack[key] !== '') return pack[key];
    return '';
  }

  function setDocumentLang() {
    document.documentElement.lang = 'en';
    document.documentElement.setAttribute('data-lang', 'en');
  }

  function applyI18n(root) {
    var scope = root || document;
    scope.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n'));
      if (val && el.textContent !== val) el.textContent = val;
    });
    scope.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-html'));
      if (val && el.innerHTML !== val) el.innerHTML = val;
    });
    scope.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-content'));
      if (val && el.getAttribute('content') !== val) el.setAttribute('content', val);
    });
    scope.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-aria'));
      if (val && el.getAttribute('aria-label') !== val) el.setAttribute('aria-label', val);
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
    if (!page) return;
    var titleKey = 'meta.' + page + '.title';
    var descKey = 'meta.' + page + '.desc';
    var title = t(titleKey);
    var desc = t(descKey);
    if (!title) return;
    var path = location.pathname.replace(/\/+$/, '') || '/';
    if (page === 'home' || page === 'about' || page === 'services' || page === 'freelancer' || page === 'improve' || page === 'skills' ||
      page === 'education' || page === 'experience' || page === 'certifications' ||
      page === 'contact' || page === 'cv' || page === '404' ||
      (page === 'projects' && (path === '/projects' || path === '/projects/')) ||
      (page === 'blog' && (path === '/blog' || path === '/blog/'))) {
      document.title = title;
      var meta = document.querySelector('meta[name="description"]');
      if (meta && desc) meta.setAttribute('content', desc);
    }
  }

  function setLang(lang) {
    if (lang !== 'en') return;
    currentLang = 'en';
    try { localStorage.setItem(STORAGE_KEY, 'en'); } catch (e) {}
  }

  function langSwitcherMarkup() {
    return '';
  }

  function bindLangSwitcher() {
    /* English-only: no language switcher */
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
