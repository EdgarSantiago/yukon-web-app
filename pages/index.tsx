import { Box, Fade, Heading } from "@chakra-ui/react";
import Head from "next/head"; 
import Image from "next/image";
import Layout from "../components/layouts/layout";  
import { StyledBox } from "../components/theme-toggle-button";
import Minimap from "../components/Minimap";
import useSound from "use-sound";
declare module "*.mp3";

export default function Home() {
  const [play] = useSound("/sound/yukon.mp3");
  play();
  return (
    <Box h="100vh" display={"flex"} textAlign={"center"} position="relative">
      <Minimap />
      <Box alignSelf="center" position="absolute" bottom="10%" px="10%">
        <StyledBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "Spring", duration: "8" }}
          
        >
          <Heading fontSize="lg" fontWeight={"thin"}>
            We're at the core. <br></br>
            ユーコン。
          </Heading>
        </StyledBox>
      </Box>
    </Box>
  );
}
