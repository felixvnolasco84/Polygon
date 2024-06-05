import * as React from "react";

import { cn, Project } from "@/lib/utils";
import { CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image, { StaticImageData } from "next/image";

import { neueLight, neueMedium } from "@/styles/fonts";

type CardProps = {
  img: StaticImageData;
  title: string;
  description: string;
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardProps
>(({ title, description, img, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(" rounded-lg  flex flex-col justify-start", className)}
    {...props}
  >
    <CardHeader className="space-y-2 p-0 lg:space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-md shadow-sm lg:aspect-[10/12]">
        <Image
          src={img}
          className="h-full w-full object-cover object-center"
          alt="InDrive"
          fill
        />
      </div>
      <CardTitle
        // className={`${neueMedium.className} text-2xl text-[#150C14] xl:text-3xl font-normal`}
        className={`${neueLight.className} text-2xl text-[#150C14] xl:text-3xl font-normal`}
      >
        {title}
      </CardTitle>
    </CardHeader>
    <CardFooter className="pl-0">
      <p
        className={`${neueLight.className} text-xs text-[#150C14] xl:text-sm font-normal`}
      >
        {description}
      </p>
    </CardFooter>
  </div>
));
Card.displayName = "Card";

type GridProjectsProps = {
  projects: Project[];
};

export default function GridProjects({ projects }: GridProjectsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
      {projects.length > 0 &&
        projects.map((project, index) => (
          <Card
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
          />
        ))}
    </div>
  );
}
