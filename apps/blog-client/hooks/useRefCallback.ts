import { useCallback, useRef, useState } from "react";

export default function useRefCallback(): [HTMLElement, (node: any) => void] {
  const [targetEl, setTargetEl] = useState<HTMLElement | null>(null);
  const setRef = useCallback((node) => {
    if (node) {
      setTargetEl(node);
    }
  }, []);

  return [targetEl, setRef];
}
