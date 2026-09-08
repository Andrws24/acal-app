import { ShieldCheck, Timer, UsersRound } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { BUSINESS_BENEFITS } from "@/components/business/data";

const iconMap = {
  ShieldCheck,
  Timer,
  UsersRound,
} as Record<string, typeof ShieldCheck>;

export function BusinessValue() {
  return (
    <Section id="valor" background="white">
      <SectionHeader
        title="Por qué un plan, y no horas sueltas"
        subtitle="Una suscripción mensual convierte la tecnología en un gasto predecible. Esto es lo que garantiza cada plan."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {BUSINESS_BENEFITS.map((benefit) => {
          const Icon = iconMap[benefit.icon] || ShieldCheck;

          return (
            <div
              key={benefit.title}
              className="h-full rounded-2xl bg-background border border-gray p-6 md:p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">
                {benefit.title}
              </h3>
              <p className="text-base text-muted leading-relaxed">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}