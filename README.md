# Vigno Inc Website

A static website for Vigno Inc - Software Corporate Training & Consultancy Services.

## Overview

This is a pure HTML, CSS, and vanilla JavaScript website. No build process or framework required.

## Project Structure

```
vigno_website/
├── index.html              # Home page
├── about.html             # About Us page
├── contact.html           # Contact page
├── solutions.html         # Solutions page
├── services.html          # Services page
├── training.html          # Training page
├── blog.html              # Blog page
├── careers.html           # Careers page
├── rnd-poc.html          # R&D and POC page
├── src/
│   ├── assets/           # Images and static assets
│   ├── js/
│   │   ├── carousel.js   # Image carousel functionality
│   │   ├── icons.js      # SVG icon library
│   │   └── main.js       # Main JavaScript (navigation, mobile menu)
│   ├── styles/
│   │   ├── variables.css # CSS variables
│   │   └── global.css    # Global styles
│   ├── components/       # Component-specific CSS
│   └── pages/           # Page-specific CSS
└── README.md
```

## Running the Website

### Option 1: Python (Recommended)
```bash
python3 -m http.server 8000
```

### Option 2: Node.js
```bash
npx http-server -p 8000
```

### Option 3: Any Static File Server
Use any static file server of your choice.

Then open your browser to: `http://localhost:8000`

## Features

- ✅ Fully responsive design
- ✅ Mobile-friendly navigation
- ✅ Image carousel on home page
- ✅ Interactive training course catalog
- ✅ Contact form
- ✅ No dependencies or build process
- ✅ Pure HTML/CSS/JavaScript

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Deployment

Simply upload all files to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any web server (Apache, Nginx, etc.)

No build step required!

## License

Copyright © Vigno Inc. All rights reserved.
