import Video from "next-video";
import { ReactPlayerAsVideo } from "@/components/Video/VideoPlayerComponent";

export default function VideoComponent({ video }: { video: any }) {
  return (
    <Video      
      as={ReactPlayerAsVideo}                  
      className="absolute h-full w-full"
      controls={false}
      src={video}     
    />
  );
}
