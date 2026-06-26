"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { TESTIMONIALS } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function Testimonials() {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <Section id="testimonios">
      <SectionHeader
        title="Lo que dicen nuestros clientes"
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
            <Card className="h-full">
              <CardContent className="flex flex-col h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
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
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
