"use client";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Globe, Bot, BarChart3 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Globe,
    glowColor: "blue" as const,
    title: "Your Free Website — Live in 48 Hours",
    desc: "We build a professional, mobile-optimized website for your roofing business at zero cost. Custom design, your branding, contact forms, Google My Business integration. You own it. We host it.",
    bullets: [
      "Custom design — no templates",
      "Mobile-first & Google-optimized",
      "Live in 48 hours, guaranteed",
      "Hosting, SSL, domain setup included",
    ],
    tag: "FREE Setup",
    tagColor: "bg-success/10 text-success",
  },
  {
    step: "02",
    icon: Bot,
    glowColor: "purple" as const,
    title: "AI Calls Every New Lead in Under 60 Seconds",
    desc: "The moment someone fills out your form or calls and misses — our AI agent calls them back within 60 seconds, 24/7. It qualifies them, answers questions, and books them directly into your calendar.",
    bullets: [
      "Responds in < 60 seconds, day or night",
      "Qualifies leads on the call",
      "Books appointments automatically",
      "Full call recordings sent to you",
    ],
    tag: "Speed to Lead",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    step: "03",
    icon: BarChart3,
    glowColor: "green" as const,
    title: "Reviews + Reactivation on Autopilot",
    desc: "After every completed job, our system sends automated SMS & email review requests. Simultaneously, it reaches out to your dormant database — past leads who never booked but were interested.",
    bullets: [
      "Automated review requests post-job",
      "Database reactivation calls & texts",
      "Multi-touch sequences that convert",
      "Monthly performance dashboard",
    ],
    tag: "Passive Revenue",
    tagColor: "bg-success/10 text-success",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 bg-muted section-divider" id="how-it-works">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            How It Works
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy max-w-3xl mx-auto leading-tight">
            Three Systems. One Outcome: More Booked Jobs.
          </h2>
          <p className="mt-5 text-secondary text-lg max-w-2xl mx-auto">
            We install the entire system for you. No tech skills required. You
            focus on the roof — we handle everything else.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <GlowCard glowColor={s.glowColor} className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-heading font-bold text-5xl text-navy/10 leading-none">
                    {s.step}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${s.tagColor}`}>
                    {s.tag}
                  </span>
                </div>
                <s.icon size={32} className="text-accent mb-5" />
                <h3 className="font-heading font-bold text-navy text-xl mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-navy/80">
                      <svg className="w-4 h-4 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
