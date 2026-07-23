"use client";

import {
  Monitor,
  Zap,
  Download,
  Compass,
  Code,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { COMPANY, SERVICES } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Zap,
  Download,
  Compass,
  Code,
  Network,
};

export function Services() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="servicios" background="white">
      <SectionHeader
        title="Servicios"
        subtitle="Soluciones tecnológicas reales para personas y pequeñas empresas. Cada servicio está diseñado para resolver problemas concretos."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon] || Monitor;
          const whatsappLink = `${COMPANY.whatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="h-full group hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <CardContent className="flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="font-semibold text-text mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-text/80 leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Más información →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
