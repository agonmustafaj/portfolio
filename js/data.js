/* ============================================
   AGON MUSTAFAJ, Portfolio Data Architecture
   Edit this file to update site content easily.
   ============================================ */

const SITE_URL = 'https://agonmustafaj.com';
const PERSON_ID = SITE_URL + '/#agon-mustafaj';
const WEBSITE_ID = SITE_URL + '/#website';

const profile = {
  name: 'Agon Mustafaj',
  givenName: 'Agon',
  familyName: 'Mustafaj',
  initials: 'AM',
  headline: 'SEO Expert and Web Developer',
  tagline: 'I work as an SEO expert and web developer. AgoDev is where that work lives: search visibility, websites, and the projects I have shipped.',
  identity: 'SEO EXPERT × WEB DEV',
  description: 'Agon Mustafaj is an SEO expert and web developer in Prishtina, Kosovo. Through AgoDev he improves search visibility and builds websites for businesses. He also studies Computer Science at the University of Prishtina and works as an SEO Expert at Novalab SEO Agency.',
  location: 'Prishtina, Kosovo',
  university: 'University of Prishtina',
  degree: 'Computer Science',
  role: 'SEO Expert and Web Developer',
  company: 'Novalab SEO Agency',
  companyUrl: 'https://thenovalab.com/',
  image: SITE_URL + '/assets/images/agon-mustafaj.jpg',
  imageId: SITE_URL + '/#agon-mustafaj-image',
  alternateName: ['Agon B. Mustafaj'],
  linkedin: 'https://www.linkedin.com/in/agon-mustafaj/',
  facebook: 'https://www.facebook.com/agon.mustafaj.03/',
  github: 'https://github.com/agonmustafaj/',
  peerlist: 'https://peerlist.io/agonmustafaj',
  calameo: 'https://www.calameo.com/read/0082998447b64bec24a2e',
  startupbase: 'https://startupbase.io/@agonmustafaj',
  instagram: 'https://www.instagram.com/agonmustafaj_/',
  youtube: '',
  email: 'agonmustafaj01@gmail.com',
  phone: '+383 49 622 017',
  telephone: '+38349622017',
  knowsAbout: [
    'Computer Science',
    'Web Development',
    'Search Engine Optimization',
    'Technical SEO',
    'Digital Marketing',
    'Content Marketing',
    'Marketing Analytics',
    'Competitive Analysis',
    'Artificial Intelligence',
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'Power BI',
    'Data Analytics'
  ]
};

const experience = [
  {
    id: 'exp-001',
    title: 'SEO Expert',
    company: 'Novalab SEO Agency',
    location: 'Prishtina, Kosovo',
    startDate: 'September',
    endDate: 'Present',
    responsibilities: [
      'Technical SEO: crawlability, indexing and site structure',
      'On-page SEO: titles, meta descriptions, headings and content optimization',
      'Internal linking and information architecture',
      'Sitemap and indexing checks',
      'SEO audits and website optimization',
      'Keyword research and search visibility'
    ],
    current: true
  },
  {
    id: 'exp-002',
    title: 'Junior SEO - Intern',
    company: 'Novalab SEO Agency',
    location: 'Prishtina, Kosovo',
    startDate: 'July',
    endDate: 'September',
    responsibilities: [
      'Supported technical and on-page SEO work',
      'Assisted with audits, keyword research and site structure tasks'
    ],
    current: false
  }
];

const education = [
  {
    id: 'edu-001',
    degree: 'Computer Science',
    institution: 'University of Prishtina',
    location: 'Prishtina, Kosovo',
    startDate: '',
    endDate: 'Current',
    details: ['Undergraduate studies in Computer Science, the foundation for my work as an SEO expert and web developer.']
  }
];

