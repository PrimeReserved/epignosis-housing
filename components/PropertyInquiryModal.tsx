"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, MessageCircle, MapPin, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { PROPERTY_IMAGES, EMAIL, WHATSAPP_NUMBER, UK_COUNTRIES } from "@/constants/data";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  method?: "email" | "whatsapp"; // Now optional
  type?: "rent" | "buy" | "sell" | "general";
  isMandatoryTerm?: boolean;
  initialData?: {
    name?: string;
    email?: string;
    mobile?: string;
    whatsappForm?: string;
    country?: string;
    exactLocation?: string;
    rentalTerm?: string;
    message?: string;
  };
}

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  mobile: "",
  whatsappForm: "",
  rentalTerm: "",
  country: "England",
  exactLocation: "",
  message: "",
  monthlyIncome: "",
  bedrooms: "",
  bathrooms: "",
  additionalInfo: "",
};

export default function PropertyInquiryModal({ 
  isOpen, 
  onClose, 
  method: initialMethod, 
  type = "rent", 
  isMandatoryTerm = true,
  initialData 
}: InquiryModalProps) {
  const [step, setStep] = useState<"selection" | "form">(initialMethod ? "form" : "selection");
  const [method, setMethod] = useState<"email" | "whatsapp">(initialMethod || "email");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
    rentalTerm: isMandatoryTerm ? "1-6 Months" : "",
  });

  const [currentImg, setCurrentImg] = useState(0);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialMethod) {
        setMethod(initialMethod);
        setStep("form");
      } else {
        setStep("selection");
      }
      setSubmitStatus("idle");
      
      // Reset form data when opening
      setFormData({
        ...INITIAL_FORM_DATA,
        rentalTerm: isMandatoryTerm ? "1-6 Months" : "",
      });
    }
  }, [isOpen, initialMethod, isMandatoryTerm]);

  useEffect(() => {
    if (initialData && isOpen) {
      setFormData(prev => ({
        ...prev,
        name: initialData.name || prev.name,
        email: initialData.email || prev.email,
        mobile: initialData.mobile || prev.mobile,
        whatsappForm: initialData.whatsappForm || prev.whatsappForm,
        country: initialData.country || prev.country,
        exactLocation: initialData.exactLocation || prev.exactLocation,
        rentalTerm: initialData.rentalTerm || prev.rentalTerm || (isMandatoryTerm ? "1-6 Months" : ""),
        message: initialData.message || prev.message,
      }));
    }
  }, [initialData, isOpen, isMandatoryTerm]);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let inquiryText = `Epignosis ${type.toUpperCase()} Inquiry:
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
WhatsApp: ${formData.whatsappForm}
Location: ${formData.country} - ${formData.exactLocation}`;

    if (type === "rent" || isMandatoryTerm) {
      inquiryText += `\nTerm: ${formData.rentalTerm}`;
    }

    if (type === "sell") {
      inquiryText += `\nMonthly Rental Valuation: ${formData.monthlyIncome}
Bedrooms: ${formData.bedrooms}
Bathrooms: ${formData.bathrooms}
Features: ${formData.additionalInfo}`;
    }

    if (formData.message) {
      inquiryText += `\nNotes: ${formData.message}`;
    }

    if (method === "whatsapp") {
      // Formatted strictly for international format (no + sign, no leading 0, UK 44 prefix)
      const digits = WHATSAPP_NUMBER.replace(/\D/g, '');
      const formattedWhatsApp = digits.startsWith('0') ? '44' + digits.slice(1) : digits;
      
      // Revert to robust API link that handles both App and Web gracefully
      const waUrl = `https://api.whatsapp.com/send?phone=${formattedWhatsApp}&text=${encodeURIComponent(inquiryText)}`;

      // Use window.open which interacts correctly with the API redirect logic
      window.open(waUrl, '_blank');
      
      setIsSubmitting(false);
      setSubmitStatus("success");
    } else {
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            type,
            subject: `${type.toUpperCase()} Property Inquiry`
          }),
        });

        if (response.ok) {
          setSubmitStatus("success");
          // User will close manually with X button
        } else {
          setSubmitStatus("error");
          // Fallback to mailto if API fails
          window.location.href = `mailto:${EMAIL}?subject=${type.toUpperCase()} Property Inquiry&body=${encodeURIComponent(inquiryText)}`;
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");
        window.location.href = `mailto:${EMAIL}?subject=${type.toUpperCase()} Property Inquiry&body=${encodeURIComponent(inquiryText)}`;
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const isSell = type === "sell";
  const isRent = type === "rent";
  const isBuy = type === "buy";

  return (
    <AnimatePresence>
      {isOpen && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
        >
          {/* Header Slider Section */}
          <div className="relative h-40 sm:h-52 flex-shrink-0 overflow-hidden bg-navy flex items-center justify-center">
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 select-none">
                <span className="text-white/5 font-bold text-4xl uppercase tracking-widest text-center leading-none">
                  Epignosis
                </span>
                <span className="text-white/5 font-bold text-4xl uppercase tracking-widest text-center leading-none mt-1">
                  Housing
                </span>
             </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={PROPERTY_IMAGES[currentImg]}
                  alt="Property Preview"
                  fill
                  className="object-cover opacity-60"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-10 z-10">
               <span className="bg-gold text-navy font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest shadow-lg">
                 {isSell ? "Selling Service" : isBuy ? "Buying Inquiry" : "Connect With Us"} 
                 {step === "form" && ` via ${method === "whatsapp" ? "WhatsApp" : "Email"}`}
               </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center text-navy hover:text-gold transition-all z-50 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className="p-8 sm:p-10 pt-4 overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
              {step === "selection" ? (
                <motion.div
                  key="selection"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-center py-6"
                >
                  <h3 className="text-3xl font-bold text-navy mb-4">Choose Your Platform</h3>
                  <p className="text-muted mb-10">How would you like to reach out to our team?</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <button
                      onClick={() => {
                        setMethod("email");
                        setStep("form");
                      }}
                      className="group p-8 bg-accent/20 rounded-3xl border border-navy/5 hover:border-gold hover:bg-white transition-all text-left"
                    >
                      <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform">
                        <Mail size={30} />
                      </div>
                      <h4 className="text-xl font-bold text-navy mb-2">Send an Email</h4>
                      <p className="text-sm text-muted">Receive a formal response and tailored brochure via email.</p>
                    </button>

                    <button
                      onClick={() => {
                        setMethod("whatsapp");
                        setStep("form");
                      }}
                      className="group p-8 bg-accent/20 rounded-3xl border border-navy/5 hover:border-gold hover:bg-white transition-all text-left"
                    >
                      <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                        <MessageCircle size={30} />
                      </div>
                      <h4 className="text-xl font-bold text-navy mb-2">WhatsApp Chat</h4>
                      <p className="text-sm text-muted">Instant conversation with our account managers for quick replies.</p>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {!initialMethod && (
                      <button 
                        onClick={() => setStep("selection")}
                        className="p-1 hover:bg-accent rounded-full transition-colors text-navy/40 hover:text-navy"
                      >
                        <ChevronLeft size={20} />
                      </button>
                    )}
                    <h3 className="text-3xl font-bold text-navy">
                      {isSell ? "Provide Property Details" : "Finalize Your Inquiry"}
                    </h3>
                  </div>
                  <p className="text-muted mb-8 text-sm leading-relaxed">
                    {submitStatus === "success" ? "Thank you! Your inquiry has been sent." : (
                      <span className="flex flex-col gap-2">
                         <span>{isSell 
                          ? "Help us understand your property better. Provide the following details to help us generate an accurate valuation for your property." 
                          : "Please fill in your personal details and submit the form. Our team will get back to you shortly."}</span>
                        <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/5 p-3 rounded-xl inline-block border border-gold/10">
                          Note: Please finish these final details to complete your secure {method === "whatsapp" ? "WhatsApp" : "Email"} inquiry.
                        </span>
                      </span>
                    )}
                  </p>

                  {submitStatus === "success" && method !== "whatsapp" ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center relative">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <Send size={40} />
                      </div>
                      <h4 className="text-2xl font-bold text-navy mb-2">Message Sent!</h4>
                      <p className="text-muted mb-6">We've received your inquiry and will be in touch within 24 hours.</p>
                      
                      <button
                        onClick={onClose}
                        className="bg-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-gold hover:text-navy transition-all flex items-center gap-2"
                      >
                        <X size={20} />
                        Close
                      </button>
                    </div>
                  ) : submitStatus === "success" && method === "whatsapp" ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center relative">
                      <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-6">
                        <MessageCircle size={40} />
                      </div>
                      <h4 className="text-2xl font-bold text-navy mb-2">Continue on WhatsApp</h4>
                      <p className="text-muted mb-6 max-w-sm">
                        We've opened WhatsApp in a new tab. Please click the <strong>send button</strong> in that chat to finalize your inquiry.
                      </p>
                      
                      <div className="flex flex-col gap-3 w-full sm:w-auto">
                        <button
                          onClick={onClose}
                          className="bg-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-gold hover:text-navy transition-all flex items-center justify-center gap-2"
                        >
                          I've Sent the Message
                        </button>
                        <button
                          onClick={() => setSubmitStatus("idle")}
                          className="text-navy/50 text-xs font-bold uppercase tracking-widest hover:text-navy transition-colors p-2"
                        >
                          It didn't open? Try again
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFinalSubmit} className="space-y-6 pb-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-accent/30 border border-navy/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold"
                            placeholder="e.g. John Doe"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-accent/30 border border-navy/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold"
                            placeholder="email@example.com"
                          />
                        </div>
                      </div>

                      <div className={`grid grid-cols-1 ${method === "whatsapp" ? "sm:grid-cols-2" : "sm:grid-cols-1"} gap-6`}>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">Mobile Number</label>
                          <input
                            type="tel"
                            name="mobile"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full bg-accent/30 border border-navy/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold"
                            placeholder="+44 ..."
                          />
                        </div>
                        {method === "whatsapp" && (
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">WhatsApp Number</label>
                            <input
                              type="tel"
                              name="whatsappForm"
                              required
                              value={formData.whatsappForm}
                              onChange={handleChange}
                              className="w-full bg-accent/30 border border-navy/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold"
                              placeholder="+44 ..."
                            />
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">Select Country (UK)</label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full bg-accent/30 border border-navy/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold appearance-none cursor-pointer"
                          >
                            {UK_COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">
                            {isRent || type === "general" ? "Preferred Term" : "Exact Location"}
                          </label>
                          {isRent || type === "general" ? (
                            <div className="relative">
                               <select
                                name="rentalTerm"
                                required={isMandatoryTerm}
                                value={formData.rentalTerm}
                                onChange={handleChange}
                                className="w-full bg-accent/30 border border-navy/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold appearance-none cursor-pointer"
                              >
                                {!isMandatoryTerm && <option value="">Select Term (Optional)</option>}
                                <option>1-6 Months</option>
                                <option>6-12 Months</option>
                                <option>1-5 Years</option>
                                <option>5+ Years</option>
                              </select>
                            </div>
                          ) : (
                            <div className="relative">
                              <MapPin size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gold opacity-50" />
                              <input
                                type="text"
                                name="exactLocation"
                                required
                                value={formData.exactLocation}
                                onChange={handleChange}
                                className="w-full bg-accent/30 border border-navy/5 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold"
                                placeholder="e.g. Manchester..."
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {isRent || type === "general" ? (
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">Exact Location (Optional)</label>
                          <div className="relative">
                            <MapPin size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gold opacity-50" />
                            <input
                              type="text"
                              name="exactLocation"
                              value={formData.exactLocation}
                              onChange={handleChange}
                              className="w-full bg-accent/30 border border-navy/5 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold"
                              placeholder="e.g. London, Manchester..."
                            />
                          </div>
                        </div>
                      ) : null}

                      {isSell && (
                        <>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">Monthly Rental Valuation</label>
                              <input
                                type="text"
                                name="monthlyIncome"
                                required
                                value={formData.monthlyIncome}
                                onChange={handleChange}
                                className="w-full bg-accent/30 border border-navy/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold font-medium"
                                placeholder="£..."
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">No. of Bedrooms</label>
                              <input
                                type="number"
                                name="bedrooms"
                                required
                                value={formData.bedrooms}
                                onChange={handleChange}
                                className="w-full bg-accent/30 border border-navy/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold font-medium"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">No. of Bathrooms</label>
                              <input
                                type="number"
                                name="bathrooms"
                                required
                                value={formData.bathrooms}
                                onChange={handleChange}
                                className="w-full bg-accent/30 border border-navy/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold font-medium"
                              />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">Property Features & Specifics</label>
                            <textarea
                              name="additionalInfo"
                              required
                              value={formData.additionalInfo}
                              onChange={handleChange}
                              rows={3}
                              className="w-full bg-accent/30 border border-navy/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
                              placeholder="e.g. Garden, Newly Renovated, Close to station..."
                            />
                          </div>
                        </>
                      )}

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-60">Message / Additional Notes</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full bg-accent/30 border border-navy/5 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
                          placeholder="Tell us more about your requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-navy text-white font-bold py-6 mt-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-gold hover:text-navy transition-all group shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            {method === "whatsapp" ? <MessageCircle size={22} /> : <Mail size={22} />}
                            {isSell ? "Submit Listing Details" : `Send Inquiry via ${method === "whatsapp" ? "WhatsApp" : "Email"}`}
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                      
                      {submitStatus === "error" && (
                        <p className="text-red-500 text-xs font-bold text-center mt-2 uppercase tracking-widest">
                          There was an error. Redirecting to manual email...
                        </p>
                      )}
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}