import { css, Global } from "@emotion/react";
import reset from "emotion-reset";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${reset}
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Noto Sans KR", "Roboto", -apple-system, BlinkMacSystemFont,
          Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
        font-size: 16px;

        @media (max-width: 767px) {
          * {
            font-size: 16px;
          }
        }
      `}
    />
  );
}
