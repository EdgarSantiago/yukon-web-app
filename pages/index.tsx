import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layouts/layout";
import TriangleComponent from "../components/Triangle";

export default function Home() {
  return (
    <Layout title="Home">
      <Box h="100vh" textAlign={"center"}>
        {/*<TriangleComponent />*/}
      </Box>
    </Layout>
  );
}
