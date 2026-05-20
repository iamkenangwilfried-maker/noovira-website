import { notFound } from "next/navigation";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────
interface AuditData {
  business_name: string;
  score: number;
  score_grade: string;
  summary: string;
  rating: number;
  review_count: number;
  website: string;
  address: string;
  phone: string;
  pdf_url?: string;
  review_themes?: { theme: string; sentiment: string; count: number }[];
  action_plan?: { action: string; priority: string; timeline: string }[];
}

// Blob base URL — derived from BLOB_READ_WRITE_TOKEN prefix
const BLOB_BASE = "https://va2daaa0foumxg0g.public.blob.vercel-storage.com";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function scoreColor(score: number) {
  if (score >= 75) return { bg: "bg-green-500", text: "text-green-600", light: "bg-green-50" };
  if (score >= 50) return { bg: "bg-amber-500", text: "text-amber-600", light: "bg-amber-50" };
  return { bg: "bg-red-500", text: "text-red-600", light: "bg-red-50" };
}

function gradeLabel(grade: string) {
  const labels: Record<string, string> = {
    A: "Excellent", B: "Good", C: "Average", D: "Weak", F: "Critical",
  };
  return labels[grade] ?? grade;
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ReportPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Fetch audit JSON directly from Vercel Blob (no suffix, predictable URL)
  let audit: AuditData;
  try {
    const url = `${BLOB_BASE}/reports/${slug}.json`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) notFound();
    audit = await res.json();
  } catch {
    notFound();
  }

  const colors = scoreColor(audit.score);

  return (
    <main className="min-h-screen bg-[#F9FAFB] font-sans">

      {/* ── Header ── */}
      <header className="bg-[#0D0D0D] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Noovira AI" width={360} height={108} className="h-28 w-auto" />
        </div>
        <a
          href="https://cal.com/noovira-audit/60min"
          target="_blank"
          className="bg-[#6C63FF] hover:bg-[#5a52e0] text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
        >
          Book a Free Call →
        </a>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">

        {/* ── Company + Score ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-xs font-semibold text-[#6C63FF] uppercase tracking-widest mb-2">
            Reputation Audit Report
          </p>
          <h1 className="text-2xl font-bold text-[#0D0D0D] mb-1">
            {audit.business_name}
          </h1>
          <p className="text-sm text-gray-500 mb-6">{audit.address}</p>

          {/* Score bar */}
          <div className={`rounded-xl p-5 ${colors.light}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-600">Noovira Reputation Score</span>
              <span className={`text-3xl font-black ${colors.text}`}>
                {audit.score}<span className="text-lg">/100</span>
              </span>
            </div>
            <div className="w-full bg-white rounded-full h-3 overflow-hidden">
              <div
                className={`h-3 rounded-full ${colors.bg} transition-all`}
                style={{ width: `${audit.score}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>Grade: <strong className={colors.text}>{audit.score_grade} — {gradeLabel(audit.score_grade)}</strong></span>
              <span>Google: ⭐ {audit.rating}/5 · {audit.review_count} reviews</span>
            </div>
          </div>
        </div>

        {/* ── Summary ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-base font-bold text-[#0D0D0D] mb-3">What We Found</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{audit.summary}</p>
        </div>

        {/* ── Review Themes ── */}
        {audit.review_themes && audit.review_themes.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-base font-bold text-[#0D0D0D] mb-4">Review Themes</h2>
            <div className="space-y-2">
              {audit.review_themes.slice(0, 4).map((t, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <span className="text-sm text-gray-700">{t.theme}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    t.sentiment === "positive"
                      ? "bg-green-50 text-green-600"
                      : t.sentiment === "negative"
                      ? "bg-red-50 text-red-600"
                      : "bg-gray-100 text-gray-500"
                  }`}>
                    {t.sentiment}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Action Plan ── */}
        {audit.action_plan && audit.action_plan.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-base font-bold text-[#0D0D0D] mb-4">Top Recommendations</h2>
            <div className="space-y-3">
              {audit.action_plan.slice(0, 3).map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#6C63FF] flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0D0D0D]">{item.action}</p>
                    <p className="text-xs text-gray-400">{item.timeline} · Priority: {item.priority}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PDF Download ── */}
        {audit.pdf_url && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#0D0D0D]">Full Audit Report (PDF)</p>
              <p className="text-xs text-gray-400">Detailed analysis, competitor benchmark & action plan</p>
            </div>
            <a
              href={audit.pdf_url}
              target="_blank"
              className="text-sm font-semibold text-[#6C63FF] hover:underline"
            >
              Download →
            </a>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="bg-[#0D0D0D] rounded-2xl p-6 text-center">
          <p className="text-white font-bold text-lg mb-1">
            Want to fix this — for free?
          </p>
          <p className="text-gray-400 text-sm mb-5">
            Book a 15-min call. We'll show you exactly what's holding your business back and how we fix it.
          </p>
          <a
            href="https://cal.com/noovira-audit/60min"
            target="_blank"
            className="inline-block bg-[#6C63FF] hover:bg-[#5a52e0] text-white font-bold px-8 py-3 rounded-xl transition text-sm"
          >
            Book My Free Call →
          </a>
        </div>

        {/* ── Footer ── */}
        <p className="text-center text-xs text-gray-400 pb-4">
          This report was prepared by{" "}
          <a href="https://nooviraai.com" className="text-[#6C63FF]">Noovira AI</a>
          {" "}· contact@nooviraai.com
        </p>

      </div>
    </main>
  );
}
