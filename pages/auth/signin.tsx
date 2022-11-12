import { Box, Fade, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layouts/layout";
import { StyledBox } from "../../components/theme-toggle-button";
import Minimap from "../../components/Minimap";
import EnterPage from "../../components/EnterPage";
import useSound from "use-sound";
import { NextPage } from "next";
declare module "*.mp3";

export default function SignIn() {
  const [play] = useSound("/sound/yukon.mp3");
  return (
    <Box
      h="100vh"
      w="100%"
      display={"flex"}
      textAlign={"center"}
      position="relative"
      overflowX="hidden"
    >
      <StyledBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "Spring", duration: "8" }}
      ></StyledBox>
    </Box>
  );
}
