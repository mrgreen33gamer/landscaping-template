// src/app/services/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// ✅ FIX: This file was previously a copy of
//    /services/website-design/killeen-tx/layout.tsx (KilleenWebDesignLayout).
//    That caused a metadata collision — Google saw Killeen keyword targeting
//    on the /services parent route.
//
//    This is now the correct /services parent layout with:
//    - Broad "all services" metadata (no city/keyword cannibalization)
//    - OfferCatalog schema listing all 4 services
//    - BreadcrumbList for the /services route
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Landscaping Services in Waco, TX | GreenScape Pro",
  description:
    "Lawn mowing, landscape design, irrigation, hardscaping, tree care, and seasonal cleanup in Waco, TX. Flat-rate pricing, free estimates.",
  keywords: [
    "landscaping Waco TX",
    "lawn mowing Waco",
    "landscape design Central Texas",
    "irrigation and sprinkler systems Waco",
    "hardscaping Waco TX",
    "tree and shrub care Waco",
    "seasonal cleanup Central Texas",
    "GreenScape Pro services",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Landscaping Services in Waco, TX | GreenScape Pro",
    description:
      "Lawn mowing, landscape design, irrigation, hardscaping, tree care, and seasonal cleanup in Waco, TX. Flat-rate pricing, free estimates.",
    url,
    siteName: "GreenScape Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=3`,
        alt: "GreenScape Pro — Landscaping Services for Central Texas Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping Services in Waco, TX | GreenScape Pro",
    description:
      "Lawn mowing, landscape design, irrigation, hardscaping, tree care, and seasonal cleanup in Waco, TX. Flat-rate pricing, free estimates.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=3`],
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "GreenScape Pro — Landscaping Services",
  description:
    "Full-service landscaping offerings for Central Texas properties: lawn mowing, landscape design, irrigation, hardscaping, tree and shrub care, and seasonal cleanup.",
  provider: {
    "@type": "LocalBusiness",
    name: "GreenScape Pro",
    url: BASE_URL,
    telephone: "+12549005200",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waco",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Lawn Mowing & Maintenance",
        description:
          "Weekly or bi-weekly mowing, edging, and blowdown on a schedule that keeps your yard consistently sharp.",
        url: `${BASE_URL}/services/lawn-mowing-maintenance`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Landscape Design",
        description:
          "Full design-to-install landscape plans — beds, plantings, and layout built around how your property is actually used.",
        url: `${BASE_URL}/services/landscape-design`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Irrigation & Sprinkler Systems",
        description:
          "System install, repair, and seasonal tune-ups that keep every zone watering evenly without waste.",
        url: `${BASE_URL}/services/irrigation-sprinkler-systems`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Hardscaping",
        description:
          "Patios, walkways, and retaining walls built to hold up through Texas heat and hard freezes alike.",
        url: `${BASE_URL}/services/hardscaping`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Tree & Shrub Care",
        description:
          "Pruning, shaping, and health treatments that keep trees and shrubs looking intentional, not overgrown.",
        url: `${BASE_URL}/services/tree-shrub-care`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Seasonal Cleanup",
        description:
          "Spring and fall cleanup — leaf removal, bed refresh, and pre-season prep so your yard is never caught off guard.",
        url: `${BASE_URL}/services/seasonal-cleanup`,
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: url },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
