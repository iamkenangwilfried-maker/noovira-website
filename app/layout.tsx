import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/cursor";

export const metadata: Metadata = {
  title: "Noovira AI — Sites Web qui Remplissent votre Carnet de Chantiers",
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
    title: "Noovira AI — Sites Web qui Remplissent votre Carnet de Chantiers",
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
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-dark antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
