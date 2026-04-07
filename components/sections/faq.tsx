"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Is the website really free? What's the catch?",
    a: "Yes, truly free to build and launch. There's no catch — the site is how we start the relationship. You pay $197/month for hosting, SSL, maintenance, and updates. That's it. No surprise fees. You can cancel anytime.",
  },
  {
    q: "How does the AI call leads? Will it sound robotic?",
    a: "Our AI uses a custom script built specifically for your business — your name, your services, your area. It sounds natural and professional. We fine-tune it before launch. Most customers don't realize they're not talking to a human until they ask.",
  },
  {
    q: "What if I don't have a CRM or lead list?",
    a: "No problem. We set up a basic CRM for you as part of onboarding. If you do have old leads (even from your phone contacts or a spreadsheet), we can use those for the Database Reactivation campaign. Most contractors find $20k–$80k in that list.",
  },
  {
    q: "How long does setup take?",
    a: "Website: 48 hours guaranteed. AI systems: 7–10 business days for full configuration, testing, and launch. We do all the technical work — you just need to join one 30-minute onboarding call.",
  },
  {
    q: "What markets do you work in?",
    a: "We currently serve roofing and HVAC contractors in the United States, United Kingdom, Australia, and New Zealand. We work in English only for now.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. Month-to-month after the initial setup. We're confident the system will pay for itself many times over, but if you need to pause or cancel, just let us know with 30 days notice.",
  },
  {
    q: "What happens if the AI makes a mistake or books the wrong thing?",
    a: "Every call is recorded and sent to you. The AI follows a strict script and only books appointments for pre-approved services. If there's ever an issue, you'll know within minutes. Our error rate is below 2%.",
  },
  {
    q: "Do I need to be tech-savvy to use this?",
    a: "Not at all. We handle every technical aspect. You get a simple dashboard to see leads, calls, and reviews. If you can read a text message, you can use our system. We also provide onboarding support and a dedicated contact for any questions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-14 bg-background section-divider" id="faq">
      <div className="max-w-4xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left */}
            <div className="lg:w-[40%]">
              <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                FAQ
              </div>
              <h2 className="font-heading font-bold text-4xl text-navy leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-6" />
              <p className="text-secondary text-sm leading-relaxed mb-6">
                Can't find what you're looking for? We're here to help.
              </p>
              <a
                href="#book"
                className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-navy-light transition-colors"
              >
                <MessageCircle size={16} />
                Talk to us directly
              </a>
            </div>

            {/* Right — accordion */}
            <div className="lg:w-[57%] space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
                  className="border border-card-border rounded-xl overflow-hidden bg-white"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-heading font-semibold text-navy text-sm leading-snug">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-navy flex items-center justify-center">
                      {open === i ? (
                        <Minus size={14} className="text-white" />
                      ) : (
                        <Plus size={14} className="text-white" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <p className="text-secondary text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
