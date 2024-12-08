import PostCards from "@/components/PostCards";
import { notion } from "@/lib/Notion";

export default async function Page() {
  const data = await notion.getPagesMetaData();

  console.log(data);

  return <PostCards data={data} />;
}
