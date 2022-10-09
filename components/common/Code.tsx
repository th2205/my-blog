import { ReactNode } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
  variant?: "primary";
}

export default function Code({ children, variant = "primary" }: Props) {
  return <StyledCode variant={variant}>{children}</StyledCode>;
}

const StyledCode = styled.code<Props>`
  ${() => baseStyle}
  ${({ variant }) => variants[variant]}
`;

const baseStyle = css`
  padding: 0.2rem 0.6rem;
`;

const variants = {
  primary: css`
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    color: coral;
  `,
};
