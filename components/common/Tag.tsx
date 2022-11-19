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
  /* color: ${COLOR[name]}; */
  color: #8b95a1;
  font-weight: 400;
  border-radius: 15px;
  font-size: 0.8rem;
  ${isSelected && `border: 2px solid ${COLOR[name]}`};
`;
