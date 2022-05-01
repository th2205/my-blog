import Link from "next/link";
import styled from "@emotion/styled";
import { PostsData } from "../lib/MDparser";
import Heading from "@/components/Heading";
import Text from "@/components/Text";

interface ArticleProps {
  article: PostsData;
}

export default function ArticleItem({ article }: ArticleProps) {
  return (
    <Link href={`/posts/${article.id}`}>
      <Container>
        <Img
          src={
            article.thumbnailImgPath ||
            "https://blog.kakaocdn.net/dn/csZiIk/btq1e7xYFyI/2r4kTj52qVrtu6VyIwnKDk/img.png"
          }
          alt="cover"
        />
        <TitleContainer>
          <Heading as="h3">{article.title}</Heading>
          <Text as="p" size="s">
            {article.thumbnail || ""}
          </Text>
        </TitleContainer>
        <FooterContainer>
          <p className="time">{article.date}</p>
          <TagContainer>
            {article.tags &&
              article.tags.map((tag, index) => <p key={index}>{tag}</p>)}
          </TagContainer>
        </FooterContainer>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: rgb(241 243 245) 1px 1px 5px 2px;
  transition: 0.5s;
  cursor: pointer;

  @media (min-width: 800px) {
    &:hover {
      transform: translateY(-0.5rem);
    }
  }
`;

const Img = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 11rem;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  height: 5rem;
  padding: 0.7rem;

  & h3 {
    margin-bottom: 1rem;
  }
`;

const FooterContainer = styled.div`
  padding: 0 0.7rem 0.7rem 0.7rem;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 0.7rem;
    color: rgb(134, 142, 150);
  }
`;

const TagContainer = styled.div`
  display: flex;

  p {
    margin: 0 0.2rem;
  }
`;
