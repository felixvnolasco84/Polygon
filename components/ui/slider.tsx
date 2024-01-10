"use client";

import React, { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { neueThin } from "@/styles/fonts";
import rightArrow from "@/public/images/rightArrow.svg";
import Image from "next/image";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Slider = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {

    return (
      <div className="flex w-1/2 flex-col gap-12">
        <p
          className={`${neueThin.className} text-center leading-none text-[40px]`}
        >
          {/* ${sliderValue[0]} - ${props.max} */}
        </p>
        <SliderPrimitive.Root
          ref={ref}
          // @ts-ignore
          min={Number(props.min)}
          // @ts-ignore
          max={Number(props.max)}
          // @ts-ignore
          step={props.step}
          // @ts-ignore
          // value={sliderValue}
          // onValueChange={(value) => handleSliderChange(value)}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
          )}
          {...props}
        >
          <SliderPrimitive.Track className="h-[11px] w-full grow overflow-hidden rounded-[10px] bg-white">
            <SliderPrimitive.Range className="h-full bg-flourescentYellow" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-8 w-8 rounded-full border-none border-primary bg-flourescentYellow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            <Image
              className="group-hover:bg-flourescent-yellow h-full w-full cursor-pointer rounded-full bg-flourescentYellow p-0.5"
              width={0}
              height={0}
              src={rightArrow}
              alt=""
            />
          </SliderPrimitive.Thumb>
        </SliderPrimitive.Root>
      </div>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
