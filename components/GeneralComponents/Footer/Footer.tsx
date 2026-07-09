"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot, faPhone, faEnvelope,
  faShieldHalved, faLeaf, faClock, faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

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

export default function Footer() {
  const trackEvent = useTrackEvent();

  return (
    <footer className={styles.footer}>

      {/* ── TRUST STRIP ── */}
      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          {TRUST_ITEMS.map(({ icon, label }) => (
            <div key={label} className={styles.trustItem}>
              <span className={styles.trustIcon}><FontAwesomeIcon icon={icon} /></span>
              <span className={styles.trustLabel}>{label}</span>
            </div>
          ))}
          <Link
            href="/contact"
            className={styles.trustCta}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: 'Book Now', section: 'Footer-Trust' })}
          >
            Get a Free Quote →
          </Link>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className={styles.body}>
        <div className={styles.inner}>

          {/* Col 1 — Brand */}
          <div className={styles.brandCol}>
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

            <div className={styles.socials}>
              {SOCIALS.map(({ href, icon, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className={styles.socialBtn}
                  onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Social' })}>
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 — Nav */}
          <div className={styles.col}>
            <span className={styles.colHead}>Company</span>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Nav' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className={styles.col}>
            <span className={styles.colHead}>Our Services</span>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Services' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Service Areas */}
          <div className={styles.col}>
            <span className={styles.colHead}>Service Areas</span>
            <ul className={styles.areaList}>
              {LOCAL_AREAS.map((area) => (
                <li key={area}>
                  <span className={styles.areaDot} />
                  {area}
                </li>
              ))}
              <li className={styles.areaMore}>+ All of Central Texas</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} GreenScape Pro. All Rights Reserved. | TDA Licensed Applicator #XXXXXXXX
          </p>
          <a href="tel:+12549005200" className={styles.emergencyBtn}
            onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Storm Cleanup Line', section: 'Footer-Bottom' })}>
            <span className={styles.emergencyDot} />
            Storm Cleanup Hotline
          </a>
        </div>
      </div>

    </footer>
  );
}
