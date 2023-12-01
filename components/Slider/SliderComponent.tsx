"use client";

import React, { useState } from "react";
import { services } from "../Grid/GridServices";
import { neueThin, neueXThin } from "@/styles/fonts";

interface Feature {
  title?: string;
  description: string;
}

interface SliderProps {
  features: Feature[];
}

const SliderComponent = () => {
  // const SliderComponent: React.FC<SliderProps> = ({ features }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const service = services[3];  

  return (
    <div className="flex flex-col bg-black-600 px-4 pb-48 pt-24 lg:px-24">
      <div className="flex w-full justify-center space-x-2 py-4">
        {service.features.map((_, index) => (
          <span
            key={index}
            className={`w-1/4 h-1 rounded-full cursor-pointer ${
              index === activeIndex ? "bg-white" : "bg-gray-600"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className="flex h-36 text-white">
        <div className="w-full pt-12 opacity-100 transition-opacity duration-500">
          {service.features[activeIndex]?.title && (
            <p
              className={`${neueThin.className} text-xl lg:text-4xl leading-none`}
            >
              {service.features[activeIndex].title}
            </p>
          )}

          <p className={`${neueXThin.className} lg:text-4xl lg:leading-[60px]`}>
            {service.features[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
