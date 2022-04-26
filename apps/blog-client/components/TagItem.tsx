import styled from "@emotion/styled";

interface TagItemProps {
  tag?: string;
  count?: number;
  isMatched: boolean;
}

export default function TagItem({ tag, count, isMatched }: TagItemProps) {
  return (
    <Tag href={tag || "/"} isMatched={isMatched}>
      {tag ? `${tag} (${count})` : `All (${count})`}
    </Tag>
  );
}

const Tag = styled.a<TagItemProps>`
  background-color: #bcbbc0;
  color: #ffffff;
  text-decoration: none;
  margin-left: 0.5rem;
  padding: 0.1rem 0.4rem 0.3rem 0.4rem;
  border-radius: 5px;
  font-size: 0.8rem;
  display: inline-block;

  ${({ isMatched }) => isMatched && "background-color: #28293d"}
`;
