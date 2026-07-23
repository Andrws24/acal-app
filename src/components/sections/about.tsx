"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { COMPANY, ABOUT } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function About() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="nosotros" background="gray">
      <SectionHeader
        title="La persona detrás de ACAL"
        subtitle="No soy una empresa grande. Soy un profesional comprometido que responde tu mensaje y conoce tu caso."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -24 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-primary/10" />
            <div className="relative bg-white rounded-2xl border border-gray/40 p-8 shadow-sm">
              {ABOUT.bio.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-text/70 leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-secondary/10" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ABOUT.values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray/40 p-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="font-semibold text-sm text-text mb-1.5">
                {value.title}
              </h3>
              <p className="text-xs text-text/80 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
