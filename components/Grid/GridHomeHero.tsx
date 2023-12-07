import { neueXThin, neueRoman } from "@/styles/fonts";
import Image from "next/image";
import ContactDialog from "../Dialog/ContactDialog";

const bgImageMobile =
  "https://res.cloudinary.com/dirtcb7dj/image/upload/v1700867423/Hero/w3iaprxevielkitit5do.png";
const bgImageDesktop =
  "https://res.cloudinary.com/dirtcb7dj/image/upload/v1695236838/Hero/t7tbgy0jtorwc4lwf0uf.png";
const message =
  "Hablemos, nuestro equipo se comunicará contigo en las siguientes 24 horas.";

export default function GridHomeHero() {
return (
  <div className="relative h-full bg-cover bg-center bg-no-repeat">
    <Image
      src={bgImageMobile}
      fill
      sizes="(max-width: 768px) 100vw"
      alt=""
      className="object-cover object-center lg:hidden"
    />
    <Image
      src={bgImageDesktop}
      fill
      sizes="(max-width: 768px) 100vw"
      alt=""
      className="hidden object-cover object-center lg:block"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    <div className="relative flex h-[774px] flex-col justify-end gap-10 px-2 pb-12 lg:px-24 lg:pb-[30px]">
      <h1
        className={`${neueXThin.className} text-2xl lg:text-7xl text-white z-10 lg:leading-[70px]`}
      >
        Somos una agencia que ofrece soluciones digitales para mejorar tu ROI
      </h1>
      <div className="group relative hidden items-center gap-1 lg:flex">
        <div className="relative w-full overflow-hidden rounded-[15px] bg-white">
          <div
            className={`absolute left-0 top-0 h-full w-0 bg-flourescentYellow transition-all duration-300 group-hover:w-full`}
          >
            <p
              className={`invisible group-hover:visible transition-opacity delay-700 text-black ${neueRoman.className} lg:text-2xl pl-10 py-4 transition rounded-[15px]`}
            >
              {message}
            </p>
          </div>
          <p className={`${neueRoman.className} lg:text-2xl pl-10 py-4 w-full`}>
            {message}
          </p>
        </div>
        <ContactDialog type="" />
      </div>
    </div>
  </div>
);
}