const skills = [
  { name: 'HTML', category: 'Development', description: 'Semantic markup for accessible, SEO-friendly web pages.', project: '' },
  { name: 'CSS', category: 'Development', description: 'Modern styling, layouts, and responsive design systems.', project: '' },
  { name: 'JavaScript', category: 'Development', description: 'Interactive experiences and client-side functionality.', project: 'Banesë për Ty' },
  { name: 'Front-End Development', category: 'Development', description: 'Building user-facing interfaces with HTML, CSS, JavaScript and modern UI patterns.', project: 'Banesë për Ty' },
  { name: 'Back-End Web Development', category: 'Development', description: 'Server-side application logic, APIs and data handling for web products.', project: '' },
  { name: 'Full-Stack Development', category: 'Development', description: 'Connecting front-end interfaces with back-end services and databases.', project: '' },
  { name: 'Web Development', category: 'Development', description: 'Building complete websites from structure to deployment.', project: 'Hoxha Handwerk' },
  { name: 'Responsive Design', category: 'Development', description: 'Interfaces that work across devices and screen sizes.', project: '' },
  { name: 'Java', category: 'Development', description: 'Object-oriented programming for application and software development.', project: '' },
  { name: 'C#', category: 'Development', description: 'Building applications and APIs with the .NET ecosystem.', project: '' },
  { name: 'ASP.NET Core', category: 'Development', description: 'Web apps and services with ASP.NET Core.', project: '' },
  { name: 'ASP.NET Web API', category: 'Development', description: 'Designing and exposing RESTful APIs with ASP.NET.', project: '' },
  { name: 'PHP', category: 'Development', description: 'Server-side scripting for dynamic websites and applications.', project: '' },
  { name: 'Laravel', category: 'Development', description: 'PHP framework for structured web application development.', project: '' },
  { name: 'Angular', category: 'Development', description: 'Component-based front-end applications with Angular.', project: '' },
  { name: 'Bootstrap', category: 'Development', description: 'Responsive layouts and UI components with Bootstrap.', project: '' },
  { name: 'Git', category: 'Development', description: 'Version control and collaboration with Git.', project: '' },
  { name: 'OOP', category: 'Development', description: 'Object-oriented design principles applied across languages.', project: '' },
  { name: 'APIs', category: 'Development', description: 'Designing and integrating application programming interfaces.', project: '' },
  { name: 'MySQL', category: 'Development', description: 'Relational database design and querying with MySQL.', project: '' },
  { name: 'Relational Databases', category: 'Development', description: 'Modeling and working with structured relational data.', project: '' },
  { name: 'Search Engine Optimization (SEO)', category: 'SEO', description: 'Improving organic visibility through technical, on-page and content SEO.', project: '' },
  { name: 'Technical SEO', category: 'SEO', description: 'Crawlability, indexing, and site structure, applied in my SEO Expert role.', project: '' },
  { name: 'On-page SEO', category: 'SEO', description: 'Titles, meta descriptions, headings, and content optimization.', project: '' },
  { name: 'Keyword Research', category: 'SEO', description: 'Identifying search intent and relevant keyword opportunities.', project: '' },
  { name: 'Website Structure', category: 'SEO', description: 'Information architecture and internal linking.', project: '' },
  { name: 'SEO Auditing', category: 'SEO', description: 'Reviewing websites for technical and on-page improvements.', project: '' },
  { name: 'Content Marketing', category: 'SEO', description: 'Creating and structuring content that serves users and search.', project: '' },
  { name: 'Competitive Analysis', category: 'SEO', description: 'Researching competitors’ search visibility, content and backlink profiles with SEO tools.', project: '' },
  { name: 'Digital Marketing', category: 'Marketing', description: 'Search, content and channel work across digital marketing platforms.', project: '' },
  { name: 'Marketing Analytics', category: 'Marketing', description: 'Measuring search visibility and marketing performance with platform data and reports.', project: '' },
  { name: 'Content Strategy', category: 'Marketing', description: 'Planning content that supports audience needs and search goals.', project: '' },
  { name: 'Marketing Strategy', category: 'Marketing', description: 'Aligning channels, messaging and goals into a coherent marketing plan.', project: '' },
  { name: 'Social Media Marketing', category: 'Marketing', description: 'Using social channels to reach audiences and support brand visibility.', project: '' },
  { name: 'WordPress', category: 'Marketing', description: 'Building and managing content-driven sites with WordPress.', project: '' },
  { name: 'Google Analytics', category: 'Marketing', description: 'Tracking traffic, behavior and conversion signals in Google Analytics.', project: '' },
  { name: 'Artificial Intelligence', category: 'AI & Technology', description: 'Exploring AI tools and AI-assisted development.', project: '' },
  { name: 'Programming', category: 'AI & Technology', description: 'Problem-solving through code across multiple languages.', project: '' },
  { name: 'Modern Web Technologies', category: 'AI & Technology', description: 'Staying current with evolving web standards and tools.', project: '' },
  { name: 'Software Development', category: 'AI & Technology', description: 'Building software with clear structure, iteration and delivery habits.', project: '' },
  { name: 'Python', category: 'Data Analytics', description: 'Programming and data analysis fundamentals, learned at university and reinforced with courses.', project: '' },
  { name: 'Pandas', category: 'Data Analytics', description: 'Working with datasets in Python, learned at university and reinforced with courses.', project: '' },
  { name: 'NumPy', category: 'Data Analytics', description: 'Numerical computing in Python, learned at university and reinforced with courses.', project: '' },
  { name: 'SQL', category: 'Data Analytics', description: 'Querying and structuring data with SQL.', project: '' },
  { name: 'Power BI', category: 'Data Analytics', description: 'Power Query, data modeling, and visualization, learned at university and reinforced with courses.', project: '' },
  { name: 'Excel', category: 'Data Analytics', description: 'Preparing and organizing data in spreadsheets, learned at university and reinforced with courses.', project: '' },
  { name: 'DAX', category: 'Data Analytics', description: 'Expressions for Power BI models, learned at university and reinforced with courses.', project: '' },
  { name: 'Data Modeling', category: 'Data Analytics', description: 'Structuring data for reporting, learned at university and reinforced with courses.', project: '' },
  { name: 'UI/UX', category: 'Design', description: 'User-centered design thinking and interface craft.', project: 'Banesë për Ty' },
  { name: 'User Interface Design', category: 'Design', description: 'Designing clear layouts, hierarchy and visual interface systems.', project: '' },
  { name: 'Web Design', category: 'Design', description: 'Visual design for web experiences.', project: 'Hoxha Handwerk' },
  { name: 'Graphic Design', category: 'Design', description: 'Visual communication for digital and brand materials.', project: '' },
  { name: 'Interaction Design', category: 'Design', description: 'Meaningful micro-interactions and user flows.', project: '' },
  { name: 'Project Management', category: 'Professional', description: 'Planning work, priorities and delivery across projects.', project: '' },
  { name: 'Problem Solving', category: 'Professional', description: 'Breaking down problems and shipping practical solutions.', project: '' },
  { name: 'Leadership', category: 'Professional', description: 'Guiding collaboration and ownership within a team.', project: '' },
  { name: 'Communication', category: 'Professional', description: 'Clear written and spoken communication with teammates and stakeholders.', project: '' },
  { name: 'Teamwork', category: 'Professional', description: 'Working effectively with others to deliver shared outcomes.', project: '' }
];

