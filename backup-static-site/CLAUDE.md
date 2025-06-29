# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website built for GitHub Pages deployment. It's a Progressive Web App (PWA) with no build system - files are directly editable and deployable.

## Architecture

**Core Technologies:**
- HTML5, CSS3, Vanilla JavaScript (ES6+)
- Bootstrap 5.3.0 framework
- PWA features (service worker, manifest)

**Key Files:**
- `index.html` (1,794 lines) - Main portfolio page with all sections
- `repositories.html` - GitHub projects showcase page  
- `resume.html` - Printable resume format
- `assets/css/style.css` - Complete styling system with dark/light theme support
- `sw.js` - Service worker for PWA caching
- `manifest.json` - PWA configuration

## Development Commands

**No build system** - This is a static site with direct file editing:
- Development: Use any local web server (Python: `python -m http.server`, Node: `npx serve`)
- Deployment: Direct push to GitHub Pages (files are served as-is)
- Testing: Manual browser testing across devices

## Code Structure

**CSS Architecture:**
- Uses CSS custom properties for theming (`--primary-color`, `--background-color`, etc.)
- Mobile-first responsive design with Bootstrap grid
- Component-based styling approach
- Dark/light theme toggle functionality

**JavaScript Patterns:**
- Event-driven architecture with proper event delegation
- Intersection Observer API for scroll animations
- Service Worker for offline capabilities and caching
- Modular script organization within single files

**Content Organization:**
- Single-page application structure with smooth scrolling navigation
- Sections: Hero, About, Skills, Education, Experience, Projects, Contact
- Separate pages for detailed repositories and printable resume

## Important Considerations

**Performance Optimizations:**
- WebP images with JPEG fallbacks
- CDN-hosted external libraries
- Service worker caching strategy
- Lazy loading for non-critical resources

**SEO and Accessibility:**
- Comprehensive meta tags and Open Graph support
- Schema.org structured data for person/website
- ARIA labels and accessibility features
- Skip navigation links

**Theme System:**
- CSS custom properties drive light/dark themes
- Theme preference stored in localStorage
- Automatic system theme detection with manual override

When making changes, maintain the hand-crafted approach and avoid introducing build complexity unless absolutely necessary.