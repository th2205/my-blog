import styled from "@emotion/styled";
import { PostsData } from "@/lib/MDparser";
import ArticleItem from "@/components/ArticleItem";

interface ArticleProps {
  allPostsData: PostsData[];
}

export default function Article({ allPostsData }: ArticleProps) {
  return (
    <Container>
      {allPostsData.map((post, index: number) => (
        <ArticleItem key={index} article={post} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: grid;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 2rem;
  /* animation: fadein 0.3s linear; */

  @media screen and (min-width: 300px) {
    grid-template-columns: repeat(1, 300px);
    gap: 2rem 1.5rem;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 300px);
    gap: 2rem 1.5rem;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 300px);
    gap: 2rem 1.5rem;
  }
`;
