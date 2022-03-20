import { ReactNode } from "react";

type Element = keyof JSX.IntrinsicElements;
interface CustomTagProps {
  as: Element;
  className?: string;
  children: ReactNode;
}

export default function CustomTag({ children, as, className }: CustomTagProps) {
  const CustomTag = `${as}` as Element;

  return <CustomTag className={className}>{children}</CustomTag>;
}
