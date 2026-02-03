"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
];

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center overflow-hidden bg-navy pt-32 pb-16">
      {/* Background Image with Optimized Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dfwty72r9/image/upload/v1769691903/photo-1721815693498-cc28507c0ba2_w5zrzo.avif"
          alt="Modern Architecture"
          fill
          className="object-cover object-top transition-transform duration-[20s] hover:scale-110"
          priority
        />
        {/* Localized dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy/60 lg:bg-gradient-to-r lg:from-navy/90 lg:via-navy/40 lg:to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[90vw] xl:max-w-[80vw] mx-auto py-20 lg:py-0">
        <div className="lg:max-w-4xl">
          {/* Trusted Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="flex -space-x-3">
              {AVATARS.map((url, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg"
                >
                  <img src={url} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-0.5 text-gold mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">
                Trusted by 1000+ happy clients
              </p>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            Long-Term Stays. <span className="italic font-normal text-gold">Built</span> <br />
            for Real Life and Real Work
          </motion.h1>

          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed"
            >
              We believe long-term stays should feel like home. Epignosis Housing Co specializes 
              in premium housing solutions for project professionals and relocating families 
              across the United Kingdom.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex-shrink-0"
            >
              <Link
                href="/properties"
                className="group inline-flex bg-gold text-navy px-10 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gold/30 items-center justify-center gap-3"
              >
                Explore Listings
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}