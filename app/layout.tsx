import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Polygon Agency - La agencia de marketing creativo que estabas buscando",
  description:
    "Nuestra agencia de marketing ofrece soluciones digitales de alto impacto en SEO, Paid Media, análisis de datos y estrategias creativas. ¡Contáctanos y déjanos ayudarte a alcanzar tus metas!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-Mx">
      <body>
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
        <Toaster />
        <Footer />
        <Script></Script>
      </body>
    </html>
  );
}
