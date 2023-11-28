import "./globals.css";
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
    "Descubre el poder del marketing digital con Polygon Agency. Estrategias innovadoras y creativas que dan resultados excepcionales. Convierte tu tráfico en ventas hoy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans`}>
        <div className="relative flex min-h-screen flex-col">
          {/* <SiteHeader /> */}
          <Header />
          <div className="flex-1">{children}</div>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
