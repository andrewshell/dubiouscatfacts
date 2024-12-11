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
