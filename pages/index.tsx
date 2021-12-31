import mdParser, { PostsData } from "../lib/MDparser";
import Article from "../components/Article";
import Header from "../components/Header";

interface HomeProps {
  allPostsData: PostsData[];
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Header />
      <Article allPostsData={allPostsData} />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = mdParser.parse();

  return {
    props: {
      allPostsData: allPostsData,
    },
  };
}
