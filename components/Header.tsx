import Head from "next/head";
import { AiFillGithub } from "react-icons/ai";
import Heading from "./Heading";
import HeaderLayout from "./layouts/HeaderLayout";
import IconListLayout from "./layouts/IconListLayout";
import Link from "./Link";

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
      <HeaderLayout>
        <Link href="/" underline={false}>
          <Heading as="h2" weight="s">
            TaeHyeon
          </Heading>
        </Link>
        <IconListLayout>
          <AiFillGithub size={30} />
        </IconListLayout>
      </HeaderLayout>
    </>
  );
}
