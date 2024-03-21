// import Image from "next/image";
// import TalkDialog from "../Dialog/TalkDialog";
// const bgImageMobile =
//   "https://res.cloudinary.com/dirtcb7dj/image/upload/v1700867423/Hero/w3iaprxevielkitit5do.png";
// const bgImageDesktop =
//   "https://res.cloudinary.com/dirtcb7dj/image/upload/v1695236838/Hero/t7tbgy0jtorwc4lwf0uf.png";

// const message =
//   "Hablemos, nuestro equipo se comunicará contigo en las siguientes 24 horas.";

import HeroIntro from "@/videos/HeroIntro.mp4";
import AnimacionIntro_Mobile from "@/videos/AnimacionIntro_Mobile.mp4";
import VideoComponent from "../Video/VideoComponent";
export default function HeroVideoComponent() {
  return (
    <div className="relative min-h-[600px] lg:min-h-[800px]">
      {/* <Image className="block md:hidden" src={HeroIntroMobile} alt="" /> */}
      {/* <div className="absolute h-full w-full">
        <VideoComponent
          className="hidden h-full w-full object-cover object-center md:block"
          video={HeroIntro}
        />
        <VideoComponent
          className="block h-full w-full object-cover object-center md:hidden"
          video={AnimacionIntro_Mobile}
        />
      </div> */}

      {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 flex flex-col justify-end px-2 pb-12 md:min-h-full lg:gap-5 lg:px-12 lg:pb-[30px] xl:gap-10">
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
