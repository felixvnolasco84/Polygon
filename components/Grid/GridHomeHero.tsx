import { neueXThin } from "@/styles/fonts";
import Image from "next/image";
import TalkDialog from "../Dialog/TalkDialog";
import Video from "next-video";
import HeroIntro from "@/videos/HeroIntro.mp4";
import HeroIntroMobile from "@/videos/HeroIntroMobile.mp4";
import { ReactPlayerAsVideo } from "../Video/VideoPlayerComponent";

const bgImageMobile =
  "https://res.cloudinary.com/dirtcb7dj/image/upload/v1700867423/Hero/w3iaprxevielkitit5do.png";
const bgImageDesktop =
  "https://res.cloudinary.com/dirtcb7dj/image/upload/v1695236838/Hero/t7tbgy0jtorwc4lwf0uf.png";

const message =
  "Hablemos, nuestro equipo se comunicará contigo en las siguientes 24 horas.";

export default function GridHomeHero() {
  return (
    <div className="relative h-full min-h-[774px] w-screen bg-cover bg-center bg-no-repeat md:min-h-full">
      <Video
        minResolution="1080p"        
        loop={true}
        autoPlay={true}
        controls={false}
        muted={true}
        className="absolute min-h-full w-full md:hidden"
        src={HeroIntroMobile}
      />
      <Video
        minResolution="1080p"
        loop={true}
        autoPlay={true}
        controls={false}
        muted={true}
        className="absolute hidden h-full w-full md:block"
        src={HeroIntro}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
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
      </div>
    </div>
  );
}
