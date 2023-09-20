import { neueLight } from "@/styles/fonts";
import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 z-40 w-full h-[104px] flex justify-between items-center px-24 bg-white">
      <div className="w-[209px] h-[42px] bg-flourescentYellow"></div>

      <div className={`${neueLight.className} text-2xl  flex gap-[55px]`}>
        <span>Qué hacemos</span>
        <span>Nuestro trabajo</span>
        <span>Ideas</span>
        <span>Contacto</span>
        <span>Hablemos</span>
      </div>
    </div>
  );
}
