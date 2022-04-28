import GlobalStyle from "../components/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
