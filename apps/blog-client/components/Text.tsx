import { ReactNode } from "react";
import cn from "classnames";
import { Size, Theme } from "../types";
import style from "./Text.module.scss";

interface TextProps {
  children: ReactNode;
  theme?: Theme;
  as?: "span" | "p";
  underline?: boolean;
  size?: Size;
}

export default function Text({
  children,
  theme = "primary",
  as = "p",
  underline = false,
  size = "m",
}: TextProps) {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;
  const classes = cn(
    style["ui-text"],
    style[`ui-text-theme--${theme}`],
    style[`ui-text-size--${size}`],
    {
      [style["ui-text-underline"]]: underline,
    }
  );

  return <CustomTag className={classes}>{children}</CustomTag>;
}
