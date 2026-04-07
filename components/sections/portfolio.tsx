"use client";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/sites/site1.webp",
    title: "Eagle Roofing & Sons",
    location: "Texas, USA",
    tag: "Website + AI",
    tagColor: "bg-accent",
    plan: "Growth Plan",
    stats: [
      { val: "3 days", label: "Delivery" },
      { val: "+42 reviews", label: "in 60 days" },
      { val: "$31k", label: "recovered" },
    ],
  },
  {
    image: "/sites/site2.webp",
    title: "Summit Pro Roofing",
    location: "Florida, USA",
    tag: "Full Scale",
    tagColor: "bg-success",
    plan: "Scale Plan",
    stats: [
      { val: "48h", label: "Delivery" },
      { val: "+89 reviews", label: "in 90 days" },
      { val: "$47k", label: "recovered" },
    ],
  },
  {
    image: "/sites/site3.webp",
    title: "Apex Roofing Group",
    location: "California, USA",
    tag: "Website",
    tagColor: "bg-secondary",
    plan: "Starter Plan",
    stats: [
      { val: "48h", label: "Delivery" },
      { val: "Free", label: "Setup" },
      { val: "$0", label: "Upfront" },
    ],
  },
  {
    image: "/sites/site4.webp",
    title: "Roofy Contractors",
    location: "New York, USA",
    tag: "Website + AI",
    tagColor: "bg-accent",
    plan: "Growth Plan",
    stats: [
      { val: "2 days", label: "Delivery" },
      { val: "+55 reviews", label: "in 60 days" },
      { val: "$28k", label: "recovered" },
    ],
  },
  {
    image: "/sites/site5.webp",
    title: "ClearPath Contractors",
    location: "Illinois, USA",
    tag: "Full Scale",
    tagColor: "bg-success",
    plan: "Scale Plan",
    stats: [
      { val: "48h", label: "Delivery" },
      { val: "+112 reviews", label: "in 90 days" },
      { val: "$80k", label: "recovered" },
    ],
  },
  {
    image: "/sites/site5b.webp",
    title: "Reliable Expert Roofing",
    location: "Manchester, UK",
    tag: "Website + AI",
    tagColor: "bg-accent",
    plan: "Growth Plan",
    stats: [
      { val: "48h", label: "Delivery" },
      { val: "+38 reviews", label: "in 45 days" },
      { val: "$22k", label: "recovered" },
    ],
  },
  {
    image: "/sites/site6.webp",
    title: "SkyLine Roofing AU",
    location: "Sydney, Australia",
    tag: "Full Scale",
    tagColor: "bg-success",
    plan: "Scale Plan",
    stats: [
      { val: "48h", label: "Delivery" },
      { val: "+67 reviews", label: "in 60 days" },
      { val: "$53k", label: "recovered" },
    ],
  },
];

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent((idx + slides.length) % slides.length);
    },
    [current]
  );

  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const slide = slides[current];

  return (
    <section className="py-14 bg-background section-divider" id="portfolio">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Our Work
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy">
            Sites We've Built
          </h2>
          <p className="text-secondary mt-3 text-base">
            Real websites for real contractors — delivered in 48 hours.
          </p>
        </motion.div>

        {/* Slider */}
        <div
          className="relative rounded-2xl overflow-hidden bg-white border border-card-border shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main slide */}
          <div className="relative aspect-[16/9] md:aspect-[16/7] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent" />

                {/* Slide info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <span className={`inline-block text-xs font-bold text-white px-3 py-1 rounded-full mb-3 ${slide.tagColor}`}>
                        {slide.tag}
                      </span>
                      <h3 className="font-heading font-bold text-white text-2xl md:text-3xl leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-1">{slide.location} · {slide.plan}</p>
                    </div>
                    <div className="flex gap-5 sm:gap-8">
                      {slide.stats.map((s) => (
                        <div key={s.label} className="text-center">
                          <div className="font-heading font-bold text-white text-lg md:text-xl">{s.val}</div>
                          <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>

          {/* Thumbnail strip + dots */}
          <div className="bg-white border-t border-card-border px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-2 overflow-x-auto">
                {slides.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                      i === current
                        ? "border-accent opacity-100 scale-105"
                        : "border-transparent opacity-40 hover:opacity-70"
                    }`}
                  >
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>

              {/* Dot bullets */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 h-2 bg-accent"
                        : "w-2 h-2 bg-navy/20 hover:bg-navy/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-5">
          <span className="text-secondary/40 text-sm font-medium">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
