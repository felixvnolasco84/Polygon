import Video from "next-video";
import { MobileReactPlayerAsVideo } from "./MobileReactPlayerAsVideo";

export default function MobileVideoComponent({
  video,
  className,
}: {
  video: any;
  className?: string;
}) {
  return (
    <Video
      as={MobileReactPlayerAsVideo }
      className={`absolute h-full w-full ${className}`}
      controls={false}
      src={video}
    />
  );
}
