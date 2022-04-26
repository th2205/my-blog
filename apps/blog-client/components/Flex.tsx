import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Theme } from "../types";

interface FlexProps {
  children: ReactNode;
  theme?: Theme;
}

export default function Flex({ children, theme = "primary" }: FlexProps) {
  return <Container theme={theme}>{children}</Container>;
}

const Container = styled.div<FlexProps>`
  display: flex;
  gap: 1rem;

  ${({ theme }) => themes[theme]}
`;

const themes = {
  primary: css`
    display: flex;
    justify-content: left;
    align-items: flex-end;
    gap: 1rem;
  `,
};
