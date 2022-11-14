import { Box, Fade, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layouts/layout";
import { StyledBox } from "../components/theme-toggle-button";
import Minimap from "../components/Minimap";
import EnterPage from "../components/EnterPage";
import useSound from "use-sound";
import { NextPage } from "next";
declare module "*.mp3";

export default function Home() {
  const [play] = useSound("/sound/yukon.mp3");
  return (
    <Layout title="| Home">
      <Box
        h="100vh"
        w="100%"
        display={"flex"}
        textAlign={"center"}
        position="relative"
        overflowX="hidden"
      >
        <EnterPage isVisible={false} />
        <StyledBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "Spring", duration: "8" }}
        >
<<<<<<< HEAD
          <div id="mini"><Minimap /></div>
=======
          <div id="mini">{/*<Minimap />*/}</div>
        </StyledBox>
        <StyledBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "Spring", duration: "2" }}
          alignSelf="center"
          position="absolute"
          bottom="10%"
          px="10%"
        >
          <Heading fontSize="lg" fontWeight={"thin"}>
            We're at the core. <br></br>
            ユーコン。
          </Heading>
>>>>>>> 657b94b1b383e644a7730faea53d5f09e8d4b44d
        </StyledBox>
      </Box>
    </Layout>
  );
}