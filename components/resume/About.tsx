import Text from "@/components/Text";
import styled from "@emotion/styled";

interface Props {
  about: string;
}

export function About({ about }: Props) {
  return (
    <Container>
      <Text>{about}</Text>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 2rem 0;
`;
