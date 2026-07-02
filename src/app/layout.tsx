import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sarthaktadwalkar.com'),
  title: 'Sarthak Tadwalkar | Data Strategy & AI Consultant',
  description:
    'Official portfolio of Sarthak Tadwalkar. I translate complex business challenges into data-driven strategies that drive measurable ROI through predictive analytics and AI.',
  keywords: [
    'Sarthak Tadwalkar',
    'Sarthak Tadwalkar Portfolio',
    'Data Analyst',
    'Data Strategy Consultant',
    'AI & Machine Learning',
    'Business Intelligence',
    'Data Science Mumbai',
    'Analytics Consultant',
  ],
  authors: [{ name: 'Sarthak Tadwalkar' }],
  creator: 'Sarthak Tadwalkar',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sarthaktadwalkar.com',
    title: 'Sarthak Tadwalkar | Data Strategy & AI Consultant',
    description:
      'I translate complex business challenges into data-driven strategies that drive measurable ROI.',
    siteName: 'Sarthak Tadwalkar Portfolio',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Sarthak Tadwalkar Portfolio Preview',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>
        {children}

        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fsarthakfol5492back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19"
        />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
      </body>
    </html>
  );
}
