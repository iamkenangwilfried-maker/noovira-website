"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Get Online",
    setup: "FREE Setup",
    price: "$197",
    period: "/mo",
    desc: "Your professional roofing website, live in 48 hours. No upfront cost. Just a monthly hosting fee.",
    cta: "Get My Free Website",
    ctaStyle: "bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white",
    featured: false,
    features: [
      "Custom roofing website (48h)",
      "Mobile-optimized & fast",
      "Contact forms & click-to-call",
      "Google My Business setup",
      "SSL certificate & hosting",
      "Monthly content updates",
      "Domain setup included",
    ],
  },
  {
    name: "Growth",
    tagline: "Get Leads",
    setup: "$997 one-time AI System Build",
    price: "$597",
    period: "/mo",
    desc: "Everything in Starter plus the Speed to Lead AI and Google Review automation. This is where contractors 3× their inbound.",
    cta: "Start Growing",
    ctaStyle: "bg-navy text-white hover:bg-navy-light",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Speed to Lead — AI calls in <60s",
      "Custom AI script for your business",
      "Missed call text-back (24/7)",
      "Lead qualification & calendar booking",
      "CRM integration & call recordings",
      "Google Review Management (SMS+email)",
      "48h review follow-up sequence",
      "Real-time lead notifications",
      "Monthly performance dashboard",
    ],
  },
  {
    name: "Scale",
    tagline: "Get Clients",
    setup: "$1,497 one-time AI System Build",
    price: "$997",
    period: "/mo",
    desc: "For contractors ready to dominate their market. Includes database reactivation, seasonal campaigns, and a dedicated account manager.",
    cta: "Let's Scale",
    ctaStyle: "bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white",
    featured: false,
    features: [
      "Everything in Growth",
      "Database Reactivation (old leads)",
      "Multi-touch call→SMS→email sequences",
      "A/B testing on AI scripts",
      "No-show follow-up automation",
      "Seasonal campaigns (storm season, etc.)",
      "Referral sequence automation",
      "Competitor review analysis (quarterly)",
      "Priority support (4h response)",
      "Dedicated account manager",
      "Quarterly strategy call",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-14 bg-muted section-divider" id="pricing">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Pricing
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy max-w-3xl mx-auto leading-tight">
            Straightforward Pricing. Zero BS.
          </h2>
          <p className="mt-5 text-secondary text-lg max-w-2xl mx-auto">
            The one-time fee covers our team's time to build and configure your
            AI systems (8–15 hours of work). The monthly fee keeps everything
            running and improving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.featured
                  ? "bg-navy ring-2 ring-accent scale-105 shadow-2xl shadow-accent/20"
                  : "bg-white border border-card-border shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="bg-accent text-white text-xs font-bold text-center py-2 tracking-widest uppercase">
                  ⭐ {plan.badge}
                </div>
              )}
              <div className="p-8">
                <div className="mb-6">
                  <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.featured ? "text-accent" : "text-accent"}`}>
                    {plan.tagline}
                  </div>
                  <h3 className={`font-heading font-bold text-2xl mb-2 ${plan.featured ? "text-white" : "text-navy"}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-xs font-medium mb-4 ${plan.featured ? "text-white/50" : "text-secondary"}`}>
                    {plan.setup}
                  </div>
                  <div className="flex items-end gap-1">
                    <span className={`font-heading font-bold text-5xl ${plan.featured ? "text-white" : "text-navy"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm mb-1.5 ${plan.featured ? "text-white/50" : "text-secondary"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm mt-4 leading-relaxed ${plan.featured ? "text-white/60" : "text-secondary"}`}>
                    {plan.desc}
                  </p>
                </div>

                <a
                  href="#book"
                  className={`block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all mb-8 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>

                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${plan.featured ? "text-success" : "text-success"}`}
                      />
                      <span className={`text-sm ${plan.featured ? "text-white/70" : "text-secondary"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-secondary/50 text-sm mt-10"
        >
          No long-term contracts. Cancel anytime. 30-day money-back if we don't deliver.
        </motion.p>
      </div>
    </section>
  );
}
