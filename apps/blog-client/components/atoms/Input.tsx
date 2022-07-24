/** @jsxImportSource @emotion/react */
import { ChangeEvent } from "react";
import { css, useTheme } from "@emotion/react";

interface InputProps {
  value: string;
  label?: string;
  error?: string;
  type?: "text" | "password";
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  value,
  error,
  label,
  type = "text",
  placeholder,
  onChange,
}: InputProps) {
  const emotionTheme = useTheme();

  return (
    <div css={container}>
      <input
        css={input}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p css={errorStyle}>{error}</p>
    </div>
  );
}

const container = css`
  width: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
  border-radius: 8px;
  padding: 0.2rem 1rem;
  transition: 0.2s;

  &:hover {
    box-shadow: inset 0 0 0 1.5px #90c2ff;
  }

  &:focus-within {
    box-shadow: inset 0 0 0 1.5px #3182f6;
  }
`;

const input = css`
  width: 100%;
  height: 2rem;
  border: 0;
  background-color: transparent;
  outline: none;
`;

const errorStyle = css`
  color: red;
`;
