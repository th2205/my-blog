import mdParser from "../lib/MDparser";
import Article from "../components/Article";
import Header from "../components/Header";
import Articlelayout from "../components/ArticleLayout";

export default function Home({ allPostsData }) {
  return (
    <>
      <Header />
      <div>test</div>
      <Articlelayout>
        {allPostsData.map((post, index) => (
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
