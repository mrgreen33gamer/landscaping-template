// src/app/services/lawn-mowing-maintenance/layout.tsx
// FULL FILE

import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/services/lawn-mowing-maintenance`;

export const metadata: Metadata = {
  title: "Lawn Mowing & Maintenance in Waco, TX | GreenScape Pro",
  description:
    "Weekly and bi-weekly lawn mowing and maintenance in Waco, TX. Flat-rate pricing, on-time crews, 30-day re-service guarantee. Free estimates.",
  keywords: [
    "lawn mowing Waco TX",
    "lawn maintenance Waco Texas",
    "weekly lawn service Central Texas",
    "bi-weekly mowing Waco TX",
    "lawn care company Waco",
    "yard maintenance Hewitt TX",
    "lawn mowing Woodway TX",
    "flat-rate lawn mowing Waco",
    "GreenScape Pro lawn mowing",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Lawn Mowing & Maintenance in Waco, TX | GreenScape Pro",
    description:
      "Weekly and bi-weekly lawn mowing and maintenance for Waco and Central Texas properties. Flat-rate pricing, on-time crews, 30-day re-service guarantee.",
    url,
    siteName: "GreenScape Pro",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Lawn mowing and maintenance in Waco, TX – GreenScape Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawn Mowing & Maintenance in Waco, TX | GreenScape Pro",
    description: "Weekly and bi-weekly lawn mowing and maintenance for Waco and Central Texas properties.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lawn Mowing & Maintenance",
  description:
    "Weekly and bi-weekly lawn mowing and maintenance in Waco, TX including mowing, edging, and blowdown for residential and commercial properties across Central Texas.",
  provider: {
    "@type": "LocalBusiness",
    name: "GreenScape Pro",
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waco",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",         containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Robinson",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Valley Mills", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Lawn Mowing & Maintenance",
  url,
};

export default function LawnMowingMaintenanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
