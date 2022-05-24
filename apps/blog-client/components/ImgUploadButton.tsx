/** @jsxImportSource @emotion/react */
import { InputChangeEvent } from "@/types/event";
import { css, Theme, useTheme } from "@emotion/react";

interface ImgUploadButtonProps {
  label: string;
  previewUrl: string;
  onChange: (e: InputChangeEvent) => void;
}

export default function ImgUploadButton({
  label,
  previewUrl,
  onChange,
}: ImgUploadButtonProps) {
  const emotionTheme = useTheme();

  return (
    <>
      <label htmlFor="file-input" css={labelStyle(emotionTheme)}>
        {label}
        <input
          id="file-input"
          type="file"
          css={inputStyle}
          onChange={onChange}
        />
      </label>
      {previewUrl && <img src={previewUrl} css={preview} />}
    </>
  );
}

const labelStyle = (emotionTheme: Theme) => css`
  display: block;
  width: 5rem;
  cursor: pointer;
  color: ${emotionTheme.colors.white};
  background-color: ${emotionTheme.colors.secondary};
  border: 0;
  border-radius: 8px;
  padding: 0.8rem 1rem;
`;

const inputStyle = css`
  display: none;
`;

const preview = css`
  margin-top: 1rem;
  width: 20rem;
`;
