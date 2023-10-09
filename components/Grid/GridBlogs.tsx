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
    <div className="flex flex-col gap-[80px]">
      <h2 className={`${neueXThin.className} text-7xl text-white`}>
        Experiencia, pasión y resultados en cada servicio.
      </h2>

      <div className="flex flex-col gap-12">
        {services.map((service: any, index: any) => (
          <Link
            href={service.path}
            key={index}
            className="group flex justify-between items-end pb-6  border-b border-gray text-white"
          >
            <div className="relative">
              <h3
                className={`${neueXThin.className} transition ease-out relative z-10 text-4xl group-hover:bg-flourescentYellow group-hover:translate-x-14 group-hover:text-black`}
              >
                {service.title}
              </h3>
              <Image
                className="absolute hidden left-[0%] top-[0%] group-hover:block h-fit p-2 bg-flourescentYellow group-hover:bg-flourescent-yellow cursor-pointer rounded-full"
                width={48}
                height={48}
                src={rightArrow}
                alt=""
              />
            </div>

            <div className="flex gap-12 group-hover:hidden">
              <p className={`${neueXThin.className} text-2xl`}>
                {service.description}
              </p>
              <div className="group-hover:hidden h-fit p-2 bg-flourescentYellow rounded-full">
                <Image src={rightArrow} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
