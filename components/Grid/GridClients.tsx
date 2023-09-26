import { neueXThin } from "@/fonts";
import Image from "next/image";

const GridClients = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-y-[95px]">
      <h4 className={`${neueXThin.className} text-7xl text-black-500 max-w-[1097px] leading-[90px]`}>
        Nuestro Compromiso: <br /> Impulsar el Éxito de Nuestros Clientes.
      </h4>
      <div className="grid grid-cols-1 gap-x-4 gap-y-[200px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item: any, index: any) => (
          <div className="flex flex-col gap-[30px]" key={index}>
            <div className="flex flex-col gap-6 w-full rounded-[10px] min-h-[450px] justify-between">              
              <div className="flex items-center justify-center h-full">
                <Image className="h-fit" src={item.image} width={180} height={75}  alt=""/>              
              </div>              
              <span
                className={`${neueXThin.className} text-2xl text-black-500 leading-[35px]`}
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
