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
      textAlign={"center"}
      position="relative"
      overflowX="hidden"
    >
      <StyledBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "Spring", duration: "8" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Input
            width="full"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Input
            width="full"
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Button width="full" type="submit">
            Submit
          </Button>
        </form>
      </StyledBox>
    </Box>
  );
}
