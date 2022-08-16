import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Theme, Size } from "@/types";

interface HeadingProps {
  theme?: Theme;
  as: string;
  children: ReactNode;
  weight?: Size;
}

export default function Heading({
  as,
  children,
  theme = "primary",
  weight,
}: HeadingProps) {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;

  return <CustomTag css={[baseStyle, headingTags[as]]}>{children}</CustomTag>;
}

const baseStyle = css`
  display: block;
`;

const headingTags = {
  h1: css`
    font-size: 2rem;
    font-weight: 700;
  `,
  h2: css`
    font-size: 1.6rem;
    font-weight: 700;
  `,
  h3: css`
    font-size: 1.2rem;
  `,
};
