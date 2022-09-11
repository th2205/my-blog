import Head from "next/head";
import { css } from "@emotion/react";
import Link from "@/components/Link";
import Title from "@/components/common/Title";
import NavItem from "@/components/common/NavItem";
import NavLayout from "@/components/common/NavLayout";

type HeaderProps = {
  id?: string;
  description?: string;
};

export default function Header({ id, description }: HeaderProps) {
  const title = "TaeHyeon.dev";

  return (
    <>
      <Head>
        <title>{id || title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description}></meta>
      </Head>
      <div css={headerContainer}>
        <div css={headerInnerContainer}>
          <Link href="/" underline={false}>
            <Title>{title}</Title>
          </Link>
          <NavLayout>
            <NavItem href="/" name="Posts" />
            <NavItem href="/about" name="About" />
          </NavLayout>
        </div>
      </div>
    </>
  );
}

const headerContainer = css`
  width: 100vw;
  height: 3.3rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const headerInnerContainer = css`
  width: 85%;
  max-width: 59rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
