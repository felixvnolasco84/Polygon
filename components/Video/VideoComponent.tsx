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
      minResolution="720p"
      maxResolution="720p"      
      accentColor="edff00"
      loop={ hasloop ? hasloop : true }
      autoPlay={ hasautoPlay ? hasautoPlay : true}
      muted={true}
      className={`absolute h-full w-full ${className}`}
      controls={ false }
      src={video}
    />
  );
}
