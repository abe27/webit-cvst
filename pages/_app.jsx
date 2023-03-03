import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Noto_Sans_Thai } from "@next/font/google";
const fonts = Noto_Sans_Thai({ subsets: ["thai"] });

const MyApp = ({ Component, pageProps }) => {
  return (
    <section className={fonts.className}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </section>
  );
};

export default MyApp;
