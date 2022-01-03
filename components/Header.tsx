import Head from "next/head";
import { AiFillGithub } from "react-icons/ai";
import Heading from "./Heading";
import Link from "./Link";
import style from "./Header.module.scss";

type HeaderProps = {
  id?: string;
};

export default function Header({ id }: HeaderProps) {
  const title = "TaeHyeon";

  return (
    <>
      <Head>
        <title>{id || title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={style["ui-header-layout"]}>
        <div className={style["ui-header-container"]}>
          <Link href="/" underline={false}>
            <Heading as="h2" weight="s">
              {title}
            </Heading>
          </Link>
          <div className={style["ui-icon-group"]}>
            <Link href="https://github.com/th2205" targetBlank theme="tertiary">
              <AiFillGithub size={30} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
