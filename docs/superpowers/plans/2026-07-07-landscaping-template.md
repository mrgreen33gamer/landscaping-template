# Landscaping & Lawn Care Template Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-skin the forked `hvac-template` codebase (now `landscaping-template`) into a complete "GreenScape Pro" landscaping & lawn care marketing site, reusing 100% of the existing architecture (admin dashboard, tracking, blog engine, contact pipeline) and only changing brand tokens, copy, and page content.

**Architecture:** Next.js App Router site. Every page is a composition of existing components (`components/PageComponents/*`, `components/BlogComponents/*`) fed by local data arrays defined inline in each `page.tsx`. No new components are created — every task clones an existing HVAC page 1:1 in component order and replaces the data arrays/copy with landscaping content matching the same shape.

**Tech Stack:** Next.js (App Router), TypeScript, SCSS Modules, Framer Motion, FontAwesome. No test framework is present in this repo (`package.json` has no `test` script) — verification is `npm run typecheck`, `npm run lint`, and a dev-server visual check per task.

## Global Constraints

- Business name: **GreenScape Pro** (replaces "Arctic Air HVAC" everywhere).
- Tagline: "Lawn Care · Landscaping · Outdoor Living" (replaces "Heating · Cooling · Comfort").
- Single phone number used everywhere (the HVAC source had two inconsistent numbers — don't repeat that): `(254) 900-5200` / `tel:+12549005200`.
- Email: `hello@greenscapeprowaco.com` (replaces `contact@arcticairhvac.com` / `service@arcticairhvac.com`).
- Address: `3311 Franklin Ave, Waco, TX 76710` (replaces `4521 Bosque Blvd, Waco, TX 76710`).
- Founded 2012 by Dana Whitfield (replaces "Mike Hawkins", founded 2010).
- Social proof: 4.9★ Google rating, 250+ reviews (keep same shape as HVAC's 4.9★/200+, new number).
- License line: `TDA Licensed Applicator #XXXXXXXX` (Texas Department of Agriculture — real licensing body for pesticide/fertilizer application; replaces `TDLR License #XXXXXXXX`).
- Guarantee framing: "30-Day Re-Service Guarantee" (replaces "1-Year Parts & Labor Warranty" — doesn't map to lawn care, re-service is the industry-standard guarantee instead).
- Locale unchanged: Waco, Hewitt, Woodway, Robinson, China Spring, Temple, Killeen, Hillsboro, TX.
- Brand accent color: green (`$green: #16a34a` family) replacing orange as the live accent token; keep the same token *names* in `globalVariables.scss` so no component SCSS needs touching.
- No new npm dependencies.
- After every task: run `npm run typecheck` from `landscaping-template/` and confirm it passes before committing.

---

### Task 1: Brand tokens — `globalVariables.scss`

**Files:**
- Modify: `src/app/globalVariables.scss` (full file, 44 lines)

**Interfaces:**
- Produces: SCSS variables `$black`, `$obsidian`, `$blackflat`, `$white`, `$offwhite`, `$darkgrey`, `$grey`, `$lightgrey`, `$orange`, `$lightorange`, `$darkorange`, `$green`, `$lightgreen`, `$darkgreen`, `$blue`, `$danger-red`, `$titleFont`, `$headerFont`, `$textFont` — every later task's SCSS relies on these exact names existing with these exact roles (accent = `$green`/`$lightgreen`/`$darkgreen`, legacy alias `$orange` now points at the same values as `$green` so any component still literally referencing `$orange` renders correctly).

- [ ] **Step 1: Replace the file contents**

```scss
// src/app/globalVariables.scss
// ─────────────────────────────────────────────────────────────────────────────
// GreenScape Pro — Brand Tokens
//
// THREE DISTINCT FONTS (unchanged from base template — already work well):
//   $titleFont  → Barlow Condensed  — bold condensed display (hero h1, section titles)
//   $headerFont → Outfit            — clean geometric sans   (nav, card titles, labels, CTAs)
//   $textFont   → Inter             — refined humanist sans  (body copy, form text, paragraphs)
// ─────────────────────────────────────────────────────────────────────────────

$titleFont:  var(--font-barlow-condensed), 'Barlow Condensed', sans-serif;
$headerFont: var(--font-outfit),           'Outfit',           sans-serif;
$textFont:   var(--font-inter),            'Inter',            sans-serif;

// ── Core Palette ─────────────────────────────────────────────────────────────
$black:      #000000;
$obsidian:   #0d1f16;
$blackflat:  #16281f;
$white:      #FFFFFF;
$offwhite:   #f7faf8;

// Greys (forest-tinted)
$darkgrey:   #7a9b85;
$grey:       #4a6a55;
$lightgrey:  #c8e0cc;

// Brand Accent
$green:      #16a34a;
$lightgreen: #4ade80;
$darkgreen:  #15803d;

// Legacy aliases (kept so any component still referencing $orange resolves to the live accent)
$orange:      $green;
$lightorange: $lightgreen;
$darkorange:  $darkgreen;
$blue:       #1e6fa8;

// Error
$danger-red: #ef4444;
```

- [ ] **Step 2: Verify build picks up the change**

Run: `npm run typecheck`
Expected: no errors (SCSS isn't type-checked, this just confirms the repo still compiles TS cleanly before moving on).

- [ ] **Step 3: Commit**

```bash
git add src/app/globalVariables.scss
git commit -m "brand: swap navy+orange HVAC palette for GreenScape Pro forest+green tokens"
```

---

### Task 2: Header & Footer rebrand

**Files:**
- Modify: `components/GeneralComponents/Header/Header.tsx`
- Modify: `components/GeneralComponents/Footer/Footer.tsx`

**Interfaces:**
- Consumes: `useTrackEvent` from `&/useTrackEvent` (unchanged, no signature change).
- Produces: nothing new consumed by other tasks — these are leaf layout components rendered by the root layout.

- [ ] **Step 1: Update `Header.tsx` content**

In `components/GeneralComponents/Header/Header.tsx`, apply these exact string replacements (keep all logic/refs/effects untouched — only the literal content below changes):

```tsx
const MARQUEE_ITEMS = [
  'Free On-Site Estimates',
  '30-Day Re-Service Guarantee',
  'Flat-Rate Pricing — No Surprises',
  '4.9★ Google Rating · 250+ Reviews',
  'TDA Licensed Applicators',
  'No Contracts — Ever',
  'Serving Central Texas Since 2012',
  'Licensed & Insured · Waco, TX',
];
```

Replace the logo block (both desktop `styles.logo` link and the mobile `styles.drawerBrand` span use the same SVG mark and text — update both occurrences identically):

```tsx
<Link href="/" className={styles.logo} aria-label="GreenScape Pro home">
  <span className={styles.logoMark} aria-hidden="true">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12"/>
      <path d="M12 12C12 12 5 12 5 5C12 5 12 12 12 12Z"/>
      <path d="M12 12C12 12 19 12 19 5C12 5 12 12 12 12Z"/>
      <path d="M12 22C12 22 6 20 6 15"/>
      <path d="M12 22C12 22 18 20 18 15"/>
    </svg>
  </span>
  <span className={styles.logoText}>
    <span className={styles.logoName}>GreenScape Pro</span>
    <span className={styles.logoTagline}>Lawn Care · Landscaping · Outdoor Living</span>
  </span>
</Link>
```

Replace both `tel:+12549001234` occurrences (desktop call button and mobile drawer call button) with `tel:+12549005200`, and both visible `Call (254) 900-1234` / `Call Now` labels — `Call Now` stays as-is (no number in the label), and the drawer's button text `Call (254) 900-1234` becomes `Call (254) 900-5200`.

Replace the drawer footer line:

```tsx
<div className={styles.drawerFoot}>
  <span className={styles.drawerDot} aria-hidden="true" />
  Licensed &amp; Insured · Waco, TX
</div>
```
(text unchanged — already generic; leave as-is).

- [ ] **Step 2: Update `Footer.tsx` content**

Replace the data constants and the brand column JSX in `components/GeneralComponents/Footer/Footer.tsx`:

```tsx
import {
  faLocationDot, faPhone, faEnvelope,
  faShieldHalved, faLeaf, faClock, faSeedling,
} from '@fortawesome/free-solid-svg-icons';
```

```tsx
const NAV_LINKS = [
  { href: '/',               label: 'Home' },
  { href: '/services',       label: 'Services' },
  { href: '/about',          label: 'About' },
  { href: '/blogs',          label: 'Blog' },
  { href: '/contact',        label: 'Get a Quote' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const SERVICE_LINKS = [
  { href: '/services/lawn-mowing-maintenance',   label: 'Lawn Mowing & Maintenance' },
  { href: '/services/landscape-design',          label: 'Landscape Design' },
  { href: '/services/irrigation-sprinkler-systems', label: 'Irrigation & Sprinklers' },
  { href: '/services/hardscaping',               label: 'Hardscaping' },
  { href: '/services/tree-shrub-care',           label: 'Tree & Shrub Care' },
  { href: '/services/seasonal-cleanup',          label: 'Seasonal Cleanup' },
];

const LOCAL_AREAS = [
  'Waco, TX', 'Hewitt, TX', 'Woodway, TX',
  'Robinson, TX', 'China Spring, TX', 'Temple, TX',
  'Killeen, TX', 'Hillsboro, TX',
];

const TRUST_ITEMS = [
  { icon: faShieldHalved, label: 'Licensed & Insured' },
  { icon: faLeaf,         label: 'TDA Licensed' },
  { icon: faClock,        label: 'On-Time Crews' },
  { icon: faSeedling,     label: '30-Day Guarantee' },
];

const SOCIALS = [
  { href: 'https://facebook.com/greenscapeprowaco', icon: faFacebookF, label: 'Facebook' },
  { href: 'https://g.page/r/greenscapeprowaco',      icon: faGoogle,    label: 'Google' },
];
```

Brand column:

```tsx
<Link href="/" className={styles.logo}>
  <span className={styles.logoMark}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12"/>
      <path d="M12 12C12 12 5 12 5 5C12 5 12 12 12 12Z"/>
      <path d="M12 12C12 12 19 12 19 5C12 5 12 12 12 12Z"/>
      <path d="M12 22C12 22 6 20 6 15"/>
      <path d="M12 22C12 22 18 20 18 15"/>
    </svg>
  </span>
  <div className={styles.logoText}>
    <span className={styles.logoName}>GreenScape Pro</span>
    <span className={styles.logoSub}>Waco, Texas</span>
  </div>
</Link>

<p className={styles.tagline}>
  Flat-rate pricing. On-time crews. Zero contracts — ever. Serving Central Texas properties since 2012.
</p>

<div className={styles.contactBlock}>
  <a href="tel:+12549005200" className={styles.phoneLink}
    onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Footer Phone', section: 'Footer-Brand' })}>
    <FontAwesomeIcon icon={faPhone} />
    (254) 900-5200
  </a>
  <a href="mailto:hello@greenscapeprowaco.com" className={styles.emailLink}
    onClick={() => trackEvent({ eventType: 'email_click', elementLabel: 'Footer Email', section: 'Footer-Brand' })}>
    <FontAwesomeIcon icon={faEnvelope} />
    hello@greenscapeprowaco.com
  </a>
  <span className={styles.addressLine}>
    <FontAwesomeIcon icon={faLocationDot} />
    3311 Franklin Ave, Waco, TX 76710
  </span>
</div>
```

Bottom bar:

```tsx
<p className={styles.copyright}>
  &copy; {new Date().getFullYear()} GreenScape Pro. All Rights Reserved. | TDA Licensed Applicator #XXXXXXXX
</p>
<a href="tel:+12549005200" className={styles.emergencyBtn}
  onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Storm Cleanup Line', section: 'Footer-Bottom' })}>
  <span className={styles.emergencyDot} />
  Storm Cleanup Hotline
</a>
```

Trust strip CTA label `Book a Tech Today →` becomes `Get a Free Quote →`.

- [ ] **Step 2: Run typecheck**

Run: `npm run typecheck`
Expected: no errors. `faLeaf` and `faSeedling` exist in `@fortawesome/free-solid-svg-icons` (same package already installed) — if either name doesn't resolve, substitute `faTree` / `faSprayCanSparkles` respectively, both also in the free-solid set.

- [ ] **Step 3: Visual check**

Run: `npm run dev`, open `http://localhost:3000`, confirm header/footer show "GreenScape Pro", green accent color, correct phone/email/address, no leftover "Arctic Air" or HVAC text.

- [ ] **Step 4: Commit**

```bash
git add components/GeneralComponents/Header/Header.tsx components/GeneralComponents/Footer/Footer.tsx
git commit -m "brand: rebrand Header/Footer to GreenScape Pro"
```

---

### Task 3: Homepage hero — `WelcomePage` component

**Files:**
- Modify: `components/Pages/Home/WelcomePage/WelcomePage.tsx`
- Modify: `components/Pages/Home/WelcomePage/styles.module.scss` (color-only touch-ups if the snow-cyan `#16def9` particle color is hardcoded inline — it is, in Step 1 below)

**Interfaces:**
- Produces: default export `WelcomePage()` — a self-contained hero `<section>` with no props, consumed as-is by `src/app/page.tsx` (Task 4) via `import WelcomePage from "#/Pages/Home/WelcomePage/WelcomePage"`. Signature unchanged.

The HVAC hero uses two bespoke animated widgets: a falling-snowflake canvas (winter/cold theme) and a thermometer (temperature theme). Neither maps to landscaping. Replace both with an equivalent-complexity landscaping-themed pair: a **falling-leaf/pollen particle canvas** and a **growth meter** (a plant growing from 0% to full height, styled like the thermometer but representing "yard health").

- [ ] **Step 1: Replace `ParticleCanvas` (leaf/pollen drift instead of snow)**

```tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './styles.module.scss';

// ── Leaf/pollen canvas ───────────────────────────────────────────────────────
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    const pts = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 4 + 1.5, vx: (Math.random() - 0.5) * 0.6,
      vy: Math.random() * 0.4 + 0.15, o: Math.random() * 0.35 + 0.55,
      spin: Math.random() * 0.04 - 0.02, angle: Math.random() * Math.PI * 2,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.save(); ctx.globalAlpha = p.o;
        ctx.translate(p.x, p.y); ctx.rotate(p.angle);
        ctx.fillStyle = '#4ade80';
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 1.7, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        p.x += p.vx; p.y += p.vy; p.angle += p.spin;
        if (p.y > canvas.height + 10) { p.y = -10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className={styles.particleCanvas} aria-hidden="true" />;
}

// ── Growth meter (replaces thermometer) ──────────────────────────────────────
function GrowthMeter() {
  const [fill, setFill] = useState(0);
  useEffect(() => { const t = setTimeout(() => setFill(92), 750); return () => clearTimeout(t); }, []);
  return (
    <div className={styles.thermo} aria-hidden="true">
      <div className={styles.thermoColumn}>
        <div className={styles.thermoTube}>
          <motion.div
            className={styles.thermoFill}
            initial={{ height: '0%' }}
            animate={{ height: `${fill}%` }}
            transition={{ duration: 2.0, delay: 0.85, ease: [0.34, 1.2, 0.64, 1] }}
          />
        </div>
        <div className={styles.thermoBulb} />
      </div>
      <div className={styles.thermoLabels}>
        <span className={styles.thermoTop}>Lush</span>
        <span className={styles.thermoMid}>Waco, TX</span>
        <span className={styles.thermoBot}>Bare</span>
      </div>
    </div>
  );
}

const CHIPS = ['Free Estimates', 'No Contracts', 'TDA Licensed', '12+ Yrs Local', '30-Day Guarantee'];

export default function WelcomePage() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <ParticleCanvas />
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>

        {/* LEFT ── text */}
        <div className={styles.content}>
          <motion.div className={styles.badge}
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <span className={styles.badgeDot} />
            Waco&apos;s Most Trusted Landscaper — Since 2012
          </motion.div>

          <motion.h1 className={styles.headline}
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Grow It.<br />Shape It.<br />
            <span className={styles.accentLine}>GreenScape Pro.</span>
          </motion.h1>

          <motion.p className={styles.sub}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}>
            Flat-rate pricing. On-time crews. 30-day re-service guarantee on every job.
            Serving Waco and Central Texas with licensed, insured landscape professionals.
          </motion.p>

          <motion.div className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}>
            <a href="tel:+12549005200" className={styles.ctaPrimary}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call (254) 900-5200
            </a>
            <Link href="/contact" className={styles.ctaSecondary}>
              Free Estimate
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </motion.div>

          <motion.div className={styles.chips}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}>
            {CHIPS.map(c => (
              <span key={c} className={styles.chip}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT ── visual widget */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <motion.div className={styles.bgFlake}
            animate={{ rotate: 360 }}
            transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}>
            <svg width="420" height="420" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round">
              <path d="M12 22V12"/>
              <path d="M12 12C12 12 4 12 4 4C12 4 12 12 12 12Z"/>
              <path d="M12 12C12 12 20 12 20 4C12 4 12 12 12 12Z"/>
            </svg>
          </motion.div>

          <motion.div className={`${styles.statCard} ${styles.sc1}`}
            initial={{ opacity: 0, y: -10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.05, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.scNum}>1,800+</span>
            <span className={styles.scLbl}>Properties Serviced</span>
          </motion.div>

          <motion.div className={`${styles.statCard} ${styles.sc2}`}
            initial={{ opacity: 0, y: -10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.scNum}>4.9 ★</span>
            <span className={styles.scLbl}>Google Rating</span>
          </motion.div>

          <GrowthMeter />

          <motion.div className={`${styles.statCard} ${styles.sc3}`}
            initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.35, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.scNum}>30-Day</span>
            <span className={styles.scLbl}>Re-Service Guarantee</span>
          </motion.div>

          <motion.div className={`${styles.statCard} ${styles.sc4} ${styles.scOrange}`}
            initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.scNum}>Free</span>
            <span className={styles.scLbl}>On-Site Estimates</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Run typecheck**

Run: `npm run typecheck`
Expected: no errors.

- [ ] **Step 3: Visual check**

Run: `npm run dev`, view homepage hero — confirm green leaf particles drift down instead of snowflakes, growth meter fills green instead of thermometer red/orange, all copy reads landscaping not HVAC.

- [ ] **Step 4: Commit**

```bash
git add components/Pages/Home/WelcomePage/WelcomePage.tsx
git commit -m "content: replace HVAC snow/thermometer hero with landscaping leaf/growth-meter hero"
```

---

### Task 4: Homepage body — `src/app/page.tsx`

**Files:**
- Modify: `src/app/page.tsx` (full file)

**Interfaces:**
- Consumes: `WelcomePage` (Task 3, no-prop default export), `reviews` from `../../libs/local-db/reviews` (Task 14 replaces this file's content but not its shape — `Review[]` with fields `name, location, rating, date, text, service?`), all `#/PageComponents/*` and `#/PageComponents/ContactForms/Variant4/Form` unchanged.

- [ ] **Step 1: Replace the file contents**

```tsx
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
    { icon: faSeedling,    title: "Lawn Mowing & Maintenance", body: "Weekly or bi-weekly mowing, edging, and blowdown on a schedule that keeps your yard consistently sharp.", link: "/services/lawn-mowing-maintenance" },
    { icon: faTree,        title: "Landscape Design",          body: "Full design-to-install landscape plans — beds, plantings, and layout built around how your property is actually used.", link: "/services/landscape-design" },
    { icon: faWater,       title: "Irrigation & Sprinklers",   body: "System install, repair, and seasonal tune-ups that keep every zone watering evenly without waste.", link: "/services/irrigation-sprinkler-systems" },
    { icon: faPaintRoller, title: "Hardscaping",               body: "Patios, walkways, and retaining walls built to hold up through Texas heat and hard freezes alike.", link: "/services/hardscaping" },
    { icon: faLeaf,        title: "Tree & Shrub Care",         body: "Pruning, shaping, and health treatments that keep trees and shrubs looking intentional, not overgrown.", link: "/services/tree-shrub-care" },
    { icon: faBroom,       title: "Seasonal Cleanup",          body: "Spring and fall cleanup — leaf removal, bed refresh, and pre-season prep so your yard is never caught off guard.", link: "/services/seasonal-cleanup" },
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
        <ImpactMetrics title="Numbers That Speak for Us" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent heading="Complete Landscaping Services for Your Property" cards={services} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="What Makes GreenScape Pro Different" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/" spot="homepage-contact-form" formVariant={2} />
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
        headline="Yard Getting Away From You? Let's Fix That."
        subline="Free estimates across Waco, Hewitt, Woodway, Robinson, and all of Central Texas. Flat-rate pricing. 30-day guarantee."
        primaryText="Call (254) 900-5200"
        primaryLink="tel:+12549005200"
        secondaryText="Book Online"
        secondaryLink="/contact"
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

    </main>
  );
}
```

- [ ] **Step 2: Run typecheck, then visual check**

Run: `npm run typecheck` — expect no errors.
Run: `npm run dev`, load `/` — confirm every section renders, no console errors, no leftover HVAC copy.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "content: rewrite homepage body with GreenScape Pro landscaping copy"
```

---

### Task 5: Service page — Lawn Mowing & Maintenance (↔ ac-repair)

**Files:**
- Create: `src/app/services/lawn-mowing-maintenance/page.tsx` (clone structure from `src/app/services/ac-repair/page.tsx`)
- Create: `src/app/services/lawn-mowing-maintenance/layout.tsx` (clone structure from `src/app/services/ac-repair/layout.tsx`, updating metadata title/description/slug)
- Delete: `src/app/services/ac-repair/` (both files, after the new folder is verified working)

**Interfaces:**
- Consumes: same `#/PageComponents/*` set as `ac-repair/page.tsx` (`Breadcrumb, SectionIntro, TrustBar, WhatToExpect, WhyChooseUs, ProcessTimeline, ImpactMetrics, Testimonials, GuaranteeSection, LocalServiceAreas, ValueComparison, FAQ, CTABanner, ServiceCardComponent, ContactForms/Variant4`), `reviews` from `&/local-db/reviews` (Task 14).
- Produces: route `/services/lawn-mowing-maintenance`, linked from Footer `SERVICE_LINKS` (Task 2) and homepage `services` array (Task 4) and every other service/industry page's cross-service links.

- [ ] **Step 1: Read the layout.tsx metadata pattern**

Read `src/app/services/ac-repair/layout.tsx` first to see the exact metadata export shape (title, description, canonical, OG tags) — reuse that shape verbatim, only substituting the strings below:
- Title: `Lawn Mowing & Maintenance in Waco, TX | GreenScape Pro`
- Description: `Weekly and bi-weekly lawn mowing and maintenance in Waco, TX. Flat-rate pricing, on-time crews, 30-day re-service guarantee. Free estimates.`
- Slug/path: `/services/lawn-mowing-maintenance`

- [ ] **Step 2: Write `page.tsx`**, cloning `ac-repair/page.tsx`'s component order exactly (`Breadcrumb → SectionIntro → TrustBar → WhatToExpect → WhyChooseUs → ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection → LocalServiceAreas → ValueComparison → FAQ → CTABanner → ServiceCardComponent → Form`), same imports, function name `LawnMowingMaintenancePage`, with this content:

```tsx
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
  faSeedling, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faTree, faWater, faPaintRoller, faBroom,
} from "@fortawesome/free-solid-svg-icons";

export default function LawnMowingMaintenancePage() {

  const expectations = [
    { icon: faSearch,       title: "Same-Week Walkthrough",             description: "We walk the property, flag anything that needs attention, and explain the plan in plain English — no upsell pressure, ever." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Start",    description: "You get a written price before any work starts. It doesn't change once we're on-site." },
    { icon: faCheckCircle,  title: "Consistent Crew, Consistent Cut",    description: "The same crew services your property visit to visit, so mowing height, edging lines, and cleanup stay consistent." },
    { icon: faShieldHalved, title: "30-Day Re-Service Guarantee",        description: "If anything about a visit isn't right, we come back and fix it at no charge within 30 days." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "On-Time Crews — Every Visit",       description: "We run tight routes and text you when we're on the way. No all-day windows, no guessing." },
    { icon: faSeedling,     title: "Weekly or Bi-Weekly Plans",         description: "Choose the cadence that fits your yard and budget — switch anytime, no long-term contract required." },
    { icon: faShieldHalved, title: "TDA Licensed, Fully Insured",       description: "Every crew member works under our TDA-licensed applicator status for treatments, and every visit is covered by full insurance." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",      description: "Contact us by phone, text, or online. We'll schedule a free on-site estimate, usually within 2-3 business days.", icon: faHeadset },
    { number: 2, title: "Crew Walks Property", description: "On time, in uniform. We flag anything that needs attention before quoting.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",   description: "We show you the exact price before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Mow & Guarantee",   description: "Clean edges, cleared debris, tested before we leave, and backed by our 30-day guarantee.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Lawns mowed and maintained across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rating",                     suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years serving Waco-area properties",               suffix: "+", duration: 2 },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",       body: "The price we quote is the price you pay — no matter how the terrain looks up close." },
    { icon: faRotateLeft,   title: "30-Day Re-Service",       body: "Not satisfied with a visit? We come back and make it right at no charge." },
    { icon: faHeadset,      title: "Text-Ahead Scheduling",   body: "We text before every visit so you always know when the crew is coming." },
    { icon: faLock,         title: "Licensed & Insured",      body: "TDA-licensed applicators, fully insured. Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling, most available crews.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full mowing coverage throughout Hewitt.",                 badge: "" },
    { town: "Woodway",      benefit: "Weekly service available for Woodway neighborhoods.",     badge: "" },
    { town: "Robinson",     benefit: "On our regular route — quick turnaround guaranteed.",     badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling.",              badge: "" },
    { town: "Temple",       benefit: "Full mowing coverage for Bell County properties.",         badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts",  us: "✅ Always written",      others: "❌ Verbal estimate only" },
    { feature: "Same crew every visit",                us: "✅ Consistent crew",     others: "❌ Rotating crews" },
    { feature: "TDA licensed applicators",             us: "✅ All crew leads",       others: "❌ Not always" },
    { feature: "30-day re-service guarantee",          us: "✅ Every job",           others: "❌ No guarantee" },
    { feature: "Text-ahead scheduling",                us: "✅ Every visit",         others: "❌ No notice given" },
  ];

  const faq = [
    { question: "How much does lawn mowing cost in Waco?",              answer: "Most residential lots run $45–$85 per visit depending on size and terrain. Weekly and bi-weekly plans include edging and blowdown. We quote flat-rate before starting." },
    { question: "Can you start service the same week I call?",         answer: "In most cases, yes — free on-site estimates are usually available within 2-3 business days, with service starting shortly after you approve." },
    { question: "Do you offer weekly or bi-weekly mowing plans?",      answer: "Both. Most Central Texas lawns do best on a weekly cadence during peak growing season and bi-weekly in cooler months. We'll recommend what fits your yard." },
    { question: "What's included in a standard mowing visit?",        answer: "Mowing, string-line edging along walks and beds, and full blowdown of clippings from hard surfaces. Nothing left behind." },
    { question: "Do you offer one-time mows, not just recurring plans?", answer: "Yes — one-time mows are available, especially for overgrown lots or move-in/move-out cleanups, though most customers move to a recurring plan after the first visit." },
    { question: "Do you mow commercial properties too?",               answer: "Yes — we service HOA common areas, commercial lots, and municipal properties in addition to residential lawns." },
  ];

  const crossServices = [
    { icon: faTree,        title: "Landscape Design",   body: "Full design-to-install landscape plans for beds and plantings.",       link: "/services/landscape-design" },
    { icon: faWater,       title: "Irrigation & Sprinklers", body: "System install, repair, and seasonal tune-ups.",                  link: "/services/irrigation-sprinkler-systems" },
    { icon: faPaintRoller, title: "Hardscaping",        body: "Patios, walkways, and retaining walls built to last.",                 link: "/services/hardscaping" },
    { icon: faBroom,       title: "Seasonal Cleanup",   body: "Spring and fall cleanup that keeps your yard ready year-round.",       link: "/services/seasonal-cleanup" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Lawn Mowing & Maintenance" },
      ]} />

      <SectionIntro
        title="Lawn Mowing & Maintenance in Waco, TX"
        subtitle="Consistent, on-time mowing with flat-rate pricing and a 30-day re-service guarantee — weekly or bi-weekly plans built around your yard."
      />

      <TrustBar headline="1,800+ Central Texas properties trust GreenScape Pro for lawn care" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Mowing Service" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls GreenScape Pro First" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/lawn-mowing-maintenance" title="Lawn Mowing Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Lawn Mowing FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Yard Overdue for a Mow? Let's Get It Scheduled."
        subline="Free on-site estimates. Flat-rate pricing, 30-day guarantee, weekly or bi-weekly plans."
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
          title="Schedule Your Lawn Service"
          cityName="Waco"
          slug="services/lawn-mowing-maintenance"
          spot="lawn-mowing-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
```

- [ ] **Step 3: Verify route renders, then delete the old `ac-repair` folder**

Run: `npm run typecheck` — expect no errors.
Run: `npm run dev`, load `/services/lawn-mowing-maintenance` — confirm full page renders correctly.
Then delete `src/app/services/ac-repair/page.tsx` and `src/app/services/ac-repair/layout.tsx` (and the empty `ac-repair/` folder, plus its `page.module.scss` if that folder has its own — check first with `ls src/app/services/ac-repair`; if it only has `page.tsx`/`layout.tsx` sharing the parent's `page.module.scss`, just delete those two files and the folder).
Run: `npm run dev` again, confirm `/services/ac-repair` now 404s and `/services/lawn-mowing-maintenance` still works.

- [ ] **Step 4: Commit**

```bash
git add -A src/app/services/lawn-mowing-maintenance src/app/services/ac-repair
git commit -m "content: replace AC Repair service page with Lawn Mowing & Maintenance"
```

---

### Task 6: Service page — Landscape Design (↔ installation)

**Files:**
- Create: `src/app/services/landscape-design/page.tsx` (clone structure from `src/app/services/installation/page.tsx`)
- Create: `src/app/services/landscape-design/layout.tsx` (clone from `src/app/services/installation/layout.tsx`, title `Landscape Design in Waco, TX | GreenScape Pro`, description `Custom landscape design and installation in Waco, TX — beds, plantings, and full-property layouts. Free estimates, flat-rate pricing.`, slug `/services/landscape-design`)
- Delete: `src/app/services/installation/`

**Interfaces:** Same as Task 5 (identical component set/import list, same `reviews` and `Variant4` usage). Route `/services/landscape-design` is linked from Footer/homepage/cross-service cards set up in Tasks 2 and 4.

- [ ] **Step 1: Read `src/app/services/installation/page.tsx` first** to confirm its exact component order (it may differ slightly from `ac-repair` — match whatever order it actually uses).

- [ ] **Step 2: Write `page.tsx`**, function name `LandscapeDesignPage`, following the same component-order/import pattern as Task 5's file but with this content:

```
Hero: "Landscape Design in Waco, TX" / "Full design-to-install landscape plans — beds, plantings, and layout built around how your property is actually used, with a 30-day guarantee on every install."
TrustBar: "1,800+ Central Texas properties trust GreenScape Pro for landscape design"
Expectations: (1) "Free Design Consultation" - we walk the property and sketch a plan before quoting anything; (2) "3D-Style Layout Preview" - see beds, plantings, and hardscape elements mapped out before we dig; (3) "Nursery-Grade Plant Selection" - every plant is sourced for Central Texas soil and climate, not generic stock; (4) "30-Day Install Guarantee" - any plant that fails within 30 days of install is replaced free.
WhyChooseUs title "Why Waco Calls GreenScape Pro for Design": (1) "Native & Drought-Tolerant Expertise" - plant selections built for Central Texas heat and water restrictions; (2) "One Crew, Start to Finish" - the same team designs and installs, so nothing gets lost in handoff; (3) "TDA Licensed, Fully Insured" - every install backed by proper licensing and insurance.
Process: 1) Call or Book — free design consultation scheduled within days; 2) Site Walk & Sketch — crew walks the property and sketches a layout; 3) Flat-Rate Quote — full plan price before any digging starts; 4) Install & Guarantee — clean install, walkthrough, 30-day plant guarantee.
Metrics: 1,800+ properties serviced / 97% satisfaction / 12+ years local.
Guarantees: Flat-Rate Pricing; 30-Day Plant Guarantee; Free Design Consultation; Licensed & Insured.
Local areas: same 6-town list and phrasing pattern as Task 5, servicePath "services/landscape-design", title "Landscape Design Across Central Texas".
Comparison rows: Free design consultation (us: ✅ Always included / others: ❌ Charged separately); 30-day plant guarantee (✅ Every install / ❌ No guarantee); Native/drought-tolerant expertise (✅ Central Texas focused / ❌ Generic stock); Same crew designs and installs (✅ One team / ❌ Design and install outsourced); TDA licensed (✅ Yes / ❌ Not always).
FAQ (6 Q&A) covering: typical cost of a landscape design project in Waco; how long design-to-install takes; whether drought-tolerant/native plants are used; whether one-time projects (not just recurring service) are handled; what the 30-day plant guarantee covers; whether HOA-approved plans can be provided.
CTA banner: headline "Ready to Redesign Your Landscape?" / subline "Free design consultation. Flat-rate pricing, 30-day plant guarantee." / primary "Call Us Now" tel:+12549005200 / secondary "Book Online" /contact.
Cross-services: Lawn Mowing & Maintenance, Irrigation & Sprinklers, Hardscaping, Tree & Shrub Care (link to their respective routes).
Form: Variant4, title "Start Your Landscape Design", slug "services/landscape-design", spot "landscape-design-page-form", formVariant 2.
```

Write out this content as full JSX/data-array code following the exact structural pattern demonstrated in Task 5's complete file (same import style, same icon-import approach — pick relevant FontAwesome solid icons per section, e.g. `faDraftingCompass` for design consultation, `faSeedling` for plant selection, `faTree`/`faWater`/`faPaintRoller`/`faLeaf` for cross-service icons), same `styles from "../page.module.scss"` import, same Breadcrumb crumb pattern (`Home / Services / Landscape Design`).

- [ ] **Step 3: Verify, delete old folder, commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/services/landscape-design` renders.
Delete `src/app/services/installation/page.tsx` and `layout.tsx` (+ folder). Confirm `/services/installation` 404s.

```bash
git add -A src/app/services/landscape-design src/app/services/installation
git commit -m "content: replace Installation service page with Landscape Design"
```

---

### Task 7: Service page — Irrigation & Sprinkler Systems (↔ duct-cleaning)

**Files:**
- Create: `src/app/services/irrigation-sprinkler-systems/page.tsx` (clone structure from `src/app/services/duct-cleaning/page.tsx`)
- Create: `src/app/services/irrigation-sprinkler-systems/layout.tsx` (clone from `duct-cleaning/layout.tsx`, title `Irrigation & Sprinkler Systems in Waco, TX | GreenScape Pro`, description `Sprinkler system installation, repair, and seasonal tune-ups in Waco, TX. Flat-rate pricing, licensed technicians, 30-day guarantee.`, slug `/services/irrigation-sprinkler-systems`)
- Delete: `src/app/services/duct-cleaning/`

**Interfaces:** Same pattern as Task 5/6.

- [ ] **Step 1: Read `src/app/services/duct-cleaning/page.tsx` first** to confirm exact component order.

- [ ] **Step 2: Write `page.tsx`**, function name `IrrigationSprinklerSystemsPage`, following the established pattern with this content:

```
Hero: "Irrigation & Sprinkler Systems in Waco, TX" / "System install, repair, and seasonal tune-ups that keep every zone watering evenly — no more brown patches or wasted water."
TrustBar: "1,800+ Central Texas properties trust GreenScape Pro for irrigation service"
Expectations: (1) "Full-Zone Diagnostic" - we test every zone and head before quoting any repair; (2) "Flat-Rate Quote Before We Touch Anything"; (3) "Fix It Right the First Time" - trucks stocked with common heads, valves, and controllers; (4) "30-Day Re-Service Guarantee".
WhyChooseUs title "Why Waco Calls GreenScape Pro for Irrigation": (1) "Water-Waste Diagnostics" - we find leaks and misaligned heads that spike water bills; (2) "All Major Controller Brands Serviced" - Rain Bird, Hunter, Toro, and smart-controller brands; (3) "TDA Licensed, Fully Insured".
Process: 1) Call or Book; 2) Tech Walks Every Zone; 3) Flat-Rate Quote; 4) Repair & Test — system tested zone-by-zone before crew leaves.
Metrics: 1,800+ properties / 97% satisfaction / 12+ years local.
Guarantees: Flat-Rate Pricing; 30-Day Re-Service; Text-Ahead Scheduling; Licensed & Insured.
Local areas: same pattern, servicePath "services/irrigation-sprinkler-systems", title "Irrigation Service Across Central Texas".
Comparison rows: Full-zone diagnostic before quoting (✅ Every visit / ❌ Spot-check only); Flat-rate repair pricing (✅ Written quote / ❌ Hourly + parts); All major controller brands serviced (✅ Yes / ❌ Limited brands); 30-day re-service guarantee (✅ Included / ❌ None); Smart controller setup (✅ Included / ❌ Not offered).
FAQ (6 Q&A): typical cost of sprinkler repair in Waco; signs a system needs repair (brown patches, low pressure, high water bill); whether smart/WiFi controllers are installed; seasonal tune-up timing (spring startup, fall winterization); whether leak detection is included; whether new system installs are handled or only repairs.
CTA banner: headline "Sprinklers Acting Up? Let's Fix That." / subline "Free diagnostics available. Flat-rate pricing, 30-day guarantee." / primary "Call Us Now" tel:+12549005200 / secondary "Book Online" /contact.
Cross-services: Lawn Mowing & Maintenance, Landscape Design, Tree & Shrub Care, Seasonal Cleanup.
Form: Variant4, title "Schedule Your Irrigation Service", slug "services/irrigation-sprinkler-systems", spot "irrigation-page-form", formVariant 2.
```

Use FontAwesome icons appropriate to irrigation (`faWater`/`faFaucetDrip`/`faGaugeHigh`/`faSlidersH` etc. from `free-solid-svg-icons` — confirm each name exists in the installed package version before using; if a name doesn't resolve, substitute the closest available water/valve-related icon, e.g. `faDroplet`, `faValveClosed` is not in free set, use `faFaucet` or `faGears`).

- [ ] **Step 3: Verify, delete old folder, commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/services/irrigation-sprinkler-systems` renders.
Delete `src/app/services/duct-cleaning/page.tsx` and `layout.tsx` (+ folder).

```bash
git add -A src/app/services/irrigation-sprinkler-systems src/app/services/duct-cleaning
git commit -m "content: replace Duct Cleaning service page with Irrigation & Sprinkler Systems"
```

---

### Task 8: Service page — Hardscaping (↔ heating)

**Files:**
- Create: `src/app/services/hardscaping/page.tsx` (clone structure from `src/app/services/heating/page.tsx`)
- Create: `src/app/services/hardscaping/layout.tsx` (clone from `heating/layout.tsx`, title `Hardscaping in Waco, TX | GreenScape Pro`, description `Patios, walkways, and retaining walls in Waco, TX. Flat-rate pricing, licensed crews, 30-day guarantee.`, slug `/services/hardscaping`)
- Delete: `src/app/services/heating/`

**Interfaces:** Same pattern as prior service tasks.

- [ ] **Step 1: Read `src/app/services/heating/page.tsx` first** to confirm exact component order.

- [ ] **Step 2: Write `page.tsx`**, function name `HardscapingPage`, with this content:

```
Hero: "Hardscaping in Waco, TX" / "Patios, walkways, and retaining walls built to hold up through Texas heat and hard freezes alike — flat-rate pricing, 30-day guarantee."
TrustBar: "1,800+ Central Texas properties trust GreenScape Pro for hardscape construction"
Expectations: (1) "Free On-Site Design Walkthrough"; (2) "Flat-Rate Quote Before We Break Ground"; (3) "Built to Grade, Every Time" - proper base prep and drainage on every install; (4) "30-Day Guarantee" - settling or grading issues fixed free within 30 days.
WhyChooseUs title "Why Waco Calls GreenScape Pro for Hardscaping": (1) "Proper Base & Drainage Every Time" - most patio failures are drainage failures, we don't cut that corner; (2) "Pavers, Stone & Concrete — All Handled" - full range of hardscape materials; (3) "TDA Licensed, Fully Insured".
Process: 1) Call or Book; 2) Site Walk & Design; 3) Flat-Rate Quote; 4) Build & Guarantee — graded, tested, guaranteed 30 days.
Metrics: 1,800+ properties / 97% satisfaction / 12+ years local.
Guarantees: Flat-Rate Pricing; 30-Day Grading Guarantee; Free Design Walkthrough; Licensed & Insured.
Local areas: same pattern, servicePath "services/hardscaping", title "Hardscape Construction Across Central Texas".
Comparison rows: Proper base/drainage prep (✅ Every install / ❌ Often skipped); Flat-rate pricing before work starts (✅ Written quote / ❌ Estimate only); Pavers, stone, and concrete all handled (✅ Full range / ❌ Limited materials); 30-day grading guarantee (✅ Included / ❌ None); HOA-compliant designs available (✅ Yes / ❌ Not offered).
FAQ (6 Q&A): typical cost of a patio or walkway in Waco; how long a hardscape project takes; whether retaining walls are engineered for Texas clay soil; whether HOA approval documentation is provided; what the 30-day guarantee covers; whether financing is available for larger projects.
CTA banner: headline "Ready to Build Your Outdoor Space?" / subline "Free design walkthrough. Flat-rate pricing, 30-day guarantee." / primary "Call Us Now" tel:+12549005200 / secondary "Book Online" /contact.
Cross-services: Landscape Design, Irrigation & Sprinklers, Tree & Shrub Care, Seasonal Cleanup.
Form: Variant4, title "Start Your Hardscape Project", slug "services/hardscaping", spot "hardscaping-page-form", formVariant 2.
```

- [ ] **Step 3: Verify, delete old folder, commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/services/hardscaping` renders.
Delete `src/app/services/heating/page.tsx`, `layout.tsx`, and `page.module.scss` if it has its own (check first — `heating` had a `page.module.scss` per the earlier directory listing; if `hardscaping` needs the same scoped styles, copy `heating/page.module.scss` to `hardscaping/page.module.scss` unchanged before deleting the source, since the shared `../page.module.scss` import may not cover page-specific classes).

```bash
git add -A src/app/services/hardscaping src/app/services/heating
git commit -m "content: replace Heating service page with Hardscaping"
```

---

### Task 9: Service page — Tree & Shrub Care (↔ indoor-air-quality)

**Files:**
- Create: `src/app/services/tree-shrub-care/page.tsx` (clone structure from `src/app/services/indoor-air-quality/page.tsx`)
- Create: `src/app/services/tree-shrub-care/layout.tsx` (clone from `indoor-air-quality/layout.tsx`, title `Tree & Shrub Care in Waco, TX | GreenScape Pro`, description `Tree and shrub pruning, shaping, and health treatments in Waco, TX. Flat-rate pricing, TDA licensed applicators.`, slug `/services/tree-shrub-care`)
- Delete: `src/app/services/indoor-air-quality/`

**Interfaces:** Same pattern as prior service tasks.

- [ ] **Step 1: Read `src/app/services/indoor-air-quality/page.tsx` first** to confirm exact component order.

- [ ] **Step 2: Write `page.tsx`**, function name `TreeShrubCarePage`, with this content:

```
Hero: "Tree & Shrub Care in Waco, TX" / "Pruning, shaping, and health treatments that keep trees and shrubs looking intentional — flat-rate pricing, TDA licensed applicators."
TrustBar: "1,800+ Central Texas properties trust GreenScape Pro for tree & shrub care"
Expectations: (1) "Free Health Assessment" - we inspect for disease, pests, and structural issues before recommending treatment; (2) "Flat-Rate Quote Before We Start"; (3) "Proper Pruning Technique" - cuts made to support long-term plant health, not just shape; (4) "30-Day Re-Service Guarantee".
WhyChooseUs title "Why Waco Calls GreenScape Pro for Tree & Shrub Care": (1) "TDA Licensed for Treatments" - fertilizer, pest, and disease treatments applied under proper state licensing; (2) "Storm-Damage Response" - fast response for storm-damaged limbs and shrubs; (3) "Native Species Expertise" - pruning calibrated to Central Texas species and growing seasons.
Process: 1) Call or Book; 2) Health Assessment On-Site; 3) Flat-Rate Quote; 4) Prune, Treat & Guarantee.
Metrics: 1,800+ properties / 97% satisfaction / 12+ years local.
Guarantees: Flat-Rate Pricing; 30-Day Re-Service; Free Health Assessment; Licensed & Insured.
Local areas: same pattern, servicePath "services/tree-shrub-care", title "Tree & Shrub Care Across Central Texas".
Comparison rows: Free health assessment (✅ Every visit / ❌ Charged separately); TDA licensed for treatments (✅ Yes / ❌ Not always); Proper pruning technique for plant health (✅ Certified approach / ❌ Shape-only cuts); Storm-damage response (✅ Fast response / ❌ Standard queue only); 30-day re-service guarantee (✅ Included / ❌ None).
FAQ (6 Q&A): typical cost of tree pruning in Waco; how to tell if a tree or shrub is diseased; whether storm-damaged limb removal is handled; best time of year to prune Central Texas trees; whether pest/fungus treatments are included; whether tree removal (not just pruning) is offered.
CTA banner: headline "Trees or Shrubs Overgrown? Let's Shape Them Up." / subline "Free health assessment. Flat-rate pricing, TDA licensed applicators." / primary "Call Us Now" tel:+12549005200 / secondary "Book Online" /contact.
Cross-services: Landscape Design, Lawn Mowing & Maintenance, Hardscaping, Seasonal Cleanup.
Form: Variant4, title "Schedule Tree & Shrub Care", slug "services/tree-shrub-care", spot "tree-shrub-care-page-form", formVariant 2.
```

- [ ] **Step 3: Verify, delete old folder, commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/services/tree-shrub-care` renders.
Delete `src/app/services/indoor-air-quality/page.tsx` and `layout.tsx` (+ folder).

