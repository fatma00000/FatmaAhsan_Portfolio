# Premium Academic Portfolio Website

A production-ready, modular, and responsive personal academic website designed for university faculty, postdoctoral researchers, research scientists, AI engineers, and machine learning researchers.

## Overview

This project delivers a premium single-page academic profile with:
- Split-screen hero and professional identity
- Research overview, philosophy, impact, and timeline
- Publication cards with abstract modal, citation, BibTeX, DOI, and PDF links
- Research-grade project cards with contributions, challenges, and results
- Vertical timeline for education, experience, and awards
- Accessible contact form, copy-email utility, map embed, and meeting link
- SEO metadata, Open Graph, Twitter cards, JSON-LD, robots.txt, and sitemap.xml
- Light/dark theme support and subtle motion system

## Screenshots

- Hero and navigation: `index.html#hero`
- Research and publications: `index.html#research`, `index.html#publications`
- Projects and timeline: `index.html#projects`, `index.html#timeline`
- Contact and map: `index.html#contact`

## Features

- Elegant design system with CSS variables
- Fully modular CSS and JavaScript architecture
- Data-driven publications, projects, education, and experience sections
- Smooth scrolling, active navigation, sticky header behavior
- Keyboard-friendly modal interactions and semantic HTML structure
- Responsive breakpoints for desktop, laptop, tablet, mobile, and large monitors

## Folder Structure

```text
assets/
  images/
  icons/
  logos/
  cv/
components/
  navbar/
  footer/
  hero/
  about/
  research/
  publications/
  projects/
  experience/
  education/
  contact/
  testimonials/
css/
  variables.css
  globals.css
  layout.css
  components.css
  animations.css
  responsive.css
js/
  main.js
  animations.js
  typing.js
  darkmode.js
  projects.js
data/
  publications.json
  projects.json
  experience.json
  education.json
index.html
robots.txt
sitemap.xml
```

## Technologies

- HTML5 (semantic and accessible markup)
- CSS3 (custom properties, responsive layout, animations)
- Vanilla JavaScript (modular, data-driven rendering)
- JSON (content configuration for research data)

## Installation

1. Clone the repository.
2. Open the project root.
3. Start a static server, for example:
   - `python -m http.server 8000`
4. Visit `http://localhost:8000`.

## Customization

- Update personal and research details in `index.html`.
- Update publications and projects in `data/*.json`.
- Extend visual identity in `css/variables.css`.
- Replace SVG assets in `assets/` with institution-specific media.

## Deployment

### GitHub Pages
- Push to the default branch and enable Pages from repository settings.

### Netlify
- Import repository and deploy with publish directory set to root.

### Vercel
- Import repository and deploy as a static site.

## License

This project is available under the MIT License.
