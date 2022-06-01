import GlobalStyle from "../components/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import { useTheme } from "@/hooks/useTheme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
