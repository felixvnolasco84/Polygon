"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import rightArrow from "@/public/images/rightArrow.svg";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { forwardRef, useState } from "react";

const Slider = forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <div className="flex w-full flex-col gap-8 lg:gap-12">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-[11px] w-full grow overflow-hidden rounded-full bg-white">
          <SliderPrimitive.Range className="absolute h-full bg-flourescentYellow" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-8 w-8 rounded-full border-none border-primary bg-flourescentYellow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <Image
            className="group-hover:bg-flourescent-yellow h-full w-full cursor-pointer rounded-full bg-flourescentYellow p-0.5"
            width={0}
            height={0}
            src={rightArrow}
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
          />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
