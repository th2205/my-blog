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
        <Heading as="h2">{article.title}</Heading>
        <InfoContainer>
          <Time>{article.date}</Time>
          {article.tags &&
            article.tags.map((tag, index) => <Tag key={index} name={tag} />)}
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
  border-bottom: solid 1px #eee;

  & * {
    margin-bottom: 1rem;
  }

  @media (min-width: 800px) {
    &:hover {
      transform: translateY(-0.5rem);
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
