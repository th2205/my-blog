import MarkdownPost from "../../../components/Post";
import { notion } from "../../../lib/Notion";

export default function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // @ts-ignore
  return <MarkdownPost pageId={slug} />;
}
