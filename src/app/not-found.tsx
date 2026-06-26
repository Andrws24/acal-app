import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

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
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl gradient-bg text-white px-6 py-2.5 text-sm font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Volver al inicio
          </a>
        </Container>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
