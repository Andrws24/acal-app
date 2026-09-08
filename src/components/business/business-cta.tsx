import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { DIAGNOSIS_MESSAGE } from "@/components/business/data";

const whatsappHref = whatsappLink(DIAGNOSIS_MESSAGE);

export function BusinessCta() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-20 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-balance">
          Agenda tu diagnóstico gratuito hoy
        </h2>

        <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
          En una llamada o por WhatsApp definimos tu plan exacto: equipos,
          horas, visitas y precio final. Sin compromiso.
        </p>

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
              Agendar diagnóstico sin costo
            </a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Gratis &middot; Sin permanencia &middot; Respuesta el mismo día
        </p>
      </div>
    </section>
  );
}