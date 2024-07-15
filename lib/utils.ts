import { type ClassValue, clsx } from "clsx";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

import Data_Analysis from "@/public/images/Hero/Data Analysis.webp";
import Data_Analysis_Mobile from "@/public/images/Hero/Data-Analysis_Mobile.webp";

import Key_Web_Development from "@/public/images/Hero/Key-Web-Development.webp";
import Key_Web_Development_Mobile from "@/public/images/Hero/Key-Web-Development_Mobile.webp";

import Paid_Media_Marketing from "@/public/images/Hero/Paid Media Marketing.webp";
import Paid_Media_Marketing_Mobile from "@/public/images/Hero/Paid-Media-Marketing_Mobile.webp";

import SEO_and_Content from "@/public/images/Hero/SEO & Content.webp";
import SEO_and_Content_Mobile from "@/public/images/Hero/SEO-&-Content_Mobile.jpg";

import Social_Media_Marketing from "@/public/images/Hero/Social Media Marketing.jpg";
import Social_Media_Marketing_Mobile from "@/public/images/Hero/SEO-&-Content_Mobile.jpg";

import Content_Solutions from "@/videos/Content Solutions.mp4";
import Brand_and_Creative_Strategy from "@/videos/Brand & Creative Strategy.mp4";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const clients = [
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
    image: "/images/Logo/Clients/KEXP@2x.png",
    description:
      "Formamos parte fundamental de la producción de la serie “Live from Mexico City” en Panoram Studios. Para este proyecto, implementamos toda la infraestructura de livestreaming en colaboración con más de 50 artistas de diversas regiones de México.",
    width: "78",
    height: "104",
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
    image: "/images/Logo/Clients/City-Market-Logo.png",
    width: "201",
    height: "51",
    aspect: "square",
  },
];

import Copa from "@/videos/Copa.mp4.json";
import Bupa from "@/public/images/Customers/Bupa.webp";
import InDriveAcapulco from "@/videos/inDrive_Cancún_CGI.mp4.json";
import Apetito from "@/public/images/Customers/Apetito_Portada.webp";

import MitzuVideo from "@/videos/Mitzu.mp4.json";
import CitiMarketVideo from "@/videos/Repostería_01.mp4.json";
import BursanetVideo from "@/videos/Bursanet.mp4.json";
import LaComerVideo from "@/videos/LaComer_Video.mp4.json";
import CCPVideo from "@/videos/CCP_Proyecto_Video.mp4.json";

export const firstProjects: Project[] = [
  {
    title: "City Market",
    description:
      "Creamos contenido integral para City Market, incluyendo videos para redes sociales, recetas culinarias, y contenido de foto en tienda.",
    video: CitiMarketVideo,
  },
  {
    img: Bupa,
    title: "Content Bupa Nacional Vital",
    description:
      "En 2021, nuestro equipo de diseño trabajó en las nuevas tarjetas de identificación para Bupa Nacional Vital.",
  },
  {
    video: Copa,
    title: "Copa",
    description:
      "Copa es la marca del creador del padel Don Enrique Corcuera (Corcuera Padel 1969). Desarrollo de identidad, branding, diseño de producto y contenido.",
  },
  {
    video: InDriveAcapulco,
    title: "inDrive CGI Cancún",
    description:
      "Para el lanzamiento de la primera Ride App con permisos en Cancún creamos contenido un CGI con el mensaje de salida.",
  },
  {
    img: Apetito,
    title: "Apetito Pane En Vía",
    description:
      "Desarrollamos la identidad, logotipo y estrategia de comunicación para Apetito, la innovadora app de delivery de Pane En Vía.",
  },
  {
    title: "Mitzu",
    description:
      "Desde el desarrollo de estrategias digitales hasta la producción de contenido multimedia, gestionamos campañas publicitarias, optimizamos SEO, administramos redes sociales y realizamos activaciones BTL.",
    video: MitzuVideo,
  },
];

export const secondProjects: Project[] = [
  {
    // img: LaComer,
    video: LaComerVideo,
    title: "Instagram La Comer",
    description:
      "Nuestro equipo se enfoca en crear publicaciones atractivas y coherentes que resalten los productos, promociones y eventos de la tienda, fortaleciendo la conexión con los seguidores y potenciando el engagement en redes sociales.",
  },
  {
    // img: CCPortada,
    video: CCPVideo,
    title: "Cuidado con el Perro",
    description:
      "Trabajamos el desarrollo y la producción de contenido para campañas, gestión de licencias, activaciones BTL, redes sociales y SEO.",
  },
  {
    // img: BursaNetPortada,
    video: BursanetVideo,
    title: "Vista Trader de Bursanet",
    description:
      "La nueva forma de monitorear comprar y vender acciones de Bursanet. Generamos el guión, diseño, animación y locución.",
  },
];

