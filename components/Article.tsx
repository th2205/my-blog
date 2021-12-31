import { PostsData } from "../lib/MDparser";
import ArticleItem from "./ArticleItem";
import style from "./Article.module.scss";

interface ArticleProps {
  allPostsData: PostsData[];
}

export default function Article({ allPostsData }: ArticleProps) {
  return (
    <div className={style["ui-article-layout"]}>
      {allPostsData.map((post, index: number) => (
        <ArticleItem key={index} article={post} />
      ))}
    </div>
  );
}
