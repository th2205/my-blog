import { ReactNode } from "react";
import { css } from "@emotion/react";

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  return <main css={style}>{children}</main>;
}

const style = css`
  width: 100%;
  background-color: #f5f5f7;
`;
