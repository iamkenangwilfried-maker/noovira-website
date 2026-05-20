"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * Hero — Sher Agency pixel-perfect clone:
 * • Dark bg, full viewport
 * • Stars (50+ reviews) + H1 + 2 beige CTA buttons
 * • Below CTAs: 2 rows of client name TAGS that SCROLL horizontally (marquee)
 *   Row 1 → left,  Row 2 → right (opposite direction)
 *   Tags are beige/cream (#E8E1D5), rounded rectangle, various rotations
 *   Hover on any tag → PAUSES the row + shows website preview popup
 */

const shot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=480&h=320`;

const ROW1 = [
  { name: "Roulin Couverture",    url: "b3constructioncorp.com",       rotate: -12 },
  { name: "Favre Rénovation",     url: "tekconstructiongroup.com",      rotate: 5   },
  { name: "Müller Charpente",     url: "qualmax.co.nz",                rotate: -20 },
  { name: "Martinez Plâtrerie",   url: "schmittcompany.com",           rotate: 8   },
  { name: "Dupont Électricité",   url: "candmhomebuilders.com",        rotate: -6  },
  { name: "Rochat Peinture",      url: "cr-design-remodel.webflow.io", rotate: 16  },
  { name: "Berset Toitures",      url: "5starroofcare.co.uk",          rotate: -75 },
  { name: "Girardin BTP",         url: "ironstarconstruction.com",     rotate: -4  },
  { name: "Schmitt Company",      url: "schmittcompany.com",           rotate: 11  },
  { name: "Clune Construction",   url: "clunegc.com",                  rotate: -17 },
  { name: "Trion Living",         url: "oasisbuildersinc.com",         rotate: -2  },
  { name: "FH Paschen",           url: "fhpaschen.com",                rotate: 14  },
];

const ROW2 = [
  { name: "B3 Construction",      url: "b3constructioncorp.com",       rotate: -155 },
  { name: "TEK Group",            url: "tekconstructiongroup.com",     rotate: -4   },
  { name: "Qualmax",              url: "qualmax.co.nz",                rotate: 13   },
  { name: "Leopardo",             url: "leopardo.com",                 rotate: -70  },
  { name: "JDG Constructions",    url: "jdgconstructions.com.au",      rotate: -9   },
  { name: "5 Star Roof Care",     url: "5starroofcare.co.uk",          rotate: 19   },
  { name: "Oasis Builders",       url: "oasisbuildersinc.com",         rotate: -13  },
  { name: "Skender",              url: "skender.com",                  rotate: 7    },
  { name: "Iron Star",            url: "ironstarconstruction.com",     rotate: -19  },
  { name: "Bechtel",              url: "bechtel.com",                  rotate: -5   },
  { name: "B2 Builders",          url: "b2builders.com",               rotate: 10   },
  { name: "CR Design",            url: "cr-design-remodel.webflow.io", rotate: -22  },
];

type TagItem = { name: string; url: string; rotate: number };

function Tag({ tag }: { tag: TagItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0"
      style={{ transform: `rotate(${tag.rotate}deg)`, transformOrigin: "center center" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview popup — counter-rotated to stay upright */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.94 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 14px)",
              left: "50%",
              width: "230px",
              zIndex: 100,
              transform: `translateX(-50%) rotate(${-tag.rotate}deg)`,
              pointerEvents: "none",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div style={{ height: "140px", overflow: "hidden" }}>
                <img
                  src={shot(tag.url)}
                  alt={tag.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.05"; }}
                />
              </div>
              <div style={{ padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ color: "#F7F4EF", fontSize: "13px", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {tag.name}
                </span>
                <ArrowUpRight size={13} style={{ color: "rgba(247,244,239,0.4)", flexShrink: 0 }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Beige tag */}
      <div
        style={{
          background: "#E8E1D5",
          color: "#1C1C1C",
          borderRadius: "10px",
          padding: "9px 18px",
          fontSize: "13px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          lineHeight: "1.3",
          userSelect: "none",
        }}
      >
        {tag.name}
      </div>
    </div>
  );
}

function TagRow({ tags, direction, speed }: { tags: TagItem[]; direction: "left" | "right"; speed: string }) {
  const animClass =
    direction === "left" ? speed : "animate-marquee-right";

  return (
    // tag-row class triggers CSS pause on hover
    <div className="tag-row w-full overflow-hidden" style={{ padding: "10px 0" }}>
      <div className={animClass} style={{ gap: "16px" }}>
        {/* Duplicate tags for seamless loop */}
        {[...tags, ...tags].map((tag, i) => (
          <Tag key={`${tag.name}-${i}`} tag={tag} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="section-dark relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      {/* ── Stars + H1 + CTAs ── */}
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
          <span className="text-sm text-text-light/50 font-medium">5.0 · Plus de 50+ avis clients</span>
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

        {/* CTAs — beige background, white text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base transition-all"
            style={{ background: "#C9BAAC", color: "#ffffff" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#ffffff"; (e.currentTarget as HTMLElement).style.color = "#1C1C1C"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#C9BAAC"; (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
          >
            Réserver un appel <ArrowUpRight size={16} />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base transition-all"
            style={{ background: "#C9BAAC", color: "#ffffff" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#ffffff"; (e.currentTarget as HTMLElement).style.color = "#1C1C1C"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#C9BAAC"; (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
          >
            Voir nos réalisations
          </a>
        </motion.div>
      </div>

      {/* ── MARQUEE TAG ROWS ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-20 w-full"
        style={{ paddingBottom: "60px" }}
      >
        {/* Row 1: scrolls left */}
        <TagRow tags={ROW1} direction="left" speed="animate-marquee-slow" />
        {/* Row 2: scrolls right (opposite) */}
        <TagRow tags={ROW2} direction="right" speed="animate-marquee-right" />
      </motion.div>
    </section>
  );
}
