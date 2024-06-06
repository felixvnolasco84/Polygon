import * as React from "react";

import { cn } from "@/lib/utils";
import { CardFooter, CardHeader, CardTitle } from "../ui/card";
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
  isCurrent?: boolean;
  slug: string;
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardProps
>(({ title, description, img, path, className, isCurrent, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `${isCurrent && "opacity-50"} rounded-lg  flex flex-col justify-start `,
      className
    )}
    {...props}
  >
    <CardHeader className="space-y-2 p-0 lg:space-y-4">
      <Link
        href={isCurrent ? "#" : path}
        className="relative aspect-square overflow-hidden rounded-md shadow-sm"
      >
        <Image
          src={img}
          className={`h-full w-full object-cover object-center`}
          alt="InDrive"
          fill
        />
      </Link>
      <CardTitle className={`${neueMedium.className} text-sm text-[#150C14]`}>
        {title}
      </CardTitle>
    </CardHeader>
    <CardFooter className="pl-0">
      <Link
        href={isCurrent ? "#" : path}
        className={`${neueThin.className} ${
          !isCurrent && "hover:underline"
        }  tracking-tight text-2xl text-[#150C14] xl:text-3xl font-light`}
      >
        {description}
      </Link>
    </CardFooter>
  </div>
));
Card.displayName = "Card";

const blogs: CardProps[] = [
  {
    title: "WEB DESIGN",
    path: "/blog/la-importancia-del-ux-ui-en-la-retencion-de-usuarios",
    img: UXUI,
    description: "La importancia del UX/UI en la retención de usuarios",
    slug: "la-importancia-del-ux-ui-en-la-retencion-de-usuarios",
  },
  {
    title: "SEO",
    path: "/blog/guia-completa-de-seo-para-principiantes",
    img: CONTENIDO,
    description: "Guía completa de SEO para principiantes",
    slug: "guia-completa-de-seo-para-principiantes",
  },
  {
    title: "CONTENIDO",
    path: "/blog/el-poder-del-video-marketing-en-las-redes-sociales",
    img: VIDEO,
    description: "El Poder del Video Marketing en las Redes Sociales",
    slug: "el-poder-del-video-marketing-en-las-redes-sociales",
  },
];

export default function GridBlogsRecommendations({
  currentBlog,
}: {
  currentBlog: string;
}) {
  console.log( currentBlog == blogs[0].slug);

  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      <h4 className={`${neueLight.className} text-2xl  text-center`}>
        TENDENCIAS Y NOTICIAS
      </h4>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card
            key={blog.title}
            title={blog.title}
            path={blog.path}
            img={blog.img}
            slug={blog.slug}
            description={blog.description}
            isCurrent={currentBlog === blog.slug}
          />
        ))}
      </div>
    </div>
  );
}
