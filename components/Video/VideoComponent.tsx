import Video from "next-video";

export default function VideoComponent({
  video,
  hasloop = false,
  hasautoPlay = false,
  hascontrols = null,
  className,
}: {
  video: any;
  hasloop?: boolean;
  hasautoPlay?: boolean;
  hascontrols?: any;
  className?: string;
}) {
  return (
    <Video
      minResolution="1080p"
      maxResolution="1440p"
      accentColor="ffffff"
      loop={hasloop ? hasloop : true}
      autoPlay={hasautoPlay ? hasautoPlay : true}
      muted={true}
      className={`absolute h-full w-full ${className} rounded-md shadow-sm overflow-hidden border-none z-0`}
      controls={false}
      src={video}
      
      preload="true"
    />
  );
}
