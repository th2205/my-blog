import Head from "next/head";
import Link from "@/components/common/Link";
import Title from "@/components/common/Title";
import NavItem from "@/components/common/NavItem";
import NavLayout from "@/components/common/NavLayout";
import styled from "@emotion/styled";

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
      <HeaderContainer>
        <HeaderInnerContainer>
          <Link href="/" underline={false}>
            <Title>{title}</Title>
          </Link>
          <NavLayout>
            <NavItem href="/" name="Posts" />
            <NavItem href="/about" name="About" />
          </NavLayout>
        </HeaderInnerContainer>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  width: 100vw;
  height: 3.3rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: #ffffff;
`;

const HeaderInnerContainer = styled.div`
  width: 700px;
  max-width: 59rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    padding: 0 1rem;
  }
`;
