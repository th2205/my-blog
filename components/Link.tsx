import { ReactNode } from "react";
import Link from "next/link";
import { Theme } from "@/types";
import styled from "@emotion/styled";

interface LinkProps {
  children: ReactNode;
  targetBlank?: boolean;
  href: string;
  theme?: Theme;
  underline?: boolean;
  br?: boolean;
  withIcon?: boolean;
}

export default function CustomLink({
  children,
  targetBlank = false,
  href,
  underline = false,
  br = false,
  withIcon = false,
}: LinkProps) {
  return (
    <StyledLink underline={underline}>
      {targetBlank ? (
        <a target="_blank" href={href}>
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )}
      {withIcon && <Icon src={"/assets/icons/link.svg"} />}
      {br && <br />}
    </StyledLink>
  );
}

const StyledLink = styled.div<Pick<LinkProps, "underline">>`
  display: inline-flex;

  &:hover {
    text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  }
`;

const Icon = styled.img`
  width: 13px;
  margin: 0 3px;
`;
