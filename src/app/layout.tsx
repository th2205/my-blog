import { ReactNode } from "react";
import { Header } from "../components/Header";
import "global.css";

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
        <main className="px-4 py-4">{children}</main>
      </body>
    </html>
  );
}
