import { Plus } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { BUSINESS_FAQ } from "@/components/business/data";

export function BusinessFaq() {
  return (
    <Section id="faq" background="white">
      <SectionHeader
        title="Preguntas frecuentes"
        subtitle="Las dudas típicas antes de contratar un plan. Respuestas directas, sin rodeos."
      />

      <div className="max-w-2xl mx-auto space-y-3">
        {BUSINESS_FAQ.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-gray bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-medium text-text select-none">
              {item.q}
              <Plus className="w-5 h-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45" />
            </summary>
            <p className="px-5 pb-5 text-base text-muted leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}