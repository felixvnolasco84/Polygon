import { type ClassValue, clsx } from "clsx";
import { StaticImageData } from "next/image";
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
  {
    image: "/images/Logo/Clients/City-Market-Logo.png",
    width: "201",
    height: "51",
    aspect: "square"
  },
];

import CitiMarket from "@/public/images/Customers/Citi_Market_Portada.png";
import Copa from "@/public/images/Customers/COPA-Hat-Colors.png";
import Bupa from "@/public/images/Customers/Bupa.png";
import InDriveAcapulco from "@/public/images/Customers/Indrive_Acapulco_Portada.png";
import Apetito from "@/public/images/Customers/Apetito_Portada.png";
import ZoePortada from "@/public/images/Customers/Zoe_Portada.png";
import LaComer from "@/public/images/Customers/LaComer_Instagram.png";
import CCPortada from "@/public/images/Customers/CCP_Portada_Peanut.png";
import BursaNetPortada from "@/public/images/Customers/Bursanet_Portada.png";

export const firstProjects: Project[] = [
  {
    img: CitiMarket,
    title: "City Market",
    description:
      "Creamos contenido integral para City Market, incluyendo videos para redes sociales, recetas culinarias, y contenido de foto en tienda.",
  },
  {
    img: Bupa,
    title: "Content Bupa Nacional Vital",
    description:
      "En 2021, nuestro equipo de diseño trabajó en las nuevas tarjetas de identificación para Bupa Nacional Vital.",
  },
  {
    img: Copa,
    title: "Copa",
    description:
      "Copa es la marca del creador del padel Don Enrique Corcuera (Corcuera Padel 1969). Desarrollo de identidad, branding, diseño de producto y contenido.",
  },
  {
    img: InDriveAcapulco,
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
    img: ZoePortada,
    title: "Mitzu",
    description:
      "Desde el desarrollo de estrategias digitales hasta la producción de contenido multimedia, gestionamos campañas publicitarias, optimizamos SEO, administramos redes sociales y realizamos activaciones BTL.",
  },
];

export const secondProjects: Project[] = [
  {
    img: LaComer,
    title: "Instagram La Comer",
    description:
      "Nuestro equipo se enfoca en crear publicaciones atractivas y coherentes que resalten los productos, promociones y eventos de la tienda, fortaleciendo la conexión con los seguidores y potenciando el engagement en redes sociales.",
  },
  {
    img: CCPortada,
    title: "Cuidado con el Perro",
    description:
      "Trabajamos el desarrollo y la producción de contenido para campañas, gestión de licencias, activaciones BTL, redes sociales y SEO.",
  },
  {
    img: BursaNetPortada,
    title: "Vista Trader de Bursanet",
    description:
      "La nueva forma de monitorear comprar y vender acciones de Bursanet. Generamos el guión, diseño, animación y locución.",
  },
];

export type Project = {
  img: StaticImageData;
  title: string;
  description: string;
};
