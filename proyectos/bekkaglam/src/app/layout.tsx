import type { Metadata, Viewport } from "next";
import { Baloo_2, Poppins } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baloo",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E91E8C",
};

export const metadata: Metadata = {
  title: {
    default: "Bekkaglam — La tienda fav de las girls 💕",
    template: "%s | Bekkaglam",
  },
  description:
    "Tienda online de ropa femenina en Cartagena. Swimwear, outfits, sets deportivos y accesorios. Tú eres tu mayor inversión. ✨",
  keywords: [
    "bekkaglam",
    "ropa mujer Cartagena",
    "swimwear",
    "vestidos de baño",
    "outfits mujer",
    "tienda online Colombia",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Bekkaglam",
    title: "Bekkaglam — La tienda fav de las girls 💕",
    description: "Swimwear, outfits y accesorios. Tú eres tu mayor inversión. ✨",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${baloo.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col font-body antialiased">
        {children}
      </body>
    </html>
  );
}