const projects = [
  {
    id: 'proj-004',
    title: 'Malaj Design',
    slug: 'malaj-design',
    url: 'https://malaj-design.com/',
    description: 'The portfolio website of graphic designer Andi Malaj. Web design by Andi, development, performance and SEO by me, built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Technical SEO', 'Responsive Design'],
    features: [
      'Selected work on the homepage',
      'Work index with twelve projects',
      'Individual project pages',
      'Downloadable PDF brand book',
      'One-tap email and phone contact',
      'Smooth page transitions',
      'JSON-LD structured data',
      'XML image sitemap'
    ],
    role: 'Web Developer, web design by Andi Malaj',
    featured: true,
    number: '01',
    image: '/assets/images/malaj-design.webp'
  },
  {
    id: 'proj-001',
    title: 'Banesë për Ty',
    slug: 'banese-per-ty',
    url: 'https://banese-per-ty.netlify.app/',
    description: 'A rental platform concept where tenants search listings and landlords manage them, with digital contracts, signatures, and payment verification.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    features: [
      'Property discovery',
      'Search and filter experience',
      'Rental workflows',
      'Digital contracts and signatures',
      'Payment verification',
      'Notifications',
      'Tenant and landlord workflows'
    ],
    role: 'Web Developer',
    featured: true,
    number: '02',
    image: '/assets/images/banese-per-ty.webp'
  },
  {
    id: 'proj-002',
    title: 'Hoxha Handwerk',
    slug: 'hoxha-handwerk',
    url: 'https://hoxhahandwerk.netlify.app/',
    description: 'A multilingual website for a craft and trade business, built to present the work and make it easy for customers to get in touch.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Responsive Design'],
    features: [
      'Hero section',
      'Multilingual interface',
      'Trust and values section',
      'Before/after project gallery',
      'Process overview',
      'Testimonials',
      'FAQ section',
      'Contact form',
      'WhatsApp contact',
      'Responsive UX',
      'Conversion-oriented layout'
    ],
    role: 'Web Developer',
    featured: true,
    number: '03',
    image: '/assets/images/hoxha-handwerk.webp'
  },
  {
    id: 'proj-003',
    title: 'VisitAlbania',
    slug: 'visit-albania',
    url: 'https://visitalbaniatoday.netlify.app/',
    description: 'A multilingual tourism website for Albania, built together with Drin Kozhani, covering destinations, activities, food and culture, and events in five languages.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Responsive Design'],
    features: [
      'Full-screen hero slider',
      'Five-language interface',
      'Seven destination categories',
      'Six outdoor activities',
      'Food and culture carousel',
      'Events calendar',
      'Booking links for beach stays',
      'Video, map and tourism statistics',
      'React contact form with validation'
    ],
    role: 'Web Developer, in collaboration with Drin Kozhani',
    featured: true,
    number: '04',
    image: '/assets/images/visit-albania.webp'
  }
];

