"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/3 to-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-20 py-32 md:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {COMPANY.slogan}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-text leading-[1.1]"
          >
            Tu aliado tecnológico
            <br />
            <span className="gradient-text">en Colombia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-text/80 leading-relaxed max-w-2xl mx-auto"
          >
            Más de 5 años resolviendo problemas técnicos y ayudando a personas y
            pequeñas empresas a aprovechar la tecnología.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <a
                href={`${COMPANY.whatsappUrl}?text=Hola%20ACAL,%20necesito%20una%20asesor%C3%ADa%20t%C3%A9cnica.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar asesoría gratuita
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#servicios">
                Conocer servicios
                <ChevronDown className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text/30 hover:text-primary transition-colors"
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
