"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PropertySlideshow from "@/components/PropertySlideshow";
import PropertyInquiryModal from "@/components/PropertyInquiryModal";
import { PROPERTY_IMAGES, PROPERTY_TEMPLATE } from "@/constants/data";
import { Mail, MessageCircle, Calendar, MapPin, Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertiesPage() {
  const [inquiryMethod, setInquiryMethod] = useState<"email" | "whatsapp" | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-navy/5 to-white flex flex-col relative">

      <section className="pt-32 pb-4 px-6">
        <div className="max-w-[90vw] xl:max-w-[80vw] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-navy/5 pb-8 mb-8"
               style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px", borderRadius: "24px", padding: "24px" }}>
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                {PROPERTY_TEMPLATE.name}
              </h1>
              <p className="text-navy/60 text-sm font-medium max-w-xl mx-auto md:mx-0">
                Strategic premium housing for professionals across the United Kingdom.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-navy/40 uppercase tracking-widest">Location</span>
                  <span className="font-bold text-navy text-lg leading-tight">United Kingdom</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Calendar size={20} className="text-gold" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-navy/40 uppercase tracking-widest">Rental Term</span>
                  <span className="font-bold text-navy text-lg leading-tight">{PROPERTY_TEMPLATE.rentalTerm}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-[90vw] xl:max-w-[80vw] mx-auto space-y-8">
          
          <div className="pb-4">
            <PropertySlideshow images={PROPERTY_IMAGES} />
          </div>

          {/* Description & Features Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white p-8 md:p-10 rounded-t-[32px] border border-navy/10 border-b-0 shadow-lg shadow-navy/5 relative z-10">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-navy">Refined Living for Professionals</h2>
              <p className="text-base text-navy/80 leading-relaxed font-medium">
                Epignosis Housing Co specializes in delivering tailored housing solutions. Our properties are strategically 
                located to support construction teams, family relocators, and remote professionals on multi-year projects. 
                Experience a home-like environment with full-furnishing and flexible leasing that evolves with your team's needs.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-navy/40 uppercase tracking-[0.2em]">Included Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {PROPERTY_TEMPLATE.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-navy text-sm font-bold p-3 bg-accent/40 rounded-xl border border-navy/5">
                    <Check size={14} className="text-gold" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Inquiry Section */}
          <div className="sticky bottom-4 z-40 pointer-events-none">
            {/* Docked State Sentinel */}
            <div className="absolute -top-4 w-full h-4" /> 

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full bg-[#C7A14A]/95 backdrop-blur-md text-navy rounded-2xl md:rounded-b-[32px] md:rounded-t-none p-4 md:px-8 md:py-4 shadow-[rgba(0,0,0,0.2)_0px_8px_24px_-4px] border border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto relative overflow-hidden transition-all duration-500"
            >
              {/* Blur Effect Wrapper around the box when sticky is simulated by backdrop-blur on the element itself and shadow */}
              <div className="flex flex-col lg:flex-row items-center gap-4 text-center md:text-left relative z-10">
                <span className="inline-block bg-navy text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm whitespace-nowrap">
                  Available Now
                </span>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2">
                    <h3 className="text-lg font-bold text-navy leading-none whitespace-nowrap">Make an inquiry now</h3>
                    <span className="hidden md:inline-block text-navy/40">|</span>
                    <p className="text-navy/80 text-xs font-bold tracking-tight">Choose a platform to connect with us instantly</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto relative z-10 shrink-0 justify-center">
                <button
                  onClick={() => setInquiryMethod("email")}
                  className="flex items-center justify-center gap-2 bg-navy text-white px-5 py-2.5 rounded-lg font-bold hover:bg-white hover:text-navy transition-all shadow-md active:scale-95 group text-xs uppercase tracking-wider"
                >
                  <Mail size={14} />
                  Email
                </button>
                <button
                  onClick={() => setInquiryMethod("whatsapp")}
                  className="flex items-center justify-center gap-2 bg-white text-navy px-5 py-2.5 rounded-lg font-bold hover:bg-navy hover:text-white transition-all shadow-md active:scale-95 group text-xs uppercase tracking-wider"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Hide global WhatsApp button on this page as we have the sticky inquiry bar */}
      <div className="hidden">
        <WhatsAppButton />
      </div>

      <PropertyInquiryModal
        isOpen={!!inquiryMethod}
        onClose={() => setInquiryMethod(null)}
        method={inquiryMethod || "email"}
        isMandatoryTerm={true}
      />
    </main>
  );
}

