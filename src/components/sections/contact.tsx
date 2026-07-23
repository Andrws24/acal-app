"use client";

import type React from "react";

import { useState } from "react";
import { Send, Check, Phone, Mail } from "lucide-react";
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
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const nombre = data.get("name") as string;
    const email = data.get("email") as string;
    const necesidad = data.get("subject") as string;
    const mensaje = data.get("message") as string;

    const whatsappMessage = `Hola ACAL,%0A%0ANombre: ${nombre}%0ACorreo: ${email}%0ANecesidad: ${necesidad}%0AMensaje: ${mensaje}`;
    window.open(`${COMPANY.whatsappUrl}?text=${whatsappMessage}`, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: COMPANY.phone,
      href: COMPANY.whatsappUrl,
    },
    {
      icon: Mail,
      label: "Correo",
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
    },
  ];

  return (
    <Section id="contacto" background="white">
      <SectionHeader
        title="Hablemos"
        subtitle="Estamos listos para ayudarte. Escríbenos y te respondemos con una solución real."
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
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={info.label}>{content}</div>
            );
          })}

          <div className="bg-background rounded-2xl p-5 border border-gray/40">
            <p className="text-xs text-text/50 mb-1">Horario de atención</p>
            <p className="text-sm font-medium text-text">{COMPANY.hours}</p>
          </div>
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
                    ¡Mensaje listo!
                  </h3>
                  <p className="text-sm text-text/80">
                    Se abrió WhatsApp con tu mensaje.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      id="name"
                      label="Nombre"
                      placeholder="Tu nombre"
                      required
                    />
                    <Input
                      id="email"
                      label="Correo electrónico"
                      type="email"
                      placeholder="tu@correo.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      ¿Qué necesitas?
                    </label>
                    <select
                      name="subject"
                      className="w-full rounded-xl border border-gray/60 px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 bg-white"
                      required
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Soporte técnico">Soporte técnico</option>
                      <option value="Desarrollo web">Desarrollo web</option>
                      <option value="Asesoría tecnológica">
                        Asesoría tecnológica
                      </option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                  <TextArea
                    id="message"
                    label="Mensaje"
                    placeholder="Cuéntanos más sobre tu proyecto o consulta..."
                    rows={4}
                    required
                  />
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4" />
                    Enviar por WhatsApp
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
