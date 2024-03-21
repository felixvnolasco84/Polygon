import { neueThin, neueXThin } from "@/styles/fonts";
import GridBlogs from "../Grid/GridBlogs";
import FooterContact from "./FooterContact";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col gap-12 border-t border-gray-600 bg-black-600 px-4 py-12 lg:gap-16 lg:gap-[200px] xl:gap-44">
      <FooterContact />
      <div className="container flex flex-col-reverse gap-6 lg:flex-row lg:gap-8 lg:gap-[150px] xl:gap-16">
        <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5">
          <p
            className={`${neueThin.className} text-xl lg:text-3xl text-white leading-none`}
          >
            Ciudad de México
          </p>
          <p
            className={`${neueXThin.className} text-lg lg:text-xl xl:text-2xl text-white leading-none`}
          >
            Praga 24, Juárez, Cuauhtémoc.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5">
          <p
            className={`${neueThin.className} text-xl lg:text-3xl text-white leading-none`}
          >
            Contáctanos
          </p>
          <p
            className={`${neueXThin.className} text-lg lg:text-xl xl:text-2xl text-white leading-none`}
          >
            hola@polygonag.com
          </p>
        </div>
        <Link
          href={"/politicas-de-privacidad"}
          className={`${neueThin.className} text-lg lg:text-xl xl:text-2xl text-white leading-none`}
        >
          Políticas de privacidad{" "}
        </Link>
      </div>
    </footer>
  );
}
