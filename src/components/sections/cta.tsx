"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { COMPANY } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function CTA() {
  const [ref, isVisible] = useIntersection({ threshold: 0.2 });

  return (
    <Section background="gray">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl gradient-bg p-8 md:p-12 lg:p-16 text-center"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            ¿Listo para impulsar tu negocio?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus
            objetivos con soluciones tecnológicas modernas y efectivas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                Escribir por WhatsApp
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-white hover:bg-white/10"
              asChild
            >
              <a href="mailto:ac.soltecnologia@gmail.com">
                Enviar Correo
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
