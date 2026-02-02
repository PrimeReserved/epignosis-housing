"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { SITE_NAME, NAV_LINKS } from "@/constants/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pages with White/Light headers where we need Navy text immediately
  const isLightHeader = ["/about", "/properties"].includes(pathname);

  // Default to White text (for Dark headers like Home, Services, Contact) unless scrolled or on a light header page
  const textColor = isScrolled || isLightHeader ? "text-navy" : "text-white";
  const logoColor = isScrolled || isLightHeader ? "text-gold" : "text-white";
  const subTitleColor = isScrolled || isLightHeader ? "text-navy/80" : "text-white/60";


  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[90vw] xl:max-w-[80vw] mx-auto flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start space-x-2">
          <span className={cn(
            "text-2xl font-bold tracking-tight transition-colors",
            logoColor
          )}>
            EPIGNOSIS
          </span>
          <span className={cn(
            "text-[10px] font-sans tracking-[0.3em] uppercase -mt-1 transition-colors",
             subTitleColor
          )}>
            Housing Co
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-bold tracking-widest uppercase transition-colors hover:text-gold",
                pathname === link.href
                  ? "text-gold"
                  : textColor
              )}
            >
              {link.name}
            </Link>
          ))}


          <Link
            href="/contact"
            className="bg-gold text-navy px-6 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>


        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden transition-colors relative z-50", isOpen ? "text-white" : textColor)}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav - Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center space-y-8 p-6 md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-bold tracking-wider",
                    pathname === link.href ? "text-gold" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-gold text-navy px-12 py-4 rounded-xl text-center font-bold text-xl mt-4"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Logo in mobile menu */}
            <Link href="/" onClick={() => setIsOpen(false)} className="absolute bottom-12 flex flex-col items-center opacity-30">
              <span className="text-white text-3xl font-bold tracking-tight">EPIGNOSIS</span>
              <span className="text-white text-[10px] font-sans tracking-[0.3em] uppercase -mt-1">Housing Co</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

