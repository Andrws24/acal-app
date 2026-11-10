import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://acal-app.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2647",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ACAL | Soporte Técnico y Soluciones Digitales",
    template: "%s | ACAL",
  },
  description:
    "Más de 5 años de experiencia en soporte técnico, desarrollo web y asesoría tecnológica para personas y pequeñas empresas.",
  /**
   * Keywords y `addressCountry` conservan el término "Colombia" a propósito.
   * Son señales de geolocalización para buscadores, no copy visible: quitarlas
   * impide que el sitio aparezca en búsquedas como "soporte técnico Colombia",
   * que es como busca un cliente local. El copy visible sí es neutral.
   */
  keywords: [
    "soporte técnico",
    "desarrollo web",
    "asesoría tecnológica",
    "soluciones digitales",
    "tecnología Colombia",
    "ACAL",
    "soporte informático",
    "reparación de equipos",
    "instalación de software",
    "redes WiFi",
  ],
  authors: [{ name: "ACAL" }],
  creator: "ACAL",
  publisher: "ACAL",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "ACAL",
    title: "ACAL | Tecnología que conecta y soluciona",
    description:
      "Soporte técnico profesional, desarrollo web y asesoría tecnológica.",
    url: siteUrl,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ACAL - Tecnología que conecta y soluciona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACAL | Tecnología que conecta y soluciona",
    description:
      "Soporte técnico profesional, desarrollo web y asesoría tecnológica.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "ACAL",
      description: "Soporte técnico y soluciones digitales",
      url: siteUrl,
      telephone: "+57-301-787-7009",
      email: "soporte.acal@gmail.com",
      address: {
        "@type": "PostalAddress",
        // Se mantiene "CO" por SEO local. Ver nota en `metadata.keywords`.
        addressCountry: "CO",
      },
      sameAs: [
        "https://instagram.com/acal.tecnologia",
        "https://facebook.com/ACALTecnologia",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
