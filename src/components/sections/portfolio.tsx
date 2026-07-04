"use client";

import { FolderOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { useIntersection } from "@/hooks/use-intersection";

const projects = [
  {
    title: "Próximamente",
    category: "Desarrollo Web",
    description: "Nuevos proyectos en desarrollo.",
  },
];

export function Portfolio() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="portafolio" background="white">
      <SectionHeader
        title="Portafolio"
        subtitle="Conoce algunos de los proyectos que hemos desarrollado. Estamos construyendo casos de éxito."
      />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-t-2xl flex items-center justify-center">
                <FolderOpen className="w-12 h-12 text-primary/30" />
              </div>
              <CardContent>
                <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-semibold text-text mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-text/80">{project.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card className="h-full border-dashed border-primary/30 bg-primary/[0.02] hover:bg-primary/[0.04]">
            <CardContent className="flex flex-col items-center justify-center text-center h-full min-h-[280px]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <FolderOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text mb-2">¿Tu próximo proyecto?</h3>
              <p className="text-sm text-text/80 mb-4">
                Trabajemos juntos para hacer realidad tu idea.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://wa.me/573023461106"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
