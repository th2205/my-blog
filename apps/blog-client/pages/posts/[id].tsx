import { getPostById } from "@/apis/post";
import { useRouter } from "next/router";
import useSWR from "swr";
import Header from "../../components/Header";
import Post from "../../components/Post";

export default function PostIndex() {
  const { query } = useRouter();
  const params = query;
  const id = Number(params.id);
  const { data } = useSWR("post", () => getPostById(id));

  if (!data) return <div>loading...</div>;

  return (
    <>
      <Header id={id} description={data.contentPreview} />
      <Post {...data} />
    </>
  );
}