const certifications = [
  {
    id: 'cert-018',
    platform: 'Yoast',
    title: 'WordPress for Beginners',
    issuer: 'Yoast Academy',
    date: '',
    validUntil: '',
    credentialId: '',
    pdf: '',
    image: 'https://academy.yoast.com/badge/8218/1996528/c775593dbf282deda099d0dd37900681/1/',
    imageFit: 'contain',
    verificationUrl: ''
  },
  {
    id: 'cert-017',
    platform: 'Semrush',
    title: 'Technical SEO and AI Search Essentials with Semrush',
    issuer: 'Semrush',
    date: '29 September 2026',
    validUntil: '29 September 2027',
    credentialId: '5f752fb9b9',
    pdf: '/assets/certificates/technical-seo-ai-search-semrush.pdf',
    image: '/assets/certificates/previews/technical-seo-ai-search-semrush.webp',
    verificationUrl: 'https://static.semrush.com/academy/certificates/5f752fb9b9/agon-mustafaj_25.pdf'
  },
  {
    id: 'cert-016',
    platform: 'HubSpot',
    title: 'AEO Fundamentals',
    issuer: 'HubSpot Academy',
    date: '28 September 2026',
    validUntil: '27 October 2028',
    credentialId: 'b8b30649120c4e779d2f7874e70639f4',
    pdf: '',
    image: '/assets/certificates/previews/aeo-fundamentals.webp',
    verificationUrl: 'https://app.hubspot.com/academy/achievements/b8b30649120c4e779d2f7874e70639f4'
  },
  {
    id: 'cert-015',
    platform: 'BrightLocal',
    title: "A Beginner's Guide to Local SEO",
    issuer: 'BrightLocal',
    date: '28 September 2026',
    validUntil: '',
    credentialId: '',
    pdf: '/assets/certificates/local-seo-brightlocal.pdf',
    image: '/assets/certificates/previews/local-seo-brightlocal.webp',
    verificationUrl: ''
  },
  {
    id: 'cert-014',
    platform: 'Semrush',
    title: 'On-Page SEO and AI Search Essentials with Semrush',
    issuer: 'Semrush',
    date: '25 September 2026',
    validUntil: '25 September 2027',
    credentialId: '66f139a89b',
    pdf: '/assets/certificates/on-page-seo-ai-search-semrush.pdf',
    image: '/assets/certificates/previews/on-page-seo-ai-search-semrush.webp',
    verificationUrl: 'https://static.semrush.com/academy/certificates/66f139a89b/agon-mustafaj_25.pdf'
  },
  {
    id: 'cert-013',
    platform: 'Semrush',
    title: 'SEO Toolkit Crash Course',
    issuer: 'Semrush',
    date: '25 September 2026',
    validUntil: '25 September 2027',
    credentialId: '5fbd360e57',
    pdf: '/assets/certificates/seo-toolkit-crash-course.pdf',
    image: '/assets/certificates/previews/seo-toolkit-crash-course.webp',
    verificationUrl: 'https://static.semrush.com/academy/certificates/5fbd360e57/agon-mustafaj_25.pdf'
  },
  {
    id: 'cert-012',
    platform: 'Semrush',
    title: 'AI Search Operating System',
    issuer: 'Semrush',
    date: '25 September 2026',
    validUntil: '25 September 2027',
    credentialId: '571513bdb0',
    pdf: '/assets/certificates/ai-search-operating-system.pdf',
    image: '/assets/certificates/previews/ai-search-operating-system.webp',
    verificationUrl: 'https://static.semrush.com/academy/certificates/571513bdb0/agon-mustafaj_37.pdf'
  },
  {
    id: 'cert-011',
    platform: 'Semrush',
    title: 'SEO Essentials with Semrush',
    issuer: 'Semrush',
    date: '25 September 2026',
    validUntil: '25 September 2027',
    credentialId: '384351bc27',
    pdf: '/assets/certificates/seo-essentials-semrush.pdf',
    image: '/assets/certificates/previews/seo-essentials-semrush.webp',
    verificationUrl: 'https://static.semrush.com/academy/certificates/384351bc27/agon-mustafaj_25.pdf'
  },
  {
    id: 'cert-010',
    platform: 'Ahrefs',
    title: 'Ahrefs Marketing Platform Certification',
    issuer: 'Ahrefs',
    date: 'August 2026',
    credentialId: 'ff3531083a3a4eaba3174a423614440a',
    pdf: '/assets/certificates/ahrefs-marketing-platform.pdf',
    image: '/assets/certificates/previews/ahrefs-marketing-platform.webp',
    verificationUrl: 'https://ahrefs.com/academy/certificate/ff3531083a3a4eaba3174a423614440a'
  },
  {
    id: 'cert-003',
    platform: 'Coursera',
    title: 'Search Engine Optimization and Content Marketing',
    issuer: 'IBM',
    date: '8 July 2026',
    credentialId: 'G1X8E26TPLD1',
    pdf: '/assets/certificates/seo-content.pdf',
    image: '/assets/certificates/previews/seo-content.webp',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/G1X8E26TPLD1'
  },
  {
    id: 'cert-008',
    platform: 'Coursera',
    title: 'DevOps Prerequisite Course',
    issuer: 'KodeKloud',
    date: '1 July 2026',
    credentialId: 'CJKIXKGKMLSR',
    pdf: '/assets/certificates/devops-prerequisite.pdf',
    image: '/assets/certificates/previews/devops-prerequisite.webp',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/CJKIXKGKMLSR'
  },
  {
    id: 'cert-001',
    platform: 'Coursera',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: '30 June 2026',
    credentialId: 'DHJ8PUFMXBCR',
    pdf: '/assets/certificates/python-data-science.pdf',
    image: '/assets/certificates/previews/python-data-science.webp',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/DHJ8PUFMXBCR'
  },
  {
    id: 'cert-002',
    platform: 'Coursera',
    title: 'Palo Alto Networks Cybersecurity Foundation',
    issuer: 'Palo Alto Networks',
    date: '30 June 2026',
    credentialId: 'WEKSDPR7Q473',
    pdf: '/assets/certificates/palo-alto-cybersecurity.pdf',
    image: '/assets/certificates/previews/palo-alto-cybersecurity.webp',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/WEKSDPR7Q473'
  },
  {
    id: 'cert-006',
    platform: 'Coursera',
    title: 'CCNA: Networking Basics, Switching, Addressing, and Routing',
    issuer: 'Logical Operations',
    date: '30 June 2026',
    credentialId: 'OBAQU4EVUCZO',
    pdf: '/assets/certificates/networking-basics.pdf',
    image: '/assets/certificates/previews/networking-basics.webp',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/OBAQU4EVUCZO'
  },
  {
    id: 'cert-007',
    platform: 'Coursera',
    title: 'CCNA: Wireless Networking and IP Services',
    issuer: 'Logical Operations',
    date: '30 June 2026',
    credentialId: '77HGFUFSKXUZ',
    pdf: '/assets/certificates/wireless-networking.pdf',
    image: '/assets/certificates/previews/wireless-networking.webp',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/77HGFUFSKXUZ'
  },
  {
    id: 'cert-009',
    platform: 'KREN',
    title: 'Data Analytics and Artificial Intelligence',
    issuer: 'KREN',
    date: '30 June 2026',
    credentialId: '',
    pdf: '/assets/certificates/kren-world-bank.pdf',
    image: '/assets/certificates/previews/kren-world-bank.webp',
    verificationUrl: ''
  },
  {
    id: 'cert-004',
    platform: 'Coursera',
    title: 'Extract, Transform and Load Data in Power BI',
    issuer: 'Microsoft',
    date: '1 May 2026',
    credentialId: 'P46JI89DQH0G',
    pdf: '/assets/certificates/power-bi-etl.pdf',
    image: '/assets/certificates/previews/power-bi-etl.webp',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/P46JI89DQH0G'
  },
  {
    id: 'cert-005',
    platform: 'Coursera',
    title: 'Preparing Data for Analysis with Microsoft Excel',
    issuer: 'Microsoft',
    date: '1 May 2026',
    credentialId: 'F89YPV04R699',
    pdf: '/assets/certificates/excel-data-analysis.pdf',
    image: '/assets/certificates/previews/excel-data-analysis.webp',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/F89YPV04R699'
  }
];

