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

  return (
    <div
      className={`flex ${
        type == "talent"
          ? "bg-transparent flex-col-reverse gap-8"
          : "flex-col bg-black-600 pb-12 pt-0 lg:pb-48 lg:pt-24 px-4"
      } lg:px-12 xl:px-24`}
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
      <AnimatePresence >
        <motion.div
          key={activeIndex}
          className="flex h-fit text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1}}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 , ease: "easeInOut"}}
          layout
        >
          <div className="w-full opacity-100 transition-opacity duration-500">
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
    </div>
  );
};

export default SliderComponent;
