import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Theme } from "../types";

interface CodeProps {
  children: ReactNode;
  variant?: "primary";
}

export default function Code({ children, variant = "primary" }: CodeProps) {
  return <CustomCode variant={variant}>{children}</CustomCode>;
}

const CustomCode = styled.code<CodeProps>`
  padding: 0.2rem 0.6rem;

  ${({ variant }) => variants[variant]};
`;

const variants = {
  primary: css`
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  `,
};
