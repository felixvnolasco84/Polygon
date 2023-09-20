import { neueXThin } from "@/styles/fonts";
import Link from "next/link";

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
    <div className="flex flex-col gap-[80px]">
      <h2 className={`${neueXThin.className} text-7xl text-black-500`}>
        Experiencia, pasión y resultados en cada servicio.
      </h2>

      <div className="flex flex-col gap-12">
        {services.map((service: any, index: any) => (
          <Link
            href={service.path}
            key={index}
            className="flex justify-between items-end pb-6  border-b border-gray text-black-600"
          >
            <h3 className={`${neueXThin.className} text-4xl`}>
              {service.title}
            </h3>

            <div className="flex gap-12">
              <p className={`${neueXThin.className} text-2xl`}>
                {service.description}
              </p>
              <div className="w-[40px] h-[40px] bg-flourescentYellow rounded-full"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
