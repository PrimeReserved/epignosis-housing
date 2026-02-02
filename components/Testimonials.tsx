"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/constants/data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-sm text-[8px] sm:text-sm">Client Experiences</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Trusted by Professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 flex flex-col justify-between relative"
            >
              <Quote size={40} className="text-gold opacity-20 absolute top-8 left-8" />
              <div className="relative pt-8">
                <p className="text-lg italic text-white/90 leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-bold text-gold text-xl mb-1">{testimonial.name}</h4>
                  <p className="text-white/50 text-sm uppercase tracking-wider font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
