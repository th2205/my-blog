import { notion } from "../lib/Notion";
import { PostCard } from "./PostCard";
import { REVALIDATION_TIME } from "../src/contstant";
import React from "react";

export const revalidate = REVALIDATION_TIME;

export default async function PostCards() {
  const data = await notion.getPagesMetaData();

  return (
    <ul className="w-[100%] flex flex-row flex-wrap gap-[2rem] justify-center align-center py-10">
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
