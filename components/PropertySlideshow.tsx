"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertySlideshowProps {
  images: string[];
  className?: string;
}

export default function PropertySlideshow({ images, className }: PropertySlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleManualControl = (action: () => void) => {
    setIsAutoPlaying(false);
    action();
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  const leftThumbs = images.slice(0, 4);
  const rightThumbs = images.slice(4, 7);

  return (
    <>
      <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[75vh] w-full", className)}>
        
        {/* LEFT COLUMN (4 Thumbs) */}
        <div className="hidden lg:flex lg:col-span-2 flex-col gap-4 h-full">
            {leftThumbs.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleManualControl(() => setCurrentIndex(idx))}
                className={cn(
                  "relative flex-1 w-full rounded-2xl overflow-hidden border-2 transition-all shadow-sm",
                  currentIndex === idx ? "border-gold scale-105 z-10" : "border-transparent opacity-70 hover:opacity-100"
                )}
              >
                <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
              </button>
            ))}
        </div>

        {/* MAIN IMAGE (Center) */}
        <div 
          className="col-span-1 lg:col-span-8 relative h-[420px] sm:h-[480px] lg:h-full w-full rounded-3xl overflow-hidden group bg-navy flex items-center justify-center"
          style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}
        >

            {/* Watermark */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 select-none">
              <span className="text-white/5 font-bold text-5xl md:text-7xl lg:text-8xl uppercase tracking-widest text-center leading-none">
                Epignosis
              </span>
              <span className="text-white/5 font-bold text-5xl md:text-7xl lg:text-8xl uppercase tracking-widest text-center leading-none mt-2">
                Housing
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 z-10"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Property image ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
              <button
                onClick={() => handleManualControl(prevSlide)}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-navy transition-all pointer-events-auto transform active:scale-95"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => handleManualControl(nextSlide)}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-navy transition-all pointer-events-auto transform active:scale-95"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <button
              onClick={() => setIsZoomed(true)}
              className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-navy shadow-lg hover:bg-white transition-all z-20"
            >
              <Maximize2 size={20} />
            </button>
        </div>

        {/* RIGHT COLUMN (3 Thumbs) */}
        <div className="hidden lg:flex lg:col-span-2 flex-col gap-4 h-full">
            {rightThumbs.map((img, idx) => (
              <button
                key={idx + 4}
                onClick={() => handleManualControl(() => setCurrentIndex(idx + 4))}
                className={cn(
                  "relative flex-1 w-full rounded-2xl overflow-hidden border-2 transition-all shadow-sm",
                  currentIndex === (idx + 4) ? "border-gold scale-105 z-10" : "border-transparent opacity-70 hover:opacity-100"
                )}
              >
                 <Image src={img} alt={`Thumb ${idx + 4}`} fill className="object-cover" />
              </button>
            ))}
        </div>

        {/* MOBILE OVERFLOW THUMBS (Visible only on < lg) */}
        <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 custom-scrollbar col-span-1 h-24">
             {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleManualControl(() => setCurrentIndex(idx))}
                className={cn(
                  "relative flex-shrink-0 w-24 h-full rounded-xl overflow-hidden border-2 transition-all",
                  currentIndex === idx ? "border-gold scale-105" : "border-transparent opacity-70"
                )}
              >
                 <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
              </button>
            ))}
        </div>
      </div>

      {/* Fullscreen Zoom */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-accent/90 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white flex items-center justify-center text-navy shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-50 hover:scale-110 transition-transform"
            >
              <X size={24} />
            </button>

            {/* Navigation in Zoom */}
            <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 flex justify-between z-40 pointer-events-none">
              <button
                onClick={(e) => { e.stopPropagation(); handleManualControl(prevSlide); }}
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-navy shadow-[0_10px_30px_rgba(0,0,0,0.1)] pointer-events-auto hover:scale-110 active:scale-95 transition-all"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleManualControl(nextSlide); }}
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-navy shadow-[0_10px_30px_rgba(0,0,0,0.1)] pointer-events-auto hover:scale-110 active:scale-95 transition-all"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            <div 
              className="relative w-full h-full max-w-6xl max-h-[85vh] rounded-3xl overflow-hidden bg-navy flex items-center justify-center"
              style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}
            >

              <Image
                src={images[currentIndex]}
                alt="Zoomed"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}