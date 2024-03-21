import GridAssociate from "@/components/Grid/GridAssociate";
import GridClients from "@/components/Grid/GridClients";
import GridFeatured from "@/components/Grid/GridFeatured";
import GridHomeHero from "@/components/Grid/GridHomeHero";
import GridServices from "@/components/Grid/GridServices";
import GridTalent from "@/components/Grid/GridTalent";
import Grid from "@/components/Grid/GridTeamMembers";
import Slider from "@/components/Slider/Slider";
import { GridAssociateCarrousel } from "@/components/Grid/GridAssociateCarrousel";

import alba from "@/public/images/Members/alba_rodriguez.png";
import cid from "@/public/images/Members/cid_galvan.png";
import edgar from "@/public/images/Members/edgar_magana.png";
import eduardo from "@/public/images/Members/eduardo_ruiz.png";
import elena from "@/public/images/Members/elena_gas.png";
import felipe from "@/public/images/Members/felipe_madero.png";
import felix from "@/public/images/Members/felix_nolasco.png";
import fernando from "@/public/images/Members/fernando_herrera.png";
import francisco from "@/public/images/Members/francisco_hernandez.png";
import gala from "@/public/images/Members/gala_gallegos.png";
import jimena from "@/public/images/Members/jimena_rivera.png";
import liliana from "@/public/images/Members/liliana_moctezuma.png";
import lorena from "@/public/images/Members/lorena_g.png";
import mariana from "@/public/images/Members/mariana_recinas.png";
import nicolas from "@/public/images/Members/nicolas_sotelo.png";
import nicole from "@/public/images/Members/nicole_woodman.png";
import pablo from "@/public/images/Members/pablo_nogueron.png";
import pamela from "@/public/images/Members/pamela_ramirez.png";
import rodrigo from "@/public/images/Members/rodrigo_ogarrio.png";
import antonio from "@/public/images/Members/antonio_tamayo.png";
import tomas from "@/public/images/Members/tomas_saiz.png";
import SliderHome from "@/components/Slider/SliderHome";
import GridHomeFeatures from "@/components/Grid/GridHomeFeatures";
import ContactCTA from "@/components/CTA/ContactCTA";

const items = [
  {
    name: "Felipe Madero",
    img: felipe,
    role: "CEO & Founder Partner",
  },
  {
    name: "Rodrigo Ogarrio",
    img: rodrigo,
    role: "CCO & Founder Partner",
  },
  {
    name: "Antonio Tamayo",
    img: antonio,
    role: "Senior Partner Business Development",
  },
  {
    name: "Tomás Saiz",
    img: tomas,
    role: "Business Development Director",
  },

  {
    name: "Nicole Woodman",
    img: nicole,
    role: "Business Development Manager",
  },
  {
    name: "Gala Gallegos",
    img: gala,
    role: "Head of Operations",
  },
  {
    name: "Nicolas Sotelo",
    img: nicolas,
    role: "Creative Director",
  },
  {
    name: "Alba Rodriguez",
    img: alba,
    role: "SEO Director",
  },
  {
    name: "Edgar Magaña",
    img: edgar,
    role: "Data Analyst",
  },
  {
    name: "Mariana Recinas",
    img: mariana,
    role: "Performance Marketing",
  },
  {
    name: "Felix Nolasco",
    img: felix,
    role: "Software Developer",
  },
  {
    name: "Pablo Noguerón",
    img: pablo,
    role: "Content Designer",
  },
  {
    name: "Franciso Hernández",
    img: francisco,
    role: "Creative Art Manager",
  },
  {
    name: "Jimena Rivera",
    img: jimena,
    role: "Junior Designer",
  },
  // {
  //   name: "Sebastián Designer",
  //   img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fsebastian_alarcon.png?alt=media&token=eb55d4d0-97b7-4d11-ba5d-903d2ab17b50",
  //   role: "Senior Designer",
  // },
  {
    name: "Eduardo Ruiz",
    img: eduardo,
    role: "Production Director",
  },
  {
    name: "Lorena G. Cuaxiloa",
    img: lorena,
    role: "Content Creator",
  },
  {
    name: "Elena Gas",
    img: elena,
    role: "Social Media Manager",
  },
  {
    name: "Pamela Ramírez",
    img: pamela,
    role: "SEO Content Writer",
  },
  {
    name: "Cid Galván",
    img: cid,
    role: "Content Editor",
  },
  {
    name: "Liliana Moctezuma",
    img: liliana,
    role: "Office Administrator",
  },
  {
    name: "Fernando Herrera",
    img: fernando,
    role: "Production Assistant",
  },
];

