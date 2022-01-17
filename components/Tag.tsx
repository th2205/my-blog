import style from "./Tag.module.scss";
import cn from "classnames";
import Link from "./Link";
import TagItem from "./TagItem";

interface TagProps {
  tags: {
    [x: string]: number;
  };
}

export default function Tag({ tags }: TagProps) {
  const layoutClasses = cn(style["ui-tag-layout"]);

  return (
    <div className={layoutClasses}>
      {Object.entries(tags).map((tag) => {
        const [tagName, count] = tag;

        return <TagItem tag={tagName} count={count} />;
      })}
    </div>
  );
}
