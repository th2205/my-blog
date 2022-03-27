import styled from "@emotion/styled";
import { TiDocumentText, TiPencil } from "react-icons/ti";
import { useRouter } from "next/router";

interface SideBarProps {
  isOpen?: boolean;
}

const ICON_SIZE = 20;

export default function SideBar({ isOpen = true }: SideBarProps) {
  const { pathname } = useRouter();

  return (
    <SideBarContainer>
      <List>
        <ListItem isSelected={pathname === "/admin/list"}>
          <TiDocumentText size={ICON_SIZE} />
          <ListText>글목록</ListText>
        </ListItem>
        <ListItem isSelected={pathname === "/admin/write"}>
          <TiPencil size={ICON_SIZE} />
          <ListText>글쓰기</ListText>
        </ListItem>
        <ListItem isSelected={pathname === "/admin/"}>
          <TiDocumentText size={ICON_SIZE} />
          <ListText>임시저장</ListText>
        </ListItem>
        <ListItem isSelected={pathname === "/admin/resume"}>
          <TiDocumentText size={ICON_SIZE} />
          <ListText>이력서</ListText>
        </ListItem>
      </List>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.aside`
  width: 13rem;
  height: 100%;
  background-color: #475dd1;
  position: fixed !important;
  z-index: 1;
  overflow: hidden;
`;

const List = styled.ul`
  padding: 2rem 0 0 0;
  text-align: center;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  font-weight: 300;
  padding: 0.3rem 0;
  transition: all 0.2s;
  font-size: 0.8rem;
  background: ${(props: { isSelected: boolean }) =>
    props.isSelected && "rgba(0, 0, 0, 0.2)"};

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border: 3px;
  }
`;

const ListText = styled.p`
  margin-left: 0.5rem;
`;
