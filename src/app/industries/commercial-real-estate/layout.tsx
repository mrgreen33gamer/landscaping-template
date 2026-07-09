// src/app/industries/commercial-real-estate/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/industries/commercial-real-estate`;

export const metadata: Metadata = {
  title: "Commercial Landscaping for Real Estate | GreenScape Pro",
  description: "Commercial property landscaping, tenant-ready grounds maintenance, and seasonal contracts for Central Texas commercial real estate.",
  keywords: [
    "commercial landscaping Waco TX",
    "commercial real estate landscaping Texas",
    "tenant-ready grounds maintenance",
    "commercial property landscaping contract",
    "commercial lawn care Waco",
    "multi-property commercial landscaping Texas",
    "GreenScape Pro commercial services",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Landscaping for Real Estate | GreenScape Pro",
    description: "Commercial property landscaping, tenant-ready grounds maintenance, and seasonal contracts for Central Texas commercial real estate.",
    url, siteName: "GreenScape Pro", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/pages/seo-template-resources/about-hero-landscaping.svg`, alt: "Commercial real estate landscaping – GreenScape Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Landscaping for Real Estate | GreenScape Pro",
    description: "Commercial property landscaping, tenant-ready grounds maintenance, and seasonal contracts for Central Texas commercial real estate.",
    images: [`${BASE_URL}/pages/seo-template-resources/about-hero-landscaping.svg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Landscaping for Real Estate",
  description: "Commercial property landscaping, tenant-ready grounds maintenance, and seasonal contracts for Central Texas commercial real estate.",
  provider: {
    "@type": "LocalBusiness",
    name: "GreenScape Pro",
    url: BASE_URL,
    telephone: "+12549005200",
    address: { "@type": "PostalAddress", addressLocality: "Waco", addressRegion: "TX", addressCountry: "US" },
  },
  serviceType: "Landscaping, Commercial Grounds Maintenance, Multi-Property Landscaping Contracts",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GreenScape Pro — Commercial Real Estate Landscaping",
  description: "Commercial property landscaping, tenant-ready grounds maintenance, and seasonal contracts for Central Texas commercial real estate.",
  url,
  provider: { "@type": "LocalBusiness", name: "GreenScape Pro", url: BASE_URL },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: ["Commercial Landscaping", "Tenant-Ready Grounds Maintenance", "Multi-Property Contracts", "Seasonal Commercial Cleanup"],
};

export default function CommercialRealEstateIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      {children}
    </>
  );
}
