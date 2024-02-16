import { neueThin, neueXThin } from "@/styles/fonts";

import Image from "next/image";
import Link from "next/link";
import rightArrow from "@/public/images/rightArrow.svg";

import Data_Analysis from "@/public/images/Hero/Data Analysis.jpg";
import Data_Analysis_Mobile from "@/public/images/Hero/Data-Analysis_Mobile.jpg";

import Key_Web_Development from "@/public/images/Hero/Key-Web-Development.jpg";
import Key_Web_Development_Mobile from "@/public/images/Hero/Key-Web-Development_Mobile.jpg";

import Paid_Media_Marketing from "@/public/images/Hero/Paid Media Marketing.jpg";
import Paid_Media_Marketing_Mobile from "@/public/images/Hero/Paid-Media-Marketing_Mobile.jpg";

import SEO_and_Content from "@/public/images/Hero/SEO & Content.jpg";
import SEO_and_Content_Mobile from "@/public/images/Hero/SEO-&-Content_Mobile.jpg";

import Social_Media_Marketing from "@/public/images/Hero/Social Media Marketing.jpg";
import Social_Media_Marketing_Mobile from "@/public/images/Hero/SEO-&-Content_Mobile.jpg";

import Content_Solutions from "@/videos/Content Solutions.mp4";
import Brand_and_Creative_Strategy from "@/videos/Brand & Creative Strategy.mp4";

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

export default function GridServices() {
  return (
    <div className="flex flex-col gap-4 px-4 lg:gap-12 lg:px-12 xl:px-24">
      <h2
        className={`${neueXThin.className} text-2xl lg:text-5xl xl:text-6xl text-black-500`}
      >
        Experiencia, pasión y resultados en cada servicio.
      </h2>

      <div className="flex flex-col gap-4">
        {services.map((service: any, index: any) => (
          <Link
            href={`/servicios/${service.slug}`}
            key={index}
            className="group flex items-center justify-between border-b border-gray pb-3 text-black-600 lg:gap-4 lg:pb-3 lg:pt-6 xl:pb-6 xl:pt-12"
          >
            <div className="relative w-full lg:w-4/12">
              <h3
                className={`${neueThin.className} text-xl transition ease-out relative z-10 lg:text-3xl xl:text-4xl lg:group-hover:bg-white lg:group-hover:translate-x-14`}
              >
                {service.title}
              </h3>
              <Image
                className="lg:group-hover:bg-flourescent-yellow absolute left-[0%] top-[0%] hidden h-fit cursor-pointer rounded-full p-2 lg:bg-gray-400 lg:group-hover:block"
                width={40}
                height={40}
                src={rightArrow}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
                alt=""
              />
            </div>

            <div className="flex items-center gap-12 lg:w-8/12">
              <p
                className={`${neueXThin.className} hidden lg:block lg:text-lg xl:text-2xl group-hover:text-transparent w-11/12`}
              >
                {service.itemdescription}
              </p>
              <div className="hidden h-fit max-h-[40px] max-w-[40px] rounded-full bg-flourescentYellow p-2 lg:block lg:group-hover:invisible">
                <Image
                  src={rightArrow}
                  width={48}
                  height={48}
                  alt=""
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="eager"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
