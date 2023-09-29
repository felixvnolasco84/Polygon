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
  const [sliderValue, setSliderValue] = useState<number[]>([0]);
  const handleSliderChange = (value: number[]) => {    
    const newValue = value;    
    if (newValue[0] >= (props.min || 0) && newValue[0] <= (props.max || 0)) {
      setSliderValue(newValue);
    }
  };
  return (
    <div className="flex flex-col gap-12 w-1/2">
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
        <SliderPrimitive.Track className="relative h-[11px] w-full grow overflow-hidden rounded-[10px] bg-white">
          <SliderPrimitive.Range className="absolute h-full bg-flourescentYellow" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-8 w-8 rounded-full border-none border-primary bg-flourescentYellow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <Image
            className="p-0.5 w-full h-full bg-flourescentYellow group-hover:bg-flourescent-yellow cursor-pointer rounded-full"
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
