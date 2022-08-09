import { ReactNode } from "react";
import { css } from "@emotion/react";

interface NavItemProps {
  children: ReactNode;
}

export default function NavLayout({ children }: NavItemProps) {
  return <div css={naveLayout}>{children}</div>;
}

const naveLayout = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
