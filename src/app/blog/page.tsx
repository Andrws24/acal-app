import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos técnicos sobre Windows, Linux, redes, servidores, ciberseguridad, IA y tutoriales.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <Container className="py-12 md:py-16">
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text">
              Blog
            </h1>
            <p className="mt-4 text-lg text-text/60">
              Artículos técnicos, tutoriales y guías sobre tecnología.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {BLOG_CATEGORIES.map((category) => (
              <span
                key={category}
                className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary cursor-pointer hover:bg-primary/20 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="text-center py-16 bg-white rounded-2xl border border-gray/40">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">
              Próximamente
            </h3>
            <p className="text-text/60 max-w-md mx-auto">
              Estamos preparando contenido de calidad para ti. Muy pronto
              publicaremos nuestros primeros artículos.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
