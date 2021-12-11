import { ReactNode } from "react";
import style from "./ResumeLayout.module.scss";

interface ResumeLayoutProps {
  children: ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return <div className={style.container}>{children}</div>;
}
