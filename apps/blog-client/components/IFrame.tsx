import style from "./IFrame.module.scss";

interface IFrameProps {
  src: string;
}

export default function IFrame({ src }: IFrameProps) {
  return (
    <iframe
      className={style["ui-iframe"]}
      src={src}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}
