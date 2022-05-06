/** @jsxImportSource @emotion/react */
import { ChangeEvent } from "react";
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import colors from "../styles/colors";

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
    <div
      css={css`
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
      `}
    >
      <input
        css={css`
          width: 100%;
          height: 2rem;
          border: 0;
          background-color: transparent;
          outline: none;

          &:focus {
            border: red;
          }
        `}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Error>{error}</Error>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  color: ${colors.white};
  margin: 0 0 0.5rem 0;
`;

const CustomInput = styled.input`
  width: 100%;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid ${colors.white};
  color: ${colors.white};
  outline: none;

  &:focus {
    border-bottom: 1px solid #00a5ff;
  }
`;

const Error = styled.p`
  color: ${colors.error};
`;
