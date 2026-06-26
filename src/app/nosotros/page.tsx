import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { About } from "@/components/sections/about";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce más sobre ACAL, nuestra misión, visión y valores. Empresa colombiana de soluciones tecnológicas.",
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <Container className="py-12">
          <SectionHeader
            title="Sobre ACAL"
            subtitle="Tecnología que conecta y soluciona."
          />
        </Container>
        <About />
        <Section background="gray">
          <Container className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-text mb-4">Nuestra Visión</h3>
            <p className="text-text/70 leading-relaxed">
              Ser la empresa de referencia en soluciones tecnológicas para
              personas y pequeñas empresas en Colombia, reconocida por nuestra
              calidad, cercanía y capacidad de innovación.
            </p>
          </Container>
        </Section>
        <Section>
          <Container className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-text mb-4">Nuestra Misión</h3>
            <p className="text-text/70 leading-relaxed">
              Democratizar el acceso a la tecnología, ofreciendo soluciones
              accesibles, profesionales y efectivas que impulsen el crecimiento
              de nuestros clientes.
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
