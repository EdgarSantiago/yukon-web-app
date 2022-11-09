import { Box, Fade, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layouts/layout";
import TriangleComponent from "../components/Triangle";

export default function Home() {
  return (
      <Box h="100vh" display={"flex"} textAlign={"center"} position="relative">
        <TriangleComponent />
            <Box alignSelf="center" position="absolute" bottom="10%" px="10%">
              <Heading fontSize="lg" fontWeight={"thin"}>
                We're at the core.
              </Heading>
            </Box>
      </Box>
)};