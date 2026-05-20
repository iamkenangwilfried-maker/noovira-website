"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/**
 * Contact page — Sher /contact-us style:
 * • Dark background
 * • LEFT: heading + guarantees list
 * • RIGHT: booking iframe (Cal.com/Calendly)
 */

const GUARANTEES = [
  "Appel de 30 minutes sans engagement",
  "Analyse gratuite de votre présence en ligne",
  "Devis clair et transparent envoyé après l'appel",
  "Mise en ligne garantie en 2 semaines",
  "Annulable à tout moment — aucun contrat long terme",
];

export default function ContactContent() {
  return (
    <section className="section-dark pt-28 pb-20 lg:pt-40 lg:pb-28" id="contact">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="font-heading text-text-light leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Réservez Votre{" "}
              <span className="font-black">Appel Gratuit</span>
            </h1>

            <p className="text-text-light/55 text-base leading-relaxed mb-10 max-w-lg">
              30 minutes pour analyser votre situation, voir ce que nous pouvons créer pour vous, et vous donner un devis clair — sans pression.
            </p>

            <ul className="space-y-4 mb-12">
              {GUARANTEES.map((g) => (
                <li key={g} className="flex items-start gap-3 text-sm text-text-light/65">
                  <CheckCircle2 size={18} className="text-beige flex-shrink-0 mt-0.5" />
                  {g}
                </li>
              ))}
            </ul>

            {/* Trust stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-border-dark">
              <div>
                <div className="font-heading font-black text-beige text-2xl">17+</div>
                <div className="text-text-light/35 text-xs uppercase tracking-widest mt-0.5">Sites livrés</div>
              </div>
              <div className="w-px h-10 bg-border-dark" />
              <div>
                <div className="font-heading font-black text-beige text-2xl">5.0 ★</div>
                <div className="text-text-light/35 text-xs uppercase tracking-widest mt-0.5">Note Google</div>
              </div>
              <div className="w-px h-10 bg-border-dark" />
              <div>
                <div className="font-heading font-black text-beige text-2xl">2 sem.</div>
                <div className="text-text-light/35 text-xs uppercase tracking-widest mt-0.5">Délai garanti</div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Booking calendar ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="rounded-3xl overflow-hidden border border-border-dark"
              style={{ background: "#1A1A1A" }}
            >
              <div className="px-8 py-6 border-b border-border-dark">
                <h2 className="font-heading font-bold text-text-light text-lg mb-1">
                  Choisissez votre créneau
                </h2>
                <p className="text-text-light/40 text-sm">
                  30 minutes · Google Meet · Sans engagement
                </p>
              </div>
              <div className="p-6">
                <iframe
                  src="https://link.nooviraai.com/widget/bookings/45min-nooviraai-call"
                  width="100%"
                  height="620"
                  frameBorder="0"
                  title="Réserver un appel Noovira AI"
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
