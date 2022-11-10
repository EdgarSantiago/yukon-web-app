import { ChevronDownIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import {
  Flex,
  Box,
  Button,
  Spacer,
  useColorModeValue,
  Heading,
  Image,
  chakra,
  HStack,
  Show,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
} from "@chakra-ui/react";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import ThemeToggleButton, { StyledBox } from "./theme-toggle-button";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [bgColor, setBgColor] = useState("");
  const [bgColor2, setBgColor2] = useState("");
  const [color, setColor] = useState("#111010");
  const [isShadow, setIsShadow] = useState("");
  const [play, { stop }] = useSound("/sound/bleep.mp3");
  const listenScrollEvent = (event: any) => {
    if (window.scrollY < 250) {
      return (
        setColor("#111111"),
        setIsShadow(""),
        setBgColor("transparent"),
        setBgColor2("transparent")
      );
    } else if (window.scrollY > 250) {
      return (
        setColor("#1a1818"),
        setIsShadow("md"),
        setBgColor("linear(to-r, #faedbe , #f83636)"),
        setBgColor2("linear(to-r, #111111, #111111)")
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <Box
        shadow={isShadow}
        bgGradient={useColorModeValue(bgColor, bgColor2)}
        position="fixed"
        top={0}
        w="100%"
        zIndex={2}
        py={["10px", "25px"]}
        px={["10px", "10px", "20px", "100px"]}
      >
        <Flex
          minWidth="max-content"
          px={[4, 4]}
          py={1}
          alignItems="center"
          gap="2"
        >
          <Link href="/">
            <Box>
              <Heading fontFamily={"spaceage"} fontSize={"xx-large"} >YUKON</Heading>
            </Box>
          </Link>
          <Show above="1000px">
            <Spacer />

            <HStack spacing="50px">
              <NavButton title="Home" />
              <NavButton title="About" />
              <NavButton title="Services" />
              <NavButton title="Contact" />
            </HStack>
            {/*<ThemeToggleButton />*/}
          </Show>

          <Show below="1000px">
            <Spacer />
            {/*<ThemeToggleButton />*/}
            <Box>
              <Menu>
                {/* <MenuButton as={Button} px="10px">
                  <HamburgerIcon w={4} h={4} />
                </MenuButton> */}
                <MenuList>
                  <Link href="/">
                    <MenuItem>Início</MenuItem>
                  </Link>
                  <MenuItem>Blog</MenuItem>
                  <MenuItem>Sobre Min</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Show>
        </Flex>
      </Box>
    </>
  );
}

interface NavButton {
  link?: String;
  title?: String;
}

import useSound from "use-sound";
declare module "*.mp3";

function NavButton({ link, title }: NavButton) {
  const [play, { stop }] = useSound("/sound/bleep.mp3");
  return (
    <Link href={`${link}`}>
      <StyledBox
        onHoverStart={() => play()}
        onHoverEnd={() => stop()}
        animate={{
          textShadow: `0px 0px 0px transparent`,
          borderBottom: ["0px solid transparent", "1px solid transparent"],
        }}
        whileHover={{
          textShadow: `0 0 0 #fafafa86, 0 0 5px #fafafa86, 0 0 5px #00f4fc94, 0 0 5px #00f4fc94, 0 0 5px #00f4fc94, 0 0 5px #00f4fc94, 0 0 5px #00f4fc94`,
          scale: 1.05,
          borderBottom: "1px solid #00F3FC",
        }}
        transition={{
          duration: "0.2",
          ease: "easeInOut",
        }}
      >
        <Text fontWeight="thin">{title}</Text>
      </StyledBox>
    </Link>
  );
}