export type Project = {
  img?: StaticImageData;
  title: string;
  description: string;
  video?: any;
};

// export const partners = [
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

export const services = [
  {
    backgroundVideo: Brand_and_Creative_Strategy,
    pageTitle: "Brand & Creative Strategy - Polygon Agency",
    metadescription:
      "Construimos marcas fuertes y estrategias creativas impactantes. Descubre cómo Polygon Agency puede llevar tu marca a la mente de las personas y al éxito.",
    title: "Brand & Creative Strategy",
    description:
      "En Polygon, la Creatividad y Estrategia son los pilares fundamentales que impulsan el éxito de las marcas. A través de una combinación excepcional de pensamiento creativo y enfoque estratégico, ofrecemos soluciones publicitarias que capturan la esencia de tu marca y la posicionan en la mente de tu audiencia de manera impactante.",
    itemdescription:
      "La creatividad y estrategia son los pilares fundamentales que impulsan el éxito de las marcas.",
    slug: "brand-and-creative-strategy",
    objectives: [
      {
        title: "Creatividad inspiradora",
        description:
          "Transformamos conceptos en campañas visuales y narrativas, generando contenido que trasciende y resuena en la audiencia. Cada proyecto es una oportunidad para sorprender, aportar frescura y contar historias que conectan de manera profunda con tus clientes potenciales.",
      },
      {
        title: "Estrategia personalizada",
        description:
          "No hay una estrategia única que se adapte a todos. Comprendemos tu mercado, tu audiencia y tu competencia para trazar un plan de acción que te coloque en una posición ventajosa. Cada estrategia se enfoca en maximizar el impacto y garantizar resultados medibles y significativos.",
      },
      {
        title: "Comunicación efectiva",
        description:
          "La comunicación es clave. Nos esforzamos por forjar conexiones auténticas entre tu marca y tu audiencia. Utilizamos un enfoque centrado en el cliente, identificando sus deseos, necesidades y valores para entregar mensajes que resuenen.",
      },
      {
        title: "Impacto medible",
        description:
          "Nuestra Creatividad y Estrategia van de la mano con la medición constante de resultados, métricas y análisis de datos. Esto garantiza que obtengas un retorno de inversión sólido y permite ajustar estrategias según los datos en tiempo real.",
      },
    ],
    features: [
      {
        title: "",
        description:
          "En Polygon, la Creatividad y Estrategia son los pilares fundamentales que impulsan el éxito de las marcas. A través de una combinación excepcional de pensamiento creativo y enfoque estratégico, ofrecemos soluciones publicitarias que capturan la esencia de tu marca y la posicionan en la mente de tu audiencia de manera impactante.",
      },
    ],
    projects: [
      {
        title: "Branding.",
        description:
          "Creación de marca, diseño de logo, nombre, guía de identidad y tono.",
      },
      {
        title: "Estrategia.",
        description:
          "Creación de estrategia de marca, linea de comunicación, ejecución y monitoreo.",
      },
      {
        title: "Consultoría.",
        description:
          "Investigación y diagnóstico, identificación KPI`s, desarrollo de plan de acción.",
      },
    ],
    minNumber: 45000,
    maxNumber: 150000,
    textReference:
      "En caso de que exista, compártenos tu página actual en la que debamos trabajar. (Si no tienes una, puedes proporcionarnos una referencia de lo que buscas).",
  },
  {
    backgroundImageDesktop: Social_Media_Marketing,
    backgroundImageMobile: Social_Media_Marketing_Mobile,
    pageTitle: "Social Media Marketing - Polygon Agency",
    metadescription:
      "Conquista las redes sociales con nosotros. Estrategias diseñadas para aumentar la visibilidad, creatividad, reporte y sugerencias para mejorar tu comunidad.",
    title: "Social Media Marketing",
    description:
      "Nuestra agencia ofrece un completo servicio de Social Media Marketing diseñado para impulsar la presencia de tu marca en las redes sociales. A través de una estrategia personalizada, establecemos objetivos medibles, identificamos tu audiencia objetivo, creamos contenido de calidad y gestionamos tus perfiles en plataformas relevantes.",
    itemdescription:
      "Establecemos objetivos medibles, dentificamos tu audiencia objetivo y creamos contenido de calidad",
    slug: "social-media-marketing",
    objectives: [
      {
        title: "Fortalecer presencia",
        description:
          "Nuestro servicio de Social Media Marketing está diseñado para construir y fortalecer tu presencia en redes sociales, aumentar la interacción con tu audiencia e impulsar el crecimiento de tu marca en el mundo digital.",
      },
      {
        title: "Tono de marca coherente",
        description:
          "Nuestro enfoque se basa en el desarrollo de una voz y tono de marca coherentes, la planificación de un calendario editorial eficiente y el estímulo de la interacción con tu audiencia.",
      },
      {
        title: "Maximizar resultados",
        description:
          "Analizamos y ajustamos nuestra estrategia para maximizar resultados y mantenernos actualizados con las últimas tendencias en redes sociales.",
      },
      {
        title: "Visión clara",
        description:
          "Evaluamos el retorno de inversión (ROI) para que tengas una visión clara de cómo nuestro servicio impacta en tus objetivos comerciales.",
      },
    ],
    features: [
      {
        title: "",
        description:
          "Nuestra agencia ofrece un completo servicio de Social Media Marketing diseñado para impulsar la presencia de tu marca en las redes sociales. A través de una estrategia personalizada, establecemos objetivos medibles, identificamos tu audiencia objetivo, creamos contenido de calidad y gestionamos tus perfiles en plataformas relevantes.",
      },
    ],
    projects: [
      {
        title: "Estrategia.",
        description:
          "Aterrizaje de tu estrategia de comunicación por cada canal o plataforma.",
      },
      {
        title: "Contenido.",
        description:
          "Creación de contenido para la publicación en tus redes sociales.",
      },
      {
        title: "Campañas.",
        description:
          "Aterrizaje de estrategia, creación de contenido, implementación, publicación y seguimiento.",
      },
    ],
    minNumber: 45000,
    maxNumber: 150000,
    textReference:
      "En caso de que exista, compártenos tu página actual en la que debamos trabajar. (Si no tienes una, puedes proporcionarnos una referencia de lo que buscas).",
  },
  {
    backgroundImageDesktop: Paid_Media_Marketing,
    backgroundImageMobile: Paid_Media_Marketing_Mobile,
    pageTitle: "Paid Media Marketing - Polygon Agency",
    metadescription:
      "Aumenta tu visibilidad con nuestro servicio de Paid Media Marketing. Descubre cómo maximizamos tu inversión para obtener resultados tangibles y crecimiento sostenible.",
    title: "Paid Media Marketing",
    description:
      "Un servicio de publicidad digital impulsado por datos y KPIs. Nuestra misión es llevar tu marca al siguiente nivel a través de estrategias de pago altamente optimizadas y orientadas a resultados medibles.",
    itemdescription:
      "Un servicio de publicidad digital impulsado por datos y KPls.",
    slug: "paid-media-marketing",
    objectives: [
      {
        title: "Estrategia Basada en KPIs",
        description:
          "Los indicadores guían nuestras campañas y nos permiten evaluar el rendimiento de manera cuantitativa. Diseñamos nuestras estrategias para alcanzar estos objetivos y superarlos.",
      },
      {
        title: "Publicidad Programática",
        description:
          "Nuestras campañas se ejecutan en tiempo real, y empleamos algoritmos de aprendizaje automático para optimizar las pujas y maximizar la eficiencia en cada impresión publicitaria. Esto nos permite llegar a las personas adecuadas en el momento adecuado.",
      },
      {
        title: "Seguimiento y Atribución",
        description:
          "Utilizamos modelos de atribución multicanal para asignar el valor correcto a cada punto de contacto en el proceso de conversión. Esto nos permite identificar qué canales y estrategias son los más efectivos.",
      },
      {
        title: "Optimización Continua",
        description:
          "Evaluamos el retorno de inversión (ROI) para que tengas una visión clara de cómo nuestro servicio impacta en tus objetivos comerciales.",
      },
    ],
    features: [
      {
        title: "",
        description:
          "Un servicio de publicidad digital impulsado por datos y KPIs. Nuestra misión es llevar tu marca al siguiente nivel a través de estrategias de pago altamente optimizadas y orientadas a resultados medibles.",
      },
    ],
    projects: [
      {
        title: "Campañas.",
        description:
          "Nos enfocamos en campañas de reconocimiento, tráfico, generación de clientes potenciales y conversión.",
      },
      {
        title: "Estrategia Digital.",
        description:
          "Análisis, resolución e implementación de la estrategia, ayudando al crecimiento de la marca.",
      },
      {
        title: "Consultoría.",
        description:
          "Investigación y diagnóstico, identificación KPI`s, desarrollo de plan de acción.",
      },
    ],
    minNumber: 45000,
    maxNumber: 150000,
    textReference:
      "En caso de que exista, compártenos tu página actual en la que debamos trabajar. (Si no tienes una, puedes proporcionarnos una referencia de lo que buscas).",
  },
  {
    backgroundImageDesktop: SEO_and_Content,
    backgroundImageMobile: SEO_and_Content_Mobile,
    pageTitle: "SEO & Content - Polygon Agency",
    metadescription:
      "Hacemos que tu sitio sea rastreable e indexable por Google. Realizamos auditorías y optimizaciones técnicas para mejorar la visibilidad de tu sitio en Google.",
    title: "SEO & Content",
    description:
      "Diseñamos estrategias y contenido de calidad para persuadir a Google. Eleva tu visibilidad y atrae tráfico orgánico con nuestra metodología profesional.",
    itemdescription:
      "El objetivo de nuestro trabajo es generar un impacto positivo que produzca mayores ventas y nutra tus objetivos.",
    slug: "seo-and-content",
    objectives: [
      {
        title: "Posicionamiento orgánico",
        description:
          "Ofrecemos SEO de alta calidad para tu marca. Logramos que aparezcas entre los primeros resultados en Google sin necesidad de publicidad.",
      },
      {
        title: "SEO personalizado",
        description:
          "Valoramos tu marca y trabajamos para tu éxito. Nuestro enfoque es generar ventas y alcanzar tus metas comerciales.",
      },
      {
        title: "Metodología de posicionamiento",
        description:
          "Consta de 4 elementos clave: SEO Técnico, Autoridad de dominio, Calidad del sitio y Visibilidad orgánica.",
      },
      {
        title: "Objetivos tangibles",
        description:
          "El objetivo de nuestro trabajo es generar un impacto positivo que produzca mayores ventas y nutra tus objetivos de negocio.",
      },
    ],
    features: [
      {
        title: "SEO Técnico",
        description:
          "Hacemos que tu sitio sea rastreable e indexable por Google. Realizamos auditorías y optimizaciones técnicas para mejorar la visibilidad de tu sitio en Google.",
      },
      {
        title: "Autoridad de dominio",
        description:
          "Creamos contenido valioso y único para agradar a Google y a tus usuarios, mejorando así tu visibilidad.",
      },
      {
        title: "Calidad del sitio y popularidad",
        description:
          "Nos enfocamos en la semántica, estructura y velocidad. Optimizamos tu sitio y generamos enlaces de calidad para aumentar tu presencia en línea.",
      },
      {
        title: "Visibilidad Orgánica",
        description:
          "Corregimos errores y mejoramos el rendimiento. Monitorizamos y ajustamos continuamente para asegurar un buen rendimiento en Google.",
      },
    ],
    projects: [
      {
        title: "SEO Técnico.",
        description:
          "Optimización de un sitio web para mejorar su visibilidad en los motores de búsqueda.",
      },
      {
        title: "SEO Content.",
        description:
          "Creación y optimización de contenido para atraer tráfico de calidad.",
      },
      {
        title: "Consultoría.",
        description:
          "Asesoramiento especializado para desarrollar estrategias efectivas de SEO.",
      },
    ],
    minNumber: 45000,
    maxNumber: 150000,
    textReference:
      "En caso de que exista, compártenos tu página actual en la que debamos trabajar. (Si no tienes una, puedes proporcionarnos una referencia de lo que buscas).",
  },
  {
    backgroundImageDesktop: Key_Web_Development,
    backgroundImageMobile: Key_Web_Development_Mobile,
    pageTitle: "Web Development Profesional - Polygon Agency",
    metadescription:
      "Impulsa tu presencia online con nuestro servicio de desarrollo web. Diseño responsive, velocidad, y funcionalidades avanzadas para destacar en Google.",
    title: "Key Web Development Services",
    description:
      "Una oferta integral de servicios de desarrollo web. Nuestro enfoque técnico y avanzado impulsa la creación de sitios web de alto rendimiento y funcionalidad excepcional desde páginas plenamente informativas hasta e-commerce de alta escala.",
    itemdescription:
      "Nuestro enfoque técnico y avanzado impulsa la creación de sitios web de alto rendimiento.",
    slug: "key-web-development-services",
    objectives: [
      {
        title: "Diseño personalizado",
        description:
          "Desarrollamos sitios web a medida con un enfoque en UX/UI. Creamos interfaces atractivas y funcionales que ofrecen una experiencia de usuario.",
      },
      {
        title: "Desarrollo técnico avanzado",
        description:
          "Utilizamos tecnologías de desarrollo líderes como HTML5, CSS3 y JavaScript. Garantizamos la seguridad, escalabilidad y eficiencia de tu sitio mediante la programación eficiente.",
      },
      {
        title: "SEO integrado",
        description:
          "Integramos estrategias de SEO desde el inicio. Optimizamos la estructura, contenido y rendimiento del sitio para mejorar su visibilidad en los motores de búsqueda.",
      },
      {
        title: "Mantenimiento y Actualizaciones Continuas ",
        description:
          "Ofrecemos servicios de mantenimiento continuo, incluyendo parches de seguridad y actualizaciones de tecnología. Mantenemos tu sitio en pleno funcionamiento y al día con las últimas tendencias web.",
      },
    ],
    features: [
      {
        title: "",
        description:
          "Una oferta integral de servicios de desarrollo web. Nuestro enfoque técnico y avanzado impulsa la creación de sitios web de alto rendimiento y funcionalidad excepcional desde páginas plenamente informativas hasta e-commerce de alta escala.",
      },
    ],
    projects: [
      {
        title: "Diseño y Desarrollo Web.",
        description:
          "Creación del diseño de tu página y desarrollo a la medida de tu plataforma.",
      },
      {
        title: "Desarrollo Web.",
        description:
          "Creación de páginas, e-commerce, blogs, sobre un diseño predeterminado.",
      },
      {
        title: "Diseño Web.",
        description:
          "Creación del diseño de tu página web lista para el desarrollo. Archivo de Figma o Adobe XD.",
      },
    ],
    minNumber: 45000,
    maxNumber: 150000,
    textReference:
      "En caso de que exista, compártenos tu página actual en la que debamos trabajar. (Si no tienes una, puedes proporcionarnos una referencia de lo que buscas).",
  },
  {
    backgroundVideo: Content_Solutions,
    pageTitle: "Content Solutions - Polygon Agency",
    metadescription:
      "Contenido que destaca, conecta y convierte. Descubre las soluciones de contenido personalizadas de Polygon Agency para potenciar tu presencia online de manera significativa.",
    title: "Content Solutions",
    description:
      "Proporcionamos un servicio especializado en la creación y gestión de contenido digital. Ofrecemos una amplia variedad de formatos, incluyendo contenido gráfico, fotografía de producto, fotografía situacional, contenido audiovisual, animación 2D y 3D, así como contenido generado con HTML para satisfacer tus necesidades de contenido en línea.",
    itemdescription:
      "Proporcionamos un servicio espedializado en la creación y gestión de contenido digital.",
    slug: "content-solutions",
    objectives: [
      {
        title: "Estrategia de contenido",
        description:
          "Desarrollamos estrategias de contenido basadas en tus objetivos comerciales. Identificamos oportunidades de crecimiento y creamos un plan que abarca múltiples formatos de contenido.",
      },
      {
        title: "Contenido de impacto",
        description:
          "Nuestro equipo especializado en contenido genera piezas gráficas, fotografías, contenido audiovisual de alta calidad, animaciones 2D y 3D y contenido interactivo mediante HTML.",
      },
      {
        title: "Distribución estratégica",
        description:
          "Además de la creación, planificamos y ejecutamos la distribución estratégica de contenido en múltiples canales en línea, aprovechando la versatilidad de los diferentes formatos para amplificar tu presencia y llegar a una audiencia más amplia.",
      },
      {
        title: "Medición y optimización",
        description:
          "Utilizamos análisis de datos para medir el rendimiento de cada formato de contenido. A través de la optimización constante, garantizamos que tu contenido digital se mantenga en evolución, maximizando su impacto y su capacidad para cumplir tus objetivos comerciales.",
      },
    ],
    features: [
      {
        title: "",
        description:
          "Proporcionamos un servicio especializado en la creación y gestión de contenido digital. Ofrecemos una amplia variedad de formatos, incluyendo contenido gráfico, fotografía de producto, fotografía situacional, contenido audiovisual, animación 2D y 3D, así como contenido generado con HTML para satisfacer tus necesidades de contenido en línea.",
      },
    ],
    projects: [
      {
        title: "Video.",
        description:
          "Creatividad, producción, guión y edición de contenido para comunicar mensajes efectivos.",
      },
      {
        title: "Animación",
        description:
          "Creatividad, guión, storyboard, ilustración y animación en 2D y 3D.",
      },
      {
        title: "Gráfico.",
        description:
          "Desde logotipos y material impreso hasta elementos visuales para medios digitales.",
      },
    ],
    minNumber: 45000,
    maxNumber: 150000,
    textReference:
      "En caso de que exista, compártenos tu página actual en la que debamos trabajar. (Si no tienes una, puedes proporcionarnos una referencia de lo que buscas).",
  },
  {
    backgroundImageDesktop: Data_Analysis,
    backgroundImageMobile: Data_Analysis_Mobile,
    pageTitle: "Data Analysis - Polygon Agency",
    metadescription:
      "Convierte datos en decisiones con Polygon Agency. Nuestro enfoque analítico te proporciona información clave para optimizar tu estrategia digital y lograr resultados medibles.",
    title: "Data Analysis",
    description:
      "Data Analysis, un servicio especializado en el análisis de datos para potenciar estrategias publicitarias. Convertimos datos en insights accionables para impulsar el éxito de tu marca.",
    itemdescription:
      "Un servicio especializado en el análisis de datos para potenciar estrategias publicitarias.",
    slug: "data-analysis",
    objectives: [
      {
        title: "Recopilación de datos",
        description:
          "Reunimos y procesamos datos de diversas fuentes, incluyendo métricas publicitarias y comportamiento del usuario. Transformamos datos crudos en información estructurada y de calidad.",
      },
      {
        title: "Análisis e interpretación",
        description:
          "Nuestros analistas profundizan en los datos, descubriendo patrones y tendencias ocultas. Interpretamos resultados de manera experta y brindamos una comprensión enriquecedora para guiar decisiones estratégicas.",
      },
      {
        title: "Optimización en tiempo real",
        description:
          "Utilizamos datos para la optimización constante de tus campañas. Ajustamos pujas, segmentación y creatividades en función de análisis en tiempo real para maximizar el rendimiento y eficiencia.",
      },
      {
        title: "Dashboarding",
        description:
          "Implementamos dashboards personalizados para ofrecer lecturas de datos transparentes en tiempo real. Esto te permite acceder a información crítica de manera instantánea y tomar decisiones informadas para el éxito de tu publicidad.",
      },
    ],
    features: [
      {
        title: "",
        description:
          "Data Analysis, un servicio especializado en el análisis de datos para potenciar estrategias publicitarias. Convertimos datos en insights accionables para impulsar el éxito de tu marca.",
      },
    ],
    projects: [
      {
        title: "Básico.",
        description:
          "Plataformas de medición (GA4 o similar) con conexión de pixel para lectura de datos de campañas.",
      },
      {
        title: "Avanzado.",
        description:
          "Básico + Implementación de eventos desde Tag Manager, auditoría y corrección de código.",
      },
      {
        title: "Completa.",
        description:
          "Avanzado + Creación de Dashboard en lookerstudio para visualización de datos en tiempo real.",
      },
    ],
    minNumber: 45000,
    maxNumber: 150000,
    textReference:
      "En caso de que exista, compártenos tu página actual en la que debamos trabajar. (Si no tienes una, puedes proporcionarnos una referencia de lo que buscas).",
  },
];

