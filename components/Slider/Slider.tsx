"use client";

import BursanetVideo from "@/videos/Bursanet.mp4";
import CCPVideo from "@/videos/CCP.mp4";
import CopaVideo from "@/videos/Copa.mp4";
import InDriveVideo from "@/videos/InDrive.mp4";
import Bupa from "@/public/images/Customers/Bupa.png";
import InDrive from "@/public/images/Customers/InDrive.png";
import Bursanet from "@/public/images/Customers/Bursanet.png";
import CCP from "@/public/images/Customers/CCP.png";
import CCPTaqueria from "@/public/images/Customers/CCP-Taqueria.png";
import Copa from "@/public/images/Customers/Copa.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { neueThin, neueXThin } from "@/styles/fonts";
import { useEffect, useState } from "react";
import LinkComponent from "../Link/LinkComponent";
import VideoComponent from "../Video/VideoComponent";
import clsx from "clsx";
import Image from "next/image";

export const Cards = [
  {
    image: Copa,
    videoComponent: (
      <VideoComponent
        
        video={CopaVideo}
      />
    ),
    title: "Copa",
    description:
      "Creación de nombre, desarrollo de marca, diseño web y contenido para Copa (Corcuera Padel), la marca del creador del pádel.",
    linkComponent: (
      <LinkComponent
        link={"https://copapadel.com/"}
        title="Visitar sitio web."
      />
    ),
  }, 
  {
    image: InDrive,
    videoComponent: (
      <VideoComponent
        
        video={InDriveVideo}
      />
    ),
    title: "inDrive ft. Martina la Peligrosa",
    description:
      "Campaña enfocada en generación de UGC, estrategia, creatividad, producción audiovisual y musical.",
  },
  {
    image: CCPTaqueria,
    // videoComponent: (
    //   <VideoComponent
    
    //     video={CCPVideo}
    //   />
    // ),
    title: "Colaboración CCP x Taquería Gabriel",
    description:
      "Producción audiovisual y activación para regalar el 'Taco Perro' el 15 de septiembre mediante un food truck.",
  },
  {
    image: Bursanet,
    videoComponent: (
      <VideoComponent
        
        video={BursanetVideo}
      />
    ),
    title: "Vista Trader de Bursanet",
    description:
      "La nueva forma de monitorear comprar y vender acciones de Bursanet. Generamos el guión, diseño, animación y locución.",
    linkComponent: (
      <LinkComponent
        link={"https://www.youtube.com/watch?v=n6B3NwBiZfQ"}
        title="Ir a ver el contenido"
      />
    ),
  },
  {
    image: CCP,
    title: "CCP Reposicionamiento Mujeres",
    description:
      "Campaña centrada en reposicionar la línea de ropa femenina, que incluye producción audiovisual y marketing de rendimiento.",
  },
  {
    image: Bupa,
    title: "Diseño Bupa Nacional Vital ID Cards",
    description:
      "En 2021, nuestro equipo de diseño trabajó en las nuevas tarjetas de identificación para Bupa Nacional Vital.",
  },
];

const Slider = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className="flex max-w-fit flex-col gap-8 lg:gap-12">
      <h4
        className={`${neueXThin.className} text-2xl lg:text-5xl xl:text-6xl leading-none md:px-0`}
      >
        Nuestro Trabajo
      </h4>
      <Carousel
        opts={{
          align: "start",
        }}
        className=""
      >
        <CarouselContent>
          {Cards.map((item, index) => (
            <CarouselItem key={index} className="basis-full lg:basis-1/2">
              <Card className="border-none border-transparent shadow-none">
                <CardContent className="flex aspect-square items-center justify-center border-none border-transparent p-0">
                  <div
                    data-slide={index}
                    className={clsx("flex w-full flex-col gap-5")}
                  >
                    <div className="h-[520px] overflow-hidden rounded-lg lg:h-[280px] xl:h-[520px]">
                      {item.videoComponent ? (
                        item.videoComponent
                      ) : (
                        <Image
                          className="h-full w-full bg-center object-cover object-center"
                          src={item.image}
                          width={1650}
                          height={1040}
                          alt=""
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="eager"
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2
                        className={`${neueThin.className} leading-none text-xl md:text-2xl lg:text-2xl xl:text-3xl text-black-500`}
                      >
                        {item.title}
                      </h2>
                      <p
                        className={`${neueXThin.className} md:leading-[40px] text-lg md:text-xl lg:text-xl xl:text-2xl text-black-500`}
                      >
                        {item.description}
                      </p>
                    </div>
                    {item.linkComponent ? (
                      item.linkComponent
                    ) : (
                      <div className="min-h-[40px]"></div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
