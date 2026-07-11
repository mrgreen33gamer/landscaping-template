// src/app/layout.tsx
// GreenScape Pro — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Spectral, Libre_Franklin } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = Spectral({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Libre_Franklin({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Spectral({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.greenscapeprowaco.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
// Next.js 14+ moved viewport / themeColor / colorScheme out of `metadata` and
// into a separate `viewport` export. The `viewportFit: 'cover'` is the single
// most important line in this file for the notch / home-indicator fix.
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  // Two themeColor entries so iOS Safari can pick the right one when the user
  // toggles light/dark mode. Both are obsidian dark to match the brand bg
  // applied to <body> in globals.css. Adjust if you want a lighter Safari
  // chrome tint for light-mode users.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#14532d" },
    { media: "(prefers-color-scheme: dark)",  color: "#14532d" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GreenScape Pro | Lawn Care, Landscaping & Irrigation — Waco, TX",
    template: "%s | GreenScape Pro",
  },
  description:
    "GreenScape Pro is a Waco, TX landscaping company offering lawn mowing and maintenance, landscape design, irrigation and sprinkler service, hardscaping, tree and shrub care, and seasonal cleanup for Central Texas homes and businesses. Licensed, local, no contracts.",
  keywords: [
    "GreenScape Pro",
    "landscaping company Waco TX",
    "lawn care Waco Texas",
    "landscape design Waco",
    "irrigation repair Central Texas",
    "lawn mowing Waco TX",
    "landscaping contractor Hewitt TX",
    "hardscaping Waco",
    "seasonal cleanup Waco",
  ],
  authors: [{ name: "GreenScape Pro", url: BASE_URL }],
  creator: "GreenScape Pro",
  publisher: "GreenScape Pro",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "GreenScape Pro | Lawn Care, Landscaping & Irrigation — Waco, TX",
    description:
      "Waco-based landscaping company for lawn care, landscape design, irrigation service, hardscaping, and seasonal cleanup across Central Texas. Licensed & insured. No contracts.",
    url: BASE_URL,
    siteName: "GreenScape Pro",
    images: [
      {
        url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`,
        width: 1200,
        height: 630,
        alt: "GreenScape Pro — Waco TX Lawn Care & Landscaping",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenScape Pro | Waco TX Lawn Care & Landscaping",
    description:
      "Lawn care, landscape design, irrigation service & seasonal cleanup for Central Texas. Licensed & insured — no contracts.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "4.9";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "GreenScape Pro",
  alternateName: "GreenScape Pro Landscaping",
  description:
    "Residential and commercial landscaping services in Waco and Central Texas — lawn mowing, landscape design, irrigation, hardscaping, tree and shrub care, and seasonal cleanup. Licensed, insured, no contracts.",
  url: BASE_URL,
  telephone: "+12549005200",
  email: "hello@greenscapeprowaco.com",
  foundingDate: "2012",
  founder: {
    "@type": "Person",
    name: "Dana Whitfield",
    jobTitle: "Owner & Founder",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "3311 Franklin Ave",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76710",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Robinson",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hillsboro",    containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Mowing & Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscape Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Irrigation & Sprinkler Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardscaping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree & Shrub Care" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seasonal Cleanup" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/greenscapeprowaco",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* ConditionalShell shows Header/Footer only on non-admin pages */}
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#84cc16" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#14532d",
                }}
              >
                <PulseLoader size={50} color="#84cc16" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        {/* Footer only on non-admin pages */}
        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}