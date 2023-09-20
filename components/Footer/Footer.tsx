import React from "react";
import GridServices from "../Grid/GridServices";
import Contact from "@/components/Contact/Contact";
import { neueThin, neueXThin } from "@/styles/fonts";

export default function Footer() {
  return (
    <div className="flex flex-col gap-[200px] bg-black-600 p-24">
      <GridServices />
      <Contact />

      <div className="flex gap-[150px]">
        <div className="flex flex-col gap-5">
            <p className={`${neueThin.className} text-3xl text-white leading-none`}>Ciudad de México</p>
            <p className={`${neueXThin.className} text-2xl text-white leading-none`}>Praga 24, Juárez, Cuauhtémoc.</p>
        </div>

        <div className="flex flex-col gap-5">
            <p className={`${neueThin.className} text-3xl text-white leading-none`}>Contáctanos</p>
            <p className={`${neueXThin.className} text-2xl text-white leading-none`}>hola@polygonag.com</p>
        </div>

      </div>
    </div>
  );
}
