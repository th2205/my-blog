import { ReactNode } from "react";

export const revalidate = 3600;

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>;
}
