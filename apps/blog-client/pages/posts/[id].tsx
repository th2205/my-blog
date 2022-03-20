import Header from "../../components/Header";
import Post from "../../components/Post";
import mdParser, { PostsData } from "../../lib/MDparser";

interface PostProps {
  postData: PostsData;
  content: string;
}

export default function PostIndex({ postData, content }: PostProps) {
  return (
    <>
      <Header id={postData.id} description={postData.thumbnail} />
      <Post postData={postData} content={content} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = mdParser.getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = mdParser.getPostDataByid(params.id);
  const content = await mdParser.parsePostContentById(params.id);

  return {
    props: {
      postData,
      content,
    },
  };
}
