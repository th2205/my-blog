import mdParser from "../lib/MDparser";
import Article from "../components/Article";
import Header from "../components/Header";

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Header />
      {/* {allPostsData.map((post, index) => (
        <Article key={index} article={post} />
      ))} */}
    </div>
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
