import { ReactNode } from "react";
import cn from "classnames";
import { Theme } from "../types";
import style from "./Heading.module.scss";

interface HeadingProps {
  theme?: Theme;
  as: string;
  children: ReactNode;
}

export default function Heading({
  as,
  children,
  theme = "primary",
}: HeadingProps) {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;
  const classes = cn(
    style["ui-heading"],
    style[`ui-heading-theme--${theme}`],
    style[`ui-heading-as--${as}`]
  );

  return <CustomTag className={classes}>{children}</CustomTag>;
}
