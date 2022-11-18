import { StyledBox } from "../../components/theme-toggle-button";
import useSound from "use-sound";
import SignupCard from "../../components/SignUpCard";
import { NextPage } from "next";
declare module "*.mp3";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Link as Acolor,
  FormHelperText,
  Input,
  Heading,
  Text,
} from "@chakra-ui/react";

import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <Box
        h="130vh"
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
                Create yout account
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
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                borderRadius="lg"
                width="100%"
                id="text"
                name="text"
                type="text"
              />
              <FormHelperText>Type your username.</FormHelperText>
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Email address</FormLabel>
              <Input
                borderRadius="md"
                width="100%"
                id="email"
                name="email"
                type="email"
              />
              <FormHelperText>Well never share your email.</FormHelperText>
            </FormControl>

            <FormControl mt={3}>
              <FormLabel>Password</FormLabel>
              <Input
                borderRadius="md"
                mt={0}
                width="100%"
                id="password"
                name="password"
                type="password"
              />
              <FormHelperText>Type an password</FormHelperText>
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Repeat Password</FormLabel>
              <Input
                borderRadius="md"
                mt={0}
                width="100%"
                id="password"
                name="password"
                type="password"
              />
              <FormHelperText>Type an password {">"} 10char</FormHelperText>
            </FormControl>
            <Button mt={3} width="100%" type="submit">
              Submit
            </Button>
          </form>
          <Text mt={4}>
            Already have an account ?{" "}
            <Link href="/auth/signin" passHref legacyBehavior>
              <Acolor color="#e24848d6">Login Here</Acolor>
            </Link>
          </Text>
        </StyledBox>
      </Box>
    </>
  );
}
