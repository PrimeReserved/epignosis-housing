"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PropertyInquiryModal from "./PropertyInquiryModal";
import { Send } from "lucide-react";

export default function ContactHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative pt-48 pb-32 px-6 bg-navy overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -mr-96 -mt-96" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/3 rounded-full blur-[150px] -ml-96 -mb-96" />

      <div className="max-w-[90vw] xl:max-w-[80vw] mx-auto relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px]">
              Connect With Epignosis
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold mb-12 leading-[0.9] tracking-tighter">
            Let's Start a <br />
            <span className="text-gold italic pr-4">Conversation.</span>
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-12 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="E.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold transition-all placeholder:text-white/10 text-lg md:text-xl font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold transition-all placeholder:text-white/10 text-lg md:text-xl font-medium"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] ml-1">Short Message</label>
              <textarea
                name="message"
                required
                rows={2}
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-gold transition-all resize-none placeholder:text-white/10 text-lg md:text-xl font-medium"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-gold text-navy font-extrabold px-12 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all shadow-2xl shadow-gold/10 group uppercase tracking-widest text-sm"
              >
                Proceed
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] max-w-[200px] leading-relaxed text-center md:text-left">
                * Select between Email or WhatsApp on the next step
              </p>
            </div>
          </form>
        </motion.div>
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