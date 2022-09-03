import mdParser, { PostsData } from "../lib/MDparser";
import Header from "@/components/common/Header";
import { useHash } from "@/hooks/useHash";
import Tag from "../components/Tag";
import TagItem from "../components/TagItem";
import ArticleLayout from "@/components/home/PostCardLayout";
import ArticleItem from "@/components/home/PostCard";

interface HomeProps {
  allPostsData: PostsData[];
  allTags: {
    [x: string]: number;
  };
  allPostCount: number;
}

export default function Home({
  allPostsData,
  allTags,
  allPostCount,
}: HomeProps) {
  const currentHash = useHash();
  const posts = !currentHash
    ? allPostsData
    : allPostsData.filter((post) => post.tags.includes(currentHash));

  return (
    <>
      <Header />
      <div>
        <Tag>
          <TagItem count={allPostCount} isMatched={!currentHash} />
          {Object.entries(allTags).map((tag, index) => {
            const [tagName, count] = tag;

            return (
              <TagItem
                key={index}
                tag={tagName}
                count={count}
                isMatched={currentHash === tagName}
              />
            );
          })}
        </Tag>
        <ArticleLayout>
          {allPostsData.map((article, index) => (
            <ArticleItem key={index} article={article} />
          ))}
        </ArticleLayout>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = mdParser.parse();

  return {
    props: {
      allPostsData: allPostsData,
      allTags: mdParser.getTags(),
      allPostCount: mdParser.getaAllPostCount(),
    },
  };
}
