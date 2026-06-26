import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Artículo",
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <Container className="py-12">
          <div className="max-w-3xl mx-auto text-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">
              Artículo en preparación
            </h3>
            <p className="text-text/60">
              Este artículo estará disponible próximamente.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
