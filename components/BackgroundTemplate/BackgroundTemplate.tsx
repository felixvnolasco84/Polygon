"use client";

import Image from "next/image";
import VideoComponent from "../Video/VideoComponent";

export default function BackgroundTemplate({
  backgroundVideo,
  backgroundImageDesktop,
  backgroundImageMobile,
}: {
  backgroundVideo: string;
  backgroundImageDesktop: string;
  backgroundImageMobile: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="absolute h-full w-full">
      {backgroundVideo && (
        <VideoComponent
          className="h-full w-full object-cover object-center"
          video={backgroundVideo}
        />
      )}

      {backgroundImageDesktop && (
        <Image
          className="hidden h-full w-full object-cover object-center md:block"
          alt=""
          src={backgroundImageDesktop}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
        />
      )}

      {backgroundImageMobile && (
        <Image
          className="block h-full w-full object-cover object-center md:hidden"
          alt=""
          src={backgroundImageDesktop}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
        />
      )}
    </div>
  );
}
