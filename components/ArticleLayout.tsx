import style from "./ArticleLayout.module.scss";

type Articlelayout = {
  children: React.ReactNode;
};

export default function Articlelayout({ children }) {
  return <div className={style.container}>{children}</div>;
}
