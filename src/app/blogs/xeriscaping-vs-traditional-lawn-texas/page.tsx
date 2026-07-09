'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import RelatedLinks from '#/BlogComponents/RelatedLinks/RelatedLinks';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Central Texas summers push traditional turf lawns to their limit — high water bills, brown patches by August, and constant irrigation just to keep grass alive. Xeriscaping (drought-tolerant, native-plant landscaping) is a real alternative, not an all-or-nothing choice. This post breaks down what each approach actually costs and delivers for a Waco-area property.",
  },
  {
    type: 'prose',
    heading: 'What Xeriscaping Actually Means',
    body: "Not gravel and cactus — a mix of native and adapted plants (Texas sage, yucca, black-eyed Susan, native grasses) chosen for the region's rainfall and heat, arranged to need minimal supplemental irrigation once established.",
  },
  {
    type: 'table',
    heading: 'Water Usage Comparison',
    tableHeaders: ['Landscape Type', 'Weekly Water Needs (Peak Summer)', 'Notes'],
    tableRows: [
      ['Traditional St. Augustine / Bermuda turf', '1–1.5 inches', 'Requires consistent irrigation to avoid browning'],
      ['Established xeriscape beds', '50–70% less', 'Once plants mature (12–18 months)'],
    ],
  },
  {
    type: 'prose',
    heading: 'Upfront Cost vs. Long-Term Savings',
    body: 'Xeriscape conversion has a higher upfront design/install cost than reseeding turf, but lower water bills and near-zero mowing costs typically break even within 2–4 years depending on property size.',
  },
  {
    type: 'prose',
    heading: 'The Hybrid Approach Most Waco Homeowners Choose',
    body: 'Full-yard xeriscaping isn’t required — most customers convert high-sun, hard-to-water zones (parking strips, slopes, south-facing beds) to xeriscape while keeping a smaller turf area for kids, pets, and entertaining.',
  },
  {
    type: 'tips',
    heading: 'Is It Right for Your Property?',
    body: 'Best candidates are properties with:',
    items: [
      'Full-sun exposure in at least part of the yard',
      'HOA rules that permit native/drought-tolerant plantings',
      'An owner who wants to cut water bills and mowing time',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Xeriscaping vs. Traditional Lawn: What's Right for Your Waco Yard?"
        description="Central Texas summers push traditional turf to its limit. Here's what xeriscaping actually costs and saves compared to a traditional lawn for a Waco-area property."
        imageSrc="/pages/blogs/xeriscaping.svg"
        imageAlt="Xeriscaping vs traditional lawn comparison for Waco, TX yards"
        category="Landscape Design"
        date="April 10, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <RelatedLinks
        links={[
          { href: '/services/landscape-design', text: 'Landscape Design' },
          { href: '/services/irrigation-sprinkler-systems', text: 'Irrigation & Sprinkler Systems' },
        ]}
      />
      <BlogCTA
        title="Curious What a Xeriscape Conversion Would Look Like for Your Yard?"
        body="Get a free landscape design consultation."
        buttonText="Get Free Consultation"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="xeriscaping-blog" />
    </>
  );
}
