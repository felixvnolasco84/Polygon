import { neueThin, neueXThin } from "@/styles/fonts";
import HeroImage from "@/public/svg/HeroImage.svg";
import Image from "next/image";
import { HeroContactForm } from "../Contact/HeroContactForm";

export default function GridHomeHero() {
  return (
    <div className="flex flex-col-reverse items-center px-4 lg:flex-row lg:px-12 xl:px-24 2xl:px-48">
      <div className="flex w-full flex-col lg:w-6/12 xl:gap-6">
        <div className="flex w-full max-w-none flex-col lg:max-w-[80%] lg:gap-3">
          <h1
            className={`${neueThin.className} text-2xl lg:text-4xl xl:text-6xl`}
          >
            Una agencia creativa dedicada a potenciar tu marca en el mercado.
          </h1>
          <h2
            className={`${neueXThin.className} text-xl lg:text-2xl xl:text-4xl`}
          >
            Ayudamos a empresas como la tuya con un enfoque de marketing único.
          </h2>
        </div>
        <HeroContactForm />
      </div>

      <div className="relative aspect-square w-full md:w-3/4 lg:w-6/12">
        <Image
          src={HeroImage}
          className="object-cover object-center"
          alt="HeroImage"
          fill
        />
      </div>
    </div>
  );
}
