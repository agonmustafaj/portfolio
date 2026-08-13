/* ============================================
   AGON MUSTAFAJ, Portfolio Data Architecture
   Edit this file to update site content easily.
   ============================================ */

const SITE_URL = 'https://agonmustafaj.com';

const profile = {
  name: 'Agon Mustafaj',
  initials: 'AM',
  headline: 'Computer Science Student | Junior SEO | Web Development | Data Analytics | AI & Technology',
  tagline: 'I build digital experiences that look good, work intelligently, and get discovered.',
  identity: 'COMPUTER SCIENCE × SEO × WEB × DATA',
  location: 'Pristina, Kosovo',
  university: 'University of Prishtina',
  degree: 'Computer Science',
  role: 'Junior SEO',
  company: 'thenovalab',
  companyUrl: 'https://thenovalab.com/',
  linkedin: 'https://www.linkedin.com/in/agon-mustafaj/',
  facebook: 'https://www.facebook.com/agon.mustafaj.03/',
  github: '',
  instagram: '',
  youtube: '',
  email: 'agonmustafaj01@gmail.com',
  phone: '+383 49 622 017',
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
    responsibilities: ['Junior SEO'],
    current: true
  }
];

const education = [
  {
    id: 'edu-001',
    degree: 'Computer Science',
    institution: 'University of Prishtina',
    location: 'Pristina, Kosovo',
    startDate: '[ADD START DATE]',
    endDate: 'Current',
    details: ['[ADD INFORMATION]']
  }
];

const skills = [
  { name: 'HTML', category: 'Development', description: 'Semantic markup for accessible, SEO-friendly web pages.', project: '' },
  { name: 'CSS', category: 'Development', description: 'Modern styling, layouts, and responsive design systems.', project: '' },
  { name: 'JavaScript', category: 'Development', description: 'Interactive experiences and client-side functionality.', project: 'Banesë për Ty' },
  { name: 'Web Development', category: 'Development', description: 'Building complete websites from structure to deployment.', project: 'Hoxha Handwerk' },
  { name: 'Responsive Design', category: 'Development', description: 'Interfaces that work across devices and screen sizes.', project: '' },
  { name: 'Technical SEO', category: 'SEO', description: 'Crawlability, site structure, and technical optimization.', project: '' },
  { name: 'On-page SEO', category: 'SEO', description: 'Content optimization, metadata, and on-page best practices.', project: '' },
  { name: 'Keyword Research', category: 'SEO', description: 'Identifying search intent and relevant keyword opportunities.', project: '' },
  { name: 'Website Structure', category: 'SEO', description: 'Information architecture and internal linking strategy.', project: '' },
  { name: 'SEO Auditing', category: 'SEO', description: 'Evaluating websites for search performance improvements.', project: '' },
  { name: 'Python', category: 'Data Analytics', description: 'Data processing, analysis, and machine learning workflows.', project: 'Bank Marketing Data Analysis' },
  { name: 'Pandas', category: 'Data Analytics', description: 'Data manipulation and analysis with Python.', project: 'Bank Marketing Data Analysis' },
  { name: 'NumPy', category: 'Data Analytics', description: 'Numerical computing for data science projects.', project: 'Bank Marketing Data Analysis' },
  { name: 'Power BI', category: 'Data Analytics', description: 'Business intelligence dashboards and data visualization.', project: '' },
  { name: 'Excel', category: 'Data Analytics', description: 'Spreadsheet analysis and data organization.', project: '' },
  { name: 'DAX', category: 'Data Analytics', description: 'Data analysis expressions for Power BI models.', project: '' },
  { name: 'Data Modeling', category: 'Data Analytics', description: 'Structuring data for analysis and reporting.', project: '' },
  { name: 'Artificial Intelligence', category: 'AI & Technology', description: 'Exploring AI concepts and practical applications.', project: '' },
  { name: 'Programming', category: 'AI & Technology', description: 'Problem-solving through code across multiple languages.', project: '' },
  { name: 'Modern Web Technologies', category: 'AI & Technology', description: 'Staying current with evolving web standards and tools.', project: '' },
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
    description: 'A rental platform for property discovery, search, and tenant-landlord workflows.',
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
    description: 'A professional business website with conversion-oriented layout and responsive UX.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Responsive Design'],
    features: [
      'Hero section',
      'Services showcase',
      'Projects gallery',
      'Before/after presentation',
      'Process overview',
      'Testimonials',
      'FAQ section',
      'Contact form',
      'Responsive UX',
      'Conversion-oriented layout'
    ],
    role: 'Web Developer',
    featured: true,
    number: '02',
    image: '/assets/images/hoxha-handwerk.png'
  },
  {
    id: 'proj-003',
    title: 'Bank Marketing Data Analysis',
    slug: 'bank-marketing',
    url: '',
    description: 'Data analysis and machine learning project exploring bank marketing campaign data.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Machine Learning'],
    features: [
      'Data preprocessing',
      'Classification models',
      'Random Forest',
      'Logistic Regression',
      'Decision Tree',
      'K-Means clustering',
      'PCA',
      'Association Rule Mining',
      'Apriori algorithm'
    ],
    role: 'Data Analyst',
    featured: false,
    number: '03'
  }
];

