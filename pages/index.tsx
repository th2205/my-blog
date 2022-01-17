import mdParser, { PostsData } from "../lib/MDparser";
import Article from "../components/Article";
import Header from "../components/Header";
import { useHash } from "../hooks/useHash";
import Tag from "../components/Tag";

interface HomeProps {
  allPostsData: PostsData[];
  allTags: {
    [x: string]: number;
  };
}

export default function Home({ allPostsData, allTags }: HomeProps) {
  const currentHash = useHash();
  console.log(currentHash);

  return (
    <>
      <Header />
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Tag tags={allTags} />
        <Article allPostsData={allPostsData} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = mdParser.parse();

  return {
    props: {
      allPostsData: allPostsData,
      allTags: mdParser.getTags(),
    },
  };
}
