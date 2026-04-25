"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useState, useRef } from "react";

const VSL_URL = "https://va2daaa0foumxg0g.public.blob.vercel-storage.com/vsl_web-9QhBFioxP3MeytlHvHKxlASn3weLe7.mp4";

export default function Hero() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className="relative bg-background flex flex-col items-center justify-start overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E2E8F0 1px, transparent 1px),
            linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 w-full flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white border border-card-border rounded-full px-3 py-1.5 text-xs sm:text-sm text-secondary font-medium shadow-sm mb-6 text-center max-w-xs sm:max-w-none"
        >
          <span className="w-2 h-2 flex-shrink-0 bg-success rounded-full animate-pulse" />
          Trusted by roofing contractors in the US, UK, AU & NZ
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.1] tracking-tight text-center mb-8"
        >
          We Help{" "}
          <span className="text-gradient">Roofing & HVAC Contractors</span>
          {" "}Get Free High Converting Websites + AI System That Turns{" "}
          <span className="text-gradient">Leads & Missed Calls</span>
          {" "}Into Booked Jobs
        </motion.h1>

        {/* ── VIDEO directly under the title ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-3xl mb-8"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-card-border shadow-xl bg-black">
            {/* Native video — preload=none so page loads instantly, video fetches only on click */}
            <video
              ref={videoRef}
              src={VSL_URL}
              preload="none"
              playsInline
              controls={playing}
              className="w-full h-full object-cover"
              poster="/vsl-poster.jpg"
            />

            {/* Play overlay — hidden once playing */}
            {!playing && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group bg-black/40 hover:bg-black/30 transition-colors"
                onClick={handlePlay}
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform mb-4">
                  <svg className="w-8 h-8 text-white fill-white ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white text-sm font-semibold tracking-wide drop-shadow">
                  Watch — 1 min 57 sec
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed text-center mb-7 px-2"
        >
          Your free professional site goes live in{" "}
          <strong className="text-navy">48 hours</strong>. Our AI then calls
          every new lead in under 60 seconds, generates Google reviews on
          autopilot, and reactivates your dormant database — while you're on
          the roof.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 w-full px-2"
        >
          <a
            href="#book"
            className="group inline-flex items-center justify-center gap-2 bg-accent text-white w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            <Phone size={16} />
            Book Your Free Strategy Call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 bg-white border border-card-border text-navy w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-muted transition-all"
          >
            See How It Works
          </a>
        </motion.div>

      </div>
    </section>
  );
}
