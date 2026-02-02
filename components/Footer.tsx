import Link from "next/link";
import { SITE_NAME, EMAIL, NAV_LINKS, WHATSAPP_NUMBER } from "@/constants/data";
import { Instagram, Linkedin, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 justify-between items-start gap-12">
        
        {/* Left: Brand Identity */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-bold text-gold tracking-tighter">EPIGNOSIS</span>
            <span className="block text-[10px] font-sans tracking-[0.4em] uppercase text-white/40 -mt-1 font-black">Housing Co</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Refining the corporate relocation experience with premium long-term accommodations across the United Kingdom.
          </p>
        </div>

        {/* Center: Contact Details */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold text-gold uppercase tracking-[0.3em]">Direct Contact</h4>
          <div className="flex flex-col gap-4">
            <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4 text-sm font-medium text-white/70 hover:text-gold transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Email Us</span>
                {EMAIL}
              </div>
            </a>
            <a href={`tel:${WHATSAPP_NUMBER}`} className="group flex items-center gap-4 text-sm font-medium text-white/70 hover:text-gold transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Call Us</span>
                {WHATSAPP_NUMBER}
              </div>
            </a>
          </div>
        </div>

        {/* Right: Quick Links & Socials */}
        <div className="flex flex-col md:items-end gap-8">
          <div className="flex flex-col md:items-end gap-4">
            <h4 className="text-xs font-bold text-gold uppercase tracking-[0.3em]">Navigation</h4>
            <nav className="flex flex-wrap gap-6 md:gap-8 justify-start md:justify-end">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-bold text-white/80 hover:text-gold transition-colors tracking-wide">
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="text-sm font-bold text-white/80 hover:text-gold transition-colors tracking-wide">
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="flex flex-col md:items-end gap-6 pt-4 border-t border-white/5 w-full">
            <div className="flex items-center gap-6">
              <Link href="#" className="text-white/40 hover:text-gold transition-all hover:scale-110"><Instagram size={20} /></Link>
              <Link href="#" className="text-white/40 hover:text-gold transition-all hover:scale-110"><Linkedin size={20} /></Link>
              <Link href="#" className="text-white/40 hover:text-gold transition-all hover:scale-110"><Facebook size={20} /></Link>
            </div>
            <div className="flex flex-col md:items-end gap-1">
              <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">© {new Date().getFullYear()} {SITE_NAME}</span>
              <span className="text-[9px] text-white/10 uppercase tracking-[0.2em]">Excellence in Relocation</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
