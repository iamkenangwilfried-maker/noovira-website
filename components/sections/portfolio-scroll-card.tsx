"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const SPEED = 0.5; // px/frame

function shot(domain: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(domain)}?w=1200&h=2400`;
}

type Props = {
  domain: string;
  label: string;
  type: string;
  slug: string;
  index: number;
  cardHeight: number;
};

export default function PortfolioScrollCard({ domain, label, type, slug, index, cardHeight }: Props) {
  const imgRef  = useRef<HTMLImageElement>(null);
  const frameId = useRef<number>(0);
  const dir     = useRef<1 | -1>(1);
  const pos     = useRef(0);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    let timerId: ReturnType<typeof setTimeout>;

    function tick() {
      const el = imgRef.current;
      if (!el) return;
      const max = Math.max(0, el.offsetHeight - cardHeight);
      if (max === 0) { frameId.current = requestAnimationFrame(tick); return; }
      pos.current += SPEED * dir.current;
      if (pos.current >= max) { pos.current = max; dir.current = -1; }
      if (pos.current <= 0)   { pos.current = 0;   dir.current =  1; }
      el.style.transform = `translateY(-${pos.current}px)`;
      frameId.current = requestAnimationFrame(tick);
    }

    function start() {
      timerId = setTimeout(() => { frameId.current = requestAnimationFrame(tick); }, index * 1200);
    }

    if (img.complete && img.naturalHeight > 0) start();
    else img.addEventListener("load", start, { once: true });

    return () => {
      clearTimeout(timerId);
      cancelAnimationFrame(frameId.current);
    };
  }, [index, cardHeight]);

  const ROSE = "#FFD6D8";
  const DARK = "#1C1C1C";

  return (
    <div className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all flex flex-col">
      <div
        className="relative overflow-hidden bg-gray-100 flex-shrink-0"
        style={{ height: cardHeight }}
      >
        <img
          ref={imgRef}
          src={shot(domain)}
          alt={label}
          className="w-full block"
          style={{ willChange: "transform" }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
          <p className="text-xs uppercase tracking-wide font-semibold mb-0.5" style={{ color: ROSE }}>{type}</p>
          <p className="text-white font-bold text-lg">{label}</p>
        </div>
      </div>
      <div className="p-5 flex-1 flex items-center justify-center" style={{ backgroundColor: DARK }}>
        <Link
          href={`/realisations/${slug}`}
          style={{
            backgroundColor: ROSE,
            color: DARK,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "700",
            padding: "12px 24px",
            borderRadius: "9999px",
            fontSize: "13px",
            textDecoration: "none",
            width: "100%",
            justifyContent: "center",
          }}
        >
          Voir le projet →
        </Link>
      </div>
    </div>
  );
}
