import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Theme } from "../types";

interface CodeProps {
  children: ReactNode;
  theme?: Theme;
}

export default function Code({ children, theme = "primary" }: CodeProps) {
  return <CustomCode theme={theme}>{children}</CustomCode>;
}

const CustomCode = styled.code<CodeProps>`
  padding: 0 0.6rem 0.2rem 0.6rem;

  ${({ theme }) => themes[theme]}
`;

const themes = {
  primary: css`
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  `,
};
