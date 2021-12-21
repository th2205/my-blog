export default {
  name: "임태현",
  git: "https://github.com/th2205",
  email: "th05662205@gmail.com",
  about:
    "사용자와의 인터렉션과 경험을 담당하는 프론트엔드 생태계를 좋아하고 다양한 환경에 반응하도록 UI/UX 를 구현하려 노력합니다. 사용자의 입장에서 사용자 경험을 향상 시키기 위해 노력하고 단순히 제품을 만드는 개발자라기 보단 제품을 사용하는 사용자이자 제품을 만드는 구성원으로써 동료들과 커뮤니케이션하며 제품을 발전시키려 노력합니다.",
  phone: "010-9943-3734",
  companies: [
    {
      name: "알서포트",
      description: "아시아 1위 원격제어 서비스 기업",
      role: "프론트 개발자",
      startDt: "2020.07",
      endDt: "현재",
      pjojects: [
        {
          name: "Remote View",
          skills: ["Javascript", "CSS", "HTML", "jQuery"],
          period: "2020.07 ~ ",
          description: "다수의 PC/모바일 화면 제어를 위한 원격 제어 서비스",
          tasks: [
            "Remote View 레거시 시스템(JSP)에서 html, css, js 를 이용한 마크업과 유지보수, 기능 추가를 담당하였습니다.",
            "데이터에 의한 뷰 컨트롤을 위해 Pub/Sub Pattern 을 이용한 라이브러리를 만들어 일부 페이지에 적용했습니다. 이를 통해 기존 명령형 프로그래밍 방식에서 선언형 프로그래밍으로의 개발이 가능해졌습니다.",
            "기존 응용 프로그램 호출 방식을 URL Scheme 를 이용한 호출 방식으로 변경하였습니다. 이를 통해 브라우저에서 응용프로그램을 더 효율적으로 호출 할 수 있었습니다.",
            "URL Scheme 를 이용해 원격제어(웹 뷰어) 실행 전 ip/mac address 체크 기능을 개발하였습니다.",
          ],
        },
        {
          name: "Web Viewer",
          skills: [
            "Javascript",
            "Typescript",
            "SCSS",
            "React",
            "Context",
            "MQTT",
            "Socket",
            "Storybook",
            "Webpack",
          ],
          period: "2021.03 ~ ",
          description: "브라우저 기반의 PC 원격제어 웹앱",
          tasks: [
            "웹뷰어를 구성하는 3개의 모듈(로그인 모듈, 제어 모듈, UI모듈)을 담당하였습니다.",
            "MQTT 프로토콜, Pub/Sub Pattern을 이용한 응용프로그램과의 통신으로 실시간 원격제어를 구현하였습니다.(제어 모듈)",
            "Socket 을 이용해 실시간 영상 스트리밍을 구현하였습니다.",
            "웹뷰어의 기존 컴포넌트를 분리하고 공통 컴포넌트를 만들어 개선하였습니다.",
            "bem 설계 방법론에 따라 스타일을 작업했습니다. bem 설계를 적용 후 클래스명을 보다 직관적으로 작성 할 수 있었고 수정과 기능 추가를 쉽게 할 수 있었습니다.",
          ],
        },
        {
          name: "Remote View Simple Mode",
          skills: [
            "Typescript",
            "React",
            "Redux Toolkit",
            "Emotion",
            "MQTT",
            "Webpack",
          ],
          period: "2020.07 ~ ",
          description: "기존 Remote View 를 간단하게 사용 할 수 있는 웹앱",
          tasks: [
            "레거시 리액트 코드(class component) 를 유지보수하고 기능을 추가하였습니다.",
            "심플 모드의 레거시 코드(javascript, scss, react, parcel)를 Typescript, Emotion, Weppack, storybook 을 이용해 마이그레이션 하였습니다. (기간 : 2020.04 ~ 2020.06)",
            "webpack 을 이용한 개발 환경 설정부터 서버 배포까지 모든 개발 과정을 담당하였습니다.",
          ],
        },
        {
          name: "Remote View Chatbot",
          skills: ["Typescript", "SCSS", "React", "Webpack"],
          period: "2020.10 ~ 2020.12",
          description: "Remote View 챗봇",
          tasks: [
            "코로나 이후 점점 많아지는 고객 문의를 대응하기 위해 리모트 뷰 챗봇을 프로젝트에 참여하게 되었습니다. 챗봇을 통해 유선 문의를 약 20% 줄일 수 있었습니다.",
            "webpack 을 이용한 개발 환경 설정부터 서버 배포까지 모든 개발 과정을 담당하였습니다.",
            "bem 설계 방법론에 따라 스타일을 작업했습니다. bem 설계를 적용 후 클래스 명을 보다 직관적으로 작성 할 수 있었고 수정과 기능 추가를 쉽게 할 수 있었습니다",
          ],
        },
        // {
        //   name: "RV Box",
        //   description:
        //     "응용프로그램의 역할을 대신해주는 하드웨어 RV Box 의 설정, 관리 웹앱",
        //   skills: ["Typescript", "React", "Recoil", "Emotion", "Webpack"],
        //   period: "2021.12 ~ 2021.02",
        //   tasks: [
        //     "RV Box 의 설정 및 관리 웹앱을 개발환경 설정 부터 배포까지 담당 하였습니다.",
        //     "webpack 을 이용한 개발 환경 설정부터 서버 배포까지 모든 개발 과정을 담당하였습니다.",
        //     "코드 스플리팅을 통해 초기 자바스크립트 로딩 시간을 줄일 수 있었습니다.",
        //     "리코일을 이용해 상태관리를 하였습니다.",
        //   ],
        // },
      ],
    },
  ],
  educations: [
    {
      name: "Vanilla Coding",
      description: "코딩 부트캠프",
      tasks: [
        "Computer Science (data structure, algorithm).",
        "Frontend Engineering (React, React Hooks, React Router, Flux/Redux, Component Driven Development).",
        "Backend Engineering (Node, Express, SQL vs NoSQL, Database Modeling, MongoDB).",
      ],
    },
    {
      name: "순천향대학교",
      description: "대학교",
      tasks: ["전자물리학과 졸업."],
    },
  ],
};
