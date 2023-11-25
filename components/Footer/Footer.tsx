import React from "react";
import { neueThin, neueXThin } from "@/styles/fonts";
import GridBlogs from "../Grid/GridBlogs";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black-600 p-4 lg:gap-[200px] lg:p-24">
      <GridBlogs />
      <FooterContact />

      <div className="flex flex-col gap-[150px] lg:flex-row">
        <div className="flex flex-col gap-5">
          <p
            className={`${neueThin.className} text-3xl text-white leading-none`}
          >
            Ciudad de México
          </p>
          <p
            className={`${neueXThin.className} text-2xl text-white leading-none`}
          >
            Praga 24, Juárez, Cuauhtémoc.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <p
            className={`${neueThin.className} text-3xl text-white leading-none`}
          >
            Contáctanos
          </p>
          <p
            className={`${neueXThin.className} text-2xl text-white leading-none`}
          >
            hola@polygonag.com
          </p>
        </div>
      </div>
    </div>
  );
}
