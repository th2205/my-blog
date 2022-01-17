import style from "./TagItem.module.scss";
import cn from "classnames";

interface TagItemProps {
  tag: string;
  count: number;
}

export default function TagItem({ tag, count }: TagItemProps) {
  const classes = cn(style["ui-tag-item"]);

  return (
    <a href={tag} className={classes}>
      {`${tag} (${count})`}
    </a>
  );
}
