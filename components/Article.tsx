import style from "./Article.module.scss";
import Link from "next/link";

type Article = {
  article: {
    id: string;
    date: string;
    title: string;
    corverImg: string;
  };
};

export default function Article({ article }: Article) {
  return (
    <Link href={`/posts/${article.id}`}>
      <div className={style.container}>
        <div>
          <img
            src="https://blog.kakaocdn.net/dn/csZiIk/btq1e7xYFyI/2r4kTj52qVrtu6VyIwnKDk/img.png"
            alt="corver"
          />
        </div>
        <div>
          <h1>{article.title}</h1>
        </div>
        <div>
          <p className="time">{article.date}</p>
        </div>
      </div>
    </Link>
  );
}
