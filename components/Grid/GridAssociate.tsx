import { neueXThin, neueThin } from "@/fonts";
import Image from "next/image";

const GridAssociate = ({ items }: any) => {
  return (
    <div className="hidden flex-col gap-y-7 px-4 lg:flex lg:gap-12 lg:px-24">
      <h4
        className={`${neueXThin.className} text-2xl lg:text-7xl text-black-500 lg:leading-none`}
      >
        Lo que nos hace diferentes
      </h4>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item: any, index: any) => (
          <div className="flex flex-col gap-[30px]" key={index}>
            <div className="flex h-[477px] w-full flex-col justify-center gap-16 rounded-[10px] bg-gray-400 pl-6 lg:pl-[53px]">
              <div
                className={`lg:w-[${item.imageWidth}px] lg:h-[${item.imageHeight}px]`}
              >
                <Image src={item.image} alt="" width={380} height={80} />
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">                
                <span
                  className={`${neueThin.className} text-xl lg:text-[40px] text-black-500 leading-none`}
                >
                  {item.title}
                </span>
                <span
                  className={`${neueXThin.className} text-lg lg:text-2xl text-black-500 lg:leading-[40px] max-w-[694px]`}
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
