# Esthetician Portfolio (Demo)

This is a small, fake portfolio site curated for an esthetician showcasing hair (braids) and nails services. It's a demo project used to illustrate layout, styling, and a few interactive UI elements.

## Features

- Hero with animated sparkles and a subtle pink text "shine" effect
- Right-side certifications carousel inside the hero
- Auto-rotating gallery carousel (shows 3 items at a time; hover to pause)
- Services, pricing list, and contact / booking CTA in the footer
- All assets are local under `src/assets` (placeholder images and SVG certificates)

## Tech Stack

- Vite (dev tooling and build)
- React (UI)
- Plain CSS (single stylesheet: `src/index.css`)
- Node / npm (package manager)

## Getting Started (Local Development)

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the app at the URL printed by Vite (usually `http://localhost:5173`).

## Build & Preview

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure (important files)

- `index.html` — app entry
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — main application UI (hero, gallery, certificates, pricing)
- `src/index.css` — global styles, animations, and theme
- `src/assets/` — images and certificate SVGs used in the demo

## Deployment

This project is set up for a GitHub Pages project site, so the deployed URL is a subpath like `https://<your-username>.github.io/<repo-name>/`.

### How deployment works in plain English

1. `npm run build` creates the production site in `dist/`.
2. `vite.config.js` sets the base path to `/esthetician-portfolio/` so the images, CSS, and JavaScript load from the GitHub Pages URL instead of the site root.
3. `npm run deploy` runs the build and then pushes the `dist/` folder to the `gh-pages` branch using `git subtree`.
4. GitHub Pages reads the `gh-pages` branch and serves the files as the live site.

### Files involved in deployment

- `package.json` - contains the `build`, `predeploy`, and `deploy` scripts.
- `vite.config.js` - sets the GitHub Pages base path.
- `.gitignore` - keeps `node_modules/` and `dist/` out of normal commits.
- `.github/workflows/deploy.yml` - optional GitHub Actions workflow for CI-based deployment.

### Manual deploy command

```bash
npm run deploy
```

### Important note

If you rename the repository, update the `base` value in `vite.config.js` to match the new repo name. That value must stay in sync with the GitHub Pages path.

## Notes & Licensing

- This repository contains demo content and placeholder images for a fictional esthetician portfolio. Replace images and text with real assets before publishing.
- No license is specified; add one if you intend to publish or share the project.
