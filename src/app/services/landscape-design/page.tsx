// GreenScape Pro — Landscape Design Service Page
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
  faDraftingCompass, faSeedling, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faTree, faWater, faPaintRoller, faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export default function LandscapeDesignPage() {

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Central Texas properties designed and installed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rating",                     suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years serving Waco-area properties",               suffix: "+", duration: 2 },
  ];

  const expectations = [
    { icon: faDraftingCompass, title: "Free Design Consultation",     description: "We walk the property and sketch a plan before quoting anything." },
    { icon: faSearch,          title: "3D-Style Layout Preview",      description: "See beds, plantings, and hardscape elements mapped out before we dig." },
    { icon: faSeedling,        title: "Nursery-Grade Plant Selection", description: "Every plant is sourced for Central Texas soil and climate, not generic stock." },
    { icon: faShieldHalved,    title: "30-Day Install Guarantee",     description: "Any plant that fails within 30 days of install is replaced free." },
  ];

  const whyFeatures = [
    { icon: faLeaf,         title: "Native & Drought-Tolerant Expertise", description: "Plant selections built for Central Texas heat and water restrictions." },
    { icon: faCheckCircle,  title: "One Crew, Start to Finish",           description: "The same team designs and installs, so nothing gets lost in handoff." },
    { icon: faShieldHalved, title: "TDA Licensed, Fully Insured",         description: "Every install backed by proper licensing and insurance." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",         description: "Free design consultation scheduled within days.", icon: faHeadset },
    { number: 2, title: "Site Walk & Sketch",   description: "Crew walks the property and sketches a layout.",  icon: faDraftingCompass },
    { number: 3, title: "Flat-Rate Quote",      description: "Full plan price before any digging starts.",      icon: faFileContract },
    { number: 4, title: "Install & Guarantee",  description: "Clean install, walkthrough, 30-day plant guarantee.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",         description: "The price we quote is the price you pay — no matter how the terrain looks up close." },
    { icon: faRotateLeft,   title: "30-Day Plant Guarantee",    description: "Any plant that fails within 30 days of install is replaced free." },
    { icon: faDraftingCompass, title: "Free Design Consultation", description: "We walk the property and sketch a plan before quoting anything." },
    { icon: faLock,         title: "Licensed & Insured",        description: "TDA-licensed team, fully insured. Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling, most available design crews.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full design and install coverage throughout Hewitt.",            badge: "" },
    { town: "Woodway",      benefit: "Custom design plans available for Woodway properties.",          badge: "" },
    { town: "Robinson",     benefit: "On our regular route — quick turnaround guaranteed.",             badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.",                     badge: "" },
    { town: "Temple",       benefit: "Full design and install coverage for Bell County properties.",    badge: "" },
  ];

  const comparisonRows = [
    { feature: "Free design consultation",             us: "✅ Always included",         others: "❌ Charged separately" },
    { feature: "30-day plant guarantee",                us: "✅ Every install",           others: "❌ No guarantee" },
    { feature: "Native/drought-tolerant expertise",     us: "✅ Central Texas focused",   others: "❌ Generic stock" },
    { feature: "Same crew designs and installs",        us: "✅ One team",                others: "❌ Design and install outsourced" },
    { feature: "TDA licensed",                          us: "✅ Yes",                     others: "❌ Not always" },
  ];

  const faq = [
    { question: "How much does a landscape design project cost in Waco?", answer: "Most residential design-to-install projects run $2,500–$15,000 depending on the scope — bed size, plant selection, and any hardscape elements involved. We provide a flat-rate written quote after the free design consultation." },
    { question: "How long does design-to-install take?",                  answer: "A typical residential project takes 1–3 weeks from initial consultation to finished install, depending on plan complexity and plant availability." },
    { question: "Do you use drought-tolerant or native plants?",          answer: "Yes — our plant selections are built around Central Texas heat, soil, and water restrictions. We prioritize native and drought-tolerant species so your landscape thrives with less maintenance." },
    { question: "Do you handle one-time projects, not just recurring service?", answer: "Yes — landscape design is a one-time, design-to-install project. It doesn't require a recurring plan, though many customers pair it with our lawn mowing or seasonal cleanup services afterward." },
    { question: "What does the 30-day plant guarantee cover?",            answer: "Any plant installed as part of your design that fails within 30 days is replaced free of charge, as long as basic watering guidelines were followed." },
    { question: "Can you provide HOA-approved plans?",                    answer: "Yes — we can design plans that meet common HOA landscaping requirements and provide documentation you can submit for approval." },
  ];

  const crossServices = [
    { icon: faTree,        title: "Lawn Mowing & Maintenance", body: "Weekly and bi-weekly mowing to keep your new landscape looking sharp.", link: "/services/lawn-mowing-maintenance" },
    { icon: faWater,       title: "Irrigation & Sprinklers",   body: "System install, repair, and seasonal tune-ups.",                        link: "/services/irrigation-sprinkler-systems" },
    { icon: faPaintRoller, title: "Hardscaping",               body: "Patios, walkways, and retaining walls built to last.",                  link: "/services/hardscaping" },
    { icon: faLeaf,        title: "Tree & Shrub Care",         body: "Pruning, health checks, and care for established plantings.",           link: "/services/tree-shrub-care" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Landscape Design" },
      ]} />

      <SectionIntro
        title="Landscape Design in Waco, TX"
        subtitle="Full design-to-install landscape plans — beds, plantings, and layout built around how your property is actually used, with a 30-day guarantee on every install."
      />

      <TrustBar headline="1,800+ Central Texas properties trust GreenScape Pro for landscape design" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Your Landscape Design Includes" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls GreenScape Pro for Design" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Our Design & Install Track Record" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection
          headline="We back every design\nwith real guarantees."
          body="Every landscaping company in Central Texas makes promises. We back ours in writing — with flat-rate pricing, licensed crews, and a 30-day plant guarantee on every install."
          guarantees={guarantees}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/landscape-design" title="Landscape Design Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Landscape Design FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready to Redesign Your Landscape?"
        subline="Free design consultation. Flat-rate pricing, 30-day plant guarantee."
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
          title="Start Your Landscape Design"
          cityName="Waco"
          slug="services/landscape-design"
          spot="landscape-design-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
