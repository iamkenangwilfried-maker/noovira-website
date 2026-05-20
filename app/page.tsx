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
import LeadMagnet        from "@/components/sections/lead-magnet";
import Team              from "@/components/sections/team";
import ClutchReviews     from "@/components/sections/clutch-reviews";
import FAQ               from "@/components/sections/faq";
import FinalCTA          from "@/components/sections/final-cta";
import Footer            from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />               {/* DARK  — Titre + tag cloud réalisations */}
      <HowWeMake />          {/* DARK  — Vidéo "comment nous créons vos sites" */}
      <LogoStrip />          {/* WHITE — Logos clients défilants */}
      <WhatWeDo />           {/* DARK  — Accordéon 3 services */}
      <SingleReview />       {/* WHITE — Témoignage mis en avant */}
      <VideoTestimonials />  {/* WHITE — Carousel témoignages vidéo YouTube */}
      <Process />            {/* DARK  — 5 étapes + texte vertical rotatif */}
      <Portfolio />          {/* WHITE — 17 réalisations avec screenshot bg */}
      <SocialContent />      {/* DARK  — Reels 3×2 grid + texte droite */}
      <GoogleReviews />      {/* WHITE — Avis Google 2 rangées draggable */}
      <LeadMagnet />         {/* DARK  — Checklist gratuite + formulaire email */}
      <Team />               {/* DARK  — Équipe horizontal scroll portrait cards */}
      <ClutchReviews />      {/* DARK  — Avis vérifiés Clutch style */}
      <FAQ />                {/* DARK  — FAQ dans carte sombre #242424 */}
      <FinalCTA />           {/* DARK  — CTA final + réservation calendrier */}
      <Footer />             {/* DARK  — Pied de page */}
    </main>
  );
}