export const newServices = [
  {
    title: "Brand Challenge",
    items: [
      "Brand and Creative Strategy.",
      "SEO & Content.",
      "Social Media Marketing.",
      "Online & Traditional Media.",
      "BTL.",
    ],
  },
  {
    title: "Reputation",
    items: [
      "Purpose and ESG.",
      "Risk and Crisis.",
      "Online & Traditional Media.",
      "Thought Leadership.",
      "Event Marketing.",
      "Employer Ambassadors.",
    ],
  },
  {
    title: "Transition and growth",
    items: [
      "Content Solutions.",
      "Brand and Creative Strategy.",
      "Social Media Marketing.",
      "Influencer Marketing.",
      "Online & Traditional Media.",
    ],
  },
  {
    title: "Business Focus",
    items: [
      "Performance Marketing.",
      "SEO & Content.",
      "E-commerce.",
      "Data Analysis.",
      "Issues Management & Crisis.",
    ],
  },
  {
    title: "Social Impact",
    items: ["Creación y ejecución de campañas de alto impacto social"],
  },
];

import UXUI from "@/public/images/Customers/UX-UI-Blog.webp";
import VIDEO from "@/public/images/Customers/Video_Blog.webp";
import CONTENIDO from "@/public/images/Customers/Contenido_Blog.webp";

