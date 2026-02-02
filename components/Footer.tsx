import Link from "next/link";
import { SITE_NAME, EMAIL, NAV_LINKS, WHATSAPP_NUMBER } from "@/constants/data";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Brand Identity */}
        <div className="text-center md:text-left space-y-5">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold text-gold">EPIGNOSIS</span>
            <span className="block text-[10px] font-sans tracking-[0.3em] uppercase text-white/60 -mt-1">Housing Co</span>
          </Link>
          <p className="text-white/60 text-sm max-w-xs mx-auto md:mx-0">
            Premium long-term accommodation for professionals across the United Kingdom.
          </p>
          <div className="flex flex-col gap-1 text-xs font-medium text-white/40 tracking-wider">
            <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors">{EMAIL}</a>
            <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-gold transition-colors">{WHATSAPP_NUMBER}</a>
          </div>
        </div>

        {/* Right: Modern Links & Socials */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-bold text-white/80 hover:text-gold transition-colors tracking-wide">
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="text-sm font-bold text-white/80 hover:text-gold transition-colors tracking-wide">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={18} /></Link>
            <Link href="#" className="text-white/40 hover:text-gold transition-colors"><Linkedin size={18} /></Link>
            <Link href="#" className="text-white/40 hover:text-gold transition-colors"><Facebook size={18} /></Link>
            <span className="text-white/20">|</span>
            <span className="text-xs text-white/40">© {new Date().getFullYear()} {SITE_NAME}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
