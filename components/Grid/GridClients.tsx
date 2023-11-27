import { neueXThin } from "@/fonts";
import Image from "next/image";

const GridClients = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-y-[95px] px-0 pb-24 lg:px-24">
      <h4
        className={`${neueXThin.className} px-4 lg:px-0 text-3xl font-bold lg:font-medium lg:text-7xl text-black-500 max-w-[1097px] lg:leading-[90px]`}
      >
        Nuestro Compromiso: <br /> Impulsar el Éxito de Nuestros Clientes.
      </h4>
      <div className="px-none grid grid-cols-2 border-[0.5px] border-[#70707033] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-[200px] lg:border-none">
        {items.map((item: any, index: any) => (
          <div className="flex flex-col gap-[30px]" key={index}>
            <div className="min-h-none flex min-h-[200px] w-full flex-col items-center justify-between gap-6 border border-[#70707033] lg:min-h-[450px] lg:border-none">
              <div className="flex h-full max-w-[120px] items-center justify-center lg:max-w-none">
                <Image
                  className="h-fit"
                  src={item.image}
                  width={180}
                  height={75}
                  alt=""
                />
              </div>
              <span
                className={`${neueXThin.className} hidden lg:block text-2xl text-black-500leading-[35px]`}
              >
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridClients;
