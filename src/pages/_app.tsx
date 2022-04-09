import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Wrapper } from "../components/Wrapper";

import { ParamsProvider } from "../context/ParamsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <ParamsProvider>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ParamsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
