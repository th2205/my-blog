import { ReactNode } from "react";
import { Header } from "../components/Header";
import "global.css";

export const revalidate = 3600;

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
