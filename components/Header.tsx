import Head from "next/head";
import { AiFillGithub } from "react-icons/ai";
import style from "./Header.module.scss";

type HeaderProps = {
  id?: string;
};

export default function Header({ id }: HeaderProps) {
  return (
    <>
      <Head>
        <title>{id || "TaeHyeon"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.headerContainer}>
        <h1 className={style.headerTitle}>TaeHyeon</h1>
        <div className={style.navContiner}>
          <div>
            <AiFillGithub size={30} />
          </div>
        </div>
      </div>
    </>
  );
}
