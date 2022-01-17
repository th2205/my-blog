import { useEffect, useState } from "react";

export function useHash() {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const onHashchange = (e: HashChangeEvent) => {
      const hash = location.hash;
      console.log(hash);
      setCurrentHash(hash);
      console.log(11);
      alert(11);
    };

    window.addEventListener("hashchange", (e) => onHashchange(e), false);

    return window.removeEventListener("hashchange", onHashchange);
  }, []);

  return currentHash;
}