type Blog = {
  title: string;
  description: string;
  slug: string;
  autor: string;
  publisher: string;
  publisherImageUrl: string;
  imageUrl: string;
  image: StaticImageData;
  publishDate: string;
  content: string;
};

export const blogs: Blog[] = [
  {
    title: "Guía completa de SEO para principiantes",
    description:
      "Aprende los conceptos básicos del SEO y cómo implementarlos para mejorar la visibilidad en línea.",
    slug: "guia-completa-de-seo-para-principiantes",
    autor: "Polygon Agency",
    publisher: "Polygon Agency",
    publisherImageUrl: "https://www.polygonag.com/images/Logo/Logo_Polygon.png",
    imageUrl: "https://www.polygonag.com/images/Customers/Contenido_Blog.png",
    image: CONTENIDO,
    content:
      "<p>El SEO (Search Engine Optimization) es una herramienta fundamental para cualquier estrategia de marketing digital. Esta guía está diseñada para principiantes que buscan comprender los conceptos básicos del SEO y cómo implementarlos para mejorar la visibilidad en línea.</p><p></p><h3><strong>Conceptos Básicos del SEO:</strong></h3><p><strong>Palabras Clave:</strong> La base del SEO. Identifica y utiliza palabras clave relevantes para tu negocio. </p><p><strong>SEO On-Page:</strong> Optimización de elementos dentro de tu sitio web, como títulos, meta descripciones y contenido. </p><p><strong>SEO Off-Page:</strong> Factores externos como enlaces entrantes (backlinks) que afectan el ranking de tu sitio. </p><p> </p><h3><strong>Técnicas Avanzadas de SEO:</strong></h3><p><strong>Optimización de Imágenes:</strong> Utiliza nombres de archivos descriptivos y textos alternativos (alt text). </p><p><strong>SEO Técnico:</strong> Asegúrate de que tu sitio web sea fácil de rastrear por los motores de búsqueda. </p><p><strong>Contenido de Calidad:</strong> Crea contenido valioso y relevante que responda a las preguntas de tus usuarios. </p><p></p><h3><strong>Herramientas Útiles para el SEO:</strong></h3><p><strong>Google Analytics:</strong> Para monitorear el tráfico del sitio web.</p><p><strong>Google Search Console:</strong> Para rastrear el rendimiento de tu sitio en los resultados de búsqueda. </p><p><strong>Ahrefs:</strong> Para analizar enlaces entrantes y la competencia. </p><p></p><p>El SEO es una estrategia continua que requiere tiempo y esfuerzo. Sin embargo, los beneficios de una mejor visibilidad en los motores de búsqueda y un aumento en el tráfico orgánico hacen que valga la pena la inversión.</p>",
    publishDate: "2024-06-13",
  },
  {
    title: "La importancia del UX/UI en la retención de usuarios",
    description:
      "Descubre cómo un buen diseño de UX/UI puede mejorar la retención de usuarios y la lealtad de los clientes.",
    slug: "la-importancia-del-ux-ui-en-la-retencion-de-usuarios",
    autor: "Polygon Agency",
    publisher: "Polygon Agency",
    publisherImageUrl: "https://www.polygonag.com/images/Logo/Logo_Polygon.png",
    imageUrl: "https://www.polygonag.com/images/Customers/UX-UI-Blog.png",
    image: UXUI,
    content:
      "<p>En el mundo digital actual, la experiencia del usuario (UX) y la interfaz de usuario (UI) juegan un papel crucial en la retención de usuarios. Un diseño eficiente no solo atrae a los usuarios, sino que también los mantiene comprometidos y satisfechos, lo que resulta en una mayor lealtad y conversiones.</p><p></p><h3><strong>El Impacto del UX/UI en la Retención de Usuarios:</strong></h3><p>Un buen diseño de UX/UI puede marcar la diferencia entre un usuario que abandona rápidamente tu sitio web y uno que se convierte en un cliente fiel. Las estadísticas muestran que el 88% de los usuarios son menos propensos a regresar a un sitio web después de una mala experiencia.</p><p></p><h3><strong>Elementos Clave de un Buen Diseño UX/UI:</strong></h3><p><strong>Facilidad de Navegación:</strong> Un sitio web debe ser intuitivo y fácil de navegar.</p><p><strong>Tiempo de Carga Rápido:</strong> Los usuarios esperan que las páginas se carguen en menos de 3 segundos.</p><p><strong>Diseño Atractivo y Coherente:</strong> Una apariencia visual atractiva y consistente mantiene a los usuarios interesados.</p><p><strong>Contenido Relevante y Claro:</strong> La información debe ser fácil de encontrar y comprender.</p><p></p><h3><strong>Estudios de Caso de Sitios Web con Excelente UX/UI:</strong></h3><p><strong>Apple:</strong> Con su diseño minimalista y navegación intuitiva, Apple proporciona una experiencia de usuario sin problemas.</p><p><strong>Airbnb:</strong> Con su interfaz limpia y procesos de reserva sencillos, Airbnb ofrece una experiencia de usuario satisfactoria.</p><p></p><p>Invertir en un buen diseño de UX/UI no solo mejora la experiencia del usuario, sino que también aumenta la retención y la lealtad de los clientes. A medida que el entorno digital continúa evolucionando, la importancia del UX/UI solo seguirá creciendo.</p>",
    publishDate: "2024-06-13",
  },
  {
    title: "El Poder del Video Marketing en las Redes Sociales",
    description:
      "Descubre cómo el video marketing puede aumentar el engagement y las conversiones en las redes sociales.",
    slug: "el-poder-del-video-marketing-en-las-redes-sociales",
    autor: "Polygon Agency",
    publisher: "Polygon Agency",
    publisherImageUrl: "https://www.polygonag.com/images/Logo/Logo_Polygon.png",
    imageUrl: "https://www.polygonag.com/images/Customers/Video_Blog.png",
    image: VIDEO,
    content:
      "<p>El video marketing se ha convertido en una herramienta poderosa en el arsenal de cualquier especialista en marketing digital. Los videos no solo aumentan el engagement en las redes sociales, sino que también mejoran la retención de información y las conversiones.</p><p></p><h3><strong>Beneficios del Video Marketing:</strong></h3><p><strong>Mayor Engagement:</strong> Los videos tienden a recibir más likes, comentarios y compartidos que otros tipos de contenido.</p><p><strong>Mejor Retención de Información:</strong> Los usuarios retienen el 95% de un mensaje cuando lo ven en un video, en comparación con solo el 10% cuando lo leen en texto.</p><p><strong>Aumento de Conversiones: </strong>Las páginas de destino con videos pueden aumentar las conversiones en un 80% .</p><p></p><h3><strong>Estrategias para el Video Marketing en Redes Sociales:</strong></h3><p><strong>Videos Cortos y Concisos:</strong> Mantén los videos cortos para captar la atención rápidamente.</p><p><strong>Historias en Instagram y Facebook:</strong> Utiliza las historias para contenido detrás de escenas y promociones rápidas.</p><p><strong>Contenido en Vivo:</strong> Los videos en vivo pueden generar un alto nivel de interacción y participación en tiempo real.</p><p> </p><h3><strong>Ejemplos de Campañas Exitosas:</strong></h3><p><strong>GoPro: </strong>Con su contenido generado por usuarios, GoPro ha construido una comunidad sólida y comprometida.</p><p><strong>Tasty de BuzzFeed:</strong> Sus videos de recetas rápidas y fáciles han alcanzado millones de visualizaciones y compartidos.</p><p></p><p>El video marketing es una estrategia esencial para cualquier marca que busque aumentar su presencia y engagement en las redes sociales. Con la planificación y ejecución adecuadas, los videos pueden transformar la manera en que te conectas con tu audiencia.</p>",
    publishDate: "2024-06-13",
  },
];
