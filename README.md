# Nandhakishor — Portfolio

Dark-minimal developer portfolio. React + Vite + React Router + Framer Motion.

## Run locally
```
npm install
npm run dev
```

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. Import the repo in Vercel → Framework preset: **Vite**.
3. Build command: `npm run build`, Output dir: `dist` (Vercel auto-detects both).
4. Deploy. `vercel.json` already handles SPA route rewrites.

## Structure
```
src/
  pages/     Home, Work, About, Contact, NotFound
  components/  Navbar, Footer, Cursor, Reveal
public/
  Nandhakishor-Resume.pdf   downloadable resume
```

## To customize
- Colors/fonts: `src/index.css` (`:root` variables).
- Live project demo links: none deployed yet — `src/pages/Work.jsx` currently links to GitHub source only. Add a `demo` field per project once hosted.
- Contact form: currently opens the visitor's mail client via `mailto:`. Swap for Formspree/EmailJS if you want it to submit without leaving the site.
