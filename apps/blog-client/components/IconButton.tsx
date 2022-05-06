/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface IconButton {
  children: ReactNode;
  onClick?: () => void;
}

export default function IconButton({ children, onClick }: IconButton) {
  return (
    <button
      css={css`
        width: 100%;
        background: transparent;
        border: 0;
        cursor: pointer;
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
