// GreenScape Pro — Irrigation & Sprinkler Systems Service Page
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
  faWater, faFaucetDrip, faGaugeHigh, faSlidersH, faSearch, faCheckCircle,
  faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faTree, faPaintRoller, faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export default function IrrigationSprinklerSystemsPage() {

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Central Texas properties served for irrigation", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rating",                    suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years serving Waco-area properties",              suffix: "+", duration: 2 },
  ];

  const expectations = [
    { icon: faSearch,      title: "Full-Zone Diagnostic",              description: "We test every zone and head before quoting any repair." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Touch Anything", description: "Written pricing up front — no surprise charges after the work starts." },
    { icon: faSlidersH,    title: "Fix It Right the First Time",       description: "Trucks stocked with common heads, valves, and controllers for same-visit repairs." },
    { icon: faShieldHalved, title: "30-Day Re-Service Guarantee",      description: "If an issue returns within 30 days, we come back and fix it free." },
  ];

  const whyFeatures = [
    { icon: faGaugeHigh,   title: "Water-Waste Diagnostics",             description: "We find leaks and misaligned heads that spike water bills." },
    { icon: faFaucetDrip,  title: "All Major Controller Brands Serviced", description: "Rain Bird, Hunter, Toro, and smart-controller brands." },
    { icon: faShieldHalved, title: "TDA Licensed, Fully Insured",        description: "Every repair and install backed by proper licensing and insurance." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",         description: "Free diagnostic scheduled within days.",             icon: faHeadset },
    { number: 2, title: "Tech Walks Every Zone", description: "Full-zone inspection of heads, valves, and controller.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",      description: "Written pricing before any repair begins.",           icon: faFileContract },
    { number: 4, title: "Repair & Test",        description: "System tested zone-by-zone before crew leaves.",      icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",       description: "The price we quote is the price you pay — no hourly surprises." },
    { icon: faRotateLeft,   title: "30-Day Re-Service",       description: "If an issue returns within 30 days, we come back and fix it free." },
    { icon: faHeadset,      title: "Text-Ahead Scheduling",   description: "We text before we arrive, so you always know when we're on the way." },
    { icon: faLock,         title: "Licensed & Insured",      description: "TDA-licensed team, fully insured. Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling, most available repair crews.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full irrigation repair and install coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular route coverage for Woodway sprinkler systems.",          badge: "" },
    { town: "Robinson",     benefit: "On our regular route — quick turnaround guaranteed.",             badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.",                     badge: "" },
    { town: "Temple",       benefit: "Full irrigation service coverage for Bell County properties.",    badge: "" },
  ];

  const comparisonRows = [
    { feature: "Full-zone diagnostic before quoting", us: "✅ Every visit",       others: "❌ Spot-check only" },
    { feature: "Flat-rate repair pricing",             us: "✅ Written quote",     others: "❌ Hourly + parts" },
    { feature: "All major controller brands serviced", us: "✅ Yes",               others: "❌ Limited brands" },
    { feature: "30-day re-service guarantee",          us: "✅ Included",          others: "❌ None" },
    { feature: "Smart controller setup",                us: "✅ Included",          others: "❌ Not offered" },
  ];

  const faq = [
    { question: "What does sprinkler repair typically cost in Waco?",              answer: "Most repairs run $95–$350 depending on the issue — a single head replacement is on the low end, while valve or controller repairs run higher. We give you a flat-rate written quote after a full-zone diagnostic, before any work begins." },
    { question: "What are the signs my system needs repair?",                      answer: "Brown or patchy areas, noticeably low water pressure at the heads, and an unexpectedly high water bill are the three most common signs of a leak, broken head, or misaligned zone." },
    { question: "Do you install smart or WiFi-enabled controllers?",                answer: "Yes — we install and set up smart controllers from major brands, including WiFi-enabled models that let you adjust watering schedules from your phone." },
    { question: "When should I schedule seasonal tune-ups?",                       answer: "Spring startup (checking for winter damage and resetting schedules) and fall winterization (blowing out lines before the first freeze) are the two key tune-up windows in Central Texas." },
    { question: "Is leak detection included in a service visit?",                  answer: "Yes — our full-zone diagnostic includes checking for underground leaks, broken lines, and misaligned or clogged heads before we quote any repair." },
    { question: "Do you install new systems, or only repair existing ones?",       answer: "Both — we handle new sprinkler system installs as well as repairs and tune-ups on existing systems, regardless of who originally installed them." },
  ];

  const crossServices = [
    { icon: faTree,        title: "Lawn Mowing & Maintenance", body: "Weekly and bi-weekly mowing to keep your property looking sharp.", link: "/services/lawn-mowing-maintenance" },
    { icon: faPaintRoller, title: "Landscape Design",          body: "Full design-to-install landscape plans built around your property.", link: "/services/landscape-design" },
    { icon: faLeaf,        title: "Tree & Shrub Care",         body: "Pruning, health checks, and care for established plantings.",       link: "/services/tree-shrub-care" },
    { icon: faWater,       title: "Seasonal Cleanup",          body: "Spring and fall cleanups that keep your property show-ready.",       link: "/services/seasonal-cleanup" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Irrigation & Sprinkler Systems" },
      ]} />

      <SectionIntro
        title="Irrigation & Sprinkler Systems in Waco, TX"
        subtitle="System install, repair, and seasonal tune-ups that keep every zone watering evenly — no more brown patches or wasted water."
      />

      <TrustBar headline="1,800+ Central Texas properties trust GreenScape Pro for irrigation service" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Your Irrigation Service Includes" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls GreenScape Pro for Irrigation" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Our Irrigation Service Track Record" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection
          headline="We back every repair\nwith real guarantees."
          body="Every irrigation company in Central Texas makes promises. We back ours in writing — with flat-rate pricing, licensed technicians, and a 30-day re-service guarantee on every visit."
          guarantees={guarantees}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/irrigation-sprinkler-systems" title="Irrigation Service Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Irrigation & Sprinkler FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Sprinklers Acting Up? Let's Fix That."
        subline="Free diagnostics available. Flat-rate pricing, 30-day guarantee."
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
          title="Schedule Your Irrigation Service"
          cityName="Waco"
          slug="services/irrigation-sprinkler-systems"
          spot="irrigation-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
