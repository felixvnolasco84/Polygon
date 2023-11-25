import { neueXThin } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import rightArrow from "@/public/images/rightArrow.svg";

const services = [
  {
    title: "Brand & Creative Strategy",
    description:
      "Transformación en marketing de redes sociales, talento y tecnología para amplificar tu economía de la atención.",
    path: "/productos/web",
  },
  {
    title: "Social Media Marketing",
    description:
      "Transformación en marketing de redes sociales, talento y tecnología para amplificar tu economía de la atención.",
    path: "/productos/web",
  },
  {
    title: "Paid Media Marketing",
    description:
      "Transformación en marketing de redes sociales, talento y tecnología para amplificar tu economía de la atención.",
    path: "/productos/web",
  },
  {
    title: "SEO & Data Analysis",
    description:
      "Transformación en marketing de redes sociales, talento y tecnología para amplificar tu economía de la atención.",
    path: "/productos/web",
  },
  {
    title: "Key Web Development Services",
    description:
      "Transformación en marketing de redes sociales, talento y tecnología para amplificar tu economía de la atención.",
    path: "/productos/web",
  },
  {
    title: "Content Solutions",
    description:
      "Transformación en marketing de redes sociales, talento y tecnología para amplificar tu economía de la atención.",
    path: "/productos/web",
  },
];

export default function GridServices() {
  return (
    <div className="flex flex-col gap-[50px] px-4 lg:gap-[80px] lg:px-24">
      <h2 className={`${neueXThin.className} text-3xl font-semibold lg:font-medium lg:text-7xl text-black-500`}>
        Experiencia, pasión y resultados en cada servicio.
      </h2>

      <div className="flex flex-col gap-12">
        {services.map((service: any, index: any) => (
          <Link
            href={service.path}
            key={index}
            className="group flex items-end justify-between border-b border-gray pb-3 text-black-600 lg:pb-6"
          >
            <div className="relative">
              <h3
                className={`${neueXThin.className} text-xl font-semibold lg:font-medium transition ease-out relative z-10 lg:text-4xl lg:group-hover:bg-flourescentYellow lg:group-hover:translate-x-14`}
              >
                {service.title}
              </h3>
              <Image
                className="lg:group-hover:bg-flourescent-yellow absolute left-[0%] top-[0%] hidden h-fit cursor-pointer rounded-full p-2 lg:block lg:bg-flourescentYellow lg:group-hover:block"
                width={48}
                height={48}
                src={rightArrow}
                alt=""
              />
            </div>

            <div className="flex gap-12">
              <p
                className={`${neueXThin.className} hidden lg:block lg:text-2xl lg:group-hover:hidden`}
              >
                {service.description}
              </p>
              <div className="hidden h-fit rounded-full bg-flourescentYellow p-2 lg:block lg:group-hover:hidden">
                <Image src={rightArrow} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
