/* Homepage-only data slice: keeps the first paint payload small. */
const profile = {
  company: 'Novalab SEO Agency',
  companyUrl: 'https://thenovalab.com/'
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
    ]
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
    ]
  }
];

const projects = [
  {
    title: 'Malaj Design',
    slug: 'malaj-design',
    url: 'https://malaj-design.com/',
    description: 'The portfolio website of graphic designer Andi Malaj. Web design by Andi, development, performance and SEO by me, built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Technical SEO', 'Responsive Design'],
    role: 'Web Developer, web design by Andi Malaj',
    featured: true,
    number: '01',
    image: '/assets/images/malaj-design.webp',
    image640: '/assets/images/malaj-design-640.webp'
  },
  {
    title: 'Pulse',
    slug: 'pulse',
    url: 'https://pulse-bw6.pages.dev/',
    description: 'The cosmos in motion: NASA Astronomy Picture of the Day browsing, planets in orbit, and a cinematic window into deep space.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'NASA APOD', 'Responsive Design'],
    role: 'Web Developer',
    featured: true,
    number: '02',
    image: '/assets/images/pulse.webp',
    image640: '/assets/images/pulse-640.webp'
  },
  {
    title: 'Orbit',
    slug: 'orbit',
    url: 'https://orbit-83j.pages.dev/',
    description: 'An immersive digital experience where ideas, experiments, and craft share one orbit, with interactive 3D playgrounds and cinematic motion.',
    technologies: ['FastAPI', 'Three.js', 'GSAP', 'WebGL', 'JavaScript'],
    role: 'Web Developer',
    featured: true,
    number: '03',
    image: '/assets/images/orbit.webp',
    image640: '/assets/images/orbit-640.webp'
  },
  {
    title: 'Roofman',
    slug: 'roofman',
    url: 'https://roofman.pages.dev/',
    description: 'A scroll-driven roof restoration experience where damage heals as you move down the page, built as a cinematic product demo.',
    technologies: ['React', 'Vite', 'CSS', 'Scroll Animation', 'Responsive Design'],
    role: 'Web Developer',
    featured: true,
    number: '04',
    image: '/assets/images/roofman.webp',
    image640: '/assets/images/roofman-640.webp'
  },
  {
    title: 'Mathematics Textbook',
    slug: 'mathematics-textbook',
    url: 'https://mathematics-textbook.pages.dev/',
    description: 'A calm, step-by-step digital mathematics textbook focused on integration, with worked examples and clear chapter navigation.',
    technologies: ['React', 'Vite', 'CSS', 'Math Content', 'Responsive Design'],
    role: 'Web Developer',
    featured: true,
    number: '05',
    image: '/assets/images/mathematics-textbook.webp',
    image640: '/assets/images/mathematics-textbook-640.webp'
  },
  {
    title: 'Banesë për Ty',
    slug: 'banese-per-ty',
    url: 'https://banese-per-ty.agonmustafaj01.workers.dev/',
    description: 'A rental platform concept where tenants search listings and landlords manage them, with digital contracts, signatures, and payment verification.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    role: 'Web Developer',
    featured: true,
    number: '06',
    image: '/assets/images/banese-per-ty.webp',
    image640: '/assets/images/banese-per-ty-640.webp'
  },
  {
    title: 'Hoxha Handwerk',
    slug: 'hoxha-handwerk',
    url: 'https://hoxhahandwerk.pages.dev/',
    description: 'A multilingual website for a craft and trade business, built to present the work and make it easy for customers to get in touch.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Responsive Design'],
    role: 'Web Developer',
    featured: true,
    number: '07',
    image: '/assets/images/hoxha-handwerk.webp',
    image640: '/assets/images/hoxha-handwerk-640.webp'
  },
  {
    title: 'VisitAlbania',
    slug: 'visit-albania',
    url: 'https://visitalbaniatoday.netlify.app/',
    description: 'A multilingual tourism website for Albania, built together with Drin Kozhani, covering destinations, activities, food and culture, and events in five languages.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Responsive Design'],
    role: 'Web Developer, in collaboration with Drin Kozhani',
    featured: true,
    number: '08',
    image: '/assets/images/visit-albania.webp',
    image640: '/assets/images/visit-albania-640.webp'
  }
];

const certifications = [
  {
    id: 'cert-019',
    title: 'Technical SEO Certification',
    issuer: 'Science of Apps',
    date: '3 November 2026',
    image: '/assets/certificates/previews/technical-seo-science-of-apps.webp',
    verificationUrl: 'https://scienceofapps.com/certification/verify/?id=SOA-TSEO-WHTE-ZDES'
  },
  {
    id: 'cert-010',
    title: 'Ahrefs Marketing Platform Certification',
    issuer: 'Ahrefs',
    date: 'August 2026',
    image: '/assets/certificates/previews/ahrefs-marketing-platform.webp',
    verificationUrl: 'https://ahrefs.com/academy/certificate/ff3531083a3a4eaba3174a423614440a'
  },
  {
    id: 'cert-017',
    title: 'Technical SEO and AI Search Essentials with Semrush',
    issuer: 'Semrush',
    date: '29 September 2026',
    image: '/assets/certificates/previews/technical-seo-ai-search-semrush.webp',
    verificationUrl: 'https://static.semrush.com/academy/certificates/5f752fb9b9/agon-mustafaj_25.pdf'
  }
];
