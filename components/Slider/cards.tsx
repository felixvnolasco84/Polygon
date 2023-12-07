import React from "react";
import clsx from "clsx";
import { neueLight, neueThin, neueXThin } from "@/styles/fonts";
import Aura from "@/public/images/Customers/Aura.png";
import Bupa from "@/public/images/Customers/Bupa.png";
import InDrive from "@/public/images/Customers/InDrive.png";
import Image from "next/image";

type CardProps = {
  className?: string;
  slideId: string;
  item: any;
};
export const Card = ({ className, slideId, item }: CardProps) => (
  <div
    data-slide={slideId}
    className={clsx(className, "flex w-full flex-col gap-5")}
  >
    <div className="h-[520px] overflow-hidden rounded-lg">
      <Image
        className="h-full w-full bg-center object-cover object-center"
        src={item.image}
        width={825}
        height={520}
        alt=""
      />
    </div>

    <div className="flex flex-col gap-2">
      <h2
        className={`${neueLight.className} leading-none  text-3xl text-black-500`}
      >
        {item.title}
      </h2>
      <p
        className={`${neueThin.className} leading-[40px] text-2xl text-black-500`}
      >
        {item.description}
      </p>
    </div>
  </div>
);

export const Mobile = ({ className, slideId, item }: CardProps) => (
  <div
    data-slide={slideId}
    className={clsx(className, "flex w-full flex-col gap-5")}
  >
    <div className="h-[480px] overflow-hidden rounded-lg">
      <Image
        className="h-full w-full bg-center object-cover object-center"
        src={item.image}
        width={520}
        height={520}
        alt=""
      />
    </div>

    <div className="flex flex-col gap-1">
      <h2
        className={`${neueThin.className} leading-none  text-xl text-black-500`}
      >
        {item.title}
      </h2>
      <p
        className={`${neueXThin.className} text-lg text-black-500`}
      >
        {item.description}
      </p>
    </div>
  </div>
);

export const Cards = [
  <Card
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: Aura,
      title: "Social & Paid Media",
      description:
        "Contenido redes sociales para Círculo Laboral, Cícrulo de Proveedores y Aura, campañas de performance marketing en Linkedin, meta y google.",
    }}
  />,
  <Card
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: InDrive,
      title: "inDrive ft. Martina la Peligrosa",
      description:
        "Campaña enfocada en generación de UGC, estrategia, creatividad, producción audiovisual y musical.",
    }}
  />,
  <Card
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: Bupa,
      title: "Content Bupa Nacional Vital",
      description:
        "Nuestro equipo está constantemente generando ideas frescas e innovadoras para ayudar a nuestros clientes a destacar y alcanzar sus objetivos.",
    }}
  />,
];

export const MobileCards = [
  <Mobile
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: Aura,
      title: "Social & Paid Media",
      description:
        "Contenido redes sociales para Círculo Laboral, Cícrulo de Proveedores y Aura, campañas de performance marketing en Linkedin, meta y google.",
    }}
  />,
  <Mobile
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: InDrive,
      title: "inDrive ft. Martina la Peligrosa",
      description:
        "Campaña enfocada en generación de UGC, estrategia, creatividad, producción audiovisual y musical.",
    }}
  />,
  <Mobile
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: Bupa,
      title: "Content Bupa Nacional Vital",
      description:
        "Nuestro equipo está constantemente generando ideas frescas e innovadoras para ayudar a nuestros clientes a destacar y alcanzar sus objetivos.",
    }}
  />,
];
