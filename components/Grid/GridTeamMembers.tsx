import { neueXThin, neueThin } from "@/fonts";

const GridTeamMembers = ({ items }: any) => {
  return (
    <div className={`${neueLight.className} flex flex-col gap-4 px-2 lg:px-24`}>
      <h4 className="text-2xl text-black-400">Nuestro equipo.</h4>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-24 lg:px-24 xl:grid-cols-5">
        {items.map((item: any, index: any) => (
          <div className="flex flex-col gap-[30px]" key={index}>
            <div className="min-h-[145px] w-full rounded-[10px] bg-white p-4 lg:h-[371px] lg:w-[313px] lg:max-w-none"></div>
          <div className="flex flex-col gap-[10px]">
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
  );
};

export default GridTeamMembers;