```bash
git add -A src/app/services/tree-shrub-care src/app/services/indoor-air-quality
git commit -m "content: replace Indoor Air Quality service page with Tree & Shrub Care"
```

---

### Task 10: Service page — Seasonal Cleanup (↔ maintenance)

**Files:**
- Create: `src/app/services/seasonal-cleanup/page.tsx` (clone structure from `src/app/services/maintenance/page.tsx`)
- Create: `src/app/services/seasonal-cleanup/layout.tsx` (clone from `maintenance/layout.tsx`, title `Seasonal Cleanup in Waco, TX | GreenScape Pro`, description `Spring and fall yard cleanup in Waco, TX. Leaf removal, bed refresh, flat-rate pricing, recurring plans available.`, slug `/services/seasonal-cleanup`)
- Delete: `src/app/services/maintenance/`

**Interfaces:** Same pattern as prior service tasks. `maintenance` was likely a subscription-plan-style page (recurring plans, tiered pricing) — check its structure closely since it may differ from the repair-style pages; mirror whatever plan/tier structure it uses instead of forcing the repair-page pattern.

- [ ] **Step 1: Read `src/app/services/maintenance/page.tsx` first** to confirm its exact component order and whether it includes a pricing-tier/plan component distinct from the other 5 service pages.

- [ ] **Step 2: Write `page.tsx`**, function name `SeasonalCleanupPage`, with this content, matching whatever structure Step 1 revealed (if `maintenance` has a plan-tier section, give Seasonal Cleanup two tiers: "Single Cleanup" and "Spring + Fall Bundle" with flat prices; if it's a repair-style page like the others, follow the same pattern as Task 5):

```
Hero: "Seasonal Cleanup in Waco, TX" / "Spring and fall cleanup — leaf removal, bed refresh, and pre-season prep so your yard is never caught off guard."
TrustBar: "1,800+ Central Texas properties trust GreenScape Pro for seasonal cleanup"
If plan/tier structure exists: Tier 1 "Single Seasonal Cleanup" — leaf/debris removal, bed edging, gutter-adjacent cleanup, single flat price; Tier 2 "Spring + Fall Bundle" — both seasonal visits booked together at a discount, priority scheduling. If no tier structure, use the same expectations/whyFeatures/process/metrics/guarantees/localAreas/comparisonRows/faq/crossServices/CTA/form pattern as Task 5, with content:
Expectations: (1) "Full-Property Walkthrough Before We Start"; (2) "Flat-Rate Quote"; (3) "Complete Debris Haul-Off" - nothing left in bags on the curb; (4) "30-Day Re-Service Guarantee".
WhyChooseUs title "Why Waco Calls GreenScape Pro for Seasonal Cleanup": (1) "Timed to Central Texas Seasons" - spring and fall windows calibrated to local growing patterns, not a generic calendar; (2) "Full Haul-Off Included" - debris removal included in every cleanup, not billed separately; (3) "TDA Licensed, Fully Insured".
Process: 1) Call or Book; 2) Crew Walks Property; 3) Flat-Rate Quote; 4) Cleanup & Haul-Off.
Metrics: 1,800+ properties / 97% satisfaction / 12+ years local.
Guarantees: Flat-Rate Pricing; 30-Day Re-Service; Full Haul-Off Included; Licensed & Insured.
Local areas: same pattern, servicePath "services/seasonal-cleanup", title "Seasonal Cleanup Across Central Texas".
Comparison rows: Full debris haul-off included (✅ Every job / ❌ Billed separately); Flat-rate pricing (✅ Written quote / ❌ Estimate only); Timed to local seasons (✅ Central Texas calibrated / ❌ Generic schedule); 30-day guarantee (✅ Included / ❌ None); Recurring bundle discount available (✅ Yes / ❌ Not offered).
FAQ (6 Q&A): cost of a typical seasonal cleanup in Waco; best timing for spring vs fall cleanup in Central Texas; whether gutter cleanup is included; whether debris haul-off is included in the price; whether a bundled spring+fall plan saves money; whether one-time cleanups are available for move-in/move-out.
CTA banner: headline "Yard Buried in Leaves or Overgrowth? Let's Clear It." / subline "Free estimates. Flat-rate pricing, full haul-off included." / primary "Call Us Now" tel:+12549005200 / secondary "Book Online" /contact.
Cross-services: Lawn Mowing & Maintenance, Landscape Design, Tree & Shrub Care, Hardscaping.
Form: Variant4, title "Schedule Your Seasonal Cleanup", slug "services/seasonal-cleanup", spot "seasonal-cleanup-page-form", formVariant 2.
```

- [ ] **Step 3: Verify, delete old folder, commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/services/seasonal-cleanup` renders.
Delete `src/app/services/maintenance/page.tsx`, `layout.tsx`, and `page.module.scss` if present (check first, per Task 8's note).

```bash
git add -A src/app/services/seasonal-cleanup src/app/services/maintenance
git commit -m "content: replace Maintenance service page with Seasonal Cleanup"
```

---

### Task 11: Services index + services layout

**Files:**
- Modify: `src/app/services/page.tsx`
- Modify: `src/app/services/layout.tsx`

**Interfaces:**
- Consumes: all 6 routes created in Tasks 5–10.

- [ ] **Step 1: Read the current `src/app/services/page.tsx`** to see its exact structure (likely a `ServiceCardComponent` grid linking to all 6 service pages, similar to homepage's services section).

- [ ] **Step 2: Update the service card array** to reference the 6 new services (same title/body/link/icon values already established in Task 4's homepage `services` array — reuse verbatim), and update any page-level heading/subheading text from HVAC framing (e.g. "Complete HVAC Services") to `"Every Landscaping Service Your Property Needs"` / subtitle `"From weekly mowing to full landscape builds — flat-rate pricing and a 30-day guarantee on every service."`.

- [ ] **Step 3: Update `layout.tsx` metadata** — title `Landscaping Services in Waco, TX | GreenScape Pro`, description `Lawn mowing, landscape design, irrigation, hardscaping, tree care, and seasonal cleanup in Waco, TX. Flat-rate pricing, free estimates.`

- [ ] **Step 4: Verify and commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/services` lists all 6 new services with working links, no broken links to the deleted HVAC routes.

```bash
git add src/app/services/page.tsx src/app/services/layout.tsx
git commit -m "content: update services index to landscaping service lineup"
```

---

### Task 12: Industry page — HOA / Property Management (↔ automotive)

**Files:**
- Create: `src/app/industries/hoa-property-management/page.tsx` (clone structure from `src/app/industries/automotive/page.tsx`)
- Create: `src/app/industries/hoa-property-management/layout.tsx` (clone from `automotive/layout.tsx`, title `Landscaping for HOAs & Property Management | GreenScape Pro`, description `Common-area landscaping, seasonal contracts, and multi-property scheduling for HOAs and property managers in Central Texas.`, slug `/industries/hoa-property-management`)
- Delete: `src/app/industries/automotive/`

**Interfaces:** Same component set as `automotive/page.tsx` (`Breadcrumb, SectionIntro, TrustBar, IndustryPainPoints, WhyChooseUs, ProcessTimeline, ImpactMetrics, ServiceCardComponent, LocalServiceAreas, ValueComparison, FAQ, CTABanner, ContactForms/Variant4`).

- [ ] **Step 1: Write `page.tsx`**, function name `HOAPropertyManagementIndustryPage`, following the exact order/import pattern shown in the `automotive/page.tsx` file (already read in full during planning — reuse its structure literally), with this content:

```
SectionIntro title "Landscaping for HOAs & Property Management" / subtitle "Common-area maintenance, seasonal contracts, and multi-property scheduling built for the communities and portfolios you manage — reliable service across every property, every visit."
TrustBar: "Trusted by HOAs and property managers across Central Texas for 12+ years"
Pain points (industry="hoa-property-management", 6 items):
  1. "Common areas fall behind schedule and residents notice first" — consequence: inconsistent mowing schedules mean overgrown entrances and complaints before the board even hears about it.
  2. "No single point of contact across multiple properties" — consequence: juggling different vendors per property creates scheduling chaos and inconsistent quality.
  3. "Seasonal color and bed maintenance gets skipped when budgets tighten" — consequence: neglected common-area beds hurt curb appeal and property values across the entire community.
  4. "Storm cleanup response is slow or nonexistent" — consequence: downed limbs and debris sit for days, creating liability and resident frustration.
  5. "No documentation for board meetings or resident inquiries" — consequence: property managers get blindsided by "when was this last serviced?" questions with no records to point to.
  6. "Irrigation issues in common areas go unnoticed until water bills spike" — consequence: a single stuck valve can run up thousands in wasted water before anyone catches it.
WhyFeatures (3): "Single Contract, Every Property" - one point of contact and one invoice across your entire portfolio; "Documented Visit Reports" - every visit logged with photos, ready for board meetings or resident questions; "Priority Storm Response" - HOA and property management contracts get priority scheduling after severe weather.
Process: 1) Portfolio Walkthrough — we assess every property in your portfolio and build a unified service plan; 2) Custom Contract & Schedule — one contract covering mowing, beds, irrigation, and seasonal work across all properties; 3) Documented Service Visits — photo-logged visits you can reference for board meetings; 4) Ongoing Account Management — a dedicated contact for scheduling changes and issues.
Metrics: 40% average reduction in resident landscaping complaints after contract start (suffix %, duration 2); 180% average portfolio-wide cost efficiency vs. per-property vendors (suffix %, duration 3); 12+ years serving Texas communities (suffix +, duration 2).
Comparison rows: Single point of contact across properties (✅ One account manager / ❌ Per-property vendors); Documented visit reports (✅ Photo-logged / ❌ No documentation); Priority storm response (✅ Contract priority / ❌ Standard queue); Multi-property billing (✅ One consolidated invoice / ❌ Separate invoices); Central Texas HOA experience (✅ 12+ years local / ❌ Out-of-area vendor).
FAQ (5): how HOA/property management contracts are structured (per-property vs. portfolio-wide); whether documentation/photo reports are provided for board meetings; how storm cleanup response works for common areas; whether irrigation monitoring is included to catch water waste; whether GreenScape Pro works with property management companies outside Waco.
Services grid (4 cards, matching automotive's cross-sell pattern but pointing at landscaping services): Lawn Mowing & Maintenance, Landscape Design, Irrigation & Sprinklers, Seasonal Cleanup — each linking to its `/services/...` route.
Local areas: same 6-town pattern, servicePath "industries/hoa-property-management", title "Serving HOAs & Property Managers Across Texas".
CTA banner: headline "Ready to Simplify Landscaping Across Your Portfolio?" / subline "One contract, documented visits, priority storm response — built for HOAs and property managers in Texas. Free portfolio audit." / primary "Get Your Free Portfolio Audit" link /contact / secondary "Call Us Now" tel:+12549005200.
Form: Variant4, title "Tell Us About Your Portfolio", slug "industries/hoa-property-management", spot "hoa-industry-page", formVariant 4.
```

Use FontAwesome icons matching each pain point/feature conceptually (e.g. `faBuilding`, `faClipboardList`, `faCalendarAlt`, `faCloudRain`/`faBolt` for storm, `faFileContract`, `faUserTie`, `faWater`) — verify each exists in `@fortawesome/free-solid-svg-icons` before use.

- [ ] **Step 2: Verify, delete old folder, commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/industries/hoa-property-management` renders.
Delete `src/app/industries/automotive/page.tsx` and `layout.tsx` (+ folder).

```bash
git add -A src/app/industries/hoa-property-management src/app/industries/automotive
git commit -m "content: replace Automotive industry page with HOA & Property Management"
```

---

### Task 13: Industry page — Commercial Real Estate (↔ manufacturing)

**Files:**
- Create: `src/app/industries/commercial-real-estate/page.tsx` (clone structure from `src/app/industries/manufacturing/page.tsx`)
- Create: `src/app/industries/commercial-real-estate/layout.tsx` (clone from `manufacturing/layout.tsx`, title `Commercial Landscaping for Real Estate | GreenScape Pro`, description `Commercial property landscaping, tenant-ready grounds maintenance, and seasonal contracts for Central Texas commercial real estate.`, slug `/industries/commercial-real-estate`)
- Delete: `src/app/industries/manufacturing/`

**Interfaces:** Same as Task 12.

- [ ] **Step 1: Read `src/app/industries/manufacturing/page.tsx` first** to confirm exact component order (may differ slightly from automotive's).

- [ ] **Step 2: Write `page.tsx`**, function name `CommercialRealEstateIndustryPage`, following the confirmed order, with this content:

```
SectionIntro title "Commercial Landscaping for Real Estate" / subtitle "Tenant-ready grounds maintenance and seasonal contracts that keep commercial properties leasing-ready year-round."
TrustBar: "Trusted by commercial property owners and managers across Central Texas for 12+ years"
Pain points (5-6 items): overgrown or patchy grounds hurting tenant impressions during showings; inconsistent vendor quality across a property portfolio; no landscaping budget forecasting for annual planning; slow response to tenant landscaping complaints; entrance/curb-appeal neglect directly affecting lease renewal decisions.
WhyFeatures (3): "Leasing-Ready Grounds, Always" - scheduled service timed around showings and tenant turnover; "Annual Budget Forecasting" - predictable seasonal contract pricing for easier planning; "Fast Tenant-Complaint Response" - dedicated escalation path for property managers.
Process: 1) Property Assessment & Budget Forecast; 2) Custom Seasonal Contract; 3) Scheduled Maintenance Visits; 4) Ongoing Account Management.
Metrics: 35% average reduction in tenant landscaping complaints (%, 2); 12+ years serving Central Texas commercial properties (+, 2); 1,800+ properties serviced (+, 3).
Comparison rows: Annual budget forecasting (✅ Included / ❌ Not offered); Leasing-ready scheduling (✅ Timed to showings / ❌ Standard rotation); Tenant complaint response time (✅ Priority escalation / ❌ Standard queue); Multi-property contract (✅ One consolidated invoice / ❌ Separate invoices); Central Texas commercial experience (✅ 12+ years / ❌ Out-of-area vendor).
FAQ (5): how commercial landscaping contracts are priced/budgeted annually; whether service is scheduled around tenant showings; how tenant complaints are routed and resolved; whether snow/freeze prep (Central Texas ice events) is included; whether GreenScape Pro services multi-building commercial portfolios.
Services grid (4 cards): Lawn Mowing & Maintenance, Landscape Design, Hardscaping, Seasonal Cleanup.
Local areas: same pattern, servicePath "industries/commercial-real-estate", title "Serving Commercial Properties Across Texas".
CTA banner: headline "Ready for Leasing-Ready Grounds Year-Round?" / subline "Annual budget forecasting, priority response, one contract. Free property audit." / primary "Get Your Free Property Audit" /contact / secondary "Call Us Now" tel:+12549005200.
Form: Variant4, title "Tell Us About Your Commercial Property", slug "industries/commercial-real-estate", spot "commercial-real-estate-industry-page", formVariant 4.
```

- [ ] **Step 3: Verify, delete old folder, commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/industries/commercial-real-estate` renders.
Delete `src/app/industries/manufacturing/page.tsx` and `layout.tsx` (+ folder).

