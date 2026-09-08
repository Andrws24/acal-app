"use client";

import {
  Monitor,
  Zap,
  Download,
  Compass,
  Code,
  Network,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { whatsappLink, SERVICES } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Zap,
  Download,
  Compass,
  Code,
  Network,
};

export function ServiceCatalog() {
  const [ref, isVisible] = useIntersection({ threshold: 0.05 });

  return (
    <Section id="catalogo" background="white">
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon] || Monitor;
          const whatsappHref = whatsappLink(service.whatsappMessage);

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="h-full flex flex-col rounded-2xl bg-white border border-gray p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-text mb-2">
                  {service.title}
                </h3>

                <p className="text-base text-muted leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <Button className="w-full" size="sm" asChild>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cotizar
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