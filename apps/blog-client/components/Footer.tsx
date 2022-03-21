import Link from "./Link";
import { AiFillGithub } from "react-icons/ai";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={style["footer"]}>
      <ul className={style["footer_icon-list"]}>
        <li>
          <Link href="https://github.com/th2205" targetBlank>
            <AiFillGithub size={30} color="#abacb8" />
          </Link>
        </li>
      </ul>
      <p className={style["footer_copyright"]}>
        Copyright ⓒ 2020 taehyeon All Rights Reserved.
      </p>
    </div>
  );
}
