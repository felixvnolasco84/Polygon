import { neueXThin } from "@/fonts";
import Image from "next/image";

const GridClients = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-y-8 px-0 pb-4 lg:gap-y-12 lg:px-12 lg:pb-12 xl:gap-y-24 xl:px-24 xl:pb-24">
      <h4
        className={`${neueXThin.className} px-4 lg:px-0 text-3xl lg:font-medium lg:text-5xl xl:text-6xl text-black-500 max-w-[1097px] xl:leading-[90px]`}
      >
        Logros digitales que impulsan el éxito de nuestros clientes
      </h4>
      <div className="px-none grid grid-cols-2 border-[0.5px] border-[#70707033] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-44 lg:border-none">
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
                  alt=""
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="eager"
                />
              </div>
            </div>

            <span
              className={`${neueXThin.className} hidden lg:block lg:text-xl xl:text-2xl text-black-500 xl:leading-[35px] h-full w-full`}
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
