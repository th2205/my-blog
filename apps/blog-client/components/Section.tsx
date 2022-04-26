import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Size } from "@/types";

interface SectionProps {
  children: ReactNode;
  size?: Size;
}

export default function Section({ children, size = "m" }: SectionProps) {
  return <CustomSection>{children}</CustomSection>;
}

const CustomSection = styled.section<SectionProps>`
  width: 100%;

  ${({ size }) => sizes[size]}
`;

const sizes = {
  xxs: css`
    padding: 0.1rem 0;
  `,

  xs: css`
    padding: 0.3rem 0;
  `,

  s: css`
    padding: 0.5rem 0;
  `,

  m: css`
    padding: 1rem 0;
  `,

  l: css`
    padding: 2rem 0;
  `,
};
