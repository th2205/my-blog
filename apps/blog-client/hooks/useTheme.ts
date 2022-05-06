import { useState } from "react";

const WHITE = {
  colors: {
    primary: "#3182f6",
    secondary: "rgb(207, 214, 230)",
    backgroundColor: "#ffffff",
    fontColor: "#333",
    gray: "rgb(78, 89, 104)",
    white: "#ffffff",
  },
};

const DARK = {
  primary: "",
  secondary: "",
  backgroundColor: "",
  fontColor: "",
  gray: "rgb(78, 89, 104)",
};

export function useTheme() {
  const [theme, setTheme] = useState(WHITE);

  // const toggle = () => setTheme();

  return { theme };
}
