import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WithContext, Organization, ItemList } from "schema-dts";
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
  alternates: {
    canonical: "https://www.polygonag.com/",
  },
};

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Polygon Agency",
  url: "https://www.polygonag.com/",
  logo: "https://www.polygonag.com/images/Logo/Logo_Polygon.png",
  contactPoint: {
    "@type": "ContactPoint",
    // telephone: "+52-555-123-4567",
    contactType: "Customer Service",
    email: "hola@polygonag.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Praga 24, Juárez, Cuauhtémoc",
    addressLocality: "Ciudad de México",
    addressCountry: "MX",
  },
};

// const membersJsonLdList = [
//   {
//     "@type": "Person",
//     name: "Felipe Madero",
//     jobTitle: "CEO & Founder Partner",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
//   {
//     "@type": "Person",
//     name: "Rodrigo Ogarrio",
//     jobTitle: "CCO & Founder Partner",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
//   {
//     "@type": "Person",
//     name: "Antonio Tamayo",
//     jobTitle: "Senior Partner Business Development",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
//   {
//     "@type": "Person",
//     name: "Tomás Saiz",
//     jobTitle: "Business Development Director",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
//   {
//     "@type": "Person",
//     name: "Gala Gallegos",
//     jobTitle: "Head of Operations",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
//   {
//     "@type": "Person",
//     name: "Alba Rodriguez",
//     jobTitle: "SEO Director",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
//   {
//     "@type": "Person",
//     name: "Mariana Recinas",
//     jobTitle: "Performance Marketing",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
//   {
//     "@type": "Person",
//     name: "Felix Nolasco",
//     jobTitle: "Software Developer",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
//   {
//     "@type": "Person",
//     name: "Franciso Hernández",
//     jobTitle: "Creative Art Manager",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
//   {
//     "@type": "Person",
//     name: "Pablo Noguerón",
//     jobTitle: "Content Designer",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
//   {
//     "@type": "Person",
//     name: "Jimena Rivera",
//     jobTitle: "Junior Designer",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
//   {
//     "@type": "Person",
//     name: "Fernando Herrera",
//     jobTitle: "Production Assistant",
//     worksFor: {
//       "@type": "Organization",
//       name: "Polygon Agency",
//     },
//   },
// ];

const membersJsonLd: WithContext<ItemList> = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Person",
      name: "Felipe Madero",
      jobTitle: "CEO & Founder Partner",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
    {
      "@type": "Person",
      name: "Rodrigo Ogarrio",
      jobTitle: "CCO & Founder Partner",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
    {
      "@type": "Person",
      name: "Antonio Tamayo",
      jobTitle: "Senior Partner Business Development",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
    {
      "@type": "Person",
      name: "Tomás Saiz",
      jobTitle: "Business Development Director",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
    {
      "@type": "Person",
      name: "Gala Gallegos",
      jobTitle: "Head of Operations",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
    {
      "@type": "Person",
      name: "Alba Rodriguez",
      jobTitle: "SEO Director",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
    {
      "@type": "Person",
      name: "Mariana Recinas",
      jobTitle: "Performance Marketing",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
    {
      "@type": "Person",
      name: "Felix Nolasco",
      jobTitle: "Software Developer",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
    {
      "@type": "Person",
      name: "Franciso Hernández",
      jobTitle: "Creative Art Manager",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
    {
      "@type": "Person",
      name: "Pablo Noguerón",
      jobTitle: "Content Designer",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
    {
      "@type": "Person",
      name: "Jimena Rivera",
      jobTitle: "Junior Designer",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
    {
      "@type": "Person",
      name: "Fernando Herrera",
      jobTitle: "Production Assistant",
      worksFor: {
        "@type": "Organization",
        name: "Polygon Agency",
      },
    },
  ],
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
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Script
          id="members-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(membersJsonLd),
          }}
        />
      </body>
    </html>
  );
}
