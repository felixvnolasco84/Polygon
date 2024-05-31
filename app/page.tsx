import GridAssociate from "@/components/Grid/GridAssociate";
import GridClients from "@/components/Grid/GridClients";
import GridFeatured from "@/components/Grid/GridFeatured";
import GridHomeHero from "@/components/Grid/GridHomeHero";
import GridServices from "@/components/Grid/GridServices";
import GridTalent from "@/components/Grid/GridTalent";
import Grid from "@/components/Grid/GridTeamMembers";
import Slider from "@/components/Slider/Slider";
import { GridAssociateCarrousel } from "@/components/Grid/GridAssociateCarrousel";

import SliderHome from "@/components/Slider/SliderHome";
import GridHomeFeatures from "@/components/Grid/GridHomeFeatures";
import ContactCTA from "@/components/CTA/ContactCTA";
import GridFeaturedWork from "@/components/Grid/GridFeaturedWork";
import GridProjects from "@/components/Grid/GridProjects";
import CTABrainstorming from "@/components/CTA/CTABrainstorming";
import NewGridClients from "@/components/Grid/NewGridClients";
import { clients } from "@/lib/utils";
import { members } from "@/lib/members";
import CTAHeroSection from "@/components/Grid/CTAHeroSection";
import NewGridServices from "@/components/Grid/NewGridServices";
import NewGridBlogs from "@/components/Grid/NewGridBlogs";

// const partners = [
//   {
//     image: "/images/Partners/Meta.png",
//     imageWidth: "120",
//     imageHeight: "120",
//     title: "Digital Marketing Associate",
//     description:
//       "Nuestro enfoque se centra en entregar y seguir resultados tangibles para nuestros clientes. Medimos el éxito a través de métricas concretas y estamos constantemente buscando formas de mejorar y superar expectativas.",
//   },
//   {
//     image: "/images/Partners/Shopify.png",
//     imageWidth: "407",
//     imageHeight: "139",
//     title: "Shopify Partner",
//     description:
//       "Nuestro equipo de expertos ha superado rigurosos estándares de competencia y capacitación, lo que nos permite ofrecerte servicios de eCommerce de vanguardia respaldados por el sello distintivo de Shopify.",
//   },
//   {
//     image: "/images/Partners/Google.png",
//     imageWidth: "120",
//     imageHeight: "120",
//     title: "Google UX Design Professional Certificate",
//     description:
//       "Nuestro equipo está compuesto por expertos que se dedican a estar a la vanguardia de las últimas tendencias y plataformas de medios. Aplicamos conceptos fundamentales de UX, como el diseño centrado en el usuario, la accesibilidad y el diseño centrado en la equidad.",
//   },
//   {
//     image: "/images/Partners/Semrush.png",
//     imageWidth: "378",
//     imageHeight: "70",
//     title: "Semrush Agency Partners",
//     description:
//       "Somos un equipo hiperespecializado en diferentes disciplinas (SEO, SEM, Performance, Content, Marketing, Social Media y Branding) para lograr generar estrategias completas alineadas 100% a los objetivos de negocio.",
//   },
// ];

export default function Home() {
  return (
    <main className="bg-gray-[#FDFDFD] flex flex-col items-center justify-between gap-y-16 py-12 lg:gap-y-24 xl:gap-y-48">
      <div className="container flex w-full flex-col gap-12 px-4 xl:gap-24">
        <CTAHeroSection />
        {/* <GridHomeHero /> */}
        {/* <GridServices /> */}
        <NewGridServices />
        {/* <SliderHome /> */}
        {/* <GridFeatured /> */}
        <GridFeaturedWork />
        <GridProjects />
        <CTABrainstorming />
        <NewGridClients items={clients} />
        {/* <GridClients items={clients} /> */}
        {/* <GridHomeFeatures /> */}
        {/* <GridTalent /> */}
        {/* <ContactCTA /> */}
        <Grid items={members} />
        <NewGridBlogs />
        {/* <GridAssociate items={partners} /> */}
        {/* <GridAssociateCarrousel /> */}
        {/* <Slider /> */}
        {/* <GridBlogs /> */}
      </div>
    </main>
  );
}
