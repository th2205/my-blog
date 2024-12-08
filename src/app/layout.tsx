import { ReactNode } from "react";
import { Header } from "../components/Header";
import "@/styles/globals.css";

export const revalidate = 3600;

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="h-[100vh] max-w-[1200px] m-auto">
        <Header />
        <main className="px-4">{children}</main>
      </body>
    </html>
  );
}
