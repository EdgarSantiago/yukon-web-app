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
  FormHelperText,
  Input,
  Heading,
} from "@chakra-ui/react";

import { useFormik } from 'formik';
import * as yup from "yup";
import { object, string, number, date, InferType } from "yup";
import Navbar from "../../components/Navbar";

const validationSchema = yup.object({
  name: string().required(),
  email: string().email(),
  passord: string().required(),
});

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
        borderRadius={'lg'}
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
        <form onSubmit={formik.handleSubmit} >
          <Box mb={2} borderRadius='lg' >
            <Heading fontSize="md" mb={2}>
              Create yout account
            </Heading>
            <Heading alignItems={'center'} fontSize="4xl" color="#d8e1e7" fontFamily={'spaceage'}>
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
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              borderRadius="md"
              width="100%"
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
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
              value={formik.values.password}
              onChange={formik.handleChange}
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
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <FormHelperText>Type an password {">"} 10char</FormHelperText>
          </FormControl>
          <Button mt={3} width="50%" type="submit">
            Submit
          </Button>
        </form>
      </StyledBox>
    </Box>
    </>
  );
}
