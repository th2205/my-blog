import styled from "@emotion/styled";

interface IFrameProps {
  src: string;
}

export default function IFrame({ src }: IFrameProps) {
  return (
    <CustomIframe
      src={src}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></CustomIframe>
  );
}

const CustomIframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
`;
