import type { Metadata } from "next";
import { Atma } from "next/font/google";
import "./globals.css";

const atma = Atma({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dubious Cat Facts',
  description: 'Random and possibly dubious facts about cats',
  openGraph: {
    title: 'Dubious Cat Facts',
    description: 'Random and possibly dubious facts about cats',
    url: 'https://dubiouscatfacts.com',
    siteName: 'Dubious Cat Facts',
    images: [
      {
        url: 'https://dubiouscatfacts.com/og-image.png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${atma.className}`}>{children}</body>
    </html>
  );
}
