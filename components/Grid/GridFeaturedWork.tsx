import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { neueLight, neueMedium, neueThin } from "@/styles/fonts";

import InDrive from "@/videos/InDrive.mp4.json";
import VideoComponent from "../Video/VideoComponent";
import { forwardRef } from "react";

type CardProps = {
  title: string;
  description: string;
};

const WorkCard = forwardRef<
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
        className={`${neueMedium.className} text-3xl  lg:text-4xl text-[#150C14] xl:text-6xl font-normal`}
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

export default function GridFeaturedWork() {
  return (
    <section className="flex flex-col gap-12">
      <div className="grid-rows-12 grid grid-cols-6 gap-3">
        <div className="rows-span-12 relative col-span-6 aspect-square overflow-hidden rounded-md bg-gray-400 shadow-sm lg:col-span-3">
          <VideoComponent
            className="h-full w-full object-cover object-center"
            video={InDrive}
            poster="https://www.polygonag.com/images/Customers/InDriveColors.png"
          />
        </div>
        <div className="grid-rows-9 col-span-6 grid grid-cols-12 gap-3 lg:col-span-3">
          <div className="col-span-12 flex items-center justify-between gap-4 rounded-lg bg-[#F6F6F6] p-6 shadow-sm">
            <Card className="flex w-full flex-col justify-between lg:w-10/12">
              <CardHeader className="p-0">
                <CardTitle
                  className={`${neueLight.className} font-light text-[#150C14] lg:text-2xl xl:text-4xl`}
                >
                  inDrive Martina la Peligrosa
                </CardTitle>
                <CardDescription
                  className={`${neueThin.className} text-[#150C14] lg:text-sm xl:text-xl`}
                >
                  Campaña para inDrive enfocada en generación de UGC,
                  estrategia, creatividad, producción audiovisual y musical.
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
            title="70M"
            description="Views en Tik Tok"
            className="col-span-5 row-span-2"
          />
          <WorkCard
            title="2M"
            description="Esuchas en Spotify"
            className="col-span-7 row-span-2"
          />
          <WorkCard
            title="100K"
            description="Interacciones TikTok Challenge"
            className="col-span-7 row-span-2"
          />
          <WorkCard
            title="3.8M"
            description="Views en Youtube"
            className="col-span-5 row-span-2"
          />
        </div>
      </div>
    </section>
  );
}
