import { ReactNode } from "react";
import cn from "classnames";
import { Theme } from "../types";
import style from "./Code.module.scss";

interface CodeProps {
  children: ReactNode;
  theme?: Theme;
}

export default function Code({ children, theme = "primary" }: CodeProps) {
  const classes = cn(style["ui-code"], style[`ui-code-theme--${theme}`]);

  return <code className={classes}>{children}</code>;
}
