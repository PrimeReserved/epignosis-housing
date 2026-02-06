import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, EMAIL, NAV_LINKS, PHONE_NUMBER, INSTAGRAM_URL } from "@/constants/data";
import { Instagram, Mail, Phone } from "lucide-react";

const LOGO_URL = "https://res.cloudinary.com/dfwty72r9/image/upload/v1770105452/Epignosis_Housing_Co_Logo_-_jqvggd.png";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 px-6">
      <div className="max-w-[90vw] xl:max-w-[80vw] mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Left: Brand Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src={LOGO_URL}
                alt="Epignosis Housing Co"
                width={160}
                height={100}
                className="w-auto h-20"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Refining the corporate relocation experience with premium long-term accommodations across the United Kingdom.
            </p>
          </div>

          {/* Center: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gold uppercase tracking-[0.25em]">Get in touch</h4>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${EMAIL}`} className="group flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-all">
                  <Mail size={16} />
                </div>
                <span>{EMAIL}</span>
              </a>
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="group flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-all">
                  <Phone size={16} />
                </div>
                <span>{PHONE_NUMBER}</span>
              </a>
            </div>
          </div>

          {/* Right: Quick Links & Socials */}
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex flex-col md:items-end gap-3">
              <h4 className="text-xs font-bold text-gold uppercase tracking-[0.25em]">Quick Links</h4>
              <nav className="flex flex-col md:items-end gap-2">
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                    {link.name}
                  </Link>
                ))}
                <Link href="/contact" className="text-sm text-white/70 hover:text-gold transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href={INSTAGRAM_URL} target="_blank" className="text-white/50 hover:text-gold transition-all hover:scale-110">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

        </div>

        {/* Horizontal Rule */}
        <hr className="border-white/10 mb-6" />

        {/* Copyright - Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <span className="text-xs text-white/30">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </span>
          <span className="text-xs text-white/20 uppercase tracking-wider">
            Excellence in Relocation
          </span>
        </div>

      </div>
    </footer>
  );
}