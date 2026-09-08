import { MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { DIAGNOSIS_MESSAGE } from "@/components/business/data";

const whatsappHref = whatsappLink(DIAGNOSIS_MESSAGE);

const factors = ["Número de equipos", "Ciudad de atención", "Complejidad de tu infraestructura"];

export function BusinessPrice() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-20 py-16 md:py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-white/60">
          Precio referencial
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Desde $350.000/mes*
        </h2>

        <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          Es el punto de partida. El precio final depende de tres variables y
          se confirma en tu cotización, sin costos ocultos.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {factors.map((factor) => (
            <span
              key={factor}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white"
            >
              <Check className="w-4 h-4 text-whatsapp" />
              {factor}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto px-10 text-primary"
            asChild
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6" />
              Recibir mi cotización exacta
            </a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/60">
          * Plan Remoto: incluye 2 horas de soporte al mes. Horas adicionales
          se cotizan aparte.
        </p>
      </div>
    </section>
  );
}