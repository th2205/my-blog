import { ReactNode } from "react";
import cn from "classnames";
import { Size } from "../types";
import style from "./Box.module.scss";

interface BoxProps {
  children: ReactNode;
  mb?: Size;
  mt?: Size;
}
export default function Box({ children, mb, mt }: BoxProps) {
  const classes = cn({
    [style[`ui-box-mb--${mb}`]]: mb,
    [style[`ui-box-mt--${mt}`]]: mt,
  });

  return <div className={classes}>{children}</div>;
}
