import { neueXThin, neueThin } from "@/fonts";
import Image from "next/image";

const GridAssociate = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-y-[50px]">
      <h4
        className={`${neueXThin.className} text-7xl text-black-500 leading-none`}
      >
        Calidad Polygon, certificaciones y partners.
      </h4>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item: any, index: any) => (
          <div className="flex flex-col gap-[30px]" key={index}>
            <div className="flex flex-col gap-16 w-full h-[477px] bg-white pl-[53px] rounded-[10px] justify-center">
              <div
                className={`w-[${item.imageWidth}px] h-[${item.imageHeight}px]`}
              >
                <Image
                  src={item.image}
                  alt=""
                  width={item.imageWidth}
                  height={item.imageHeight}
                />
              </div>

              <div className="flex flex-col gap-4">
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

export default GridAssociate;
