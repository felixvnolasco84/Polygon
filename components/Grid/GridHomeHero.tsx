import { neueThin, neueXThin } from "@/styles/fonts";
import HeroImage from "@/public/svg/HeroImage.svg";
import Image from "next/image";
import { HeroContactForm } from "../Contact/HeroContactForm";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

export default function GridHomeHero() {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-3 px-4 pt-16 lg:flex-row lg:gap-0 lg:px-12 lg:pt-24 xl:px-24 2xl:px-48">
      <div className="flex w-full flex-col gap-3 lg:w-7/12 xl:w-6/12 xl:gap-6">
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

      <div className="relative aspect-square max-h-[645px] w-full max-w-[573px] md:w-3/4 lg:w-5/12 xl:w-6/12">
        <Image
          src={HeroImage}
          className="reverse-image scale-100 object-fill object-center"
          alt="HeroImage"
          fill
        />
      </div>
    </div>
  );
}
