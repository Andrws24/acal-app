import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <Container className="text-center py-24">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">404</span>
          </div>
          <h1 className="text-3xl font-bold text-text mb-3">
            Página no encontrada
          </h1>
          <p className="text-text/60 mb-8 max-w-md mx-auto">
            La página que buscas no existe o ha sido movida.
          </p>
          <Button className="w-full sm:w-auto" asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
        </Container>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
