import Link from "next/link";
import style from "./ArticleItem.module.scss";
import { PostsData } from "../lib/MDparser";

interface ArticleProps {
  article: PostsData;
}

export default function Article({ article }: ArticleProps) {
  return (
    <Link href={`/posts/${article.id}`}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img
            src={
              article.thumbnailImgPath ||
              "https://blog.kakaocdn.net/dn/csZiIk/btq1e7xYFyI/2r4kTj52qVrtu6VyIwnKDk/img.png"
            }
            alt="corver"
          />
        </div>
        <div className={style.titleContianer}>
          <h1>{article.title}</h1>
          <p>{article.thumbnail || ""}</p>
        </div>
        <div className={style.footerContainer}>
          <p className="time">{article.date}</p>
          <div className={style.tagContainer}>
            {article.tags &&
              article.tags.map((tag, index) => <p key={index}>{tag}</p>)}
          </div>
        </div>
      </div>
    </Link>
  );
}
