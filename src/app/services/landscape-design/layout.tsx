// src/app/services/landscape-design/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/services/landscape-design`;

export const metadata: Metadata = {
  title: "Landscape Design in Waco, TX | GreenScape Pro",
  description:
    "Custom landscape design and installation in Waco, TX — beds, plantings, and full-property layouts. Free estimates, flat-rate pricing.",
  keywords: [
    "landscape design Waco TX",
    "landscape installation Waco Texas",
    "custom landscape design Central Texas",
    "native plant landscaping Waco",
    "drought-tolerant landscaping Waco TX",
    "landscape design Hewitt TX",
    "landscape design Woodway TX",
    "flat-rate landscape design Waco",
    "GreenScape Pro landscape design",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Landscape Design in Waco, TX | GreenScape Pro",
    description:
      "Custom landscape design and installation for Waco and Central Texas properties. Free design consultation, flat-rate pricing, 30-day plant guarantee.",
    url,
    siteName: "GreenScape Pro",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Landscape design in Waco, TX – GreenScape Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscape Design in Waco, TX | GreenScape Pro",
    description: "Custom landscape design and installation for Waco and Central Texas properties.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landscape Design",
  description:
    "Custom landscape design and installation in Waco, TX including beds, plantings, and full-property layouts for residential and commercial properties across Central Texas.",
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
  serviceType: "Landscape Design",
  url,
};

export default function LandscapeDesignLayout({ children }: { children: React.ReactNode }) {
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
