import GlobalStyle from "../components/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import { useTheme } from "@/hooks/useTheme";

export default function App({ Component, pageProps }) {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
