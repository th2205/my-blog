import style from "./TagItem.module.scss";
import cn from "classnames";

interface TagItemProps {
  tag?: string;
  count: number;
  isMatched: boolean;
}

export default function TagItem({ tag, count, isMatched }: TagItemProps) {
  const classes = cn(style["ui-tag-item"], {
    [style["ui-tag-item--active"]]: isMatched,
  });

  return (
    <a href={tag || "/"} className={classes}>
      {tag ? `${tag} (${count})` : `All (${count})`}
    </a>
  );
}
