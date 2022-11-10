// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Fonts from "../components/Fonts";
import Main from "../components/layouts/main";
import theme from "../lib/theme";
import "../styles/global.css";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
