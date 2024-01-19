import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-neue" });

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
    <html lang="es">
      <body
        className={`${inter.variable} container font-sans hide-scrollbar-utility`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <SpeedInsights />
          <Analytics />
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
