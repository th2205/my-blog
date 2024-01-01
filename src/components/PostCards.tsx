import { notion } from "../lib/Notion";
import { PostCard } from "./PostCard";
import { REVALIDATION_TIME } from "../contstant";

export const revalidate = REVALIDATION_TIME;

export default async function PostCards() {
  const data = await notion.getPagesMetaData();

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
