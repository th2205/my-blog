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
    <div className="w-full max-w-[830px] mt-5">
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl text-[#0b0c0e]">
        {pageMetaData.title}
      </h1>
      <p className={"mt-5 text-[rgb(48 58 62)]"}>왜자꾸 성장하라고 하지?</p>
      <Image
        src={pageMetaData.coverUrl}
        className="object-cover w-full h-[auto]  border-gray-300 rounded-lg	"
        width={100}
        height={100}
        quality={100}
        alt={"cover"}
        style={{ objectFit: "cover" }}
      />
      <Markdown remarkPlugins={[remarkGfm]}>{pageData}</Markdown>
    </div>
  );
}
