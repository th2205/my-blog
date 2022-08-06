import styled from "@emotion/styled";
import Head from "next/head";
import Heading from "@/components/Heading";
import Link from "@/components/Link";

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
            <Heading as="h2" weight="s">
              {title}
            </Heading>
          </Link>
          <HeaderItemContainer>
            <HeaderItem>Posts</HeaderItem>
            <HeaderItem>About</HeaderItem>
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
