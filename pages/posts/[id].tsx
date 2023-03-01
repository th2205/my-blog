import Header from "@/components/common/Header";
import Post from "@/components/posts/Post";
import mdParser, { PostsData } from "@/lib/MDparser";
import { MainLayout } from "@/components/common/MainLayout";

interface Props {
  postData: PostsData;
}

export default function PostIndex({ postData }: Props) {
  return (
    <MainLayout>
      <Header id={postData.id} description={postData.thumbnail} />
      <Post postData={postData} content={postData.content} />
    </MainLayout>
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
  const postData = mdParser.getPostDataById(params.id);

  return {
    props: {
      postData,
    },
  };
}
