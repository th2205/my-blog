import { ReactNode } from "react";
import style from "./Flex.module.scss";
import cn from "classnames";
import { Theme } from "../types";

interface FlexProps {
  children: ReactNode;
  theme?: Theme;
}

export default function Flex({ children, theme = "primary" }: FlexProps) {
  const classes = cn(style["ui-flex"], style[`ui-flex-theme--${theme}`]);

  return <div className={classes}>{children}</div>;
}
