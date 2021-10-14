import style from "./Article.module.scss";
import Link from "next/link";

interface ArticleProps {
  article: {
    id: string;
    date: string;
    title: string;
    thumbnailImgPath: string;
    thumbnail: string;
    tags: string[];
  };
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
            {article.tags && article.tags.map((tag) => <p>{tag}</p>)}
          </div>
        </div>
      </div>
    </Link>
  );
}
