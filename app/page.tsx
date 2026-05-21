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
      <Hero />               {/* DARK  — H1 + tags physiques */}
      <LogoStrip />          {/* WHITE — Éléments de confiance avant la vidéo HOW */}
      <HowWeMake />          {/* DARK  — Vidéo gauche + texte droite */}
      <WhatWeDo />           {/* WHITE — Accordéon 3 services */}
      <SingleReview />       {/* WHITE — Témoignage mis en avant */}
      <VideoTestimonials />  {/* WHITE — Real Client Stories */}
      <Process />            {/* DARK  — How Our Process Works */}
      <Portfolio />          {/* WHITE — Website Created */}
      <SocialContent />      {/* DARK  — Reels 3×2 grid */}
      <GoogleReviews />      {/* WHITE — Avis Google */}
      <LeadMagnet />         {/* DARK  — Checklist gratuite */}
      <Team />               {/* WHITE — Équipe */}
      <ClutchReviews />      {/* DARK  — Avis Clutch */}
      <FAQ />                {/* WHITE — FAQ */}
      <FinalCTA />           {/* DARK  — CTA final */}
      <Footer />             {/* DARK  — Footer */}
    </main>
  );
}
