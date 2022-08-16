import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";
import "../styles/global.scss";
import GlobalStyle from "../components/common/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
