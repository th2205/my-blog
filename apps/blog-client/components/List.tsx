import { ReactNode } from "react";

interface ListProps {
  as: "ol" | "ul";
  children: ReactNode;
}

export default function List({ children, as }: ListProps) {
  const isOl = as === "ol";

  return isOl ? <ol>{children}</ol> : <ul>{children}</ul>;
}
