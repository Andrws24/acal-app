import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Portfolio } from "@/components/sections/portfolio";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Conoce los proyectos que hemos desarrollado. Desarrollo web, aplicaciones y soluciones digitales.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <Portfolio />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
