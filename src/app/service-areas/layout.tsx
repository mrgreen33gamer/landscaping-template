// src/app/service-areas/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Landscaping Service Areas | GreenScape Pro Central Texas',
  description:
    'GreenScape Pro serves Waco, Hewitt, Woodway, Robinson, China Spring, Temple, Killeen, and Hillsboro, TX with full landscaping services.',
  keywords: [
    'landscaping service areas Central Texas',
    'landscaping Waco TX',
    'landscaping Hewitt TX',
    'landscaping Killeen TX',
    'landscaping Temple TX',
    'lawn care Central Texas',
    'irrigation repair Waco',
    'GreenScape Pro service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Landscaping Service Areas | GreenScape Pro — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate lawn care, landscape design, irrigation, and hardscaping. Free estimates.',
    url,
    siteName: 'GreenScape Pro',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landscaping Service Areas | GreenScape Pro — Central Texas',
    description: 'Serving Waco and all of Central Texas. Flat-rate pricing, 30-Day Re-Service Guarantee.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'GreenScape Pro',
  url: BASE_URL,
  telephone: '+12549005200',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3311 Franklin Ave',
    addressLocality: 'Waco',
    addressRegion: 'TX',
    postalCode: '76710',
    addressCountry: 'US',
  },
  areaServed: [
    'Waco, TX', 'Hewitt, TX', 'Woodway, TX', 'Robinson, TX',
    'China Spring, TX', 'Killeen, TX', 'Temple, TX', 'Valley Mills, TX', 'Hillsboro, TX',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '14:00' },
  ],
  priceRange: '$$',
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
