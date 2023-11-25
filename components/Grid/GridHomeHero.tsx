import { neueXThin, neueRoman } from "@/styles/fonts";

import Image from "next/image";
import rightArrow from "@/public/images/rightArrow.svg";

export default function GridHomeHero() {
  return (
    <div className="h-full bg-[url('https://res.cloudinary.com/dirtcb7dj/image/upload/v1700867423/Hero/w3iaprxevielkitit5do.png')] bg-cover bg-center bg-no-repeat lg:bg-[url('https://res.cloudinary.com/dirtcb7dj/image/upload/v1695236838/Hero/t7tbgy0jtorwc4lwf0uf.png')]">
      <div className="flex h-[774px] flex-col justify-end gap-4 bg-gradient-to-b from-transparent to-[#00000085] px-4 pb-[30px] lg:px-24">
        <h2
          className={`${neueXThin.className} text-3xl lg:text-7xl text-white`}
        >
          Somos una agencia enfocada en ofrecer soluciones digitales de alta
          calidad diseñadas para impulsar el rendimiento
          empresarial a gran escala.
        </h2>

        <div className="group relative flex hidden items-center gap-1 lg:block">
          <div className="relative w-full overflow-hidden rounded-[15px] bg-white">
            <div
              className={`absolute left-0 top-0 h-full w-0 bg-flourescentYellow transition-all duration-300 group-hover:w-full`}
            >
              <p
                className={`hidden group-hover:w-full ${neueRoman.className} lg:text-2xl pl-10 py-4 transition rounded-[15px]`}
              >
                Hablemos, nuestro equipo se comunicará contigo en las siguientes
                24 horas.
              </p>
            </div>
            <p
              className={`${neueRoman.className} lg:text-2xl pl-10 py-4 w-full`}
            >
              Hablemos, nuestro equipo se comunicará contigo en las siguientes
              24 horas.
            </p>
          </div>
          <button className="h-fit rounded-full bg-gray-200 p-2 group-hover:bg-white">
            <Image src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
