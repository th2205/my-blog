import Link from "./Link";
import { AiFillGithub } from "react-icons/ai";
import style from "./Footer.module.scss";
import styled from "@emotion/styled";

export default function Footer() {
  return (
    <Container>
      <IconList>
        <li>
          <Link href="https://github.com/th2205" targetBlank>
            <AiFillGithub size={30} color="#abacb8" />
          </Link>
        </li>
      </IconList>
      <Copyright>Copyright ⓒ 2020 taehyeon All Rights Reserved.</Copyright>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #abacb8;
`;

const IconList = styled.div`
  width: 100%;
  text-align: center;
  padding: 1.5rem 0 0.5rem 0;
`;
const Copyright = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 1.5rem;
`;
