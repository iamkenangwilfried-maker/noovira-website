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
  metadataBase: new URL("https://nooviraai.com"),
  title: "Noovira AI — Agence Web Artisans & PME Suisse",
  description:
    "Agence web spécialisée artisans & PMEs du bâtiment en Suisse romande. Sites professionnels sur-mesure livrés en 2 semaines, optimisés SEO pour générer des demandes de devis.",
  verification: {
    google: "ae06b5d1b533757e",
  },
  authors: [{ name: "Noovira AI" }],
  creator: "Noovira AI",
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: "https://nooviraai.com",
    siteName: "Noovira AI",
    title: "Noovira AI — Agence Web Artisans & PME Suisse",
    description:
      "Sites web professionnels pour artisans & PMEs du bâtiment en Suisse romande. Livrés en 2 semaines, optimisés SEO, qui génèrent de vraies demandes de devis.",
    images: [{ url: "https://nooviraai.com/og-image.png", width: 1200, height: 630, alt: "Noovira AI" }],
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

        {/* ── JSON-LD — Organization + LocalBusiness ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://nooviraai.com/#organization",
                  "name": "Noovira AI",
                  "url": "https://nooviraai.com",
                  "logo": "https://nooviraai.com/logo-novira.svg",
                  "description": "Agence web spécialisée artisans & PMEs du bâtiment en Suisse romande. Sites web professionnels livrés en 2 semaines, optimisés SEO local.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "CH",
                    "addressRegion": "Suisse romande"
                  },
                  "areaServed": ["Lausanne", "Genève", "Fribourg", "Neuchâtel", "Sion", "Suisse romande"],
                  "serviceType": ["Création de site web", "Gestion de site web", "SEO local", "Google Ads", "Référencement naturel"],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "50",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "sameAs": [
                    "https://www.instagram.com/wilfried_kenang/",
                    "https://www.linkedin.com/in/wilfried-kenang/",
                    "https://www.tiktok.com/@wilfried_kenang"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://nooviraai.com/#website",
                  "name": "Noovira AI",
                  "url": "https://nooviraai.com",
                  "publisher": { "@id": "https://nooviraai.com/#organization" }
                }
              ]
            }),
          }}
        />
      </head>
      <body className="bg-background text-dark antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
