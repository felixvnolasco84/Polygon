import { neueXThin, neueThin } from "@/fonts";

const GridTeamMembers = ({ items }: any) => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-24">
      {items.map((item: any, index: any) => (
        <div className="flex flex-col gap-[30px]" key={index}>
          <div className="w-[313px] h-[371px] bg-white p-4 rounded-[10px]"></div>
          <div className="flex flex-col gap-[10px]">
            <span className={`${neueThin.className} text-2xl text-black-500`}>
              {item.name}
            </span>
            <span className={`${neueXThin.className} text-xl text-black-500`}>
              {item.role}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridTeamMembers;
