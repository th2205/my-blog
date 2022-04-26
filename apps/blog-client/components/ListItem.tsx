import { ReactNode } from "react";
import styled from "@emotion/styled";
import { Theme } from "@/types";

interface LiProps {
  children: ReactNode;
  theme?: Theme;
}

export default function ListItem({ children, theme = "primary" }: LiProps) {
  return <CustomLi>{children}</CustomLi>;
}

const CustomLi = styled.li`
  margin-bottom: 0.5rem;
  margin-left: 2rem;
  line-height: 2;

  &::marker {
    color: #abacb8;
  }
`;
