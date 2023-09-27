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
import Slider from "@/components/Slider/Slider";

const items = [
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
  },
  {
    name: "Felipe Madero",
    role: "CEO/Founder Partner",
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
      "La confianza es fundamental para construir relaciones a largo plazo con nuestros clientes, y la única manera de ganar esa confianza es brindando resultados tangibles para su negocio.",
  },
  {
    image: "/images/Logo/Clients/Carlsberg@2x.png",
    description:
      "El diablo está en los detalles, por lo que trabajamos arduamente para crear productos que funcionen y luzcan perfectos, manteniendo una reputación bien ganada por la calidad y la atención al detalle.",
  },
  {
    image: "/images/Logo/Clients/InDrive@2x.png",
    description:
      "Nuestro negocio se basa en este sencillo principio: poner a las personas primero y buscar el mejor entorno posible para que el talento y los clientes trabajen. El negocio inevitablemente prosperará.",
  },
  {
    image: "/images/Logo/Clients/Actinver@2x.png",
    description:
      "El servicio tiene tanto que ver con el viaje como con el objetivo final. Siempre nos esforzamos al máximo para proporcionar una experiencia de trabajo flexible, positiva e inspiradora para nuestros clientes.",
  },
  {
    image: "/images/Logo/Clients/Bupa@2x.png",
    description:
      "La confianza es fundamental para construir relaciones a largo plazo con nuestros clientes, y la única manera de ganar esa confianza es brindando resultados tangibles para su negocio.",
  },
  {
    image: "/images/Logo/Clients/Adobe@2x.png",
    description:
      "El diablo está en los detalles, por lo que trabajamos arduamente para crear productos que funcionen y luzcan perfectos, manteniendo una reputación bien ganada por la calidad y la atención al detalle.",
  },
  {
    image: "/images/Logo/Clients/Pane@2x.png",
    description:
      "Nuestro negocio se basa en este sencillo principio: poner a las personas primero y buscar el mejor entorno posible para que el talento y los clientes trabajen. El negocio inevitablemente prosperará.",
  },
  {
    image: "/images/Logo/Clients/Samsung@2x.png",
    description:
      "El servicio tiene tanto que ver con el viaje como con el objetivo final. Siempre nos esforzamos al máximo para proporcionar una experiencia de trabajo flexible, positiva e inspiradora para nuestros clientes.",
  },
  {
    image: "/images/Logo/Clients/MITZU@2x.png",
    description:
      "La confianza es fundamental para construir relaciones a largo plazo con nuestros clientes, y la única manera de ganar esa confianza es brindando resultados tangibles para su negocio.",
  },
  {
    image: "/images/Logo/Clients/CirculoProveedores@2x.png",
    description:
      "El diablo está en los detalles, por lo que trabajamos arduamente para crear productos que funcionen y luzcan perfectos, manteniendo una reputación bien ganada por la calidad y la atención al detalle.",
  },
  {
    image: "/images/Logo/Clients/Titan@2x.png",
    description:
      "Nuestro negocio se basa en este sencillo principio: poner a las personas primero y buscar el mejor entorno posible para que el talento y los clientes trabajen. El negocio inevitablemente prosperará.",
  },
  {
    image: "/images/Logo/Clients/KEXP@2x.png",
    description:
      "El servicio tiene tanto que ver con el viaje como con el objetivo final. Siempre nos esforzamos al máximo para proporcionar una experiencia de trabajo flexible, positiva e inspiradora para nuestros clientes.",
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
    image: "https://images.pexels.com/photos/13450045/pexels-photo-13450045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    image: "https://images.pexels.com/photos/16884746/pexels-photo-16884746/free-photo-of-punto-de-referencia-puerta-alemania-medieval.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    image: "https://images.pexels.com/photos/13450045/pexels-photo-13450045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    image: "https://images.pexels.com/photos/16884746/pexels-photo-16884746/free-photo-of-punto-de-referencia-puerta-alemania-medieval.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    image: "https://images.pexels.com/photos/13450045/pexels-photo-13450045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    image: "https://images.pexels.com/photos/16884746/pexels-photo-16884746/free-photo-of-punto-de-referencia-puerta-alemania-medieval.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    image: "https://images.pexels.com/photos/13450045/pexels-photo-13450045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  },
  {
    image: "https://images.pexels.com/photos/16884746/pexels-photo-16884746/free-photo-of-punto-de-referencia-puerta-alemania-medieval.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: ""
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-400">
      <div className="flex flex-col gap-[425px]">
        <GridHomeHero />
        <GridServices />
        <GridFeatured />
        <SuccessMessage />
        <GridTalent />
        <Grid items={items} />
        <GridFeatures items={features} />
        <GridAssociate items={partners} />
        <Slider items={sliderItems} />        
        <GridClients items={clients} />
      </div>
    </main>
  );
}
