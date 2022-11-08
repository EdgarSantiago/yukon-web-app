import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { BsMoonStarsFill, BsFillMoonFill, BsSunriseFill } from "react-icons/bs";

const ThemeToggleButton = ({ color }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence moe="wait" initial={false}>
      <Button
        rightIcon={useColorModeValue(<BsMoonStarsFill />, <BsSunriseFill />)}
        variant="ghost"
        bg={useColorModeValue("black", "white")}
        onClick={toggleColorMode}
      >
        {useColorModeValue("Escuro", "Branco")}
      </Button>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
