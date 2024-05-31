import * as React from "react";

import { cn } from "@/lib/utils";
import { CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

import Indrive from "@/public/images/Customers/InDriveColors.png";
import { Button } from "../ui/button";
import { Plus, PlusCircle, PlusCircleIcon } from "lucide-react";
import { neueLight, neueMedium, neueThin, neueXThin } from "@/styles/fonts";

type CardProps = {
  title: string;
  description: string;
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardProps
>(({ title, description, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-[#F6F6F6] rounded-lg shadow-sm flex flex-col justify-between",
      className
    )}
    {...props}
  >
    <CardHeader>
      <CardTitle
        className={`${neueMedium.className} text-5xl text-[#150C14] xl:text-7xl font-normal`}
      >
        {title}
      </CardTitle>
    </CardHeader>
    <CardFooter>
      <p
        className={`${neueLight.className} text-xs text-[#150C14] xl:text-sm font-normal`}
      >
        {description}
      </p>
    </CardFooter>
  </div>
));
Card.displayName = "Card";

export default function GridFeaturedWork() {
  return (
    <div className="flex flex-col gap-12">
      <h2 className={`${neueLight.className} text-2xl xl:text-4xl text-center`}>
      {/* <h2 className={`${neueMedium.className} text-2xl xl:text-4xl text-center`}> */}
        Nuestro Trabajo
      </h2>
      <div className="grid-rows-12 grid grid-cols-6 gap-3">
        <div className="rows-span-12 relative col-span-6 aspect-square overflow-hidden rounded-md bg-gray-400 shadow-sm lg:col-span-3">
          <Image
            className="h-full w-full object-cover object-center"
            src={Indrive}
            alt="InDrive"
            fill
            sizes="100vw"
          />
        </div>
        <div className="grid-rows-9 col-span-6 grid grid-cols-12 gap-3 lg:col-span-3">
          <div className="col-span-12 flex items-center justify-between gap-4 rounded-lg bg-[#F6F6F6] p-6 shadow-sm">
            <div className="flex w-full flex-col justify-between lg:w-10/12">
              <CardHeader className="p-0">
                <CardTitle
                  className={`${neueLight.className} font-light text-[#150C14] lg:text-2xl xl:text-4xl`}>
                {/* <CardTitle
                  className={`${neueMedium.className} font-light text-[#150C14] lg:text-2xl xl:text-4xl`}
                > */}
                  inDrive Martina la Peligrosa
                </CardTitle>
                <CardDescription
                  className={`${neueThin.className} text-[#150C14] lg:text-sm xl:text-xl`}
                >
                  Campaña para inDrive enfocada en generación de UGC,
                  estrategia, creatividad, producción audiovisual y musical.
                </CardDescription>
              </CardHeader>
            </div>
            <Button className="p-0" variant={"link"}>
              <Plus
                className="rounded-full hover:bg-black hover:text-white"
                size={24}
              />
            </Button>
          </div>

          <Card
            title="70M"
            description="Views en Tik Tok"
            className="col-span-5 row-span-2"
          />
          <Card
            title="+1.35%"
            description="Engagement rate"
            className="col-span-7 row-span-2"
          />
          <Card
            title="120%"
            description="Aumento en ventas"
            className="col-span-7 row-span-2"
          />
          <Card
            title="30%"
            description="Aumento en tráfico Social Media"
            className="col-span-5 row-span-2"
          />
        </div>
      </div>
    </div>
  );
}
