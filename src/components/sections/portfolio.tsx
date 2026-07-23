"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { COMPANY, PORTFOLIO } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function Portfolio() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="portafolio" background="white">
      <SectionHeader
        title="Proyectos que hablan por nosotros"
        subtitle="Cada proyecto es una oportunidad para demostrar nuestro compromiso con la calidad."
      />

      <div ref={ref} className="max-w-4xl mx-auto">
        {PORTFOLIO.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-secondary/5 to-primary/5">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-text text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-text/60 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-secondary font-medium mb-4">
                    Resultado: {project.result}
                  </p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-text/60 text-sm mb-4">
            ¿Tu proyecto aquí? Trabajemos juntos.
          </p>
          <a
            href={`${COMPANY.whatsappUrl}?text=Hola%20ACAL,%20tengo%20un%20proyecto%20en%20mente.%20¿Podemos%20hablar?`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Contáctanos
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
