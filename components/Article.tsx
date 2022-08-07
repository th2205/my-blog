import { PostsData } from "@/lib/MDparser";
import ArticleItem from "@/components/ArticleItem";
import style from "@/components/Article.module.scss";

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
