import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBolck";
import style from "./Post.module.scss";

interface PostProps {
  postData: {
    title: string;
    date: string;
    id: string;
    thumbnailImgPath: string;
    tags: string[];
  };
  content: string;
}

export default function Post({ postData, content }: PostProps) {
  return (
    <>
      <h1 className={style.title}>{postData.title}</h1>
      <div className={style.infoContainer}>
        <span className={style.author}>By Taehyeon</span>
        <span className={style.date}>{postData.date}</span>
      </div>
      <img className={style.coverImg} src={postData.thumbnailImgPath} />
      <div>
        <ReactMarkdown className={style.content} components={CodeBlock}>
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
}
