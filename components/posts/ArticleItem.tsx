import Link from "next/link";
import styled from "@emotion/styled";
import { PostsData } from "@/lib/MDparser";
import Heading from "@/components/Heading";
import Tag from "@/components/posts/Tag";

interface ArticleProps {
  article: PostsData;
}

export default function ArticleItem({ article }: ArticleProps) {
  return (
    <Link href={`/posts/${article.id}`}>
      <Container>
        {article.tags && article.tags.map((tag, index) => <Tag name={tag} />)}
        <Heading as="h1">{article.title}</Heading>
        <p className="time">{article.date}</p>
        <p>{article.thumbnail || ""}</p>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  height: auto;
  transition: 0.5s;
  cursor: pointer;
  padding: 0.7rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & > * {
    margin-bottom: 1rem;
  }

  @media (min-width: 800px) {
    &:hover {
      transform: translateX(0.5rem);
      border-left: 15px solid black;
    }
  }
`;
