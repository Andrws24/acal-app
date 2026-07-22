import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Heart, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia de Bekkaglam, una marca de ropa femenina hecha en Cartagena con amor.",
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-text">
              Sobre Bekkaglam
            </h1>
            <p className="text-text-muted mt-2">Hecho en Cartagena con amor para las girls</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-primary-light/50">
              <h2 className="text-xl font-bold font-heading text-text mb-4 flex items-center gap-2">
                Nuestra Historia
              </h2>
              <p className="text-text-muted leading-relaxed">
                Bekkaglam nació en Cartagena, Colombia, con una misión clara: empoderar a las mujeres
                a sentirse lindas, seguras y auténticas. Creemos que cada mujer merece lucir bien
                y sentirse aún mejor.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary-light/50">
              <h2 className="text-xl font-bold font-heading text-text mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary fill-primary" />
                Nuestra Misión
              </h2>
              <p className="text-text-muted leading-relaxed">
                Ofrecer ropa femenina moderna, cómoda y accesible, con un estilo único que resalte
                la belleza de cada mujer. Tú eres tu mayor inversión. Sé linda y luce linda.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-primary-light/50">
              <h2 className="text-xl font-bold font-heading text-text mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Ubicación
              </h2>
              <p className="text-text-muted leading-relaxed">
                Cartagena, Colombia &mdash; 100% virtual, sin local físico. Hacemos envíos a toda Colombia.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
