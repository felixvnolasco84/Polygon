import { neueXThin, neueThin, neueLight } from "@/fonts";
import Image from "next/image";

const GridTeamMembers = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-8 px-4 lg:gap-12 lg:px-12 xl:px-24">
      <h4
        className={`${neueXThin.className} text-2xl lg:text-5xl xl:text-6xl leading-none`}
      >
        Conoce al equipo
      </h4>
      <div className="grid w-fit grid-cols-3 gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-4 xl:gap-y-24 2xl:grid-cols-5">
        {items.map((item: any, index: any) => (
          <div className="space-y-2 lg:space-y-4 xl:space-y-6" key={index}>
            <Image
              src={item.img}
              alt=""
              className="min-h-[145px] rounded-sm object-cover xl:h-[371px]"
              width={313}
              height={371}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
            />
            <div className="text-black-500 lg:space-y-0 xl:space-y-1">
              <p
                className={`${neueThin.className} text-sm lg:text-xl xl:text-2xl`}
              >
                {item.name}
              </p>
              <p
                className={`${neueXThin.className} text-xs lg:text-lg xl:text-xl`}
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
