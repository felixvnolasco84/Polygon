"use client";

import React, { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { neueThin } from "@/styles/fonts";
import rightArrow from "@/public/images/rightArrow.svg";
import Image from "next/image";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>((props, ref) => {
  const [sliderValue, setSliderValue] = useState<number[]>([45000]);
  const handleSliderChange = (value: number[]) => {
    const newValue = value;
    console.log(newValue);
    if (newValue[0] >= (props.min || 0) && newValue[0] <= (props.max || 0)) {
      setSliderValue(newValue);
    }
  };
  return (
    <div className="flex w-1/2 flex-col gap-12">
      <p
        className={`${neueThin.className} text-center leading-none text-[40px]`}
      >
        ${sliderValue} - ${props.max}
      </p>
      <SliderPrimitive.Root
        ref={ref}
        onValueChange={(value) => handleSliderChange(value)} // Use the handleSliderChange function here
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          props.className
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
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
