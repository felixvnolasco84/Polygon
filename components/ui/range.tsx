import * as React from "react";

import { cn } from "@/lib/utils";
import { neueThin } from "@/styles/fonts";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Range = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
      const [sliderValue, setSliderValue] = React.useState<string>("45000");      
      const handleSliderChange = (value: string) => {
        const newValue = value;                
          setSliderValue(newValue);                  
      };
    return (
      <div className="lg: flex w-3/4 flex-col gap-8 lg:w-1/2 lg:gap-12">
        <p
          className={`${neueThin.className} text-center leading-none text-xl lg:text-[40px]`}
        >
          ${sliderValue} - ${props.max}
        </p>
        <input
          type="range"                    
          defaultValue={sliderValue}
          onInput={(e:any) => handleSliderChange(e.target.value)} // Use the handleSliderChange function here
          className={cn(
            "flex h-10 w-full border-b border-gray px-3 py-2 text-2xl file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-flourescentYellow",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Range.displayName = "Range";

export { Range };
