"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "Marc-Antoine Roulin",
    company: "Roulin Couverture Sàrl",
    location: "Lausanne, VD",
    rating: 5,
    date: "il y a 2 semaines",
    text: "Résultat bluffant. Site livré en exactement 48h comme promis, design super pro, et depuis on reçoit 3-4 demandes de devis par semaine sans rien faire. Je recommande à tous les artisans.",
    initials: "MR",
  },
  {
    name: "Julien Favre",
    company: "Favre Rénovation",
    location: "Genève, GE",
    rating: 5,
    date: "il y a 1 mois",
    text: "Avant j'avais rien sur internet. Maintenant j'ai un site magnifique et des clients qui me trouvent sur Google. L'équipe est réactive et professionnelle. 5 étoiles mérités.",
    initials: "JF",
  },
  {
    name: "Patrick Müller",
    company: "Müller Charpente AG",
    location: "Fribourg, FR",
    rating: 5,
    date: "il y a 3 semaines",
    text: "Skeptique au départ, mais le résultat est vraiment impressionnant. Mon site est beau, rapide, et surtout il génère des demandes réelles de gens dans ma région. Très content.",
    initials: "PM",
  },
  {
    name: "Sophie Berthoud",
    company: "Berthoud Rénovation Cuisine",
    location: "Neuchâtel, NE",
    rating: 5,
    date: "il y a 2 mois",
    text: "Super collaboration du début à la fin. Ils ont parfaitement compris mon activité et créé un site qui me ressemble. J'ai maintenant une vitrine professionnelle dont je suis fière.",
    initials: "SB",
  },
  {
    name: "Christophe Terrier",
    company: "Terrier Isolation & Façade",
    location: "Sion, VS",
    rating: 5,
    date: "il y a 6 semaines",
    text: "Service impeccable. Délai respecté, communication parfaite, résultat pro. Mon carnet de chantiers s'est rempli beaucoup plus vite depuis le lancement du site. Merci Noovira !",
    initials: "CT",
  },
  {
    name: "Nicolas Gaillard",
    company: "Gaillard Peinture",
    location: "Yverdon-les-Bains, VD",
    rating: 5,
    date: "il y a 1 mois",
    text: "Je cherchais une agence spécialisée dans le bâtiment et pas une agence généraliste. Noovira connaît vraiment notre secteur. Le site a été fait vite et bien, les textes sont parfaits.",
    initials: "NG",
  },
];

const ITEMS_PER_PAGE = 3;

export default function GoogleReviews() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(REVIEWS.length / ITEMS_PER_PAGE);
  const visible = REVIEWS.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const averageRating = (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <section className="section-white py-24 lg:py-32" id="avis">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-4 block">
              Avis clients
            </span>
            <h2
              className="font-heading font-bold text-dark leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              Ce que disent nos clients.
            </h2>
          </div>

          {/* Google rating badge */}
          <div className="flex items-center gap-4 bg-bg-alt rounded-2xl px-6 py-4 border border-border self-start md:self-auto">
            <div className="text-center">
              <div className="font-heading font-bold text-dark text-3xl leading-none">{averageRating}</div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-semibold text-dark text-sm">{REVIEWS.length} avis</div>
              <div className="text-muted text-xs mt-0.5">Google Business</div>
            </div>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {visible.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-alt rounded-2xl p-6 border border-border"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-beige/30 flex items-center justify-center font-bold text-dark text-sm flex-shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-dark text-sm">{r.name}</div>
                    <div className="text-muted text-xs">{r.company}</div>
                  </div>
                </div>
                {/* Google G icon */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-body text-sm leading-relaxed mb-4">"{r.text}"</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">{r.location}</span>
                <span className="text-xs text-muted">{r.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-dark hover:text-dark transition-all disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-all ${page === i ? "bg-dark w-6" : "bg-border hover:bg-muted"}`}
              />
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-dark hover:text-dark transition-all disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
