import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Size } from "../types";

interface BoxProps {
  children: ReactNode;
  mb?: Size;
  mt?: Size;
}
export default function Box({ children, mb, mt }: BoxProps) {
  return (
    <CustomBox mb={mb} mt={mt}>
      {children}
    </CustomBox>
  );
}

const CustomBox = styled.div<BoxProps>`
  width: 100%;

  ${(props) => mbs[props.mb]}
  ${(props) => mts[props.mt]}
`;

const mbs = {
  s: css`
    margin-bottom: 0.5rem;
  `,

  m: css`
    margin-bottom: 1rem;
  `,

  l: css`
    margin-bottom: 1.5rem;
  `,

  xl: css`
    margin-bottom: 2rem;
  `,

  xxl: css`
    margin-bottom: 2.5rem;
  `,
};

const mts = {
  s: css`
    margin-top: 0.5rem;
  `,

  m: css`
    margin-top: 1rem;
  `,

  l: css`
    margin-top: 1.5rem;
  `,

  xl: css`
    margin-top: 2rem;
  `,

  xxl: css`
    margin-top: 2.5rem;
  `,

  xxxl: css`
    margin-top: 3rem;
  `,
};