const verificationLinks = [];

const articles = [
  {
    id: 'blog-001',
    title: 'AI Today: What Actually Matters Right Now',
    slug: 'ai-today-what-matters',
    author: 'Agon Mustafaj',
    date: '2026-06-15',
    description: 'A practical look at where artificial intelligence stands today, which skills matter for students and builders, and what is worth learning now.',
    status: 'published',
    relatedProject: '',
    category: 'AI'
  },
  {
    id: 'blog-002',
    title: 'How AI Is Changing Web Development',
    slug: 'ai-changing-web-development',
    author: 'Agon Mustafaj',
    date: '2026-04-22',
    description: 'How AI is changing the way websites are planned, built, tested and published, from faster code to clearer research for small product teams.',
    status: 'published',
    relatedProject: '',
    category: 'AI & Web'
  },
  {
    id: 'blog-003',
    title: 'AI and Technology: Building With Intelligence',
    slug: 'ai-and-technology-building',
    author: 'Agon Mustafaj',
    date: '2026-02-18',
    description: 'Why pairing computer science fundamentals with AI tools leads to stronger digital products, clearer build decisions and sites that are easier to keep.',
    status: 'published',
    relatedProject: '',
    category: 'Technology'
  },
  {
    id: 'blog-004',
    title: 'Learning AI as a Computer Science Student',
    slug: 'learning-ai-as-cs-student',
    author: 'Agon Mustafaj',
    date: '2025-12-12',
    description: 'How learning about AI fits around web development, SEO work and Computer Science coursework, and why linking the fields beats studying them apart.',
    status: 'published',
    relatedProject: '',
    category: 'Learning'
  }
];

