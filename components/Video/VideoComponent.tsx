import Video from "next-video";
import { useState } from "react";

export default function VideoComponent({ video }: { video: any }) {
  const [isPaused, setIsPaused] = useState(false);
  console.log(isPaused);

  return (
    <div className="h-full" onClick={() => setIsPaused(!isPaused)}>
      <Video
        minResolution="1080p"
        loop={true}
        autoPlay={true}
        controls={true}
        className="h-full"
        src={video}
      />
    </div>
  );
}
