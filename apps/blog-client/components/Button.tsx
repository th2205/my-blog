/** @jsxImportSource @emotion/react */
import { css, useTheme, Theme as EmotionTheme } from "@emotion/react";
import Loader from "@/components/Loader";
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
  const emotionTheme = useTheme();

  return (
    <button
      css={[
        base,
        themes(emotionTheme)[theme],
        sizes[size],
        isLoading && loading(emotionTheme),
      ]}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

const base = css`
  display: block;
  border: 0;
  height: 2.5rem;
  border-radius: 8px;
  cursor: pointer;
`;

const themes = (emotionTheme: EmotionTheme) => ({
  primary: css`
    background-color: ${emotionTheme.colors.primary};
    color: ${emotionTheme.colors.white};
  `,
  secondary: css`
    background-color: ${emotionTheme.colors.secondary};
    color: ${emotionTheme.colors.fontColor};
    border: 1px solid #333;
  `,
  tertiary: css`
    background-color: rgb(28, 31, 38);
    color: ${emotionTheme.colors.white};
    border: 1px solid #333;
  `,
});

const sizes = {
  auto: css`
    width: 100%;
  `,
  s: css`
    width: 5rem;
  `,
};

const loading = (emotionTheme: EmotionTheme) => css`
  background-image: none;
  background-color: ${emotionTheme.colors.gray};
  opacity: 0.6;
  color: ${emotionTheme.colors.white};
  transition: all, 0.2s;
  cursor: wait;
  display: flex;
  justify-content: center;
  align-items: center;
`;
