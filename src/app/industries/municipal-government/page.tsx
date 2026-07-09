"use client";
import styles from "../page.module.scss";

import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
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
  faFileContract, faRoad, faClipboardList, faFileInvoiceDollar,
  faExclamationTriangle, faSearch, faCalendarCheck,
  faCamera, faTrophy, faChartLine, faClock,
  faSeedling, faBroom, faTree, faWater,
} from "@fortawesome/free-solid-svg-icons";

export default function MunicipalGovernmentIndustryPage() {

  const painPoints = [
    {
      icon: faFileContract,
      problem: "Many landscaping vendors can't meet bid and RFP requirements",
      consequence: "Missing or outdated insurance and licensing documentation disqualifies vendors before the bid is even scored — delaying procurement and limiting your options.",
    },
    {
      icon: faRoad,
      problem: "Inconsistent service on public rights-of-way creates safety issues",
      consequence: "Overgrown sightlines at intersections and along roadways aren't just an eyesore — they're a visibility hazard and a liability risk for the municipality.",
    },
    {
      icon: faCamera,
      problem: "No proof-of-service documentation for public accountability",
      consequence: "Without photo-logged visit records, staff can't respond to records requests or council questions about when a property was last serviced.",
    },
    {
      icon: faFileInvoiceDollar,
      problem: "Budget cycles require predictable, fixed contract pricing",
      consequence: "Variable billing from vendors makes it difficult to plan and defend a grounds maintenance line item during the annual budgeting process.",
    },
    {
      icon: faExclamationTriangle,
      problem: "Slow response on public safety issues like overgrown sightlines",
      consequence: "A standard service queue means intersections and public safety hazards wait behind routine mowing — increasing risk exposure for the municipality.",
    },
  ];

  const whyFeatures = [
    {
      icon: faFileContract,
      title: "Bid-Ready Documentation",
      description: "Full insurance, TDA licensing, and compliance paperwork ready to attach to any RFP or bid submission — no scrambling to track down documents before a deadline.",
    },
    {
      icon: faCamera,
      title: "Proof-of-Service Reporting",
      description: "Every visit is photo-logged, giving your staff a clear record for public accountability, council questions, or records requests.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Fixed Annual Contract Pricing",
      description: "Predictable costs that fit municipal budget cycles, with no surprise billing mid-contract.",
    },
  ];

  const processSteps = [
    { number: 1, title: "RFP/Bid Response & Site Assessment", description: "We review your bid or RFP requirements, walk the properties, and submit complete, compliant documentation.", icon: faSearch },
    { number: 2, title: "Contract Award & Scheduling",         description: "Once awarded, we build a service schedule around your properties, rights-of-way, and public safety priorities.", icon: faCalendarCheck },
    { number: 3, title: "Documented Service Visits",           description: "Every visit is photo-logged for proof-of-service records and public accountability.", icon: faCamera },
    { number: 4, title: "Ongoing Compliance Reporting",        description: "Regular reporting keeps your staff ready for records requests, renewals, and budget reviews.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faClock,     value: 12,   label: "Years serving Central Texas municipalities", suffix: "+", duration: 2 },
    { icon: faTrophy,    value: 1800, label: "Public properties serviced",                 suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97,   label: "Contract renewal rate",                      suffix: "%", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Bid-ready insurance/licensing documentation", us: "✅ Always current",     others: "❌ Documentation gaps common" },
    { feature: "Proof-of-service reporting",                  us: "✅ Photo-logged",        others: "❌ No documentation" },
    { feature: "Fixed annual contract pricing",                us: "✅ Predictable",         others: "❌ Variable billing" },
    { feature: "Right-of-way safety response time",           us: "✅ Priority scheduling", others: "❌ Standard queue" },
    { feature: "Central Texas municipal experience",          us: "✅ 12+ years",           others: "❌ Out-of-area vendor" },
  ];

  const faq = [
    {
      question: "What documentation is provided for RFP/bid submissions?",
      answer: "We provide current insurance certificates, TDA licensing, and any compliance documentation your bid or RFP requires — ready to attach to your submission without delay.",
    },
    {
      question: "How is right-of-way and sightline mowing scheduled for safety?",
      answer: "Right-of-way and intersection sightline mowing gets priority scheduling ahead of routine visits, since these directly affect public safety and visibility.",
    },
    {
      question: "Are proof-of-service reports available for public records requests?",
      answer: "Yes — every visit is photo-logged and documented, so your staff has a record ready to reference for public accountability or records requests.",
    },
    {
      question: "How is contract pricing structured for municipal budget cycles?",
      answer: "We offer fixed annual contract pricing so costs are predictable and easy to defend during your budgeting process, with no surprise mid-contract billing.",
    },
    {
      question: "What geographic area is covered for municipal contracts?",
      answer: "We serve municipalities and government agencies across Central Texas. Contact us with your jurisdiction's location and we'll confirm coverage.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Our home base — servicing municipal and public properties across McLennan County.", highlight: "Most Requested" },
    { town: "Hewitt",       benefit: "City properties and public rights-of-way maintenance.",             highlight: "" },
    { town: "Robinson",     benefit: "Municipal grounds and public facility contracts.",                   highlight: "" },
    { town: "Temple",       benefit: "Bell County government and municipal properties we serve.",         highlight: "" },
    { town: "Killeen",      benefit: "Public properties and grounds contracts near Fort Cavazos.",          highlight: "" },
    { town: "Woodway",      benefit: "Municipal facilities with high public-visibility standards.",        highlight: "" },
  ];

  const services = [
    { icon: faSeedling, title: "Lawn Mowing & Maintenance", body: "Reliable, scheduled mowing for public grounds, rights-of-way, and government facility grounds.", link: "/services/lawn-mowing-maintenance" },
    { icon: faBroom,    title: "Seasonal Cleanup",          body: "Storm debris removal and seasonal cleanup for public properties, on priority scheduling.",       link: "/services/seasonal-cleanup" },
    { icon: faTree,     title: "Tree & Shrub Care",         body: "Pruning and maintenance that keeps sightlines clear and public grounds safe.",                  link: "/services/tree-shrub-care" },
    { icon: faWater,    title: "Irrigation & Sprinklers",   body: "Installation, monitoring, and repair to keep public landscaping efficient and leak-free.",       link: "/services/irrigation-sprinkler-systems" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Municipal & Government" },
      ]} />

      <SectionIntro
        title="Municipal & Government Grounds Maintenance"
        subtitle="Public grounds, right-of-way mowing, and municipal contract landscaping — reliable service that meets bid and compliance requirements."
      />

      <TrustBar headline="Trusted by municipal and government properties across Central Texas for 12+ years" />

      <IndustryPainPoints
        industry="municipal-government"
        painPoints={painPoints}
        ctaText="Fix My Municipal Contract"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="municipalities and government agencies"
          features={whyFeatures}
          title="What We Do Differently for Municipal & Government Contracts"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your municipality" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="municipal and government" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Every Service Your Municipality or Agency Needs"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath="industries/municipal-government"
          title="Serving Municipalities Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="municipal-government" faq={faq} title="Municipal & Government FAQs" />
      </div>

      <CTABanner
        headline="Need a Bid-Ready Landscaping Vendor?"
        subline="Full compliance documentation, fixed contract pricing, proof-of-service reporting."
        primaryText="Request Bid Documentation"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+12549005200"
      />

      <div className={styles.section}>
        <Variant4
          title="Tell Us About Your Municipal Contract"
          cityName="Waco"
          slug="industries/municipal-government"
          spot="municipal-industry-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
