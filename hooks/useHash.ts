import { useEffect, useState } from "react";

export function useHash() {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const onHashchange = () => {
      const hash = location.hash;

      setCurrentHash(hash);
    };

    window.addEventListener("hashchange", () => onHashchange(), false);

    return window.removeEventListener("hashchange", onHashchange);
  }, []);

  return currentHash;
}
