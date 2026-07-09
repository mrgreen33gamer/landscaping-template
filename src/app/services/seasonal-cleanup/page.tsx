// GreenScape Pro — Seasonal Cleanup Service Page
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
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faLeaf, faBroom, faTree, faPaintRoller,
  faCalendarCheck, faCertificate,
} from "@fortawesome/free-solid-svg-icons";

export default function SeasonalCleanupPage() {

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Central Texas properties served for seasonal cleanup", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rating",                          suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years serving Waco-area properties",                    suffix: "+", duration: 2 },
  ];

  const expectations = [
    { icon: faSearch,        title: "Full-Property Walkthrough Before We Start", description: "We walk the entire property first to scope leaf coverage, bed condition, and debris before any work begins." },
    { icon: faFileContract,  title: "Flat-Rate Quote",                           description: "Written flat-rate pricing before the crew starts — no surprise charges once the trucks show up." },
    { icon: faBroom,         title: "Complete Debris Haul-Off",                  description: "Nothing left in bags on the curb — all leaves, limbs, and debris are hauled off the property the same day." },
    { icon: faShieldHalved,  title: "30-Day Re-Service Guarantee",               description: "Not satisfied with the result? We come back within 30 days and make it right." },
  ];

  const whyFeatures = [
    { icon: faCalendarCheck, title: "Timed to Central Texas Seasons", description: "Spring and fall cleanup windows calibrated to local growing patterns, not a generic calendar." },
    { icon: faBroom,         title: "Full Haul-Off Included",         description: "Debris removal is included in every cleanup, not billed separately like many competitors." },
    { icon: faCertificate,   title: "TDA Licensed, Fully Insured",    description: "Every crew operates under proper state licensing and full insurance coverage." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",       description: "Schedule your spring or fall cleanup in minutes, online or by phone.",         icon: faHeadset },
    { number: 2, title: "Crew Walks Property", description: "We walk the full property to scope leaf coverage, beds, and debris.",          icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",     description: "Written pricing before any cleanup work begins — no surprises.",                icon: faFileContract },
    { number: 4, title: "Cleanup & Haul-Off",  description: "Full debris removal same day, backed by our 30-day re-service guarantee.",      icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",       description: "The price we quote is the price you pay — no surprises once work begins." },
    { icon: faRotateLeft,   title: "30-Day Re-Service",       description: "Not satisfied with the result? We come back within 30 days and make it right." },
    { icon: faBroom,        title: "Full Haul-Off Included",  description: "Every cleanup includes complete debris removal — nothing left behind on the curb." },
    { icon: faLock,         title: "Licensed & Insured",      description: "TDA-licensed crews, fully insured. Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling, most available crews.",         badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full seasonal cleanup coverage throughout Hewitt.",              badge: "" },
    { town: "Woodway",      benefit: "Regular route coverage for Woodway cleanup visits.",             badge: "" },
    { town: "Robinson",     benefit: "On our regular route — quick turnaround guaranteed.",             badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.",                     badge: "" },
    { town: "Temple",       benefit: "Full seasonal cleanup coverage for Bell County properties.",     badge: "" },
  ];

  const comparisonRows = [
    { feature: "Full debris haul-off included",     us: "✅ Every job",             others: "❌ Billed separately" },
    { feature: "Flat-rate pricing",                  us: "✅ Written quote",         others: "❌ Estimate only" },
    { feature: "Timed to local seasons",             us: "✅ Central Texas calibrated", others: "❌ Generic schedule" },
    { feature: "30-day guarantee",                   us: "✅ Included",              others: "❌ None" },
    { feature: "Recurring bundle discount available", us: "✅ Yes",                  others: "❌ Not offered" },
  ];

  const faq = [
    { question: "How much does a typical seasonal cleanup cost in Waco?",             answer: "Pricing depends on property size and debris volume. We give you a flat-rate written quote after our crew walks the property, before any work begins." },
    { question: "What's the best timing for spring vs. fall cleanup in Central Texas?", answer: "Spring cleanups are best done as new growth starts, clearing winter debris and prepping beds. Fall cleanups should happen after leaf drop but before the first hard freeze. We calibrate scheduling to Central Texas seasonal patterns." },
    { question: "Is gutter cleanup included?",                                          answer: "Gutter-adjacent cleanup around the roofline is included as part of our standard seasonal cleanup scope. Full gutter interior cleaning can be added — ask during your quote." },
    { question: "Is debris haul-off included in the price?",                            answer: "Yes — complete debris haul-off is included in every seasonal cleanup. Nothing is left in bags on the curb; everything is hauled off the same day." },
    { question: "Does a bundled spring + fall plan save money?",                        answer: "Yes — booking both seasonal visits together as a bundle gets you a discount off the combined price plus priority scheduling for both windows." },
    { question: "Are one-time cleanups available for move-in or move-out?",             answer: "Absolutely — we offer standalone one-time cleanups for move-in, move-out, or any occasion where you need the property show-ready fast." },
  ];

  const crossServices = [
    { icon: faTree,         title: "Lawn Mowing & Maintenance", body: "Weekly and bi-weekly mowing to keep your property looking sharp.", link: "/services/lawn-mowing-maintenance" },
    { icon: faPaintRoller,  title: "Landscape Design",          body: "Full design-to-install landscape plans built around your property.", link: "/services/landscape-design" },
    { icon: faLeaf,         title: "Tree & Shrub Care",          body: "Pruning, shaping, and health treatments for trees and shrubs.",       link: "/services/tree-shrub-care" },
    { icon: faBroom,        title: "Hardscaping",                body: "Patios, walkways, and retaining walls built to last.",                link: "/services/hardscaping" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Seasonal Cleanup" },
      ]} />

      <SectionIntro
        title="Seasonal Cleanup in Waco, TX"
        subtitle="Spring and fall cleanup — leaf removal, bed refresh, and pre-season prep so your yard is never caught off guard."
      />

      <TrustBar headline="1,800+ Central Texas properties trust GreenScape Pro for seasonal cleanup" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Your Seasonal Cleanup Includes" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls GreenScape Pro for Seasonal Cleanup" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Our Seasonal Cleanup Track Record" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection
          headline="We back every job\nwith real guarantees."
          body="Every cleanup crew in Central Texas makes promises. We back ours in writing — with flat-rate pricing, full haul-off included, and a 30-day re-service guarantee on every visit."
          guarantees={guarantees}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/seasonal-cleanup" title="Seasonal Cleanup Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Seasonal Cleanup FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Yard Buried in Leaves or Overgrowth? Let's Clear It."
        subline="Free estimates. Flat-rate pricing, full haul-off included."
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
          title="Schedule Your Seasonal Cleanup"
          cityName="Waco"
          slug="services/seasonal-cleanup"
          spot="seasonal-cleanup-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
