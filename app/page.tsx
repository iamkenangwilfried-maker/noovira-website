import Navbar            from "@/components/sections/navbar";
import Hero              from "@/components/sections/hero";
import HowWeMake         from "@/components/sections/how-we-make";
import LogoStrip         from "@/components/sections/logo-strip";
import WhatWeDo          from "@/components/sections/what-we-do";
import SingleReview      from "@/components/sections/single-review";
import VideoTestimonials from "@/components/sections/video-testimonials";
import Process           from "@/components/sections/process";
import Portfolio         from "@/components/sections/portfolio";
import GoogleReviews     from "@/components/sections/google-reviews";
import LeadMagnet        from "@/components/sections/lead-magnet";
import Team              from "@/components/sections/team";
import FAQ               from "@/components/sections/faq";
import FinalCTA          from "@/components/sections/final-cta";
import Footer            from "@/components/sections/footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Avec quel type d'entreprises travaillez-vous ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous travaillons principalement avec les PMEs du secteur du bâtiment en Suisse romande — couvreurs, charpentiers, rénovateurs, maçons, peintres, électriciens. Toute entreprise artisanale cherchant à développer sa présence en ligne." } },
    { "@type": "Question", "name": "Quels services proposez-vous ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous créons, gérons et développons des sites web. Cela inclut : création de site, gestion mensuelle, SEO local, campagnes Google Ads, rédaction de contenus, fiche Google Business et support technique continu." } },
    { "@type": "Question", "name": "En combien de temps mon site sera-t-il en ligne ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous garantissons la mise en ligne en 2 semaines ouvrables après votre appel de démarrage. Vous partagez vos informations, nous concevons et développons tout, et votre site est live dans ce délai garanti contractuellement." } },
    { "@type": "Question", "name": "Est-ce que je possède mon site web ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, le site vous appartient entièrement. Si vous décidez un jour de changer d'agence, nous vous transfèrons tous les fichiers et accès sans aucune rétention." } },
    { "@type": "Question", "name": "Où est basée Noovira AI ?", "acceptedAnswer": { "@type": "Answer", "text": "Noovira AI a d'abord fait ses preuves sur des marchés anglophones parmi les plus compétitifs au monde — Royaume-Uni, Australie, États-Unis. Forts de ces résultats, nous avons décidé de conquérir la Suisse romande, un marché encore sous-exploité par les agences web sérieuses." } },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <Hero />               {/* DARK  — H1 + tags physiques */}
      <LogoStrip />          {/* WHITE — Éléments de confiance avant la vidéo HOW */}
      <HowWeMake />          {/* DARK  — Vidéo gauche + texte droite */}
      <WhatWeDo />           {/* WHITE — Accordéon 3 services */}
      <SingleReview />       {/* WHITE — Témoignage mis en avant */}
      <VideoTestimonials />  {/* WHITE — Real Client Stories */}
      <Process />            {/* DARK  — How Our Process Works */}
      <Portfolio />          {/* WHITE — Website Created */}
      <GoogleReviews />      {/* WHITE — Avis Google */}
      <LeadMagnet />         {/* DARK  — Checklist gratuite */}
      <Team />               {/* WHITE — Équipe */}
      <FAQ />                {/* WHITE — FAQ */}
      <FinalCTA />           {/* DARK  — CTA final */}
      <Footer />             {/* DARK  — Footer */}
    </main>
  );
}
