// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landscaping-template.vercel.app';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact GreenScape Pro | Free Landscaping Estimates in Waco, TX',
  description:
    'Request a free landscaping estimate from GreenScape Pro. Call (254) 900-5200 or fill out our online form — serving Waco and Central Texas.',
  keywords: [
    'contact GreenScape Pro',
    'landscaping service Waco TX',
    'schedule landscaping Waco',
    'landscaping estimate Central Texas',
    'GreenScape Pro contact',
    '254-900-5200',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact GreenScape Pro | Free Landscaping Estimates in Waco, TX',
    description:
      'Call, text, or submit a request. Flat-rate pricing, 30-Day Re-Service Guarantee, TDA-licensed crews.',
    url,
    siteName: 'GreenScape Pro',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact GreenScape Pro | Waco & Central Texas',
    description: 'Schedule landscaping service or get a free estimate. Call (254) 900-5200.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
