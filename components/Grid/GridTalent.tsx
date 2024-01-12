"use client";

import { neueXThin } from "@/styles/fonts";
import Video from "next-video";
import { ReactPlayerAsVideo } from "../Video/VideoPlayerComponent";
import IntroE05 from "@/videos/IntroE05.mov";
// import SliderComponent from "../Slider/SliderComponent";

export default function GridTalent() {
  // const features = [
  //   {
  //     title: "Tus objetivos comerciales importan",
  //     description:
  //       "La confianza es fundamental para construir relaciones a largo plazo con nuestros clientes, y la única manera de ganar esa confianza es brindando resultados tangibles para su negocio.",
  //   },
  //   {
  //     title: "Profesionalismo",
  //     description:
  //       "El diablo está en los detalles, por lo que trabajamos arduamente para crear productos que funcionen y luzcan perfectos, manteniendo una reputación bien ganada por la calidad y la atención al detalle.",
  //   },
  //   {
  //     title: "Centrados en las personas",
  //     description:
  //       "Nuestro negocio se basa en este sencillo principio: poner a las personas primero y buscar el mejor entorno posible para que el talento y los clientes trabajen. El negocio inevitablemente prosperará.",
  //   },
  //   {
  //     title: "Una experiencia óptima",
  //     description:
  //       "El servicio tiene tanto que ver con el viaje como con el objetivo final. Siempre nos esforzamos al máximo para proporcionar una experiencia de trabajo flexible, positiva e inspiradora para nuestros clientes.",
  //   },
  // ];

  return (
    <div className="flex flex-col gap-3 lg:gap-[50px] xl:overflow-hidden">
      <h3
        className={`${neueXThin.className} text-2xl transition ease-out relative z-10 lg:text-5xl xl:text-6xl lg:group-hover:bg-white lg:group-hover:translate-x-14 lg:px-12 xl:px-24 px-4`}
      >
        Talento y tecnología en cada proyecto digital
      </h3>

      
      <Video    
        minResolution="1080p"
        as={ReactPlayerAsVideo}
        controls={false}
        className="h-full w-full"
        src={IntroE05}
      />
      {/* <div className="flex h-[640px] items-end bg-[url('https://res.cloudinary.com/dirtcb7dj/image/upload/v1695236636/Hero/zqgdrhztqkjuxsadesjb.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-fit items-end gap-4 bg-gradient-to-t from-black to-transparent to-60% px-8 pb-[30px] lg:h-[774px] lg:px-12 xl:px-24">
          <div className="block lg:hidden">
            <SliderComponent features={features} type="talent" />
          </div>
          <div className="hidden gap-4 lg:flex">
            {features.map((feature: any, index: any) => (
              <div
                key={index}
                className="flex flex-col gap-[12px] text-white lg:gap-[10px]"
              >
                <p
                  className={`${neueThin.className} lg:h-12 xl:h-8 text-xl xl:text-2xl`}
                >
                  {feature.title}
                </p>
                <p
                  className={`${neueXThin.className} text-lg xl:text-[22px] xl:leading-[35px] lg:max-w-[398px]`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
