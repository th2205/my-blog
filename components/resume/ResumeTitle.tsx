import Title from "@/components/common/Title";
import styled from "@emotion/styled";

interface Props {
  myName: string;
}

export function ResumeTitle({ myName }: Props) {
  return (
    <TitleContainer>
      <Title variant="secondary" size="l">
        FRONT-END DEVELOPER
      </Title>
      <Title variant="secondary" size="l">
        {myName} 입니다.
      </Title>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  margin: 2rem 0;

  & h1:first-of-type {
    margin-bottom: 1rem;
  }
`;
