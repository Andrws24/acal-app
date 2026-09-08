"use client";

import { useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import {
  BUSINESS_CONFIG,
  BUSINESS_PLANS,
  type BusinessPlan,
} from "@/components/business/data";

function recommend(
  equipos: string,
  modalidad: string,
  urgencia: string
): BusinessPlan {
  if (
    urgencia === "Urgente: necesito ayuda ya" ||
    equipos === "Más de 15"
  ) {
    return BUSINESS_PLANS[2];
  }
  if (modalidad === "Remoto + visitas presenciales") {
    return BUSINESS_PLANS[1];
  }
  if (equipos === "11 a 15") {
    return BUSINESS_PLANS[1];
  }
  return BUSINESS_PLANS[0];
}

function Field({
  label,
  value,
  options,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-base font-medium text-text">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray bg-white px-4 py-3 text-base text-text transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function BusinessConfigurator() {
  const [equipos, setEquipos] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [urgencia, setUrgencia] = useState("");

  const complete = Boolean(equipos && ciudad && modalidad && urgencia);
  const plan = complete
    ? recommend(equipos, modalidad, urgencia)
    : null;

  return (
    <Section id="configurador" background="gray">
      <SectionHeader
        title="Encuentra tu plan en 30 segundos"
        subtitle="Responde 4 preguntas y te recomendamos el plan al instante. Sin formularios largos."
      />

      <div className="max-w-3xl mx-auto rounded-2xl bg-white border border-gray p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field
            label="1. ¿Cuántos equipos tiene tu empresa?"
            value={equipos}
            options={BUSINESS_CONFIG.equipos}
            placeholder="Selecciona el rango"
            onChange={setEquipos}
          />
          <Field
            label="2. ¿En qué ciudad está tu empresa?"
            value={ciudad}
            options={BUSINESS_CONFIG.ciudad}
            placeholder="Selecciona la ciudad"
            onChange={setCiudad}
          />
          <Field
            label="3. ¿Atención presencial o remota?"
            value={modalidad}
            options={BUSINESS_CONFIG.modalidad}
            placeholder="Selecciona una opción"
            onChange={setModalidad}
          />
          <Field
            label="4. ¿Qué tan urgente es tu situación?"
            value={urgencia}
            options={BUSINESS_CONFIG.urgencia}
            placeholder="Selecciona una opción"
            onChange={setUrgencia}
          />
        </div>

        {!plan && (
          <p className="mt-8 rounded-xl bg-background px-5 py-4 text-center text-base text-muted">
            Completa las 4 preguntas para ver tu plan recomendado.
          </p>
        )}

        {plan && (
          <div className="mt-8 rounded-xl border border-primary/25 bg-primary/5 p-6 md:p-8 text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white">
              <Sparkles className="w-4 h-4" />
              Plan recomendado para ti
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-text">
              {plan.name}
            </h3>
            <p className="mt-2 text-lg text-primary font-medium">
              {plan.priceLabel}
            </p>

            <p className="mt-4 text-base text-muted max-w-md mx-auto">
              Para {equipos} equipos con atención {modalidad}, empieza así.
            </p>

            <ul className="mt-5 mb-7 flex flex-wrap justify-center gap-2">
              {plan.features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="rounded-full bg-white border border-gray px-4 py-2 text-sm font-medium text-text"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full sm:w-auto px-10" asChild>
              <a
                href={whatsappLink(plan.message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6" />
                Cotizar {plan.name}
              </a>
            </Button>

            <p className="mt-6 text-sm text-muted">
              ¿Caso especial? Confirma tu plan con el diagnóstico gratuito.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}