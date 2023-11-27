import React from "react";
import { neueThin, neueXThin } from "@/styles/fonts";
import GridBlogs from "../Grid/GridBlogs";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-44 border-t border-gray-600 bg-black-600 px-4 pt-24 lg:gap-[200px] lg:px-24">
      <FooterContact />
      <div className="flex flex-col-reverse gap-16 pb-24 lg:flex-row lg:gap-[150px]">
        <div className="flex flex-col gap-5">
          <p
            className={`${neueThin.className} text-xl lg:text-3xl text-white leading-none`}
          >
            Ciudad de México
          </p>
          <p
            className={`${neueXThin.className} text-lg lg:text-2xl text-white leading-none`}
          >
            Praga 24, Juárez, Cuauhtémoc.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <p
            className={`${neueThin.className} text-xl lg:text-3xl text-white leading-none`}
          >
            Contáctanos
          </p>
          <p
            className={`${neueXThin.className} text-lg lg:text-2xl text-white leading-none`}
          >
            hola@polygonag.com
          </p>
        </div>
      </div>
    </footer>
  );
}
