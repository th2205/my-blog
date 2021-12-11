import ResumeLayout from "../components/ResumeLayout";
import Heading from "../components/Heading";
import Text from "../components/Text";
import Box from "../components/Box";

export default function Resume() {
  return (
    <ResumeLayout>
      <Box size="m">
        <Heading as="h1" theme="resume">
          안녕하세요.
        </Heading>
        <Heading as="h1" theme="resume">
          Front-End Developer 임태현입니다.
        </Heading>
      </Box>
      <Box>
        <a href="https://google.com">ss</a>
      </Box>
      <Box>
        <Text>
          자바스크립트를 이용한 프로젝트 설계부터 배포까지의 경험을 가지고
          있으며, 사용자와의 인터렉션과 경험을 담당하는 역동적인 프론트엔드
          생태계를 좋아하고 다양한 환경에 반응하도록 UI/UX 를 구현하려
          노력합니다. 또한 프론트엔드, 백엔드, 인프라까지 웹 개발 전반적인
          지식에 관심이 많습니다. 협업을 좋아하고 협업 또는 공부를 통해
          발전해가는 과정을 즐깁니다.
        </Text>
      </Box>
    </ResumeLayout>
  );
}
