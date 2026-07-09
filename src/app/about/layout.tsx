// src/app/about/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url      = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About GreenScape Pro | Waco, TX Landscaping Company",
  description:
    "GreenScape Pro has served Central Texas properties since 2012 — flat-rate pricing, TDA licensed crews, and a 30-day guarantee on every job.",
  keywords: [
    "about GreenScape Pro",
    "Waco landscaping company",
    "landscaping contractor Waco TX",
    "locally owned landscaping Waco",
    "TDA licensed landscaping Waco Texas",
    "Central Texas landscaping company",
    "landscaping company history Waco",
    "Dana Whitfield GreenScape Pro",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About GreenScape Pro | Waco, TX Landscaping Company",
    description:
      "Locally owned and operated in Waco since 2012. TDA-licensed crews, flat-rate pricing, 30-Day Re-Service Guarantee on every job. Serving all of Central Texas.",
    url,
    siteName: "GreenScape Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About GreenScape Pro | Waco, TX Since 2012",
    description:
      "Locally owned landscaping company in Waco, TX. TDA-licensed crews, flat-rate pricing, 30-Day Re-Service Guarantee.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "GreenScape Pro",
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
  areaServed: [
    { "@type": "City", name: "Waco",         containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Robinson",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Valley Mills", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  sameAs: [
    "https://www.facebook.com/greenscapeprowaco",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",  item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: url },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
