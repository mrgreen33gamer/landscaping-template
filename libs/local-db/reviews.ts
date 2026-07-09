// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for GreenScape Pro — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Landscape Design',
    text:     "We had GreenScape Pro redo our entire front bed after years of neglect. They walked us through the design before touching anything, stuck to the quote, and the plants are still thriving eight months later. Exactly what we wanted.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Lawn Mowing & Maintenance',
    text:     "Switched to GreenScape Pro after our old mowing service kept skipping weeks. Same crew every time, text before they arrive, and the yard has never looked more consistent. Worth every dollar.",
  },
  {
    name:     'David R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Irrigation & Sprinkler Systems',
    text:     "Our water bill spiked and we couldn't figure out why. Their tech found a broken valve in twenty minutes and had it fixed the same visit. Straightforward pricing, no upsell pressure.",
  },
  {
    name:     'Patricia M.',
    location: 'Robinson, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Hardscaping',
    text:     "The patio they built has held up perfectly through two Texas summers and an ice storm — no settling, no cracking. They clearly didn't cut corners on the base work.",
  },
  {
    name:     'James O.',
    location: 'China Spring, TX',
    rating:   4,
    date:     'November 2025',
    service:  'Tree & Shrub Care',
    text:     "Had a large oak that needed serious pruning after storm damage. Crew was careful, cleaned up completely, and gave us honest advice on what could be saved versus removed.",
  },
  {
    name:     'Linda B.',
    location: 'Temple, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Seasonal Cleanup',
    text:     "Booked their fall cleanup and it was the most thorough we've had — every bed cleared, gutters cleared of debris nearby, and nothing left in bags on the curb. Already booked spring cleanup too.",
  },
];

export default reviews;
