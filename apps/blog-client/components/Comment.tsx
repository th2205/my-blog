import styled from "@emotion/styled";
import { useComment } from "../hooks/useComment";

export default function Comment() {
  const commentRef = useComment();

  return <Container ref={commentRef}></Container>;
}

const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
`;
