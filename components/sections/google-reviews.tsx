"use client";
import { motion } from "framer-motion";

/**
 * Google Reviews — infinite auto-scrolling marquee:
 * • Row 1 scrolls LEFT (→ standard direction)
 * • Row 2 scrolls RIGHT (← reverse)
 * • Both pause on hover so you can read the card
 * • Duplicate rows for seamless looping
 */

const REVIEWS = [
  {
    name: "Marc-Antoine Roulin",
    company: "Roulin Couverture Sàrl",
    initials: "MR",
    color: "bg-orange-500",
    reviewCount: "3 avis",
    date: "Mars 2026 sur Google",
    stars: 5,
    text: "Résultats incroyables. Site livré en exactement **2 semaines** comme promis, design **ultra professionnel**, et depuis nous recevons 3 à 4 demandes de devis par semaine. Je recommande à tout artisan.",
  },
  {
    name: "Julien Favre",
    company: "Favre Rénovation",
    initials: "JF",
    color: "bg-blue-500",
    reviewCount: "12 avis",
    date: "Février 2026 sur Google",
    stars: 5,
    text: "Je n'avais aucune présence en ligne avant. Maintenant j'ai un site superbe et les clients me trouvent sur Google. L'équipe est **réactive** et **professionnelle**. Des 5 étoiles bien méritées.",
  },
  {
    name: "Patrick Müller",
    company: "Müller Charpente AG",
    initials: "PM",
    color: "bg-green-600",
    reviewCount: "5 avis",
    date: "Janvier 2026 sur Google",
    stars: 5,
    text: "Sceptique au départ, mais le résultat est vraiment impressionnant. Mon site est **beau, rapide**, et surtout il génère de vraies demandes. **Très satisfait** du suivi.",
  },
  {
    name: "Sophie Berthoud",
    company: "Berthoud Électricité",
    initials: "SB",
    color: "bg-purple-500",
    reviewCount: "2 avis",
    date: "Décembre 2025 sur Google",
    stars: 5,
    text: "Super collaboration du début à la fin. Ils ont **parfaitement compris** mon activité et créé un site qui la reflète vraiment. J'ai maintenant une vitrine professionnelle dont je suis fière.",
  },
  {
    name: "Christophe Terrier",
    company: "Terrier Peinture",
    initials: "CT",
    color: "bg-red-500",
    reviewCount: "8 avis",
    date: "Novembre 2025 sur Google",
    stars: 5,
    text: "Service impeccable. **Délais respectés**, communication parfaite, résultat professionnel. Mon carnet de commandes **s'est rempli bien plus vite** depuis le lancement du site.",
  },
  {
    name: "Nicolas Gaillard",
    company: "Gaillard Maçonnerie",
    initials: "NG",
    color: "bg-teal-500",
    reviewCount: "1 avis",
    date: "Octobre 2025 sur Google",
    stars: 5,
    text: "Je cherchais une agence **spécialisée dans le bâtiment**. Noovira connaît vraiment notre secteur. Le site a été fait **vite et bien**, les textes sont parfaits.",
  },
  {
    name: "Yannick Aubry",
    company: "Aubry Plomberie Sàrl",
    initials: "YA",
    color: "bg-yellow-600",
    reviewCount: "4 avis",
    date: "Septembre 2025 sur Google",
    stars: 5,
    text: "Excellent travail. L'équipe a su **capturer l'identité** de mon entreprise et la mettre en ligne parfaitement. Je reçois régulièrement des **demandes de devis** depuis la mise en ligne.",
  },
  {
    name: "Laura Schmitt",
    company: "Schmitt Carrelage",
    initials: "LS",
    color: "bg-pink-500",
    reviewCount: "6 avis",
    date: "Août 2025 sur Google",
    stars: 5,
    text: "**Professionnelle, créative et à l'écoute**. Ils ont livré exactement ce que j'attendais dans les délais convenus. Mon site fait maintenant une **excellente impression** sur mes clients.",
  },
];

// Google "G" icon
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-label="Google">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(count)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-yellow-400">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: typeof REVIEWS[0] }) {
  const parts = r.text.split(/\*\*(.+?)\*\*/g);
  return (
    <div
      className="bg-white border border-border rounded-2xl p-6 flex-shrink-0 select-none"
      style={{ width: "300px" }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center font-bold text-white text-sm flex-shrink-0`}>
            {r.initials}
          </div>
          <div>
            <div className="font-semibold text-dark text-sm">{r.name}</div>
            <div className="text-muted text-xs">{r.reviewCount}</div>
          </div>
        </div>
        <GoogleIcon />
      </div>

      <StarRow count={r.stars} />
      <p className="text-muted text-xs mb-3">{r.date}</p>

      <p className="text-body text-sm leading-relaxed">
        {parts.map((part, i) =>
          i % 2 === 0
            ? <span key={i}>{part}</span>
            : <strong key={i} className="font-bold text-dark">{part}</strong>
        )}
      </p>
    </div>
  );
}

const row1 = REVIEWS.slice(0, 4);
const row2 = REVIEWS.slice(4);

export default function GoogleReviews() {
  return (
    <section className="section-white py-20 lg:py-28 overflow-hidden" id="avis">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="font-heading text-dark leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Nos Avis <span className="font-black">Google</span>
          </h2>
          <p className="text-muted text-sm max-w-xl mx-auto leading-relaxed">
            Résultats réels de clients réels. Les performances varient selon l'activité, la zone géographique et la concurrence.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scrolls LEFT, pauses on hover */}
      <div className="reviews-row overflow-hidden mb-4">
        <div
          className="animate-marquee"
          style={{ animationDuration: "45s" }}
        >
          {[...row1, ...row1, ...row1].map((r, i) => (
            <div key={i} className="px-2">
              <ReviewCard r={r} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls RIGHT, pauses on hover */}
      <div className="reviews-row overflow-hidden">
        <div
          className="animate-marquee-right"
          style={{ animationDuration: "55s" }}
        >
          {[...row2, ...row2, ...row2, ...row2].map((r, i) => (
            <div key={i} className="px-2">
              <ReviewCard r={r} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
