import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { DIAGNOSIS_MESSAGE } from "@/components/business/data";

export function BusinessHero() {
  const whatsappHref = whatsappLink(DIAGNOSIS_MESSAGE);

  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-32 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-20 pt-32 pb-20 md:pt-40 md:pb-28 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          Planes de soporte para PYMES en Colombia
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text leading-[1.1] text-balance">
          Convierte a ACAL en tu{" "}
          <span className="text-primary">departamento de sistemas</span>{" "}
          externo
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto text-balance">
          Soporte TI por suscripción mensual. Precios claros, respuesta
          garantizada y un solo contacto para todo lo que pasa en tu empresa.
        </p>

        <div className="mt-10">
          <Button size="lg" className="w-full sm:w-auto px-10" asChild>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6" />
              Diagnóstico gratuito
            </a>
          </Button>
        </div>

        <p className="mt-6 text-base text-muted">
          Gratis y sin compromiso &middot; Sin permanencia &middot; Cotización
          exacta según tu caso
        </p>
      </div>

      <a
        href="#valor"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors"
        aria-label="Ver beneficios"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
}