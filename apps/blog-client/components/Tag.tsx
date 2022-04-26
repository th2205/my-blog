import { ReactNode } from "react";
import styled from "@emotion/styled";

interface TagProps {
  children: ReactNode;
}

export default function Tag({ children }: TagProps) {
  return <CustomTag>{children}</CustomTag>;
}

const CustomTag = styled.div`
  width: 100%;
  padding: 8rem 1rem 1rem 1rem;
  text-align: center;
  line-height: 2;
  word-break: break-word;
`;
