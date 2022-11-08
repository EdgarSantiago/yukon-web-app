import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layouts/layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Box
        backgroundImage="url('/image.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="100% 100%"
        h="100vh"
        textAlign={"center"}
      ></Box>
    </Layout>
  );
}
