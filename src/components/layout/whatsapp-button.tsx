"use client";

import { MessageCircle } from "lucide-react";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/constants";

const whatsappHref = whatsappLink(DEFAULT_WHATSAPP_MESSAGE);

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center text-white shadow-lg shadow-whatsapp/30 hover:shadow-xl hover:shadow-whatsapp/40 hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}