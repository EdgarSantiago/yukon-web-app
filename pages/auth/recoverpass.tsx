import { StyledBox } from "../../components/theme-toggle-button";
import useSound from "use-sound";
import SignupCard from "../../components/SignUpCard";
import { NextPage } from "next";
declare module "*.mp3";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  FormErrorMessage,
  InputRightElement,
  Link as Acolor,
  FormHelperText,
  Input,
  Heading,
  Text,
} from "@chakra-ui/react";

import Navbar from "../../components/Navbar";
import Link from "next/link";

import { useState } from "react";

export default function RecoverPass() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />
      <Box
        h="100vh"
        w="100%"
        display={"flex"}
        position="relative"
        overflowX="hidden"
        backgroundRepeat={"no-repeat"}
        backgroundSize="cover"
        backgroundImage={`linear-gradient(
        to top,
        #000000d1,
        #00000095
      ),url('https://media2.giphy.com/media/VDMgQfvY4s9twR9WUk/giphy.gif?cid=790b761140b1b86a1240a550317981f1af7b0971745311a1&rid=giphy.gif&ct=g')});`}
      >
        <StyledBox
          bg="transparent"
          borderRadius={"lg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "Spring", duration: "0.5" }}
          m="auto"
          p={"2%"}
          w="30%"
          border="1px"
          borderColor="#fafafa13"
          shadow="xl"
          whileHover={{ borderColor: "#fafafa" }}
        >
          <form>
            <Box mb={2} borderRadius="lg">
              <Heading fontSize="md" mb={2}>
                Recover your password
              </Heading>
              <Heading
                alignItems={"center"}
                fontSize="4xl"
                color="#d8e1e7"
                fontFamily={"spaceage"}
              >
                Y
              </Heading>
            </Box>
            <FormControl mb={2} id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>Type your email.</FormHelperText>
            </FormControl>

            <Button mt={1} width="100%" type="submit">
              Recover password
            </Button>
          </form>
          <Text mt={4}>
            Dont have an account ?{" "}
            <Link href="/auth/signin" passHref legacyBehavior>
              <Acolor color="#e24848d6">Create Here</Acolor>
            </Link>
          </Text>
        </StyledBox>
      </Box>
    </>
  );
}
