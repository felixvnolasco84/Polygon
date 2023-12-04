"use client";

import React, { useState } from "react";
import { neueThin, neueXThin } from "@/styles/fonts";

interface Feature {
  title?: string;
  description: string;
}

interface SliderProps {
  features: Feature[];
  type?: string;
}

const SliderComponent: React.FC<SliderProps> = ({ features, type }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };  

  return (
    <div
      className={`flex ${(type = "talent"
        ? "bg-transparent flex-col-reverse gap-12"
        : "flex-col bg-black-600 pb-48 pt-24 px-4")}    lg:px-24`}
    >
      <div className="flex w-full justify-center space-x-2 py-4">
        {features.map((_, index) => (
          <span
            key={index}
            className={`w-full h-1 rounded-full cursor-pointer ${
              index === activeIndex ? "bg-white" : "bg-gray-600"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className="flex h-36 text-white">
        <div className="w-full pt-12 opacity-100 transition-opacity duration-500">
          {features[activeIndex]?.title && (
            <p
              className={`${neueThin.className} text-xl lg:text-4xl leading-none`}
            >
              {features[activeIndex].title}
            </p>
          )}

          <p className={`${neueXThin.className} lg:text-4xl lg:leading-[60px]`}>
            {features[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