```bash
git add -A src/app/industries/commercial-real-estate src/app/industries/manufacturing
git commit -m "content: replace Manufacturing industry page with Commercial Real Estate"
```

---

### Task 14: Industry page — Municipal / Government (↔ oil-gas)

**Files:**
- Create: `src/app/industries/municipal-government/page.tsx` (clone structure from `src/app/industries/oil-gas/page.tsx`)
- Create: `src/app/industries/municipal-government/layout.tsx` (clone from `oil-gas/layout.tsx`, title `Municipal & Government Grounds Maintenance | GreenScape Pro`, description `Public grounds maintenance, right-of-way mowing, and municipal contract landscaping for Central Texas government properties.`, slug `/industries/municipal-government`)
- Delete: `src/app/industries/oil-gas/`

**Interfaces:** Same as Task 12/13.

- [ ] **Step 1: Read `src/app/industries/oil-gas/page.tsx` first** to confirm exact component order.

- [ ] **Step 2: Write `page.tsx`**, function name `MunicipalGovernmentIndustryPage`, with this content:

```
SectionIntro title "Municipal & Government Grounds Maintenance" / subtitle "Public grounds, right-of-way mowing, and municipal contract landscaping — reliable service that meets bid and compliance requirements."
TrustBar: "Trusted by municipal and government properties across Central Texas for 12+ years"
Pain points (5-6 items): bid/RFP requirements that many landscaping vendors can't meet (insurance, licensing documentation); inconsistent service on public rights-of-way creating safety/visibility issues; no proof-of-service documentation for public accountability; budget cycles requiring predictable fixed contract pricing; slow response on public safety issues like overgrown sightlines at intersections.
WhyFeatures (3): "Bid-Ready Documentation" - full insurance, TDA licensing, and compliance paperwork ready for RFP submission; "Proof-of-Service Reporting" - photo-logged visits for public accountability and records requests; "Fixed Annual Contract Pricing" - predictable costs that fit municipal budget cycles.
Process: 1) RFP/Bid Response & Site Assessment; 2) Contract Award & Scheduling; 3) Documented Service Visits; 4) Ongoing Compliance Reporting.
Metrics: 12+ years serving Central Texas municipalities (+, 2); 1,800+ properties serviced (+, 3); 97% contract renewal rate (%, 2).
Comparison rows: Bid-ready insurance/licensing documentation (✅ Always current / ❌ Documentation gaps common); Proof-of-service reporting (✅ Photo-logged / ❌ No documentation); Fixed annual contract pricing (✅ Predictable / ❌ Variable billing); Right-of-way safety response time (✅ Priority scheduling / ❌ Standard queue); Central Texas municipal experience (✅ 12+ years / ❌ Out-of-area vendor).
FAQ (5): what documentation is provided for RFP/bid submissions; how right-of-way and sightline mowing is scheduled for safety; whether proof-of-service reports are available for public records requests; how contract pricing is structured for municipal budget cycles; what geographic area is covered for municipal contracts.
Services grid (4 cards): Lawn Mowing & Maintenance, Seasonal Cleanup, Tree & Shrub Care, Irrigation & Sprinklers.
Local areas: same pattern, servicePath "industries/municipal-government", title "Serving Municipalities Across Central Texas".
CTA banner: headline "Need a Bid-Ready Landscaping Vendor?" / subline "Full compliance documentation, fixed contract pricing, proof-of-service reporting." / primary "Request Bid Documentation" /contact / secondary "Call Us Now" tel:+12549005200.
Form: Variant4, title "Tell Us About Your Municipal Contract", slug "industries/municipal-government", spot "municipal-industry-page", formVariant 4.
```

