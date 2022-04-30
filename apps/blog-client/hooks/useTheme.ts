import { useState } from "react";

const WHITE = {
  colors: {
    primary: "#3182f6",
    secondary: "",
    backgroundColor: "#ffffff",
    fontColor: "",
    gray: "rgb(78, 89, 104);",
    white: "#ffffff",
  },
};

const DARK = {
  primary: "",
  secondary: "",
  backgroundColor: "",
  fontColor: "",
  gray: "rgb(78, 89, 104);",
};

export function useTheme() {
  const [theme, setTheme] = useState(WHITE);

  //   const toggle = () => setColors();

  return { theme };
}
