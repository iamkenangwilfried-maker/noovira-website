import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noovira AI — Sites Web qui Remplissent votre Carnet de Chantiers",
  description:
    "Agence web spécialisée PME suisses de la construction. Nous créons des sites professionnels, gérons votre présence en ligne et générons des leads qualifiés via SEO & publicité. Couvreurs, rénovation, charpente.",
  keywords: "agence web suisse, site internet construction, couvreur, rénovation, charpente, SEO suisse, site vitrine PME, génération de leads construction",
  authors: [{ name: "Noovira AI" }],
  creator: "Noovira AI",
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: "https://nooviraai.com",
    siteName: "Noovira AI",
    title: "Noovira AI — Sites Web qui Remplissent votre Carnet de Chantiers",
    description:
      "Agence web spécialisée PME suisses de la construction. Sites professionnels + SEO + gestion de présence en ligne.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Noovira AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noovira AI — Agence Web Construction Suisse",
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
        {children}
      </body>
    </html>
  );
}
