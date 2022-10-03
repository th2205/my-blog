import { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  width: 100%;
`;
