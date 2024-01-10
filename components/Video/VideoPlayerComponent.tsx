import { useState } from "react";
import ReactPlayer from "react-player";

export function ReactPlayerAsVideo(props: any) {
  const [isPlaying, setisPlaying] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  let { asset, src, poster, blurDataURL, ...rest } = props;
  let config = { file: { attributes: { poster } } };

  return (
    <div className="h-full w-full" onClick={() => setisPlaying(!isPlaying)}>
      {true && (
      // {!isLoading && (
        <div className="absolute h-full w-full animate-pulse bg-gray-400"></div>
        // <img
        //   className="absolute h-full w-full object-cover object-center"
        //   src={blurDataURL}
        //   alt=""
        // />
      )}
      <ReactPlayer
        onReady={() => setisLoading(true)}
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
