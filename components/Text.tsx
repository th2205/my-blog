import { ReactNode } from "react";
import cn from "classnames";

interface TextProps {
  children: ReactNode;
  color?: string;
}

export default function Text({ children, color }: TextProps) {
  const classes = cn(`text--${color}`);

  return <p className={classes}>{children}</p>;
}
