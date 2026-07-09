// _archetype-library/header-1-marquee-logo-left/Component.tsx
//
// Variant 1: marquee trust bar + logo-left + horizontal nav + call/CTA pair
// + hamburger drawer. This is the current hvac-template default shape,
// generalized to accept props instead of hardcoded copy.
'use client';
import Link from 'next/link';
import { PhoneIcon } from './_shared/icons';
import { useScrollChrome } from './_shared/useScrollChrome';
import { useMobileDrawer } from './_shared/useMobileDrawer';
import styles from './styles.module.scss';

export default function Header() {
const logoName = 'GreenScape Pro';
const logoTagline = 'Lawn Care · Landscaping · Outdoor Living';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/blogs', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
const phoneDisplay = '(254) 900-5200';
const phoneHref = 'tel:+12549005200';
const ctaLabel = 'Free Estimate';
const ctaHref = '/contact';
const marqueeItems = [
  'Free On-Site Estimates',
  '30-Day Re-Service Guarantee',
  'Flat-Rate Pricing — No Surprises',
  '4.9★ Google Rating · 250+ Reviews',
  'TDA Licensed Applicators',
  'No Contracts — Ever',
  'Serving Central Texas Since 2012',
  'Licensed & Insured · Waco, TX',
];
const footerLine = 'Licensed &amp; Insured · Waco, TX';
const secondaryCtaLabel = 'Book Now';
const secondaryCtaHref = '/contact';
const hoursText = 'Mon–Sat · 7am–7pm';
const serviceAreaText = 'Serving Central Texas';
const ratingText = '4.9★ Local Rating';
  const { scrolled, progressRef } = useScrollChrome();
  const { menuOpen, setMenuOpen, drawerRef, triggerRef, pathname } = useMobileDrawer();
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div ref={progressRef} className={styles.progressBar}
          style={{ transform: 'scaleX(0)', transformOrigin: 'left center', willChange: 'transform' }}
          aria-hidden="true" />

        <div className={styles.topBar} aria-hidden="true"
          style={{ maxHeight: scrolled ? '0px' : '34px', opacity: scrolled ? 0 : 1 }}>
          <div className={styles.marqueeTrack}>
            <ul className={styles.marquee} role="list">
              {doubled.map((text, i) => <li key={i} className={styles.marqueeItem}>{text}</li>)}
            </ul>
          </div>
        </div>

        <div className={styles.navRow}>
          <div className={styles.navInner}>
            <Link href="/" className={styles.logo} aria-label={`${logoName} home`}>
              <span className={styles.logoText}>
                <span className={styles.logoName}>{logoName}</span>
                <span className={styles.logoTagline}>{logoTagline}</span>
              </span>
            </Link>

            <nav className={styles.desktopNav} aria-label="Main navigation">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link key={href} href={href} className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} aria-current={isActive ? 'page' : undefined}>
                    {label}
                    {isActive && <span className={styles.activeBar} aria-hidden="true" />}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.ctaGroup}>
              <a href={phoneHref} className={styles.callBtn}><PhoneIcon size={13} /> Call Now</a>
              <Link href={ctaHref} className={styles.estimateBtn}>{ctaLabel}</Link>
            </div>

            <button ref={triggerRef} className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen} aria-controls="mobile-drawer-1">
              <span className={styles.hBar} /><span className={styles.hBar} /><span className={styles.hBar} />
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />

      <nav id="mobile-drawer-1" ref={drawerRef} className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        <div className={styles.drawerHead}>
          <span className={styles.drawerBrand}>{logoName}</span>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className={styles.drawerDivider} />
        <ul className={styles.drawerLinks} role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link href={href} className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`} onClick={() => setMenuOpen(false)}>
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.drawerActions}>
          <a href={phoneHref} className={styles.drawerCallBtn} onClick={() => setMenuOpen(false)}><PhoneIcon size={14} /> Call {phoneDisplay}</a>
          <Link href={ctaHref} className={styles.drawerEstimateBtn} onClick={() => setMenuOpen(false)}>{ctaLabel}</Link>
        </div>
        <div className={styles.drawerFoot}>{footerLine}</div>
      </nav>
    </>
  );
}
