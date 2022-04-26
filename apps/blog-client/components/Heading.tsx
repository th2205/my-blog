import { ElementType, ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Theme, Size } from "@/types";

interface HeadingProps {
  theme?: Theme;
  as: string | ElementType<any>;
  children: ReactNode;
  weight?: Size;
}

export default function Heading({
  as,
  children,
  theme = "primary",
  weight,
}: HeadingProps) {
  return (
    <CustomHeading as={as as ElementType} weight={weight} theme={theme}>
      {children}
    </CustomHeading>
  );
}

const CustomHeading = styled.h1<HeadingProps>`
  width: 100%;

  ${({ as }) => variants[as as string]}
  ${({ theme }) => themes[theme]}
  ${({ weight }) => weights[weight]}
`;

const themes = {
  primary: css`
    color: #333;
  `,
  secondary: css`
    color: rgba(102, 152, 250, 1);
  `,
};

const variants = {
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
    font-weight: 400;
  `,
  m: css`
    font-weight: 700;
  `,
  l: css`
    font-weight: bold;
  `,
};
