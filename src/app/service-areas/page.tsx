// src/app/service-areas/page.tsx
// GreenScape Pro — Service Areas Page
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.scss';
import CTABanner from '#/PageComponents/CTABanner/CTABanner';
import FAQ from '#/PageComponents/FAQ/FAQ';

const SERVICE_AREAS = [
  {
    city:        'Waco',
    slug:        'waco-tx',
    county:      'McLennan County',
    badge:       'Home Base',
    description: 'Our headquarters. Fastest scheduling, priority booking. Full lawn care, landscape design, irrigation, and hardscaping across all of Waco.',
    highlights:  ['Priority scheduling', 'All services available', 'Flat-rate pricing'],
  },
  {
    city:        'Hewitt',
    slug:        'hewitt-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: 'Full landscaping coverage for Hewitt homes and businesses. Same crews, same flat-rate pricing as our Waco base.',
    highlights:  ['Regular route coverage', 'Residential & commercial', 'Seasonal maintenance plans'],
  },
  {
    city:        'Woodway',
    slug:        'woodway-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: "Serving Woodway's residential neighborhoods with the same flat-rate pricing and 30-Day Re-Service Guarantee as every other area we cover.",
    highlights:  ['Flat-rate pricing', '30-Day Re-Service Guarantee', 'HOA-friendly scheduling'],
  },
  {
    city:        'Robinson',
    slug:        'robinson-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Reliable lawn care and landscaping for Robinson properties — mowing, irrigation, hardscaping, and seasonal cleanup from one crew.',
    highlights:  ['Full service menu', 'TDA-licensed crews', 'No contracts'],
  },
  {
    city:        'China Spring',
    slug:        'china-spring-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Rural and residential landscaping service for the China Spring area. We make the drive — flat-rate pricing applies just the same.',
    highlights:  ['Rural coverage', 'Flat-rate pricing', 'Irrigation specialists'],
  },
  {
    city:        'Killeen',
    slug:        'killeen-tx',
    county:      'Bell County',
    badge:       '',
    description: 'Lawn care, landscape design, and irrigation service for Killeen and Fort Cavazos area homes and businesses. Military-friendly scheduling.',
    highlights:  ['Military-friendly', 'Residential & commercial', 'Consistent crew scheduling'],
  },
  {
    city:        'Temple',
    slug:        'temple-tx',
    county:      'Bell County',
    badge:       '',
    description: 'Full-service landscaping coverage for Temple. Scott & White medical district and surrounding neighborhoods served. All 6 services available.',
    highlights:  ['Full service coverage', 'All neighborhoods', 'Commercial & residential'],
  },
  {
    city:        'Valley Mills',
    slug:        'valley-mills-tx',
    county:      'Bosque County',
    badge:       '',
    description: 'Extending our coverage into Bosque County — Valley Mills properties get the same TDA-licensed crews, flat-rate pricing, and 30-Day Re-Service Guarantee.',
    highlights:  ['Bosque County coverage', 'TDA-licensed crews', '30-Day Re-Service Guarantee'],
  },
  {
    city:        'Hillsboro',
    slug:        'hillsboro-tx',
    county:      'Hill County',
    badge:       '',
    description: 'Landscaping service for Hillsboro and Hill County. When your lawn needs attention before a Texas summer takes hold, we\'ll get there.',
    highlights:  ['Hill County coverage', 'Seasonal scheduling', 'Full service menu'],
  },
];

