import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({
  node,
  inline,
  className,
  children,
  ...props
}) {
  const match = /language-(\w+)/.exec(className || "");

  return !inline && match ? (
    <div style={{ fontFamily: "monospace, monospace", marginBottom: "3rem" }}>
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}
