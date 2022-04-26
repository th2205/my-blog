import { ReactNode } from "react";
import styled from "@emotion/styled";

interface ResumeLayoutProps {
  children: ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 90%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem 0;
`;
