import { css } from "@emotion/react";

interface Props {
  name: string;
}

const COLORS = {
  JS: "#277BC0",
  CSS: "#554994",
  BROWSER: "#D36B00",
};

export default function Tag({ name }: Props) {
  const uppercaseName = name.toUpperCase();

  return <p css={tagStyle(uppercaseName)}>{uppercaseName}</p>;
}

const tagStyle = (name: string) => css`
  display: inline-block;
  color: ${COLORS[name]};
  font-weight: bolder;
`;