const certifications = [
  {
    id: 'cert-001',
    platform: 'Coursera',
    title: 'Python for Data Science, AI & Development',
    issuer: 'Coursera',
    date: '',
    credentialId: '',
    pdf: '/assets/certificates/python-data-science.pdf',
    image: '/assets/certificates/previews/python-data-science.png',
    verificationUrl: ''
  },
  {
    id: 'cert-002',
    platform: 'Credly',
    title: 'Palo Alto Networks Cybersecurity Foundation',
    issuer: 'Palo Alto Networks',
    date: '',
    credentialId: '',
    pdf: '/assets/certificates/palo-alto-cybersecurity.pdf',
    image: '/assets/certificates/previews/palo-alto-cybersecurity.png',
    verificationUrl: 'https://www.credly.com/badges/d6fc2f38-10b6-455b-b180-63a346117070/linked_in_profile'
  },
  {
    id: 'cert-003',
    platform: 'Coursera',
    title: 'Search Engine Optimization and Content',
    issuer: 'Coursera',
    date: '',
    credentialId: '',
    pdf: '/assets/certificates/seo-content.pdf',
    image: '/assets/certificates/previews/seo-content.png',
    verificationUrl: ''
  },
  {
    id: 'cert-004',
    platform: 'Coursera',
    title: 'Extract, Transform and Load Data in Power BI',
    issuer: 'Coursera',
    date: '',
    credentialId: '',
    pdf: '/assets/certificates/power-bi-etl.pdf',
    image: '/assets/certificates/previews/power-bi-etl.png',
    verificationUrl: ''
  },
  {
    id: 'cert-005',
    platform: 'Coursera',
    title: 'Preparing Data for Analysis with Microsoft Excel',
    issuer: 'Coursera',
    date: '',
    credentialId: '',
    pdf: '/assets/certificates/excel-data-analysis.pdf',
    image: '/assets/certificates/previews/excel-data-analysis.png',
    verificationUrl: ''
  },
  {
    id: 'cert-006',
    platform: 'Coursera',
    title: 'Networking Basics, Switching, Addressing, and Routing',
    issuer: 'Coursera',
    date: '',
    credentialId: '',
    pdf: '/assets/certificates/networking-basics.pdf',
    image: '/assets/certificates/previews/networking-basics.png',
    verificationUrl: ''
  },
  {
    id: 'cert-007',
    platform: 'Coursera',
    title: 'Wireless Networking and IP Services',
    issuer: 'Coursera',
    date: '',
    credentialId: '',
    pdf: '/assets/certificates/wireless-networking.pdf',
    image: '/assets/certificates/previews/wireless-networking.png',
    verificationUrl: ''
  },
  {
    id: 'cert-008',
    platform: 'Coursera',
    title: 'DevOps Prerequisite Course',
    issuer: 'Coursera',
    date: '',
    credentialId: '',
    pdf: '/assets/certificates/devops-prerequisite.pdf',
    image: '/assets/certificates/previews/devops-prerequisite.png',
    verificationUrl: ''
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

/* Coursera verification links provided, not mapped to specific titles to avoid incorrect pairing */
const verificationLinks = [
  { platform: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/G1X8E26TPLD1' },
  { platform: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/CJKIXKGKMLSR' },
  { platform: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/WEKSDPR7Q473' },
  { platform: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/OBAQU4EVUCZO' },
  { platform: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/P46JI89DQH0G' },
  { platform: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/F89YPV04R699' }
];

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
    description: 'How I approach AI learning alongside web development, data analytics, and SEO.',
    status: 'published',
    relatedProject: '',
    category: 'Learning'
  }
];

const socialLinks = [
  { name: 'LinkedIn', url: profile.linkedin, icon: 'linkedin', active: true },
  { name: 'Facebook', url: profile.facebook, icon: 'facebook', active: true }
];

const pageSEO = {
  home: {
    title: 'Agon Mustafaj | Computer Science, Web & SEO',
    description: 'I\'m Agon Mustafaj, Computer Science student at the University of Prishtina and Junior SEO, building with web, data, AI and technology.',
    path: '/'
  },
  about: {
    title: 'About Me | Agon Mustafaj',
    description: 'I\'m Agon Mustafaj, Computer Science student at the University of Prishtina, Junior SEO at thenovalab, building with web, data and technology.',
    path: '/about/'
  },
  projects: {
    title: 'Projects | Agon Mustafaj',
    description: 'Projects I\'ve built - web development, data analysis, and digital experiences.',
    path: '/projects/'
  },
  skills: {
    title: 'Skills & Technology Stack | Agon Mustafaj',
    description: 'The technology stack I work with - web development, SEO, data analytics, AI, and design.',
    path: '/skills/'
  },
  education: {
    title: 'Education | Agon Mustafaj',
    description: 'My education - Computer Science at the University of Prishtina.',
    path: '/education/'
  },
  experience: {
    title: 'Experience | Agon Mustafaj',
    description: 'My professional experience - Junior SEO at thenovalab.',
    path: '/experience/'
  },
  certifications: {
    title: 'Certifications | Agon Mustafaj',
    description: 'Certifications and credentials from my continuous learning journey.',
    path: '/certifications/'
  },
  articles: {
    title: 'Blog | Agon Mustafaj',
    description: 'I write about artificial intelligence, technology, and modern web development.',
    path: '/blog/'
  },
  contact: {
    title: 'Contact | Agon Mustafaj',
    description: 'Get in touch - let\'s build something together.',
    path: '/contact/'
  },
  cv: {
    title: 'Resume | Agon Mustafaj',
    description: 'View and download my CV.',
    path: '/cv/'
  },
  '404': {
    title: 'Page Not Found | Agon Mustafaj',
    description: 'The page you are looking for could not be found.',
    path: '/404.html'
  }
};

const whatIDo = [
  { title: 'Build', description: 'Websites and digital experiences.', icon: 'build' },
  { title: 'Optimize', description: 'Technical SEO and website structure.', icon: 'optimize' },
  { title: 'Analyze', description: 'Data using Python, Power BI and Excel.', icon: 'analyze' },
  { title: 'Explore', description: 'AI and emerging technologies.', icon: 'explore' },
  { title: 'Design', description: 'Modern responsive user experiences.', icon: 'design' }
];

const journeySteps = [
  { title: 'University of Prishtina', subtitle: 'Computer Science', status: 'Current' },
  { title: 'Junior SEO', subtitle: 'thenovalab', status: 'Current' },
  { title: 'Web Projects', subtitle: 'Building real websites', status: 'Current' },
  { title: 'Data Analytics', subtitle: 'Python, Power BI, Excel', status: 'Current' },
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
  { label: 'Skills', href: '/skills/', page: 'skills' },
  { label: 'Experience', href: '/experience/', page: 'experience' },
  { label: 'Certifications', href: '/certifications/', page: 'certifications' },
  { label: 'Blog', href: '/blog/', page: 'blog' },
  { label: 'Contact', href: '/contact/', page: 'contact' }
];

const CONTACT_ENDPOINT = '';
