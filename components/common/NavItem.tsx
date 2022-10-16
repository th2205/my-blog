import Link from "@/components/common/Link";
import styled from "@emotion/styled";

interface NavItemProps {
  href: string;
  name: string;
}

export default function NavItem({ href, name }: NavItemProps) {
  return (
    <Link href={href} underline={false}>
      <StyledNavItem>{name}</StyledNavItem>
    </Link>
  );
}

const StyledNavItem = styled.div`
  color: gray;
  cursor: pointer;
`;
