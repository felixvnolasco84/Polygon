
import { cn } from "@/lib/utils";
import Video from "next-video";

type VideoComponentProps = {
  video: any;
  className?: string;
  poster?: string;
};

export default function VideoComponent({
  video,
  className,
  poster,
}: VideoComponentProps) {
  return (
    <Video
    
      minResolution="1080p"
      maxResolution="1080p"
      loop={true}
      autoPlay={true}
      muted={true}
      className={cn(
        "absolute h-full w-full ${className} rounded-md shadow-sm overflow-hidden border-none z-0 bg-transparent",
        className
      )}
      controls={false}
      poster={poster}
      src={video}
      preload="true"
    ></Video>
  );
}
