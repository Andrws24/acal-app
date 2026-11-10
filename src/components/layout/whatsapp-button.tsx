"use client";

import { MessageCircle } from "lucide-react";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/constants";

const whatsappHref = whatsappLink(DEFAULT_WHATSAPP_MESSAGE);

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 group">
      <span
        role="tooltip"
        // `group-focus-within` muestra el tooltip también al navegar con
        // teclado (tecla Tab), no solo con hover de mouse.
        className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-text px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        Escríbeme por WhatsApp
        <span
          aria-hidden="true"
          className="absolute left-full top-1/2 -translate-y-1/2 border-y-[6px] border-l-[6px] border-y-transparent border-l-text"
        />
      </span>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbeme por WhatsApp"
        className="flex w-14 h-14 rounded-full bg-whatsapp items-center justify-center text-white shadow-lg shadow-whatsapp/30 hover:shadow-xl hover:shadow-whatsapp/40 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
      >
        <MessageCircle className="w-7 h-7" aria-hidden="true" />
      </a>
    </div>
  );
}
