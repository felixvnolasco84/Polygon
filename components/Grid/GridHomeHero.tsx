"use client";

// import { neueXThin } from "@/styles/fonts";
// import Image from "next/image";
// import TalkDialog from "../Dialog/TalkDialog";
import Video from "next-video";
import HeroIntro from "@/videos/HeroIntro.mp4";
import HeroIntroMobile from "@/public/gifs/HeroIntroMobile.gif";
import { ReactPlayerAsVideo } from "../Video/VideoPlayerComponent";
import Image from "next/image";

// const bgImageMobile =
//   "https://res.cloudinary.com/dirtcb7dj/image/upload/v1700867423/Hero/w3iaprxevielkitit5do.png";
// const bgImageDesktop =
//   "https://res.cloudinary.com/dirtcb7dj/image/upload/v1695236838/Hero/t7tbgy0jtorwc4lwf0uf.png";

// const message =
//   "Hablemos, nuestro equipo se comunicará contigo en las siguientes 24 horas.";

export default function GridHomeHero() {
  return (
    <div className="relative m-auto h-full max-h-[800px] min-h-[774px] w-screen max-w-5xl bg-cover bg-center bg-no-repeat md:min-h-full">
      <Image className="block md:hidden" src={HeroIntroMobile} alt="" />
      <Video
        minResolution="1080p"
        as={ReactPlayerAsVideo}
        controls={false}
        className="hidden h-full max-h-[800px] w-full md:block"
        src={HeroIntro}
      />

      {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 flex flex-col justify-end px-2 pb-12 md:min-h-full lg:gap-5 lg:px-12 lg:pb-[30px] xl:gap-10 xl:px-24">
        <h1
          className={`${neueXThin.className} text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-white z-10 lg:leading-[70px]`}
        >
          Somos una agencia que ofrece soluciones digitales para mejorar tu ROI
        </h1>
        <TalkDialog
          message={message}
          bgColor="bg-white"
          bgHoverColor="bg-flourescentYellow"
          bgButtonColor="bg-flourescentYellow"
          bgButtonHoverColor="bg-white"
        />
      </div> */}
    </div>
  );
}
