import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layouts/layout";
import TriangleComponent from "../components/Triangle";

export default function Home() {
  return (
    <Layout title="|">
      <Box h="100vh" display={"flex"} textAlign={"center"} position="relative">
        {/*<TriangleComponent />*/}
        <Box alignSelf="end" position="absolute" bottom="10%" px="10%">
          <Heading fontSize="lg">
            Id irure irure et reprehenderit esse ea laboris voluptate incididunt
            quis sint fugiat. Lorem adipisicing esse esse anim nostrud occaecat
            quis. Eu non non pariatur est veniam veniam dolore pariatur.
          </Heading>
        </Box>
      </Box>
    </Layout>
  );
}
