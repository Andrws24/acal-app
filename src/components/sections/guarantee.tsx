"use client";

import { ClipboardCheck, Timer, MessagesSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { GUARANTEE } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck,
  Timer,
  MessagesSquare,
};

export function Guarantee() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="garantia" background="gray">
      <SectionHeader
        title="Nuestro compromiso"
        subtitle="Sin promesas vacías. Esto es lo que obtienes al escribirnos."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {GUARANTEE.map((item, index) => {
          const Icon = iconMap[item.icon] || ClipboardCheck;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="h-full text-center rounded-2xl bg-white border border-gray p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-text mb-2">
                  {item.title}
                </h3>

                <p className="text-base text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}