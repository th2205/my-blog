import { ReactNode } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface ArticleProps {
  children: ReactNode;
}

export default function ArticleLayout({ children }: ArticleProps) {
  return (
    <Wrapper>
      <Layout>{children}</Layout>
    </Wrapper>
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

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 5rem 5rem;

  @media (max-width: 767px) {
    padding: 5rem 2rem;
  }
`;

const Layout = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  animation: ${fadIn} 0.3s linear;
  gap: 20px;
`;
