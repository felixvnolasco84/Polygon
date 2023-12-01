import Contact from "@/components/Contact/Contact";
import SuccessMessage from "@/components/Contact/SuccessMessage";
import GridAssociate from "@/components/Grid/GridAssociate";
import GridClients from "@/components/Grid/GridClients";
import GridFeatured from "@/components/Grid/GridFeatured";
import GridFeatures from "@/components/Grid/GridFeatures";
import GridHomeHero from "@/components/Grid/GridHomeHero";
import GridServices from "@/components/Grid/GridServices";
import GridTalent from "@/components/Grid/GridTalent";
import Grid from "@/components/Grid/GridTeamMembers";
import { GridAssociateCarrousel } from "@/components/Grid/GridAssociateCarrousel";
import Slider from "@/components/Slider/Slider";
import GridBlogs from "@/components/Grid/GridBlogs";


const items = [
  {
    name: "Felipe Madero",
    role: "CEO & Founder Partner",
  },
  {
    name: "Manuel Manterola",
    role: "NB Director & Partner",
  },
  {
    name: "Rodrigo Ogarrio",
    role: "CCO & Founder Partner",
  },
  {
    name: "Nicole Woodman",
    role: "Business Develop Manager",
  },
  {
    name: "Gala Gallegos",
    role: "Head of Operations",
  },
  {
    name: "Nicolas Sotelo",
    role: "Creative Director",
  },
  {
    name: "Edgar Magaña",
    role: "Data Analyst",
  },
  {
    name: "Mariana Recinas",
    role: "Performance Marketing",
  },
  {
    name: "Pablo Noguerón",
    role: "Content Designer",
  },
  {
    name: "Jimena Rivera",
    role: "Junior Designer",
  },
  {
    name: "Sebastián Designer",
    role: "Senior Designer",
  },
  {
    name: "Eduardo Ruiz",
    role: "Production Director",
  },
  {
    name: "Lorena G. Cuaxiloa",
    role: "Content Creator",
  },
  {
    name: "Elena Gas",
    role: "Social Media Manager",
  },
  {
    name: "Pamela Ramírez",
    role: "SEO Content Writer",
  },
  {
    name: "Cid Galván",
    role: "Content Editor",
  },
  {
    name: "Liliana Moctezuma",
    role: "Office Administrator",
  },
  {
    name: "Fernando Herrera",
    role: "Production Assistant",
  },
];

const sliderItems = [
  {
    image: "",
    title: "inDrive ft. Martina la Peligrosa",
    description:
      "Campaña enfocada en generación de UGC, estrategia, creatividad, producción audiovisual y musical.",
  },
  {
    image: "",
    title: "inDrive ft. Martina la Peligrosa 2",
    description:
      "Campaña enfocada en generación de UGC, estrategia, creatividad, producción audiovisual y musical.",
  },
  {
    image: "",
    title: "inDrive ft. Martina la Peligrosa 3",
    description:
      "Campaña enfocada en generación de UGC, estrategia, creatividad, producción audiovisual y musical.",
  },
  {
    image: "",
    title: "inDrive ft. Martina la Peligrosa 4",
    description:
      "Campaña enfocada en generación de UGC, estrategia, creatividad, producción audiovisual y musical.",
  },
  {
    image: "",
    title: "inDrive ft. Martina la Peligrosa 5",
    description:
      "Campaña enfocada en generación de UGC, estrategia, creatividad, producción audiovisual y musical.",
  },
];

const features = [
  {
    title: "Results Driven Marketing",
    description:
      "Nuestro enfoque se centra en entregar y seguir resultados tangibles para nuestros clientes. Medimos el éxito a través de métricas concretas y estamos constantemente buscando formas de mejorar y superar expectativas.",
  },
  {
    title: "In-house Production",
    description:
      "Manejamos cada aspecto de la producción, desde la estrategia y la creatividad hasta la ejecución y el análisis. Esto nos permite mantener un alto nivel de control de calidad como empresa y ofrecer resultados consistentes a nuestros clientes.",
  },
  {
    title: "Social Focused",
    description:
      "Nuestro equipo está compuesto por expertos que se dedican a estar a la vanguardia de las últimas tendencias y plataformas de medios. Creamos contenido y campañas específicamente adaptados a cada canal de redes sociales para maximizar el impacto.",
  },
  {
    title: "Idea Factory",
    description:
      "Nuestro equipo está constantemente generando ideas frescas e innovadoras para ayudar a nuestros clientes a destacar y alcanzar sus objetivos en línea. Siempre estamos ideando formas nuevas y emocionantes de interactuar con las audiencias.",
  },
];

