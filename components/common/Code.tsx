import { ReactNode } from "react";
import { css } from "@emotion/react";

interface CodeProps {
  children: ReactNode;
  variant?: "primary";
}

export default function Code({ children, variant = "primary" }: CodeProps) {
  return <code css={[baseStyle, variants[variant]]}>{children}</code>;
}

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
