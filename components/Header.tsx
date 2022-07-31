import Head from "next/head";
import Heading from "./Heading";
import Link from "./Link";

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
      <header className="w-screen py-1.5 fixed flex items-center border-2 justify-center bg-white z-40">
        <div className="w-10/12 flex justify-between">
          <Link href="/" underline={false}>
            <Heading as="h2" weight="s">
              {title}
            </Heading>
          </Link>
          {/*<div className="flex justify-around items-center">*/}
          {/*  <p>Posts</p>*/}
          {/*  <p>About</p>*/}
          {/*</div>*/}
        </div>
      </header>
    </>
  );
}
