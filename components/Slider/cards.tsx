import { useState } from "react";
import clsx from "clsx";
import { neueThin, neueXThin } from "@/styles/fonts";
import Bupa from "@/public/images/Customers/Bupa.png";
import InDrive from "@/public/images/Customers/InDrive.png";
import Bursanet from "@/public/images/Customers/Bursanet.png";
import CCP from "@/public/images/Customers/CCP.png";
import CCPTaqueria from "@/public/images/Customers/CCP-Taqueria.png";
import Copa from "@/public/images/Customers/Copa.png";
import Image from "next/image";
import LinkComponent from "../Link/LinkComponent";
import VideoComponent from "../Video/VideoComponent";

import BursanetVideo from '@/videos/Bursanet.mp4';
import CCPVideo from '@/videos/CCP.mp4';
import CopaVideo from '@/videos/Copa.mp4';
import InDriveVideo from '@/videos/InDrive.mp4';


type CardProps = {
  className?: string;
  slideId: string;
  item: any;
};

export const Card = ({ className, slideId, item }: CardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      data-slide={slideId}
      className={clsx(className, "flex w-full flex-col gap-5")}
    >
      <div className="h-[520px] overflow-hidden rounded-lg lg:h-[280px] xl:h-[520px]">
        {isPlaying ? (
          item.videoComponent ? (
            item.videoComponent
          ) : (
            <Image
              className="h-full w-full bg-center object-cover object-center"
              src={item.image}
              width={1650}
              height={1040}
              alt=""
              onClick={() => setIsPlaying(true)}
            />
          )
        ) : (
          <Image
            className="h-full w-full bg-center object-cover object-center"
            src={item.image}
            width={1650}
            height={1040}
            alt=""
            onClick={() => setIsPlaying(true)}
          />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h2
          className={`${neueThin.className} leading-none lg:text-2xl xl:text-3xl text-black-500`}
        >
          {item.title}
        </h2>
        <p
          className={`${neueXThin.className} leading-[40px] lg:text-xl xl:text-2xl text-black-500`}
        >
          {item.description}
        </p>
      </div>
      {item.linkComponent && item.linkComponent}
    </div>
  );
};

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
        className={`${neueThin.className} leading-none text-xl md:text-2xl text-black-500`}
      >
        {item.title}
      </h2>
      <p className={`${neueXThin.className} text-lg md:text-xl text-black-500`}>
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
      image: Copa,
      videoComponent: <VideoComponent video={CopaVideo} />,
      title: "Copa",
      description:
        "Creación de nombre, desarrollo de marca, diseño web y contenido para Copa (Corcuera Padel), la marca del creador del pádel.",
      linkComponent: (
        <LinkComponent
          link={"https://copapadel.com/"}
          title="Visitar sitio web."
        />
      ),
    }}
  />,
  <Card
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: InDrive,
      videoComponent: <VideoComponent video={InDriveVideo} />,
      title: "inDrive ft. Martina la Peligrosa",
      description:
        "Campaña enfocada en generación de UGC, estrategia, creatividad, producción audiovisual y musical.",
    }}
  />,
  <Card
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: CCPTaqueria,
      videoComponent: <VideoComponent video={CCPVideo} />,
      title: "Colaboración CCP x Taquería Gabriel",
      description:
        "Producción audiovisual y activación para regalar el 'Taco Perro' el 15 de septiembre mediante un food truck.",
    }}
  />,
  <Card
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: Bursanet,
      videoComponent: <VideoComponent video={BursanetVideo} />,
      title: "Vista Trader de Bursanet",
      description:
        "La nueva forma de monitorear comprar y vender acciones de Bursanet. Generamos el guión, diseño, animación y locución.",
      linkComponent: (
        <LinkComponent
          link={"https://www.youtube.com/watch?v=n6B3NwBiZfQ"}
          title="Ir a ver el contenido"
        />
      ),
    }}
  />,
  <Card
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: CCP,
      // video: BursanetVideo,
      title: "CCP Reposicionamiento Mujeres",
      description:
        "Campaña centrada en reposicionar la línea de ropa femenina, que incluye producción audiovisual y marketing de rendimiento.",
    }}
  />,
  <Card
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: Bupa,
      // video: BursanetVideo,
      title: "Diseño Bupa Nacional Vital ID Cards",
      description:
        "En 2021, nuestro equipo de diseño trabajó en las nuevas tarjetas de identificación para Bupa Nacional Vital.",
    }}
  />,
];

export const MobileCards = [
  <Mobile
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: Copa,
      title: "Copa",
      description:
        "Creación de nombre, desarrollo de marca, diseño web y contenido para Copa (Corcuera Padel), la marca del creador del pádel.",
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
      image: CCPTaqueria,
      title: "Colaboración CCP x Taquería Gabriel",
      description:
        "Producción audiovisual y activación para regalar el 'Taco Perro' el 15 de septiembre mediante un food truck.",
    }}
  />,
  <Mobile
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: Bursanet,
      title: "Vista Trader de Bursanet",
      description:
        "La nueva forma de monitorear comprar y vender acciones de Bursanet. Generamos el guión, diseño, animación y locución.",
    }}
  />,
  <Mobile
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: CCP,
      title: "CCP Reposicionamiento Mujeres",
      description:
        "Campaña centrada en reposicionar la línea de ropa femenina, que incluye producción audiovisual y marketing de rendimiento.",
    }}
  />,
  <Mobile
    slideId="Slide 1"
    key="amber-card"
    item={{
      image: Bupa,
      title: "Diseño Bupa Nacional Vital ID Cards",
      description:
        "En 2021, nuestro equipo de diseño trabajó en las nuevas tarjetas de identificación para Bupa Nacional Vital.",
    }}
  />,
];
