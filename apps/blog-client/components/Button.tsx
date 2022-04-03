import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Loader from "@/components/Loader";
import colors from "@/styles/colors";

interface ButtonProps {
  label: string;
  theme?: "primary";
  size?: "auto";
  isLoading?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  label,
  theme = "primary",
  size = "auto",
  isLoading = false,
  type = "button",
}: ButtonProps) {
  return (
    <CustomButton
      label={label}
      theme={theme}
      size={size}
      isLoading={isLoading}
      type={type}
    >
      {isLoading && <Loader size={70} />}
      {!isLoading && label}
    </CustomButton>
  );
}

const CustomButton = styled.button<ButtonProps>`
  border: 0;
  height: 2.5rem;
  border-radius: 8px;
  cursor: pointer;

  ${({ theme }) => themes[theme]}
  ${({ size }) => sizes[size]}
  ${({ isLoading }) => isLoading && stats.loading}
`;

const themes = {
  primary: css`
    background-image: linear-gradient(
      to right,
      rgb(119, 161, 211) 0%,
      rgb(121, 203, 202) 51%,
      rgb(119, 161, 211) 100%
    );
    color: ${colors.white};
  `,
};

const sizes = {
  auto: css`
    width: 100%;
  `,
};

const stats = {
  loading: css`
    background-image: none;
    background-color: gray;
    opacity: 0.6;
    color: ${colors.white};
    transition: all, 0.2s;
    cursor: wait;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
