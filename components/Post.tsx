import ReactMarkdown from "react-markdown";
import Box from "./Box";
import CodeBlock from "./CodeBolck";
import Heading from "./Heading";
import IFrame from "./IFrame";
import Img from "./Img";
import style from "./Post.module.scss";
import Text from "./Text";

interface PostProps {
  postData: {
    title: string;
    date: string;
    id: string;
    thumbnailImgPath: string;
    tags: string[];
  };
  content: string;
}

export default function Post({ postData, content }: PostProps) {
  const codeSandBoxPrefix = "codesandbox";

  return (
    <>
      <h1 className={style.title}>{postData.title}</h1>
      <div className={style.infoContainer}>
        <span className={style.author}>By Taehyeon</span>
        <span className={style.date}>{postData.date}</span>
      </div>
      <img className={style.coverImg} src={postData.thumbnailImgPath} />
      <div>
        <ReactMarkdown
          className={style.content}
          components={{
            code: CodeBlock,
            h1: ({ children }) => (
              <>
                <Box mb="l" mt="xxl">
                  <Heading as="h1">{children}</Heading>
                </Box>
              </>
            ),
            h2: ({ children }) => (
              <>
                <Box mb="m" mt="xl">
                  <Heading as="h2">{children}</Heading>
                </Box>
              </>
            ),
            img: ({ src, alt }) => {
              if (src.includes(codeSandBoxPrefix)) return <IFrame src={src} />;
              return <Img src={src} alt={alt} />;
            },
            p: ({ children }) => (
              <>
                <Box mb="l">
                  <Text as="p" theme="secondary">
                    {children}
                  </Text>
                </Box>
              </>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
}
