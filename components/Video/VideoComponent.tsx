import Video from "next-video";
import { ReactPlayerAsVideo } from "@/components/Video/VideoPlayerComponent";

export default function VideoComponent({
  video,
  className,
}: {
  video: any;
  className?: string;
}) {
  return (
    <Video      
      as={ReactPlayerAsVideo}
      className={`absolute h-full w-full ${className}`}
      controls={false}
      src={video}
    />
  );
}
