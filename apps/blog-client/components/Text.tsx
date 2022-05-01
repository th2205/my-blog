import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Size, Theme } from "@/types";

interface TextProps {
  children: ReactNode;
  theme?: Theme;
  as?: "span" | "p";
  underline?: boolean;
  size?: Size;
}

export default function Text({
  children,
  theme = "primary",
  as = "p",
  underline = false,
  size = "m",
}: TextProps) {
  return (
    <CustomText as={as as any} size={size}>
      {children}
    </CustomText>
  );
}

const CustomText = styled.p<TextProps>`
  line-height: 1.8;

  ${({ theme }) => themes[theme]};
  ${({ size }) => sizes[size]};
  ${({ underline }) => underline && "text-decoration: underline;"}
`;

const themes = {
  primary: css`
    color: #abacb8;
  `,
  secondary: css`
    color: #28293d;
  `,
  tertiary: css`
    color: #333;

    &::before {
      content: "• ";
      font-size: 1rem;
      color: $font-gray;
    }
  `,
};

const sizes = {
  s: css`
    font-size: 0.7rem;
  `,
  m: css`
    font-size: 1rem;
  `,

  l: css`
    font-size: 1.3rem;
  `,
};
