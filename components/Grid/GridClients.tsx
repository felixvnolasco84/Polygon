import { neueXThin } from "@/fonts";
import Image from "next/image";

const GridClients = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-y-[95px] px-0 pb-24 lg:px-24">
      <h4
        className={`${neueXThin.className} px-4 lg:px-0 text-3xl font-bold lg:font-medium lg:text-7xl text-black-500 max-w-[1097px] lg:leading-[90px]`}
      >
        Logros digitales que impulsan el éxito de nuestros clientes
      </h4>
      <div className="px-none grid grid-cols-2 border-[0.5px] border-[#70707033] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-[200px] lg:border-none">
        {items.map((item: any, index: any) => (
          <div
            className="flex max-w-[398px] flex-col justify-between border border-gray-400 p-6 lg:border-none lg:p-0"
            key={index}
          >
            <div className="flex h-[200px] items-center justify-center lg:justify-start">
              <div className={`flex h-fit justify-center lg:justify-start`}>
                <Image
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  // fill={true}
                  // sizes="(max-width: 768px) 100vw, 33vw"
                  alt=""
                />
              </div>
            </div>

            <span
              className={`${neueXThin.className} hidden lg:block text-2xl text-black-500 leading-[35px] h-full w-full`}
            >
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridClients;
