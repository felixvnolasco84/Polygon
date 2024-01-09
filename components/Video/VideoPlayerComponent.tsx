import ReactPlayer from "react-player";

export function ReactPlayerAsVideo(props: any) {
  let { asset, src, poster, blurDataURL, ...rest } = props;
  let config = { file: { attributes: { poster } } };

  return <ReactPlayer url={src} {...rest} />;
}
