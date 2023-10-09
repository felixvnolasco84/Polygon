"use client";

import Image from "next/image";
import React, { useState } from "react";

import leftArrow from "@/public/images/leftArrow.svg";
import rightArrow from "@/public/images/rightArrow.svg";
import { neueThin, neueXThin } from "@/styles/fonts";

const Slider = ({ items }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex(currentIndex - 1 < 0 ? 0 : currentIndex - 1);
  };

  const nextItem = () => {
    setCurrentIndex(
      currentIndex + 1 >= items.length ? currentIndex : currentIndex + 1,
    );
  };

  return (
    <div className="flex items-start gap-5 px-24">
      <div className="flex items-center h-[520px]">
        <button onClick={prevItem} className="bg-white h-fit p-2 rounded-full">
          <Image src={leftArrow} alt="" />
        </button>
      </div>

      <div className="flex overflow-hidden space-x-4">
        {items
          .slice(currentIndex, currentIndex + 2)
          .map((item: any, index: any) => (
            <div key={index} className="flex flex-col gap-5 w-1/2">
              <div className="bg-white rounded-lg h-[520px]">
                {/* <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md"
              /> */}

                <div className="w-full h-48 object-cover rounded-md"></div>
              </div>
              <div className="flex flex-col gap-5">
                <h2
                  className={`${neueThin.className} leading-none  text-3xl text-black-500`}
                >
                  {item.title}
                </h2>
                <p
                  className={`${neueXThin.className} leading-[40px] text-2xl text-black-500`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="flex items-center h-[520px]">
        <button
          onClick={nextItem}
          className="bg-gray-200 h-fit p-2 rounded-full"
        >
          <Image src={rightArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
