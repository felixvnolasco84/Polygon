import { cn } from "@/lib/utils";
import Video from "next-video";

type VideoComponentProps = {
  video: any;
  className?: string;
};

export default function VideoComponent({
  video,
  className,
}: VideoComponentProps) {
  return (
    <Video
      minResolution="1080p"
      maxResolution="1080p"
      accentColor="ffffff"
      loop={true}
      autoPlay={true}
      muted={true}
      className={cn(
        "absolute h-full w-full ${className} rounded-md shadow-sm overflow-hidden border-none z-0",
        className
      )}
      controls={false}
      src={video}
      preload="true"
    />
  );
}
