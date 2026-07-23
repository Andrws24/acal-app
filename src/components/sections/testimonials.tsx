"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { COMPANY, TESTIMONIALS } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function Testimonials() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  if (TESTIMONIALS.length === 0) {
    return (
      <Section id="testimonios" background="gray">
        <SectionHeader
          title="Lo que dicen quienes confiaron en ACAL"
          subtitle="Tu experiencia importa. Cuéntanos cómo te fue."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="bg-white rounded-2xl border border-gray/40 p-8 shadow-sm">
            <p className="text-text/60 text-sm mb-4">
              ¿Eres cliente de ACAL? Cuéntanos tu experiencia y ayuda a otros a
              conocernos.
            </p>
            <a
              href={`${COMPANY.whatsappUrl}?text=Hola%20ACAL,%20quiero%20compartir%20mi%20experiencia%20como%20cliente.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Compartir mi experiencia
            </a>
          </div>
        </motion.div>
      </Section>
    );
  }

  return (
    <Section id="testimonios" background="gray">
      <SectionHeader
        title="Lo que dicen quienes confiaron en ACAL"
        subtitle="La satisfacción de nuestros clientes es nuestra mejor carta de presentación."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="bg-white rounded-2xl border border-gray/40 p-6 shadow-sm h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-secondary text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-text/70 leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray/40">
                <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center text-white font-medium text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-text">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text/50">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
