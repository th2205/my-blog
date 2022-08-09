import Link from "@/components/Link";
import { css } from "@emotion/react";

interface NavItemProps {
  href: string;
  name: string;
}

export default function NavItem({ href, name }: NavItemProps) {
  return (
    <Link href={href} underline={false}>
      <div css={navItem}>{name}</div>
    </Link>
  );
}

const navItem = css`
  color: gray;
  cursor: pointer;
`;
