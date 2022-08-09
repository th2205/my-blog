import Head from "next/head";
import styled from "@emotion/styled";
import Heading from "@/components/Heading";
import Link from "@/components/Link";
import Title from "@/components/common/Title";

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
          <HeaderItemContainer>
            <Link href="/" underline={false}>
              <HeaderItem>Posts</HeaderItem>
            </Link>
            <Link href="/about" underline={false}>
              <HeaderItem>About</HeaderItem>
            </Link>
          </HeaderItemContainer>
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
  background-color: white;
  z-index: 999;
`;

const HeaderInnerContainer = styled.div`
  width: 85%;
  max-width: 59rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const HeaderItem = styled.p`
  color: gray;
  cursor: pointer;
`;
