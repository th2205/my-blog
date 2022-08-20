import MarkDown from "./MarkDown";
import Comment from "./Comment";
import Heading from "@/components/common/Heading";
import Text from "./Text";
import style from "./Post.module.scss";
import Img from "./Img";

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
    <section className={style["ui-post-layout"]}>
      <div className={style["ui-post-layout__haeder-container"]}>
        <Heading as="h1">{postData.title}</Heading>
      </div>
      <div className={style["ui-post-layout__info-container"]}>
        <Text as="span" theme="secondary">
          By Taehyeon
        </Text>
        <Text as="span" theme="secondary" size="s">
          {postData.date}
        </Text>
      </div>
      <Img src={postData.thumbnailImgPath} alt="cover" />
      <div>
        <MarkDown content={content} />
      </div>
      <Comment />
    </section>
  );
}
