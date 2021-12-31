import Header from "../../components/Header";
import PostLayout from "../../components/layouts/PostLayout";
import Post from "../../components/Post";
import mdParser from "../../lib/MDparser";

export default function PostIndex({ postData, content }) {
  return (
    <>
      <Header id={postData.id} />
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
