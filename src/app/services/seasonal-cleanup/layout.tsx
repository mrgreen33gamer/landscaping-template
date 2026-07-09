// src/app/services/seasonal-cleanup/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/services/seasonal-cleanup`;

export const metadata: Metadata = {
  title: "Seasonal Cleanup in Waco, TX | GreenScape Pro",
  description:
    "Spring and fall yard cleanup in Waco, TX. Leaf removal, bed refresh, flat-rate pricing, recurring plans available.",
  keywords: [
    "seasonal cleanup Waco TX",
    "spring cleanup Waco Texas",
    "fall cleanup Central Texas",
    "leaf removal Waco",
    "yard cleanup Waco TX",
    "spring cleanup Hewitt TX",
    "fall cleanup Woodway TX",
    "TDA licensed landscaping Waco",
    "GreenScape Pro seasonal cleanup",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Seasonal Cleanup in Waco, TX | GreenScape Pro",
    description:
      "Spring and fall yard cleanup for Waco and Central Texas properties. Flat-rate pricing, full debris haul-off included.",
    url,
    siteName: "GreenScape Pro",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Seasonal cleanup in Waco, TX – GreenScape Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seasonal Cleanup in Waco, TX | GreenScape Pro",
    description: "Spring and fall yard cleanup for Waco and Central Texas properties.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seasonal Cleanup",
  description:
    "Spring and fall seasonal yard cleanup in Waco, TX for residential and commercial properties across Central Texas.",
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
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Seasonal Cleanup",
  url,
};

export default function SeasonalCleanupLayout({ children }: { children: React.ReactNode }) {
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
