import Video from "next-video";
import { MobileReactPlayerAsVideo } from "./MobileReactPlayerAsVideo";
import { ReactPlayerAsVideo } from "./VideoPlayerComponent";

export default function MobileVideoComponent({
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
