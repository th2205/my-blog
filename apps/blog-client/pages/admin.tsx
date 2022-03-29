import { useEffect } from "react";

export default function Admin() {
  useEffect(() => {
    (async () => {
      await fetch("http://localhost:8080/api/");
    })();
  }, []);
  return <div>admin</div>;
}
