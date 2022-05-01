import { ElementType, ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Theme, Size } from "@/types";

interface HeadingProps {
  variant?: Theme;
  as: ElementType<any>;
  children: ReactNode;
  weight?: Size;
}

export default function Heading({
  as,
  children,
  variant = "primary",
  weight,
}: HeadingProps) {
  return (
    <CustomHeading as={as} weight={weight} variant={variant}>
      {children}
    </CustomHeading>
  );
}

const CustomHeading = styled.h1<HeadingProps>`
  width: 100%;
  font-family: "Noto Sans KR", sans-serif;

  ${({ as }) => tags[as as string]}
  ${({ variant }) => variants[variant]}
  ${({ weight }) => weights[weight]}
`;

const variants = {
  primary: css`
    color: #333;
  `,
  secondary: css`
    color: rgba(102, 152, 250, 1);
  `,
};

const tags = {
  h1: css`
    font-size: 2.3rem;
  `,
  h2: css`
    font-size: 1.5rem;
  `,
  h3: css`
    font-size: 1rem;
  `,
};

const weights = {
  s: css`
    font-weight: 300;
  `,
  m: css`
    font-weight: 500;
  `,
  l: css`
    font-weight: bold;
  `,
};
