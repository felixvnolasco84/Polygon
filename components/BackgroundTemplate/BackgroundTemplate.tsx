"use client";

import Video from "next-video";
import { ReactPlayerAsVideo } from "@/components/Video/VideoPlayerComponent";
import Image from "next/image";

export default function BackgroundTemplate({
  backgroundVideo,
  backgroundImageDesktop,
  backgroundImageMobile,
  children,
}: {
  backgroundVideo: string;
  backgroundImageDesktop: string;
  backgroundImageMobile: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="absolute h-full">
      {backgroundVideo && (
        <Video
          minResolution="1080p"
          as={ReactPlayerAsVideo}
          controls={false}
          className="h-full w-full object-cover object-center"
          src={backgroundVideo}
        />
      )}

      {backgroundImageDesktop && (
        <Image
          className="hidden h-full w-full object-cover object-center md:block"
          alt=""
          src={backgroundImageDesktop}
        />
      )}

      {backgroundImageMobile && (
        <Image
          className="block h-full w-full object-cover object-center md:hidden"
          alt=""
          src={backgroundImageDesktop}
        />
      )}
    </div>
  );
}