- [ ] **Step 3: Verify, delete old folder, commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/industries/municipal-government` renders.
Delete `src/app/industries/oil-gas/page.tsx` and `layout.tsx` (+ folder).

```bash
git add -A src/app/industries/municipal-government src/app/industries/oil-gas
git commit -m "content: replace Oil & Gas industry page with Municipal & Government"
```

---

### Task 15: Industries index + industries layout

**Files:**
- Modify: `src/app/industries/page.tsx`
- Modify: `src/app/industries/layout.tsx`

**Interfaces:** Consumes routes from Tasks 12–14.

- [ ] **Step 1: Read the current `src/app/industries/page.tsx`** to see its exact structure (card grid linking to the 3 industry pages).

- [ ] **Step 2: Update the industry card array** to the 3 new industries — HOA & Property Management (`/industries/hoa-property-management`), Commercial Real Estate (`/industries/commercial-real-estate`), Municipal & Government (`/industries/municipal-government`) — with one-line descriptions matching each page's `SectionIntro` subtitle from Tasks 12–14. Update page heading to `"Landscaping for Every Kind of Property"` / subtitle `"From HOA common areas to municipal contracts — reliable, documented service built for the property types that need it most."`

- [ ] **Step 3: Update `layout.tsx` metadata** — title `Industries We Serve | GreenScape Pro`, description `Commercial landscaping for HOAs, property managers, commercial real estate, and municipal contracts across Central Texas.`

- [ ] **Step 4: Verify and commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/industries` lists all 3 new industries with working links.

