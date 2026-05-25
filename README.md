# Esthetician Portfolio Demo

This repository contains a fictional portfolio site for an esthetician who offers braid styling and nail services. The project is meant to show a complete small-business style website with a polished layout, animated details, service information, and a simple gallery.

## Features

- A hero section with the business name, a short introduction, and a booking link
- A small certificates carousel on the hero card
- A rotating gallery of braid and nail photos that pauses on hover
- Service cards and pricing information
- A footer with contact and social links

## How the Site Works

The site is a single-page React app. Each section is stacked vertically and linked with anchors, so the page feels like a smooth brochure-style portfolio.

The gallery automatically rotates through images every few seconds. When the cursor moves over the gallery, the rotation pauses so the images are easier to view.

The certificate area in the hero also rotates automatically. This gives the page a little movement without making it hard to read.

The styling is handled in one main CSS file. That file controls the color palette, layout, card spacing, animations, and responsive behavior for smaller screens.

## Tech Stack

- React
- Vite
- Plain CSS
- Node.js and npm

## Project Files

- `src/App.jsx` - main page content, carousels, and section layout
- `src/index.css` - all page styling, animation, and responsive layout rules
- `src/assets/` - gallery photos and certificate images used on the page
- `vite.config.js` - build configuration for GitHub Pages
- `package.json` - scripts for development, build, and deployment

## Local Preview

To open the project on a computer:

```bash
npm install
npm run dev
```

Then open the local address shown by Vite in the browser.

## Build

To create the production version:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## GitHub Pages Deployment

The project is set up for GitHub Pages. The deployed site is published from the `gh-pages` branch.

Deployment flow:

1. `npm run build` creates the final site files in `dist/`.
2. `vite.config.js` sets the base path so the app works at the GitHub Pages URL.
3. `npm run deploy` builds the project and pushes the `dist/` folder to the `gh-pages` branch.
4. GitHub Pages serves the files from that branch.

Important deployment files:

- `package.json` - includes the deploy script
- `vite.config.js` - sets the GitHub Pages path
- `.gitignore` - keeps generated files like `node_modules/` and `dist/` out of normal commits
- `.github/workflows/deploy.yml` - optional automated deployment workflow

## Notes

- This is a demo portfolio, so the content and photos are placeholder material.

