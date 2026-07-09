// GreenScape Pro — Lawn Mowing & Maintenance Service Page
// Order: Breadcrumb → SectionIntro → TrustBar → WhatToExpect → WhyChooseUs
//        → ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection
//        → LocalServiceAreas → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faSeedling, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faTree, faWater, faPaintRoller, faBroom,
} from "@fortawesome/free-solid-svg-icons";

export default function LawnMowingMaintenancePage() {

  const expectations = [
    { icon: faSearch,       title: "Same-Week Walkthrough",             description: "We walk the property, flag anything that needs attention, and explain the plan in plain English — no upsell pressure, ever." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Start",    description: "You get a written price before any work starts. It doesn't change once we're on-site." },
    { icon: faCheckCircle,  title: "Consistent Crew, Consistent Cut",    description: "The same crew services your property visit to visit, so mowing height, edging lines, and cleanup stay consistent." },
    { icon: faShieldHalved, title: "30-Day Re-Service Guarantee",        description: "If anything about a visit isn't right, we come back and fix it at no charge within 30 days." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "On-Time Crews — Every Visit",       description: "We run tight routes and text you when we're on the way. No all-day windows, no guessing." },
    { icon: faSeedling,     title: "Weekly or Bi-Weekly Plans",         description: "Choose the cadence that fits your yard and budget — switch anytime, no long-term contract required." },
    { icon: faShieldHalved, title: "TDA Licensed, Fully Insured",       description: "Every crew member works under our TDA-licensed applicator status for treatments, and every visit is covered by full insurance." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",      description: "Contact us by phone, text, or online. We'll schedule a free on-site estimate, usually within 2-3 business days.", icon: faHeadset },
    { number: 2, title: "Crew Walks Property", description: "On time, in uniform. We flag anything that needs attention before quoting.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",   description: "We show you the exact price before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Mow & Guarantee",   description: "Clean edges, cleared debris, tested before we leave, and backed by our 30-day guarantee.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Lawns mowed and maintained across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rating",                     suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years serving Waco-area properties",               suffix: "+", duration: 2 },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",       body: "The price we quote is the price you pay — no matter how the terrain looks up close." },
    { icon: faRotateLeft,   title: "30-Day Re-Service",       body: "Not satisfied with a visit? We come back and make it right at no charge." },
    { icon: faHeadset,      title: "Text-Ahead Scheduling",   body: "We text before every visit so you always know when the crew is coming." },
    { icon: faLock,         title: "Licensed & Insured",      body: "TDA-licensed applicators, fully insured. Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling, most available crews.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full mowing coverage throughout Hewitt.",                 badge: "" },
    { town: "Woodway",      benefit: "Weekly service available for Woodway neighborhoods.",     badge: "" },
    { town: "Robinson",     benefit: "On our regular route — quick turnaround guaranteed.",     badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.",              badge: "" },
    { town: "Temple",       benefit: "Full mowing coverage for Bell County properties.",         badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts",  us: "✅ Always written",      others: "❌ Verbal estimate only" },
    { feature: "Same crew every visit",                us: "✅ Consistent crew",     others: "❌ Rotating crews" },
    { feature: "TDA licensed applicators",             us: "✅ All crew leads",       others: "❌ Not always" },
    { feature: "30-day re-service guarantee",          us: "✅ Every job",           others: "❌ No guarantee" },
    { feature: "Text-ahead scheduling",                us: "✅ Every visit",         others: "❌ No notice given" },
  ];

  const faq = [
    { question: "How much does lawn mowing cost in Waco?",              answer: "Most residential lots run $45–$85 per visit depending on size and terrain. Weekly and bi-weekly plans include edging and blowdown. We quote flat-rate before starting." },
    { question: "Can you start service the same week I call?",         answer: "In most cases, yes — free on-site estimates are usually available within 2-3 business days, with service starting shortly after you approve." },
    { question: "Do you offer weekly or bi-weekly mowing plans?",      answer: "Both. Most Central Texas lawns do best on a weekly cadence during peak growing season and bi-weekly in cooler months. We'll recommend what fits your yard." },
    { question: "What's included in a standard mowing visit?",        answer: "Mowing, string-line edging along walks and beds, and full blowdown of clippings from hard surfaces. Nothing left behind." },
    { question: "Do you offer one-time mows, not just recurring plans?", answer: "Yes — one-time mows are available, especially for overgrown lots or move-in/move-out cleanups, though most customers move to a recurring plan after the first visit." },
    { question: "Do you mow commercial properties too?",               answer: "Yes — we service HOA common areas, commercial lots, and municipal properties in addition to residential lawns." },
  ];

  const crossServices = [
    { icon: faTree,        title: "Landscape Design",   body: "Full design-to-install landscape plans for beds and plantings.",       link: "/services/landscape-design" },
    { icon: faWater,       title: "Irrigation & Sprinklers", body: "System install, repair, and seasonal tune-ups.",                  link: "/services/irrigation-sprinkler-systems" },
    { icon: faPaintRoller, title: "Hardscaping",        body: "Patios, walkways, and retaining walls built to last.",                 link: "/services/hardscaping" },
    { icon: faBroom,       title: "Seasonal Cleanup",   body: "Spring and fall cleanup that keeps your yard ready year-round.",       link: "/services/seasonal-cleanup" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Lawn Mowing & Maintenance" },
      ]} />

      <SectionIntro
        title="Lawn Mowing & Maintenance in Waco, TX"
        subtitle="Consistent, on-time mowing with flat-rate pricing and a 30-day re-service guarantee — weekly or bi-weekly plans built around your yard."
      />

      <TrustBar headline="1,800+ Central Texas properties trust GreenScape Pro for lawn care" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Mowing Service" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls GreenScape Pro First" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/lawn-mowing-maintenance" title="Lawn Mowing Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Lawn Mowing FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Yard Overdue for a Mow? Let's Get It Scheduled."
        subline="Free on-site estimates. Flat-rate pricing, 30-day guarantee, weekly or bi-weekly plans."
        primaryText="Call Us Now"
        primaryLink="tel:+12549005200"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Schedule Your Lawn Service"
          cityName="Waco"
          slug="services/lawn-mowing-maintenance"
          spot="lawn-mowing-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
