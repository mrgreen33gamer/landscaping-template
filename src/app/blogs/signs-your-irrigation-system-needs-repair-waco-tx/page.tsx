'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import RelatedLinks from '#/BlogComponents/RelatedLinks/RelatedLinks';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faDollarSign, faDroplet, faWater, faSeedling, faBolt } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "A failing irrigation system rarely announces itself loudly — it shows up as a slightly higher water bill or a patch of grass that's just a little browner than the rest. Here are the five signs Waco homeowners should watch for before small issues become expensive ones.",
  },
  {
    type: 'cards',
    heading: '5 Signs Your Irrigation System Needs Repair',
    cards: [
      { icon: faDollarSign, title: 'Unexplained Water Bill Increases', body: 'A jump of $20–40+ with no change in watering schedule usually points to a stuck valve or underground leak, not weather.' },
      { icon: faDroplet, title: 'Uneven Coverage — Dry Patches Next to Soggy Ones', body: 'Usually a clogged, misaligned, or broken sprinkler head; can also indicate a zone pressure problem.' },
      { icon: faWater, title: 'Water Pooling Near Heads or Along Sidewalks', body: 'Almost always a broken line or cracked head fitting underground — waiting makes the repair (and the water waste) worse.' },
      { icon: faSeedling, title: 'System Runs but Grass Still Looks Stressed', body: "Points to a controller/timer issue running the wrong duration, or a valve that isn't fully opening." },
      { icon: faBolt, title: 'Zones That Never Seem to Turn On', body: 'Likely a solenoid or wiring issue at the valve — an easy fix if caught early, a full valve replacement if ignored.' },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Most of these are same-visit repairs when caught early. Letting them run through a full Texas summer usually means a bigger bill — both from wasted water and more extensive repair work.',
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="5 Signs Your Irrigation System Needs Repair (Waco, TX)"
        description="A failing irrigation system rarely announces itself loudly. Here are the five signs Waco homeowners should watch for before small issues become expensive ones."
        imageSrc="/pages/blogs/irrigation-repair-signs.svg"
        imageAlt="Signs your irrigation system needs repair in Waco, TX"
        category="Irrigation"
        date="April 18, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <RelatedLinks
        links={[
          { href: '/services/irrigation-sprinkler-systems', text: 'Irrigation & Sprinkler Systems' },
          { href: '/services/lawn-mowing-maintenance', text: 'Lawn Mowing & Maintenance' },
        ]}
      />
      <BlogCTA
        title="Notice Any of These Signs?"
        body="Get a free irrigation diagnostic from GreenScape Pro."
        buttonText="Get Free Diagnostic"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="irrigation-repair-blog" />
    </>
  );
}
