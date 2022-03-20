import { ReactNode } from "react";
import style from "./PlainHeader.module.scss";
import cn from "classnames";
import { Size } from "../types";

interface HeaderProps {
  children: ReactNode;
  size?: Size;
}

export default function Header({ children, size }: HeaderProps) {
  const classes = cn({ [style[`ui-header-size--${size}`]]: size });

  return <header className={classes}>{children}</header>;
}
