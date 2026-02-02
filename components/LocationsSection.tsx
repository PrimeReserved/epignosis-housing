'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LocationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={containerRef} className="relative w-full h-[60vh] overflow-hidden">
      {/* Parallax Map */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3789293.3877556026!2d-3.435973!3d54.7023545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1234567890&style=feature:all|element:geometry|color:0xf4f4f4&style=feature:water|element:geometry|color:0x0B1F3B&style=feature:landscape|element:geometry|color:0xe8e5ff&style=feature:poi|element:geometry|color:0xdcd9f0&style=feature:road|element:geometry|color:0xffffff"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="United Kingdom Map"
        />
        
        {/* Subtle primary color overlay */}
        <div className="absolute inset-0 bg-[#0B1F3B]/25 pointer-events-none" />
      </motion.div>
    </section>
  );
}