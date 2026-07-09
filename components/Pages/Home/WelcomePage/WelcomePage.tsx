// _archetype-library/hero-i-editorial/Component.tsx
//
// Hero I: Minimal Editorial — oversized typography, single accent shape,
// large negative space. Optional accentWord as huge watermark typography.
// No canvas, no stat cards, no widget.
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
const badgeText = 'Waco\'s Most Trusted Landscaper — Since 2012';
const headlineLines = [
  'Grow It.',
  'Shape It.',
];
const headlineAccent = 'GreenScape Pro.';
const subheadline = 'Flat-rate pricing. On-time crews. 30-day re-service guarantee on every job. Serving Waco and Central Texas with licensed, insured landscape professionals.';
const primaryCta = { label: 'Call (254) 900-5200', href: 'tel:+12549005200' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Free Estimates',
  'No Contracts',
  'TDA Licensed',
  '12+ Yrs Local',
  '30-Day Guarantee',
];
const stats = [
  {
    "value": "1,800+",
    "label": "Properties Serviced"
  },
  {
    "value": "4.9 ★",
    "label": "Google Rating"
  },
  {
    "value": "30-Day",
    "label": "Re-Service Guarantee"
  },
  {
    "value": "Free",
    "label": "On-Site Estimates"
  }
];
const meterTarget = 72;
const meterTopLabel = "Featured";
const meterMidLabel = "Popular";
const meterBotLabel = "Classic";
const particleColor = '#84cc16';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Patchy yard";
const afterLabel = "Designed beds";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Native Beds", swatch: "#22c55e", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Hardscape", swatch: "#4ade80", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Trees", swatch: "#16a34a", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Lighting", swatch: "#86efac", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Drainage", swatch: "#15803d", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Maintenance", swatch: "#14532d", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "They fixed our drainage and rebuilt the front beds. Neighborhood walkers slow down now.";
const authorName = "The Carters";
const authorMeta = "Front redesign · Hewitt";
const rating = 5;
const schematicLabel = "GreenScape schematic";
const gauges = [
  { label: "Properties", value: "1,500+" },
  { label: "Rating", value: "4.9 ★" },
  { label: "Plans", value: "Seasonal" },
  { label: "Design", value: "Included" }
];
const toggles = [
  { label: "Showroom open", on: true },
  { label: "Samples ready", on: true },
  { label: "Install crews", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "GreenScape";

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Single geometric accent — not a content widget */}
      <div className={styles.accentShape} aria-hidden="true" />
      <div className={styles.hairline} aria-hidden="true" />

      {accentWord ? (
        <div className={styles.watermarkSlot} aria-hidden="true">
          <motion.span
            className={styles.watermark}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {accentWord}
          </motion.span>
        </div>
      ) : null}

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.div
            className={styles.rule}
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
