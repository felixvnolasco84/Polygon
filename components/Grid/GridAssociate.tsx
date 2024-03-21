import { neueXThin, neueThin, neueRoman } from "@/fonts";
import Image from "next/image";
import ContactDialog from "../Dialog/ContactDialog";
import TalkDialog from "../Dialog/TalkDialog";

const GridAssociate = ({ items }: any) => {
  const message =
    "Hablemos, nuestro equipo se comunicará contigo en las siguientes 24 horas.";

  return (
    <div className="hidden flex-col gap-y-7 lg:flex lg:gap-12">
      <h4
        className={`${neueXThin.className} text-2xl lg:text-5xl xl:text-6xl text-black-500 lg:leading-none`}
      >
        Lo que nos hace diferentes
      </h4>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item: any, index: any) => (
          <div className="flex flex-col lg:gap-4 xl:gap-[30px]" key={index}>
            <div className="flex h-[477px] w-full flex-col justify-center rounded-[10px] bg-gray-400 p-6 lg:gap-8 lg:p-8 xl:gap-16">
              <div
                className={`lg:w-[${item.imageWidth}px] lg:h-[${item.imageHeight}px]`}
              >
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="eager"
                  src={item.image}
                  className="" alt=""
                  width={item.imageWidth}
                  height={item.imageHeight}
                />
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
                <span
                  className={`${neueThin.className} text-xl lg:text-3xl xl:text-[40px] text-black-500 leading-none`}
                >
                  {item.title}
                </span>
                <span
                  className={`${neueXThin.className} text-lg lg:text-xl xl:text-2xl text-black-500 xl:leading-[40px] max-w-[694px]`}
                >
                  {item.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <TalkDialog
        message={message}
        bgColor="bg-flourescentYellow"
        bgHoverColor="bg-gray-400"
        bgButtonColor="bg-gray-400"
        bgButtonHoverColor="bg-white"
      />
    </div>
  );
};

export default GridAssociate;
