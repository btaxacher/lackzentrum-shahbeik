"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const PHONE = "+4901742426527";
const WHATSAPP_URL = `https://wa.me/4901742426527?text=${encodeURIComponent("Hallo, ich möchte eine Anfrage stellen.")}`;

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp — bottom right */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Kontakt"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.4 }}
        className="fixed bottom-6 right-6 z-40 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 animate-whatsapp-pulse"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </motion.a>

      {/* Call — bottom left, mobile only */}
      <motion.a
        href={`tel:${PHONE}`}
        aria-label="Jetzt anrufen"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.4 }}
        className="fixed bottom-6 left-6 z-40 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-110 md:hidden"
      >
        <Phone className="h-7 w-7" />
      </motion.a>
    </>
  );
}
