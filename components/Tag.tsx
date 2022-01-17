import style from "./Tag.module.scss";
import cn from "classnames";
import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export default function Tag({ children }: TagProps) {
  const layoutClasses = cn(style["ui-tag-layout"]);

  return <div className={layoutClasses}>{children}</div>;
}
