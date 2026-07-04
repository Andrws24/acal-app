"use client";

import {
  Wrench,
  Lightbulb,
  Globe,
  Zap,
  Download,
  Network,
  Shield,
  Bot,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";
import { SERVICES } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Lightbulb,
  Globe,
  Zap,
  Download,
  Network,
  Shield,
  Bot,
};

export function Services() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="servicios" background="white">
      <SectionHeader
        title="Servicios"
        subtitle="Ofrecemos soluciones tecnológicas integrales para personas y pequeñas empresas. Cada servicio está diseñado para resolver problemas reales."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon] || Wrench;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-text">{service.title}</h3>
                    {"comingSoon" in service && service.comingSoon && (
                      <Badge variant="outline">Próximamente</Badge>
                    )}
                  </div>

                  <p className="text-sm text-text/80 leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-xs text-text/50 flex items-center gap-2"
                      >
                        <span
                          className={`w-1 h-1 rounded-full ${
                            feature === "Próximamente" || feature === "Automatización de tareas"
                              ? "bg-gray"
                              : "bg-secondary"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
