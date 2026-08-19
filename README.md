# SportVot — Website Redesign

React + TypeScript + Tailwind CSS v4 rebuild of the SportVot marketing site (sportvot.ai), for developer handoff.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** — design tokens (colors, fonts, radii) live in [`src/index.css`](src/index.css) under the `@theme` block, sourced from the official "SportVot Design system v1.0" Figma file (indigo primary `#1D1C8C`, Inter typeface, Phosphor icons).
- **React Router** for client-side routing across the 9 pages
- **GSAP + ScrollTrigger** for scroll reveals, the pinned step walkthrough, magnetic buttons, card tilt, and the animated stat counters

## Structure

```
src/
  components/   shared layout (Header, Footer, Layout), UI primitives (ui.tsx, Btn, cards.tsx, forms.tsx),
                and interaction primitives (Reveal, Magnetic, TiltCard, StatCounter, PinSteps, Marquee, CursorDot)
  pages/        one file per route (Home, ForOrganisations, Solutions, Play, About, News, CaseStudies, Contact, LiveTV)
  lib/          small helpers (cn, useTilt)
```

`design-reference/` holds the original cowork-generated static HTML/CSS/JS prototype this was rebuilt from — kept for content/copy reference only, not part of the app build.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build     # type-check + production build
```

## Notes for devs

- All copy content is inline in the page components under `src/pages/` — no CMS yet.
- Forms are front-end only (`DemoForm` in `src/components/forms.tsx` fakes a submit state); wire up a real submit handler when a backend/endpoint is ready.
- The hero video source (`/video/hero-reel.mp4`) is not included — the `<video>` element fails gracefully to the CSS gradient background if the file 404s.
