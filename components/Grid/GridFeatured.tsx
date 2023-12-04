import { neueThin, neueXThin } from "@/styles/fonts";
import Image from "next/image";
import React from "react";
import Aura from "@/public/images/Customers/Aura.png";
import Bupa from "@/public/images/Customers/Bupa.png";
import InDrive from "@/public/images/Customers/InDrive.png";
import SliderVideoComponent from "../Slider/SliderVideoComponen";


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

export default function GridFeatured() {
  return (
    <>
      <div className="hidden flex-col gap-[30px] px-2 lg:flex lg:gap-[50px] lg:px-24">
        <h2
          className={`${neueXThin.className} font-bold lg:font-medium text-3xl lg:text-7xl lg:leading-[90px]`}
        >
          Innovación en acción: <br /> nuestro trabajo más reciente.
        </h2>
        <div className="grid w-fit grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
          <div className="col-span-1 flex h-fit max-w-[812px] flex-col lg:gap-5">
            <Image
              src={InDrive}
              alt=""
              className="min-h-[480px] rounded-[10px] lg:max-h-none lg:min-h-[565px]"
            ></Image>
            <div className="flex flex-col gap-2 lg:gap-5">
              <h4
                className={`${neueThin.className} text-xl lg:text-3xl text-black-500`}
              >
                inDrive ft. Martina la Peligrosa
              </h4>
              <p
                className={`${neueXThin.className} text-lg lg:text-2xl text-black-500 lg:leading-[40px]`}
              >
                Campaña para inDrive enfocada en generación de UGC, estrategia,
                creatividad, producción audiovisual y musical.
              </p>
            </div>
          </div>

          <div className="row-span-2 flex max-w-[812px] flex-col lg:gap-5">
            <Image src={Bupa} alt="" className="h-full rounded-[10px]"></Image>
            <div className="flex flex-col gap-5">
              <h4 className={`${neueThin.className} text-3xl text-black-500`}>
                Content Bupa Nacional Vital
              </h4>
              <p
                className={`${neueXThin.className} text-2xl text-black-500 leading-[40px]`}
              >
                Nuestro equipo está constantemente generando ideas frescas e
                innovadoras para ayudar a nuestros clientes a destacar y
                alcanzar sus objetivos..
              </p>
            </div>
          </div>
          <div className="col-span-1 flex max-w-[812px] flex-col justify-end lg:gap-5">
            <Image
              src={Aura}
              alt=""
              className="max-h-[485px] rounded-[10px]"
            ></Image>
            <div className="flex flex-col">
              <h4 className={`${neueThin.className} text-3xl text-black-500`}>
                Social & Paid Media
              </h4>
              <p
                className={`${neueXThin.className} text-2xl text-black-500 leading-[40px]`}
              >
                Contenido redes sociales para Círculo Laboral, Cícrulo de
                Proveedores y Aura, campañas de performance marketing en
                Linkedin, meta y google.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SliderVideoComponent features={featuredWork} />
    </>
  );
}
