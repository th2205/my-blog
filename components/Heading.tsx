import { ReactNode } from "react";
import cn from "classnames";
import { Theme, Size } from "@/types";
import style from "./Heading.module.scss";

interface HeadingProps {
  theme?: Theme;
  as: string;
  children: ReactNode;
  weight?: Size;
}

export default function Heading({
  as,
  children,
  theme = "primary",
  weight,
}: HeadingProps) {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;
  const classes = cn(
    style["ui-heading"],
    style[`ui-heading-theme--${theme}`],
    style[`ui-heading-as--${as}`],
    {
      [style[`ui-heading-weight--${weight}`]]: weight,
    }
  );

  return <CustomTag className={classes}>{children}</CustomTag>;
}
