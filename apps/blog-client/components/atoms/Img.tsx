import Image from "next/image";
import cn from "classnames";
import styled from "@emotion/styled";

interface ImgProps {
  src: string;
  alt: string;
}

export default function Img({ src, alt }: ImgProps) {
  //   return (
  //     <div className={classes}>
  //       <Image
  //         src={src}
  //         alt={alt}
  //         // width="100%"
  //         // height="100%"
  //         // layout="responsive"
  //         layout="fill"
  //         // objectFit="contain"
  //         //
  //       />
  //     </div>
  //   );

  return <CustomImg src={src} alt={alt} />;
}

const CustomImg = styled.img`
  width: 100%;
`;
