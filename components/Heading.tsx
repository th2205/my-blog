import { ReactNode } from "react";
import style from "./Heading.module.scss";

interface HeadingProps {
  theme?: "resume" | "normal";
  as: string;
  children: ReactNode;
}

export default function Heading({
  as,
  children,
  theme = "normal",
}: HeadingProps) {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;

  return (
    <CustomTag className={`${style[theme]} ${style[as]}`}>{children}</CustomTag>
  );
}
