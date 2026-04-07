import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import VideoStats from "@/components/sections/video-stats";
import Results from "@/components/sections/results";
import Problem from "@/components/sections/problem";
import HowItWorks from "@/components/sections/how-it-works";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />         {/* Titre → Vidéo → Sous-titre → Boutons → Trusted by */}
      <Portfolio />    {/* Our Work — slider */}
      <VideoStats />   {/* Speed to Lead / Reviews / Recovery */}
      <Results />      {/* Proven Results — vidéos témoignages */}
      <Problem />      {/* The Problem */}
      <HowItWorks />   {/* How It Works */}
      <Pricing />      {/* Pricing */}
      <FAQ />          {/* FAQ */}
      <FinalCTA />     {/* Book Free Call */}
      <Footer />
    </main>
  );
}
