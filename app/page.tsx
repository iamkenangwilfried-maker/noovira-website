import Navbar            from "@/components/sections/navbar";
import Hero              from "@/components/sections/hero";
import HowWeMake         from "@/components/sections/how-we-make";
import LogoStrip         from "@/components/sections/logo-strip";
import WhatWeDo          from "@/components/sections/what-we-do";
import SingleReview      from "@/components/sections/single-review";
import VideoTestimonials from "@/components/sections/video-testimonials";
import Process           from "@/components/sections/process";
import Portfolio         from "@/components/sections/portfolio";
import SocialContent     from "@/components/sections/social-content";
import GoogleReviews     from "@/components/sections/google-reviews";
import Team              from "@/components/sections/team";
import FAQ               from "@/components/sections/faq";
import FinalCTA          from "@/components/sections/final-cta";
import Footer            from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />               {/* DARK  — Titre + 3 colonnes de sites défilants */}
      <HowWeMake />          {/* DARK  — Vidéo "comment nous créons vos sites" */}
      <LogoStrip />          {/* WHITE — Logos clients défilants */}
      <WhatWeDo />           {/* DARK  — Accordéon 3 services */}
      <SingleReview />       {/* DARK  — Témoignage mis en avant */}
      <VideoTestimonials />  {/* WHITE — 2 vidéos YouTube témoignages */}
      <Process />            {/* ALT   — 5 étapes de notre processus */}
      <Portfolio />          {/* DARK  — 17 réalisations construction */}
      <SocialContent />      {/* DARK  — Contenu social reels */}
      <GoogleReviews />      {/* WHITE — Avis Google clients */}
      <Team />               {/* ALT   — Notre équipe */}
      <FAQ />                {/* WHITE — Questions fréquentes */}
      <FinalCTA />           {/* DARK  — CTA final + calendrier */}
      <Footer />             {/* DARK  — Pied de page */}
    </main>
  );
}
