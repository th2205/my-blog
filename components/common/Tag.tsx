import { css } from "@emotion/react";

/**
 * 카테고리 이름
 */
type CategoryName = string;

interface Props {
  name: CategoryName;
  isSelected?: boolean;
}

const COLOR = {
  JS: "#277BC0",
  CSS: "#554994",
  BROWSER: "#D36B00",
};

export default function Tag({ name, isSelected }: Props) {
  const uppercaseName = name.toUpperCase();

  return (
    <p css={tagStyle({ name: uppercaseName, isSelected })}>{uppercaseName}</p>
  );
}

const tagStyle = ({ name, isSelected }: Props) => css`
  display: inline-block;
  color: ${COLOR[name]};
  font-weight: bolder;
  padding: 0.4rem;
  border-radius: 15px;
  ${isSelected && `border: 2px solid ${COLOR[name]}`}
`;
