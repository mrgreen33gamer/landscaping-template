// src/app/services/irrigation-sprinkler-systems/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/services/irrigation-sprinkler-systems`;

export const metadata: Metadata = {
  title: "Irrigation & Sprinkler Systems in Waco, TX | GreenScape Pro",
  description:
    "Sprinkler system installation, repair, and seasonal tune-ups in Waco, TX. Flat-rate pricing, licensed technicians, 30-day guarantee.",
  keywords: [
    "irrigation repair Waco TX",
    "sprinkler system repair Waco Texas",
    "sprinkler system installation Central Texas",
    "smart controller installation Waco",
    "seasonal sprinkler tune-up Waco TX",
    "irrigation repair Hewitt TX",
    "irrigation repair Woodway TX",
    "flat-rate sprinkler repair Waco",
    "GreenScape Pro irrigation",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Irrigation & Sprinkler Systems in Waco, TX | GreenScape Pro",
    description:
      "Sprinkler system installation, repair, and seasonal tune-ups for Waco and Central Texas properties. Flat-rate pricing, licensed technicians, 30-day guarantee.",
    url,
    siteName: "GreenScape Pro",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Irrigation and sprinkler system service in Waco, TX – GreenScape Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Irrigation & Sprinkler Systems in Waco, TX | GreenScape Pro",
    description: "Sprinkler system installation, repair, and seasonal tune-ups for Waco and Central Texas properties.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Irrigation & Sprinkler Systems",
  description:
    "Sprinkler system installation, repair, and seasonal tune-ups in Waco, TX for residential and commercial properties across Central Texas.",
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
  serviceType: "Irrigation & Sprinkler Systems",
  url,
};

export default function IrrigationSprinklerSystemsLayout({ children }: { children: React.ReactNode }) {
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
