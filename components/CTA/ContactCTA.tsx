import { neueXThin } from "@/styles/fonts";

import CTAContactImage from "@/public/svg/CTAContactImage.svg";
import Image from "next/image";
import TalkDialog from "../Dialog/TalkDialog";
import CTATalkDialog from "../Dialog/CTATalkDialog";

export default function ContactCTA() {
  return (
    <div
      className={`${neueXThin.className} flex flex-col-reverse lg:flex-row items-center px-4 lg:px-12 xl:px-24`}
    >
      <div className="flex flex-col lg:w-8/12 xl:gap-6">
        <div className="flex w-full flex-col gap-3 lg:max-w-[80%] xl:gap-6">
          <h1
            className={`text-2xl leading-relaxed lg:text-3xl xl:text-6xl 2xl:leading-[90px]`}
          >
            Trabajamos por el bien de tu negocio y nos enfocamos en hacerlo
            crecer de manera sostenible.
          </h1>
          <CTATalkDialog
            message="Hablemos, nuestro equipo se comunicará contigo en las siguientes 24 horas."
            bgColor="bg-gray-400"
            bgHoverColor="bg-flourescentYellow"
            bgButtonColor="bg-flourescentYellow"
            bgButtonHoverColor="bg-gray-400"
          />
        </div>
      </div>

      <div className="relative aspect-square w-8/12 lg:w-4/12">
        <Image
          src={CTAContactImage}
          className="object-cover object-center"
          alt="HeroImage"
          fill
        />
      </div>
    </div>
  );
}
