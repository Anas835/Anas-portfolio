# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Mohammed Anas's portfolio website - a static HTML/CSS/JavaScript website showcasing his work as a creative developer and designer. The portfolio features:

- Modern, responsive design with Tailwind CSS
- Interactive animations and scroll effects
- Skills showcase with animated progress bars
- Portfolio gallery with live project links
- Contact information and call-to-action buttons

## Technology Stack

- **Frontend**: Static HTML5 with vanilla JavaScript
- **Styling**: Tailwind CSS v4.1.5 (compiled and bundled)
- **Fonts**: Custom fonts (Satoshi, IBM Plex Mono) loaded locally
- **Analytics**: Plausible.io for privacy-focused analytics
- **Build**: Pre-built/bundled assets (index-Ct5vtVkz.js, index-lid5G8OZ.css)

## File Structure

```
/
├── index.html              # Main portfolio page
├── assets/                 # Bundled CSS/JS and project images
│   ├── index-Ct5vtVkz.js  # Main bundled JavaScript
│   ├── index-lid5G8OZ.css # Main bundled CSS (Tailwind)
│   ├── me7.webp           # Profile image
│   ├── *.png              # Project screenshots and assets
│   └── game-pad.mp4       # Video asset for Game Pad project
├── _vercel/               # Vercel deployment analytics
├── plausible.io/          # Analytics scripts
├── *.ttf                  # Local font files
└── *.png                  # Icons and images
```

## Development Notes

### Static Site Approach
- This is a fully static website with no build process required
- All assets are pre-bundled and optimized
- JavaScript includes animations, scroll effects, and intersection observers

### Key Features
- **Responsive Design**: Mobile-first approach using Tailwind breakpoints
- **Dark Theme**: Black background with white/transparent text that changes on desktop
- **Animations**: CSS transitions and JavaScript-powered scroll animations
- **Performance**: Optimized images, bundled assets, and efficient loading

### Content Sections
1. **Hero Section**: Large typography introduction
2. **About/Services**: Skills and service offerings
3. **Skills**: Animated progress bars for technical skills
4. **Portfolio**: Project showcase with live links
5. **Contact**: Call-to-action and social links

### External Dependencies
- Tailwind CSS (bundled)
- Plausible.io analytics
- Calendly integration for booking calls
- Google Drive for CV download

## Modification Guidelines

When making changes to this portfolio:

1. **Content Updates**: Edit the HTML directly for text, links, and project information
2. **Styling**: Use existing Tailwind classes; avoid adding custom CSS unless necessary
3. **Images**: Optimize new images and place in appropriate directories
4. **Performance**: Keep the lightweight, fast-loading nature of the site
5. **Analytics**: Respect the privacy-focused approach with Plausible.io

## Deployment

This is a static site that can be deployed to any static hosting platform:
- Currently configured for Vercel (based on _vercel/ directory)
- No build step required - files can be served directly
- Ensure all asset paths remain relative