# SportVot — Website Redesign

React + TypeScript + Tailwind CSS v4 rebuild of the SportVot marketing site (sportvot.ai), for developer handoff.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** — design tokens (colors, fonts, radii) live in [`src/index.css`](src/index.css) under the `@theme` block, sourced from the official "SportVot Design system v1.0" Figma file (indigo primary `#1D1C8C`, Inter typeface, Phosphor icons).
- **React Router** for client-side routing across the 10 routes (9 pages + the dynamic blog post route)
- **GSAP + ScrollTrigger** for scroll reveals, magnetic buttons, card tilt, and the animated stat counters

## Structure

```
src/
  components/   shared layout (Header, Footer, Layout), UI primitives (ui.tsx, Btn, cards.tsx, forms.tsx),
                and interaction primitives (Reveal, Magnetic, StatCounter, Marquee, CursorDot),
                plus the two full-bleed video/image hero sections (HomeHero, PlayHero)
  pages/        one file per route — see the route table below
  data/         content arrays shared between a listing page and its detail page
                (blog.ts, clients.ts, caseStudies.ts)
  lib/          small helpers (cn in utils.ts, the useTilt hook)
```

### Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/live-production` | SportVot Live Production (formerly "For Organisations"; Cloud Studio and the old Solutions page content both live here as sections — jump to `#cloud-studio`) |
| `/play` | SportVot Play |
| `/play/blog/:slug` | Individual blog post (data in `src/data/blog.ts`; unknown slugs redirect to `/play`) |
| `/about` | About Us |
| `/news` | News & press coverage |
| `/case-studies` | Case studies |
| `/contact` | Contact |
| `/live-tv` | SportVot OTT / Live TV |
| `*` | 404 (`NotFound.tsx`) |

`design-reference/` holds the original cowork-generated static HTML/CSS/JS prototype this was rebuilt from — kept for content/copy reference only, not part of the app build.

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build      # type-check + production build
npm run lint       # oxlint
```

## Notes for devs

- All copy content is inline in the page components under `src/pages/` — no CMS yet.
- Forms are front-end only (`DemoForm` in `src/components/forms.tsx` fakes a submit state); wire up a real submit handler when a backend/endpoint is ready.
- The hero video (`public/herovideo.m4v`, ~80MB) **is** committed to this repo along with a handful of large images/gifs in `public/play/` and `public/news/`. That's pushed the repo past 90MB — worth moving to a CDN/asset host before this grows further; the `<video>` element already fails gracefully to the CSS gradient background if the source 404s, so swapping the src is low-risk.
- Most content is real, pulled directly from SportVot's live properties (sportvot.ai, playevents.sportvot.com, freepressjournal.in, and the founders' own photos) — but a few sections are still placeholder/sample data pending real input:
  - **Venue listings** on `/play` (`VENUES` array in `Play.tsx`) are the 11 real Mumbai venues supplied by SportVot, with photos in `public/play/venues/` (name and location parsed from the image filenames). There is no city filter now that they're all in one city; add one back when venues in other cities arrive.
  - **Case studies** (`src/data/caseStudies.ts`) are the seven real ones from SportVot's "Website Case Studies" doc, with detail pages at `/case-studies/:slug`. The thumbnails supplied were only 298×170 (upscaled 2×, so they look soft) — swap in higher-res `public/play/case-*.jpg` when available.
  - **Enquiry form** (`src/components/EnquiryForm.tsx`) is complete and routes by type (production/general → contact@sportvot.com, events → sportvotplay@sportvot.com), but nothing is delivered until a backend is set: define `VITE_ENQUIRY_ENDPOINT` (any URL accepting a JSON POST of `{topic, to, fields}` that emails `to`). Without it, submissions only log to the console. The Play page's own "Book a Consultation" form is still the old demo form.
  - **Live TV highlights** (`LiveTV.tsx`, thumbnails in `public/tv/`) are a hand-picked snapshot from sportvot.com/tv, each linking to its `sportvot.com/video/<id>` watch page — refresh the `MATCHES` list when you want newer ones.
  - The Cloud Studio GIFs (`public/play/cloud-*.gif`) and Advanced Production images (`public/play/advanced-*.webp`) are the real assets supplied by SportVot, compressed for the web (~15MB of GIFs total — lazy-loaded).
