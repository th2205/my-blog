import Image from "next/image";
import cn from "classnames";
import style from "./Img.module.scss";

interface ImgProps {
  src: string;
  alt: string;
}

export default function Img({ src, alt }: ImgProps) {
  const classes = cn(style["ui-image"]);

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

  return <img className={classes} src={src} alt={alt} />;
}
