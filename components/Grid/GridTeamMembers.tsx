import { neueXThin, neueThin, neueLight, neueMedium } from "@/fonts";
import Image from "next/image";
import { Card, CardFooter, CardHeader } from "../ui/card";

const GridTeamMembers = ({ items }: any) => {
  return (
    <section className="flex flex-col gap-8 lg:gap-12">
      <h2 className={`${neueLight.className} text-2xl text-center`}>
        NUESTRO EQUIPO
      </h2>
      <div className="grid w-fit w-full grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item: any, index: any) => (
          <Card className="space-y-2" key={index}>
            <CardHeader className="p-0">
              <div className="relative aspect-[13/16] overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </CardHeader>
            <CardFooter className="p-0">
              <div className="text-black-500">
                <p
                  className={`${neueLight.className} text-sm lg:text-xl xl:text-2xl`}
                >
                  {item.name}
                </p>
                <p
                  className={`${neueThin.className} text-xs lg:text-base leading-none`}
                >
                  {item.role}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default GridTeamMembers;
