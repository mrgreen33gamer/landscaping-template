// src/app/industries/municipal-government/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/industries/municipal-government`;

export const metadata: Metadata = {
  title: "Municipal & Government Grounds Maintenance | GreenScape Pro",
  description: "Public grounds maintenance, right-of-way mowing, and municipal contract landscaping for Central Texas government properties.",
  keywords: [
    "municipal landscaping Waco TX",
    "government grounds maintenance Texas",
    "right-of-way mowing Central Texas",
    "municipal contract landscaping",
    "public property grounds maintenance",
    "government landscaping RFP Texas",
    "GreenScape Pro municipal services",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Municipal & Government Grounds Maintenance | GreenScape Pro",
    description: "Public grounds maintenance, right-of-way mowing, and municipal contract landscaping for Central Texas government properties.",
    url, siteName: "GreenScape Pro", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/pages/seo-template-resources/about-hero-landscaping.svg`, alt: "Municipal and government grounds maintenance – GreenScape Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Municipal & Government Grounds Maintenance | GreenScape Pro",
    description: "Public grounds maintenance, right-of-way mowing, and municipal contract landscaping for Central Texas government properties.",
    images: [`${BASE_URL}/pages/seo-template-resources/about-hero-landscaping.svg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Municipal & Government Grounds Maintenance",
  description: "Public grounds maintenance, right-of-way mowing, and municipal contract landscaping for Central Texas government properties.",
  provider: {
    "@type": "LocalBusiness",
    name: "GreenScape Pro",
    url: BASE_URL,
    telephone: "+12549005200",
    address: { "@type": "PostalAddress", addressLocality: "Waco", addressRegion: "TX", addressCountry: "US" },
  },
  serviceType: "Landscaping, Municipal Grounds Maintenance, Right-of-Way Mowing, Government Contract Landscaping",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GreenScape Pro — Municipal & Government Grounds Maintenance",
  description: "Public grounds maintenance, right-of-way mowing, and municipal contract landscaping for Central Texas government properties.",
  url,
  provider: { "@type": "LocalBusiness", name: "GreenScape Pro", url: BASE_URL },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: ["Municipal Grounds Maintenance", "Right-of-Way Mowing", "Government Contract Landscaping", "Public Property Seasonal Cleanup"],
};

export default function MunicipalGovernmentIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      {children}
    </>
  );
}
