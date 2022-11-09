import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { BsMoonStarsFill, BsFillMoonFill, BsSunriseFill } from "react-icons/bs";
import { Container, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";

const ThemeToggleButton = ({ color = "#fafafa" }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
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

export const StyledBox = chakra(motion.div, {
  shouldForwardProp: (prop: any) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
