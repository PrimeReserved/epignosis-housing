"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, Mail, MessageCircle, ChevronRight } from "lucide-react";
import { UK_COUNTRIES, WHATSAPP_NUMBER } from "@/constants/data";
import PropertyInquiryModal from "./PropertyInquiryModal";

const RENTAL_TERMS = ["1-6 Months", "6-12 Months", "1-5 Years", "5+ Years"];

const INITIAL_FORM_DATA = {
  country: "",
  exactLocation: "",
  rentalTerm: "",
};

export default function PropertyInquirySection() {
  const [step, setStep] = useState<"search" | "inquiry">("search");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryMethod, setInquiryMethod] = useState<"email" | "whatsapp">("email");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  // Reset form when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      setFormData(INITIAL_FORM_DATA);
      setStep("search");
      setErrors({});
    }
  }, [isModalOpen]);

  const handleNextStep = () => {
    const newErrors = {
      country: !formData.country,
      exactLocation: !formData.exactLocation,
      rentalTerm: !formData.rentalTerm,
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      setStep("inquiry");
    }
  };

  /* Removed handleWhatsAppDirect as we are reverting to form flow */

  const handleInquiryClick = (method: "email" | "whatsapp") => {
    setInquiryMethod(method);
    setIsModalOpen(true);
  };

  return (
    <section className="relative z-20 -mt-10 md:-mt-14 w-full max-w-[90vw] xl:max-w-[80vw] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl rounded-3xl md:rounded-[40px] shadow-2xl overflow-hidden border border-navy/5 bg-white"
      >
        {/* Header Bar — replaces the old tab bar */}
        <div className="flex bg-navy/50 backdrop-blur-xl border-b border-white/10">
          <div className="flex-1 py-4 md:py-6 px-6 md:px-10 text-left text-xs font-bold uppercase tracking-[0.2em] text-white">
            <span className="relative z-10">Tell Us What You Need</span>
          </div>
        </div>

        <div className="p-6 md:p-10 relative bg-white">
          {/* UK indicator */}
          <div className="hidden md:flex absolute top-4 right-8 items-center gap-2 text-navy/40 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Globe size={12} className="text-gold" /> Only United Kingdom
          </div>

          <AnimatePresence mode="wait">
            {step === "search" ? (
              <motion.div
                key="search"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                className="space-y-6 pt-2"
              >
                <div className="flex flex-row flex-wrap items-end gap-4 md:gap-6 text-navy">
                  {/* Country Selector */}
                  <div className="flex flex-col gap-1.5 flex-1 min-w-[140px]">
                    <div className="space-y-1">
                      <label className="text-navy/40 text-[10px] font-bold uppercase tracking-widest ml-4">
                        Country (UK)
                      </label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
                        <select
                          value={formData.country}
                          onChange={(e) => {
                            setFormData({ ...formData, country: e.target.value });
                            if (e.target.value) setErrors((prev) => ({ ...prev, country: false }));
                          }}
                          className={`w-full bg-accent/30 border-b-2 ${errors.country ? "border-gold" : "border-transparent"} rounded-xl md:rounded-2xl pl-11 pr-4 py-3.5 text-navy focus:outline-none focus:bg-accent/50 appearance-none cursor-pointer font-medium text-sm transition-all`}
                        >
                          <option value="">Select country</option>
                          {UK_COUNTRIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        {errors.country && (
                          <span className="absolute -bottom-5 left-4 text-[9px] text-gold font-bold uppercase tracking-tighter">
                            Please select a country
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Exact Location */}
                  <div className="flex flex-col gap-1.5 flex-[1.5] min-w-[180px]">
                    <div className="space-y-1 relative">
                      <label className="text-navy/40 text-[10px] font-bold uppercase tracking-widest ml-4">
                        Exact Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. London, Manchester..."
                        value={formData.exactLocation}
                        onChange={(e) => {
                          setFormData({ ...formData, exactLocation: e.target.value });
                          if (e.target.value) setErrors((prev) => ({ ...prev, exactLocation: false }));
                        }}
                        className={`w-full bg-accent/30 border-b-2 ${errors.exactLocation ? "border-gold" : "border-transparent"} rounded-xl md:rounded-2xl px-6 py-3.5 text-navy placeholder:text-navy/20 focus:outline-none focus:bg-accent/50 font-medium text-sm transition-all`}
                      />
                      {errors.exactLocation && (
                        <span className="absolute -bottom-5 left-6 text-[9px] text-gold font-bold uppercase tracking-tighter w-max">
                          Please enter a location
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Rental Term */}
                  <div className="flex flex-col gap-1.5 flex-1 min-w-[140px]">
                    <div className="space-y-1">
                      <label className="text-navy/40 text-[10px] font-bold uppercase tracking-widest ml-4">
                        Rental Term
                      </label>
                      <div className="relative">
                        <select
                          value={formData.rentalTerm}
                          onChange={(e) => {
                            setFormData({ ...formData, rentalTerm: e.target.value });
                            if (e.target.value) setErrors((prev) => ({ ...prev, rentalTerm: false }));
                          }}
                          className={`w-full bg-accent/30 border-b-2 ${errors.rentalTerm ? "border-gold" : "border-transparent"} rounded-xl md:rounded-2xl px-6 py-3.5 text-navy focus:outline-none focus:bg-accent/50 appearance-none cursor-pointer font-medium text-sm transition-all`}
                        >
                          <option value="">Select rental term</option>
                          {RENTAL_TERMS.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        {errors.rentalTerm && (
                          <span className="absolute -bottom-5 left-6 text-[9px] text-gold font-bold uppercase tracking-tighter">
                            Specify your duration
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Next Button */}
                  <div className="flex-shrink-0 mb-1 lg:mb-0">
                    <button
                      onClick={handleNextStep}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold flex items-center justify-center text-navy hover:scale-110 transition-transform shadow-xl shadow-gold/20"
                    >
                      <ChevronRight size={28} className="md:w-8 md:h-8" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="inquiry"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="flex flex-col items-center text-center py-4 text-navy"
              >
                <h4 className="text-xl md:text-2xl font-bold mb-2">
                  Submit Inquiry | Select your platform
                </h4>
                <p className="text-navy/60 text-sm md:text-base mb-2 max-w-lg">
                  Choose how you'd like us to reach out.
                </p>
                <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-8">
                  * You'll fill in more property-specific details on the next screen
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <button
                    onClick={() => handleInquiryClick("email")}
                    className="flex items-center gap-3 bg-navy text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:bg-gold hover:text-navy transition-all shadow-xl shadow-navy/5"
                  >
                    <Mail size={18} /> Email
                  </button>
                  <button
                    onClick={() => handleInquiryClick("whatsapp")}
                    className="flex items-center gap-3 bg-gold text-navy px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:scale-105 transition-transform shadow-xl shadow-gold/10"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </button>
                  <button
                    onClick={() => setStep("search")}
                    className="text-navy/40 hover:text-navy transition-colors text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold"
                  >
                    Back
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <PropertyInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        method={inquiryMethod}
        type="rent"
        isMandatoryTerm={true}
        initialData={formData}
      />
    </section>
  );
}