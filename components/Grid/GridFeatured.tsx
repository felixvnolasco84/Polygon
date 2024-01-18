"use client"
import { neueThin, neueXThin } from "@/styles/fonts";
import Image from "next/image";
import React from "react";
import Bupa from "@/public/images/Customers/Bupa.png";
import InDriveVideo from "@/videos/InDrive.mp4";
import VideoComponent from "../Video/VideoComponent";
import { CardShowCase } from "../Slider/cards";


const featuredWork = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Customers%2FInDrive.png?alt=media&token=d269ba3a-b0da-4c32-96bc-a08320f48ff3",
    title: "inDrive ft. Martina la Peligrosa",
    description:
      "Campaña para inDrive enfocada en generación de UGC, estrategia, creatividad, producción audiovisual y musical.",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Customers%2FBupa.png?alt=media&token=80f41621-ca3e-4c2f-9f1f-19f15c1e5e5a",
    title: "Content Bupa Nacional Vital",
    description:
      "Nuestro equipo está constantemente generando ideas frescas e innovadoras para ayudar a nuestros clientes a destacar y alcanzar sus objetivos.",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Customers%2FAura.png?alt=media&token=766d7c8c-1b5c-40d7-b5f6-3dd78cca37c6",
    title: "Social & Paid Media",
    description:
      "Contenido redes sociales para Círculo Laboral, Cícrulo de Proveedores y Aura, campañas de performance marketing en Linkedin, meta y google.",
  },
];

const SocialData = {
  image:
    "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Customers%2FAura.png?alt=media&token=766d7c8c-1b5c-40d7-b5f6-3dd78cca37c6",
  title: "Social & Paid Media",
  description:
    "Contenido redes sociales para Círculo Laboral, Cícrulo de Proveedores y Aura, campañas de performance marketing en Linkedin, meta y google.",
  // videoComponent: (
  //   <VideoComponent
  //     className="min-h-[420px] overflow-hidden rounded-[10px] object-cover lg:max-h-none xl:min-h-[565px]"
  //     video={CCPVideo}
  //   />
  // ),
};

const InDriveData = {
  image:
    "https://firebasestorage.googleapis.com/v0/b/polygon-website-15608.appspot.com/o/Customers%2FInDrive.png?alt=media&token=d269ba3a-b0da-4c32-96bc-a08320f48ff3",
  title: "inDrive ft. Martina la Peligrosa",
  description:
    "Campaña para inDrive enfocada en generación de UGC, estrategia, creatividad, producción audiovisual y musical.",
  videoComponent: (
    <VideoComponent
      className="min-h-[420px] overflow-hidden rounded-[10px] object-cover lg:max-h-none xl:min-h-[565px]"
      video={InDriveVideo}
    />
  ),
};
  

export default function GridFeatured() {
  return (
    <>
      <div className="hidden flex-col gap-[30px] px-2 lg:flex lg:gap-[50px] lg:px-12 xl:px-24">
        <h2
          className={`${neueXThin.className} font-bold lg:font-medium text-3xl lg:text-5xl xl:text-6xl xl:leading-[90px]`}
        >
          Innovación en acción: <br /> nuestro trabajo más reciente.
        </h2>
        <div className="grid h-fit w-fit grid-cols-2 lg:gap-x-4">
          <div className="col-span-1 flex flex-col lg:gap-5">
            <CardShowCase item={InDriveData} />
            <CardShowCase item={SocialData} />
            {/* <div className="flex h-fit flex-col lg:gap-5">
              <Image
                src={InDrive}
                alt=""
                className="min-h-[420px] rounded-[10px] object-cover lg:max-h-none xl:min-h-[565px]"
              ></Image>
              <div className="flex flex-col gap-2 lg:gap-5">
                <h4
                  className={`${neueThin.className} text-xl lg:text-2xl xl:text-3xl text-black-500`}
                >
                  inDrive ft. Martina la Peligrosa
                </h4>
                <p
                  className={`${neueXThin.className} text-lg lg:text-xl xl:text-2xl text-black-500 xl:leading-[40px]`}
                >
                  Campaña para inDrive enfocada en generación de UGC,
                  estrategia, creatividad, producción audiovisual y musical.
                </p>
              </div>
            </div>
            <div className="flex h-fit flex-col lg:gap-5">
              <Image
                src={Aura}
                alt=""
                className="min-h-[420px] rounded-[10px] object-cover lg:max-h-none xl:min-h-[565px]"
              ></Image>
              <div className="flex flex-col lg:gap-5">
                <h4
                  className={`${neueThin.className} lg:text-2xl xl:text-3xl text-black-500`}
                >
                  Social & Paid Media
                </h4>
                <p
                  className={`${neueXThin.className} lg:text-xl xl:text-2xl text-black-500 leading-[40px]`}
                >
                  Contenido redes sociales para Círculo Laboral, Cícrulo de
                  Proveedores y Aura, campañas de performance marketing en
                  Linkedin, meta y google.
                </p>
              </div>
            </div> */}
          </div>

          <div className="row-span-2 flex h-full flex-col lg:gap-5 xl:pb-5">
            <Image
              src={Bupa}
              alt=""
              className="h-full rounded-[10px] object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
            />
            <div className="flex flex-col gap-5">
              <h4
                className={`${neueThin.className} lg:text-2xl xl:text-3xl text-black-500`}
              >
                Content Bupa Nacional Vital
              </h4>
              <p
                className={`${neueXThin.className} lg:text-xl xl:text-2xl text-black-500 leading-[40px]`}
              >
                Nuestro equipo está constantemente generando ideas frescas e
                innovadoras para ayudar a nuestros clientes a destacar y
                alcanzar sus objetivos..
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <SliderVideoComponent features={featuredWork} /> */}
    </>
  );
}
