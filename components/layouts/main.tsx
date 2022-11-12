import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import EnterPage from "../EnterPage";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}

const Main = ({ children }: LayoutProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const Router = useRouter();
  console.log(Router.pathname);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);
  return (
    <Box as="main" position="relative">
      {/*<Loading isVisible={isLoaded} />*/}
      <Container py="0px" px="0px" maxW="100%" h="100%">
        {Router.pathname === "/" ? <Navbar /> : null}
        {children}
      </Container>
    </Box>
  );
};

export default Main;
