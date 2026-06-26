import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Services } from "@/components/sections/services";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conoce todos los servicios tecnológicos que ofrecemos: soporte técnico, desarrollo web, asesoría, redes y más.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <Container className="py-12">
          <SectionHeader
            title="Todos nuestros servicios"
            subtitle="Soluciones integrales diseñadas para cubrir cada necesidad tecnológica de tu empresa."
          />
        </Container>
        <Services />
        <Section background="white">
          <Container className="text-center">
            <p className="text-text/60 max-w-2xl mx-auto">
              ¿No encuentras el servicio que necesitas? Contáctanos y te
              diseñaremos una solución a la medida.
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
