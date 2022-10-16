import Section from "@/components/Section";
import Heading from "@/components/common/Heading";
import Flex from "@/components/Flex";
import Link from "@/components/common/Link";
import Text from "@/components/Text";
import styled from "@emotion/styled";

import type { Company } from "@/types/myData";

interface Props {
  companies: Company[];
}

export function WorkExperience({ companies }: Props) {
  return (
    <div>
      <HeadingContainer>
        <Heading as="h1">주요 업무 경력</Heading>
      </HeadingContainer>
      {companies.map((company, index) => (
        <div key={index}>
          <Flex>
            <div>
              <Link href={company.link} theme="secondary" targetBlank>
                <Heading as="h2" theme="secondary">
                  {company.name}
                </Heading>
              </Link>
            </div>
            <div>
              <Text>{`${company.startDt} ~ ${company.endDt}`}</Text>
            </div>
          </Flex>
          <Section>
            <Text>{company.description}</Text>
            <Text>{company.role}</Text>
          </Section>
        </div>
      ))}
    </div>
  );
}

const HeadingContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
`;
