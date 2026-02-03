"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/constants/data";
import * as LucideIcons from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isOddNumber = SERVICES.length % 2 !== 0;

  return (
    <section className="relative py-16 md:py-12 px-4 sm:px-6 bg-white overflow-hidden" id="services" >
      
      {/* Sophisticated Background Grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Radial Gradient Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-gold/5 via-transparent to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section - Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-20">
          
          {/* Left: Title Block */}
          <div className="lg:col-span-7 relative">
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
                  OUR SERVICES
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[0.95] tracking-tight mb-2">
                Premium <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Accommodation</span>
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
                <br />
                <span className="text-gold/80 italic font-light">Solutions</span>
              </h2>
            </motion.div>
          </div>

          {/* Right: Description Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <div className="relative pl-6 border-l-2 border-gold/30">
              <p className="text-navy/70 text-base md:text-lg leading-relaxed mb-6">
                Fully furnished properties with flexible lease terms, strategically positioned across the UK to serve contractors, project teams, and corporate relocations.
              </p>
              {/* Animated badge */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                className="inline-flex items-center gap-2 bg-gold/10 px-3 py-1.5 rounded-full border border-gold/20"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-gold"
                />
                <span className="text-xs uppercase tracking-widest text-navy/60 font-semibold">
                  Nationwide Coverage
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Services Grid - Compact Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {SERVICES.map((service, index) => {
            const Icon = (LucideIcons as any)[service.icon];
            const isHovered = hoveredIndex === index;
            const isLastItem = index === SERVICES.length - 1;
            const shouldSpanFull = isOddNumber && isLastItem;
            
            return (
              <ServiceCard
                key={service.title}
                service={service}
                icon={Icon}
                index={index}
                isHovered={isHovered}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
                spanFull={shouldSpanFull}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ 
  service, 
  icon: Icon, 
  index, 
  isHovered,
  onHover,
  onLeave,
  spanFull = false
}: { 
  service: any; 
  icon: any; 
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  spanFull?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative bg-gradient-to-br from-gold/5 via-transparent to-navy/5 rounded-2xl overflow-hidden cursor-pointer border border-gold/30 hover:border-gold/50 transition-all duration-500 hover:shadow-xl hover:shadow-gold/10 ${
        spanFull ? 'md:col-span-2' : ''
      }`}
    >
      {/* Sliding background on hover */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-navy/5 to-transparent pointer-events-none"
      />

      <div className="relative p-5 md:p-6">
        
        {/* Icon + Heading in same line */}
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          {/* Icon Container - stays static */}
          <div className="relative shrink-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-navy rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-500">
              <Icon 
                size={24} 
                className="text-gold" 
                strokeWidth={1.8}
              />
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-xl md:text-2xl font-bold text-navy leading-tight flex-1">
            {service.title}
          </h3>
        </div>

        {/* Expanding line */}
        <motion.div 
          initial={{ width: "3rem" }}
          animate={{ width: isHovered ? "6rem" : "3rem" }}
          transition={{ duration: 0.4 }}
          className="h-[2px] bg-gradient-to-r from-gold to-gold/20 mb-4"
        />
        
        {/* Description */}
        <p className="text-navy/80 leading-relaxed text-sm md:text-[15px]">
          {service.description}
        </p>

        {/* Hover corner accent */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/40 rounded-tr-xl"
        />
      </div>
    </motion.div>
  );
}