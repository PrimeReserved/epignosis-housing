"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropertyInquiryModal from "./PropertyInquiryModal";
import { Send, Globe2, Phone, Mail, MapPin } from "lucide-react";
import { UK_COUNTRIES } from "@/constants/data";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  mobile: "",
  country: "England",
  message: ""
};

export default function ContactHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  // Reset form when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      setFormData(INITIAL_FORM_DATA);
    }
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-top"
            style={{ backgroundImage: 'url(https://res.cloudinary.com/dfwty72r9/image/upload/v1769715417/photo-1709147617968-709368900af1_jepyxm.avif)' }}
          />
          {/* Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy/60" />
        </div>

        <div className="max-w-[100vw] xl:max-w-[80vw] mx-auto relative z-10 text-white w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] w-16 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">
                Connect With Epignosis
              </span>
              <div className="h-[1px] w-16 bg-gold" />
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter">
              Let's Start a <br />
              <span className="text-gold italic">Conversation.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12">
              Our team is at your side to navigate your project's specific housing requirements with precision and ease.
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm md:text-base">
              <a href="mailto:info@epignosishousing.com" className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors group">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>info@epignosishousing.com</span>
              </a>
              <a href="tel:+447123456789" className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors group">
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span>+44 712 345 6789</span>
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={18} />
                <span>United Kingdom</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[90vw] xl:max-w-[80vw] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Form Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-gold" />
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">
                  Get In Touch
                </span>
                <div className="h-[2px] w-12 bg-gold" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-navy mb-4 tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-lg text-navy/60 max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            {/* The Form - Elevated Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white rounded-[48px] shadow-2xl border-2 border-gold/10 overflow-hidden"
            >
              {/* Decorative gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-navy/5 pointer-events-none" />
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-navy/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 p-8 md:p-16">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="space-y-3"
                    >
                      <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="E.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 border-2 border-navy/10 rounded-2xl px-6 py-5 text-navy font-medium focus:outline-none focus:border-gold focus:bg-white transition-all placeholder:text-navy/30 hover:border-navy/20"
                      />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 }}
                      className="space-y-3"
                    >
                      <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 border-2 border-navy/10 rounded-2xl px-6 py-5 text-navy font-medium focus:outline-none focus:border-gold focus:bg-white transition-all placeholder:text-navy/30 hover:border-navy/20"
                      />
                    </motion.div>
                  </div>

                  {/* Mobile and Country Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="space-y-3"
                    >
                      <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1 flex items-center gap-2">
                        <Phone size={12} className="text-gold" />
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        placeholder="+44 ..."
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 border-2 border-navy/10 rounded-2xl px-6 py-5 text-navy font-medium focus:outline-none focus:border-gold focus:bg-white transition-all placeholder:text-navy/30 hover:border-navy/20"
                      />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.45 }}
                      className="space-y-3"
                    >
                      <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1 flex items-center gap-2">
                        <Globe2 size={12} className="text-gold" />
                        Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 border-2 border-navy/10 rounded-2xl px-6 py-5 text-navy font-medium focus:outline-none focus:border-gold focus:bg-white transition-all appearance-none cursor-pointer hover:border-navy/20"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23152238' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1.5rem center'
                        }}
                      >
                        {UK_COUNTRIES.map(c => <option key={c} value={c} className="bg-white text-navy">{c}</option>)}
                      </select>
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3"
                  >
                    <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="How can we help you today? Tell us about your housing needs..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50/50 border-2 border-navy/10 rounded-2xl px-6 py-5 text-navy font-medium focus:outline-none focus:border-gold focus:bg-white transition-all resize-none placeholder:text-navy/30 hover:border-navy/20"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold to-yellow-500 text-navy font-black py-6 rounded-2xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-gold/30 transition-all group uppercase tracking-widest text-sm md:text-base relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">Start Your Inquiry</span>
                    <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>

                  {/* Trust Indicator */}
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-sm text-navy/50 mt-6"
                  >
                    🔒 Your information is secure and will never be shared with third parties
                  </motion.p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PropertyInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="general"
        isMandatoryTerm={false}
        initialData={formData}
      />
    </>
  );
}