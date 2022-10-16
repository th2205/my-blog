import { ReactNode } from "react";
import styled from "@emotion/styled";

interface NavItemProps {
  children: ReactNode;
}

export default function NavLayout({ children }: NavItemProps) {
  return <Styled>{children}</Styled>;
}

const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
