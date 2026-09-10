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
  headline: 'Computer Science Student | Web Development | Junior SEO | AI & Technology',
  tagline: 'Computer Science student focused on web development, working as a Junior SEO, and exploring where AI fits into both.',
  identity: 'COMPUTER SCIENCE × WEB × SEO × AI',
  description: 'Agon Mustafaj is a Computer Science student at the University of Prishtina and a Junior SEO at thenovalab in Pristina, Kosovo. He focuses on web development and technical SEO, and explores artificial intelligence and emerging technology.',
  location: 'Pristina, Kosovo',
  university: 'University of Prishtina',
  degree: 'Computer Science',
  role: 'Junior SEO',
  company: 'thenovalab',
  companyUrl: 'https://thenovalab.com/',
  image: SITE_URL + '/assets/images/profile.jpg',
  linkedin: 'https://www.linkedin.com/in/agon-mustafaj/',
  facebook: 'https://www.facebook.com/agon.mustafaj.03/',
  github: 'https://github.com/agonmustafaj/',
  instagram: 'https://www.instagram.com/agonmustafaj_',
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
  ],
  cvPath: '/assets/Agon-Mustafaj-CV.pdf'
};

const experience = [
  {
    id: 'exp-001',
    title: 'Junior SEO',
    company: 'thenovalab',
    location: 'Pristina, Kosovo',
    startDate: 'July 1',
    endDate: 'Current',
    responsibilities: [
      'Technical SEO: crawlability, indexing and site structure',
      'On-page SEO: titles, meta descriptions, headings and content optimization',
      'Internal linking and information architecture',
      'Sitemap and indexing checks',
      'SEO audits and website optimization',
      'Keyword research and search visibility'
    ],
    current: true
  }
];

const education = [
  {
    id: 'edu-001',
    degree: 'Computer Science',
    institution: 'University of Prishtina',
    location: 'Pristina, Kosovo',
    startDate: '',
    endDate: 'Current',
    details: ['Undergraduate studies in Computer Science, the foundation for my work in web development and SEO.']
  }
];