const clients = [
  {
    image: "/images/Logo/Clients/Audible@2x.png",
    description:
      "Generamos más de 1,000 horas de contenido en audiolibros de alta calidad, en colaboración con Audible, una empresa de Amazon.",
  },
  {
    image: "/images/Logo/Clients/Carlsberg@2x.png",
    description:
      "Lanzamos con éxito Tuborg en México, centrándonos en la música con la miniserie “Sounds of the Future,” donde artistas emergentes crearon música junto a productores líderes de LATAM.",
  },
  {
    image: "/images/Logo/Clients/InDrive@2x.png",
    description:
      "Hemos trabajado con más de 400 influencers en toda Latinoamérica, produciendo más de 50 contenidos y llevando a cabo la exitosa campaña “Colombia Suena” que alcanzó +700M de impactos orgánicos.",
  },
  {
    image: "/images/Logo/Clients/Universal@2x.png",
    description:
      "Hemos producido videoclips musicales para artistas como Zoé y Primo Son, logrando +6M de click orgánicos en nuestras producciones.",
  },
  {
    image: "/images/Logo/Clients/Actinver@2x.png",
    description:
      "Creamos una pieza audiovisual animada para el lanzamiento de nuevos activos en la plataforma de trading “Bursanet,” brindando un enfoque empático para comunicar que cualquier persona puede usar la herramienta.",
  },
  {
    image: "/images/Logo/Clients/Bupa@2x.png",
    description:
      "Realizamos un rebranding exitoso de las tarjetas de usuario para Bupa Nacional Vital, destacando la frescura y limpieza de la marca.",
  },
  {
    image: "/images/Logo/Clients/Adobe@2x.png",
    description:
      "Concebimos y produjimos una estrategia de experiencial marketing B2B dirigida a CMO’s para promocionar el Marketing Cloud de Adobe, logrando tener contacto personal y directo con los tomadores de decisiones sobre la categoría.",
  },
  {
    image: "/images/Logo/Clients/canalonce@2x.png",
    description:
      "Conceptualizamos y produjimos la exitosa serie “Emergentes,” mostrando el talento de nuevos artistas de la mano de Phil Vinal (Productor de Zoé, ganador de premios Grammy. Enjambre, Pulp, Placebo, entre otros).",
  },
  {
    image: "/images/Logo/Clients/Pane@2x.png",
    description:
      "Impulsamos la transformación digital, trabajamos esfuerzos en Analytics, Paid Media, Social Media con campañas enfocadas a venta dentro de sus tres canales (Apetito Pane en Via, Onomura).",
  },
  {
    image: "/images/Logo/Clients/Samsung@2x.png",
    description:
      "Suministramos embajadores en el mundo del deporte, fortaleciendo la imagen de la marca y conectando con el público.",
  },
  {
    image: "/images/Logo/Clients/MITZU@2x.png",
    description:
      "Llevamos a cabo una transformación digital completa, desarrollamos la plataforma de e-commerce para Kaiser, implementamos estrategias SEO y analítica mejorando la eficiencia y aumentando las ventas en un 400% en el primer período.",
  },
  {
    image: "/images/Logo/Clients/CCP_Logo@2x.png",
    description:
      "Somos agencia 360º para Cuidado con El Perro trabajando en servicios creativos, producción de contenido, BTL, Paid Media, Social Media, SEO Técnico, CRM y Analytics.",
  },
  {
    image: "/images/Logo/Clients/CirculoProveedores@2x.png",
    description:
      "Desarrollamos estrategias de Social Media y Paid Media B2B para generar leads en Círculo Laboral, Círculo de Proveedores y API Hub, demostrando nuestro compromiso con el crecimiento de su negocio.",
  },
  {
    image: "/images/Logo/Clients/Titan@2x.png",
    description:
      "Estrategia integral de comunicación B2B y B2C centrada principalmente en el sector agropecuario. Nos encargamos de la creación y adaptación de mensajes para su primer impulso en el ámbito de la comunicación digital.",
  },
  {
    image: "/images/Logo/Clients/KEXP@2x.png",
    description:
      "Formamos parte fundamental de la producción de la serie “Live from Mexico City” en Panoram Studios. Para este proyecto, implementamos toda la infraestructura de livestreaming en colaboración con más de 50 artistas de diversas regiones de México.",
  },
  {
    image: "/images/Logo/Clients/NutHouse@2x.png",
    description:
      "Somos la agencia digital integral de The Nut House, encargándonos de desarrollar toda la infraestructura de su plataforma de e-commerce, redes sociales y performance.",
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

const CarrouselItems = [
  {
    image:
      "https://images.pexels.com/photos/13450045/pexels-photo-13450045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "",
  },
  {
    image:
      "https://images.pexels.com/photos/16884746/pexels-photo-16884746/free-photo-of-punto-de-referencia-puerta-alemania-medieval.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "",
  },
  {
    image:
      "https://images.pexels.com/photos/13450045/pexels-photo-13450045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "",
  },
  {
    image:
      "https://images.pexels.com/photos/16884746/pexels-photo-16884746/free-photo-of-punto-de-referencia-puerta-alemania-medieval.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "",
  },
  {
    image:
      "https://images.pexels.com/photos/13450045/pexels-photo-13450045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "",
  },
  {
    image:
      "https://images.pexels.com/photos/16884746/pexels-photo-16884746/free-photo-of-punto-de-referencia-puerta-alemania-medieval.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "",
  },
  {
    image:
      "https://images.pexels.com/photos/13450045/pexels-photo-13450045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "",
  },
  {
    image:
      "https://images.pexels.com/photos/16884746/pexels-photo-16884746/free-photo-of-punto-de-referencia-puerta-alemania-medieval.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "",
  },
];
  
export default function Home() {

  return (
    <main className="bg-gray-[#FDFDFD] flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col gap-[120px] lg:gap-[425px]">
        <GridHomeHero />
        <GridServices />
        {/* <GridFeatured />
        <SuccessMessage /> */}
        <GridTalent />
        <Grid items={items} />
        <GridAssociateCarrousel />
        {/* <GridFeatures items={features} /> */}
        <GridAssociate items={partners} />
        {/* <Slider items={sliderItems} /> */}
        <GridClients items={clients} />
        <GridBlogs />                
      </div>
    </main>
  );
}
