import { neueThin, neueXThin } from "@/styles/fonts";
import Image from "next/image";
import React from "react";
import Aura from "@/public/images/Customers/Aura.png";
import Bupa from "@/public/images/Customers/Bupa.png";
import InDrive from "@/public/images/Customers/InDrive.png";

export default function GridFeatured() {
  return (
    <div className="flex flex-col gap-[30px] px-2 lg:gap-[50px] lg:px-24">
      <h2
        className={`${neueXThin.className} font-bold lg:font-medium text-3xl lg:text-7xl lg:leading-[90px]`}
      >
        Innovación en acción: <br /> nuestro trabajo más reciente.
      </h2>

      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
        <div className="col-span-1 flex h-fit max-w-[812px] flex-col lg:gap-5">
          <Image
            src={InDrive}
            alt=""
            className="min-h-[480px] rounded-[10px] lg:max-h-none lg:min-h-[565px]"
          ></Image>
          <div className="flex flex-col gap-2 lg:gap-5">
            <h4 className={`${neueThin.className} text-xl lg:text-3xl text-black-500`}>
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
        <div className="col-span-1 flex max-w-[812px] flex-col justify-end gap-5">
          <Image
            src={Aura}
            alt=""
            className="min-h-[565px] rounded-[10px]"
          ></Image>
          <div className="flex flex-col gap-5">
            <h4 className={`${neueThin.className} text-3xl text-black-500`}>
              Social & Paid Media
            </h4>
            <p
              className={`${neueXThin.className} text-2xl text-black-500 leading-[40px]`}
            >
              Contenido redes sociales para Círculo Laboral, Cícrulo de
              Proveedores y Aura, campañas de performance marketing en Linkedin,
              meta y google.
            </p>
          </div>
        </div>
        <div className="row-span-2 flex flex-col gap-5">
          <Image src={Bupa} alt="" className="h-full rounded-[10px]"></Image>
          <div className="flex flex-col gap-5">
            <h4 className={`${neueThin.className} text-3xl text-black-500`}>
              Content Bupa Nacional Vital
            </h4>
            <p
              className={`${neueXThin.className} text-2xl text-black-500 leading-[40px]`}
            >
              Nuestro equipo está constantemente generando ideas frescas e
              innovadoras para ayudar a nuestros clientes a destacar y alcanzar
              sus objetivos..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
