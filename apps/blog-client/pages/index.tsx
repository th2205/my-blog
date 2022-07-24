import Article from "../components/Article";
import Header from "../components/Header";
import { useHash } from "../hooks/useHash";
import Tag from "../components/Tag";
import TagItem from "../components/TagItem";
import Footer from "../components/Footer";
import useSWR from "swr";
import { getAllPosts } from "@/apis/post";
import styled from "@emotion/styled";

export default function Home() {
  const currentHash = useHash();

  const { data } = useSWR("allPosts", getAllPosts);
  return (
    <Main>
      <Header />
      <div>
        {/* <Tag>
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
        </Tag> */}
        {data ? <Article allPostsData={data} /> : <div>loading...</div>}
      </div>
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
