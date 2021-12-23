import ReactMarkdown from "react-markdown";
import Box from "./Box";
import CodeBlock from "./CodeBolck";
import Heading from "./Heading";
import IFrame from "./IFrame";
import Img from "./Img";
import Text from "./Text";

interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  const codeSandBoxPrefix = "codesandbox";

  return (
    <ReactMarkdown
      // className={style.content}
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
  );
}
