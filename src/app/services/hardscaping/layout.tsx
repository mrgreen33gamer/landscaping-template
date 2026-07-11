// src/app/services/hardscaping/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/services/hardscaping`;

export const metadata: Metadata = {
  title: "Hardscaping in Waco, TX | GreenScape Pro",
  description:
    "Patios, walkways, and retaining walls in Waco, TX. Flat-rate pricing, licensed crews, 30-day guarantee.",
  keywords: [
    "hardscaping Waco TX",
    "patio installation Waco Texas",
    "retaining wall construction Central Texas",
    "paver walkway installation Waco",
    "hardscape contractor Waco TX",
    "patio installation Hewitt TX",
    "retaining wall Woodway TX",
    "flat-rate hardscape construction Waco",
    "GreenScape Pro hardscaping",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Hardscaping in Waco, TX | GreenScape Pro",
    description:
      "Patios, walkways, and retaining walls built for Waco and Central Texas properties. Flat-rate pricing, licensed crews, 30-day guarantee.",
    url,
    siteName: "GreenScape Pro",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Hardscape construction in Waco, TX – GreenScape Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardscaping in Waco, TX | GreenScape Pro",
    description: "Patios, walkways, and retaining walls built for Waco and Central Texas properties.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hardscaping",
  description:
    "Patio, walkway, and retaining wall construction in Waco, TX for residential and commercial properties across Central Texas.",
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
  serviceType: "Hardscaping",
  url,
};

export default function HardscapingLayout({ children }: { children: React.ReactNode }) {
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
