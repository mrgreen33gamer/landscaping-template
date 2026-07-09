'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import RelatedLinks from '#/BlogComponents/RelatedLinks/RelatedLinks';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Timing seasonal cleanup wrong wastes money — too early and you're paying for a second visit after more leaves drop; too late and beds go into winter (or summer) already stressed. Here's the actual Central Texas timing window.",
  },
  {
    type: 'prose',
    heading: 'Fall Cleanup Window',
    body: 'Late October through mid-December is the sweet spot for Central Texas — after most deciduous trees have dropped but before the first hard freeze locks in debris.',
  },
  {
    type: 'prose',
    heading: 'Spring Cleanup Window',
    body: 'Early March through early April, after the last frost risk passes but before summer growth accelerates — this is when beds get refreshed and mulch gets reset for the growing season.',
  },
  {
    type: 'cards',
    heading: "Signs You're Overdue",
    cards: [
      { title: 'Smothered grass', body: 'Leaf buildup smothering grass and killing patches underneath.' },
      { title: 'Compacted mulch', body: "Beds compacted and no longer insulating roots." },
      { title: 'Pest activity', body: 'Visible pest activity in undisturbed debris piles.' },
    ],
  },
  {
    type: 'prose',
    heading: 'What a Proper Cleanup Includes',
    body: 'Full leaf and debris removal (not just the visible pile — under shrubs and along fence lines too), bed edging reset, and complete haul-off so nothing sits curbside.',
  },
  {
    type: 'prose',
    heading: 'Should You Bundle Spring and Fall?',
    body: "Properties with heavy tree cover benefit most from a bundled plan — it locks in pricing and guarantees you don't forget the window until it's already overdue.",
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="When to Schedule Seasonal Lawn Cleanup in Central Texas"
        description="Timing seasonal cleanup wrong wastes money. Here's the actual fall and spring cleanup windows for Central Texas properties, and what to watch for if you're already overdue."
        imageSrc="/pages/blogs/seasonal-cleanup-timing.svg"
        imageAlt="Seasonal lawn cleanup timing guide for Central Texas properties"
        category="Seasonal Care"
        date="April 14, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <RelatedLinks
        links={[
          { href: '/services/seasonal-cleanup', text: 'Seasonal Cleanup' },
          { href: '/services/tree-shrub-care', text: 'Tree & Shrub Care' },
        ]}
      />
      <BlogCTA
        title="Ready to Get Your Cleanup on the Calendar Before the Window Closes?"
        body="Book fall or spring cleanup with GreenScape Pro."
        buttonText="Schedule Cleanup"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="seasonal-cleanup-blog" />
    </>
  );
}
