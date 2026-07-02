import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://acal.com";
const siteName = "ACAL - Tecnología que conecta y soluciona";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2F8DF3",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "ACAL es una empresa colombiana de soluciones tecnológicas. Soporte técnico, asesoría, desarrollo web y soluciones digitales para personas y pequeñas empresas.",
  keywords: [
    "soporte técnico",
    "desarrollo web",
    "asesoría tecnológica",
    "soluciones digitales",
    "tecnología Colombia",
    "ACAL",
    "soporte informático",
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
    title: siteName,
    description:
      "Soluciones tecnológicas para personas y empresas. Soporte técnico, desarrollo web y más.",
    url: siteUrl,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Soluciones tecnológicas para personas y empresas.",
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
      "@type": "Organization",
      name: "ACAL",
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
      description:
        "Empresa colombiana de soluciones tecnológicas para personas y pequeñas empresas.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+57-3023461106",
        contactType: "customer service",
        email: "soporte.acal@gmail.com",
      },
      sameAs: ["https://instagram.com/acal.co"],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ACAL",
              url: siteUrl,
              logo: `${siteUrl}/images/logo.png`,
              description:
                "Empresa colombiana de soluciones tecnológicas para personas y pequeñas empresas.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+57-3023461106",
                contactType: "customer service",
                email: "soporte.acal@gmail.com",
              },
              sameAs: ["https://instagram.com/acal.co"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