const clients = [
  {
    image: "/images/Logo/Clients/Audible@2x.png",
    description:
      "Generamos más de 1,000 horas de contenido en audiolibros de alta calidad, en colaboración con Audible, una empresa de Amazon.",
    width: "156",
    height: "64",
  },
  {
    image: "/images/Logo/Clients/Carlsberg@2x.png",
    description:
      "Lanzamos con éxito Tuborg en México, centrándonos en la música con la miniserie “Sounds of the Future,” donde artistas emergentes crearon música junto a productores líderes de LATAM.",
    width: "157",
    height: "64",
  },
  {
    image: "/images/Logo/Clients/InDrive@2x.png",
    description:
      "Hemos trabajado con más de 400 influencers en toda Latinoamérica, produciendo más de 50 contenidos y llevando a cabo la exitosa campaña “Colombia Suena” que alcanzó +700M de impactos orgánicos.",
    width: "183",
    height: "67",
  },
  {
    image: "/images/Logo/Clients/Universal@2x.png",
    description:
      "Hemos producido videoclips musicales para artistas como Zoé y Primo Son, logrando +6M de click orgánicos en nuestras producciones.",
    width: "191",
    height: "71",
  },
  {
    image: "/images/Logo/Clients/Actinver@2x.png",
    description:
      "Creamos una pieza audiovisual animada para el lanzamiento de nuevos activos en la plataforma de trading “Bursanet,” brindando un enfoque empático para comunicar que cualquier persona puede usar la herramienta.",
    width: "199",
    height: "75",
  },
  {
    image: "/images/Logo/Clients/Bupa@2x.png",
    description:
      "Realizamos un rebranding exitoso de las tarjetas de usuario para Bupa Nacional Vital, destacando la frescura y limpieza de la marca.",
    width: "83",
    height: "83",
  },
  {
    image: "/images/Logo/Clients/Adobe@2x.png",
    description:
      "Concebimos y produjimos una estrategia de experiencial marketing B2B dirigida a CMO’s para promocionar el Marketing Cloud de Adobe, logrando tener contacto personal y directo con los tomadores de decisiones sobre la categoría.",
    width: "173",
    height: "45",
  },
  {
    image: "/images/Logo/Clients/canalonce@2x.png",
    description:
      "Conceptualizamos y produjimos la exitosa serie “Emergentes,” mostrando el talento de nuevos artistas de la mano de Phil Vinal (Productor de Zoé, ganador de premios Grammy. Enjambre, Pulp, Placebo, entre otros).",
    width: "167",
    height: "83",
  },
  {
    image: "/images/Logo/Clients/Pane@2x.png",
    description:
      "Impulsamos la transformación digital, trabajamos esfuerzos en Analytics, Paid Media, Social Media con campañas enfocadas a venta dentro de sus tres canales (Apetito Pane en Via, Onomura).",
    width: "87",
    height: "87",
  },
  {
    image: "/images/Logo/Clients/Samsung@2x.png",
    description:
      "Suministramos embajadores en el mundo del deporte, fortaleciendo la imagen de la marca y conectando con el público.",
    width: "198",
    height: "31",
  },
  {
    image: "/images/Logo/Clients/MITZU@2x.png",
    description:
      "Llevamos a cabo una transformación digital completa, desarrollamos la plataforma de e-commerce para Kaiser, implementamos estrategias SEO y analítica mejorando la eficiencia y aumentando las ventas en un 400% en el primer período.",
    width: "201",
    height: "51",
  },
  {
    image: "/images/Logo/Clients/CCP_Logo@2x.png",
    description:
      "Somos agencia 360º para Cuidado con El Perro trabajando en servicios creativos, producción de contenido, BTL, Paid Media, Social Media, SEO Técnico, CRM y Analytics.",
    width: "156",
    height: "58",
  },
  {
    image: "/images/Logo/Clients/CirculoProveedores@2x.png",
    description:
      "Desarrollamos estrategias de Social Media y Paid Media B2B para generar leads en Círculo Laboral, Círculo de Proveedores y API Hub, demostrando nuestro compromiso con el crecimiento de su negocio.",
    width: "111",
    height: "111",
  },
  {
    image: "/images/Logo/Clients/Titan@2x.png",
    description:
      "Estrategia integral de comunicación B2B y B2C centrada principalmente en el sector agropecuario. Nos encargamos de la creación y adaptación de mensajes para su primer impulso en el ámbito de la comunicación digital.",
    width: "198",
    height: "62",
  },
  {
    image: "/images/Logo/Clients/KEXP@2x.png",
    description:
      "Formamos parte fundamental de la producción de la serie “Live from Mexico City” en Panoram Studios. Para este proyecto, implementamos toda la infraestructura de livestreaming en colaboración con más de 50 artistas de diversas regiones de México.",
    width: "78",
    height: "104",
  },
  {
    image: "/images/Logo/Clients/NutHouse@2x.png",
    description:
      "Somos la agencia digital integral de The Nut House, encargándonos de desarrollar toda la infraestructura de su plataforma de e-commerce, redes sociales y performance.",
    width: "126",
    height: "69",
  },
];

