"use client"

import Video from "next-video";

export default function VideoComponent({ video }: { video: any }) {
  return <Video src={video} />;
}
