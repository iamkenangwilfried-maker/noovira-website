"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const guarantees = [
  "Website live in 48 hours — guaranteed",
  "30-day money-back if we underdeliver",
  "No long-term contracts — cancel anytime",
  "Free strategy call — zero pressure",
];

export default function FinalCTA() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      const Cal = window.Cal;
      if (!Cal) return;
      Cal("init", { origin: "https://cal.com" });
      Cal("inline", {
        elementOrSelector: "#cal-inline",
        calLink: "noovira-audit/60min",
        layout: "month_view",
      });
      Cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#16A34A" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <section className="py-14 bg-muted section-divider relative overflow-hidden" id="book">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-[45%]"
          >
            <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Book a Free Call
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy leading-tight mb-6">
              Ready to Stop Losing Jobs to Missed Calls?
            </h2>
            <p className="text-secondary text-base leading-relaxed mb-8">
              Book a free 60-minute strategy call. We'll audit your current
              setup, show you exactly where you're losing revenue, and outline
              what we'd build for you — no pitch, no pressure.
            </p>
            <ul className="space-y-3 mb-8">
              {guarantees.map((g) => (
                <li key={g} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-success flex-shrink-0" />
                  <span className="text-secondary text-sm">{g}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[32, 45, 67, 12].map((n) => (
                  <img
                    key={n}
                    src={`https://randomuser.me/api/portraits/men/${n}.jpg`}
                    alt="Contractor"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-secondary/60 text-xs">
                Joined by <strong className="text-navy">40+ contractors</strong> this month
              </p>
            </div>
          </motion.div>

          {/* Right — Calendly embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:w-[55%] w-full"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-card-border">
              <div className="p-8 border-b border-card-border">
                <h3 className="font-heading font-bold text-navy text-xl mb-1">
                  Book Your Free Strategy Call
                </h3>
                <p className="text-secondary text-sm">60 minutes · Zoom · Free</p>
              </div>
              <div id="cal-inline" style={{ width: "100%", height: "700px", overflow: "scroll" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
