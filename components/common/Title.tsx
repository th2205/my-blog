import { ReactNode } from "react";
import { css, useTheme } from "@emotion/react";

interface HeadingProps {
  variant?: "primary" | "secondary";
  size?: "m" | "l";
  children: ReactNode;
}

export default function Title({
  variant = "primary",
  size = "m",
  ...props
}: HeadingProps) {
  const theme = useTheme();

  return (
    <h1 css={[baseStyle, variants[variant], sizes[size]]}>{props.children}</h1>
  );
}

const baseStyle = css`
  width: 100%;
  color: transparent;
  -webkit-background-clip: text;
  font-weight: bold;
`;

const variants = {
  primary: css`
    background-image: linear-gradient(90deg, #007cf0, #00dfd8);
  `,
  secondary: css`
    color: #47b5ff;
  `,
};

const sizes = {
  m: css`
    font-size: 2rem;
  `,
  l: css`
    font-size: 3rem;
  `,
};
