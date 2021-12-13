import { ReactNode } from "react";
import cn from "classnames";
import style from "./Text.module.scss";
import { Theme } from "../types";

interface TextProps {
  children: ReactNode;
  theme?: Theme;
  as?: "span" | "p";
  underline?: boolean;
}

export default function Text({
  children,
  theme = "primary",
  as = "p",
  underline = false,
}: TextProps) {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;
  const classes = cn(style["ui-text"], style[`ui-text-theme--${theme}`], {
    [style["ui-text-underline"]]: underline,
  });

  return <CustomTag className={classes}>{children}</CustomTag>;
}
