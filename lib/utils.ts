import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
];
