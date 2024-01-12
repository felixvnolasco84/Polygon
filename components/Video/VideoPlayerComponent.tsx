import { neueXThin } from "@/styles/fonts";
import { useState } from "react";
import ReactPlayer from "react-player";

export function ReactPlayerAsVideo(props: any) {
  const [isLoading, setisLoading] = useState(false);

  let { src, ...rest } = props;

  return (
    <div className="relative h-full w-full">
      {/* {true && ( */}
      {true && (
        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-5">
          <svg
            className="h-full w-full animate-spin text-[#edff00]"
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
      )}
      <ReactPlayer
        onReady={() => setisLoading(true)}
        playing={true}
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
