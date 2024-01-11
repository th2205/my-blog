import { ReactNode } from "react";

export const revalidate = 3600;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-[100%] px-3 flex align-center justify-center">
      {children}
    </div>
  );
}
