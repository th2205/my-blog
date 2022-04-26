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
          {/* <div className={style["ui-icon-group"]}>
            <Link href="https://github.com/th2205" targetBlank theme="tertiary">
              <AiFillGithub size={30} />
            </Link>
          </div> */}
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
`;

const Container = styled.div`
  width: 85%;
  max-width: 59rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
