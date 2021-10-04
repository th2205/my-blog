import style from "./PostLayout.module.scss";

interface PostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
  return <div className={style.postContainer}>{children}</div>;
}
