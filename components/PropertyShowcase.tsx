"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PROPERTY_IMAGES, PROPERTY_TEMPLATE } from "@/constants/data";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PropertyShowcase() {
  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-[95vw] sm:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        
        {/* Header - Responsive Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 pb-8 md:pb-12">
          <div className="space-y-3 md:space-y-4 text-center md:text-left">
            <span className="text-gold font-bold uppercase tracking-widest text-[10px] md:text-xs block">
              Exclusive Listing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-none">
              {PROPERTY_TEMPLATE.name}
            </h2>
          </div>
          
          <Link
            href="/properties"
            className="hidden md:inline-flex items-center gap-2 text-navy/40 font-bold uppercase tracking-widest hover:text-navy hover:gap-4 transition-all text-xs whitespace-nowrap"
          >
            Explore Full Gallery <ArrowRight size={14} />
          </Link>
        </div>

        {/* Feature Card - Fully Responsive */}
        <div className="relative rounded-2xl md:rounded-3xl lg:rounded-[40px] overflow-hidden group shadow-2xl bg-navy">
          <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] w-full flex items-center justify-center">
            
            {/* Watermark effect - Responsive sizing */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 select-none">
              <span className="text-white/5 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase tracking-widest text-center leading-none px-4">
                Epignosis
              </span>
              <span className="text-white/5 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase tracking-widest text-center leading-none mt-1 md:mt-2 px-4">
                Housing
              </span>
            </div>
            
            <Image
              src={PROPERTY_IMAGES[0]}
              alt="Epignosis Residence"
              fill
              className="object-cover opacity-90 transition-transform duration-[1.5s] group-hover:scale-105"
              priority
            />
             
            {/* Stronger gradient for better readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />

            {/* Content Overlay - Fully Responsive */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                
                {/* Badges - Improved readability and responsiveness */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 bg-navy/80 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border-2 border-gold/30 shadow-lg">
                    <MapPin size={14} className="text-gold shrink-0" strokeWidth={2.5} />
                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
                      United Kingdom
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-navy/80 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border-2 border-gold/30 shadow-lg">
                    <Calendar size={14} className="text-gold shrink-0" strokeWidth={2.5} />
                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
                      {PROPERTY_TEMPLATE.rentalTerm}
                    </span>
                  </div>
                </div>

                {/* Description - Responsive text sizing */}
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-full md:max-w-2xl lg:max-w-3xl leading-relaxed">
                  Strategic premium housing for professionals. Fully furnished, flexible leases, and tailored to your project timeline.
                </p>

                {/* CTA Button - Responsive positioning and sizing */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link
                    href="/properties"
                    className="bg-gold text-navy px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm sm:text-base transition-all hover:bg-white hover:scale-105 shadow-xl shadow-black/20 text-center"
                  >
                    View Residence
                  </Link>
                  
                  {/* Mobile-only explore link */}
                  <Link
                    href="/properties"
                    className="md:hidden inline-flex items-center justify-center gap-2 text-white/80 font-bold uppercase tracking-widest hover:text-white hover:gap-3 transition-all text-xs py-3"
                  >
                    Explore Full Gallery <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}