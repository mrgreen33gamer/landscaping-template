// GreenScape Pro — Hardscaping Service Page
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
  faTrowel, faLayerGroup, faRulerCombined, faSearch, faCheckCircle,
  faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faTree, faPaintRoller, faLeaf, faWater,
} from "@fortawesome/free-solid-svg-icons";

export default function HardscapingPage() {

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Central Texas properties served for hardscape construction", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rating",                                suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years serving Waco-area properties",                          suffix: "+", duration: 2 },
  ];

  const expectations = [
    { icon: faSearch,       title: "Free On-Site Design Walkthrough",       description: "We walk your property and talk through layout, materials, and drainage before anything is quoted." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Break Ground", description: "Written pricing up front — no surprise charges once the crew arrives." },
    { icon: faRulerCombined, title: "Built to Grade, Every Time",           description: "Proper base prep and drainage on every install — the step most patio failures skip." },
    { icon: faShieldHalved, title: "30-Day Guarantee",                      description: "Settling or grading issues fixed free within 30 days of completion." },
  ];

  const whyFeatures = [
    { icon: faLayerGroup,   title: "Proper Base & Drainage Every Time", description: "Most patio failures are drainage failures — we don't cut that corner." },
    { icon: faTrowel,       title: "Pavers, Stone & Concrete — All Handled", description: "Full range of hardscape materials, matched to your property and budget." },
    { icon: faShieldHalved, title: "TDA Licensed, Fully Insured",       description: "Every project backed by proper licensing and insurance." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",         description: "Free on-site design walkthrough scheduled within days.", icon: faHeadset },
    { number: 2, title: "Site Walk & Design",   description: "We assess grading, drainage, and material options on site.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",      description: "Written pricing before any ground is broken.",           icon: faFileContract },
    { number: 4, title: "Build & Guarantee",    description: "Graded, tested, and guaranteed for 30 days after completion.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",         description: "The price we quote is the price you pay — no surprises once work begins." },
    { icon: faRotateLeft,   title: "30-Day Grading Guarantee",  description: "Settling or grading issues fixed free within 30 days of completion." },
    { icon: faHeadset,      title: "Free Design Walkthrough",   description: "We walk your property and talk through layout and materials before quoting." },
    { icon: faLock,         title: "Licensed & Insured",        description: "TDA-licensed team, fully insured. Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling, most available build crews.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full hardscape construction coverage throughout Hewitt.",       badge: "" },
    { town: "Woodway",      benefit: "Regular route coverage for Woodway patio and wall projects.",   badge: "" },
    { town: "Robinson",     benefit: "On our regular route — quick turnaround guaranteed.",             badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.",                     badge: "" },
    { town: "Temple",       benefit: "Full hardscape construction coverage for Bell County properties.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Proper base and drainage prep",         us: "✅ Every install",     others: "❌ Often skipped" },
    { feature: "Flat-rate pricing before work starts",  us: "✅ Written quote",     others: "❌ Estimate only" },
    { feature: "Pavers, stone, and concrete all handled", us: "✅ Full range",      others: "❌ Limited materials" },
    { feature: "30-day grading guarantee",               us: "✅ Included",          others: "❌ None" },
    { feature: "HOA-compliant designs available",        us: "✅ Yes",               others: "❌ Not offered" },
  ];

  const faq = [
    { question: "What does a patio or walkway typically cost in Waco?",         answer: "Most patios and walkways run based on square footage and material choice, ranging from budget-friendly concrete to premium natural stone. We give you a flat-rate written quote after a free on-site design walkthrough, before any work begins." },
    { question: "How long does a hardscape project take?",                      answer: "Smaller walkway projects can wrap in a few days, while larger patios and retaining walls typically take one to two weeks depending on scope and weather." },
    { question: "Are retaining walls engineered for Texas clay soil?",          answer: "Yes — Central Texas clay soil expands and contracts with moisture, so every retaining wall is built with proper base prep, drainage, and engineering suited to local soil conditions." },
    { question: "Do you provide HOA approval documentation?",                   answer: "Yes — we can provide design drawings and material specifications formatted for HOA submission on request." },
    { question: "What does the 30-day guarantee cover?",                       answer: "If settling or grading issues show up within 30 days of completion, we come back and fix them free." },
    { question: "Is financing available for larger projects?",                 answer: "Yes — we offer financing options for larger hardscape projects. Ask your estimator about current terms during your design walkthrough." },
  ];

  const crossServices = [
    { icon: faPaintRoller, title: "Landscape Design",              body: "Full design-to-install landscape plans built around your property.", link: "/services/landscape-design" },
    { icon: faWater,       title: "Irrigation & Sprinkler Systems", body: "System install, repair, and seasonal tune-ups for every zone.",       link: "/services/irrigation-sprinkler-systems" },
    { icon: faLeaf,        title: "Tree & Shrub Care",              body: "Pruning, health checks, and care for established plantings.",         link: "/services/tree-shrub-care" },
    { icon: faTree,        title: "Seasonal Cleanup",               body: "Spring and fall cleanups that keep your property show-ready.",         link: "/services/seasonal-cleanup" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Hardscaping" },
      ]} />

      <SectionIntro
        title="Hardscaping in Waco, TX"
        subtitle="Patios, walkways, and retaining walls built to hold up through Texas heat and hard freezes alike — flat-rate pricing, 30-day guarantee."
      />

      <TrustBar headline="1,800+ Central Texas properties trust GreenScape Pro for hardscape construction" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Your Hardscape Project Includes" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls GreenScape Pro for Hardscaping" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Our Hardscape Construction Track Record" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection
          headline="We back every build\nwith real guarantees."
          body="Every hardscape company in Central Texas makes promises. We back ours in writing — with flat-rate pricing, licensed crews, and a 30-day grading guarantee on every project."
          guarantees={guarantees}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/hardscaping" title="Hardscape Construction Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Hardscaping FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready to Build Your Outdoor Space?"
        subline="Free design walkthrough. Flat-rate pricing, 30-day guarantee."
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
          title="Start Your Hardscape Project"
          cityName="Waco"
          slug="services/hardscaping"
          spot="hardscaping-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
