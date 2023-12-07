import { neueXThin, neueThin, neueLight } from "@/fonts";
import Image from "next/image";

const GridTeamMembers = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-8 px-4 lg:gap-12 lg:px-24">
      <h4 className={`${neueLight.className} text-2xl lg:text-7xl leading-none`}>
        Conoce al equipo
      </h4>
      <div className="grid grid-cols-3 gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-4 xl:gap-y-24 2xl:grid-cols-5">
        {items.map((item: any, index: any) => (
          <div className="flex flex-col gap-2 lg:gap-[30px]" key={index}>
            <Image
              src={item.img}
              alt=""
              className="min-h-[145px] w-full rounded-[10px] bg-gray-500 lg:max-w-none xl:h-[371px] xl:w-[313px]"
              width={313}
              height={371}
            />
            <div className="flex flex-col gap-2 lg:gap-[10px]">
              <span
                className={`${neueThin.className} text-sm lg:text-2xl text-black-500`}
              >
                {item.name}
              </span>
              <span
                className={`${neueXThin.className} text-xs lg:text-xl text-black-500`}
              >
                {item.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridTeamMembers;
