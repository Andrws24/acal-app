"use client";

import type React from "react";

import { useState } from "react";
import { Send, Check, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input, TextArea } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { COMPANY } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Phone, label: "WhatsApp", value: COMPANY.phone, href: COMPANY.whatsappUrl },
    { icon: Mail, label: "Correo", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, label: "Ubicación", value: "Colombia" },
  ];

  return (
    <Section id="contacto" background="white">
      <SectionHeader
        title="Contáctanos"
        subtitle="Estamos listos para ayudarte. Escríbenos y te responderemos a la brevedad."
      />

      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            const content = (
              <Card hover={false} className="group cursor-default">
                <CardContent className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text/50">{info.label}</p>
                    <p className="text-sm font-medium text-text">{info.value}</p>
                  </div>
                </CardContent>
              </Card>
            );

            return info.href ? (
              <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={info.label}>{content}</div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <Card>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Check className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-text text-lg mb-1">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-sm text-text/80">
                    Te responderemos a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input id="name" label="Nombre" placeholder="Tu nombre" required />
                    <Input
                      id="email"
                      label="Correo electrónico"
                      type="email"
                      placeholder="tu@correo.com"
                      required
                    />
                  </div>
                  <Input
                    id="subject"
                    label="Asunto"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                  <TextArea
                    id="message"
                    label="Mensaje"
                    placeholder="Cuéntanos más sobre tu proyecto o consulta..."
                    rows={4}
                    required
                  />
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
