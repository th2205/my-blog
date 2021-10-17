import mdParser, { PostsData } from "../lib/MDparser";
import Article from "../components/Article";
import Header from "../components/Header";
import Articlelayout from "../components/ArticleLayout";

interface HomeProps {
  allPostsData: PostsData[];
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Header />
      <div>test</div>
      <Articlelayout>
        {allPostsData.map((post, index: number) => (
          <Article key={index} article={post} />
        ))}
      </Articlelayout>
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
