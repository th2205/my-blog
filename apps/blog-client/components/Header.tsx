import Head from "next/head";
import styled from "@emotion/styled";
import Heading from "@/components/Heading";
import Link from "./Link";
import { useRouter } from "next/router";

interface HeaderProps {
  id?: number;
  description?: string;
}

const NAV_ITEMS = [
  { name: "Posts", path: "/" },
  { name: "About", path: "/about" },
];

const ADMIN_ITEMS = [
  { name: "글쓰기", path: "/admin/write" },
  { name: "내정보", path: "/admin/about" },
];

export default function Header({ id, description }: HeaderProps) {
  const title = "TaeHyeon";
  const router = useRouter();
  const isAdmin = router.pathname.includes("admin");

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
            {isAdmin
              ? ADMIN_ITEMS.map((item, index) => (
                  <NavItem key={index}>{item.name}</NavItem>
                ))
              : NAV_ITEMS.map((item, index) => (
                  <NavItem key={index}>{item.name}</NavItem>
                ))}
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
  background-color: ${({ theme }) => theme.colors.backgroundColor};
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
