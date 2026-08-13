# Agon Mustafaj, Personal Portfolio

Official portfolio website for **Agon Mustafaj**, Computer Science student, Junior SEO professional, web developer, and technology enthusiast.

**Live site:** [https://agonmustafaj.com/](https://agonmustafaj.com/)

---

## Overview

A premium, interactive personal portfolio built with vanilla HTML, CSS, and JavaScript. The site serves as a digital identity, combining a developer portfolio, interactive CV, project case studies, and personal brand website.

## Tech Stack

- **HTML5**, Semantic markup
- **CSS3**, Custom design system with dark/light themes
- **Vanilla JavaScript**, All interactions and dynamic content
- **Netlify**, Static hosting

No frameworks. No unnecessary dependencies.

## Project Structure

```
/
├── index.html              # Homepage
├── about.html              # Biography
├── projects.html           # Project showcase
├── skills.html             # Technology stack
├── education.html          # Education
├── experience.html         # Work experience
├── certifications.html     # Learning credentials
├── articles.html           # Article architecture
├── contact.html            # Contact form
├── cv.html                 # Resume page
├── 404.html                # Custom 404
├── projects/               # Case studies
├── assets/                 # Images, icons, CV PDF
├── css/style.css           # Design system
├── js/
│   ├── data.js             # Editable content data
│   ├── qr.js               # Vanilla QR code generator
│   └── script.js           # Functionality
├── robots.txt
├── sitemap.xml
└── netlify.toml
```

## Editing Content

All editable information is centralized in `js/data.js`:

- `profile`, Personal info, social links
- `experience`, Work history
- `education`, Academic background
- `skills`, Technology skills
- `projects`, Project data
- `certifications`, Learning credentials
- `articles`, Article placeholders
- `CONTACT_ENDPOINT`, Form submission URL (empty = demo mode)

Update placeholders like `[ADD INFORMATION]` with real data as it becomes available.

## QR Codes

QR codes are generated locally with vanilla JavaScript in `js/qr.js`. No libraries and no external APIs.

## Deployment (Netlify)

1. Push this repository to GitHub
2. Connect to [Netlify](https://www.netlify.com/)
3. Deploy, no build command needed (static site)
4. Set custom domain: `agonmustafaj.com`

The `netlify.toml` includes security headers and a custom 404 page.

## Contact Form

The contact form is frontend-only by default. To enable submissions:

1. Sign up for [Formspree](https://formspree.io/) or similar
2. Set `CONTACT_ENDPOINT` in `js/data.js` to your form endpoint URL

## CV

Place your CV PDF at:

```
assets/Agon-Mustafaj-CV.pdf
```

If the file is missing, the CV page displays "CV coming soon."

## Profile Image

Place your profile photo at:

```
assets/images/profile.jpg
```

If missing, the wallet card displays "AM" initials as fallback.

## Features

- Interactive digital wallet / identity card with 3D hover effects
- Custom cursor (desktop only)
- Dark/light theme toggle with localStorage persistence
- Scroll reveal animations
- Magnetic buttons and card tilt effects
- Terminal typing animation
- Interactive skills ecosystem
- SEO flow visualization
- Development pipeline
- Certification filtering
- Share profile modal with clipboard copy
- Full SEO: meta tags, Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt
- Responsive design (360px - 1440px+)
- Accessibility: semantic HTML, keyboard navigation, focus states, reduced motion support

## License

Personal portfolio, all rights reserved © 2026 Agon Mustafaj
