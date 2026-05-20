"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

/**
 * Lead Magnet — exact Sher Agency "Free Checklist" layout:
 * • Dark background
 * • LEFT: large heading (mixed weight) + description + checklist items
 * • RIGHT: email capture form in a dark card
 * • Sher exact: "Use This Free Checklist to Audit Your Website"
 *   → Noovira: "Utilisez Cette Checklist Gratuite pour Évaluer Votre Site"
 */

const CHECKLIST = [
  "Votre site est-il chargé en moins de 3 secondes ?",
  "Apparaissez-vous sur Google Maps pour vos services ?",
  "Votre site est-il adapté aux smartphones ?",
  "Avez-vous plus de 10 avis Google avec 4.5+ étoiles ?",
  "Vos coordonnées sont-elles visibles immédiatement ?",
  "Vos formulaires de devis fonctionnent-ils correctement ?",
];

export default function LeadMagnet() {
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent]   = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In production: wire to email service (ConvertKit, Mailchimp, etc.)
    setSent(true);
  };

  return (
    <section className="section-dark py-20 lg:py-28" id="checklist">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: heading + checklist ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-heading text-text-light leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Utilisez Cette{" "}
              <span className="font-black">Checklist Gratuite</span>
              {" "}pour Évaluer Votre Site
            </h2>

            <p className="text-text-light/50 text-base leading-relaxed mb-10 max-w-lg">
              En moins de 5 minutes, identifiez pourquoi votre site ne génère pas assez de demandes — et ce qu'il faut corriger en priorité.
            </p>

            <ul className="space-y-4">
              {CHECKLIST.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-beige flex-shrink-0 mt-0.5" />
                  <span className="text-text-light/65 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── RIGHT: email form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="rounded-3xl overflow-hidden border border-border-dark p-8 lg:p-10"
              style={{ background: "#1E1E1E" }}
            >
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-beige/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-beige" />
                  </div>
                  <h3 className="font-heading font-bold text-text-light text-xl mb-3">
                    Votre checklist arrive !
                  </h3>
                  <p className="text-text-light/45 text-sm">
                    Vérifiez votre boîte mail (et vos spams). Vous recevrez la checklist dans les prochaines minutes.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="font-heading font-bold text-text-light leading-tight mb-2"
                    style={{ fontSize: "clamp(1.3rem, 2vw, 1.75rem)" }}
                  >
                    Recevez la checklist gratuite
                  </h3>
                  <p className="text-text-light/40 text-sm mb-8">
                    Nous vous envoyons la checklist par email — aucun engagement, désinscription possible à tout moment.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-text-light/50 text-xs font-semibold uppercase tracking-widest mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        placeholder="Lucas"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-border-dark rounded-xl px-4 py-3.5 text-text-light placeholder-text-light/25 text-sm focus:outline-none focus:border-beige/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-text-light/50 text-xs font-semibold uppercase tracking-widest mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="lucas@monentreprise.ch"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-white/5 border border-border-dark rounded-xl px-4 py-3.5 text-text-light placeholder-text-light/25 text-sm focus:outline-none focus:border-beige/50 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-beige text-dark font-bold px-6 py-4 rounded-xl text-sm hover:bg-beige/90 transition-colors flex items-center justify-center gap-2 mt-2"
                    >
                      Télécharger la checklist <ArrowUpRight size={16} />
                    </button>
                  </form>

                  <p className="text-text-light/25 text-xs mt-5 text-center">
                    100% gratuit · Aucun spam · Désinscription en 1 clic
                  </p>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
