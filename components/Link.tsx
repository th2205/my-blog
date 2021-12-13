import { ReactNode } from "react";
import Link from "next/link";
import cn from "classnames";
import style from "./Link.module.scss";
import { Theme } from "../types";

interface LinkProps {
  children: ReactNode;
  targetBlank?: boolean;
  href: string;
  theme?: Theme;
}

export default function CustomLink({
  children,
  targetBlank = false,
  href,
  theme = "primary",
}: LinkProps) {
  const classes = cn(style["ui-link"], style[`ui-link-theme--${theme}`]);

  return targetBlank ? (
    <a target="_blank" href={href} className={classes}>
      {children}
    </a>
  ) : (
    <Link href={href}>
      <a className={classes}>{children}</a>
    </Link>
  );
}
