"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Star, Search, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  tag: string;
  tagColor: string;
  icon: React.ElementType;
  client: string;
  location: string;
  headline: string;
  stats: { val: string; label: string; color?: string }[];
  images: string[];
};

const projects: Project[] = [
  {
    tag: "SEO Management",
    tagColor: "bg-red-100 text-red-700",
    icon: TrendingUp,
    client: "Home Remodeler",
    location: "Massachusetts, USA",
    headline: "Clicks ×6 in under 90 days",
    stats: [
      { val: "+609%", label: "Clicks growth", color: "text-success" },
      { val: "+653%", label: "Impressions growth", color: "text-success" },
      { val: "12K+", label: "Monthly impressions" },
    ],
    images: ["/results/r1.png"],
  },
  {
    tag: "Google Business Profile",
    tagColor: "bg-green-100 text-green-700",
    icon: BarChart3,
    client: "Contractor",
    location: "USA",
    headline: "11K profile interactions in one quarter",
    stats: [
      { val: "11,023", label: "GMB interactions", color: "text-accent" },
      { val: "+290.3%", label: "Year-over-year", color: "text-success" },
      { val: "Q1 2025", label: "Period" },
    ],
    images: ["/results/r2.png"],
  },
  {
    tag: "Local SEO + Reputation",
    tagColor: "bg-orange-100 text-orange-700",
    icon: Star,
    client: "Palm Tile",
    location: "Gardner, Massachusetts",
    headline: "#1 local ranking — from invisible to dominant",
    stats: [
      { val: "#1", label: "Local map pack", color: "text-success" },
      { val: "5.0 ★", label: "Google rating", color: "text-yellow-500" },
      { val: "77", label: "Ranking data points" },
    ],
    images: ["/results/r3.png", "/results/r6.png"],
  },
  {
    tag: "SEO Management",
    tagColor: "bg-red-100 text-red-700",
    icon: Search,
    client: "Contractor",
    location: "USA",
    headline: "25.5K clicks & 2.52M impressions in 3 months",
    stats: [
      { val: "25.5K", label: "Clicks (3 months)", color: "text-accent" },
      { val: "2.52M", label: "Impressions", color: "text-success" },
      { val: "9.6", label: "Avg. position" },
    ],
    images: ["/results/r4.png", "/results/r5.png"],
  },
  {
    tag: "SEO Management",
    tagColor: "bg-red-100 text-red-700",
    icon: TrendingUp,
    client: "Contractor",
    location: "USA",
    headline: "Top-page rankings — avg. position 5.8",
    stats: [
      { val: "1.75K", label: "Clicks (3 months)", color: "text-accent" },
      { val: "196K", label: "Impressions" },
      { val: "5.8", label: "Avg. position", color: "text-success" },
    ],
    images: ["/results/r7.png", "/results/r11.png"],
  },
  {
    tag: "SEO Management",
    tagColor: "bg-red-100 text-red-700",
    icon: BarChart3,
    client: "Contractor",
    location: "USA",
    headline: "664K impressions — massive organic reach",
    stats: [
      { val: "5.16K", label: "Clicks", color: "text-accent" },
      { val: "664K", label: "Impressions", color: "text-success" },
      { val: "155", label: "Clicks (28 days)" },
    ],
    images: ["/results/r8.png", "/results/r9.png", "/results/r10.png"],
  },
];

function ImageGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  if (images.length === 1) {
    return (
      <div className="rounded-xl overflow-hidden border border-card-border bg-navy/5">
        <img src={images[0]} alt="Result screenshot" className="w-full h-52 object-cover object-top" />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {/* Main image */}
      <div className="relative rounded-xl overflow-hidden border border-card-border bg-navy/5">
        <img
          src={images[active]}
          alt="Result screenshot"
          className="w-full h-52 object-cover object-top transition-all duration-300"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActive((active - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all"
            >
              <ChevronLeft size={14} className="text-navy" />
            </button>
            <button
              onClick={() => setActive((active + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all"
            >
              <ChevronRight size={14} className="text-navy" />
            </button>
          </>
        )}
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 rounded-lg overflow-hidden border-2 transition-all ${
              i === active ? "border-accent" : "border-card-border opacity-50 hover:opacity-80"
            }`}
          >
            <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-12 object-cover object-top" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Proof() {
  return (
    <section className="py-14 bg-background section-divider" id="proof">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center bg-success/10 text-success text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Proven Results
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy max-w-3xl mx-auto leading-tight">
            Real Numbers. Real Clients. Real Growth.
          </h2>
          <p className="mt-5 text-secondary text-lg max-w-2xl mx-auto">
            These aren't projections. Every screenshot below is a live dashboard from an active client account.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.headline}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.08 }}
              className="bg-white rounded-2xl border border-card-border shadow-sm overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-5 pb-4 border-b border-card-border">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.tagColor}`}>
                    {p.tag}
                  </span>
                  <p.icon size={16} className="text-secondary/40" />
                </div>
                <h3 className="font-heading font-bold text-navy text-base leading-snug mb-0.5">
                  {p.headline}
                </h3>
                <p className="text-secondary/50 text-xs">{p.client} · {p.location}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 divide-x divide-card-border border-b border-card-border">
                {p.stats.map((s) => (
                  <div key={s.label} className="px-3 py-3 text-center">
                    <div className={`font-heading font-bold text-base leading-tight ${s.color ?? "text-navy"}`}>
                      {s.val}
                    </div>
                    <div className="text-secondary/50 text-xs mt-0.5 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Screenshots */}
              <div className="p-4 flex-1">
                <ImageGallery images={p.images} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-secondary/40 text-xs mt-8"
        >
          Screenshots taken directly from Google Search Console, Google Business Profile & local ranking tools.
        </motion.p>
      </div>
    </section>
  );
}
