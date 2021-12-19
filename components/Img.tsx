import Image from "next/image";

interface ImgProps {
  src: string;
  alt: string;
}

export default function Img({ src, alt }: ImgProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="contain"
    />
  );
}
