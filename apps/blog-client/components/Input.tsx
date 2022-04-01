import { ChangeEvent } from "react";
import styled from "@emotion/styled";
import colors from "../styles/colors";

interface InputProps {
  value: string;
  label: string;
  error?: string;
  type?: "text" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  value,
  error,
  label,
  type = "text",
  onChange,
}: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <CustomInput value={value} type={type} onChange={onChange} />
      <Error>{error}</Error>
    </Container>
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