const socialLinks = [
  { name: 'LinkedIn', url: profile.linkedin, icon: 'linkedin', active: !!profile.linkedin },
  { name: 'Facebook', url: profile.facebook, icon: 'facebook', active: !!profile.facebook }
];

function getProfileSameAs() {
  return [
    profile.linkedin,
    profile.facebook,
    profile.instagram,
    profile.github,
    profile.peerlist,
    profile.calameo,
    profile.startupbase,
    profile.youtube
  ].filter(function (url) { return !!url; });
}

const pageSEO = {
  home: {
    title: 'Agon Mustafaj | SEO Expert and Web Developer',
    description: 'SEO expert and web developer in Prishtina, Kosovo. Through AgoDev I handle technical SEO and build websites that bring in clients.',
    path: '/'
  },
  agodev: {
    title: 'AgoDev | SEO Services and Web Development',
    description: 'AgoDev is the practice for SEO and web development: technical search work, business websites, a clear build process, and client projects already live.',
    path: '/agodev/'
  },
  about: {
    title: 'About Agon Mustafaj | SEO and Web Developer',
    description: 'SEO expert and web developer in Prishtina, Kosovo. AgoDev is the practice for search visibility and client websites, with studies and SEO work.',
    path: '/about/'
  },
  projects: {
    title: 'Projects | Agon Mustafaj SEO and Web Work',
    description: 'Websites built with search structure included: Banesë për Ty, Hoxha Handwerk, VisitAlbania and Malaj Design, each with a case study on the work.',
    path: '/projects/'
  },
  skills: {
    title: 'SEO and Web Developer Skills | Agon Mustafaj',
    description: 'SEO skills and the technologies used to build client websites through AgoDev, plus coursework in Python, Power BI, Excel and data work.',
    path: '/skills/'
  },
  education: {
    title: 'Education | Agon Mustafaj, Computer Science',
    description: 'Computer Science studies at the University of Prishtina, the academic base behind the SEO and web development work done through AgoDev.',
    path: '/education/'
  },
  experience: {
    title: 'Experience | Agon Mustafaj as SEO Expert',
    description: 'SEO and web development through AgoDev, plus the SEO Expert role at Novalab SEO Agency: technical SEO, on-page work, links and site structure.',
    path: '/experience/'
  },
  certifications: {
    title: 'Certifications | Agon Mustafaj SEO Courses',
    description: 'Course certificates from Semrush, HubSpot, Ahrefs, BrightLocal, Coursera and KREN, covering SEO, AI search, Python, Power BI, Excel and security.',
    path: '/certifications/'
  },
  articles: {
    title: 'Blog Posts | Agon Mustafaj on AI and Web',
    description: 'Articles on artificial intelligence, web development and technology, written while building client websites and learning what holds up in practice.',
    path: '/blog/'
  },
  services: {
    title: 'SEO and Websites for Businesses | Agon Mustafaj',
    description: 'SEO and websites for businesses: technical search work, a clear company site, mobile-ready layouts and contact paths, in HTML, CSS and JavaScript.',
    path: '/services/'
  },
  freelancer: {
    title: 'Freelance Web Developer and SEO Expert in Kosovo',
    description: 'Freelance web developer and SEO expert in Kosovo. Websites and technical SEO for businesses in Prishtina, Prizren, Peja, Gjilan and Ferizaj.',
    path: '/freelancer-kosove/'
  },
  contact: {
    title: 'Contact | Agon Mustafaj, SEO and Web Dev',
    description: 'Start an SEO or website project in Prishtina, Kosovo. Reach AgoDev by the form, email, phone, LinkedIn or Facebook and get a reply.',
    path: '/contact/'
  },
  cv: {
    title: 'CV | Agon Mustafaj, SEO Expert and Web Dev',
    description: 'A CV for an SEO expert and web developer: AgoDev websites, technical SEO at Novalab SEO Agency, Computer Science studies and course certificates.',
    path: '/cv/'
  },
  '404': {
    title: 'Page Not Found | Agon Mustafaj Portfolio',
    description: 'This page could not be found. Go back to the homepage, or open AgoDev for SEO, web development, client projects, the build process and contact.',
    path: '/404.html'
  }
};

