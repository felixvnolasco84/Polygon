import Video from "next-video";

export default function VideoComponent({
  video,
  className,
}: {
  video: any;
  className?: string;
}) {
  return (
    <Video
      minResolution="1080p"
      accentColor="edff00"
      loop={true}
      autoPlay={true}
      muted={true}
      className={`absolute h-full w-full ${className}`}
      controls={false}
      src={video}
    />
  );
}
