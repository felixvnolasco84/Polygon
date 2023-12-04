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
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Ffelipe_madero.png?alt=media&token=d125bb99-b193-4cf8-9770-1a238b78e70e",
    role: "CEO & Founder Partner",
  },
  {
    name: "Manuel Manterola",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fmanuel_manterola.png?alt=media&token=739a05c4-c72f-4f93-aaeb-72df8dee5551",
    role: "NB Director & Partner",
  },
  {
    name: "Rodrigo Ogarrio",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Frodrigo_ogarrio.png?alt=media&token=2af4b084-88c6-49eb-af95-b202236c92b6",
    role: "CCO & Founder Partner",
  },
  {
    name: "Nicole Woodman",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fnicole_woodman.png?alt=media&token=ba356584-00ca-4b8f-86df-61ed45c98630",
    role: "Business Develop Manager",
  },
  {
    name: "Gala Gallegos",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fgala_gallegos.png?alt=media&token=44a7ef68-1fc9-4058-b53f-e61ce4e7c579",
    role: "Head of Operations",
  },
  {
    name: "Nicolas Sotelo",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fnicolas_sotelo.png?alt=media&token=c5416d45-f7d3-4a8c-bc04-ebb66e72ee1e",
    role: "Creative Director",
  },
  {
    name: "Alba Rodriguez",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Falba_rodriguez.png?alt=media&token=a5cd5921-af92-4ea1-8c4e-74b5ba87617e",
    role: "SEO Director",
  },
  {
    name: "Edgar Magaña",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fedgar_magana.png?alt=media&token=1b4ca568-7e25-481f-a2ac-9f41f6050264",
    role: "Data Analyst",
  },
  {
    name: "Mariana Recinas",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fmariana_recinas.png?alt=media&token=7083c845-8901-4242-9006-9dec3e7f9830",
    role: "Performance Marketing",
  },
  {
    name: "Felix Nolasco",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Ffelix_nolasco.png?alt=media&token=8ee045fc-0963-4165-a56e-f500a2008bd5",
    role: "Software Developer",
  },
  {
    name: "Pablo Noguerón",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fpablo_nogueron.png?alt=media&token=9548753f-0572-4bf1-a3b9-3de01cc9313f",
    role: "Content Designer",
  },
  {
    name: "Jimena Rivera",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fjimena_rivera.png?alt=media&token=5a853ec2-932f-47b0-ba51-d97e0e489629",
    role: "Junior Designer",
  },
  {
    name: "Sebastián Designer",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fsebastian_alarcon.png?alt=media&token=eb55d4d0-97b7-4d11-ba5d-903d2ab17b50",
    role: "Senior Designer",
  },
  {
    name: "Eduardo Ruiz",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Feduardo_ruiz.png?alt=media&token=c1792b0d-4dc4-4c2e-ae0a-54e65f34e3e8",
    role: "Production Director",
  },
  {
    name: "Lorena G. Cuaxiloa",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Florena_g.png?alt=media&token=a630c360-8f45-4763-98a7-173724e47743",
    role: "Content Creator",
  },
  {
    name: "Elena Gas",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Felena_gas.png?alt=media&token=1d0eb2b8-72b4-43f5-8f9c-aa64309945b6",
    role: "Social Media Manager",
  },
  {
    name: "Pamela Ramírez",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fpamela_ramirez.png?alt=media&token=9157d6da-6da1-4c54-9d59-eec92d1ddfcb",
    role: "SEO Content Writer",
  },
  {
    name: "Cid Galván",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fcid_galvan.png?alt=media&token=2bad2da6-7673-4efe-b1f4-056e4e7cb875",
    role: "Content Editor",
  },
  {
    name: "Liliana Moctezuma",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Fliliana_moctezuma.png?alt=media&token=0fbe9bc8-441c-4e5c-b762-0db1009bc108",
    role: "Office Administrator",
  },
  {
    name: "Fernando Herrera",
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Members%2Ffernando_herrera.png?alt=media&token=11414ffc-6f62-482d-93d8-c4171ac51327",
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
      <div className="flex flex-col gap-16 lg:gap-[425px]">
        <GridHomeHero />
        <GridServices />
        <GridFeatured />
        {/* <SuccessMessage /> */}
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
