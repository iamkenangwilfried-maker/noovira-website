"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Hero — Sher Agency pixel-perfect clone:
 * • Dark bg, full viewport
 * • Stars + H1 + 2 CTAs centered
 * • Bottom: client name TAGS in beige/cream, full-width rows that bleed off-screen
 *   - Rows are NOT centered — they start from left and overflow right
 *   - Some tags have extreme rotations (-160°, -75°, etc.) exactly like Sher
 *   - On hover: website screenshot preview card appears above the tag
 */

const shot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=480&h=320`;

// Exact rotation values visible in Sher's hero screenshots
// including extreme rotations like -160°, -75°, -70° etc.
const ROW1 = [
  { name: "Roulin Couverture",    url: "b3constructioncorp.com",      rotate: -15 },
  { name: "Favre Rénovation",     url: "tekconstructiongroup.com",     rotate: 6   },
  { name: "Müller Charpente",     url: "qualmax.co.nz",               rotate: -22 },
  { name: "Martinez Plâtrerie",   url: "schmittcompany.com",          rotate: 10  },
  { name: "Dupont Électricité",   url: "candmhomebuilders.com",       rotate: -8  },
  { name: "Rochat Peinture",      url: "cr-design-remodel.webflow.io",rotate: 18  },
  { name: "Berset Toitures",      url: "5starroofcare.co.uk",         rotate: -75 },  // extreme — nearly vertical
  { name: "Girardin BTP",         url: "ironstarconstruction.com",    rotate: -5  },
  { name: "Schmitt Company",      url: "schmittcompany.com",          rotate: 12  },
  { name: "Clune Construction",   url: "clunegc.com",                 rotate: -18 },
  { name: "Trion Living",         url: "oasisbuildersinc.com",        rotate: -3  },
];

const ROW2 = [
  { name: "B3 Construction",      url: "b3constructioncorp.com",      rotate: -160 }, // nearly upside-down
  { name: "TEK Group",            url: "tekconstructiongroup.com",    rotate: -4   },
  { name: "Qualmax",              url: "qualmax.co.nz",               rotate: 14   },
  { name: "Leopardo",             url: "leopardo.com",                rotate: -70  }, // extreme rotation
  { name: "JDG Constructions",    url: "jdgconstructions.com.au",     rotate: -10  },
  { name: "5 Star Roof Care",     url: "5starroofcare.co.uk",         rotate: 20   },
  { name: "Oasis Builders",       url: "oasisbuildersinc.com",        rotate: -14  },
  { name: "Skender",              url: "skender.com",                 rotate: 8    },
  { name: "Iron Star",            url: "ironstarconstruction.com",    rotate: -20  },
  { name: "FH Paschen",           url: "fhpaschen.com",               rotate: 15   },
  { name: "Bechtel",              url: "bechtel.com",                 rotate: -6   },
  { name: "B2 Builders",          url: "b2builders.com",              rotate: 11   },
];

type TagItem = { name: string; url: string; rotate: number };

function Tag({ tag, delay }: { tag: TagItem; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0"
      style={{ transform: `rotate(${tag.rotate}deg)` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview popup on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.94 }}
            transition={{ duration: 0.15 }}
            // counter-rotate so the popup is always upright
            style={{
              position: "absolute",
              bottom: "calc(100% + 12px)",
              left: "50%",
              width: "220px",
              zIndex: 60,
              transform: `translateX(-50%) rotate(${-tag.rotate}deg)`,
              pointerEvents: "none",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
              style={{ background: "#1A1A1A" }}
            >
              <div style={{ height: "130px" }}>
                <img
                  src={shot(tag.url)}
                  alt={tag.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.08"; }}
                />
              </div>
              <div className="px-4 py-3 flex items-center justify-between gap-2">
                <span className="text-text-light text-sm font-bold truncate">{tag.name}</span>
                <ArrowUpRight size={13} className="text-text-light/40 flex-shrink-0" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Beige tag — Sher exact style */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay, type: "spring", stiffness: 75, damping: 15 }}
        className="cursor-default select-none"
        style={{
          background: "#E8E1D5",
          color: "#1C1C1C",
          borderRadius: "10px",
          padding: "9px 18px",
          fontSize: "13px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          lineHeight: 1.3,
        }}
      >
        {tag.name}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="section-dark relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      {/* ── Stars + H1 + CTAs — centered ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 lg:pt-24 pb-10">

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-1.5 mb-8"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="w-5 h-5 fill-yellow-400">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <span className="text-sm text-text-light/50 font-medium">5.0 · Plus de 175+ avis clients</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-text-light tracking-tight leading-[1.05] mb-8 max-w-4xl"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
        >
          Nous créons des sites qui{" "}
          <span className="font-black">Remplissent votre Carnet.</span>
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/25 text-text-light px-7 py-3.5 rounded-full font-semibold text-base hover:border-white/60 hover:text-white transition-all"
          >
            Réserver un appel <ArrowUpRight size={16} />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-text-light/50 px-7 py-3.5 rounded-full font-semibold text-base hover:text-text-light transition-colors"
          >
            Voir nos réalisations
          </a>
        </motion.div>
      </div>

      {/* ── TAG CANVAS — full-width rows bleeding off-screen, like Sher ── */}
      <div className="relative z-20 w-full overflow-hidden" style={{ paddingBottom: "80px" }}>

        {/* Row 1 — offset slightly left so tags bleed off both edges */}
        <div
          className="flex gap-3 items-center"
          style={{
            width: "max-content",
            transform: "translateX(-40px)",
            marginBottom: "14px",
            paddingLeft: "20px",
          }}
        >
          {ROW1.map((tag, i) => (
            <Tag key={tag.name} tag={tag} delay={0.35 + i * 0.055} />
          ))}
        </div>

        {/* Row 2 — offset differently so rows don't align */}
        <div
          className="flex gap-3 items-center"
          style={{
            width: "max-content",
            transform: "translateX(-120px)",
            paddingLeft: "20px",
          }}
        >
          {ROW2.map((tag, i) => (
            <Tag key={tag.name} tag={tag} delay={0.5 + i * 0.055} />
          ))}
        </div>

      </div>
    </section>
  );
}
