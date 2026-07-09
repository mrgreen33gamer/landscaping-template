// src/app/services/tree-shrub-care/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/services/tree-shrub-care`;

export const metadata: Metadata = {
  title: "Tree & Shrub Care in Waco, TX | GreenScape Pro",
  description:
    "Tree and shrub pruning, shaping, and health treatments in Waco, TX. Flat-rate pricing, TDA licensed applicators.",
  keywords: [
    "tree and shrub care Waco TX",
    "tree pruning Waco Texas",
    "shrub trimming Central Texas",
    "tree health treatment Waco",
    "storm damage tree service Waco TX",
    "tree pruning Hewitt TX",
    "shrub care Woodway TX",
    "TDA licensed tree service Waco",
    "GreenScape Pro tree and shrub care",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Tree & Shrub Care in Waco, TX | GreenScape Pro",
    description:
      "Tree and shrub pruning, shaping, and health treatments for Waco and Central Texas properties. Flat-rate pricing, TDA licensed applicators.",
    url,
    siteName: "GreenScape Pro",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Tree and shrub care in Waco, TX – GreenScape Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tree & Shrub Care in Waco, TX | GreenScape Pro",
    description: "Tree and shrub pruning, shaping, and health treatments for Waco and Central Texas properties.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tree & Shrub Care",
  description:
    "Tree and shrub pruning, shaping, and health treatments in Waco, TX for residential and commercial properties across Central Texas.",
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
  serviceType: "Tree & Shrub Care",
  url,
};

export default function TreeShrubCareLayout({ children }: { children: React.ReactNode }) {
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