const whatIDo = [
  { title: 'Build', description: 'Responsive websites and web applications, from structure to deployment.', icon: 'build' },
  { title: 'Optimize', description: 'Technical SEO, on-page optimization and website structure.', icon: 'optimize' },
  { title: 'Explore', description: 'AI tools, AI-assisted development and emerging technology.', icon: 'explore' },
  { title: 'Design', description: 'Modern, responsive interfaces built around usability.', icon: 'design' },
  { title: 'Learn', description: 'Data analytics through coursework: Python, Power BI, Excel and DAX.', icon: 'analyze' }
];

const journeySteps = [
  { title: 'University of Prishtina', subtitle: 'Computer Science', status: 'Current' },
  { title: 'SEO Expert', subtitle: 'Novalab SEO Agency', status: 'Current' },
  { title: 'Web Projects', subtitle: 'Building real websites', status: 'Current' },
  { title: 'Data Analytics', subtitle: 'Coursework and self-study', status: 'Learning' },
  { title: 'Continuous Learning', subtitle: 'Always growing', status: 'Current' }
];

const seoFlow = [
  { stage: 'Website', description: 'A well-structured foundation with semantic HTML and fast performance.' },
  { stage: 'Technical Structure', description: 'Crawlable architecture, clean URLs, and proper indexing signals.' },
  { stage: 'Content', description: 'Useful, accessible content that answers real user questions.' },
  { stage: 'Search Engine', description: 'Clear signals help search engines understand and index your site.' },
  { stage: 'User', description: 'The ultimate goal: delivering value to people who find your site.' }
];

