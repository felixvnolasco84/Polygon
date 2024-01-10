import { neueXThin, neueThin, neueLight } from "@/fonts";
import Image from "next/image";

const GridTeamMembers = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-8 px-4 lg:gap-12 lg:px-12 xl:px-24">
      <h4
        className={`${neueXThin.className} text-2xl lg:text-5xl xl:text-7xl leading-none`}
      >
        Conoce al equipo
      </h4>
      <div className="grid w-fit grid-cols-3 gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-4 xl:gap-y-24 2xl:grid-cols-5">
        {items.map((item: any, index: any) => (
          <div
            className="flex w-full flex-shrink flex-col gap-2 lg:gap-4 xl:gap-6"
            key={index}
          >
            <Image
              src={item.img}
              alt=""
              className="min-h-[145px] w-full flex-shrink rounded-sm object-cover object-center lg:max-w-none xl:h-[371px]"
              width={313}
              height={371}
            />
            <div className="flex flex-grow flex-col lg:gap-0 xl:gap-1">
              <span
                className={`${neueThin.className} text-sm lg:text-xl xl:text-2xl text-black-500`}
              >
                {item.name}
              </span>
              <span
                className={`${neueXThin.className} text-xs lg:text-lg xl:text-xl text-black-500`}
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
