"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import PropertySlideshow from "@/components/PropertySlideshow";
import PropertyInquiryModal from "@/components/PropertyInquiryModal";
import { PROPERTY_IMAGES, PROPERTY_TEMPLATE, WHATSAPP_NUMBER } from "@/constants/data";
import { Mail, MessageCircle, Calendar, MapPin, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PropertiesPage() {
  const [inquiryMethod, setInquiryMethod] = useState<"email" | "whatsapp" | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e8e5ff]/85 via-white/96 to-white flex flex-col relative">

      {/* ─── Hero / Title Card ─── */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-4 px-4 sm:px-6">
        <div className="w-full max-w-5xl xl:max-w-[80vw] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 md:gap-6 rounded-2xl md:rounded-3xl border border-navy/5 bg-white/60 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-lg shadow-black/10">

            {/* Title block — left-aligned always, single lines on mobile */}
            <div className="space-y-1 text-left flex-1 min-w-0">
              <h1 className="text-lg sm:text-xl md:text-4xl font-bold text-navy leading-tight">
                {PROPERTY_TEMPLATE.name}
              </h1>
              <p className="text-navy/60 text-xs sm:text-sm font-medium">
                Strategic premium housing for professionals across the United Kingdom.
              </p>
            </div>

            {/* Location + Rental Term — super compact on mobile/tablet */}
            <div className="flex items-center justify-start md:justify-end gap-3 sm:gap-5 md:gap-10 shrink-0">
              {/* Location */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin size={12} className="text-gold sm:hidden" />
                  <MapPin size={14} className="text-gold hidden sm:block md:hidden" />
                  <MapPin size={20} className="text-gold hidden md:block" />
                </div>
                <div>
                  <span className="block text-[8px] sm:text-[9px] md:text-[10px] font-bold text-navy/40 uppercase tracking-widest">Location</span>
                  <span className="font-bold text-navy text-xs sm:text-sm md:text-lg leading-tight">United Kingdom</span>
                </div>
              </div>

              {/* Rental Term */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Calendar size={12} className="text-gold sm:hidden" />
                  <Calendar size={14} className="text-gold hidden sm:block md:hidden" />
                  <Calendar size={20} className="text-gold hidden md:block" />
                </div>
                <div>
                  <span className="block text-[8px] sm:text-[9px] md:text-[10px] font-bold text-navy/40 uppercase tracking-widest">Rental Term</span>
                  <span className="font-bold text-navy text-xs sm:text-sm md:text-lg leading-tight">{PROPERTY_TEMPLATE.rentalTerm}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Slideshow + Details + Sticky ─── */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="w-full max-w-5xl xl:max-w-[80vw] mx-auto">

          {/* Slideshow */}
          <div className="lg:pb-4">
            <div className="w-full rounded-t-2xl md:rounded-t-[32px]">
              <PropertySlideshow images={PROPERTY_IMAGES} />
            </div>
          </div>

          {/* Description & Features — original rounded-t-[32px] border-b-0 structure for desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start bg-white p-6 sm:p-8 md:p-10 rounded-t-[32px] border border-navy/10 border-b-0 shadow-lg shadow-navy/5 relative z-10">
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
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {PROPERTY_TEMPLATE.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-navy text-sm font-bold p-2.5 sm:p-3 bg-accent/40 rounded-xl border border-navy/5"
                  >
                    <Check size={14} className="text-gold shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Sticky Inquiry Bar — restored original in-flow sticky ─── */}
          <div className="sticky bottom-4 z-40 pointer-events-none mt-8">
            <div className="absolute -top-4 w-full h-4" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full bg-[#C7A14A]/95 backdrop-blur-md text-navy rounded-2xl md:rounded-b-[32px] md:rounded-t-none p-3 sm:p-3.5 md:px-8 md:py-4 shadow-[rgba(0,0,0,0.2)_0px_8px_24px_-4px] border border-white/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 pointer-events-auto relative overflow-hidden transition-all duration-500"
            >
              {/* Label group — inline on mobile, moves to RIGHT on tablet only */}
              <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 text-left md:text-right lg:text-left md:justify-end lg:justify-start md:order-2 lg:order-1 relative z-10">
                <span className="inline-block bg-navy text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm whitespace-nowrap">
                  Available Now
                </span>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-navy leading-none whitespace-nowrap">
                  Make an inquiry now
                </h3>
                <span className="hidden md:inline-block text-navy/40">|</span>
                <p className="hidden sm:block text-navy/80 text-xs font-bold tracking-tight">
                  Choose a platform to connect with us instantly
                </p>
              </div>

              {/* Buttons — moves to LEFT on tablet only */}
              <div className="flex items-center gap-2.5 sm:gap-3 w-full md:w-auto md:order-1 lg:order-2 relative z-10 shrink-0 justify-start">
                <button
                  onClick={() => setInquiryMethod("email")}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-navy text-white px-5 py-2.5 rounded-lg font-bold hover:bg-white hover:text-navy transition-all shadow-md active:scale-95 text-xs uppercase tracking-wider"
                >
                  <Mail size={14} />
                  Email
                </button>
                <button
                  onClick={() => setInquiryMethod("whatsapp")}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white text-navy px-5 py-2.5 rounded-lg font-bold hover:bg-navy hover:text-white transition-all shadow-md active:scale-95 text-xs uppercase tracking-wider"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Inquiry Modal ─── */}
      <PropertyInquiryModal
        isOpen={!!inquiryMethod}
        onClose={() => setInquiryMethod(null)}
        method={inquiryMethod || "email"}
        isMandatoryTerm={true}
      />
    </main>
  );
}