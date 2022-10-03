import Section from "@/components/Section";
import Heading from "@/components/common/Heading";
import Link from "@/components/Link";
import Text from "@/components/Text";
import styled from "@emotion/styled";

import type { Education } from "@/types/myData";

interface Props {
  educations: Education[];
}

export function Education({ educations }: Props) {
  return (
    <Container>
      <Heading as="h1">교육</Heading>
      {educations.map((education, index) => (
        <Section key={index}>
          <Link href={education.link} targetBlank theme="secondary">
            <Heading as="h2" theme="secondary">
              {education.name}
            </Heading>
          </Link>
          <Section>
            <Text>{education.description}</Text>
          </Section>
          {education.tasks.map((task, index) => (
            <Section size="xxs">
              <Text key={index} theme="tertiary">
                {task}
              </Text>
            </Section>
          ))}
        </Section>
      ))}
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 2rem 0;
`;
