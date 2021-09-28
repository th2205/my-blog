import style from "./Header.module.scss";

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <h1 className={style.headerTitle}>TaeHyeon</h1>
      <div className={style.navContiner}>
        <div>Dark mode</div>
        <div>글</div>
      </div>
    </div>
  );
}
