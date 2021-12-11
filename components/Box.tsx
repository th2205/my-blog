import { ReactNode } from "react";
import cn from "classnames";
import style from "./Box.module.scss";

type Sizes = "s" | "m" | "l";

interface BoxProps {
  children: ReactNode;
  size?: Sizes;
}

export default function Box({ children, size = "m" }: BoxProps) {
  const classes = cn(style[`ui-box--${size}`]);

  return <div className={classes}>{children}</div>;
}
