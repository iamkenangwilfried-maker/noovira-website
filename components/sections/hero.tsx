"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
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
          We Build{" "}
          <span className="text-gradient">Free Websites</span>
          {" & "}AI Systems That Turn{" "}
          <span className="text-gradient">Missed Calls</span> Into Booked Jobs
        </motion.h1>

        {/* ── VIDEO directly under the title ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-3xl mb-8"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-card-border shadow-xl bg-navy/5 cursor-pointer group">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80"
              alt="Watch our intro video"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white fill-white ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-navy/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-white text-xs font-medium">3:42 min — Watch before booking</span>
            </div>
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
            className="group inline-flex items-center justify-center gap-2 bg-navy text-white w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-navy-light transition-all hover:shadow-lg hover:shadow-navy/20"
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
