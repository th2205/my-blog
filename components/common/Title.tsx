import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

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
  return <CustomTitle variant={variant}>{props.children}</CustomTitle>;
}

const CustomTitle = styled.h1<HeadingProps>`
  width: 100%;
  background-image: linear-gradient(90deg, #007cf0, #00dfd8);
  color: transparent;
  -webkit-background-clip: text;
  font-weight: bolder;
  font-size: 2rem;

  ${({ variant }) => variants[variant]}
  ${({ size }) => sizes[size]}
`;

const variants = {
  primary: css`
    background-image: linear-gradient(90deg, #007cf0, #00dfd8);
  `,
  secondary: css`
    background-image: linear-gradient(90deg, #7928ca, #ff0080);
  `,
};

const sizes = {
  m: css`
    font-size: 5rem;
  `,
  l: css`
    font-size: 7rem;
  `,
};
