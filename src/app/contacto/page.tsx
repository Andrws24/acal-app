import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para solicitar asesoría, soporte técnico o información sobre nuestros servicios.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