const faq = [
  {
    question: 'What areas do you service?',
    answer: 'We serve Waco and the surrounding Central Texas region — including Hewitt, Woodway, Robinson, China Spring, Killeen, Temple, Valley Mills, Hillsboro, and most communities within about 60 miles of Waco. Call us if you\'re not sure — we probably cover your area.',
  },
  {
    question: 'Is your pricing the same in all service areas?',
    answer: 'Yes — flat-rate pricing applies across every city and community we serve. The price we quote before we start is the price you pay, regardless of your location.',
  },
  {
    question: 'Do you offer urgent irrigation repair outside of Waco?',
    answer: 'Yes. Irrigation leaks and other time-sensitive issues are prioritized across all of our service areas, regardless of distance from our Waco base — we\'ll give you an honest timeline when you call.',
  },
  {
    question: 'Do you work on commercial and HOA properties in all areas?',
    answer: 'Yes — light commercial landscaping for restaurants, offices, retail spaces, and HOA common areas is within scope across all our coverage areas. Call to discuss your specific property and location.',
  },
  {
    question: 'How soon can I get scheduled?',
    answer: 'For Waco and immediate surrounding areas (Hewitt, Woodway, Robinson, China Spring), we typically schedule new visits within the week. For outlying areas like Killeen, Temple, and Valley Mills, scheduling is a little further out — call to confirm availability.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Central Texas Landscaping — Since 2012
            </div>
            <h1 className={styles.heroTitle}>
              Service Areas
              <span className={styles.heroAccent}>We Come to You.</span>
            </h1>
            <p className={styles.heroSub}>
              Based in Waco, serving all of Central Texas. Flat-rate pricing, TDA-licensed crews, and a 30-Day Re-Service Guarantee — no matter where you are.
            </p>
            <div className={styles.heroActions}>
              <a href="tel:+12549005200" className={styles.heroCTAPrimary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call (254) 900-5200
              </a>
              <Link href="/contact" className={styles.heroCTASecondary}>
                Free Estimate
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Quick trust strip */}
          <motion.div className={styles.trustStrip}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            {[
              { val: '60mi',   lbl: 'Coverage radius from Waco' },
              { val: '9+',     lbl: 'Cities we actively serve' },
              { val: 'Flat-Rate', lbl: 'Pricing in every area' },
              { val: '30-Day', lbl: 'Re-Service Guarantee' },
            ].map(({ val, lbl }) => (
              <div key={lbl} className={styles.trustStat}>
                <span className={styles.trustVal}>{val}</span>
                <span className={styles.trustLbl}>{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Areas grid ── */}
      <section className={styles.areasSection}>
        <div className={styles.areasSectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Full Coverage Map</span>
            <h2 className={styles.sectionTitle}>Every Community We Serve</h2>
            <p className={styles.sectionSub}>
              Click any city to see local service details, common landscaping needs in your area, and what to expect from our team.
            </p>
          </div>

          <div className={styles.areasGrid}>
            {SERVICE_AREAS.map((area, i) => {
              const isHub = area.badge === 'Home Base';
              const isPrimary = area.badge === 'Primary Area';

              return (
                <motion.div
                  key={area.slug}
                  className={`${styles.areaCard} ${isHub ? styles.areaCardHub : ''} ${isPrimary ? styles.areaCardPrimary : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                >
                  {area.badge && (
                    <span className={`${styles.areaBadge} ${isHub ? styles.areaBadgeHub : styles.areaBadgeNearby}`}>
                      {area.badge}
                    </span>
                  )}

                  <div className={styles.areaPin} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>

                  <div className={styles.areaTopRow}>
                    <h3 className={styles.areaCity}>{area.city}</h3>
                    <span className={styles.areaCounty}>{area.county}</span>
                  </div>

                  <p className={styles.areaDesc}>{area.description}</p>

                  <ul className={styles.areaHighlights}>
                    {area.highlights.map(h => (
                      <li key={h}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.areaFooter}>
                    <a href="tel:+12549005200" className={styles.areaCallBtn}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      Call Now
                    </a>
                    <Link href="/contact" className={styles.areaEstimateBtn}>
                      Free Estimate
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Not on the list? ── */}
      <section className={styles.unlisted}>
        <div className={styles.unlistedInner}>
          <div className={styles.unlistedIcon} aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div className={styles.unlistedText}>
            <h3>Don't see your city?</h3>
            <p>We cover most of Central Texas within about 60 miles of Waco. Call us — there's a good chance we serve your area.</p>
          </div>
          <a href="tel:+12549005200" className={styles.unlistedCTA}>
            Call (254) 900-5200
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        cityName="Central Texas"
        faq={faq}
        title="Service Area FAQs"
      />

      {/* ── CTA Banner ── */}
      <CTABanner
        headline="Ready to Schedule? We'll Come to You."
        subline="Serving all of Central Texas. Flat-rate pricing, 30-Day Re-Service Guarantee, no contracts ever."
        primaryText="Call (254) 900-5200"
        primaryLink="tel:+12549005200"
        secondaryText="Get a Free Estimate"
        secondaryLink="/contact"
      />

    </main>
  );
}
