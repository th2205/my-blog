import { ReactNode } from "react";
import cn from "classnames";
import style from "./Box.module.scss";

interface BoxProps {
  children: ReactNode;
}
export default function Box({ children }: BoxProps) {
  const classes = cn();

  return <div className={classes}>{children}</div>;
}
