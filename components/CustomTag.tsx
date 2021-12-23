import { ReactNode } from "react";

interface CustomTagProps {
  as: HTMLElementTagNameMap;
  className: string;
  children: ReactNode;
}

export default function CustomTag({ children, as, className }: CustomTagProps) {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;

  return <CustomTag className={className}>{children}</CustomTag>;
}
