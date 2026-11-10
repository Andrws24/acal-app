import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Ocultar la cabecera X-Powered-By
  poweredByHeader: false,

  // 2. Configurar cabeceras de seguridad y caché
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // CSP actualizada: Soluciona alertas de Wildcard y directivas faltantes
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' https://wa.me; frame-ancestors 'none'; form-action 'self';",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      // Regla específica para archivos estáticos (soluciona alerta de caché en CSS/JS)
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Regla para el robots.txt y otros archivos de texto
      {
        source: "/(robots.txt|sitemap.xml)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;