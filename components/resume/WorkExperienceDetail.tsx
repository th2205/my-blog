import Heading from "@/components/common/Heading";
import Section from "@/components/Section";
import Text from "@/components/Text";
import styled from "@emotion/styled";

import type { Company } from "@/types/myData";

interface Props {
  companies: Company[];
}

export function WorkExperienceDetail({ companies }: Props) {
  return (
    <Container>
      <Heading as="h1">주요 업무 경력 상세</Heading>
      {companies.map((company, index) => (
        <Section key={index}>
          <Heading as="h2" theme="secondary">
            {company.name}
          </Heading>
          {company.projects.map((project, index) => (
            <Section key={index}>
              <Heading as="h2">{project.name}</Heading>
              <Section>
                <div>
                  <Text as="span">소개 : </Text>
                  <Text as="span">{project.description}</Text>
                </div>
                <div>
                  <Text as="span">기술 : </Text>
                  {project.skills.map((skill, index) => {
                    if (project.skills.length - 1 === index) {
                      return (
                        <Text key={index} as="span">
                          {skill}
                        </Text>
                      );
                    }

                    return (
                      <Text key={index} as="span">
                        {`${skill}, `}
                      </Text>
                    );
                  })}
                </div>
                <div>
                  <Text as="span">기간 : </Text>
                  <Text as="span">{project.period}</Text>
                </div>
              </Section>
              {project.tasks.map((task, index) => (
                <Section size="xxs">
                  <Text key={index} theme="tertiary">
                    {task}
                  </Text>
                </Section>
              ))}
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
