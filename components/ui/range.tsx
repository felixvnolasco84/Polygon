import { cn } from "@/lib/utils";
import { neueThin } from "@/styles/fonts";
import { forwardRef, useState } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Range = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [sliderValue, setSliderValue] = useState<string>("100000");

    const handleSliderChange = (value: string) => {
      const newValue = value;
      setSliderValue(newValue);
    };

    function formatCurrency(value: number, currency: string): string {
      return new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    }

    return (
      <div className="lg: flex w-3/4 flex-col gap-8 lg:w-1/2 lg:gap-12">
        <div className="flex items-center justify-center gap-1">
          <p
            className={`${neueThin.className} text-center xl:leading-none text-xl lg:text-3xl xl:text-[40px]`}
          >
            ${formatCurrency(Number(sliderValue), "MXN")}
          </p>
          <span>MXN</span>

          <p
            className={`${neueThin.className} text-center xl:leading-none text-xl lg:text-3xl xl:text-[40px]`}
          >
            - ${formatCurrency(Number(props.max), "MXN")}
          </p>
          <span>MXN</span>
        </div>
        <input
          type="range"
          onInput={(e: any) => handleSliderChange(e.target.value)} // Use the handleSliderChange function here
          className={cn(
            "range-slider flex h-10 w-full border-b border-gray px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-flourescentYellow",
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
