import ResumeLayout from "../components/ResumeLayout";
import Heading from "../components/Heading";
import Text from "../components/Text";
import Section from "../components/Section";
import Link from "../components/Link";
import Header from "../components/PlainHeader";
import Flex from "../components/Flex";
import myData from "../data/myData";

export default function Resume() {
  return (
    <ResumeLayout>
      <Header size="m">
        <Heading as="h1" theme="secondary">
          FRONT-END DEVELOPER
        </Heading>
        <Heading as="h1" theme="secondary">
          {`${myData.name} 입니다.`}
        </Heading>
      </Header>
      <main>
        <Section>
          <div>
            <Text as="span">Github : </Text>
            <Link targetBlank href="https://google.com" theme="secondary">
              {myData.git}
            </Link>
          </div>
          <div>
            <Text as="span">Email : </Text>
            <Text as="span">{myData.email}</Text>
          </div>
          <div>
            <Text as="span">Phone: </Text>
            <Text as="span">{myData.phone}</Text>
          </div>
        </Section>
        <Section>
          <Text>{myData.about}</Text>
        </Section>
        <Section>
          <Section>
            <Heading as="h1">주요 업무 경력</Heading>
          </Section>
          {myData.companies.map((company, index) => (
            <div key={index}>
              <Flex>
                <div>
                  <Heading as="h2" theme="secondary">
                    {company.name}
                  </Heading>
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
        </Section>
        <Section size="l">
          <Heading as="h1">주요 업무 경력 상세</Heading>
          {myData.companies.map((company, index) => (
            <Section key={index}>
              <Heading as="h2" theme="secondary">
                {company.name}
              </Heading>
              {company.pjojects.map((project, index) => (
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
                    <Text key={index} theme="tertiary">
                      {task}
                    </Text>
                  ))}
                </Section>
              ))}
            </Section>
          ))}
        </Section>
        <Section>
          <Heading as="h1">교육</Heading>
          {myData.educations.map((education, index) => (
            <Section key={index}>
              <Heading as="h2" theme="secondary">
                {education.name}
              </Heading>
              <Section>
                <Text>{education.description}</Text>
              </Section>
              {education.tasks.map((task, index) => (
                <Text key={index} theme="tertiary">
                  {task}
                </Text>
              ))}
            </Section>
          ))}
        </Section>
      </main>
    </ResumeLayout>
  );
}
