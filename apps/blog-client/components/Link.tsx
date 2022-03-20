import { ReactNode } from "react";
import Link from "next/link";
import cn from "classnames";
import { Theme } from "../types";
import style from "./Link.module.scss";

interface LinkProps {
  children: ReactNode;
  targetBlank?: boolean;
  href: string;
  theme?: Theme;
  underline?: boolean;
  br?: boolean;
}

export default function CustomLink({
  children,
  targetBlank = false,
  href,
  theme = "primary",
  underline = true,
  br = false,
}: LinkProps) {
  const classes = cn(
    style["ui-link"],
    style[`ui-link-theme--${theme}`],
    style[`ui-link-underline--${underline}`]
  );

  return targetBlank ? (
    <>
      <a target="_blank" href={href} className={classes}>
        {children}
      </a>
      {br && <br />}
    </>
  ) : (
    <>
      <Link href={href}>
        <a className={classes}>{children}</a>
      </Link>
      {br && <br />}
    </>
  );
}
