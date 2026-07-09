"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";

import styles from "./page.module.scss";

import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Property Type Before We Build",
      description: "HOAs, commercial real estate, and municipal contracts each have their own scheduling needs, compliance requirements, and communication expectations. We build our service around how your property type actually operates.",
    },
    {
      icon: faShieldHalved,
      title: "Locally Operated, Property-Savvy",
      description: "We're based in Waco, TX and have served HOAs, property managers, commercial landlords, and municipal properties across Central Texas since 2012. Local knowledge + property-type expertise.",
    },
    {
      icon: faLightbulb,
      title: "Maintenance, Enhancements & Documentation — All Under One Roof",
      description: "Whether your property needs routine mowing, seasonal color rotations, or bid-compliant documentation — we handle all of it. No juggling multiple vendors for one property.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,   label: "Property types actively served across Texas",     suffix: "",  duration: 2 },
    { icon: faChartLine, value: 320, label: "Average lead increase across industry clients",    suffix: "%", duration: 3 },
    { icon: faClock,     value: 13,  label: "Years serving Texas properties",                   suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Our home base — serving all property types across McLennan County.",           highlight: "Headquarters" },
    { town: "Hewitt",       benefit: "HOA communities and commercial properties in Hewitt's growing area.",           highlight: "" },
    { town: "Woodway",      benefit: "Upscale HOA and commercial real estate landscaping.",                          highlight: "" },
    { town: "Temple",       benefit: "A booming Bell County market with strong demand across property types.",       highlight: "" },
    { town: "Killeen",      benefit: "Municipal and commercial properties near Fort Cavazos.",                       highlight: "" },
    { town: "China Spring", benefit: "HOA and municipal properties in Bosque and McLennan County.",                  highlight: "" },
  ];

  const comparisonRows = [
    { feature: "Property-type-specific content & strategy", us: "✅ Built per property type",     others: "❌ Generic templates" },
    { feature: "Local Central Texas market knowledge",      us: "✅ Serving Texas since 2012",     others: "❌ Out-of-state crews" },
    { feature: "Maintenance + enhancements + documentation", us: "✅ All services in-house",        others: "❌ Siloed vendors" },
    { feature: "Transparent fixed pricing",                 us: "✅ Quote before any work starts", others: "❌ Billable hours + surprises" },
    { feature: "Documented, compliance-ready service",      us: "✅ Photo logs & service records", others: "❌ No documentation" },
  ];

  const faq = [
    {
      question: "What property types does GreenScape Pro work with?",
      answer: "We currently have dedicated service pages and proven experience for HOA & property management, commercial real estate, and municipal & government properties across Central Texas.",
    },
    {
      question: "Do you build a custom plan for each property type or use the same approach for everyone?",
      answer: "Every contract is scoped for the property type and the client. An HOA common area and a municipal right-of-way have completely different scheduling, compliance, and documentation needs — we build our service to those differences specifically.",
    },
    {
      question: "Do you serve properties outside of Central Texas?",
      answer: "We're based in Waco and primarily serve McLennan, Bell, Bosque, and Hill Counties. Contact us to check availability for your property's location.",
    },
    {
      question: "Can you handle both routine maintenance and larger enhancement projects?",
      answer: "Yes — we handle routine mowing and maintenance, seasonal color rotations, irrigation, and larger landscape enhancement projects all under one roof, backed by documented service records.",
    },
    {
      question: "How do I know which service is right for my property?",
      answer: "Start by clicking your property type below or contacting us directly. We'll walk your property, identify the biggest gaps, and recommend a maintenance plan that fits — no pressure, no overselling.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />

      <SectionIntro
        title="Landscaping for Every Kind of Property"
        subtitle="From HOA common areas to municipal contracts — reliable, documented service built for the property types that need it most."
      />

      <TrustBar headline="Trusted by HOAs, property managers, and municipalities across Central Texas since 2012" />

      {/* ── THE INDUSTRY GRID ── */}
      <div className={styles.section}>
        <SectionIndustriesServed
          title="Browse by Property Type"
          subtitle="Click your property type to see exactly what we build for properties like yours."
        />
      </div>

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Central Texas"
          features={whyFeatures}
          title="Why Property-Type-Specific Service Matters"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Central Texas" />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          title="Property Types Served Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison
          title="Why Properties Choose GreenScape Pro"
          rows={comparisonRows}
        />
      </div>

      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Property-Type Services — Frequently Asked Questions"
        />
      </div>

      <CTABanner
        headline="Don't See Your Property Type? Let's Talk."
        subline="We work with properties outside our listed types all the time. If you have common areas, grounds, or right-of-way that need reliable maintenance — we can build around it. Free consultation, no pressure."
        primaryText="Tell Us About Your Property"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+12549005200"
      />

      <div className={styles.section}>
        <Variant4
          title="Get a Free Property Assessment"
          cityName="Waco"
          slug="industries"
          spot="industries-hub-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}