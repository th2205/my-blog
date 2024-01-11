import { notion } from "../lib/Notion";
import Markdown from "react-markdown";
import { REVALIDATION_TIME } from "../src/contstant";
import remarkGfm from "remark-gfm";
import Image from "next/image";

interface Props {
  pageId: string;
}

export const revalidate = REVALIDATION_TIME;

export default async function Post({ pageId }: Props) {
  const pageData = await notion.getPageMarkdown(pageId);
  const pageMetaData = await notion.getPageMetaDataById(pageId);

  console.log(pageMetaData);
  if (!pageMetaData)
    return (
      <div className="w-[100%] flex flex-col justify-center items-center	">
        <h1 className="">404</h1>
        <p className="">페이지를 찾을 수 없습니다.</p>
      </div>
    );

  return (
    <div className="w-[80%]">
      <Image
        src={pageMetaData.coverUrl}
        className="object-cover w-full h-[300px]"
        width={100}
        height={100}
        alt={"cover"}
        style={{ objectFit: "cover" }}
      />
      <h1 className="font-semibold text-4xl	">{pageMetaData.title}</h1>
      <Markdown remarkPlugins={[remarkGfm]}>{pageData}</Markdown>
    </div>
  );
}
