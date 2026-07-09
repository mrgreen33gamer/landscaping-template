// GreenScape Pro — Services Overview
// Order: Breadcrumb → SectionIntro → TrustBar → ServiceCards → WhatToExpect
//        → ImpactMetrics → WhyChooseUs → ProcessTimeline → GuaranteeSection
//        → Testimonials → LocalServiceAreas → ValueComparison → FAQ → CTABanner → Form
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faSeedling, faTree, faWater, faPaintRoller, faLeaf, faBroom,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faBolt, faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faSeedling,    title: "Lawn Mowing & Maintenance", body: "Weekly or bi-weekly mowing, edging, and blowdown on a schedule that keeps your yard consistently sharp.", link: "/services/lawn-mowing-maintenance" },
    { icon: faTree,        title: "Landscape Design",          body: "Full design-to-install landscape plans — beds, plantings, and layout built around how your property is actually used.", link: "/services/landscape-design" },
    { icon: faWater,       title: "Irrigation & Sprinklers",   body: "System install, repair, and seasonal tune-ups that keep every zone watering evenly without waste.", link: "/services/irrigation-sprinkler-systems" },
    { icon: faPaintRoller, title: "Hardscaping",               body: "Patios, walkways, and retaining walls built to hold up through Texas heat and hard freezes alike.", link: "/services/hardscaping" },
    { icon: faLeaf,        title: "Tree & Shrub Care",         body: "Pruning, shaping, and health treatments that keep trees and shrubs looking intentional, not overgrown.", link: "/services/tree-shrub-care" },
    { icon: faBroom,       title: "Seasonal Cleanup",          body: "Spring and fall cleanup — leaf removal, bed refresh, and pre-season prep so your yard is never caught off guard.", link: "/services/seasonal-cleanup" },
  ];

  const expectations = [
    { icon: faSearch,       title: "Free On-Site Estimate",         description: "We walk the full property and explain exactly what it needs with a flat-rate price before anything is touched. No pressure to proceed." },
    { icon: faCheckCircle,  title: "Upfront Flat-Rate Pricing",     description: "No hourly billing, no surprise fees. You approve the price before we start — and it never changes mid-job." },
    { icon: faShieldHalved, title: "TDA-Licensed, Insured Crews",   description: "Every applicator is licensed by the Texas Department of Agriculture, background-checked, and fully insured. You know exactly who is coming to your property." },
    { icon: faRotateLeft,   title: "30-Day Re-Service Guarantee",   description: "If anything about a completed job isn't right, we come back and fix it at no charge within 30 days." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Properties serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rating",             suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years of local landscaping experience",    suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faBolt,          title: "On-Time Crews, Every Visit",  description: "A late crew means a wasted afternoon. We run tight routes and text you when we're on the way — no all-day windows, ever." },
    { icon: faHeadset,       title: "No Contracts, Ever",          description: "Our service plans are month-to-month. You hire us because we do great work — not because you're locked in." },
    { icon: faUsers,         title: "Locally Owned Since 2012",    description: "GreenScape Pro was founded in Waco by Dana Whitfield, a Central Texas native with 15+ years in the trade. Every call is answered by someone who lives here." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Call, text, or book online. We'll confirm a free on-site estimate that fits your schedule — usually within 2-3 business days.", icon: faHeadset },
    { number: 2, title: "Crew Walks the Property", description: "We walk the full property with you, flag anything that needs attention, and explain the plan in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",     description: "Written price before any work starts. No surprises, no hidden fees.",                  icon: faFileContract },
    { number: 4, title: "Done Right, Guaranteed", description: "Clean edges, cleared debris, and a 30-day re-service guarantee on every job.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",            description: "The price you approve is the price you pay. No hourly billing, no change orders mid-job." },
    { icon: faRotateLeft,   title: "30-Day Re-Service Guarantee",  description: "Every job is backed by a 30-day guarantee — we come back and make it right at no charge." },
    { icon: faHeadset,      title: "Real People Answer the Phone", description: "Call us and someone in Waco answers. No call centers, no hold queues." },
    { icon: faLock,         title: "Licensed, Bonded & Insured",   description: "TDA-licensed, fully bonded, and insured. License number available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — best availability and fastest response in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial service coverage.",                badge: "" },
    { town: "Woodway",      benefit: "Same-week availability for Woodway-area properties.",              badge: "" },
    { town: "Robinson",     benefit: "Regular route — quick turnaround for Robinson customers.",        badge: "" },
    { town: "China Spring", benefit: "Rural coverage with no trip charge for most locations.",          badge: "" },
    { town: "Temple",       benefit: "Full service coverage for Bell County homes and businesses.",     badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate upfront pricing",       us: "✅ Always",         others: "❌ Hourly + surprise fees" },
    { feature: "30-day re-service guarantee",     us: "✅ Every job",      others: "❌ No guarantee, or none" },
    { feature: "TDA-licensed applicators",        us: "✅ All crews",      others: "❌ Varies" },
    { feature: "No service contracts required",   us: "✅ Always",         others: "❌ Often required" },
    { feature: "Free on-site estimates",          us: "✅ Every property", others: "❌ Rare or paid" },
  ];

  const faq = [
    { question: "How much does landscaping service cost in Waco?",     answer: "Mowing typically runs $45–$85 per visit depending on lot size. Landscape design, hardscaping, and irrigation projects vary by scope — we always provide a flat-rate written quote before any work begins." },
    { question: "Do you offer recurring plans or only one-time service?", answer: "Both — weekly and bi-weekly mowing plans are common, and one-time services like cleanups, design installs, and irrigation repairs are available whenever you need them." },
    { question: "Are you licensed to apply fertilizer and weed treatments?", answer: "Yes — our applicators are licensed by the Texas Department of Agriculture (TDA) for fertilizer and herbicide application, and fully insured on every property." },
    { question: "How quickly can you get a crew out for an estimate?",   answer: "Free on-site estimates are usually available within 2–3 business days. Once you approve a quote, most jobs are scheduled within a week." },
    { question: "What's included in the 30-day re-service guarantee?",   answer: "If any part of a completed job isn't right — a missed bed, an uneven edge, a system that isn't dialed in — we come back and fix it at no charge within 30 days." },
  ];

  return (
    <>
      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services" },
      ]} />

      <SectionIntro
        title="Every Landscaping Service Your Property Needs"
        subtitle="From weekly mowing to full landscape builds — flat-rate pricing and a 30-day guarantee on every service."
      />

      <TrustBar headline="Trusted by 1,800+ Central Texas properties since 2012" />

      <div className={styles.section}>
        <ServiceCardComponent
          heading="What We Do"
          subheading="From weekly mowing to full landscape builds, GreenScape Pro handles it all — on time, on price."
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How Every Service Call Works" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Results That Speak for Themselves" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses GreenScape Pro" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Landscaping Service FAQs" />
      </div>

      <CTABanner
        headline="Ready to Schedule Your Service?"
        subline="Free on-site estimates available. Flat-rate pricing, 30-day guarantee, no contracts ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12549005200"
        secondaryText="Schedule Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant2
          title="Request a Service or Free Estimate"
          cityName="Waco"
          slug="services"
          spot="services-page-form"
          formVariant={2}
        />
      </div>
    </>
  );
}
