import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Shivam Web Agency | Custom Software & Web Development',
  description: 'We engineer bespoke web applications, enterprise CRM systems, B2B portals, and high-performance e-commerce platforms to scale your business operations.',
  keywords: ['Custom Software Development', 'Web Agency Mumbai', 'Enterprise Software', 'E-commerce Development', 'B2B Web Portals', 'Next.js Experts'],
  openGraph: {
    title: 'Shivam Web Agency | Custom Software & Web Development',
    description: 'Bespoke web applications and enterprise software solutions engineered for scale.',
    url: 'https://www.shivamwebagency.in',
    siteName: 'Shivam Web Agency',
    images: [
      {
        url: '/og-image.png', // Or whichever banner/logo you want to show on WhatsApp
        width: 1200,
        height: 630,
        alt: 'Shivam Web Agency Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivam Web Agency | Custom Software & Web Development',
    description: 'Bespoke web applications and enterprise software solutions engineered for scale.',
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
