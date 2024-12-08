import React, { ReactNode } from "react";

export const revalidate = 3600;

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
