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
    <html lang="es">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KGCL4DFS')`,
          }}
        />
      </head>
      <body className={`hide-scrollbar-utility`}>
        <Header />
        <div className="flex-1">
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGCL4DFS"
            height="0"
            width="0"
          ></iframe>
          {children}
        </div>
        <SpeedInsights />
        <Analytics />
        <Toaster />
        <Footer />
        <Script></Script>
      </body>
    </html>
  );
}
