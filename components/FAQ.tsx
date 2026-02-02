"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/constants/data";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-primary/5 overflow-hidden relative">
      <div className="max-w-[90vw] xl:max-w-[80vw] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          
          {/* Header Content - "What We Offer" Style */}
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px]">
                  Common Questions
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[0.95] tracking-tight mb-6">
                Reliable <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Answers.</span>
                  {/* Animated underline with pulsing dots */}
                  <div className="absolute bottom-2 left-0 right-0 h-3 md:h-4 overflow-hidden">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-full bg-gold/20 origin-left"
                    />
                    {/* Pulsing dots */}
                    <motion.div
                      animate={{ 
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full shadow-lg shadow-gold/50"
                    />
                  </div>
                </span>
              </h2>

              {/* Description */}
              <p className="text-navy/80 text-base md:text-lg leading-relaxed">
                Everything you need to know about our premium housing solutions and lease structures.
              </p>

            </motion.div>
          </div>

          {/* Accordion List - More Compact */}
          <div className="md:w-2/3 space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-navy/5 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-500"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-base md:text-lg font-bold text-navy group-hover:text-gold transition-colors pr-6">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center shrink-0 transition-all duration-500 ${activeIndex === index ? 'bg-gold border-gold' : ''}`}>
                    {activeIndex === index ? (
                      <Minus size={18} className="text-navy" />
                    ) : (
                      <Plus size={18} className="text-navy group-hover:text-gold" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-5 md:pb-6 text-navy/75 text-sm md:text-base leading-relaxed border-t border-navy/5 pt-5 md:pt-6 mx-6 md:mx-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}