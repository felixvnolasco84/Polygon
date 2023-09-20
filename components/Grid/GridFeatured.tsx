import { neueThin, neueXThin } from "@/styles/fonts";
import React from "react";

export default function GridFeatured() {
  return (
    <div className="flex flex-col gap-[50px]">
      <h2 className={`${neueXThin.className} text-7xl leading-[90px]`}>
        Innovación en acción: <br /> nuestro trabajo más reciente.
      </h2>

      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="col-span-1 max-w-[812px] flex flex-col gap-5">
          <div className="min-h-[565px] bg-flourescentYellow rounded-[10px]"></div>
          <div className="flex flex-col gap-5">
            <h4 className={`${neueThin.className} text-3xl text-black-500`}>
              inDrive ft. Martina la Peligrosa
            </h4>
            <p
              className={`${neueXThin.className} text-2xl text-black-500 leading-[40px]`}
            >
              Campaña para inDrive enfocada en generación de UGC, estrategia,
              creatividad, producción audiovisual y musical.
            </p>
          </div>
        </div>
        <div className="col-span-1 max-w-[812px] flex flex-col gap-5">
          <div className="min-h-[565px] bg-flourescentYellow rounded-[10px]"></div>
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
          <div className="h-full bg-flourescentYellow rounded-[10px]"></div>
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
