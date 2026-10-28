/*
 * Site-wide JSON-LD entities. build.js adds every entity here to each public page
 * that does not already define it, so all pages describe the same Person, AgoDev and WebSite.
 */

const SITE = 'https://agonmustafaj.com';
const PERSON_ID = SITE + '/#agon-mustafaj';
const AGODEV_ID = SITE + '/#agodev';
const NOVALAB_ID = 'https://thenovalab.com/#organization';

const address = {
  '@type': 'PostalAddress',
  addressLocality: 'Prishtinë',
  addressRegion: 'Prishtina',
  addressCountry: 'XK'
};

const geo = { '@type': 'GeoCoordinates', latitude: 42.6629, longitude: 21.1655 };

const profiles = [
  'https://www.linkedin.com/in/agon-mustafaj/',
  'https://www.facebook.com/agon.mustafaj.03/',
  'https://www.instagram.com/agonmustafaj_/',
  'https://github.com/agonmustafaj/',
  'https://peerlist.io/agonmustafaj',
  'https://startupbase.io/@agonmustafaj'
];

module.exports = [
  {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Agon Mustafaj',
    alternateName: ['Agon B. Mustafaj'],
    givenName: 'Agon',
    familyName: 'Mustafaj',
    url: SITE + '/',
    image: { '@id': SITE + '/#agon-mustafaj-image' },
    description: 'SEO expert and web developer in Prishtina, Kosovo. Founder of AgoDev, where he improves search visibility and builds websites for businesses. SEO Expert at Novalab SEO Agency and Computer Science student at the University of Prishtina.',
    jobTitle: 'SEO Expert and Web Developer',
    hasOccupation: {
      '@type': 'Occupation',
      name: 'SEO Expert and Web Developer',
      occupationalCategory: '15-1254.00 Web Developers',
      skills: 'Technical SEO, on-page SEO, SEO audits, local SEO, websites for businesses, HTML, CSS, JavaScript, Next.js'
    },
    worksFor: [
      { '@id': AGODEV_ID },
      { '@id': NOVALAB_ID }
    ],
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Prishtina', url: 'https://uni-pr.edu/' },
    knowsAbout: [
      'Search Engine Optimization', 'Technical SEO', 'On-page SEO', 'Local SEO', 'SEO Audits',
      'Web Development', 'HTML', 'CSS', 'JavaScript', 'Next.js', 'Digital Marketing',
      'Content Marketing', 'Marketing Analytics', 'Artificial Intelligence', 'Computer Science',
      'Python', 'Power BI', 'Data Analytics'
    ],
    knowsLanguage: ['sq', 'en'],
    nationality: { '@type': 'Country', name: 'Kosovo' },
    address,
    homeLocation: { '@type': 'Place', name: 'Prishtinë, Kosovo', alternateName: ['Pristina, Kosovo', 'Prishtina, Kosovo'], geo },
    workLocation: { '@type': 'Country', name: 'Kosovo', alternateName: 'Kosovë' },
    email: 'agonmustafaj01@gmail.com',
    telephone: '+38349622017',
    sameAs: profiles
  },
  {
    '@type': 'ImageObject',
    '@id': SITE + '/#agon-mustafaj-image',
    url: SITE + '/assets/images/agon-mustafaj.jpg',
    contentUrl: SITE + '/assets/images/agon-mustafaj.jpg',
    caption: 'Agon Mustafaj',
    creditText: 'Agon Mustafaj',
    copyrightNotice: '© Agon Mustafaj. All rights reserved.',
    license: SITE + '/license/',
    acquireLicensePage: SITE + '/contact/',
    creator: { '@id': PERSON_ID }
  },
  {
    '@type': 'Organization',
    '@id': AGODEV_ID,
    name: 'AgoDev',
    alternateName: 'AgoDev SEO and Web Development',
    description: 'SEO and web development agency in Prishtina, Kosovo, founded by Agon Mustafaj. Technical SEO, on-page SEO, SEO audits and business websites for companies in Kosovo and abroad.',
    url: SITE + '/agodev/',
    logo: {
      '@type': 'ImageObject',
      '@id': SITE + '/#agodev-logo',
      url: SITE + '/assets/images/favicon.png',
      contentUrl: SITE + '/assets/images/favicon.png',
      width: 512,
      height: 512,
      caption: 'AgoDev'
    },
    image: SITE + '/assets/images/banner.png',
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    address,
    location: { '@type': 'Place', name: 'Prishtinë, Kosovo', address, geo },
    foundingLocation: { '@type': 'Place', name: 'Prishtinë, Kosovo' },
    email: 'agonmustafaj01@gmail.com',
    telephone: '+38349622017',
    sameAs: profiles,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'agonmustafaj01@gmail.com',
      telephone: '+38349622017',
      availableLanguage: ['Albanian', 'English'],
      areaServed: ['XK', 'AL']
    },
    areaServed: [
      { '@type': 'Country', name: 'Kosovo', alternateName: 'Kosovë' },
      { '@type': 'Country', name: 'Albania', alternateName: 'Shqipëri' }
    ],
    knowsLanguage: ['sq', 'en'],
    knowsAbout: ['Search Engine Optimization', 'Technical SEO', 'On-page SEO', 'Local SEO', 'SEO Audits', 'Web Development', 'Website Design'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AgoDev services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO audit and fixes', url: SITE + '/improve-seo/' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical SEO', url: SITE + '/services/' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business website development', url: SITE + '/services/' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Freelance web and SEO work in Kosovo', url: SITE + '/freelancer-kosove/' } }
      ]
    }
  },
  {
    '@type': 'Organization',
    '@id': NOVALAB_ID,
    name: 'Novalab SEO Agency',
    url: 'https://thenovalab.com/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://thenovalab.com/wp-content/uploads/2025/09/novalab_v_logo.jpg',
      contentUrl: 'https://thenovalab.com/wp-content/uploads/2025/09/novalab_v_logo.jpg',
      width: 2048,
      height: 2048,
      caption: 'Novalab SEO Agency'
    },
    sameAs: [
      'https://www.wikidata.org/wiki/Q141163386',
      'https://www.linkedin.com/company/novalabseoagency/',
      'https://www.facebook.com/NovalabSEOAgency/',
      'https://www.instagram.com/novalab_seo_agency/',
      'https://x.com/Novalab_seo',
      'https://www.tiktok.com/@novalabseoagency',
      'https://www.youtube.com/@TheSEOLabPodcast'
    ]
  },
  {
    '@type': 'WebSite',
    '@id': SITE + '/#website',
    url: SITE + '/',
    name: 'Agon Mustafaj',
    alternateName: ['Agon Mustafaj Portfolio', 'AgoDev'],
    inLanguage: ['en', 'sq']
  }
];
