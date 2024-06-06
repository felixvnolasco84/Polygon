import * as React from "react";

import { cn } from "@/lib/utils";
import { CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image, { StaticImageData } from "next/image";

import UXUI from "@/public/images/Customers/UX-UI-Blog.png";

import VIDEO from "@/public/images/Customers/Video_Blog.png";
import CONTENIDO from "@/public/images/Customers/Contenido_Blog.png";

import { neueLight, neueMedium, neueThin } from "@/styles/fonts";
import Link from "next/link";

type CardProps = {
  img: StaticImageData;
  title: string;
  description: string;
  path: string;
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardProps
>(({ title, description, img, path, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(" rounded-lg  flex flex-col justify-start", className)}
    {...props}
  >
    <CardHeader className="space-y-2 p-0 lg:space-y-4">
      <Link
        href={path}
        className="relative aspect-square overflow-hidden rounded-md shadow-sm"
      >
        <Image
          src={img}
          className="h-full w-full object-cover object-center"
          alt="InDrive"
          fill
        />
      </Link>
      <CardTitle
        // className={`${neueMedium.className} text-2xl text-[#150C14] xl:text-3xl font-normal`}
        className={`${neueMedium.className} text-sm lg-text-base text-[#150C14]`}
      >
        {title}
      </CardTitle>
    </CardHeader>
    <CardFooter className="pl-0">
      <p
        className={`${neueLight.className} tracking-tight text-2xl text-[#150C14] xl:text-4xl font-light`}
      >
        {description}
      </p>
    </CardFooter>
  </div>
));
Card.displayName = "Card";

export default function NewGridBlogs() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      <h4 className={`${neueLight.className} text-2xl  text-center`}>
        TENDENCIAS Y NOTICIAS
      </h4>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Card
          path="/blog/la-importancia-del-ux-ui-en-la-retencion-de-usuarios"
          img={UXUI}
          title="WEB DESIGN"
          description="La importancia del UX/UI en la retención de usuarios"
        />
        <Card
          path="/blog/guia-completa-de-seo-para-principiantes"
          img={CONTENIDO}
          title="SEO"
          description="Guía completa de SEO para principiantes"
        />
        <Card
          path="/blog/el-poder-del-video-marketing-en-las-redes-sociales"
          img={VIDEO}
          title="CONTENIDO"
          description="El Poder del Video Marketing en las Redes Sociales"
        />
      </div>
    </div>
  );
}