const skills = [
  { name: 'HTML', category: 'Development', description: 'Semantic markup for accessible, SEO-friendly web pages.', project: '' },
  { name: 'CSS', category: 'Development', description: 'Modern styling, layouts, and responsive design systems.', project: '' },
  { name: 'JavaScript', category: 'Development', description: 'Interactive experiences and client-side functionality.', project: 'Banesë për Ty' },
  { name: 'Web Development', category: 'Development', description: 'Building complete websites from structure to deployment.', project: 'Hoxha Handwerk' },
  { name: 'Responsive Design', category: 'Development', description: 'Interfaces that work across devices and screen sizes.', project: '' },
  { name: 'Technical SEO', category: 'SEO', description: 'Crawlability, indexing, and site structure, applied in my Junior SEO role.', project: '' },
  { name: 'On-page SEO', category: 'SEO', description: 'Titles, meta descriptions, headings, and content optimization.', project: '' },
  { name: 'Keyword Research', category: 'SEO', description: 'Identifying search intent and relevant keyword opportunities.', project: '' },
  { name: 'Website Structure', category: 'SEO', description: 'Information architecture and internal linking.', project: '' },
  { name: 'SEO Auditing', category: 'SEO', description: 'Reviewing websites for technical and on-page improvements.', project: '' },
  { name: 'Content Marketing', category: 'SEO', description: 'Creating and structuring content that serves users and search, covered in the Ahrefs Marketing Platform Certification.', project: '' },
  { name: 'Competitive Analysis', category: 'SEO', description: 'Researching competitors’ search visibility, content and backlink profiles with SEO tools.', project: '' },
  { name: 'Digital Marketing', category: 'Marketing', description: 'Search, content and analytics work across a marketing platform, covered in the Ahrefs certification.', project: '' },
  { name: 'Marketing Analytics', category: 'Marketing', description: 'Measuring search visibility and marketing performance with platform data and reports.', project: '' },
  { name: 'Artificial Intelligence', category: 'AI & Technology', description: 'Exploring AI tools and AI-assisted development.', project: '' },
  { name: 'Programming', category: 'AI & Technology', description: 'Problem-solving through code across multiple languages.', project: '' },
  { name: 'Modern Web Technologies', category: 'AI & Technology', description: 'Staying current with evolving web standards and tools.', project: '' },
  { name: 'Python', category: 'Data Analytics', description: 'Programming and data analysis fundamentals, learned at university and reinforced with courses.', project: '' },
  { name: 'Pandas', category: 'Data Analytics', description: 'Working with datasets in Python, learned at university and reinforced with courses.', project: '' },
  { name: 'NumPy', category: 'Data Analytics', description: 'Numerical computing in Python, learned at university and reinforced with courses.', project: '' },
  { name: 'Power BI', category: 'Data Analytics', description: 'Power Query, data modeling, and visualization, learned at university and reinforced with courses.', project: '' },
  { name: 'Excel', category: 'Data Analytics', description: 'Preparing and organizing data in spreadsheets, learned at university and reinforced with courses.', project: '' },
  { name: 'DAX', category: 'Data Analytics', description: 'Expressions for Power BI models, learned at university and reinforced with courses.', project: '' },
  { name: 'Data Modeling', category: 'Data Analytics', description: 'Structuring data for reporting, learned at university and reinforced with courses.', project: '' },
  { name: 'UI/UX', category: 'Design', description: 'User-centered design thinking and interface craft.', project: 'Banesë për Ty' },
  { name: 'Web Design', category: 'Design', description: 'Visual design for web experiences.', project: 'Hoxha Handwerk' },
  { name: 'Interaction Design', category: 'Design', description: 'Meaningful micro-interactions and user flows.', project: '' }
];

const projects = [
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
    number: '01',
    image: '/assets/images/banese-per-ty.png'
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
    number: '02',
    image: '/assets/images/hoxha-handwerk.png'
  }
];

