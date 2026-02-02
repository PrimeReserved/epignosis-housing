"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/constants/data";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} fill="white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
        Chat with us
      </span>
    </button>
  );
}
