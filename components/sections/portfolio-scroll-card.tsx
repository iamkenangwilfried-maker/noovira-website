"use client";
import Link from "next/link";

type Props = {
  videoSrc: string;
  label: string;
  type: string;
  slug: string;
  cardHeight: number;
};

const ROSE = "#FFD6D8";
const DARK = "#1C1C1C";

export default function PortfolioScrollCard({ videoSrc, label, type, slug, cardHeight }: Props) {
  return (
    <div className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all flex flex-col">
      <div className="relative overflow-hidden bg-black flex-shrink-0" style={{ height: cardHeight }}>
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
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
