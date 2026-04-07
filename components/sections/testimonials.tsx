"use client";
import { motion } from "framer-motion";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "We were missing 8-10 calls a day. Noovira built our website in 48 hours and set up the AI. Now every missed call gets a text and follow-up call within a minute. We booked 3 jobs the first week.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Mike R.",
    role: "Eagle Roofing, Texas",
  },
  {
    text: "Our old list had 300+ leads from the past 2 years. Noovira ran a reactivation campaign and we booked $47k in jobs in 30 days. That's money I thought was gone forever.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Jason T.",
    role: "Summit Pro Roofing, Florida",
  },
  {
    text: "We had 11 Google reviews after 8 years in business. Within 90 days, we had 67. Customers literally mention the reviews before they even call us now.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Sarah M.",
    role: "Apex Roofing Group, California",
  },
  {
    text: "I was skeptical about the AI calling leads for me. First week, it booked 4 new inspections while I was on the roof. I don't know why I waited this long.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Dave K.",
    role: "ClearPath Contractors, New York",
  },
  {
    text: "The website looks better than anything I could have paid $5k for. And it was free. The team set it up, walked me through everything, and now I get 5-10 new leads a week from Google.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Tom W.",
    role: "Iron Shield Roofing, Illinois",
  },
  {
    text: "The AI handles the after-hours calls perfectly. Customers love getting a call back in under a minute. I've had people say that's why they chose us over the competition.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Lisa B.",
    role: "SkyLine Roofing, Sydney AU",
  },
  {
    text: "Storm season is chaotic. With Noovira's AI, every lead gets called back immediately. I estimate we captured $80k+ in jobs this season that would have gone to competitors.",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Chris D.",
    role: "Vertex Roofing, Manchester UK",
  },
  {
    text: "Free website sounded too good to be true. Turns out it was legitimate — and better quality than I expected. Already recovered the $997 system fee in the first week.",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "James O.",
    role: "ProRoof NZ, Auckland",
  },
  {
    text: "Our close rate jumped from 35% to 58% once the AI started qualifying leads before I even got on the phone. I'm only talking to people who are ready to buy.",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    name: "Rachel H.",
    role: "BlueSky Roofing, Colorado",
  },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="py-14 bg-muted section-divider" id="testimonials">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-[540px] mx-auto mb-7"
        >
          <div className="border border-card-border bg-white py-1 px-4 rounded-full text-sm text-secondary font-medium mb-5">
            Testimonials
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy text-center tracking-tight">
            What Our Contractors Say
          </h2>
          <p className="text-center mt-4 text-secondary">
            Real results from roofing contractors in the US, UK, Australia &
            New Zealand.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={col1} duration={18} />
          <TestimonialsColumn
            testimonials={col2}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={col3}
            className="hidden lg:block"
            duration={20}
          />
        </div>
      </div>
    </section>
  );
}
