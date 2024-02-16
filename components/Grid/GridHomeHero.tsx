import { neueThin, neueXThin } from "@/styles/fonts";
import HeroImage from "@/public/svg/HeroImage.svg";
import Image from "next/image";
import { HeroContactForm } from "../Contact/HeroContactForm";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

export default function GridHomeHero() {
  return (
    <div className="flex flex-col-reverse items-center justify-center px-4 pt-16 lg:flex-row lg:px-12 lg:pt-24 xl:px-24 2xl:px-48">
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
        <Separator className="lg:max-w-[80%]" />

        <Link
          className={`${neueThin.className} inline-flex items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:group w-full bg-flourescentYellow text-xl font-normal text-black hover:bg-black hover:text-white xl:text-[22px] h-11 rounded-md px-8 lg:max-w-[80%]`}
          href={"https://calendly.com/polygonag/30min"}
        >
          Agendar con Calendly
        </Link>
      </div>

      <div className="relative aspect-square max-h-[645px] w-full max-w-[573px] md:w-3/4 lg:w-5/12 xl:w-6/12">
        <Image
          src={HeroImage}
          className="object-fill object-center"
          alt="HeroImage"
          fill
        />
      </div>
    </div>
  );
}
