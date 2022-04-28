import Head from "next/head";
import styled from "@emotion/styled";
import Heading from "@/components/Heading";
import Link from "./Link";

interface HeaderProps {
  id?: string;
  description?: string;
}

export default function Header({ id, description }: HeaderProps) {
  const title = "TaeHyeon";

  return (
    <>
      <Head>
        <title>{id || title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description}></meta>
      </Head>
      <HeaderLayout>
        <Container>
          <Link href="/" underline={false}>
            <Heading as="h2" weight="s">
              {title}
            </Heading>
          </Link>
          <Navigation>
            <NavItem>Posts</NavItem>
            <NavItem>About</NavItem>
          </Navigation>
        </Container>
      </HeaderLayout>
    </>
  );
}

const HeaderLayout = styled.header`
  width: 100vw;
  height: 3.3rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px 2px #dee2e6;
  background-color: white;
  z-index: 999;
  padding-left: 1rem;
`;

const Container = styled.div`
  width: 85%;
  max-width: 59rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  display: block;
  margin-right: 0.5rem;
  font-size: 1rem;
  background-color: transparent;
  color: rgb(78, 89, 104);
  width: 4rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(2, 32, 71, 0.05);
  }
`;
