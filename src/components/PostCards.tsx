import { notion } from "@/lib/Notion";
import { PostCard } from "./PostCard";
import { REVALIDATION_TIME } from "@/contstant";
import React from "react";

export const revalidate = REVALIDATION_TIME;

interface PageProps {
  data: {
    pageId: string;
    coverUrl: string;
    createdAt: string;
    title: string;
  }[];
}

export default function PostCards({ data }: PageProps) {
  // const data = await notion.getPagesMetaData();

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
