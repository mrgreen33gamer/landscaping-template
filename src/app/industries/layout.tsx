// src\app\industries\layout.tsx
// src/app/industries/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url      = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | GreenScape Pro",
  description:
    "Commercial landscaping for HOAs, property managers, commercial real estate, and municipal contracts across Central Texas.",
  keywords: [
    "commercial landscaping Waco TX",
    "HOA landscaping Texas",
    "property management landscaping Central Texas",
    "commercial real estate landscaping Waco",
    "municipal landscaping contracts Texas",
    "government grounds maintenance Waco",
    "industry specific landscaping",
    "GreenScape Pro industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | GreenScape Pro — Waco, TX",
    description:
      "Commercial landscaping for HOAs, property managers, commercial real estate, and municipal contracts across Central Texas.",
    url,
    siteName: "GreenScape Pro",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "GreenScape Pro — Industries Served" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | GreenScape Pro",
    description: "Commercial landscaping for HOAs, property managers, commercial real estate, and municipal contracts across Central Texas.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Industries", item: url },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Landscaping Services — Waco TX",
  description:
    "GreenScape Pro provides property-type-tailored landscaping and grounds maintenance for HOAs, property managers, commercial real estate, and municipal & government contracts across Central Texas.",
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
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: "Commercial Landscaping, Grounds Maintenance",
  url,
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}