import Link from "next/link";
import styled from "@emotion/styled";
import { PostsData } from "@/lib/MDparser";

interface ArticleProps {
  article: PostsData;
}

export default function ArticleItem({ article }: ArticleProps) {
  return (
    <Link href={`/posts/${article.id}`}>
      <Container>
        <div>
          <img
            src={
              article.thumbnailImgPath ||
              "https://blog.kakaocdn.net/dn/csZiIk/btq1e7xYFyI/2r4kTj52qVrtu6VyIwnKDk/img.png"
            }
            alt="cover"
          />
        </div>
        <TitleContainer>
          <h1>{article.title}</h1>
          <p>{article.thumbnail || ""}</p>
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
  width: 20rem;
  height: 22rem;
  border-radius: 0.5rem;
  box-shadow: rgb(241 243 245) 1px 1px 11px 8px;
  transition: 0.5s;
  cursor: pointer;

  img {
    border-radius: 0.5rem;
    width: 100%;
    height: 11rem;
    object-fit: cover;
  }

  @media (min-width: 800px) {
    &:hover {
      transform: translateY(-0.5rem);
    }
  }
`;

const TitleContainer = styled.div`
  height: 5rem;
  padding: 0.7rem;

  h1 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.7rem;
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