const certifications = [
  {
    id: 'cert-010',
    platform: 'Ahrefs',
    title: 'Ahrefs Marketing Platform Certification',
    issuer: 'Ahrefs',
    date: 'August 2026',
    credentialId: 'ff3531083a3a4eaba3174a423614440a',
    pdf: '/assets/certificates/ahrefs-marketing-platform.pdf',
    image: '/assets/certificates/previews/ahrefs-marketing-platform.png',
    verificationUrl: 'https://ahrefs.com/academy/certificate/ff3531083a3a4eaba3174a423614440a'
  },
  {
    id: 'cert-001',
    platform: 'Coursera',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: '',
    credentialId: 'DHJ8PUFMXBCR',
    pdf: '/assets/certificates/python-data-science.pdf',
    image: '/assets/certificates/previews/python-data-science.png',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/DHJ8PUFMXBCR'
  },
  {
    id: 'cert-002',
    platform: 'Credly',
    title: 'Palo Alto Networks Cybersecurity Foundation',
    issuer: 'Palo Alto Networks',
    date: '',
    credentialId: 'WEKSDPR7Q473',
    pdf: '/assets/certificates/palo-alto-cybersecurity.pdf',
    image: '/assets/certificates/previews/palo-alto-cybersecurity.png',
    verificationUrl: 'https://www.credly.com/badges/d6fc2f38-10b6-455b-b180-63a346117070/linked_in_profile'
  },
  {
    id: 'cert-003',
    platform: 'Coursera',
    title: 'Search Engine Optimization and Content',
    issuer: 'IBM',
    date: '',
    credentialId: 'G1X8E26TPLD1',
    pdf: '/assets/certificates/seo-content.pdf',
    image: '/assets/certificates/previews/seo-content.png',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/G1X8E26TPLD1'
  },
  {
    id: 'cert-004',
    platform: 'Coursera',
    title: 'Extract, Transform and Load Data in Power BI',
    issuer: 'Microsoft',
    date: '',
    credentialId: 'P46JI89DQH0G',
    pdf: '/assets/certificates/power-bi-etl.pdf',
    image: '/assets/certificates/previews/power-bi-etl.png',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/P46JI89DQH0G'
  },
  {
    id: 'cert-005',
    platform: 'Coursera',
    title: 'Preparing Data for Analysis with Microsoft Excel',
    issuer: 'Microsoft',
    date: '',
    credentialId: 'F89YPV04R699',
    pdf: '/assets/certificates/excel-data-analysis.pdf',
    image: '/assets/certificates/previews/excel-data-analysis.png',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/F89YPV04R699'
  },
  {
    id: 'cert-006',
    platform: 'Coursera',
    title: 'Networking Basics, Switching, Addressing, and Routing',
    issuer: 'Logical Operations',
    date: '',
    credentialId: 'OBAQU4EVUCZO',
    pdf: '/assets/certificates/networking-basics.pdf',
    image: '/assets/certificates/previews/networking-basics.png',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/OBAQU4EVUCZO'
  },
  {
    id: 'cert-007',
    platform: 'Coursera',
    title: 'Wireless Networking and IP Services',
    issuer: 'Logical Operations',
    date: '',
    credentialId: '77HGFUFSKXUZ',
    pdf: '/assets/certificates/wireless-networking.pdf',
    image: '/assets/certificates/previews/wireless-networking.png',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/77HGFUFSKXUZ'
  },
  {
    id: 'cert-008',
    platform: 'Coursera',
    title: 'DevOps Prerequisite Course',
    issuer: 'KodeKloud',
    date: '',
    credentialId: 'CJKIXKGKMLSR',
    pdf: '/assets/certificates/devops-prerequisite.pdf',
    image: '/assets/certificates/previews/devops-prerequisite.png',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/CJKIXKGKMLSR'
  },
  {
    id: 'cert-009',
    platform: 'KREN',
    title: 'KREN & World Bank',
    issuer: 'KREN',
    date: '',
    credentialId: '',
    pdf: '/assets/certificates/kren-world-bank.pdf',
    image: '/assets/certificates/previews/kren-world-bank.png',
    verificationUrl: ''
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
    description: 'A practical look at where artificial intelligence stands today and which skills matter for students and builders.',
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
    description: 'From writing code faster to improving UX research, AI is reshaping how modern websites are planned and built.',
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
    description: 'Why combining computer science fundamentals with AI tools creates stronger digital products.',
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
    description: 'How I fit learning about AI around web development, SEO work and my Computer Science coursework.',
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
    profile.github,
    profile.facebook,
    profile.instagram,
    profile.youtube
  ].filter(function (url) { return !!url; });
}

