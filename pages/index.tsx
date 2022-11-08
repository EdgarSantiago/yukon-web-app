import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layouts/layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Box
        backgroundImage="url('https://cdn.discordapp.com/attachments/1039562578340347969/1039687626355130389/image.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="100% 100%"
        h="100vh"
        textAlign={"center"}
      ></Box>
    </Layout>
  );
}
