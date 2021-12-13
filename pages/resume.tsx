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
          Front-End Developer
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
          {myData.companies.map((company) => (
            <>
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
            </>
          ))}
        </Section>
        <Section size="l">
          <Heading as="h1">주요 업무 경력 상세</Heading>
          {myData.companies.map((company) => (
            <Section>
              <Heading as="h2" theme="secondary">
                {company.name}
              </Heading>
              {company.pjojects.map((project) => (
                <Section>
                  <Heading as="h2">{project.name}</Heading>
                  <Section>
                    <Text>{project.description}</Text>
                  </Section>
                  {project.tasks.map((task) => (
                    <Text theme="tertiary">{task}</Text>
                  ))}
                </Section>
              ))}
            </Section>
          ))}

          {/* <Heading as="h2">Web Viewer</Heading>
          <Section>
            <Text>PC 원격제어 뷰어 웹앱</Text>
          </Section>
          <Section size="s">
            <Text theme="secondary">
              - Remote View 레거시 시스템 유지 보수, 기능 개발
            </Text>
            <Text theme="secondary">
              - 데이터에 의한 뷰 컨트롤을 위해 Observer Pattern 도입.
            </Text>
            <Text theme="secondary">
              - Url Scheme 를 이용한 응용프로그램 실행.
            </Text>
          </Section>
          <Header>
            <Heading as="h2">Remote View Simple Mode</Heading>
          </Header>
          <Section>
            <Text>Remote View 를 간단하게 사용 할 수 있는 웹앱</Text>
          </Section>
          <Section size="s">
            <Text theme="secondary">
              - Remote View 레거시 시스템 유지 보수, 기능 개발
            </Text>
            <Text theme="secondary">
              - 데이터에 의한 뷰 컨트롤을 위해 Observer Pattern 도입.
            </Text>
            <Text theme="secondary">
              - Url Scheme 를 이용한 응용프로그램 실행.
            </Text>
          </Section>
          <Header>
            <Heading as="h2">RVBox</Heading>
          </Header>
          <Section>
            <Text>
              응용프로그램의 역할을 대신해주는 하드웨어 RVBox 설정, 관리 웹앱
            </Text>
          </Section>
          <Section size="s">
            <Text theme="secondary">
              - Remote View 레거시 시스템 유지 보수, 기능 개발
            </Text>
            <Text theme="secondary">
              - 데이터에 의한 뷰 컨트롤을 위해 Observer Pattern 도입.
            </Text>
            <Text theme="secondary">
              - Url Scheme 를 이용한 응용프로그램 실행.
            </Text>
          </Section>
          <Header>
            <Heading as="h2">Remote View 챗봇</Heading>
          </Header>
          <Section>
            <Text>Remote View 챗봇</Text>
          </Section>
          <Section size="s">
            <Text theme="secondary">
              - Remote View 레거시 시스템 유지 보수, 기능 개발
            </Text>
            <Text theme="secondary">
              - 데이터에 의한 뷰 컨트롤을 위해 Observer Pattern 도입.
            </Text>
            <Text theme="secondary">
              - Url Scheme 를 이용한 응용프로그램 실행.
            </Text>
          </Section> */}
        </Section>
        <Section>
          <Heading as="h1">교육</Heading>
        </Section>
      </main>
    </ResumeLayout>
  );
}
