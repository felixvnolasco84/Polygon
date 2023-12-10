"use client";

import React, { useRef, useState } from "react";
import { neueLight, neueThin, neueXThin } from "@/styles/fonts";
import Image from "next/image";

const partners = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/partners%2FMeta.png?alt=media&token=767cbf72-a5f0-4a20-8a29-beace13ac025",
    imageWidth: "180",
    imageHeight: "180",
    title: "Digital Marketing Associate",
    description:
      "Nuestro enfoque se centra en entregar y seguir resultados tangibles para nuestros clientes. Medimos el éxito a través de métricas concretas y estamos constantemente buscando formas de mejorar y superar expectativas.",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/partners%2FShopify.png?alt=media&token=972ac032-c04b-460d-a5c1-ae5155ae2cc8",
    imageWidth: "407",
    imageHeight: "139",
    title: "Shopify Partner",
    description:
      "Nuestro equipo de expertos ha superado rigurosos estándares de competencia y capacitación, lo que nos permite ofrecerte servicios de eCommerce de vanguardia respaldados por el sello distintivo de Shopify.",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/partners%2FGoogle.png?alt=media&token=333813ab-4562-41f3-927a-2106f29b1674",
    imageWidth: "120",
    imageHeight: "120",
    title: "Google UX Design Professional Certificate",
    description:
      "Nuestro equipo está compuesto por expertos que se dedican a estar a la vanguardia de las últimas tendencias y plataformas de medios. Aplicamos conceptos fundamentales de UX, como el diseño centrado en el usuario, la accesibilidad y el diseño centrado en la equidad.",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/partners%2FSemrush.png?alt=media&token=53b25f08-0078-462f-8fc3-b0be82e8c059",
    imageWidth: "378",
    imageHeight: "70",
    title: "Semrush Agency Partners",
    description:
      "Somos un equipo hiperespecializado en diferentes disciplinas (SEO, SEM, Performance, Content, Marketing, Social Media y Branding) para lograr generar estrategias completas alineadas 100% a los objetivos de negocio.",
  },
];

export const GridAssociateCarrousel = () => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const TeamCarrouselRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    TeamCarrouselRef.current!.style.cursor = "grabbing";
    setStartX(e.pageX - (TeamCarrouselRef.current?.offsetLeft || 0));
    setScrollLeft(TeamCarrouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    TeamCarrouselRef.current!.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    setIsDown(false);
    TeamCarrouselRef.current!.style.cursor = "grab";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (TeamCarrouselRef.current?.offsetLeft || 0);
    const walk = x - startX;
    TeamCarrouselRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={`w-full lg:hidden flex flex-col gap-7 px-4 lg:px-24 ${neueLight.className}`}
    >
      <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl lg:leading-tight lg:tracking-tighter xl:text-4xl">
        Calidad Polygon, certificaciones y partners.
      </h2>

      <div
        className="flex max-w-full cursor-grab gap-4 overflow-x-auto hide-scrollbar-utility active:cursor-grabbing"
        ref={TeamCarrouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {partners.map((item: any, index: any) => (
          <div className="flex flex-grow flex-col lg:gap-[30px]" key={index}>
            <div className="flex h-full min-w-[350px] flex-col justify-center gap-2 rounded-[10px] bg-gray-400 px-6 py-6 lg:pl-6">
              <div
                className={`flex h-32 items-center justify-center rounded-[10px] lg:h-[120px] lg:w-[120px]`}
              >
                {/* FIT image to the container */}
                <div className={`flex h-fit justify-center lg:justify-start`}>
                  <Image
                    src={item.image}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    className="p-6 md:p-12"
                    // fill={true}
                    // sizes="(max-width: 768px) 100vw, 33vw"
                    alt=""
                  />
                </div>
              </div>

              <div className="flex h-full flex-col items-stretch justify-end gap-2 lg:gap-4">
                <span
                  className={`${neueThin.className} text-xl lg:text-[40px] text-black-500 leading-none`}
                >
                  {item.title}
                </span>
                <span
                  className={`${neueXThin.className} text-lg leading-tight lg:text-2xl text-black-500 lg:leading-[40px] max-w-[694px]`}
                >
                  {item.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
