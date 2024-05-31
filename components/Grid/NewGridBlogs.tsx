import * as React from "react";

import { cn } from "@/lib/utils";
import { CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image, { StaticImageData } from "next/image";

import Indrive from "@/public/images/Customers/InDriveColors.png";

import Copa from "@/public/images/Customers/COPA-Hat-Colors.png";
import Bupa from "@/public/images/Customers/Bupa.png";

import { neueLight, neueMedium, neueThin } from "@/styles/fonts";

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
        className={`${neueMedium.className} text-sm lg-text-base text-[#150C14]`}
      >
        {title}
      </CardTitle>
    </CardHeader>
    <CardFooter className="pl-0">
      <p
        className={`${neueThin.className} tracking-tight text-2xl text-[#150C14] xl:text-4xl font-light`}
      >
        {description}
      </p>
    </CardFooter>
  </div>
));
Card.displayName = "Card";

export default function NewGridBlogs() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
      <Card img={Indrive} title="WEB DESIGN" description="UX trends in 2024" />
      <Card img={Bupa} title="BRANDING" description="Brand vs Branding" />
      <Card img={Copa} title="SEO" description="Why your website need SEO" />
    </div>
  );
}
