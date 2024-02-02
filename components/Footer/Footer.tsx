import { neueThin, neueXThin } from "@/styles/fonts";
import GridBlogs from "../Grid/GridBlogs";
import FooterContact from "./FooterContact";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-44 border-t border-gray-600 bg-black-600 px-4 pt-12 lg:gap-[200px] lg:pl-12 lg:pr-0 xl:px-24 xl:pt-24">
      <FooterContact />
      <div className="flex flex-col-reverse gap-16 pb-24 lg:flex-row lg:gap-[150px]">
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
          href={"/politica-de-privacidad"}
          className={`${neueThin.className} text-lg lg:text-xl xl:text-2xl text-white leading-none`}
        >
          Políticas de privacidad{" "}
        </Link>
      </div>
    </footer>
  );
}
