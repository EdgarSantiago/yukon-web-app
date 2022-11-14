import { Box, Fade, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layouts/layout";
import { StyledBox } from "../../components/theme-toggle-button";
import Minimap from "../../components/Minimap";
import EnterPage from "../../components/EnterPage";
import useSound from "use-sound";
import { NextPage } from "next";
import LogInCard from '../../components/SignInCard'
declare module "*.mp3";

export default function SignIn() {
  const [play] = useSound("/sound/yukon.mp3");
  return (
        <LogInCard />
  );
}
