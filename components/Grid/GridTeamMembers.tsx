import { neueXThin, neueThin, neueLight, neueMedium } from "@/fonts";
import Image from "next/image";

const GridTeamMembers = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      <h4 className={`${neueLight.className} text-2xl xl:text-4xl text-center`}>
        Conoce al equipo
      </h4>
      <div className="grid w-fit w-full grid-cols-3 gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-y-12">
        {items.map((item: any, index: any) => (
          <div className="space-y-2 space-y-4" key={index}>
            <div className="relative aspect-[13/16] overflow-hidden rounded-lg shadow-sm">
              <Image
                src={item.img}
                alt=""
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <div className="text-black-500">
              <p
                className={`${neueLight.className} text-sm lg:text-xl xl:text-2xl`}
              >
                {item.name}
              </p>
              <p
                className={`${neueThin.className} text-xs lg:text-base leading-none`}
              >
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridTeamMembers;
