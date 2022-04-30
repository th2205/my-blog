import mdParser, { PostsData } from "../lib/MDparser";
import Article from "../components/Article";
import Header from "../components/Header";
import { useHash } from "../hooks/useHash";
import Tag from "../components/Tag";
import TagItem from "../components/TagItem";
import Footer from "../components/Footer";
import useSWR from "swr";
import { getAllPosts } from "@/apis/post";
import styled from "@emotion/styled";

interface HomeProps {
  allPostsData: PostsData[];
  allTags: {
    [x: string]: number;
  };
  allPostCount: number;
}

export default function Home({
  allPostsData,
  allTags,
  allPostCount,
}: HomeProps) {
  const currentHash = useHash();
  const posts = !currentHash
    ? allPostsData
    : allPostsData.filter((post) => post.tags.includes(currentHash));
  const { data } = useSWR("post", getAllPosts);
  console.log(data);
  console.log(1);
  return (
    <Main>
      <Header />
      <div>
        <Tag>
          <TagItem count={allPostCount} isMatched={!currentHash} />
          {Object.entries(allTags).map((tag, index) => {
            const [tagName, count] = tag;

            return (
              <TagItem
                key={index}
                tag={tagName}
                count={count}
                isMatched={currentHash === tagName}
              />
            );
          })}
        </Tag>
        <Article allPostsData={posts} />
      </div>
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export async function getStaticProps() {
  const allPostsData = mdParser.parse();

  return {
    props: {
      allPostsData: allPostsData,
      allTags: mdParser.getTags(),
      allPostCount: mdParser.getaAllPostCount(),
    },
  };
}
