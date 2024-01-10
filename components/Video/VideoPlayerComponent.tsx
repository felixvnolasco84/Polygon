import { useState } from "react";
import ReactPlayer from "react-player";

export function ReactPlayerAsVideo(props: any) {
  const [isPlaying, setisPlaying] = useState(true);

  let { asset, src, poster, blurDataURL, ...rest } = props;
  let config = { file: { attributes: { poster } } };

  return (
    <div className="h-full w-full" onClick={() => setisPlaying(!isPlaying)}>
      <ReactPlayer
        playing={isPlaying}
        playsinline={true}
        loop={true}
        muted={true}
        url={src}
        config={config}
        // ref={videoEl}
        {...rest}
      />
    </div>
  );
}
