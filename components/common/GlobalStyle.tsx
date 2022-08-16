import { Global, css } from "@emotion/react";

export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    box-sizing: border-box;
    font-family: "Noto Sans KR", "Roboto", -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @media (max-width: 767px) {
    * {
      font-size: 14px;
    }
  }
`;
