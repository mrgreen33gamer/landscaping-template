# Landscaping & Lawn Care Template — Design

## Origin

`landscaping-template` is a full mirror of `hvac-template`, the "Arctic Air HVAC"
Next.js site sold as a listing on the templates marketplace. The HVAC template
ships a complete production-shaped app: public marketing site, blog engine,
lead-capture contact forms, and a real admin dashboard with lead
tracking/analytics (page views, sessions, journeys, events, geo lookups via
MaxMind, consent tracking). This spec defines the re-skin of that same
architecture into a landscaping/lawn-care business, to be listed as a second
"Coming Soon" template ("Landscaping & Lawn Care").

The codebase was copied wholesale from `hvac-template` (excluding `.git`,
`node_modules`, `.next`, `tsconfig.tsbuildinfo`) into a fresh directory with
its own git history. `.env` / `.env.local` were copied for local dev but are
now gitignored in the new repo (they were tracked, unignored, in the source
repo — not repeating that here). They currently still point at the HVAC
site's live MongoDB/SendGrid/reCAPTCHA/Mapbox credentials; before this site
takes real traffic, `MONGODB_URI` and `DATABASE_NAME` need to point at a
dedicated database so lead data doesn't mix with the HVAC site's. That's a
manual config step outside this spec's scope.

## What stays untouched

- Admin dashboard UI/logic (`src/app/admin/**`, `components/AdminComponents/**`)
  — labels like "Leads", "Events", "Sessions" are already generic.
- Tracking APIs (`src/app/api/track*`, `src/app/api/poll`) and their logic.
- Auth (`src/app/api/auth`, `src/app/admin/login`).
- Contact form submission pipeline (`src/app/api/submitContact`), SendGrid
  integration, reCAPTCHA.
- Component architecture and file/folder conventions — no new components,
  no new page types beyond what HVAC already has one-for-one equivalents for.
- Three-font system: `$titleFont` (Barlow Condensed), `$headerFont` (Outfit),
  `$textFont` (Inter). This works well and isn't landscaping-specific.

## What changes

### Brand tokens (`src/app/globalVariables.scss`)
- Business name: "Arctic Air HVAC" → **"GreenScape Pro"**.
- Palette: navy+orange → green+earth-tone, keeping the same *structure*
  (a near-black base, a tinted grey scale, one accent color with light/dark
  variants, one danger-red retained as-is):
  - `$black`/`$obsidian`/`$blackflat` → deep forest tones (e.g. `#0d1f16`,
    `#16281f`) instead of navy tones.
  - `$darkgrey`/`$grey`/`$lightgrey` → green-tinted greys instead of
    navy-tinted greys.
  - `$orange`/`$lightorange`/`$darkorange` → `$green`/`$lightgreen`/`$darkgreen`
    as the **primary** accent (a true grass/foliage green, e.g. base `#16a34a`),
    replacing orange as the live accent rather than staying a legacy alias.
  - `$blue` accent retained as a secondary accent (works fine against green).
  - `$danger-red` unchanged.

### Services (6 pages, 1:1 structural mirror of HVAC's service pages)
| HVAC (`src/app/services/*`) | Landscaping equivalent |
|---|---|
| ac-repair | lawn-mowing-maintenance |
| installation | landscape-design |
| duct-cleaning | irrigation-sprinkler-systems |
| heating | hardscaping |
| indoor-air-quality | tree-shrub-care |
| maintenance | seasonal-cleanup |

Each page keeps its existing section structure (hero, service details,
process, CTA, FAQ, etc.) — only copy changes to reflect the new service.

### Industries (3 pages, 1:1 structural mirror)
| HVAC (`src/app/industries/*`) | Landscaping equivalent |
|---|---|
| automotive | hoa-property-management |
| manufacturing | commercial-real-estate |
| oil-gas | municipal-government |

### Blog (3 posts, same component architecture, new copy)
| HVAC post | Landscaping equivalent |
|---|---|
| heat-pump-vs-traditional-hvac-texas | xeriscaping-vs-traditional-lawn-texas |
| how-often-should-you-replace-hvac-filter | when-to-schedule-seasonal-lawn-cleanup |
| signs-ac-needs-replacement-waco-tx | signs-your-irrigation-system-needs-repair-waco-tx |

### Locale
Unchanged: Waco / Central Texas service-area pages, same SEO structure,
same city list in `service-areas`.

### Images
HVAC's real photos (e.g. `public/pages/blogs/hvac-filter.jpg`) are replaced
with labeled placeholder graphics — a gradient block (green-tone) with
centered text naming what the image should eventually be (e.g. "Hardscaping
Project Gallery Image"), sized/aspect-ratio-matched to the slot they replace.
No new photography is sourced as part of this work; placeholders are
swap-in-ready for real photos later.

### Marketplace listing metadata
The listing card content the user provided (title, tagline, feature pills:
"Seasonal Pages", "Before/After", "Online Quotes") should end up reflected in
the new site's actual hero copy and feature highlights, not just the
marketplace card — i.e. the site should deliver on what the card promises.

## Out of scope
- Real photography / final image assets.
- New database provisioning (Mongo) or credential rotation — flagged above
  as a manual step.
- Any admin dashboard feature changes.
- Any new page types not already present in `hvac-template`.

## Rollout order (for the implementation plan)
1. Brand tokens + global palette.
2. Homepage + shared layout chrome (Header, Footer, CTAs, metadata).
3. Services section (6 pages).
4. Industries section (3 pages).
5. Blog (3 posts + any blog-index copy).
6. Service-area / about / contact copy pass (name/business references only,
   locale unchanged).
7. Image placeholder pass across all touched pages.
8. Final sweep: grep for leftover "HVAC" / "Arctic Air" / service-specific
   strings across the whole `src/` and `components/` tree.
