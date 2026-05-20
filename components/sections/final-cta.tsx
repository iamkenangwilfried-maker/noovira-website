"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const GUARANTEES = [
  "Site professionnel livré en 48 heures",
  "Design sur-mesure — aucun template",
  "Hébergement, domaine & SSL inclus",
  "Sans engagement — annulable à tout moment",
];

export default function FinalCTA() {
  return (
    <section className="section-dark py-24 lg:py-32 relative overflow-hidden" id="contact">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-beige/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-beige/60 mb-5 block">
              Commencer
            </span>
            <h2
              className="font-heading font-bold text-text-light leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Votre carnet de chantiers<br />
              mérite un site à la<br />
              <span className="text-beige">hauteur de votre travail.</span>
            </h2>
            <p className="text-text-light/55 text-base leading-relaxed mb-10 max-w-lg">
              Appelez gratuitement pour discuter de votre projet. Nous analysons votre situation, vous montrons ce que nous pouvons créer, et vous donnons un devis clair — sans pression, sans engagement.
            </p>

            <ul className="space-y-4 mb-12">
              {GUARANTEES.map((g) => (
                <li key={g} className="flex items-center gap-3 text-sm text-text-light/70">
                  <CheckCircle2 size={18} className="text-beige flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>

            {/* Trust row */}
            <div className="flex items-center gap-5 pt-8 border-t border-border-dark">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-beige">17+</span>
                <span className="text-xs text-text-light/40 uppercase tracking-widest mt-0.5">Sites livrés</span>
              </div>
              <div className="w-px h-10 bg-border-dark" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-beige">5.0 ★</span>
                <span className="text-xs text-text-light/40 uppercase tracking-widest mt-0.5">Note Google</span>
              </div>
              <div className="w-px h-10 bg-border-dark" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-beige">48h</span>
                <span className="text-xs text-text-light/40 uppercase tracking-widest mt-0.5">Délai garanti</span>
              </div>
            </div>
          </motion.div>

          {/* Right — booking embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-dark-alt rounded-3xl overflow-hidden border border-border-dark">
              <div className="px-8 py-6 border-b border-border-dark">
                <h3 className="font-heading font-bold text-text-light text-xl mb-1">
                  Réserver un appel gratuit
                </h3>
                <p className="text-text-light/40 text-sm">30 minutes · Google Meet · Sans engagement</p>
              </div>
              <div className="p-6">
                <iframe
                  src="https://link.nooviraai.com/widget/bookings/45min-nooviraai-call"
                  width="100%"
                  height="620"
                  frameBorder="0"
                  title="Réserver un appel gratuit — Noovira AI"
                  style={{ display: "block", borderRadius: "12px" }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
