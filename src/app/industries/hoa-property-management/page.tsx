"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faBuilding, faClipboardList, faCalendarAlt, faCloudRain,
  faFileContract, faUserTie, faWater, faSeedling,
  faRocket, faSearch, faTrophy, faChartLine, faClock,
  faTree, faBroom,
} from "@fortawesome/free-solid-svg-icons";

export default function HOAPropertyManagementIndustryPage() {

  const painPoints = [
    {
      icon: faCalendarAlt,
      problem: "Common areas fall behind schedule and residents notice first",
      consequence: "Inconsistent mowing schedules mean overgrown entrances and complaints before the board even hears about it.",
    },
    {
      icon: faUserTie,
      problem: "No single point of contact across multiple properties",
      consequence: "Juggling different vendors per property creates scheduling chaos and inconsistent quality.",
    },
    {
      icon: faSeedling,
      problem: "Seasonal color and bed maintenance gets skipped when budgets tighten",
      consequence: "Neglected common-area beds hurt curb appeal and property values across the entire community.",
    },
    {
      icon: faCloudRain,
      problem: "Storm cleanup response is slow or nonexistent",
      consequence: "Downed limbs and debris sit for days, creating liability and resident frustration.",
    },
    {
      icon: faClipboardList,
      problem: "No documentation for board meetings or resident inquiries",
      consequence: "Property managers get blindsided by \"when was this last serviced?\" questions with no records to point to.",
    },
    {
      icon: faWater,
      problem: "Irrigation issues in common areas go unnoticed until water bills spike",
      consequence: "A single stuck valve can run up thousands in wasted water before anyone catches it.",
    },
  ];

  const whyFeatures = [
    {
      icon: faFileContract,
      title: "Single Contract, Every Property",
      description: "One point of contact and one invoice across your entire portfolio — no juggling separate vendors, quotes, or schedules per property.",
    },
    {
      icon: faClipboardList,
      title: "Documented Visit Reports",
      description: "Every visit logged with photos, ready for board meetings or resident questions — so you're never caught without an answer.",
    },
    {
      icon: faCloudRain,
      title: "Priority Storm Response",
      description: "HOA and property management contracts get priority scheduling after severe weather, so downed limbs and debris don't sit for days.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Portfolio Walkthrough",         description: "We assess every property in your portfolio and build a unified service plan tailored to each community's needs.", icon: faSearch },
    { number: 2, title: "Custom Contract & Schedule",     description: "One contract covering mowing, beds, irrigation, and seasonal work across all properties — with one predictable invoice.", icon: faFileContract },
    { number: 3, title: "Documented Service Visits",      description: "Photo-logged visits you can reference for board meetings or resident inquiries, no guesswork required.", icon: faClipboardList },
    { number: 4, title: "Ongoing Account Management",     description: "A dedicated contact for scheduling changes, storm response, and issues across your entire portfolio.", icon: faUserTie },
  ];

  const metrics = [
    { icon: faTrophy,    value: 40,  label: "Average reduction in resident landscaping complaints after contract start", suffix: "%", duration: 2 },
    { icon: faChartLine, value: 180, label: "Average portfolio-wide cost efficiency vs. per-property vendors",           suffix: "%", duration: 3 },
    { icon: faClock,     value: 12,  label: "Years serving Texas communities",                                          suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Single point of contact across properties", us: "✅ One account manager",     others: "❌ Per-property vendors" },
    { feature: "Documented visit reports",                  us: "✅ Photo-logged",             others: "❌ No documentation" },
    { feature: "Priority storm response",                   us: "✅ Contract priority",        others: "❌ Standard queue" },
    { feature: "Multi-property billing",                    us: "✅ One consolidated invoice", others: "❌ Separate invoices" },
    { feature: "Central Texas HOA experience",               us: "✅ 12+ years local",          others: "❌ Out-of-area vendor" },
  ];

  const faq = [
    {
      question: "How are HOA and property management contracts structured?",
      answer: "We offer both per-property and portfolio-wide contracts. Most property managers with multiple communities prefer a single portfolio-wide contract with one consolidated invoice — but we'll structure it however works best for your board or ownership group.",
    },
    {
      question: "Do you provide documentation or photo reports for board meetings?",
      answer: "Yes — every visit is photo-logged and documented, so you always have a record to reference when a board member or resident asks \"when was this last serviced?\"",
    },
    {
      question: "How does storm cleanup response work for common areas?",
      answer: "HOA and property management contracts get priority scheduling after severe weather. We prioritize downed limbs, blocked walkways, and debris in common areas so liability and resident complaints don't pile up while you wait days for a response.",
    },
    {
      question: "Is irrigation monitoring included to catch water waste?",
      answer: "Yes — as part of regular service visits we check common-area irrigation systems for stuck valves, broken heads, and other issues that can quietly run up your water bill before anyone notices.",
    },
    {
      question: "Do you work with property management companies outside Waco?",
      answer: "Yes — we serve HOAs and property management portfolios across Central Texas, including communities outside of Waco. Contact us with your portfolio's locations and we'll confirm coverage.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Our home base — servicing HOAs and communities across McLennan County.", highlight: "Most Requested" },
    { town: "Hewitt",       benefit: "Fast-growing residential communities with active HOAs.",                 highlight: "" },
    { town: "Robinson",     benefit: "Established neighborhoods and multi-property portfolios.",               highlight: "" },
    { town: "Temple",       benefit: "Bell County communities and property management groups we serve.",       highlight: "" },
    { town: "Killeen",      benefit: "Large residential portfolios near Fort Cavazos.",                        highlight: "" },
    { town: "Woodway",      benefit: "Premium communities with high curb-appeal expectations.",                highlight: "" },
  ];

  const services = [
    { icon: faSeedling, title: "Lawn Mowing & Maintenance", body: "Reliable, consistent mowing and edging for common areas across every property in your portfolio.", link: "/services/lawn-mowing-maintenance" },
    { icon: faTree,     title: "Landscape Design",          body: "Community entrances, common-area beds, and amenity spaces designed to boost curb appeal.",        link: "/services/landscape-design" },
    { icon: faWater,    title: "Irrigation & Sprinklers",   body: "Installation, monitoring, and repair to keep common-area irrigation efficient and leak-free.",     link: "/services/irrigation-sprinkler-systems" },
    { icon: faBroom,    title: "Seasonal Cleanup",          body: "Storm debris removal and seasonal cleanup across your entire portfolio, on priority scheduling.", link: "/services/seasonal-cleanup" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "HOA & Property Management" },
      ]} />

      <SectionIntro
        title="Landscaping for HOAs & Property Management"
        subtitle="Common-area maintenance, seasonal contracts, and multi-property scheduling built for the communities and portfolios you manage — reliable service across every property, every visit."
      />

      <TrustBar headline="Trusted by HOAs and property managers across Central Texas for 12+ years" />

      <IndustryPainPoints
        industry="hoa-property-management"
        painPoints={painPoints}
        ctaText="Fix My Portfolio's Landscaping"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="HOAs and property managers"
          features={whyFeatures}
          title="What We Do Differently for Communities & Portfolios"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your portfolio" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="HOA and property management" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Every Service Your Community or Portfolio Needs"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath="industries/hoa-property-management"
          title="Serving HOAs & Property Managers Across Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="hoa-property-management" faq={faq} title="HOA & Property Management FAQs" />
      </div>

      <CTABanner
        headline="Ready to Simplify Landscaping Across Your Portfolio?"
        subline="One contract, documented visits, priority storm response — built for HOAs and property managers in Texas. Free portfolio audit."
        primaryText="Get Your Free Portfolio Audit"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+12549005200"
      />

      <div className={styles.section}>
        <Variant4
          title="Tell Us About Your Portfolio"
          cityName="Waco"
          slug="industries/hoa-property-management"
          spot="hoa-industry-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
