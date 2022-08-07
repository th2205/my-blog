import { ReactNode } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface ArticleProps {
  children: ReactNode;
}

export default function ArticleLayout({ children }: ArticleProps) {
  return <Layout>{children}</Layout>;
}

const fadIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Layout = styled.div`
  width: 100%;
  max-width: 1300px;
  padding-top: 2rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 2rem;
  animation: ${fadIn} 0.3s linear;
`;
