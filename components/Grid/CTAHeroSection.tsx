import { neueThin } from "@/styles/fonts";
import Image from "next/image";
import { ContactFormOnlyEmail } from "../Contact/ContactFormOnlyEmail";

import Copa from "@/public/images/Customers/COPA-Hat-Colors.png";
import Indrive from "@/public/images/Customers/InDriveColors.png";
import Bupa from "@/public/images/Customers/Bupa.png";

export default function CTAHeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 lg:gap-12">
      <h1
        className={`${neueThin.className} text-2xl lg:text-4xl w-full lg:w-1/2 text-center`}
      >
        Ayudamos a empresas como la tuya con un enfoque de marketing único.
      </h1>

      <div className="flex items-center">
        <div className="relative z-10 h-24 w-24 overflow-hidden rounded-2xl shadow-xl shadow-gray-200 lg:h-64 lg:w-64">
          <Image
            src={Copa}
            alt="Copa Padel"
            fill
            className="h-full w-full object-cover object-center"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
          />
        </div>
        <div className="relative z-10 -ml-4 h-48 w-48 overflow-hidden rounded-2xl shadow-2xl lg:h-96 lg:w-96">
          <Image
            src={Indrive}
            alt="InDrive"
            fill
            className="h-full w-full object-cover object-center"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
          />
        </div>
        <div className="relative -ml-4 h-24 w-24 overflow-hidden rounded-2xl shadow-xl shadow-gray-200 lg:h-64 lg:w-64">
          <Image
            src={Bupa}
            alt="Bupa"
            fill
            className="h-full w-full object-cover object-center"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
          />
        </div>
      </div>
    <div className="w-11/12 lg:w-full">
        <ContactFormOnlyEmail />
      </div>
    </section>
  );
}
