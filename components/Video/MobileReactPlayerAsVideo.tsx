import { neueXThin } from "@/styles/fonts";
import { useState } from "react";
import ReactPlayer from "react-player";

export function MobileReactPlayerAsVideo(props: any) {
  const [isPlaying, setisPlaying] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  let { src, ...rest } = props;

  return (
    <div
      className="h-full max-h-[1200px] w-full"
      onClick={() => setisPlaying(!isPlaying)}
    >      
      {!isLoading && (
        <div className="absolute h-full w-full animate-pulse bg-gray-400">
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 transform">
            <svg
              className="h-12 w-12 animate-spin text-[#edff00]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
            <p className={`${neueXThin.className} mt-2 text-sm text-black-400`}>
              Cargando...
            </p>
          </div>
        </div>
      )}
      <ReactPlayer
        onReady={() => setisLoading(true)}
        playing={isPlaying}
        playsinline={true}
        loop={true}
        muted={true}
        url={src}
        // ref={videoEl}
        {...rest}
      />
    </div>
  );
}
