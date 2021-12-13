import { ReactNode } from "react";
import cn from "classnames";
import style from "./Section.module.scss";
import { Size } from "../types";

interface SectionProps {
  children: ReactNode;
  size?: Size;
}

export default function Section({ children, size = "m" }: SectionProps) {
  const classes = cn(style["ui-section"], {
    [style[`ui-section-size--${size}`]]: size,
  });

  return <section className={classes}>{children}</section>;
}