const devPipeline = [
  { step: 'IDEA', description: 'Understanding the problem and defining goals.' },
  { step: 'UX', description: 'Mapping user flows and interaction patterns.' },
  { step: 'DESIGN', description: 'Visual language, typography, and layout.' },
  { step: 'CODE', description: 'Building with clean, semantic, maintainable code.' },
  { step: 'SEO', description: 'Search-friendly structure from the start.' },
  { step: 'OPTIMIZATION', description: 'Performance, accessibility, and refinement.' },
  { step: 'DEPLOYMENT', description: 'Launching and monitoring the live product.' }
];

const navLinks = [
  { label: 'Home', href: '/', page: 'home' },
  { label: 'AgoDev', href: '/agodev/', page: 'agodev' },
  { label: 'About', href: '/about/', page: 'about' },
  { label: 'Skills', href: '/skills/', page: 'skills' },
  { label: 'Experience', href: '/experience/', page: 'experience' },
  { label: 'Certifications', href: '/certifications/', page: 'certifications' },
  { label: 'Blog', href: '/blog/', page: 'blog' },
  { label: 'Contact', href: '/contact/', page: 'contact' }
];

const businessServices = [
  {
    title: 'Technical SEO',
    description: 'Crawlability, indexing, site structure and audits so the business can be found.'
  },
  {
    title: 'Web development',
    description: 'A business website built in clean HTML, CSS and JavaScript, from the brief to a live site.'
  },
  {
    title: 'On-page SEO',
    description: 'Titles, meta descriptions, headings and content structured for search.'
  },
  {
    title: 'Search structure',
    description: 'Internal links and page architecture so people and search engines can move through the site.'
  },
  {
    title: 'Launch and indexing',
    description: 'The site goes live with contact paths, a sitemap check and indexing in place.'
  }
];

const serviceProcess = [
  { step: '01', title: 'Brief', description: 'We clarify what the business does, who it serves, and what search and the website need to achieve.' },
  { step: '02', title: 'Search structure', description: 'Keywords, pages, headings and internal links are mapped before the build.' },
  { step: '03', title: 'Design & Build', description: 'A custom website, not a generic template, built in clean HTML, CSS and JavaScript, with on-page SEO.' },
  { step: '04', title: 'Launch', description: 'The site goes live with contact paths, a sitemap and indexing checks.' }
];

const CONTACT_ENDPOINT = 'https://formsubmit.co/ajax/' + profile.email;
