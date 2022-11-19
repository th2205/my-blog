import { useComment } from "@/hooks/useComment";

export default function Comment() {
  const commentRef = useComment();

  return <div ref={commentRef} className="w-full mt-10 mb-10"></div>;
}
