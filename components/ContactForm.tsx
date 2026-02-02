"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, ArrowRightSquare } from "lucide-react";
import { EMAIL } from "@/constants/data";
import PropertyInquiryModal from "./PropertyInquiryModal";

export default function ContactForm() {
  const [inquiryMethod, setInquiryMethod] = useState<"email" | "whatsapp" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: "",
    rentalTerm: "1-6 Months",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden" id="contact">
      {/* Background Subtle Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none z-0">
        <span className="text-[35vw] font-bold uppercase leading-none tracking-tighter">
          INQUIRE
        </span>
      </div>

      <div className="max-w-[90vw] xl:max-w-[80vw] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* Content Side */}
          <div className="lg:col-span-5">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block bg-gold/10 px-4 py-2 rounded-full w-fit">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-8xl font-bold text-navy mb-10 leading-[0.9] tracking-tighter">
              Ready to <br />
              <span className="text-gold italic pr-4">Relocate?</span>
            </h2>
            <p className="text-xl text-navy/60 mb-16 leading-relaxed">
              Fill in your details and choose how you'd like to send your inquiry. 
              Our team will assist you with the best premium housing options in the UK.
            </p>

            <div className="space-y-10 group">
              <div className="flex items-center gap-8 group/item">
                <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center shrink-0 group-hover/item:bg-gold transition-all duration-500">
                  <Mail className="text-gold group-hover/item:text-navy" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xl uppercase tracking-widest mb-1">Email Concierge</h4>
                  <p className="text-navy/50 text-lg leading-none">{EMAIL}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group/item">
                <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center shrink-0 group-hover/item:bg-gold transition-all duration-500">
                  <Phone className="text-gold group-hover/item:text-navy" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xl uppercase tracking-widest mb-1">Direct Hotline</h4>
                  <p className="text-navy/50 text-lg leading-none">+44 000 000 0000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-navy p-12 md:p-20 rounded-[60px] shadow-[0_50px_100px_rgba(11,31,59,0.3)] relative overflow-hidden"
          >
            {/* Inner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-5 blur-[100px] -mr-32 -mt-32" />
            
            <form className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] ml-4">Full Residence Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all placeholder:text-white/20"
                    placeholder="E.g. John Doe"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] ml-4">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all placeholder:text-white/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] ml-4">Contact Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all placeholder:text-white/20"
                    placeholder="+44 ..."
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] ml-4">Rental duration</label>
                  <select 
                    name="rentalTerm"
                    value={formData.rentalTerm}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white/60 focus:outline-none focus:ring-2 focus:ring-gold appearance-none cursor-pointer"
                  >
                    <option className="bg-navy">1-6 Months</option>
                    <option className="bg-navy">6-12 Months</option>
                    <option className="bg-navy">1-5 Years</option>
                    <option className="bg-navy">5+ Years</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <button
                  type="button"
                  onClick={() => setInquiryMethod("email")}
                  className="bg-gold text-navy font-bold py-6 rounded-3xl flex items-center justify-center gap-3 hover:bg-white transition-all duration-500 shadow-xl shadow-gold/20"
                >
                  <Mail size={22} />
                  Email Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryMethod("whatsapp")}
                  className="bg-white/10 text-white border border-white/10 font-bold py-6 rounded-3xl flex items-center justify-center gap-3 hover:bg-white hover:text-navy transition-all duration-500 shadow-xl shadow-black/20"
                >
                  <Phone size={22} />
                  WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <PropertyInquiryModal
        isOpen={!!inquiryMethod}
        onClose={() => setInquiryMethod(null)}
        method={inquiryMethod || "email"}
      />
    </section>
  );
}
