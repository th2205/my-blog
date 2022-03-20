import { useEffect, useRef } from "react";

export function useComment() {
  const commentRef = useRef(null);
  const ATTR_INFO = {
    SRC: "https://utteranc.es/client.js",
    REPO: "th2205/my-blog",
    ISSUE_TERM: "pathname",
    THEME: {
      DARK: "github-dark",
      LIGHT: "github-light",
    },
    CROSSORIGIN: "anonymous",
    ASYNC: "true",
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.setAttribute("src", ATTR_INFO.SRC);
    script.setAttribute("repo", ATTR_INFO.REPO);
    script.setAttribute("issue-term", ATTR_INFO.ISSUE_TERM);
    script.setAttribute("theme", ATTR_INFO.THEME.LIGHT);
    script.setAttribute("crossorigin", ATTR_INFO.CROSSORIGIN);
    script.setAttribute("async", ATTR_INFO.ASYNC);
    commentRef.current.appendChild(script);
  }, []);

  return commentRef;
}
