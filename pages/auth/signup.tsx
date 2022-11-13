import { StyledBox } from "../../components/theme-toggle-button";
import useSound from "use-sound";

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
} from "@chakra-ui/react";

import { useFormik } from "formik";
import * as yup from "yup";
import { object, string, number, date, InferType } from "yup";

const validationSchema = yup.object({
  name: string().required(),
  email: string().email(),
  passord: string().required(),
});

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box
      h="100vh"
      w="100%"
      display={"flex"}
      position="relative"
      overflowX="hidden"
      backgroundRepeat={"no-repeat"}
      backgroundSize="100%"
      backgroundImage={
        "linear-gradient(to bottom right, red, yellow, url('https://media0.giphy.com/media/5DXMyNcoXfUnqdyfec/giphy.gif?cid=790b76119f5c6eddf0bb178d0b2382374e0e0da7dd054c73&rid=giphy.gif&ct=g')"
      }
    >
      <StyledBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "Spring", duration: "8" }}
        m="auto"
        p={"2%"}
        w="30%"
        borderRadius="sm"
        border="2px"
        borderColor="#fafafa44"
      >
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              borderRadius="sm"
              width="100%"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <Input
            borderRadius="sm"
            my={3}
            width="100%"
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Button width="50%" type="submit">
            Submit
          </Button>
        </form>
      </StyledBox>
    </Box>
  );
}
