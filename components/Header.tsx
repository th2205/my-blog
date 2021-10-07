import Head from "next/head";
import Link from "next/link";
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
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-coy-without-shadows.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className={style.headerContainer}>
        <Link href="/">
          <h1 className={style.headerTitle}>TaeHyeon</h1>
        </Link>
        <div className={style.navContiner}>
          <div>
            <AiFillGithub size={30} />
          </div>
        </div>
      </div>
    </>
  );
}
