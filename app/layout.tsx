import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/cursor";

// Self-hosted via next/font → zero external round-trips, no render-blocking
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Noovira AI — Sites Web qui vous apportent des Devis. Pas juste des visites.",
  description:
    "Agence web spécialisée artisans & PMEs du bâtiment. Sites professionnels sur-mesure livrés en 2 semaines, optimisés SEO pour générer des leads qualifiés. Couvreurs, rénovation, charpente.",
  keywords: "agence web bâtiment, site internet couvreur, site rénovation, charpente web, SEO construction, leads artisans, agence web PME",
  authors: [{ name: "Noovira AI" }],
  creator: "Noovira AI",
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: "https://nooviraai.com",
    siteName: "Noovira AI",
    title: "Noovira AI — Sites Web qui vous apportent des Devis. Pas juste des visites.",
    description:
      "Agence web spécialisée artisans & PMEs du bâtiment. Sites professionnels + SEO + gestion de présence en ligne.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Noovira AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noovira AI — Agence Web pour Artisans & PMEs du Bâtiment",
    description: "Sites web qui remplissent votre carnet de chantiers.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`scroll-smooth ${manrope.variable}`}>
      <head>
        {/* DNS prefetch for mshots API (portfolio screenshots) */}
        <link rel="dns-prefetch" href="https://s.wordpress.com" />
        <link rel="preconnect" href="https://s.wordpress.com" />
      </head>
      <body className="bg-background text-dark antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
