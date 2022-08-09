import { useState } from "react";

const lightTheme = {
  backgroundColor: "#ffffff",
};

const datkTheme = {
  backgroundColor: "red",
};

export function useTheme() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () =>
    setTheme(theme === lightTheme ? datkTheme : lightTheme);

  return { theme, toggleTheme };
}
