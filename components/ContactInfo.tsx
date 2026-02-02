"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    content: "+44 000 000 0000",
  },
  {
    icon: Mail,
    label: "Email",
    content: "info@epignosishousing.com",
  },
  {
    icon: MapPin,
    label: "Location",
    content: "United Kingdom",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#F4F4F4] p-8 rounded-xl flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-[#0B1F3B] rounded-lg flex items-center justify-center shrink-0">
                <info.icon className="w-6 h-6 text-[#C7A14A]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#0B1F3B]/60 mb-1 uppercase tracking-wider">
                  {info.label}
                </p>
                <p className="text-lg font-semibold text-[#0B1F3B]">
                  {info.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}