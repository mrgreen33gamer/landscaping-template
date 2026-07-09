// GreenScape Pro — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faSearch,
  faRocket,
  faStar,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2012",
      description: "GreenScape Pro was founded in Waco by Dana Whitfield, a Waco native who spent years working commercial grounds crews across Central Texas before starting the company. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust on Your Property",
      description: "Every crew member is background-checked and trained to our standards, TDA-licensed in Texas. We treat every property we work on with the same care we'd want for our own — gates closed, edges clean, nothing left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell services you don't need. We won't recommend a full landscape overhaul when a seasonal cleanup will do the job. Our reputation is built on straight talk — and over a decade of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Properties we've served in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rate",                suffix: "%", duration: 2 },
    { icon: faClock,     value: 14,   label: "Years serving Central Texas properties",    suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Free On-Site Consultation",  description: "We walk your property with you, understand what you need, and give you a written flat-rate quote before any work begins.", icon: faSearch },
    { number: 2, title: "Scheduled, Reliable Service", description: "Once you approve the quote, we get you on the calendar — same crew every visit, a text before we arrive.", icon: faRocket },
    { number: 3, title: "Quality Work, Every Time",    description: "Our crews follow the same checklist on every job so quality doesn't depend on who shows up — clean edges, complete cleanup, no shortcuts.", icon: faStar },
    { number: 4, title: "Ongoing Care & Support",      description: "Seasonal maintenance plans, priority scheduling, and a single point of contact for anything your property needs going forward.", icon: faTools },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About GreenScape Pro"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2012. We do honest landscaping work at fair prices for the families and businesses we've called neighbors for over a decade."
      />

      <TrustBar headline="1,800+ Central Texas properties trust GreenScape Pro — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="14 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Landscaping Company — Ready When You Need Us"
        subline="Flat-rate pricing. 30-Day Re-Service Guarantee. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12549005200"
        secondaryText="Request Service Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
