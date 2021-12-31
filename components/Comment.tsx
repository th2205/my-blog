import { useEffect, useRef } from "react";

export default function Comment() {
  const commentRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("repo", "th2205/my-blog");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light"); // or "github-dark"
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "true");
    commentRef.current.appendChild(script);
  }, []);

  return <div ref={commentRef}></div>;
}
