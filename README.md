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

This is a static frontend app — it can be deployed to any static host (Netlify, Vercel, GitHub Pages, etc.). Build artifacts are produced in the `dist/` folder after `npm run build`.

### Deploy to GitHub Pages (quick)

1. Install the `gh-pages` package as a dev dependency:

```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json` (example):

```json
"scripts": {
	"predeploy": "npm run build",
	"deploy": "gh-pages -d dist",
	"dev": "vite",
	"build": "vite build",
	"preview": "vite preview"
}
```

3. Optionally set the `homepage` field in `package.json` for project pages:

```json
"homepage": "https://<your-username>.github.io/<repo-name>/"
```

4. Run the deploy script:

```bash
npm run deploy
```

Notes:
- For a user/organization site (username.github.io) use `"homepage": "https://<your-username>.github.io/"` and deploy to the repository named `username.github.io`.
- If your app is served from a sub-path (repo pages), set the `homepage` above so Vite resolves asset paths correctly.

### Deploy with GitHub Actions (recommended for CI)

Create a workflow file at `.github/workflows/deploy.yml` that builds and deploys the `dist/` folder to GitHub Pages. Example (minimal):

```yaml
name: deploy

on:
	push:
		branches: [ main ]

jobs:
	build-and-deploy:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- uses: pnpm/action-setup@v2
				with:
					version: 8
			- name: Install dependencies
				run: npm install
			- name: Build
				run: npm run build
			- name: Deploy to GitHub Pages
				uses: peaceiris/actions-gh-pages@v3
				with:
					github_token: ${{ secrets.GITHUB_TOKEN }}
					publish_dir: ./dist
```

Replace `main` with your default branch name if different.

If you'd like, I can add the `gh-pages` script to `package.json` and/or create the GitHub Actions workflow file for you.

## Notes & Licensing

- This repository contains demo content and placeholder images for a fictional esthetician portfolio. Replace images and text with real assets before publishing.
- No license is specified; add one if you intend to publish or share the project.
