import { neueLight, neueThin, neueXThin } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import rightArrow from "@/public/images/rightArrow.svg";
import { services } from "./GridServices";


export default function GridBlogs() {
  return (
    <div className="flex flex-col gap-[20px] bg-black-600 py-24 lg:gap-[80px]">
      <h2
        className={`${neueXThin.className} text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-white`}
      >
        Experiencia, pasión y resultados en cada servicio.
      </h2>

      <div className="flex flex-col gap-4 lg:gap-12">
        {services.map((service: any, index: any) => (
          <Link
            href={`/servicios/${service.slug}`}
            key={index}
            className="group flex items-center justify-between border-b border-gray pb-3 text-white lg:gap-4 lg:pb-6 xl:gap-0"
          >
            <div className="relative w-full lg:w-4/12">
              <h3
                className={`${neueThin.className} text-xl transition ease-out relative z-10 lg:text-3xl xl:text-4xl lg:group-hover:bg-black-600 lg:group-hover:translate-x-14`}
              >
                {service.title}
              </h3>
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
                className="lg:group-hover:bg-flourescent-yellow absolute left-[0%] top-[0%] hidden h-fit cursor-pointer rounded-full p-2 lg:bg-gray-400 lg:group-hover:block"
                width={48}
                height={48}
                src={rightArrow}
                alt=""
              />
            </div>

            <div className="flex items-center gap-12 lg:w-8/12">
              <p
                className={`${neueXThin.className} hidden lg:block lg:text-lg xl:text-2xl group-hover:text-transparent w-11/12`}
              >
                {service.itemdescription}
              </p>
              <div className="hidden h-fit max-h-[40px] max-w-[40px] rounded-full bg-flourescentYellow p-2 lg:block lg:group-hover:invisible">
                <Image
                  src={rightArrow}
                  width={48}
                  height={48}
                  alt=""
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="eager"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
