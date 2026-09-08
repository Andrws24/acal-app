import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { BusinessHero } from "@/components/business/business-hero";
import { BusinessValue } from "@/components/business/business-value";
import { BusinessPlans } from "@/components/business/business-plans";
import { BusinessPrice } from "@/components/business/business-price";
import { BusinessComparison } from "@/components/business/business-comparison";
import { BusinessConfigurator } from "@/components/business/business-configurator";
import { BusinessFaq } from "@/components/business/business-faq";
import { BusinessCta } from "@/components/business/business-cta";

export const metadata: Metadata = {
  title: "Planes para Empresas",
  description:
    "Soporte TI por suscripción mensual para PYMES en Colombia. Planes desde $350.000/mes, respuesta garantizada y diagnóstico gratuito sin compromiso.",
  openGraph: {
    title: "Planes para Empresas | ACAL",
    description:
      "Convierte a ACAL en tu departamento de sistemas externo. Planes de soporte TI mensuales para PYMES en Colombia.",
    url: "/empresas",
  },
};

export default function EmpresasPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <BusinessHero />
        <BusinessValue />
        <BusinessPlans />
        <BusinessPrice />
        <BusinessComparison />
        <BusinessConfigurator />
        <BusinessFaq />
        <BusinessCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}