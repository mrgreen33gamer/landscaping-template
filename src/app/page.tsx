// GreenScape Pro — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faSeedling, faTree, faWater, faPaintRoller, faLeaf, faBroom,
  faTrophy, faChartLine, faClock,
  faBolt, faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faFileAlt, faRotateLeft, faLock, faStar,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    { icon: faSeedling,    title: "Lawn Mowing & Maintenance", body: "Weekly or bi-weekly mowing, edging, and blowdown on a schedule that keeps your yard consistently sharp.", link: "/services/lawn-mowing-maintenance", image: "/pages/home/services/service-1.jpg" },
    { icon: faTree,        title: "Landscape Design",          body: "Full design-to-install landscape plans — beds, plantings, and layout built around how your property is actually used.", link: "/services/landscape-design", image: "/pages/home/services/service-2.jpg" },
    { icon: faWater,       title: "Irrigation & Sprinklers",   body: "System install, repair, and seasonal tune-ups that keep every zone watering evenly without waste.", link: "/services/irrigation-sprinkler-systems", image: "/pages/home/services/service-3.jpg" },
    { icon: faPaintRoller, title: "Hardscaping",               body: "Patios, walkways, and retaining walls built to hold up through Texas heat and hard freezes alike.", link: "/services/hardscaping", image: "/pages/home/services/service-4.jpg" },
    { icon: faLeaf,        title: "Tree & Shrub Care",         body: "Pruning, shaping, and health treatments that keep trees and shrubs looking intentional, not overgrown.", link: "/services/tree-shrub-care", image: "/pages/home/services/service-1.jpg" },
    { icon: faBroom,       title: "Seasonal Cleanup",          body: "Spring and fall cleanup — leaf removal, bed refresh, and pre-season prep so your yard is never caught off guard.", link: "/services/seasonal-cleanup", image: "/pages/home/services/service-2.jpg" },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Properties serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 12,   label: "Years of local landscaping experience",    suffix: "+", duration: 2 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rating",             suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faBolt,         title: "On-Time Crews, Every Visit", description: "A late crew means a wasted afternoon. We run tight routes and text you when we're on the way — no all-day windows, ever." },
    { icon: faShieldHalved, title: "TDA Licensed & Insured",     description: "Every applicator on our crew is licensed by the Texas Department of Agriculture for fertilizer and treatment work. Fully insured on every property we touch." },
    { icon: faUsers,        title: "Locally Owned Since 2012",   description: "We're not a franchise. GreenScape Pro was founded in Waco by Dana Whitfield, a Central Texas native with 15+ years in the trade. Every call is answered by someone who lives here." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online",  description: "Phone, text, or the form below — your choice. We'll confirm a free on-site estimate that fits your schedule.", icon: faHeadset },
    { number: 2, title: "Crew Walks the Property", description: "We walk the full property with you, flag anything that needs attention, and explain the plan in plain English.", icon: faSearch },
    { number: 3, title: "You Get a Flat-Rate Quote", description: "Written price before we touch anything. You decide — zero pressure to proceed. The quote covers every service line, no surprise add-ons.", icon: faFileContract },
    { number: 4, title: "Done Right, Guaranteed", description: "Clean edges, cleared debris, and a 30-day re-service guarantee on every job. We come back free if it's not right.", icon: faCheckCircle },
  ];

  const expectations = [
    { icon: faSearch,      title: "Honest Property Assessment", description: "We flag what actually needs attention — not what's most profitable to sell. You see the plan before we recommend anything." },
    { icon: faLeaf,        title: "Clean, Respectful Service",  description: "Gates closed, beds protected, debris hauled off. Every single visit." },
    { icon: faCheckCircle, title: "Upfront Flat-Rate Price",    description: "Written quote before any work starts. The number doesn't change once we're on-site — that's our problem, not yours." },
    { icon: faStar,        title: "Quality Materials Only",     description: "We use nursery-grade plants and commercial-grade equipment on every job, backed by our 30-day guarantee." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available crews in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",       badge: "" },
    { town: "Woodway",      benefit: "Weekly service availability for Woodway homes and businesses.",         badge: "" },
    { town: "Robinson",     benefit: "Regular service area — quick turnaround guaranteed.",                   badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",       badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",            badge: "" },
  ];

  const faq = [
    { question: "How much does lawn mowing cost in Waco?", answer: "Most residential lots run $45–$85 per visit depending on size and terrain. Weekly and bi-weekly plans include edging and blowdown. We always provide a flat-rate written quote before starting." },
    { question: "Do you offer one-time cleanups or only recurring service?", answer: "Both — one-time spring and fall cleanups are common, and many customers move to a recurring plan afterward once they see the difference." },
    { question: "How quickly can you get a crew out?", answer: "Free on-site estimates are usually available within 2–3 business days. Once you approve a quote, most jobs are scheduled within a week." },
    { question: "Are you licensed to apply fertilizer and weed treatments?", answer: "Yes — our applicators are licensed by the Texas Department of Agriculture (TDA) for fertilizer and herbicide application, and fully insured on every property." },
    { question: "What's included in the 30-day re-service guarantee?", answer: "If any part of a completed job isn't right — a missed bed, an uneven edge, a treatment that didn't take — we come back and fix it at no charge within 30 days." },
    { question: "Do you handle irrigation system repairs, not just landscaping?", answer: "Yes — full irrigation install, repair, and seasonal tune-ups are one of our core service lines, not an add-on." },
  ];

  const trustBadges = [
    { icon: faStar,          label: "4.9 Google Rating",    sub: "250+ Reviews" },
    { icon: faShieldHalved,  label: "TDA Licensed",         sub: "Texas Certified" },
    { icon: faTrophy,        label: "Insured Crews",        sub: "Every Job" },
    { icon: faClock,         label: "On-Time Service",      sub: "7 Days a Week" },
    { icon: faBolt,          label: "Free Estimates",       sub: "No Obligation" },
    { icon: faFileAlt,       label: "Flat-Rate Pricing",    sub: "No Surprises" },
    { icon: faRotateLeft,    label: "30-Day Guarantee",     sub: "Re-Service Free" },
    { icon: faLock,          label: "No Contracts",         sub: "Month-to-Month" },
    { icon: faLeaf,          label: "Nursery-Grade Plants", sub: "Quality Materials" },
    { icon: faUsers,         label: "Locally Owned",        sub: "Since 2012" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="Waco's trusted landscaping company — licensed, insured, and guaranteed on every job" />
      <div className={styles.section}>
        <ServiceCardComponent heading="Complete Landscaping Services for Your Property" cards={services} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="What Makes GreenScape Pro Different" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <ImpactMetrics title="Numbers That Speak for Us" metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <CTABanner
        headline="Outdoor Spaces Worth Living In."
        subline="Design, plantings, drainage, and maintenance plans — curb appeal that survives Central Texas seasons."
        primaryText="Call (254) 900-5200"
        primaryLink="tel:+12549005200"
        secondaryText="Book Landscape Consult"
        secondaryLink="/contact"
        imageSrc="/pages/home/welcome/hero-main.jpg"
      />
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Serving All of Central Texas" />
      </div>
      <div className={styles.section}>
        <WhatToExpect sectionTitle="Every Service Visit, Every Time" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Landscaping Questions — Answered Straight" />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/" spot="homepage-contact-form" formVariant={2} />
      </div>
    </main>
  );
}
