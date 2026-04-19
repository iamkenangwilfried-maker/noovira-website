"use client";
import { motion } from "framer-motion";
import { PhoneMissed, Star, Database } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    stat: "62%",
    headline: "of calls go unanswered after hours",
    desc: "Every missed call is a $3,000–$15,000 roofing job walking straight to your competitor. You're losing tens of thousands every month and you don't even know it.",
    quote: '"We were missing 8-10 calls a day. That\'s $40k+ a month gone."',
    bg: "bg-red-50",
    border: "border-red-100",
    iconColor: "text-red-500",
    statColor: "text-red-600",
  },
  {
    icon: Star,
    stat: "94%",
    headline: "of customers check reviews before hiring",
    desc: "Your competitors with 200+ Google reviews are eating your lunch. Most roofers have under 20 reviews — not because they do bad work, but because they never ask.",
    quote: '"We had 11 reviews after 8 years in business. Now we get 20+ a month."',
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconColor: "text-amber-500",
    statColor: "text-amber-600",
  },
  {
    icon: Database,
    stat: "$47k",
    headline: "avg. recovered from dead leads in 30 days",
    desc: "You have hundreds of old leads sitting in your CRM, your phone, your email — people who never booked but were interested. That's money you've already paid to acquire. It's just sitting there.",
    quote: '"Noovira reactivated our old list. $47k in new jobs in the first month."',
    bg: "bg-green-50",
    border: "border-green-100",
    iconColor: "text-accent",
    statColor: "text-accent",
  },
];

export default function Problem() {
  return (
    <section className="py-14 bg-background" id="problem">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            The Problem
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy max-w-3xl mx-auto leading-tight">
            You're Leaving Serious Money on the Table Every Single Day
          </h2>
          <p className="mt-5 text-secondary text-lg max-w-2xl mx-auto">
            It's not your roofing skills — it's your systems. Here's what's silently killing your revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.headline}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`${p.bg} border ${p.border} rounded-2xl p-8 flex flex-col`}
            >
              <p.icon size={28} className={`${p.iconColor} mb-5`} />
              <div className={`font-heading font-bold text-5xl ${p.statColor} mb-2`}>
                {p.stat}
              </div>
              <h3 className="font-heading font-bold text-navy text-lg mb-4 leading-snug">
                {p.headline}
              </h3>
              <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
              <blockquote className="border-l-2 border-current pl-4 text-xs italic text-secondary/70">
                {p.quote}
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
