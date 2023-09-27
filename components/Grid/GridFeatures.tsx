import { neueXThin, neueThin } from "@/fonts";

const GridFeatures = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-y-[50px] px-24">
      <h4 className={`${neueXThin.className} text-7xl text-black-500`}>
        Calidad Polygon, trabaja con nosotros.
      </h4>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item: any, index: any) => (
          <div className="flex flex-col gap-[30px]" key={index}>
            <div className="flex flex-col gap-6 w-full h-[477px] bg-white p-14 rounded-[10px]">
              <div className="bg-flourescentYellow w-[180px] h-[180px]"></div>
              <div className="flex flex-col gap-[10px]">
                <span
                  className={`${neueThin.className} text-[40px] text-black-500 leading-none`}
                >
                  {item.title}
                </span>
                <span
                  className={`${neueXThin.className} text-2xl text-black-500 leading-[40px] max-w-[694px]`}
                >
                  {item.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridFeatures;
