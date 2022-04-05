import SideBar from "@/components/SideBar";
import styled from "@emotion/styled";

export default function ContentsList() {
  return (
    <Main>
      <SideBar />
    </Main>
  );
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;
