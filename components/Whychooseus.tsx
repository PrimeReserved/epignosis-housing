"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Clock, Zap, Building2, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Flexible Terms",
    description: "From 1 month to 5+ years, accommodating your timeline.",
  },
  {
    icon: Zap,
    title: "Fully Equipped",
    description: "Move in with just your suitcase. High-end furnishing included.",
  },
  {
    icon: Building2,
    title: "Strategic Locations",
    description: "Near major transport hubs to minimize commute times.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Support",
    description: "24/7 dedicated account management for total peace of mind.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Optimized transforms with fewer calculation points
  const leftImageX = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1.0], 
    ["0%", "-100%", "-100%", "0%"]
  );
  
  const rightImageX = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1.0], 
    ["0%", "100%", "100%", "0%"]
  );
  
  const sideOpacity = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.85, 1.0], 
    [1, 0, 0, 1]
  );

  const videoWidth = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1.0], 
    ["50%", "calc(100% - 3rem)", "calc(100% - 3rem)", "50%"]
  );
  
  const videoHeight = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1.0],
    ["85%", "calc(100% - 3rem)", "calc(100% - 3rem)", "85%"]
  );
  
  const videoBorderRadius = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1.0], 
    ["32px", "20px", "20px", "32px"]
  );

  const contentOpacity = useTransform(
    scrollYProgress, 
    [0.05, 0.2, 0.8, 0.95], 
    [0, 1, 1, 0]
  );

  return (
    <div 
      ref={containerRef} 
      className="relative md:h-[200vh] h-auto bg-white"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-white px-4 md:px-0">
        
        {/* Desktop Version */}
        <div className="hidden md:flex relative w-full h-full items-center justify-center">
          
          {/* Left Image */}
          <motion.div 
            style={{ 
              x: leftImageX, 
              opacity: sideOpacity,
            }}
            className="absolute left-0 w-[24.5%] h-[85%] rounded-[32px] overflow-hidden shadow-2xl z-0 will-change-transform"
          >
            <Image 
              src="https://res.cloudinary.com/dfwty72r9/image/upload/v1769715417/photo-1709147617968-709368900af1_jepyxm.avif"
              alt="Living"
              fill
              className="object-cover"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-[#0B1F3B]/20" />
          </motion.div>

          {/* Center Video */}
          <motion.div 
            style={{ 
              width: videoWidth,
              height: videoHeight,
              borderRadius: videoBorderRadius
            }}
            className="relative overflow-hidden shadow-2xl z-10 bg-[#0B1F3B] will-change-transform"
          >
            <video 
              src="https://res.cloudinary.com/dfwty72r9/video/upload/v1769715839/prop-video_kwwhi6.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              preload="auto"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/90 via-[#0B1F3B]/40 to-transparent z-20 pointer-events-none" />

            {/* Content Overlay */}
            <motion.div 
              style={{ opacity: contentOpacity }}
              className="absolute inset-0 z-30 flex items-center justify-center p-8 will-change-opacity"
            >
              <div className="w-full max-w-5xl flex flex-col items-center">
                
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-[3px] h-10 bg-[#C7A14A] shadow-[0_0_15px_rgba(199,161,74,0.6)]" />
                  <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
                    Why Choose Us
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:gap-4 w-full">
                  {benefits.map((benefit, i) => (
                    <div 
                      key={i}
                      className="bg-[#0B1F3B]/90 backdrop-blur-sm border border-[#C7A14A]/30 p-4 lg:p-5 rounded-xl lg:rounded-2xl flex items-start gap-3 lg:gap-4 shadow-2xl hover:border-[#C7A14A]/50 transition-colors"
                    >
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-[#C7A14A] flex items-center justify-center shadow-lg shrink-0">
                        <benefit.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#0B1F3B]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#C7A14A] font-bold text-xs lg:text-sm uppercase tracking-wider mb-1.5">
                          {benefit.title}
                        </h3>
                        <p className="text-white/95 text-xs lg:text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            style={{ 
              x: rightImageX, 
              opacity: sideOpacity,
            }}
            className="absolute right-0 w-[24.5%] h-[85%] rounded-[32px] overflow-hidden shadow-2xl z-0 will-change-transform"
          >
            <Image 
              src="https://res.cloudinary.com/dfwty72r9/image/upload/v1769715543/photo-1595081611958-6a3b35524cc9_fc4lcq.avif"
              alt="Bedroom"
              fill
              className="object-cover"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-[#0B1F3B]/20" />
          </motion.div>
        </div>

        {/* Mobile Version */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:hidden relative w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full h-[85%] rounded-2xl overflow-hidden shadow-2xl bg-[#0B1F3B]">
            <video 
              src="https://res.cloudinary.com/dfwty72r9/video/upload/v1769715839/prop-video_kwwhi6.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              preload="metadata"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/95 via-[#0B1F3B]/50 to-transparent z-20 pointer-events-none" />

            <div className="absolute inset-0 z-30 flex items-center justify-center p-5 sm:p-6">
              <div className="w-full max-w-md flex flex-col items-center">
                
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-[3px] h-8 bg-[#C7A14A] shadow-[0_0_15px_rgba(199,161,74,0.6)]" />
                  <h2 className="text-[26px] sm:text-3xl font-bold text-white tracking-tight drop-shadow-lg">
                    Why Choose Us
                  </h2>
                </div>

                <div className="w-full space-y-3">
                  {benefits.map((benefit, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="bg-[#0B1F3B]/90 backdrop-blur-sm border border-[#C7A14A]/30 p-4 rounded-xl flex items-start gap-3 shadow-xl"
                    >
                      <div className="w-11 h-11 rounded-lg bg-[#C7A14A] flex items-center justify-center shadow-lg shrink-0">
                        <benefit.icon className="w-5 h-5 text-[#0B1F3B]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#C7A14A] font-bold text-[11px] sm:text-xs uppercase tracking-widest mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-white/95 text-[13px] sm:text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}