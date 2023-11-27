import { neueXThin, neueThin, neueLight } from "@/fonts";

const GridTeamMembers = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-8 px-4 lg:px-24">
      <h4 className={`${neueLight.className} text-2xl lg:text-7xl`}>Nuestro equipo.</h4>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-24 xl:grid-cols-5">
        {items.map((item: any, index: any) => (
          <div className="flex flex-col gap-2 lg:gap-[30px]" key={index}>
            <div className="min-h-[145px] w-full rounded-[10px] bg-gray-500 p-4 lg:h-[371px] lg:w-[313px] lg:max-w-none"></div>
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
