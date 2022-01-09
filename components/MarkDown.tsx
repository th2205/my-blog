import ReactMarkdown from "react-markdown";
import Box from "./Box";
import CodeBlock from "./CodeBolck";
import Heading from "./Heading";
import IFrame from "./IFrame";
import Img from "./Img";
import Li from "./Li";
import List from "./List";
import Text from "./Text";
import Code from "./Code";
import Link from "./Link";

interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  const codeSandBoxPrefix = "codesandbox";

  return (
    <ReactMarkdown
      components={{
        code: ({ node, inline, className, children }) => {
          if (className) {
            return (
              <CodeBlock node={node} inline={inline} className={className}>
                {children}
              </CodeBlock>
            );
          } else {
            return <Code>{children}</Code>;
          }
        },
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
          <Box mb="l">
            <Text as="p" theme="secondary">
              {children}
            </Text>
          </Box>
        ),
        ol: ({ children }) => (
          <Box mb="l">
            <List as="ol">{children}</List>
          </Box>
        ),
        ul: ({ children }) => (
          <Box mb="l">
            <List as="ul">{children}</List>
          </Box>
        ),
        li: ({ children }) => <Li>{children}</Li>,
        a: ({ children, href }) => (
          <Link href={href} br={true}>
            {children}
          </Link>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
