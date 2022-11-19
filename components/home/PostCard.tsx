import Link from "next/link";
import styled from "@emotion/styled";
import Heading from "@/components/common/Heading";
import Tag from "@/components/common/Tag";

import type { PostsData } from "@/lib/MDparser";

interface Props {
  article: PostsData;
}

export default function PostCard({ article }: Props) {
  return (
    <Link href={`/posts/${article.id}`}>
      <Container>
        {article.tags &&
          article.tags.map((tag, index) => <Tag key={index} name={tag} />)}
        <Title>{article.title}</Title>
        <InfoContainer>
          <Time>{article.date}</Time>
        </InfoContainer>
        <p>{article.thumbnail || ""}</p>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  width: 100%;
  transition: 0.5s;
  cursor: pointer;
  padding: 0.7rem;
  margin-top: 10px;
  transition: all 1s;
  margin-bottom: 1.5rem;

  & * {
    margin-bottom: 1rem;
  }

  &: hover {
    & > h3 {
      color: rgb(49, 130, 246);
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;

  & *:not(:last-of-type) {
    &::after {
      content: "|";
      margin: 0 0.5rem;
      color: rgb(0, 0, 0, 0.2);
    }
  }
`;

const Time = styled.p`
  font-size: 14px;
  color: #bcbbc0;
`;

const Title = styled.h3`
  color: #333d4b;
  font-size: 1.3rem;
  width: 100%;
  font-weight: bold;
  transition: all 0.2s ease-in-out 0s;
`;
