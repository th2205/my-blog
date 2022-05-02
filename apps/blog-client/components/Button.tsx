import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Loader from "@/components/Loader";
import colors from "@/styles/colors";
import { Theme } from "@/types/index";

interface ButtonProps {
  label: string;
  theme?: Theme;
  size?: "auto" | "s";
  isLoading?: boolean;
  type?: "button" | "submit";
  onClick?: (e: any) => void;
}

export default function Button({
  label,
  theme = "primary",
  size = "auto",
  isLoading = false,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <CustomButton
      label={label}
      theme={theme}
      size={size}
      isLoading={isLoading}
      type={type}
      onClick={onClick}
    >
      {isLoading && <Loader size={70} />}
      {!isLoading && label}
    </CustomButton>
  );
}

const CustomButton = styled.button<ButtonProps>`
  display: block;
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
    background-color: blue;
    color: white;
  `,
  secondary: css`
    background-color: rgb(207, 214, 230);
    color: #333;
    border: 1px solid #333;
  `,
  tertiary: css`
    background-color: rgb(28, 31, 38);
    color: white;
    border: 1px solid #333;
  `,
};

const sizes = {
  auto: css`
    width: 100%;
  `,
  s: css`
    width: 5rem;
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
