import { useComment } from "../hooks/useComment";
import cn from "classnames";
import style from "./Comment.module.scss";

export default function Comment() {
  const commentRef = useComment();
  const classes = cn(style["comment-layout"]);

  return <div ref={commentRef} className={classes}></div>;
}
