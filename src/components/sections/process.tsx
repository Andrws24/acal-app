"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { PROCESS_STEPS } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function Process() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="proceso" background="white">
      <SectionHeader
        title="Así trabajamos"
        subtitle="Un proceso claro, sin sorpresas. Siempre sabrás en qué está tu proyecto."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative"
          >
            {index < PROCESS_STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-secondary/30" />
            )}
            <div className="text-center lg:text-left">
              <span className="inline-block text-4xl font-bold gradient-text mb-3">
                {step.number}
              </span>
              <h3 className="font-semibold text-text mb-2">{step.title}</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
