import MarkdownPost from "src/components/Post";
import { notion } from "src/lib/Notion";

export default function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // @ts-ignore
  return <MarkdownPost pageId={slug} />;
}
