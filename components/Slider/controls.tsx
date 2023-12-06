import React from "react";
import clsx from "clsx";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";

export const renderCenterLeftControls = ({
  previousDisabled,
  previousSlide,
}: any) => (
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
    <ChevronRightCircleIcon size={32} />
  </button>
);
