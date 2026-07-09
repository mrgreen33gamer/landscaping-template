// GreenScape Pro — Tree & Shrub Care Service Page
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
  faTrophy, faChartLine, faTree, faPaintRoller, faLeaf, faBroom,
  faCertificate, faBolt, faSeedling,
} from "@fortawesome/free-solid-svg-icons";

export default function TreeShrubCarePage() {

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Central Texas properties served for tree & shrub care", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rating",                           suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years serving Waco-area properties",                     suffix: "+", duration: 2 },
  ];

  const expectations = [
    { icon: faSearch,       title: "Free Health Assessment",       description: "We inspect for disease, pests, and structural issues before recommending any treatment." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Start", description: "Written pricing up front — no surprise charges once the crew arrives." },
    { icon: faLeaf,         title: "Proper Pruning Technique",     description: "Cuts made to support long-term plant health, not just shape." },
    { icon: faShieldHalved, title: "30-Day Re-Service Guarantee",  description: "Not satisfied with the result? We come back within 30 days and make it right." },
  ];

  const whyFeatures = [
    { icon: faCertificate, title: "TDA Licensed for Treatments",  description: "Fertilizer, pest, and disease treatments applied under proper state licensing." },
    { icon: faBolt,        title: "Storm-Damage Response",        description: "Fast response for storm-damaged limbs and shrubs." },
    { icon: faSeedling,    title: "Native Species Expertise",     description: "Pruning calibrated to Central Texas species and growing seasons." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",              description: "Free health assessment scheduled within days.",              icon: faHeadset },
    { number: 2, title: "Health Assessment On-Site", description: "We inspect for disease, pests, and structural issues.",       icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",           description: "Written pricing before any pruning or treatment begins.",     icon: faFileContract },
    { number: 4, title: "Prune, Treat & Guarantee",  description: "Work completed and backed by our 30-day re-service guarantee.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",         description: "The price we quote is the price you pay — no surprises once work begins." },
    { icon: faRotateLeft,   title: "30-Day Re-Service",         description: "Not satisfied with the result? We come back within 30 days and make it right." },
    { icon: faHeadset,      title: "Free Health Assessment",    description: "We inspect for disease, pests, and structural issues before recommending treatment." },
    { icon: faLock,         title: "Licensed & Insured",        description: "TDA-licensed applicators, fully insured. Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling, most available crews.",           badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full tree & shrub care coverage throughout Hewitt.",                badge: "" },
    { town: "Woodway",      benefit: "Regular route coverage for Woodway pruning and treatment visits.",  badge: "" },
    { town: "Robinson",     benefit: "On our regular route — quick turnaround guaranteed.",                 badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.",                          badge: "" },
    { town: "Temple",       benefit: "Full tree & shrub care coverage for Bell County properties.",         badge: "" },
  ];

  const comparisonRows = [
    { feature: "Free health assessment",                       us: "✅ Every visit",         others: "❌ Charged separately" },
    { feature: "TDA licensed for treatments",                  us: "✅ Yes",                  others: "❌ Not always" },
    { feature: "Proper pruning technique for plant health",    us: "✅ Certified approach",   others: "❌ Shape-only cuts" },
    { feature: "Storm-damage response",                        us: "✅ Fast response",        others: "❌ Standard queue only" },
    { feature: "30-day re-service guarantee",                  us: "✅ Included",             others: "❌ None" },
  ];

  const faq = [
    { question: "What does tree pruning typically cost in Waco?",                answer: "Pricing depends on tree size, condition, and access. We give you a flat-rate written quote after a free on-site health assessment, before any work begins." },
    { question: "How can I tell if a tree or shrub is diseased?",                answer: "Common signs include discolored or dropping leaves, dieback in branches, fungal growth, bark cracking, and unusual pest activity. Our free health assessment checks for these and more before we recommend treatment." },
    { question: "Do you handle storm-damaged limb removal?",                    answer: "Yes — we offer fast response for storm-damaged limbs and shrubs to reduce further risk to your property." },
    { question: "When is the best time of year to prune Central Texas trees?",  answer: "Most species do best pruned during dormancy in late winter, though timing varies by species. We calibrate pruning schedules to Central Texas growing seasons during your assessment." },
    { question: "Are pest and fungus treatments included?",                     answer: "Pest and disease treatments are quoted separately based on what we find during the health assessment, and are applied by our TDA-licensed applicators." },
    { question: "Do you offer tree removal, not just pruning?",                 answer: "Yes — in addition to pruning and health treatments, we offer tree removal when a tree is dead, hazardous, or beyond saving. Ask about removal during your free assessment." },
  ];

  const crossServices = [
    { icon: faPaintRoller, title: "Landscape Design",         body: "Full design-to-install landscape plans built around your property.",   link: "/services/landscape-design" },
    { icon: faTree,        title: "Lawn Mowing & Maintenance", body: "Weekly and bi-weekly mowing to keep your property looking sharp.",      link: "/services/lawn-mowing-maintenance" },
    { icon: faLeaf,        title: "Hardscaping",                body: "Patios, walkways, and retaining walls built to last.",                 link: "/services/hardscaping" },
    { icon: faBroom,       title: "Seasonal Cleanup",           body: "Spring and fall cleanups that keep your property show-ready.",          link: "/services/seasonal-cleanup" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Tree & Shrub Care" },
      ]} />

      <SectionIntro
        title="Tree & Shrub Care in Waco, TX"
        subtitle="Pruning, shaping, and health treatments that keep trees and shrubs looking intentional — flat-rate pricing, TDA licensed applicators."
      />

      <TrustBar headline="1,800+ Central Texas properties trust GreenScape Pro for tree & shrub care" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Your Tree & Shrub Service Includes" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls GreenScape Pro for Tree & Shrub Care" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Our Tree & Shrub Care Track Record" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection
          headline="We back every job\nwith real guarantees."
          body="Every tree service in Central Texas makes promises. We back ours in writing — with flat-rate pricing, TDA licensed applicators, and a 30-day re-service guarantee on every visit."
          guarantees={guarantees}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/tree-shrub-care" title="Tree & Shrub Care Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Tree & Shrub Care FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Trees or Shrubs Overgrown? Let's Shape Them Up."
        subline="Free health assessment. Flat-rate pricing, TDA licensed applicators."
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
          title="Schedule Tree & Shrub Care"
          cityName="Waco"
          slug="services/tree-shrub-care"
          spot="tree-shrub-care-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
