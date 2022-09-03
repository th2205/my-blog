import Link from "next/link";
import { css } from "@emotion/react";
import { PostsData } from "@/lib/MDparser";
import Heading from "@/components/common/Heading";
import Tag from "@/components/common/Tag";

interface Props {
  article: PostsData;
}

export default function ArticleItem({ article }: Props) {
  return (
    <Link href={`/posts/${article.id}`}>
      <div css={container}>
        <div css={imgContainer}>
          <img css={coverImg} src={article.thumbnailImgPath} />
        </div>
        <br />
        {article.tags &&
          article.tags.map((tag, index) => <Tag key={index} name={tag} />)}
        <p css={time}>{article.date}</p>
        <Heading as="h2">{article.title}</Heading>
        <p>{article.thumbnail || ""}</p>
      </div>
    </Link>
  );
}

const container = css`
  width: 20rem;
  transition: 0.5s;
  cursor: pointer;
  padding: 0.7rem;
  border-radius: 5px;
  box-shadow: rgb(241 243 245) 1px 1px 12px 2px;

  & > * {
    margin-bottom: 1rem;
  }

  @media (min-width: 800px) {
    &:hover {
      transform: translateY(-0.5rem);
    }
  }
`;

const time = css`
  font-size: 14px;
  color: #bcbbc0;
`;

const imgContainer = css`
  background-color: #ffffff;
  text-align: center;
`;

const coverImg = css`
  width: 70%;
  object-fit: cover;
  border-radius: 5px;
`;