```bash
git add src/app/industries/page.tsx src/app/industries/layout.tsx
git commit -m "content: update industries index to landscaping vertical lineup"
```

---

### Task 16: Local reviews data — `libs/local-db/reviews.ts`

**Files:**
- Modify: `libs/local-db/reviews.ts` (full file)

**Interfaces:**
- Produces: `reviews: Review[]` (interface unchanged: `name, location, rating, date, text, service?`) — consumed by `src/app/page.tsx` (Task 4) and every service page's `Testimonials` component (Tasks 5–10).

- [ ] **Step 1: Replace the reviews array** with 6 landscaping-flavored reviews, keeping the `Review` interface identical:

```ts
// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for GreenScape Pro — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Landscape Design',
    text:     "We had GreenScape Pro redo our entire front bed after years of neglect. They walked us through the design before touching anything, stuck to the quote, and the plants are still thriving eight months later. Exactly what we wanted.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Lawn Mowing & Maintenance',
    text:     "Switched to GreenScape Pro after our old mowing service kept skipping weeks. Same crew every time, text before they arrive, and the yard has never looked more consistent. Worth every dollar.",
  },
  {
    name:     'David R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Irrigation & Sprinkler Systems',
    text:     "Our water bill spiked and we couldn't figure out why. Their tech found a broken valve in twenty minutes and had it fixed the same visit. Straightforward pricing, no upsell pressure.",
  },
  {
    name:     'Patricia M.',
    location: 'Robinson, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Hardscaping',
    text:     "The patio they built has held up perfectly through two Texas summers and an ice storm — no settling, no cracking. They clearly didn't cut corners on the base work.",
  },
  {
    name:     'James O.',
    location: 'China Spring, TX',
    rating:   4,
    date:     'November 2025',
    service:  'Tree & Shrub Care',
    text:     "Had a large oak that needed serious pruning after storm damage. Crew was careful, cleaned up completely, and gave us honest advice on what could be saved versus removed.",
  },
  {
    name:     'Linda B.',
    location: 'Temple, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Seasonal Cleanup',
    text:     "Booked their fall cleanup and it was the most thorough we've had — every bed cleared, gutters cleared of debris nearby, and nothing left in bags on the curb. Already booked spring cleanup too.",
  },
];

export default reviews;
```

