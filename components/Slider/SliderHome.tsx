"use client";

import Carousel from "nuka-carousel";
import {  CardsHome, MobileCardsHome } from "./cards";
import {
  renderCenterLeftControls,
  renderCenterRightControls,
} from "./controls";
import { neueXThin } from "@/styles/fonts";
import { useEffect, useState } from "react";

const SliderHome = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className="flex max-w-fit flex-col gap-8 lg:hidden lg:gap-12">
      <h4
        className={`${neueXThin.className} text-2xl lg:text-5xl xl:text-6xl leading-none lg:px-12`}
      >
        Innovación en acción: <br /> nuestro trabajo más reciente.
      </h4>
      <div className="hidden lg:block">
        <div className="flex items-center justify-center gap-5 lg:px-12">
          <Carousel
            frameAriaLabel="Carousel Demo"
            slideIndex={0}
            wrapAround={true}
            slidesToShow={2}
            autoplay={false}
            cellSpacing={24}
            withoutControls={true}
          >
            {CardsHome}
          </Carousel>
        </div>
      </div>
      <div className="block lg:hidden lg:w-full">
        <div className="flex w-full items-center justify-center gap-5 lg:px-12">
          <Carousel
            defaultControlsConfig={{
              containerClassName: "absolute top-5 w-full",
              pagingDotsContainerClassName: "gap-[10px] spacing-dots",
              pagingDotsClassName: "w-full  bg-white rounded-md",
              pagingDotsStyle: { background: "#FFFFFF", borderRadius: "10px" },
            }}
            frameAriaLabel="Carousel Demo 2"
            slideIndex={0}
            wrapAround={true}
            slidesToShow={1}
            autoplay={false}
            cellSpacing={12}
            autoplayInterval={2000}
            withoutControls={false}
            tabbed={true}
            renderCenterLeftControls={renderCenterLeftControls}
            renderCenterRightControls={renderCenterRightControls}
          >
            {MobileCardsHome}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
