import { notion } from "@/lib/notion";
import { PostCard } from "@/components/PostCard";

export default async function Posts() {
  const data = await notion.getPagesInfo();

  console.log(data);

  return (
    <ul className="flex flex-row flex-wrap gap-[2rem]">
      {data.map((page) => (
        <PostCard
          key={page.pageId}
          pageId={page.pageId}
          coverUrl={page.coverUrl}
          createdAt={page.createdAt}
          title={page.title}
        />
      ))}
    </ul>
  );
}
