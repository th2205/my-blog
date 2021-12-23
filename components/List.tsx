import { ReactNode } from "react";
import CustomTag from "./CustomTag";

interface ListProps {
  as: "ol" | "ul";
  children: ReactNode;
}

export default function List({ children, as }: ListProps) {
  return;
  //   <CustomTag  as={as} >{children}</CustomTag>
}
