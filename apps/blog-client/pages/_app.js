import GlobalStyle from "../components/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import { useTheme } from "@/hooks/useTheme";

export default function App({ Component, pageProps }) {
  const { theme } = useTheme();
  console.log(pageProps);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
