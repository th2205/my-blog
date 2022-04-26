import { ReactNode } from "react";
import { Size } from "@/types";

interface HeaderProps {
  children: ReactNode;
  size?: Size;
}

export default function Header({ children, size }: HeaderProps) {
  return <header>{children}</header>;
}
