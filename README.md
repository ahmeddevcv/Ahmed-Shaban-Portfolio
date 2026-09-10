# Ahmed — Full-Stack .NET Developer Portfolio

A premium, dark-themed personal portfolio built with React, Vite, and Bootstrap 5.

## Tech stack

- React + Vite
- Bootstrap 5 / React Bootstrap (grid + utilities, heavily restyled)
- React Router DOM (project detail pages)
- Framer Motion (subtle entrance/reveal animations, respects `prefers-reduced-motion`)
- Custom CSS with a small design-token system (`src/styles/global.css`)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Project structure

```
src/
├── assets/            # images/icons (empty placeholders — add real assets here)
├── components/        # UI building blocks (Navbar, Hero, About, Skills, Projects, ...)
├── pages/             # Home.jsx (assembles all sections) and ProjectDetails.jsx (routed)
├── data/              # Editable content: projects.js, skills.js, experience.js, config.js
├── styles/            # One CSS file per component/section
├── App.jsx            # Router setup
└── main.jsx           # Entry point
```

## Editing content

All real content lives in `src/data/`, separate from the UI:

- **`config.js`** — site name, role, and `CONTACT` (email, WhatsApp, LinkedIn, GitHub). Email and WhatsApp are intentionally left blank — fill them in when available. The Contact section and Hero automatically hide/adjust for empty fields.
- **`projects.js`** — one object per project (used by both the Projects grid and the `/projects/:slug` detail pages). Leave `github`, `liveDemo`, or `image` as `""` until real values exist; the UI hides those links/images automatically.
- **`skills.js`** — skill groups shown as cards in the Skills section.
- **`experience.js`** — work experience, education, and training entries for the timeline.

## Notes

- No real screenshots, university name, graduation date, email, or WhatsApp number were supplied, so those fields are left as empty, clearly-commented configurable values rather than invented.
- The exact ITI training track wasn't provided and is left as a placeholder string in `experience.js` — update it once known.
- GitHub (`https://github.com/ahmeddevcv`) and LinkedIn (`https://www.linkedin.com/in/ahmed-dev-cv/`) links are wired in exactly as given.
