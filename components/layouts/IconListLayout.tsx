import { ReactNode } from "react";
import cn from "classnames";
import style from "./IconListLayout.module.scss";

interface IconListLayoutProps {
  children: ReactNode;
}

export default function IconListLayout({ children }: IconListLayoutProps) {
  const classes = cn(style[".ui-icon-layout"]);

  return <div className={classes}>{children}</div>;
}
