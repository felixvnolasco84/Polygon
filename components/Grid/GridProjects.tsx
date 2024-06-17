import { cn, Project } from "@/lib/utils";
import { CardFooter, CardHeader, CardTitle, Card } from "../ui/card";
import Image, { StaticImageData } from "next/image";

import { neueThin } from "@/styles/fonts";
import VideoComponent from "../Video/VideoComponent";
import { forwardRef } from "react";

type CardProps = {
  img?: StaticImageData;
  title: string;
  description: string;
  video?: any;
};

const ProjectCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardProps
>(({ title, description, img, video, className, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(" rounded-lg  flex flex-col justify-start", className)}
    {...props}
  >
    <CardHeader className="space-y-2 p-0 lg:space-y-4">
      <div className="relative aspect-[10/12] overflow-hidden rounded-md shadow-sm">
        <>
          {video ? (
            <VideoComponent
              className="h-full w-full object-cover object-center"
              video={video}
            />
          ) : (
            <Image
              src={img || ""}
              className="h-full w-full object-cover object-center"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="InDrive"
              fill
            />
          )}
        </>
      </div>
      <CardTitle
        className={`${neueThin.className} text-2xl text-[#150C14] xl:text-3xl font-normal`}
      >
        {title}
      </CardTitle>
    </CardHeader>
    <CardFooter className="p-0">
      <p
        className={`${neueThin.className} text-base text-[#150C14] xl:text-lg font-normal`}
      >
        {description}
      </p>
    </CardFooter>
  </Card>
));
ProjectCard.displayName = "ProjectCard";

type GridProjectsProps = {
  projects: Project[];
};

export default function GridProjects({ projects }: GridProjectsProps) {
  return (
    <section className="grid grid-cols-1 gap-x-3 gap-y-5 lg:grid-cols-3">
      {projects.length > 0 &&
        projects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project?.img}
            title={project.title}
            description={project.description}
            video={project?.video}
          />
        ))}
    </section>
  );
}
