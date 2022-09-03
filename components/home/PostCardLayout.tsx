import { ReactNode } from "react";
import { keyframes, css } from "@emotion/react";

interface ArticleProps {
  children: ReactNode;
}

export default function ArticleLayout({ children }: ArticleProps) {
  return (
    <div css={wrapper}>
      <div css={layout}>{children}</div>
    </div>
  );
}

const fadIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const wrapper = css`
  width: 100%;
  margin: 0 auto;
`;

const layout = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 1rem;
  animation: ${fadIn} 0.3s linear;
  gap: 40px;
`;
