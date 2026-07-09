// src/app/industries/hoa-property-management/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/industries/hoa-property-management`;

export const metadata: Metadata = {
  title: "Landscaping for HOAs & Property Management | GreenScape Pro",
  description: "Common-area landscaping, seasonal contracts, and multi-property scheduling for HOAs and property managers in Central Texas.",
  keywords: [
    "HOA landscaping Waco TX",
    "property management landscaping Texas",
    "common area landscaping Central Texas",
    "multi-property landscaping contract",
    "HOA lawn care Waco",
    "community landscaping maintenance Texas",
    "GreenScape Pro HOA services",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Landscaping for HOAs & Property Management | GreenScape Pro",
    description: "Common-area landscaping, seasonal contracts, and multi-property scheduling for HOAs and property managers in Central Texas.",
    url, siteName: "GreenScape Pro", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/pages/seo-template-resources/about-hero-landscaping.svg`, alt: "HOA and property management landscaping – GreenScape Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping for HOAs & Property Management | GreenScape Pro",
    description: "Common-area landscaping, seasonal contracts, and multi-property scheduling for HOAs and property managers in Central Texas.",
    images: [`${BASE_URL}/pages/seo-template-resources/about-hero-landscaping.svg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landscaping for HOAs & Property Management",
  description: "Common-area landscaping, seasonal contracts, and multi-property scheduling for HOAs and property managers in Central Texas.",
  provider: {
    "@type": "LocalBusiness",
    name: "GreenScape Pro",
    url: BASE_URL,
    telephone: "+12549005200",
    address: { "@type": "PostalAddress", addressLocality: "Waco", addressRegion: "TX", addressCountry: "US" },
  },
  serviceType: "Landscaping, Common-Area Maintenance, Multi-Property Grounds Management",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GreenScape Pro — HOA & Property Management Landscaping",
  description: "Common-area landscaping, seasonal contracts, and multi-property scheduling for HOAs and property managers in Central Texas.",
  url,
  provider: { "@type": "LocalBusiness", name: "GreenScape Pro", url: BASE_URL },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: ["HOA Landscaping", "Property Management Grounds Maintenance", "Common-Area Irrigation", "Multi-Property Seasonal Cleanup"],
};

export default function HOAPropertyManagementIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      {children}
    </>
  );
}
