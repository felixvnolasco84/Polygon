import Contact from "@/components/Contact/Contact";
import GridClients from "@/components/Grid/GridClients";
import GridFeatured from "@/components/Grid/GridFeatured";
import GridFeatures from "@/components/Grid/GridFeatures";
import GridServices from "@/components/Grid/GridServices";
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
    image: "",
    description:
      "La confianza es fundamental para construir relaciones a largo plazo con nuestros clientes, y la única manera de ganar esa confianza es brindando resultados tangibles para su negocio.",
  },
  {
    image: "",
    description:
      "El diablo está en los detalles, por lo que trabajamos arduamente para crear productos que funcionen y luzcan perfectos, manteniendo una reputación bien ganada por la calidad y la atención al detalle.",
  },
  {
    image: "",
    description:
      "Nuestro negocio se basa en este sencillo principio: poner a las personas primero y buscar el mejor entorno posible para que el talento y los clientes trabajen. El negocio inevitablemente prosperará.",
  },
  {
    image: "",
    description:
      "El servicio tiene tanto que ver con el viaje como con el objetivo final. Siempre nos esforzamos al máximo para proporcionar una experiencia de trabajo flexible, positiva e inspiradora para nuestros clientes.",
  },
  {
    image: "",
    description:
      "La confianza es fundamental para construir relaciones a largo plazo con nuestros clientes, y la única manera de ganar esa confianza es brindando resultados tangibles para su negocio.",
  },
  {
    image: "",
    description:
      "El diablo está en los detalles, por lo que trabajamos arduamente para crear productos que funcionen y luzcan perfectos, manteniendo una reputación bien ganada por la calidad y la atención al detalle.",
  },
  {
    image: "",
    description:
      "Nuestro negocio se basa en este sencillo principio: poner a las personas primero y buscar el mejor entorno posible para que el talento y los clientes trabajen. El negocio inevitablemente prosperará.",
  },
  {
    image: "",
    description:
      "El servicio tiene tanto que ver con el viaje como con el objetivo final. Siempre nos esforzamos al máximo para proporcionar una experiencia de trabajo flexible, positiva e inspiradora para nuestros clientes.",
  },
  {
    image: "",
    description:
      "La confianza es fundamental para construir relaciones a largo plazo con nuestros clientes, y la única manera de ganar esa confianza es brindando resultados tangibles para su negocio.",
  },
  {
    image: "",
    description:
      "El diablo está en los detalles, por lo que trabajamos arduamente para crear productos que funcionen y luzcan perfectos, manteniendo una reputación bien ganada por la calidad y la atención al detalle.",
  },
  {
    image: "",
    description:
      "Nuestro negocio se basa en este sencillo principio: poner a las personas primero y buscar el mejor entorno posible para que el talento y los clientes trabajen. El negocio inevitablemente prosperará.",
  },
  {
    image: "",
    description:
      "El servicio tiene tanto que ver con el viaje como con el objetivo final. Siempre nos esforzamos al máximo para proporcionar una experiencia de trabajo flexible, positiva e inspiradora para nuestros clientes.",
  },
  {
    image: "",
    description:
      "La confianza es fundamental para construir relaciones a largo plazo con nuestros clientes, y la única manera de ganar esa confianza es brindando resultados tangibles para su negocio.",
  },
  {
    image: "",
    description:
      "El diablo está en los detalles, por lo que trabajamos arduamente para crear productos que funcionen y luzcan perfectos, manteniendo una reputación bien ganada por la calidad y la atención al detalle.",
  },
  {
    image: "",
    description:
      "Nuestro negocio se basa en este sencillo principio: poner a las personas primero y buscar el mejor entorno posible para que el talento y los clientes trabajen. El negocio inevitablemente prosperará.",
  },
  {
    image: "",
    description:
      "El servicio tiene tanto que ver con el viaje como con el objetivo final. Siempre nos esforzamos al máximo para proporcionar una experiencia de trabajo flexible, positiva e inspiradora para nuestros clientes.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-400">
      <div className="flex flex-col gap-[425px]">
        <Contact />
        <GridServices />
        <GridFeatured />
        <Grid items={items} />
        <GridFeatures items={features} />
        <Slider items={sliderItems} />
        <GridClients items={clients} />
      </div>
    </main>
  );
}
