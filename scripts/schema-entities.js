/*
 * Site-wide JSON-LD entities. build.js merges these into each public page's
 * @graph so every page shares the same Person, AgoDev, Novalab and WebSite
 * nodes, cross-linked by @id (Ré nao-style single @context + @graph pattern).
 *
 * No LocalBusiness / NUI / opening hours: there is no verified street address
 * or public business hours for AgoDev. City-level Prishtinë / XK only.
 */

const SITE = 'https://agonmustafaj.com';
const PERSON_ID = SITE + '/#agon-mustafaj';
const PERSON_IMAGE_ID = SITE + '/#agon-mustafaj-image';
const AGODEV_ID = SITE + '/#agodev';
const AGODEV_LOGO_ID = SITE + '/#agodev-logo';
const WEBSITE_ID = SITE + '/#website';
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
  'https://www.xing.com/profile/Agon_Mustafaj',
  'https://www.facebook.com/agon.mustafaj.03/',
  'https://www.instagram.com/agonmustafaj_/',
  'https://github.com/agonmustafaj/',
  'https://peerlist.io/agonmustafaj',
  'https://www.calameo.com/read/0082998447b64bec24a2e',
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
    image: { '@id': PERSON_IMAGE_ID },
    description: 'SEO expert and web developer in Prishtina, Kosovo. Founder of AgoDev, where he improves search visibility and builds websites for businesses. SEO Expert at Novalab SEO Agency and Computer Science student at the University of Prishtina.',
    jobTitle: 'SEO Expert and Web Developer',
    hasOccupation: {
      '@type': 'Occupation',
      name: 'SEO Expert and Web Developer',
      occupationalCategory: [
        '15-1255.01 Search Marketing Strategists',
        '15-1254.00 Web Developers'
      ],
      skills: 'Technical SEO, on-page SEO, SEO audits, local SEO, SEO freelancer work, websites for businesses, HTML, CSS, JavaScript, Next.js'
    },
    worksFor: [
      { '@id': AGODEV_ID },
      { '@id': NOVALAB_ID }
    ],
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Prishtina', url: 'https://uni-pr.edu/' },
    knowsAbout: [
      'Search Engine Optimization', 'SEO freelancer', 'SEO specialist', 'Technical SEO', 'On-page SEO',
      'Local SEO', 'SEO Audits', 'Web Development', 'HTML', 'CSS', 'JavaScript', 'Next.js',
      'Digital Marketing', 'Content Marketing', 'Marketing Analytics', 'Artificial Intelligence',
      'Computer Science', 'Python', 'Power BI', 'Data Analytics'
    ],
    knowsLanguage: ['sq', 'en'],
    nationality: { '@type': 'Country', name: 'Kosovo' },
    address,
    homeLocation: {
      '@type': 'Place',
      name: 'Prishtinë, Kosovo',
      alternateName: ['Pristina, Kosovo', 'Prishtina, Kosovo'],
      geo
    },
    workLocation: { '@type': 'Country', name: 'Kosovo', alternateName: 'Kosovë' },
    email: 'agonmustafaj01@gmail.com',
    telephone: '+38349622017',
    sameAs: profiles,
    mainEntityOfPage: { '@id': SITE + '/about/' }
  },
  {
    '@type': 'ImageObject',
    '@id': PERSON_IMAGE_ID,
    url: SITE + '/assets/images/agon-mustafaj.jpg',
    contentUrl: SITE + '/assets/images/agon-mustafaj.jpg',
    width: 1254,
    height: 1254,
    encodingFormat: 'image/jpeg',
    name: 'Agon Mustafaj, SEO expert and web developer in Prishtina',
    caption: 'Portrait of Agon Mustafaj, SEO expert and web developer in Prishtina, Kosovo',
    creditText: 'Agon Mustafaj',
    copyrightNotice: '© Agon Mustafaj. All rights reserved.',
    license: SITE + '/license/',
    acquireLicensePage: SITE + '/contact/',
    creator: { '@id': PERSON_ID },
    copyrightHolder: { '@id': PERSON_ID }
  },
  {
    '@type': 'Organization',
    '@id': AGODEV_ID,
    name: 'AgoDev',
    alternateName: 'AgoDev SEO and Web Development',
    description: 'SEO and web development practice in Prishtina, Kosovo, founded by Agon Mustafaj. Technical SEO, on-page SEO, SEO audits and business websites for companies in Kosovo and abroad.',
    url: 'https://agodev.agonmustafaj.com/',
    logo: { '@id': AGODEV_LOGO_ID },
    image: { '@id': AGODEV_LOGO_ID },
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    address,
    location: {
      '@type': 'Place',
      name: 'Prishtinë, Kosovo',
      address,
      geo
    },
    foundingLocation: { '@type': 'Place', name: 'Prishtinë, Kosovo' },
    email: 'agonmustafaj01@gmail.com',
    telephone: '+38349622017',
    sameAs: profiles,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'agonmustafaj01@gmail.com',
        telephone: '+38349622017',
        availableLanguage: ['sq', 'en'],
        areaServed: ['XK', 'AL']
      }
    ],
    areaServed: [
      { '@type': 'Country', name: 'Kosovo', alternateName: 'Kosovë', identifier: 'XK' },
      { '@type': 'Country', name: 'Albania', alternateName: 'Shqipëri', identifier: 'AL' }
    ],
    knowsLanguage: ['sq', 'en'],
    knowsAbout: [
      'Search Engine Optimization', 'Technical SEO', 'On-page SEO', 'Local SEO',
      'SEO Audits', 'SEO freelancer Kosovo', 'Web Development', 'Website Design'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AgoDev services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web development',
            url: 'https://agodev.agonmustafaj.com/#services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical SEO',
            url: SITE + '/improve-seo/'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'On-page SEO',
            url: 'https://agodev.agonmustafaj.com/#services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Launch and indexing',
            url: 'https://agodev.agonmustafaj.com/#process'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Search structure',
            url: 'https://agodev.agonmustafaj.com/#services'
          }
        }
      ]
    }
  },
  {
    '@type': 'ImageObject',
    '@id': AGODEV_LOGO_ID,
    url: SITE + '/assets/images/favicon.png',
    contentUrl: SITE + '/assets/images/favicon.png',
    width: 512,
    height: 512,
    caption: 'AgoDev'
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
    '@id': WEBSITE_ID,
    url: SITE + '/',
    name: 'Agon Mustafaj',
    alternateName: ['Agon Mustafaj Portfolio'],
    inLanguage: ['en', 'sq'],
    publisher: { '@id': PERSON_ID },
    about: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID }
  }
];
