"use client";

import { Shield, UserCheck, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { useIntersection } from "@/hooks/use-intersection";

const values = [
  {
    icon: Shield,
    title: "Confianza",
    description:
      "Construimos relaciones basadas en la transparencia y el cumplimiento de nuestras promesas.",
  },
  {
    icon: UserCheck,
    title: "Atención Personalizada",
    description:
      "Cada cliente es único. Escuchamos, entendemos y ofrecemos soluciones a tu medida.",
  },
  {
    icon: TrendingUp,
    title: "Calidad",
    description:
      "Trabajamos con los más altos estándares para garantizar resultados que superen expectativas.",
  },
  {
    icon: Sparkles,
    title: "Innovación",
    description:
      "Nos mantenemos a la vanguardia tecnológica para ofrecerte siempre lo mejor.",
  },
];

export function About() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="nosotros" background="gray">
      <SectionHeader
        title="Nosotros"
        subtitle="Somos una empresa colombiana enfocada en brindar soluciones tecnológicas reales para personas y pequeñas empresas."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -24 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-primary/10" />
            <div className="relative bg-white rounded-2xl border border-gray/40 p-8 shadow-sm">
              <p className="text-text/70 leading-relaxed mb-6">
                En <strong className="text-text">ACAL</strong>, creemos que la
                tecnología debe ser una herramienta accesible para todos. Por eso,
                trabajamos codo a codo con nuestros clientes para entender sus
                necesidades y ofrecer soluciones que realmente funcionen.
              </p>
              <p className="text-text/70 leading-relaxed">
                Desde soporte técnico hasta desarrollo web, cada servicio que
                ofrecemos está respaldado por años de experiencia y un compromiso
                inquebrantable con la calidad.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-secondary/10" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray/40 p-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-text mb-1.5">
                  {value.title}
                </h3>
                <p className="text-xs text-text/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
