import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Main = ({ children }: LayoutProps) => {
  return (
    <Box as="main">
      <Navbar />
      <Container
        py="0px"
        px="0px"
        maxW="100%"
        h="100%"
        bg={useColorModeValue("#fafafa", "#111111")}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Main;