- [ ] **Step 2: Run typecheck**

Run: `npm run typecheck` — expect no errors (interface shape is unchanged so all existing consumers still type-check).

- [ ] **Step 3: Commit**

```bash
git add libs/local-db/reviews.ts
git commit -m "content: replace HVAC testimonials with landscaping testimonials"
```

---

### Task 17: Blog post — Xeriscaping vs. Traditional Lawn (Texas) (↔ heat-pump-vs-traditional-hvac-texas)

**Files:**
- Create: `src/app/blogs/xeriscaping-vs-traditional-lawn-texas/page.tsx` (clone structure from `src/app/blogs/heat-pump-vs-traditional-hvac-texas/page.tsx`)
- Create: `src/app/blogs/xeriscaping-vs-traditional-lawn-texas/layout.tsx` (clone from the source `layout.tsx`, updating `imgUrl` to `${BASE_URL}/pages/blogs/xeriscaping.svg`, title `Xeriscaping vs. Traditional Lawn: What's Right for Your Waco Yard? | GreenScape Pro`, description matching the post's actual content)
- Delete: `src/app/blogs/heat-pump-vs-traditional-hvac-texas/`
- Depends on: Task 20 creating `public/pages/blogs/xeriscaping.svg`

**Interfaces:**
- Consumes: same `#/BlogComponents/*` set as the source file (read it first to get the exact list — likely `BlogHero, Introduction, ContentSection, StrategyGrid` or similar, plus `BlogCTA, RelatedLinks, NewsletterSignup`), `imageSrc` prop pointing at the new SVG placeholder.
- Produces: route `/blogs/xeriscaping-vs-traditional-lawn-texas`, linked from `BlogPreviewGrid` (auto-discovers posts — verify in Step 1 whether blog listing is auto-generated from the folder or requires a manual index entry; if manual, update that index too).

- [ ] **Step 1: Read `src/app/blogs/heat-pump-vs-traditional-hvac-texas/page.tsx` and `layout.tsx` in full first** to get the exact component list, prop shapes, and whether posts are registered in a shared index file (e.g. `src/app/blogs/_shared/`).

- [ ] **Step 2: Write `page.tsx`** and `layout.tsx`, matching the confirmed component structure exactly, with this content:

```
Title: "Xeriscaping vs. Traditional Lawn: What's Right for Your Waco Yard?"
imageSrc: "/pages/blogs/xeriscaping.svg"
Intro: Central Texas summers push traditional turf lawns to their limit — high water bills, brown patches by August, and constant irrigation just to keep grass alive. Xeriscaping (drought-tolerant, native-plant landscaping) is a real alternative, not an all-or-nothing choice. This post breaks down what each approach actually costs and delivers for a Waco-area property.
Section 1 "What Xeriscaping Actually Means": Not gravel and cactus — a mix of native and adapted plants (Texas sage, yucca, black-eyed Susan, native grasses) chosen for the region's rainfall and heat, arranged to need minimal supplemental irrigation once established.
Section 2 "Water Usage Comparison": Traditional St. Augustine/Bermuda turf in Central Texas typically needs 1-1.5 inches of water per week during peak summer; established xeriscape beds can cut irrigation needs by 50-70% once plants mature (12-18 months).
Section 3 "Upfront Cost vs. Long-Term Savings": Xeriscape conversion has a higher upfront design/install cost than reseeding turf, but lower water bills and near-zero mowing costs typically break even within 2-4 years depending on property size.
Section 4 "The Hybrid Approach Most Waco Homeowners Choose": Full-yard xeriscaping isn't required — most customers convert high-sun, hard-to-water zones (parking strips, slopes, south-facing beds) to xeriscape while keeping a smaller turf area for kids/pets/entertaining.
Section 5 "Is It Right for Your Property?": Best candidates are properties with full-sun exposure, HOA rules permitting native plantings, and owners wanting to reduce water bills and mowing time. GreenScape Pro offers a free consultation to assess which zones make sense.
CTA: "Curious what a xeriscape conversion would look like for your yard? Get a free landscape design consultation." → /contact
Related links (if the component supports them): link to /services/landscape-design and /services/irrigation-sprinkler-systems.
```

- [ ] **Step 3: Verify, delete old folder, update any blog index, commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/blogs/xeriscaping-vs-traditional-lawn-texas` renders and the image placeholder displays.
Delete `src/app/blogs/heat-pump-vs-traditional-hvac-texas/page.tsx` and `layout.tsx` (+ folder). If a shared blog index registers posts by slug, remove the old entry and add the new one there too.

```bash
git add -A src/app/blogs/xeriscaping-vs-traditional-lawn-texas src/app/blogs/heat-pump-vs-traditional-hvac-texas
git commit -m "content: replace heat-pump blog post with xeriscaping vs. traditional lawn"
```

---

### Task 18: Blog post — When to Schedule Seasonal Lawn Cleanup (↔ how-often-should-you-replace-hvac-filter)

**Files:**
- Create: `src/app/blogs/when-to-schedule-seasonal-lawn-cleanup/page.tsx` (clone from `src/app/blogs/how-often-should-you-replace-hvac-filter/page.tsx`)
- Create: `src/app/blogs/when-to-schedule-seasonal-lawn-cleanup/layout.tsx` (clone from source, `imgUrl` → `${BASE_URL}/pages/blogs/seasonal-cleanup-timing.svg`, title `When to Schedule Seasonal Lawn Cleanup in Central Texas | GreenScape Pro`)
- Delete: `src/app/blogs/how-often-should-you-replace-hvac-filter/`
- Depends on: Task 20 creating `public/pages/blogs/seasonal-cleanup-timing.svg`

**Interfaces:** Same as Task 17 — read the source `page.tsx`/`layout.tsx` first, match component structure exactly.

- [ ] **Step 1: Read the source page/layout in full first.**

- [ ] **Step 2: Write `page.tsx`/`layout.tsx`** with this content:

```
Title: "When to Schedule Seasonal Lawn Cleanup in Central Texas"
imageSrc: "/pages/blogs/seasonal-cleanup-timing.svg"
Intro: Timing seasonal cleanup wrong wastes money — too early and you're paying for a second visit after more leaves drop; too late and beds go into winter (or summer) already stressed. Here's the actual Central Texas timing window.
Section 1 "Fall Cleanup Window": Late October through mid-December is the sweet spot for Central Texas — after most deciduous trees have dropped but before the first hard freeze locks in debris.
Section 2 "Spring Cleanup Window": Early March through early April, after the last frost risk passes but before summer growth accelerates — this is when beds get refreshed and mulch gets reset for the growing season.
Section 3 "Signs You're Overdue": Leaf buildup smothering grass and killing patches underneath; mulch beds compacted and no longer insulating roots; visible pest activity in undisturbed debris piles.
Section 4 "What a Proper Cleanup Includes": Full leaf and debris removal (not just the visible pile — under shrubs and along fence lines too), bed edging reset, and complete haul-off so nothing sits curbside.
Section 5 "Should You Bundle Spring and Fall?": Properties with heavy tree cover benefit most from a bundled plan — locks in pricing and guarantees you don't forget the window until it's already overdue.
CTA: "Ready to get your cleanup on the calendar before the window closes?" → /contact
Related links: /services/seasonal-cleanup and /services/tree-shrub-care.
```

- [ ] **Step 3: Verify, delete old folder, update blog index, commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/blogs/when-to-schedule-seasonal-lawn-cleanup` renders.
Delete `src/app/blogs/how-often-should-you-replace-hvac-filter/page.tsx` and `layout.tsx` (+ folder), update shared index if applicable.

```bash
git add -A src/app/blogs/when-to-schedule-seasonal-lawn-cleanup src/app/blogs/how-often-should-you-replace-hvac-filter
git commit -m "content: replace HVAC filter blog post with seasonal cleanup timing"
```

---

### Task 19: Blog post — Signs Your Irrigation System Needs Repair (Waco, TX) (↔ signs-ac-needs-replacement-waco-tx)

**Files:**
- Create: `src/app/blogs/signs-your-irrigation-system-needs-repair-waco-tx/page.tsx` (clone from `src/app/blogs/signs-ac-needs-replacement-waco-tx/page.tsx`)
- Create: `src/app/blogs/signs-your-irrigation-system-needs-repair-waco-tx/layout.tsx` (clone from source, `imgUrl` → `${BASE_URL}/pages/blogs/irrigation-repair-signs.svg`, title `5 Signs Your Irrigation System Needs Repair (Waco, TX) | GreenScape Pro`)
- Delete: `src/app/blogs/signs-ac-needs-replacement-waco-tx/`
- Depends on: Task 20 creating `public/pages/blogs/irrigation-repair-signs.svg`

**Interfaces:** Same as Task 17/18 — read source first, match structure exactly.

- [ ] **Step 1: Read the source page/layout in full first.**

- [ ] **Step 2: Write `page.tsx`/`layout.tsx`** with this content:

```
Title: "5 Signs Your Irrigation System Needs Repair (Waco, TX)"
imageSrc: "/pages/blogs/irrigation-repair-signs.svg"
Intro: A failing irrigation system rarely announces itself loudly — it shows up as a slightly higher water bill or a patch of grass that's just a little browner than the rest. Here are the five signs Waco homeowners should watch for before small issues become expensive ones.
Sign 1 "Unexplained Water Bill Increases": A jump of $20-40+ with no change in watering schedule usually points to a stuck valve or underground leak, not weather.
Sign 2 "Uneven Coverage — Dry Patches Next to Soggy Ones": Usually a clogged, misaligned, or broken sprinkler head; can also indicate a zone pressure problem.
Sign 3 "Water Pooling Near Heads or Along Sidewalks": Almost always a broken line or cracked head fitting underground — waiting makes the repair (and the water waste) worse.
Sign 4 "System Runs but Grass Still Looks Stressed": Points to a controller/timer issue running the wrong duration, or a valve that isn't fully opening.
Sign 5 "Zones That Never Seem to Turn On": Likely a solenoid or wiring issue at the valve — an easy fix if caught early, a full valve replacement if ignored.
Closing: Most of these are same-visit repairs when caught early. Letting them run through a full Texas summer usually means a bigger bill — both from wasted water and more extensive repair work.
CTA: "Notice any of these signs? Get a free irrigation diagnostic." → /contact
Related links: /services/irrigation-sprinkler-systems and /services/lawn-mowing-maintenance.
```

- [ ] **Step 3: Verify, delete old folder, update blog index, commit**

Run: `npm run typecheck` and `npm run dev`, confirm `/blogs/signs-your-irrigation-system-needs-repair-waco-tx` renders.
Delete `src/app/blogs/signs-ac-needs-replacement-waco-tx/page.tsx` and `layout.tsx` (+ folder), update shared index if applicable.

```bash
git add -A src/app/blogs/signs-your-irrigation-system-needs-repair-waco-tx src/app/blogs/signs-ac-needs-replacement-waco-tx
git commit -m "content: replace AC replacement blog post with irrigation repair signs"
```

---

### Task 20: Image placeholders — blog + about/contact assets

**Files:**
- Create: `public/pages/blogs/xeriscaping.svg`
- Create: `public/pages/blogs/seasonal-cleanup-timing.svg`
- Create: `public/pages/blogs/irrigation-repair-signs.svg`
- Create: `public/pages/seo-template-resources/about-hero-landscaping.svg`
- Create: `public/pages/seo-template-resources/owner-landscaping.svg`
- Create: `public/pages/seo-template-resources/contact-illustration-landscaping.svg`
- Delete (after all references are repointed in Tasks 17–19 and Task 21): the 7 original HVAC `.jpg`/`.png` files in `public/pages/blogs/` and the HVAC-specific ones in `public/pages/seo-template-resources/` (`about-hero.png`, `owner.jpg` — keep `contact-illustration.png` only if Task 21 finds it's generic/unused by HVAC-specific content; verify before deleting)

**Interfaces:**
- Produces: static asset paths referenced by `imageSrc`/`src` props in Tasks 17–19 (blog images) and Task 21 (about/contact images).

Each placeholder is a self-contained SVG — Next.js `<Image>` serves local SVGs directly, no external dependency. Use this template, swapping `LABEL` and `WIDTH`/`HEIGHT` to match the dimensions the original JPG/PNG had (check with a quick image-dimension read, e.g. via the existing `next/image` usage's `width`/`height` props in the consuming component, before writing each SVG's `viewBox`).

- [ ] **Step 1: Check each original image's consumed dimensions**

Run: `grep -n "width=\|height=" src/app/blogs/heat-pump-vs-traditional-hvac-texas/page.tsx src/app/blogs/how-often-should-you-replace-hvac-filter/page.tsx src/app/blogs/signs-ac-needs-replacement-waco-tx/page.tsx` (before Tasks 17-19 delete these — do this step first, or capture the values now and record them here) — use the `width`/`height` passed to the `BlogHero`/`Image` component as the SVG's `viewBox` dimensions.

- [ ] **Step 2: Write the 3 blog placeholder SVGs**

```xml
<!-- public/pages/blogs/xeriscaping.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#15803d"/>
      <stop offset="100%" stop-color="#0d1f16"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#g)"/>
  <text x="600" y="337" text-anchor="middle" dominant-baseline="middle"
        font-family="sans-serif" font-size="36" fill="#ffffff" opacity="0.85">
    Xeriscaping vs. Traditional Lawn — Blog Hero Image
  </text>
</svg>
```

```xml
<!-- public/pages/blogs/seasonal-cleanup-timing.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#0d1f16"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#g)"/>
  <text x="600" y="337" text-anchor="middle" dominant-baseline="middle"
        font-family="sans-serif" font-size="36" fill="#ffffff" opacity="0.85">
    Seasonal Lawn Cleanup Timing — Blog Hero Image
  </text>
</svg>
```

```xml
<!-- public/pages/blogs/irrigation-repair-signs.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e6fa8"/>
      <stop offset="100%" stop-color="#0d1f16"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#g)"/>
  <text x="600" y="337" text-anchor="middle" dominant-baseline="middle"
        font-family="sans-serif" font-size="36" fill="#ffffff" opacity="0.85">
    Irrigation System Repair Signs — Blog Hero Image
  </text>
</svg>
```

Adjust each `viewBox`/`width`/`height` to match the dimensions found in Step 1 if they differ from 1200×675.

- [ ] **Step 3: Write the about/contact placeholder SVGs** (dimensions TBD from Task 21's read of `about/page.tsx` and `contact/page.tsx` — use the same gradient+label pattern):

```xml
<!-- public/pages/seo-template-resources/about-hero-landscaping.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#16281f"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#g)"/>
  <text x="800" y="450" text-anchor="middle" dominant-baseline="middle"
        font-family="sans-serif" font-size="42" fill="#ffffff" opacity="0.85">
    GreenScape Pro Crew — About Page Hero Image
  </text>
</svg>
```

```xml
<!-- public/pages/seo-template-resources/owner-landscaping.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4ade80"/>
      <stop offset="100%" stop-color="#15803d"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#g)"/>
  <text x="300" y="300" text-anchor="middle" dominant-baseline="middle"
        font-family="sans-serif" font-size="28" fill="#ffffff" opacity="0.9">
    Dana Whitfield — Founder Photo
  </text>
</svg>
```

```xml
<!-- public/pages/seo-template-resources/contact-illustration-landscaping.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e6fa8"/>
      <stop offset="100%" stop-color="#0d1f16"/>
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#g)"/>
  <text x="400" y="400" text-anchor="middle" dominant-baseline="middle"
        font-family="sans-serif" font-size="30" fill="#ffffff" opacity="0.9">
    Contact Page Illustration
  </text>
</svg>
```

- [ ] **Step 4: Commit the new assets** (deletion of old assets happens in Tasks 17-19 and 21 once references are repointed and verified — don't delete here to avoid breaking pages mid-task)

```bash
git add public/pages/blogs/xeriscaping.svg public/pages/blogs/seasonal-cleanup-timing.svg public/pages/blogs/irrigation-repair-signs.svg public/pages/seo-template-resources/about-hero-landscaping.svg public/pages/seo-template-resources/owner-landscaping.svg public/pages/seo-template-resources/contact-illustration-landscaping.svg
git commit -m "assets: add SVG placeholder graphics for landscaping blog/about/contact images"
```

---

### Task 21: About, Contact, Service Areas pages — copy + image reference pass

**Files:**
- Modify: `src/app/about/page.tsx`, `src/app/about/layout.tsx`
- Modify: `src/app/contact/page.tsx`, `src/app/contact/layout.tsx`
- Modify: `src/app/service-areas/page.tsx`, `src/app/service-areas/layout.tsx`
- Delete: `public/pages/seo-template-resources/about-hero.png`, `public/pages/seo-template-resources/owner.jpg`, and `contact-illustration.png` if confirmed unused elsewhere (grep first)

**Interfaces:**
- Consumes: SVG placeholders created in Task 20.

- [ ] **Step 1: Read all 6 files in full first** to see exact current content (founder name/bio, image references, service-area city list, contact form config) — locale/city list stays unchanged per the spec, only business-identity strings and image paths change.

- [ ] **Step 2: Update `about/page.tsx`**:
  - Replace any "Arctic Air HVAC" / "Mike Hawkins" / founding-year-2010 references with "GreenScape Pro" / "Dana Whitfield" / 2012, consistent with Task 2/4's established identity.
  - Replace the founder bio narrative with a landscaping-appropriate equivalent: Dana Whitfield grew up in Waco, spent years working commercial grounds crews across Central Texas, and founded GreenScape Pro in 2012 to bring flat-rate pricing and reliable scheduling to an industry known for no-shows and inconsistent quality.
  - Replace `about-hero.png` reference with `/pages/seo-template-resources/about-hero-landscaping.svg` and `owner.jpg` with `/pages/seo-template-resources/owner-landscaping.svg`.
  - Update `layout.tsx` metadata: title `About GreenScape Pro | Waco, TX Landscaping Company`, description `GreenScape Pro has served Central Texas properties since 2012 — flat-rate pricing, TDA licensed crews, and a 30-day guarantee on every job.`

- [ ] **Step 3: Update `contact/page.tsx`**:
  - Replace business name/phone/email/address references with the Task 2 values.
  - Replace `contact-illustration.png` reference (if present) with `/pages/seo-template-resources/contact-illustration-landscaping.svg`.
  - Update `layout.tsx` metadata: title `Contact GreenScape Pro | Free Landscaping Estimates in Waco, TX`, description `Request a free landscaping estimate from GreenScape Pro. Call (254) 900-5200 or fill out our online form — serving Waco and Central Texas.`

- [ ] **Step 4: Update `service-areas/page.tsx`**:
  - Replace business name and any HVAC-specific service references in per-city copy (e.g. "AC repair in Hewitt" → "Lawn care and landscaping in Hewitt") with the 6 new service names from Task 5–10, keeping the city list and geographic structure identical.
  - Update `layout.tsx` metadata: title `Landscaping Service Areas | GreenScape Pro Central Texas`, description `GreenScape Pro serves Waco, Hewitt, Woodway, Robinson, China Spring, Temple, Killeen, and Hillsboro, TX with full landscaping services.`

- [ ] **Step 5: Verify and clean up unused original assets**

Run: `npm run typecheck` and `npm run dev`, confirm `/about`, `/contact`, `/service-areas` all render correctly with new copy and placeholder images.
Run: `grep -rn "about-hero.png\|owner.jpg\|contact-illustration.png" src/app components` — for each file with zero remaining references, delete it from `public/pages/seo-template-resources/`.

- [ ] **Step 6: Commit**

```bash
git add -A src/app/about src/app/contact src/app/service-areas public/pages/seo-template-resources
git commit -m "content: rebrand About, Contact, and Service Areas pages for GreenScape Pro"
```

---

### Task 22: Final sweep — leftover HVAC/Arctic Air references

**Files:**
- Modify: any file the grep in Step 1 turns up (expected candidates based on earlier exploration: `src/app/llms.txt`, `src/app/sitemap.xml`, `src/app/privacy-policy/*`, root `layout.tsx` metadata/schema.org JSON-LD, `package.json` `"name"` field, `README.md`, `next.config.js` if it hardcodes a site name, any `robots`/manifest files under `public/logos/site.webmanifest`)

**Interfaces:** None — this is a verification/cleanup pass, not a new interface.

- [ ] **Step 1: Grep the whole tree for leftover identity strings**

Run each of these from `landscaping-template/`:
```bash
grep -rli "arctic air\|arcticairhvac" --include="*.ts" --include="*.tsx" --include="*.scss" --include="*.json" --include="*.xml" --include="*.txt" src components libs public package.json README.md 2>/dev/null
grep -rli "hvac\b" --include="*.ts" --include="*.tsx" src components libs 2>/dev/null | grep -v "docs/"
grep -rn "12549001234\|12549002520" --include="*.ts" --include="*.tsx" src components 2>/dev/null
```
Expected: all three commands should return only files legitimately still referencing HVAC in a generic/non-branded way (there shouldn't be any — every result needs a fix) plus this plan/spec's own doc files (exclude `docs/` as shown).

- [ ] **Step 2: Fix every file the greps surfaced**, applying the same identity/phone/copy substitutions established in Tasks 1–21 (business name → GreenScape Pro, phone → (254) 900-5200, email → hello@greenscapeprowaco.com, address → 3311 Franklin Ave). For the root layout's JSON-LD/schema.org block specifically, update `"name"`, `"telephone"`, `"email"`, `"address"`, and any `"serviceType"`/`"@type"` values that name HVAC service categories to the 6 landscaping services from Tasks 5–10. Update `package.json`'s `"name"` field from `"hvac-template"` to `"landscaping-template"`.

- [ ] **Step 3: Re-run the greps from Step 1** — expect zero results now (other than `docs/` spec/plan files, which are allowed to reference the HVAC origin for historical context).

- [ ] **Step 4: Full verification pass**

```bash
npm run typecheck
npm run lint
```
Expected: both pass with no errors.

Run: `npm run dev`, click through every nav link (Home, Services + all 6 service pages, Industries + all 3 industry pages, Service Areas, Blog + all 3 posts, About, Contact) and confirm no 404s, no leftover HVAC text, no console errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "cleanup: final sweep for leftover HVAC/Arctic Air references, rename package"
```

---

## Self-Review Notes

- **Spec coverage:** Brand tokens (Task 1), homepage hero + body (Tasks 3–4), header/footer (Task 2), 6 services (Tasks 5–11), 3 industries (Tasks 12–15), locale (unchanged throughout, verified in Task 22), blog ×3 (Tasks 17–19), images (Tasks 20–21), final sweep (Task 22) — every spec section has a task.
- **Type consistency:** `Review` interface (Task 16) unchanged in shape, so `Testimonials` consumers in Tasks 4–10 need no signature changes. `WelcomePage` (Task 3) keeps its zero-prop default export, matching its usage in Task 4.
- **Sequencing:** Tasks 5–19 each independently delete their HVAC source folder after verifying the replacement route works, so the site never has a broken intermediate state for more than one task's duration. Task 20 (image assets) is positioned before Tasks 17–19 reference them, but since Tasks 17-19 also need to read source blog files first, execute Task 20 either before or interleaved with 17–19 — just before the first `git add` in Task 17.
