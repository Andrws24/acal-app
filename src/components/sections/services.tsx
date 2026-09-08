"use client";

import { Settings, Lightbulb, Monitor, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { whatsappLink, CORE_SERVICES } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

const iconMap: Record<string, React.ElementType> = {
  Settings,
  Lightbulb,
  Monitor,
  Code,
};

export function Services() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="servicios" background="white">
      <SectionHeader
        title="Servicios"
        subtitle="Cuatro formas de dejar de pelear con la tecnología."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {CORE_SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon] || Settings;
          const whatsappHref = whatsappLink(service.whatsappMessage);

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="h-full flex flex-col rounded-2xl bg-white border border-gray p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-text mb-2">
                  {service.title}
                </h3>

                <p className="text-base text-muted leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <Button className="w-full" asChild>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cotizar este servicio
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}