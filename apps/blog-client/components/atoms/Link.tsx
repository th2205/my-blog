import { ReactNode } from "react";
import Link from "next/link";
import cn from "classnames";
import { Theme } from "@/types";
import style from "./Link.module.scss";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface LinkProps {
  children: ReactNode;
  targetBlank?: boolean;
  href: string;
  theme?: Theme;
  underline?: boolean;
  br?: boolean;
}

export default function CustomLink({
  children,
  targetBlank = false,
  href,
  theme = "primary",
  underline = true,
  br = false,
}: LinkProps) {
  return targetBlank ? (
    <>
      <StyledLink target="_blank" href={href} theme={theme}>
        {children}
      </StyledLink>
      {br && <br />}
    </>
  ) : (
    <>
      <Link href={href}>
        <StyledLink href="/" theme={theme}>
          {children}
        </StyledLink>
      </Link>
      {br && <br />}
    </>
  );
}

const StyledLink = styled.a<LinkProps>`
  text-decoration: none;

  ${({ theme }) => themes[theme]}

  &:visited {
    color: inherit;
  }
`;

const themes = {
  primary: css`
    text-decoration-color: #abacb8;
  `,
  secondary: css`
    text-decoration-color: rgba(102, 152, 250, 1);
  `,
  tertiary: css`
    color: inherit;
  `,
};
