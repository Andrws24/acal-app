"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE, PROCESS_STEPS } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

const whatsappHref = whatsappLink(DEFAULT_WHATSAPP_MESSAGE);

export function Process() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="proceso" background="white">
      <SectionHeader
        title="Cómo funciona"
        subtitle="Tres pasos, sin complicaciones ni sorpresas."
      />

      <div
        ref={ref}
        className="relative grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 max-w-4xl mx-auto"
      >
        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            className="relative text-center"
          >
            {index < PROCESS_STEPS.length - 1 && (
              <div
                className="hidden sm:block absolute top-6 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gray"
                aria-hidden="true"
              />
            )}
            <div className="relative mx-auto w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-lg mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-text mb-2">
              {step.title}
            </h3>
            <p className="text-base text-muted leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" className="w-full sm:w-auto px-10" asChild>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-6 h-6" />
            Solicita tu diagnóstico sin costo
          </a>
        </Button>
      </div>
    </Section>
  );
}