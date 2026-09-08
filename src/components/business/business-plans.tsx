import { Check, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { BUSINESS_PLANS } from "@/components/business/data";

export function BusinessPlans() {
  return (
    <Section id="planes" background="gray">
      <SectionHeader
        title="Tres planes para empresas"
        subtitle="Límites claros desde el inicio para que elijas sin sorpresas. El diagnóstico gratuito afina el plan exacto."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
        {BUSINESS_PLANS.map((plan) => {
          const whatsappHref = whatsappLink(plan.message);

          return (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-2xl bg-white border p-6 md:p-8",
                plan.featured
                  ? "border-primary shadow-[0_20px_40px_rgba(10,38,71,0.12)]"
                  : "border-gray shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-white whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-semibold text-text">{plan.name}</h3>
              <p className="mt-1 mb-5 text-base text-muted">{plan.tagline}</p>

              <div className="mb-6">
                <p
                  className={cn(
                    "text-2xl font-semibold tracking-tight",
                    plan.featured ? "text-primary" : "text-text"
                  )}
                >
                  {plan.priceLabel}
                </p>
              </div>

              <ul className="mb-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-base text-text"
                  >
                    <Check className="mt-0.5 w-5 h-5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="mb-6 text-sm text-muted leading-relaxed">
                  {plan.note}
                </p>
              )}

              <Button className="w-full" asChild>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Cotizar {plan.name}
                </a>
              </Button>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-muted max-w-2xl mx-auto">
        * Precio referencial de entrada. El valor final se ajusta según el
        número de equipos, la ciudad y la complejidad de tu infraestructura.
      </p>
    </Section>
  );
}