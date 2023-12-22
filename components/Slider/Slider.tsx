"use client";

import React, { useState } from "react";
import Carousel, { PagingDots } from "nuka-carousel";
import { Cards, MobileCards } from "./cards";
import {
  renderCenterLeftControls,
  renderCenterRightControls,
} from "./controls";

const Slider = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-5 px-24">
        <Carousel
          className="hidden xl:block"
          frameAriaLabel="Carousel Demo"
          slideIndex={0}
          wrapAround={true}
          slidesToShow={2}
          autoplay={false}
          cellSpacing={24}
          autoplayInterval={2000}
          withoutControls={true}
        >
          {Cards}
        </Carousel>
      </div>
      <div className="w-screen lg:w-full">
        <div className="flex w-full items-center justify-center gap-5 px-4 lg:px-12 xl:px-4">
          <Carousel
            defaultControlsConfig={{
              containerClassName: "absolute top-5 w-full",
              pagingDotsContainerClassName: "gap-[10px] spacing-dots",
              pagingDotsClassName: "w-full px-4 bg-white rounded-md",
              pagingDotsStyle: { background: "#FFFFFF", borderRadius: "10px" },
            }}
            className="block xl:hidden"
            frameAriaLabel="Carousel Demo 2"
            slideIndex={0}
            wrapAround={true}
            slidesToShow={1}
            autoplay={false}
            autoplayInterval={2000}
            withoutControls={false}
            tabbed={true}
            renderCenterLeftControls={renderCenterLeftControls}
            renderCenterRightControls={renderCenterRightControls}
          >
            {MobileCards}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Slider;
