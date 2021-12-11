import { ReactNode } from "react";
import cn from "classnames";
import style from "./Text.module.scss";

type Themes = "default";
interface TextProps {
  children: ReactNode;
  theme?: Themes;
}

export default function Text({ children, theme = "default" }: TextProps) {
  const classes = cn(style["ui-text"], style[`ui-text-theme--${theme}`]);

  return <p className={classes}>{children}</p>;
}
