"use client";

import { MessageCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";

const whatsappHref = whatsappLink(DEFAULT_WHATSAPP_MESSAGE);

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-20 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Soporte técnico y asesoría tecnológica
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text leading-[1.1] text-balance"
        >
          ¿Tu computadora o software te están frenando?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto text-balance"
        >
          Instalación y asesoría tecnológica para que todo funcione sin
          complicaciones.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <Button size="lg" className="w-full sm:w-auto px-10" asChild>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6" />
              Hablar ahora por WhatsApp
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-base text-muted"
        >
          Respuesta rápida por WhatsApp &middot; Diagnóstico sin costo
        </motion.p>
      </div>

      <motion.a
        href="#servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors"
        aria-label="Ver servicios"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}