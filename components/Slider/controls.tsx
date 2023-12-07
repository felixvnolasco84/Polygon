import React from "react";
import clsx from "clsx";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";
import leftArrow from "@/public/images/leftArrow.svg";
import rightArrow from "@/public/images/rightArrow.svg";

export const renderCenterLeftControls = ({ previousDisabled, previousSlide }: any) => (
  <button
    className={clsx(
      "bg-transparent border-none",
      "cursor-pointer disabled:cursor-not-allowed",
      "appearance-none flex items-center m-3",
      "text-black opacity-70 hover:opacity-100 disabled:opacity-30"
    )}
    disabled={previousDisabled}
    onClick={previousSlide}
    aria-label="Go to previous slide"
  >
    {/* <img src={leftArrow} alt="" /> */}    
    <ChevronLeftCircleIcon size={32} />
  </button>
);

export const renderCenterRightControls = ({ nextDisabled, nextSlide }: any) => (
  <button
    className={clsx(
      "bg-transparent border-none",
      "cursor-pointer disabled:cursor-not-allowed",
      "appearance-none flex items-center m-3",
      "text-black opacity-70 hover:opacity-100 disabled:opacity-30"
    )}
    disabled={nextDisabled}
    onClick={nextSlide}
    aria-label="Go to next slide"
  >
    {/* <img src={rightArrow} alt="" /> */}
    <ChevronRightCircleIcon size={32} />
  </button>
);
