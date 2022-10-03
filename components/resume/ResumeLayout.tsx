import { ReactNode } from "react";
import styled from "@emotion/styled";

interface ResumeLayoutProps {
  children: ReactNode;
}

export function ResumeLayout({ children }: ResumeLayoutProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  padding: 5rem 2rem;
`;
