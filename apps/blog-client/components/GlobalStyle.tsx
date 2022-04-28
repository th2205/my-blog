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
        font-family: "Noto Sans KR", sans-serif;
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
