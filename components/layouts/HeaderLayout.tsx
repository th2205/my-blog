import { ReactNode } from "react";
import cn from "classnames";
import style from "./HeaderLayout.module.scss";

interface HeaderLayoutProps {
  children: ReactNode;
}

export default function HeaderLayout({ children }: HeaderLayoutProps) {
  const classes = cn(style["ui-header-layout"]);

  return (
    <header className={classes}>
      <div className={style["ui-header-container"]}>{children}</div>
    </header>
  );
}
