import mdParser, { PostsData } from "../lib/MDparser";
import Header from "@/components/common/Header";
import ArticleLayout from "@/components/home/PostCardLayout";
import PostCard from "@/components/home/PostCard";
import { MainLayout } from "@/components/common/MainLayout";

interface Props {
  postMetaData: PostsData[];
  allTags: {
    [x: string]: number;
  };
  allPostCount: number;
}

export default function Home({ postMetaData }: Props) {
  return (
    <MainLayout>
      <Header />
      <div>
        <ArticleLayout>
          {postMetaData.map((article, index) => (
            <PostCard key={index} article={article} />
          ))}
        </ArticleLayout>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const postMetaData = mdParser.getPostMetaData();

  return {
    props: {
      postMetaData: postMetaData,
    },
  };
}
