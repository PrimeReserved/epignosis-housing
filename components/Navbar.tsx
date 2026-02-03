"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "About Us", href: "/about" },
  { name: "View Listings", href: "/properties" },
  { name: "Services", href: "/services", isHashLink: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle pending scroll after navigation
  useEffect(() => {
    if (pendingScroll && pathname === '/') {
      const scrollToElement = () => {
        const element = document.getElementById(pendingScroll);
        if (element) {
          // Wait a bit for the page to fully render
          setTimeout(() => {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
            setPendingScroll(null);
          }, 100);
        } else {
          // Retry if element not found yet
          setTimeout(scrollToElement, 100);
        }
      };
      
      scrollToElement();
    }
  }, [pathname, pendingScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Control Tawk widget visibility based on mobile menu state
  useEffect(() => {
    const hideTawkWidget = () => {
      // Try multiple ways to hide the Tawk widget
      const iframe = document.querySelector('iframe[title*="chat" i]');
      if (iframe) {
        const container = iframe.closest('div[style*="position"]') as HTMLElement;
        if (container) {
          container.style.setProperty('display', 'none', 'important');
          container.style.setProperty('visibility', 'hidden', 'important');
          container.style.setProperty('opacity', '0', 'important');
          container.style.setProperty('pointer-events', 'none', 'important');
        }
      }

      // Also try to hide via Tawk API
      const tawkAPI = (window as any).Tawk_API;
      if (tawkAPI?.hideWidget) {
        tawkAPI.hideWidget();
      }
    };

    const showTawkWidget = () => {
      const iframe = document.querySelector('iframe[title*="chat" i]');
      if (iframe) {
        const container = iframe.closest('div[style*="position"]') as HTMLElement;
        if (container) {
          container.style.removeProperty('display');
          container.style.removeProperty('visibility');
          container.style.removeProperty('opacity');
          container.style.removeProperty('pointer-events');
        }
      }

      // Also try to show via Tawk API
      const tawkAPI = (window as any).Tawk_API;
      if (tawkAPI?.showWidget) {
        tawkAPI.showWidget();
      }
    };

    if (isOpen && window.innerWidth < 768) {
      // Hide widget when menu opens on mobile
      hideTawkWidget();
      // Keep checking in case Tawk loads after menu opens
      const interval = setInterval(hideTawkWidget, 100);
      return () => clearInterval(interval);
    } else {
      // Show widget when menu closes or on desktop
      showTawkWidget();
    }
  }, [isOpen]);

  // Pages with White/Light headers where we need Navy text immediately
  const isLightHeader = ["/about", "/properties"].includes(pathname);

  // Default to White text (for Dark headers like Home, Services, Contact) unless scrolled or on a light header page
  const textColor = isScrolled || isLightHeader ? "text-navy" : "text-white";
  const logoColor = isScrolled || isLightHeader ? "text-gold" : "text-white";
  const subTitleColor = isScrolled || isLightHeader ? "text-navy/80" : "text-white/60";

  // Smooth scroll handler for hash links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHashLink?: boolean) => {
    if (isHashLink) {
      e.preventDefault();
      setIsOpen(false);
      
      // Extract the section ID from href (e.g., "/services" -> "services")
      const sectionId = href.replace('/', '');
      
      // If we're not on homepage, navigate to home first then scroll
      if (pathname !== '/') {
        setPendingScroll(sectionId);
        router.push('/');
      } else {
        // Already on homepage, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
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
            {NAV_ITEMS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isHashLink)}
                className={cn(
                  "text-xs font-bold tracking-widest uppercase transition-colors hover:text-gold cursor-pointer",
                  (pathname === link.href || (link.isHashLink && pathname === '/'))
                    ? "text-gold"
                    : textColor
                )}
              >
                {link.name}
              </a>
            ))}

            <Link
              href="/contact"
              className="bg-gold text-navy px-6 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105 hover:shadow-lg hover:shadow-gold/30"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle - Shows X when menu is open */}
          <button
            className={cn(
              "md:hidden transition-all relative z-[60] w-10 h-10 flex items-center justify-center",
              isOpen ? "text-white" : textColor
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Nav - Fixed Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - clicking closes menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[45] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[85vw] max-w-md bg-gradient-to-br from-navy via-navy to-navy/95 z-[50] md:hidden shadow-2xl overflow-hidden"
            >
              {/* Close X Button - Top Right Corner */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all hover:rotate-90 duration-300"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={2.5} />
              </button>

              {/* Animated Background Glow */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-32 -right-32 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
                />
              </div>

              {/* Menu Content Container - with proper padding and spacing */}
              <div className="relative h-full flex flex-col pt-24 pb-8 px-8">
                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col justify-center space-y-8 -mt-8">
                  {NAV_ITEMS.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href, link.isHashLink)}
                        className={cn(
                          "block text-4xl font-bold tracking-tight transition-all hover:translate-x-2 cursor-pointer",
                          (pathname === link.href || (link.isHashLink && pathname === '/'))
                            ? "text-gold" 
                            : "text-white hover:text-gold"
                        )}
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Us Button - At Bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-gold to-yellow-500 text-navy px-8 py-5 rounded-2xl text-center font-black text-lg uppercase tracking-wider shadow-xl shadow-gold/20 hover:shadow-2xl hover:shadow-gold/40 transition-all relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">Contact Us</span>
                  </Link>
                </motion.div>

                {/* Logo Watermark */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 flex flex-col items-center opacity-20"
                >
                  <span className="text-white text-xl font-bold tracking-tight">EPIGNOSIS</span>
                  <span className="text-white text-[8px] font-sans tracking-[0.3em] uppercase -mt-1">
                    Housing Co
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}