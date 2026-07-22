"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { useIntersection } from "@/hooks/use-intersection";

const projects = [
  {
    title: "Bekkaglam",
    category: "Tienda Online - Boutique",
    description:
      "Tienda online boutique de ropa femenina. Catálogo de productos, carrito de compras y experiencia de compra premium.",
    image: "/images/portfolio/bekkaglam.svg",
    url: "#",
    tags: ["E-commerce", "Moda", "Boutique"],
  },
];

export function Portfolio() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="portafolio" background="white">
      <SectionHeader
        title="Portafolio"
        subtitle="Conoce algunos de los proyectos que hemos desarrollado para diferentes tipos de negocio."
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group"
            >
              <Card className="h-full group cursor-pointer overflow-hidden">
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-secondary/5 to-primary/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-text text-lg mb-1.5 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text/60 leading-relaxed">
                    {project.description}
                  </p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
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
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card className="h-full border-dashed border-primary/30 bg-primary/[0.02] hover:bg-primary/[0.04]">
            <CardContent className="flex flex-col items-center justify-center text-center h-full min-h-[320px]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="font-semibold text-text mb-2">¿Tu próximo proyecto?</h3>
              <p className="text-sm text-text/60 mb-4 max-w-[200px]">
                Trabajemos juntos para hacer realidad tu idea.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://wa.me/573023461106"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
