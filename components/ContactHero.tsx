"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PropertyInquiryModal from "./PropertyInquiryModal";
import { Send, Globe2, Phone } from "lucide-react";
import { UK_COUNTRIES } from "@/constants/data";

export default function ContactHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "England",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://res.cloudinary.com/dfwty72r9/image/upload/v1769715543/photo-1595081611958-6a3b35524cc9_fc4lcq.avif)' }}
        />
        {/* Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-navy/40" />
      </div>

      <div className="max-w-[100vw] xl:max-w-[80vw] mx-auto relative z-10 text-white w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px]">
                Connect With Epignosis
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[0.9] tracking-tighter">
              Let's Start a <br />
              <span className="text-gold italic pr-4">Conversation.</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-8">
              Our team is at your side to navigate your project's specific housing requirements with precision and ease.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle light flair */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-700" />
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gold uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="E.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gold uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gold uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Phone size={10} /> Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="+44 ..."
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gold uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Globe2 size={10} /> Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all appearance-none cursor-pointer"
                  >
                    {UK_COUNTRIES.map(c => <option key={c} value={c} className="bg-navy text-white">{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gold uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all resize-none placeholder:text-white/20"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-navy font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shadow-gold/20 group uppercase tracking-widest text-sm"
              >
                Start Inquiry
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <PropertyInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="general"
        isMandatoryTerm={false}
        initialData={formData}
      />
    </section>
  );
}