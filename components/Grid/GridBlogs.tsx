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

export default function GridBlogs() {
  return (
    <div className="flex flex-col gap-[20px] lg:gap-[80px]">
      <h2 className={`${neueXThin.className} lg:text-7xl text-white`}>
        Experiencia, pasión y resultados en cada servicio.
      </h2>

      <div className="flex flex-col gap-5 lg:gap-12">
        {services.map((service: any, index: any) => (
          <Link
            href={service.path}
            key={index}
            className="group flex items-end justify-between border-b border-gray pb-5 text-white lg:pb-6"
          >
            <div className="relative">
              <h3
                className={`${neueXThin.className} transition ease-out relative z-10 lg:text-4xl lg:group-hover:bg-flourescentYellow lg:group-hover:translate-x-14 lg:group-hover:text-black`}
              >
                {service.title}
              </h3>
              <Image
                className="group-hover:bg-flourescent-yellow absolute left-[0%] top-[0%] hidden h-fit cursor-pointer rounded-full bg-flourescentYellow p-2 group-hover:block"
                width={48}
                height={48}
                src={rightArrow}
                alt=""
              />
            </div>

            <div className="flex hidden gap-12 group-hover:hidden lg:block">
              <p className={`${neueXThin.className} text-2xl`}>
                {service.description}
              </p>
              <div className="h-fit rounded-full bg-flourescentYellow p-2 group-hover:hidden">
                <Image src={rightArrow} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
