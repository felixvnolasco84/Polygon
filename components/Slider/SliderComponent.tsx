"use client";

import React, { useState } from "react";
import { neueThin, neueXThin } from "@/styles/fonts";
import { motion, AnimatePresence } from "framer-motion";

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

    const handleDragEnd = (event: any, info: any) => {
      if (info.offset.x > 50) {
        setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
      } else if (info.offset.x < -50) {
        setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
      }
    };

  return (
    <div
      className={`flex ${
        type == "talent"
          ? "bg-transparent flex-col gap-10"
          : "flex-col bg-black-600 pb-12 pt-0 lg:pb-48 lg:pt-24 px-4"
      } lg:px-12 xl:px-24`}
    >
      <AnimatePresence>
        <motion.div
          key={activeIndex ? activeIndex : "empty"}
          className="flex text-white"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          // transition={{ duration: 0.5, ease: "easeInOut" }}
          drag="x"
          onDragEnd={handleDragEnd}
        >
          <div className="h-32 w-full opacity-100 transition-opacity duration-500">
            {features[activeIndex]?.title && (
              <p
                className={`${neueThin.className} text-xl lg:text-4xl lg:leading-none`}
              >
                {features[activeIndex].title}
              </p>
            )}

            <p
              className={`${neueXThin.className} text-lg lg:text-2xl xl:text-4xl xl:leading-[60px]`}
            >
              {features[activeIndex].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <ul className="flex w-full justify-center space-x-2">
        {features.map((_, index) => (
          <li
            key={index}
            className={`w-full h-1 rounded-full cursor-pointer ${
              index === activeIndex ? "bg-white" : "bg-gray-600"
            }`}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default SliderComponent;
