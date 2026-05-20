import Navbar          from "@/components/sections/navbar";
import PageHero        from "@/components/sections/page-hero";
import HowWeMake       from "@/components/sections/how-we-make";
import Process         from "@/components/sections/process";
import Portfolio       from "@/components/sections/portfolio";
import WhatWeDo        from "@/components/sections/what-we-do";
import FAQ             from "@/components/sections/faq";
import FinalCTA        from "@/components/sections/final-cta";
import Footer          from "@/components/sections/footer";

export const metadata = {
  title: "Création de Sites Web | Noovira AI — Artisans & PMEs Suisses",
  description:
    "Noovira crée des sites web professionnels pour les artisans et PMEs du bâtiment en Suisse romande. Design sur-mesure, livré en 2 semaines, qui génère des demandes de devis.",
};

export default function CreationDeSitePage() {
  return (
    <main>
      <Navbar />

      {/* Hero — exact Sher /webdesign style: grand titre centré + bouton */}
      <PageHero
        line1="Sites Web & Landing Pages"
        line2="Conçus pour Vendre."
        cta="Réserver un appel gratuit"
        ctaHref="#contact"
      />

      {/* Vidéo "comment nous créons vos sites" + badges */}
      <HowWeMake />

      {/* Processus en 5 étapes avec accordion */}
      <Process />

      {/* Grille de réalisations */}
      <Portfolio />

      {/* Ce que nous faisons (3 services) */}
      <WhatWeDo />

      {/* FAQ */}
      <FAQ />

      {/* CTA final */}
      <FinalCTA />

      <Footer />
    </main>
  );
}