const partners = [
  {
    image: "/images/Partners/Meta.png",
    imageWidth: "120",
    imageHeight: "120",
    title: "Digital Marketing Associate",
    description:
      "Nuestro enfoque se centra en entregar y seguir resultados tangibles para nuestros clientes. Medimos el éxito a través de métricas concretas y estamos constantemente buscando formas de mejorar y superar expectativas.",
  },
  {
    image: "/images/Partners/Shopify.png",
    imageWidth: "407",
    imageHeight: "139",
    title: "Shopify Partner",
    description:
      "Nuestro equipo de expertos ha superado rigurosos estándares de competencia y capacitación, lo que nos permite ofrecerte servicios de eCommerce de vanguardia respaldados por el sello distintivo de Shopify.",
  },
  {
    image: "/images/Partners/Google.png",
    imageWidth: "120",
    imageHeight: "120",
    title: "Google UX Design Professional Certificate",
    description:
      "Nuestro equipo está compuesto por expertos que se dedican a estar a la vanguardia de las últimas tendencias y plataformas de medios. Aplicamos conceptos fundamentales de UX, como el diseño centrado en el usuario, la accesibilidad y el diseño centrado en la equidad.",
  },
  {
    image: "/images/Partners/Semrush.png",
    imageWidth: "378",
    imageHeight: "70",
    title: "Semrush Agency Partners",
    description:
      "Somos un equipo hiperespecializado en diferentes disciplinas (SEO, SEM, Performance, Content, Marketing, Social Media y Branding) para lograr generar estrategias completas alineadas 100% a los objetivos de negocio.",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-[#FDFDFD] flex flex-col items-center justify-between gap-y-16 py-12 lg:gap-y-24 xl:gap-y-48">
      <div className="container flex w-full flex-col gap-24 px-4 xl:gap-48">
        <GridHomeHero />
        <GridFeatured />
        <GridHomeFeatures />
        <GridServices />
        <SliderHome />
        <GridTalent />
        <ContactCTA />
        <Grid items={items} />
        <GridAssociate items={partners} />
        <GridAssociateCarrousel />
        <Slider />
        <GridClients items={clients} />
        {/* <GridBlogs /> */}
      </div>
    </main>
  );
}
