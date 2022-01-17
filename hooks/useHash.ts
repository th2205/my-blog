import { useEffect, useState } from "react";

export function useHash() {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const onHashchange = (e: HashChangeEvent) => {
      const hash = location.hash;

      setCurrentHash(hash);
    };

    window.addEventListener("hashchange", (e) => onHashchange(e), false);

    return window.removeEventListener("hashchange", onHashchange);
  }, []);

  return currentHash;
}