const pageSEO = {
  home: {
    title: 'Agon Mustafaj | Computer Science, Web Development & SEO',
    description: 'Agon Mustafaj is a Computer Science student at the University of Prishtina and a Junior SEO focused on web development, SEO and AI. Explore his projects, skills, certifications and experience.',
    path: '/'
  },
  about: {
    title: 'About Agon Mustafaj | Computer Science & Web Development',
    description: 'Computer Science student at the University of Prishtina and Junior SEO at thenovalab. How I work across web development, SEO and AI, and what I am currently learning.',
    path: '/about/'
  },
  projects: {
    title: 'Projects | Agon Mustafaj — Web Development & Technology',
    description: 'Web development projects I designed and built, including Banesë për Ty and Hoxha Handwerk, each with a case study covering my role, the technologies used and what I learned.',
    path: '/projects/'
  },
  skills: {
    title: 'Skills & Technologies | Agon Mustafaj',
    description: 'The technologies I work with in web development and SEO, plus areas I have studied through coursework such as Python, Power BI, Excel and DAX.',
    path: '/skills/'
  },
  education: {
    title: 'Education | Agon Mustafaj — Computer Science, University of Prishtina',
    description: 'My academic background: Computer Science studies at the University of Prishtina in Pristina, Kosovo, and the foundation behind my web development and SEO work.',
    path: '/education/'
  },
  experience: {
    title: 'Experience | Agon Mustafaj — Junior SEO at thenovalab',
    description: 'My professional experience as a Junior SEO at thenovalab in Pristina, working on technical SEO, on-page optimization, internal linking and website structure.',
    path: '/experience/'
  },
  certifications: {
    title: 'Certifications | Agon Mustafaj — Ahrefs, Python, Power BI, SEO & Networking',
    description: 'Course certificates and learning credentials from Ahrefs, Coursera, Credly and KREN, covering SEO, Python, Power BI, Excel, networking, DevOps and cybersecurity fundamentals.',
    path: '/certifications/'
  },
  articles: {
    title: 'Blog | Agon Mustafaj — AI, Web Development & Technology',
    description: 'Articles on artificial intelligence, web development and technology, written from the perspective of a Computer Science student who learns by building.',
    path: '/blog/'
  },
  services: {
    title: 'Web Development & Websites for Businesses | Agon Mustafaj',
    description: 'I design and build websites for businesses: clear presentation, mobile-ready layouts and simple contact paths, written in clean HTML, CSS and JavaScript.',
    path: '/services/'
  },
  contact: {
    title: 'Contact Agon Mustafaj | Let\'s Connect',
    description: 'Get in touch with Agon Mustafaj by email, phone, LinkedIn or Facebook. Based in Pristina, Kosovo.',
    path: '/contact/'
  },
  cv: {
    title: 'CV | Agon Mustafaj — Computer Science, Web Development & SEO',
    description: 'The CV of Agon Mustafaj: Computer Science student at the University of Prishtina, Junior SEO at thenovalab, with web development projects and course certificates.',
    path: '/cv/'
  },
  '404': {
    title: 'Page Not Found | Agon Mustafaj',
    description: 'The page you are looking for could not be found.',
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
  { title: 'Junior SEO', subtitle: 'thenovalab', status: 'Current' },
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
  { label: 'About', href: '/about/', page: 'about' },
  { label: 'Projects', href: '/projects/', page: 'projects' },
  { label: 'Services', href: '/services/', page: 'services' },
  { label: 'Skills', href: '/skills/', page: 'skills' },
  { label: 'Experience', href: '/experience/', page: 'experience' },
  { label: 'Certifications', href: '/certifications/', page: 'certifications' },
  { label: 'Blog', href: '/blog/', page: 'blog' },
  { label: 'Contact', href: '/contact/', page: 'contact' }
];

const businessServices = [
  {
    title: 'Business Website',
    description: 'A professional site that presents your company, services, and how customers can reach you.'
  },
  {
    title: 'Mobile & Fast',
    description: 'Responsive layouts that work on phones, with clean structure and solid performance.'
  },
  {
    title: 'Inquiries That Convert',
    description: 'Contact forms, WhatsApp, and clear calls to action that turn visitors into clients.'
  },
  {
    title: 'Multilingual',
    description: 'Sites that speak your customers\' language - useful for local and international businesses.'
  },
  {
    title: 'Launch & Support',
    description: 'From first brief to a live website, with a process you can follow at every step.'
  }
];

const serviceProcess = [
  { step: '01', title: 'Brief', description: 'We clarify what the business does, who it serves, and what the website needs to achieve.' },
  { step: '02', title: 'Structure', description: 'Pages, content, and user paths are mapped before design starts.' },
  { step: '03', title: 'Design & Build', description: 'A custom layout, not a generic template, built in clean HTML, CSS, and JavaScript.' },
  { step: '04', title: 'Launch', description: 'Contact paths in place, and a live site your customers can use.' }
];

const CONTACT_ENDPOINT = '';
