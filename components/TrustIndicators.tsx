"use client";

import { motion } from "framer-motion";
import { CalendarDays, Home, Headphones, Globe } from "lucide-react";

const stats = [
  { 
    stat: "1-5+", 
    label: "Year Terms", 
    secondary: "Flexible Leases",
    icon: CalendarDays 
  },
  { 
    stat: "100%", 
    label: "Furnished", 
    secondary: "Move-in Ready",
    icon: Home 
  },
  { 
    stat: "24/7", 
    label: "Support", 
    secondary: "Resident Care",
    icon: Headphones 
  },
  { 
    stat: "UK Wide", 
    label: "Locations", 
    secondary: "Nationwide Coverage",
    icon: Globe 
  },
];

export default function TrustIndicators() {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-accent/30 to-white overflow-hidden">
      
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1] 
              }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/20 group-hover:via-gold/5 group-hover:to-transparent transition-all duration-700 blur-xl" />
              
              <div className="relative h-full flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-navy/10 shadow-lg shadow-navy/5 transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-xl group-hover:shadow-gold/10 group-hover:-translate-y-1">
                
                {/* Icon with refined styling */}
                <div className="mb-5 relative">
                  <div className="absolute inset-0 bg-gold/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-md border border-gold/10">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" strokeWidth={1.5} />
                  </div>
                  {/* Corner accent */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gold/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Stats */}
                <div className="flex-1 flex flex-col justify-center space-y-2.5">
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
                      {item.stat}
                    </div>
                    {/* Subtle underline */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-full transition-all duration-500" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-xs md:text-sm font-bold text-navy uppercase tracking-[0.15em]">
                      {item.label}
                    </div>
                    <div className="text-[10px] md:text-xs text-navy/50 font-medium uppercase tracking-wider">
                      {item.secondary}
                    </div>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="mt-6 w-12 h-[2px] bg-gradient-to-r from-transparent via-navy/20 to-transparent group-hover:via-gold transition-all duration-500" />
              </div>

              {/* Connector for desktop - refined */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-gradient-to-r from-navy/10 to-transparent -translate-y-1/2 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}