import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Tuborg from "@/videos/Tuborg_Proyecto_Video.mp4.json";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { neueLight, neueMedium, neueThin } from "@/styles/fonts";
import VideoComponent from "../Video/VideoComponent";

type CardProps = {
  title: string;
  description: string;
};

const WorkCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardProps
>(({ title, description, className, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(
      "bg-[#F6F6F6] rounded-lg shadow-sm flex flex-col justify-between",
      className
    )}
    {...props}
  >
    <CardHeader>
      <CardTitle
        className={`${neueMedium.className}  text-3xl  lg:text-4xl text-[#150C14] xl:text-6xl font-normal`}
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
  </Card>
));
Card.displayName = "Card";

export default function GridFeaturedWorkTuborg() {
  return (
    <section className="grid-rows-12 grid grid-cols-6 gap-3">
      <div className="rows-span-12 relative col-span-6 aspect-square overflow-hidden rounded-md bg-gray-400 shadow-sm lg:col-span-3">
        <VideoComponent
          className="h-full w-full object-cover object-center"
          video={Tuborg}
          // poster="https://www.polygonag.com/images/Customers/Tuborg_Portada.png"
        />
      </div>
      <div className="grid-rows-9 col-span-6 grid grid-cols-12 gap-3 lg:col-span-3">
        <div className="col-span-12 flex items-center justify-between rounded-lg bg-[#F6F6F6] p-6 shadow-sm">
          <Card className="flex w-full flex-col justify-between lg:w-11/12">
            <CardHeader className="p-0">
              <CardTitle
                className={`${neueLight.className} font-light text-[#150C14] lg:text-2xl xl:text-4xl`}
              >
                Tuborg SOF
              </CardTitle>
              <CardDescription
                className={`${neueThin.className} text-[#150C14] lg:text-sm xl:text-xl`}
              >
                Mini serie musical para la cerveza Tuborg. Phil Vinall, Ángel y
                Chucho del grupo Zoe y JM Salinas produjeron 3 bandas emergentes
                durante 8 capítulos.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* <Button className="p-0" variant={"link"}>
            <Plus
              className="rounded-full hover:bg-black hover:text-white"
              size={24}
            />
          </Button> */}
        </div>

        <WorkCard
          title="08"
          description="Mini capítulos en Youtube"
          className="col-span-5 row-span-2"
        />
        <Card
          className={
            "bg-[#F6F6F6] rounded-lg shadow-sm flex flex-col justify-between col-span-7 row-span-2"
          }
        >
          <CardHeader>
            <div
              className={`${neueMedium.className} text-xl text-[#150C14] xl:text-3xl font-normal`}
            >
              <div className="flex flex-col lg:gap-2 xl:gap-4">
                <h3 className="leading-none">Phil Vinall</h3>
                <h3 className="leading-none">Jesús Baez (Zoé)</h3>
                <h3 className="leading-none">Ángel Mosqueda (Zoé)</h3>
                <h3 className="leading-none">JM Salinas</h3>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="p-4 lg:p-6">
            <p
              className={`${neueLight.className} text-xs text-[#150C14] xl:text-sm font-normal`}
            >
              Productores Musicales
            </p>
          </CardFooter>
        </Card>
        <WorkCard
          title="1M"
          description="Reproducciones en Spotify"
          className="col-span-7 row-span-2"
        />
        <WorkCard
          title="03"
          description="Canciones en Spotify"
          className="col-span-5 row-span-2"
        />
      </div>
    </section>
  );
}
