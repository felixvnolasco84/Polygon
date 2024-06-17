import * as React from "react";

import { cn } from "@/lib/utils";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
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

const BlogCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardProps
>(({ title, description, img, path, className, ...props }, ref) => (
  <Card ref={ref} className="flex flex-col justify-start rounded-lg" {...props}>
    <CardHeader className="space-y-2 p-0 lg:space-y-4">
      <Link
        href={path}
        className="relative aspect-square overflow-hidden rounded-md shadow-sm"
      >
        <Image
          src={img}
          className="duration-30 h-full w-full object-cover object-center transition-opacity hover:opacity-50"
          alt="InDrive"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </Link>
      <CardTitle
        className={`${neueMedium.className} text-sm lg-text-base text-[#150C14]`}
      >
        {title}
      </CardTitle>
    </CardHeader>
    <CardFooter className="p-0">
      <Link
        href={path}
        className={`${neueThin.className} hover:underline tracking-tight text-2xl text-[#150C14] xl:text-4xl font-light`}
      >
        {description}
      </Link>
    </CardFooter>
  </Card>
));
BlogCard.displayName = "BlogCard";

export default function NewGridBlogs() {
  return (
    <section className="flex flex-col gap-8 lg:gap-12">
      <h2 className={`${neueLight.className} text-2xl  text-center`}>
        TENDENCIAS Y NOTICIAS
      </h2>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <BlogCard
          path="/blog/la-importancia-del-ux-ui-en-la-retencion-de-usuarios"
          img={UXUI}
          title="WEB DESIGN"
          description="La importancia del UX/UI en la retención de usuarios"
        />
        <BlogCard
          path="/blog/guia-completa-de-seo-para-principiantes"
          img={CONTENIDO}
          title="SEO"
          description="Guía completa de SEO para principiantes"
        />
        <BlogCard
          path="/blog/el-poder-del-video-marketing-en-las-redes-sociales"
          img={VIDEO}
          title="CONTENIDO"
          description="El Poder del Video Marketing en las Redes Sociales"
        />
      </div>
    </section>
  );
}
