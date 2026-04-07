"use client";
import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "< 60s",
    label: "Speed to Lead",
    sub: "AI calls new leads before your competitor even reads the email",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    value: "3.2×",
    label: "More Google Reviews",
    sub: "Automated after every completed job — zero effort from you",
    color: "text-success",
  },
  {
    icon: DollarSign,
    value: "$8k+",
    label: "Avg. recovered/month",
    sub: "From dormant leads sitting untouched in your database",
    color: "text-amber-500",
  },
];

export default function VideoStats() {
  return (
    <section className="py-10 bg-muted section-divider">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="bg-white border border-card-border rounded-2xl p-7 text-center hover:shadow-md transition-shadow"
            >
              <stat.icon size={28} className={`${stat.color} mx-auto mb-4`} />
              <div className={`font-heading font-bold text-4xl ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-navy font-semibold text-base mb-2">{stat.label}</div>
              <p className="text-secondary text-sm leading-relaxed">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
