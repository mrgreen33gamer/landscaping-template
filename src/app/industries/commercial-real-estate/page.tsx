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
  faBuilding, faClipboardList, faCalendarAlt, faUserTie,
  faFileContract, faChartLine, faTrophy, faClock,
  faSearch, faSeedling, faTree, faHardHat, faBroom,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialRealEstateIndustryPage() {

  const painPoints = [
    {
      icon: faBuilding,
      problem: "Overgrown or patchy grounds hurting tenant impressions during showings",
      consequence: "Prospective tenants judge a property in the first thirty seconds. Neglected beds and uneven mowing undercut every other selling point in the space.",
    },
    {
      icon: faUserTie,
      problem: "Inconsistent vendor quality across a property portfolio",
      consequence: "Different crews at different properties mean unpredictable results, and property managers end up fielding complaints instead of closing leases.",
    },
    {
      icon: faFileContract,
      problem: "No landscaping budget forecasting for annual planning",
      consequence: "Without predictable seasonal pricing, landscaping becomes a line item that's impossible to budget for accurately, year over year.",
    },
    {
      icon: faClipboardList,
      problem: "Slow response to tenant landscaping complaints",
      consequence: "A complaint that sits unaddressed for days signals to tenants that management isn't responsive — and that perception spreads.",
    },
    {
      icon: faCalendarAlt,
      problem: "Entrance and curb-appeal neglect directly affecting lease renewal decisions",
      consequence: "First impressions at the entrance and common areas weigh heavily on renewal decisions, especially for retail and office tenants with foot traffic.",
    },
  ];

  const whyFeatures = [
    {
      icon: faCalendarAlt,
      title: "Leasing-Ready Grounds, Always",
      description: "Scheduled service timed around showings and tenant turnover, so your property always looks its best when it matters most.",
    },
    {
      icon: faFileContract,
      title: "Annual Budget Forecasting",
      description: "Predictable seasonal contract pricing that makes landscaping easy to plan for in your annual property budget.",
    },
    {
      icon: faClipboardList,
      title: "Fast Tenant-Complaint Response",
      description: "A dedicated escalation path for property managers, so tenant landscaping concerns get resolved quickly, not queued indefinitely.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Property Assessment & Budget Forecast", description: "We walk every property in your portfolio and build a predictable annual budget forecast tailored to its needs.", icon: faSearch },
    { number: 2, title: "Custom Seasonal Contract",              description: "A seasonal contract covering mowing, beds, and cleanup across your properties, with consistent, predictable pricing.", icon: faFileContract },
    { number: 3, title: "Scheduled Maintenance Visits",          description: "Service visits timed around showings and tenant turnover to keep grounds leasing-ready year-round.", icon: faCalendarAlt },
    { number: 4, title: "Ongoing Account Management",            description: "A dedicated contact for scheduling, tenant complaint escalation, and adjustments across your portfolio.", icon: faUserTie },
  ];

  const metrics = [
    { icon: faTrophy,    value: 35,   label: "Average reduction in tenant landscaping complaints after contract start", suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years serving Central Texas commercial properties",                       suffix: "+", duration: 2 },
    { icon: faChartLine, value: 1800, label: "Commercial properties serviced",                                          suffix: "+", duration: 3 },
  ];

  const comparisonRows = [
    { feature: "Annual budget forecasting",           us: "✅ Included",                  others: "❌ Not offered" },
    { feature: "Leasing-ready scheduling",             us: "✅ Timed to showings",         others: "❌ Standard rotation" },
    { feature: "Tenant complaint response time",       us: "✅ Priority escalation",       others: "❌ Standard queue" },
    { feature: "Multi-property contract",              us: "✅ One consolidated invoice",  others: "❌ Separate invoices" },
    { feature: "Central Texas commercial experience",  us: "✅ 12+ years",                 others: "❌ Out-of-area vendor" },
  ];

  const faq = [
    {
      question: "How are commercial landscaping contracts priced and budgeted annually?",
      answer: "We build a custom seasonal contract during your property assessment, with predictable pricing you can forecast into your annual budget instead of reacting to surprise costs.",
    },
    {
      question: "Is service scheduled around tenant showings?",
      answer: "Yes — we time maintenance visits around showings and tenant turnover so your property is always leasing-ready when prospective tenants walk the grounds.",
    },
    {
      question: "How are tenant complaints routed and resolved?",
      answer: "Property managers get a dedicated escalation path for landscaping complaints, so issues are addressed quickly instead of sitting in a standard service queue.",
    },
    {
      question: "Does service include prep for Central Texas ice events?",
      answer: "Yes — our seasonal contracts include prep and response for Central Texas freeze and ice events, so your grounds and walkways stay safe and presentable.",
    },
    {
      question: "Do you service multi-building commercial portfolios?",
      answer: "Yes — we manage multi-property commercial portfolios across Central Texas with a single consolidated contract and invoice, rather than separate vendors per building.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Our home base — servicing commercial properties across McLennan County.", highlight: "Most Requested" },
    { town: "Hewitt",       benefit: "Growing retail and office corridors with active leasing.",                highlight: "" },
    { town: "Robinson",     benefit: "Established commercial parks and multi-tenant properties.",               highlight: "" },
    { town: "Temple",       benefit: "Bell County commercial properties and management groups we serve.",       highlight: "" },
    { town: "Killeen",      benefit: "Large commercial portfolios near Fort Cavazos.",                          highlight: "" },
    { town: "Woodway",      benefit: "Premium commercial properties with high curb-appeal expectations.",       highlight: "" },
  ];

  const services = [
    { icon: faSeedling, title: "Lawn Mowing & Maintenance", body: "Reliable, consistent mowing and edging that keeps commercial grounds leasing-ready across your portfolio.", link: "/services/lawn-mowing-maintenance" },
    { icon: faTree,     title: "Landscape Design",          body: "Entrance beds, common areas, and amenity spaces designed to boost curb appeal and tenant impressions.",       link: "/services/landscape-design" },
    { icon: faHardHat,  title: "Hardscaping",                body: "Walkways, retaining walls, and paved areas built to hold up under commercial foot traffic.",                 link: "/services/hardscaping" },
    { icon: faBroom,    title: "Seasonal Cleanup",            body: "Storm debris removal and seasonal cleanup across your entire portfolio, on priority scheduling.",             link: "/services/seasonal-cleanup" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Commercial Real Estate" },
      ]} />

      <SectionIntro
        title="Commercial Landscaping for Real Estate"
        subtitle="Tenant-ready grounds maintenance and seasonal contracts that keep commercial properties leasing-ready year-round."
      />

      <TrustBar headline="Trusted by commercial property owners and managers across Central Texas for 12+ years" />

      <IndustryPainPoints
        industry="commercial-real-estate"
        painPoints={painPoints}
        ctaText="Fix My Property's Landscaping"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="commercial property owners and managers"
          features={whyFeatures}
          title="What We Do Differently for Commercial Properties"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your property" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="commercial real estate" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Every Service Your Commercial Property Needs"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath="industries/commercial-real-estate"
          title="Serving Commercial Properties Across Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="commercial-real-estate" faq={faq} title="Commercial Real Estate FAQs" />
      </div>

      <CTABanner
        headline="Ready for Leasing-Ready Grounds Year-Round?"
        subline="Annual budget forecasting, priority response, one contract. Free property audit."
        primaryText="Get Your Free Property Audit"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+12549005200"
      />

      <div className={styles.section}>
        <Variant4
          title="Tell Us About Your Commercial Property"
          cityName="Waco"
          slug="industries/commercial-real-estate"
          spot="commercial-real-estate-industry-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
