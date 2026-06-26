import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Módulo",
  robots: { index: false, follow: false },
};

export default function AdminModulePage() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl border border-gray/40 p-8 text-center">
        <h2 className="text-xl font-semibold text-text mb-2">
          Módulo en preparación
        </h2>
        <p className="text-text/60">
          Este módulo del panel administrativo estará disponible próximamente.
        </p>
      </div>
    </div>
  );
}
