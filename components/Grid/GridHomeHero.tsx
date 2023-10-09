import { neueXThin, neueRoman } from "@/styles/fonts";

import Image from "next/image";
import rightArrow from "@/public/images/rightArrow.svg";

export default function GridHomeHero() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dirtcb7dj/image/upload/v1695236838/Hero/t7tbgy0jtorwc4lwf0uf.png')] bg-no-repeat bg-cover bg-center h-full">
      <div className="flex flex-col gap-4 h-[774px] justify-end px-24 pb-[30px] bg-gradient-to-b from-transparent to-[#00000085]">
        <h2 className={`${neueXThin.className} text-7xl text-white`}>
          Somos una agencia enfocada en ofrecer soluciones digitales de alta
          calidad diseñadas para impulsar el rendimiento
          empresarial a gran escala.
        </h2>

        <div className="group flex gap-1 items-center relative">
          <div className="relative w-full bg-white rounded-[15px] overflow-hidden">
            <div
              className={` absolute left-0 top-0 bg-flourescentYellow h-full w-0 transition-all duration-300 group-hover:w-full`}
            >
              <p
                className={`hidden group-hover:w-full ${neueRoman.className} text-2xl pl-10 py-4 transition rounded-[15px]`}
              >
                Hablemos, nuestro equipo se comunicará contigo en las siguientes
                24 horas.
              </p>
            </div>
            <p className={`${neueRoman.className} text-2xl pl-10 py-4 w-full`}>
              Hablemos, nuestro equipo se comunicará contigo en las siguientes
              24 horas.
            </p>
          </div>
          <button className="group-hover:bg-white bg-gray-200 h-fit p-2 rounded-full">
            <Image src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
