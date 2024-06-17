import { neueLight, neueRoman } from "@/styles/fonts";

import felix from "@/public/images/Members/felix_nolasco.png";
import alba from "@/public/images/Members/alba_rodriguez.png";
import Image from "next/image";
import { ContactFormOnlyEmail } from "../Contact/ContactFormOnlyEmail";
export default function CTABrainstorming() {
  return (
    <section className="flex aspect-[10/12] items-center justify-center rounded-md bg-[#F7F7F7] px-4 py-8 shadow-sm lg:aspect-[16/9] lg:px-0 lg:py-0">
      <div className="flex flex-col items-center justify-between gap-6 lg:gap-12">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center lg:w-3/5">
          <div className="flex">
            <div className="relative z-10 h-20 w-20 overflow-hidden rounded-full shadow-sm lg:h-24 lg:h-32 lg:w-24 lg:w-32">
              <Image
                src={alba}
                alt="Alba Rodriguez"
                fill
                className="h-full w-full object-cover object-center"
                objectFit="cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative -ml-4 h-20 w-20 overflow-hidden rounded-full shadow-sm lg:h-24 lg:h-32 lg:w-24 lg:w-32">
              <Image
                src={felix}
                alt="Felix Nolasco"
                fill
                className="h-full w-full object-cover object-center"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <h3
            className={`${neueRoman.className} text-2xl lg:text-3xl font-light leading-none tracking-tight text-[#150C14] lg:text-2xl xl:text-5xl`}
          >
            Obtén tu sesión gratuita de 30 minutos de brainstorm.
          </h3>
          <p
            className={`${neueLight.className} text-sm text-[#150C14] xl:text-base font-normal w-3/4 lg:w-1/2`}
          >
            ¿Tienes un proyecto en mente? Obtén una sesión de 30 minutos con dos
            expertos de forma gratuita.
          </p>
        </div>
        <ContactFormOnlyEmail />
      </div>
    </section>
  );
}
