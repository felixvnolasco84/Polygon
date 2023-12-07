"use client";

import React, { useState } from "react";
import Carousel from "nuka-carousel";
import { Cards, MobileCards } from "./cards";

const Slider = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-5 px-24">
        {/* <div className="flex h-[520px] items-center">
        <button onClick={prevItem} className="h-fit rounded-full bg-white p-2">
          <Image src={leftArrow} alt="" />
        </button>
      </div> */}
        {/* 
      <div className="flex space-x-4 overflow-hidden">
        {items
          .slice(currentIndex, currentIndex + 2)
          .map((item: any, index: any) => (
            <div key={index} className="flex w-1/2 flex-col gap-5">
              <AnimatePresence>
                <div className="h-[520px] rounded-lg">
                  <motion.img
                    className="h-full w-full bg-center object-cover object-center"
                    key={index}
                    src={items[index].image}
                    layout={"preserve-aspect"}
                    loading="lazy"                    
                    animate="visible"
                  />
                </div>
              </AnimatePresence>
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
      </div> */}

        <Carousel
          className="hidden xl:block"
          frameAriaLabel="Carousel Demo"
          slideIndex={0}
          wrapAround={true}
          slidesToShow={2}
          autoplay={true}
          cellSpacing={24}
          autoplayInterval={2000}
          withoutControls={true}
        >
          {Cards}
        </Carousel>
      </div>

      <div className="w-screen">
        <div className="flex w-full items-center justify-center gap-5 px-4">
          <Carousel
            className="block xl:hidden"
            frameAriaLabel="Carousel Demo 2"
            slideIndex={0}
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            autoplayInterval={2000}
            withoutControls={true}
          >
            {MobileCards}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Slider;
