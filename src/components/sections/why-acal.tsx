"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { WHY_ACAL } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function WhyACAL() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="por-que-acal" background="gray">
      <SectionHeader
        title="Por qué elegir ACAL"
        subtitle="No somos una empresa grande con 50 empleados. Somos un profesional comprometido que conoce tu caso."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {WHY_ACAL.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl border border-gray/40 p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
          >
            <span className="text-3xl font-bold gradient-text opacity-40">
              {item.number}
            </span>
            <h3 className="font-semibold text-text mt-3 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-text/70 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
