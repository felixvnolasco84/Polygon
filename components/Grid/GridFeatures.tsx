import { neueXThin, neueThin, neueLight } from "@/fonts";

const GridFeatures = ({ items }: any) => {
  return (
    <div className="flex max-w-sm flex-col gap-y-[50px] px-4 lg:px-24">
      <h4
        className={`${neueLight.className} text-2xl lg:text-7xl text-black-500`}
      >
        Calidad Polygon, certificaciones y partners.
      </h4>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item: any, index: any) => (
          <div className="flex flex-col gap-[30px]" key={index}>
            <div className="flex h-[477px] w-full flex-col gap-6 rounded-[10px] bg-white p-14">
              <div className="h-[180px] w-[180px] bg-flourescentYellow"></div>
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
